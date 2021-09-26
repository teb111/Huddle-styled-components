import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  background-color: ${({ theme }) =>
    theme?.colors?.cardColor ? theme.colors.cardColor : "#0d1321"};
  color: ${({ theme }) =>
    theme?.colors?.headercolor ? theme?.colors?.headercolor : "#000"};
  letter-spacing: 1.4px;
  flex-direction: ${({ layout }) => layout || "row"};

  img {
    width: 80%;
  }
  & > div {
    flex: 1;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
