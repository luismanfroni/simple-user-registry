import { companyData, profileData } from '../../staticData'
import { CForm, CFormGroup, CCol, CLabel, CInput, CSelect, CButton } from '@coreui/react'
const UserProfile = ({user, setUser, save, cancel}) => {
  return <CForm className="form-horizontal">
    <CFormGroup row>
      <CCol md="2">
        <CLabel htmlFor="username">Username*</CLabel>
      </CCol>
      <CCol xs="12" md="10">
        <CInput name="username" 
          value={user.username} 
          onChange={(t) => setUser('username', t.target.value)} />
      </CCol>
    </CFormGroup>

    <CFormGroup row>
      <CCol md="2">
        <CLabel>Full name*</CLabel>
      </CCol>
      <CCol xs="12" md="5">
        <CInput name="firstName" placeholder="First name"
          value={user.firstName} 
          onChange={(t) => setUser('firstName', t.target.value)} />
      </CCol>
      <CCol xs="12" md="5">
        <CInput name="lastName" placeholder="Last name"
          value={user.lastName} 
          onChange={(t) => setUser('lastName', t.target.value)} />
      </CCol>
    </CFormGroup>

    <CFormGroup row>  
      <CCol md="2">
        <CLabel>Profile</CLabel>
      </CCol>
      <CCol xs="12" md="5">
        <CSelect custom name="profile" id="profile"
          value={user.profile} 
          onChange={(t) => setUser('profile', t.target.value)} >
            {profileData.map((p =>
              <option key={p.id} value={p.id}>{p.name}</option>  
            ))}
        </CSelect>
      </CCol>
    </CFormGroup>

    <CFormGroup row>
      <CCol md="2">
        <CLabel>Company</CLabel>
      </CCol>
      <CCol xs="12" md="5">
        <CSelect custom name="company" id="company"
          value={user.company} 
          onChange={(t) => setUser('company', t.target.value)}>
            {companyData.map((c =>
              <option key={c.id} value={c.id}>{c.name}</option>  
            ))}
        </CSelect>
      </CCol>
    </CFormGroup>

    <CFormGroup row>
      <CCol md="8" />
      <CCol md="2">
        <CButton type="button" color="secondary" onClick={cancel}>Cancel</CButton>
      </CCol>
      <CCol md="2">
        <CButton type="button" color="primary" onClick={save}>Save</CButton>
      </CCol>
    </CFormGroup>
  </CForm>
};

export default UserProfile;