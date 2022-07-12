import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
background: #000;
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font=size: 1em;
position: sticky;
top: 0;
z-index: 10;

@media screen amd (max-width: 960px){
transition: 0.8s all ease;
}
`;

export const NavbarContainer = styled.div`
display: flex;
items-align: left;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding 0 24px;
max-width: 1100px;
`;

export const NavLogo = styled(LinkR) `
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1-5rem;
display: flex;
align-items: left;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
display: block;
position: absolute;
top: 0;
right: 0;
transform: translate(-100%, 60%);
font-size: 1.8rem;
cursor: pointer;
color: #fff;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;


@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavItem = styled.li`
height: 80px;
margin-top: 50px
`;

export const NavLinks = styled(LinkR)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100px:
cursor: pointer;

&.active{
	border-bottom: 3px solid #01bf71;
}

`;



export const DropDownWrapper = styled.div`
  position: relative;
`;

export const DropDownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;

  border-width: 1px;
  border-radius: 0.375rem;
  --tw-border-opacity: 1;
  border-color: rgba(209, 213, 219, var(--tw-border-opacity));

  padding: 0.5rem;

  /* Font */
  font-size: 1rem;
  /* line-height: 1.4rem; */
  --tw-text-opacity: 1;
  color: rgba(55, 65, 81, var(--tw-text-opacity));

  /* Shadow */
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  &:focus {
    outline: none;
  }

  &:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
  }
`;

export const SVG = styled.svg`
  margin-left: 4px;
  height: 1rem;
  width: 1.2rem;
`;

export const OptionMenu = styled.div`
  transform-origin: top bottom;
  position: absolute;
  right: 3px;
  top: 52px;
  background-color: white;
  margin-top: -0.5rem;
  margin-right: -0.25rem;
  width: 99.8%;
  max-height: 16rem;
  overflow: scroll;
  z-index: 40;

  /* Shadow */
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  border-width: 0.5px;
  border-style: solid;
  border-radius: 0.375rem;
  --tw-border-opacity: 1;
  border-color: rgba(209, 213, 219, var(--tw-border-opacity));

  &:hover {
    outline: none;
  }
`;

export const OptionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;

  background-color: green;

  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  border-style: solid;
  --tw-border-opacity: 1;
  border-color: rgba(209, 213, 219, var(--tw-border-opacity));

  &:hover {
    background-color: #73aed4;
  }
`;

export const Label = styled.label`
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  /* background-color: pink; */
  /* Font */
  font-size: 0.875rem;
  line-height: 1.25rem;

  --tw-text-opacity: 1;
  color: rgba(55, 65, 81, var(--tw-text-opacity));
`;

export const SvgTest = styled.button`
  width: 30px;
  height: 40px;
  border: none;
  background-color: transparent;

  /* background-color: blue; */
`;
