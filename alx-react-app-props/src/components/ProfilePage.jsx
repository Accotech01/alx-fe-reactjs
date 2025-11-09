import React, { useContext } from 'react';
import UserInfo from './UserInfo';
import UserContext from './UserContext';

function ProfilePage() {
  const userData = useContext(UserContext);

  return (
    <div>
      <h1>Profile Page</h1>
      <UserInfo />
    </div>
  );
}

export default ProfilePage;