import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';

import { UserWrapper, UserTitle, LogOutBtn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  const { user } = useAuth();
  return (
    <UserWrapper>
      <UserTitle>You logged in as {user.name}!</UserTitle>
      <LogOutBtn onClick={handleLogOut}>Log Out</LogOutBtn>
    </UserWrapper>
  );
};