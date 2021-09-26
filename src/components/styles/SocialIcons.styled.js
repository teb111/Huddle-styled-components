import styled from "styled-components";

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    list-style: none;
  }
  a {
    border: 1px solid
      ${({ theme }) =>
        theme?.colors?.headercolor ? theme?.colors?.headercolor : "#000"};
    border-radius: 50%;
    color: ${({ theme }) =>
      theme?.colors?.headercolor ? theme?.colors?.headercolor : "#000"};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
  }
`;
