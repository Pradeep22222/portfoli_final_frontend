import styled from "styled-components";

export const StyledParagraph = styled.p`
  color: ${(props) => (props.dark ? "#2626237" : "#2626237")};
  margin-bottom: 1rem;
  font-size: ${(props) => props.fontSize || "1.125rem"};
  letter-spacing: ${(props) => props.spacing};
  text-align: ${(props) => props.textAlign};

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${(props) => props.fontSizeMobile || "0.9375rem"};
  }
`;


