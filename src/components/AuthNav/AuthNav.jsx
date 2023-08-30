import { StyledNavLink } from "components/AppTool/NavLink.styled";

export const AuthNav = () => {
    return (
      <>
        <StyledNavLink to="/register">Register</StyledNavLink>
        <StyledNavLink to="/login">Login</StyledNavLink>
      </>
    );
}