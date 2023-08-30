import { useAuth } from 'hooks/useAuth';
import { StyledNavLink } from 'components/AppTool/NavLink.styled';

import { NavigationWrapper } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavigationWrapper>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </NavigationWrapper>
  );
};