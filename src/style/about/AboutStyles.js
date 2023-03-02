import styled from "styled-components";

export const StyledAbout = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.dark};
  color: ${({ theme }) => theme.color.lightGray};
`;

export const AboutContent = styled.div`
  display: flex;
  margin-top: 6.5rem;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    margin-top: 0;
  }
`;

export const AboutImageContainer = styled.div`
  position: relative;
  width: 45%;
  z-index: 3;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    margin-bottom: 1.75rem;

    &::after {
      content: "";
      top: -0.5rem;
      left: -0.5rem;
    }
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  border-radius: 1px;
  transform: translate(2rem, -11rem);
  @media all and (max-width: ${({ theme }) => theme.breakpoints.aboutfirst}) {
    transform: translate(2rem, -5rem);
  }
  @media all and (max-width: ${({ theme }) => theme.breakpoints.aboutsecond}) {
    transform: translate(-2rem, -3rem);
  }
  @media all and (max-width: ${({ theme }) => theme.breakpoints.aboutthird}) {
    transform: translate(-2rem, -1rem);
  }
`;

export const AboutDetailsContainer = styled.div`
  position: relative;
  width: 55%;
  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`;

export const Resume = styled.div`
  display: inline-block;
  margin-top: 1rem;
  position: relative;
  transition: 0.3s ease;
  ${"" /* background: ${({ theme }) => theme.backgroundColor.purple} */}

  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    bottom: -0.5rem;
    height: 1px;
    border-radius: 5px;
    background: ${({ theme }) => theme.backgroundColor.orange};
    width: 100%;
    transition: transform 0.3s ease;
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 1rem;
  }
`;

export const ResumeLink = styled.a`
  color: #fff;
  letter-spacing: 2px;
  font-weight: 600;
  cursor: pointer;

  &::before {
    content: ${(props) => `url(${props.icon})`};
    position: absolute;
    right: -2rem;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
    transition: all 0.3s;
  }

  &:hover::before {
    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  &:hover::after {
    color: ${({ theme }) => theme.color.light};
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1rem;
  }
`;
