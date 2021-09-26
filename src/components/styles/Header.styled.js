import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 40px 0;
  background-color: ${({ theme }) =>
    theme?.colors?.header ? theme.colors.header : "#0d1321"};
  transition: 0.8s ease-in-out;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Image = styled.img`
  width: 250px;
  margin-left: 40px;
  @media (max-width: 768px) {
    margin: 40px 0 30px;
  }
`;
