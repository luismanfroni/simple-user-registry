import { CForm, CFormGroup, CCol, CLabel, CInput, CInputRadio, CSelect, CButton } from '@coreui/react'
const UserRegistry = ({user, setUser, save, cancel}) => {
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
        <CLabel htmlFor="email">E-mail Address*</CLabel>
      </CCol>
      <CCol xs="12" md="10">
        <CInput id="email" name="email" type="email"
          value={user.email} 
          onChange={(t) => setUser('email', t.target.value)} />
      </CCol>
    </CFormGroup>

    <CFormGroup row>
      <CCol md="2">
        <CLabel htmlFor="phone">Phone Number</CLabel>
      </CCol>
      <CCol xs="12" md="4">
        <CInput id="phone" name="phone" type="tel" placeholder="(000) 000-0000"
          value={user.phone} 
          onChange={(t) => setUser('phone', t.target.value)} />
      </CCol>

      <CCol md="2">
        <CLabel>Mobile Number*</CLabel>
      </CCol>
      <CCol xs="12" md="4">
        <CInput id="mobile" name="mobile" type="tel" placeholder="(000) 000-0000"
          value={user.mobile} 
          onChange={(t) => setUser('mobile', t.target.value)} />
      </CCol>
    </CFormGroup>

    <CFormGroup row>
      <CCol md="2">
        <CLabel htmlFor="password">Password</CLabel>
      </CCol>
      <CCol xs="12" md="10">
        <CInput id="password" type="password" name="password" 
          value={user.password} 
          onChange={(t) => setUser('password', t.target.value)} />
      </CCol>
    </CFormGroup>
    <CFormGroup row>
      <CCol md="2">
        <CLabel htmlFor="confirm">Confirm Password</CLabel>
      </CCol>
      <CCol xs="12" md="10">
        <CInput id="confirm" type="password" name="confirm"/>
      </CCol>
    </CFormGroup>

    <CFormGroup row>
      <CCol md="2">
        <CLabel htmlFor="expire">Expire</CLabel>
      </CCol>
      <CCol md="4">
        <CFormGroup variant="custom-radio" inline>
          <CInputRadio custom id="expires" name="expire" value="yes" checked={user.expire} 
            onChange={(t) => setUser('expire', true)}/>
          <CLabel variant="custom-checkbox" htmlFor="expires">Yes</CLabel>
        </CFormGroup>
        <CFormGroup variant="custom-radio" inline>
          <CInputRadio custom id="neverexpires" name="expire" value="never" checked={!user.expire} 
            onChange={(t) => setUser('expire', false)}/>
          <CLabel variant="custom-checkbox" htmlFor="neverexpires">Never</CLabel>
        </CFormGroup>
      </CCol>
      {
        user.expire && <>
          <CCol md="2">
            <CLabel htmlFor="expireDate">Expire Date</CLabel>
          </CCol>
          <CCol md="4">
            <CInput id="expireDate" name="expireDate" type="date" 
              value={user.expireDate} 
              onChange={(t) => setUser('expireDate', t.target.value)} />
          </CCol>
        </>
      }
    </CFormGroup>

    <CFormGroup row>
      <CCol md="2">
        <CLabel htmlFor="status">Status</CLabel>
      </CCol>
      <CCol md="2">
        <CSelect custom name="status" id="status"
          value={user.status} 
          onChange={(t) => setUser('status', t.target.value)}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
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

export default UserRegistry;