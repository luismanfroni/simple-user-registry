import React, { useState } from 'react'
import { 
  CCard, 
  CCardBody,
  CTabContent,
  CTabPane,
  CTabs,
  CNav,
  CNavItem,
  CNavLink
} from '@coreui/react'
import { useUsersHook } from '../../staticData';
import { useHistory } from 'react-router-dom'
import UserProfile from "./UserProfile";
import UserNotFound from "./UserNotFound";
import UserRegistry from "./UserRegistry";

const User = (({match}) => {
  const usersHook = useUsersHook();
  const readOnlyUser = Number(match.params.id) === 0 ? {id: 0, firstName: '', lastName: '', username: '', email: '', phone: '', mobile: '', password: '', expire: true, expireDate: '', status: 'Active', profile: 0, company: 0 } : 
    usersHook.getUser(match.params.id);
  const [user, setUser] = useState({...readOnlyUser, password: ''});
  const history = useHistory();
  function save() {
    const newId = usersHook.users.reduce((p, c) => p > c.id ? p : c.id) + 1;
    if (user.id === 0)
      user.id = newId;
    usersHook.setUser(user);
    history.push('/users/' + newId);
  }
  function cancel() { 
    history.push(`/users`)
  }
  function updateUser(field, value) {
    const newUser = {...user, [field]: value};
    setUser(newUser);
  }
  if (!readOnlyUser) {
    return <UserNotFound id={match.params.id} />
  }
  return (
    <CTabs>
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink>
            User Registry
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink>
            Profile
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane>
          <CCard><CCardBody>
            <UserRegistry user={user} setUser={updateUser} save={save} cancel={cancel} />
          </CCardBody></CCard>
        </CTabPane>
        <CTabPane>
          <CCard><CCardBody>
            <UserProfile user={user} setUser={updateUser} save={save} cancel={cancel} />
          </CCardBody></CCard>
        </CTabPane>
      </CTabContent>
    </CTabs>
  )
})

export default User
