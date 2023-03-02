import styled from "styled-components";

export const TechnologiesContainer = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.dark};
  color: ${({ theme }) => theme.color.light};
`;

export const TechnologiesHeader = styled.h2`
  text-align: center;
  font-weight: 700;
`;
