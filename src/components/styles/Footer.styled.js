import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) =>
    theme?.colors?.cardColor ? theme.colors.cardColor : "#0d1321"};
  color: ${({ theme }) =>
    theme?.colors?.headercolor ? theme?.colors?.headercolor : "#000"};
  padding: 100px 0 60px;
  ul {
    list-style-type: none;
  }
  ul li {
    margin-bottom: 20px;
  }
  p {
    text-align: right;
  }
  @media (max-width: 768px) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;
