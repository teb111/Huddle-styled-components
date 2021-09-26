import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;

  & > div,
  & > ul {
    flex: 1;
  }

  & h1,
  & p {
    color: ${({ theme }) =>
      theme?.colors?.headercolor ? theme?.colors?.headercolor : "#000"};
    transition: 0.5s ease-in-out;
    letter-spacing: 1.3px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
