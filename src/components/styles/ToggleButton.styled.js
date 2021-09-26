import styled from "styled-components";

export const ToggleButton = styled.input`
  padding: 10px;
  background: none;
  border: 2px solid
    ${({ theme }) =>
      theme?.colors?.headercolor ? theme?.colors?.headercolor : "#000"};
  width: 100%;
  letter-spacing: 1.5px;
  cursor: pointer;
  color: ${({ theme }) =>
    theme?.colors?.headercolor ? theme?.colors?.headercolor : "#000"};
`;
