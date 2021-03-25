import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CButton,
  CInput,
  CSelect,
  CForm,
  CFormGroup,
  CLabel
  
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { useUsersHook } from '../../staticData'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    default: return 'primary'
  }
}
function isWhiteSpace(str) { return !Boolean(str.length) }
const Users = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)
  const { users, removeUser } = useUsersHook()

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`)
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  const [filters, setFilters] = useState({status: '', search: ''});
  const [filteredUsers, setFilteredUsers] = useState(users);
  function updateFilters(filter, value) {
    const newFilters = {...filters, [filter]: value}
    setFilters(newFilters)
  }
  useEffect(() => {
    setFilteredUsers(users.filter((user) => {
      const textSearchFields = ['firstName', 'lastName', 'username', 'email', 'phone', 'mobile']
      return (!isWhiteSpace(filters.status) && user.status === filters.status) ||
        (!isWhiteSpace(filters.search) && textSearchFields.find(field => user[field].includes(filters.search))) ||
        (isWhiteSpace(filters.status) && isWhiteSpace(filters.search))
    }))
  }, [users, filters])
  function add() {
    history.push('/users/0');
  }
  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader align="center">
            Users
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol className="mb-4">
                <CButton block color="primary" onClick={add}>Add</CButton>
              </CCol>
              <CCol md={4}></CCol>
              <CCol>
                <CForm inline>
                  <CFormGroup className="pr-2">
                    <CLabel htmlFor="status" className="pr-2">Status:</CLabel>
                    <CSelect custom name="status" id="status" value={filters.status} 
                      onChange={(v) => updateFilters('status', v.target.value)}>
                      <option value="">Any</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </CSelect>
                  </CFormGroup>
                </CForm>
              </CCol>
              <CCol>
                <CFormGroup>
                  <CInput placeholder="Search" value={filters.search}
                  onChange={(v) => updateFilters('search', v.target.value)} />
                </CFormGroup>
              </CCol>
            </CRow>
            <CDataTable
              items={filteredUsers}
              fields={[
                'firstName','lastName',
                'username', 'profile', 'status', 'actions'
              ]}
              hover
              striped
              itemsPerPage={5}
              activePage={page}
              clickableRows
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                'actions': (item) => (
                  <td>
                    <CIcon height="22px" name="cil-pencil" 
                      onClick={() => history.push(`/users/${item.id}`)} />

                    <CIcon height="22px" name="cil-trash" 
                      customClasses="ml-2" 
                      onClick={() => removeUser(item.id)} />
                  </td>
                )
              }}
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={Math.ceil(filteredUsers.length / 5)}
              doubleArrows={false} 
              align="center"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Users
