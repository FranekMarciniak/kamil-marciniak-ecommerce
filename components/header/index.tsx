import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../public/logo.svg";
import Image from "next/image";
import { BsCart } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
const dontShowIfMobile = `
  @media only screen and (max-width: 738px) {
    display:none;
}
`;
const showIfMobile = `
  @media only screen and (min-width: 738px) {
    display:none;
  }
`;
const StyledContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
`;
const StyledHeader = styled.header`
  width: 100%;
  max-width: 1222px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  max-height: 70px;
  padding: 15px 25px;
`;
const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledNavConteiner = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex: 1 1 0%;
  max-height: inherit;
  flex-direction: row-reverse;
  ${dontShowIfMobile}
`;
const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const StyledLi = styled.li`
  list-style: none;
  margin: 0 10px;
  letter-spacing: 0.08em;
`;
const StyledCartContainer = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: inherit;
  border: none;
  svg {
    margin: 0 0 6px 0;
  }
  @media only screen and (min-width: 738px) {
    padding-left: 15px;
  }
`;
const StyledSide = styled.nav<{ open: boolean }>`
  height: 100%;
  width: ${({ open }) => (open ? "300px" : "0")};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  position: absolute;
  top: 0;
  background-color: #fff;
  z-index: 10;
`;

const StyledSideNav = styled(StyledSide)`
  left: 0;
  transform: ${({ open }) => (open ? "translateX(0)" : "translate(-100%)")};
`;
const StyledSideCart = styled(StyledSide)`
  right: 0;
  transform: ${({ open }) => (open ? "translateX(0)" : "translate(100%)")};
`;
const StyledHamburgerWrapper = styled(StyledCartContainer)`
  ${showIfMobile}
`;
const BackgroundModal = styled.div<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0);
  opacity: ${({ open }) => (open ? "0.3" : "0")};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: all 0.2s ease;
  z-index: 9;
`;

function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  return (
    <>
      <BackgroundModal
        open={openNav || openCart}
        onClick={() => {
          setOpenNav(false);
          setOpenCart(false);
        }}
      />
      <StyledSideNav open={openNav}></StyledSideNav>
      <StyledSideCart open={openCart}></StyledSideCart>
      <StyledContainer>
        <StyledHeader>
          <StyledHamburgerWrapper
            as={"button"}
            onClick={() => setOpenNav(true)}
          >
            <GiHamburgerMenu size={25} />
          </StyledHamburgerWrapper>
          <StyledLogoContainer>
            <Image src={Logo} />
          </StyledLogoContainer>
          <StyledNavConteiner>
            <StyledUl>
              <StyledLi>O nas</StyledLi>
              <StyledLi>Sklep</StyledLi>
              <StyledLi>Konsultacje</StyledLi>
              <StyledLi>Kontakt</StyledLi>
            </StyledUl>
          </StyledNavConteiner>
          <StyledCartContainer>
            <StyledCartContainer
              as={"button"}
              onClick={() => setOpenCart(true)}
            >
              <BsCart size={22} />
            </StyledCartContainer>
          </StyledCartContainer>
        </StyledHeader>
      </StyledContainer>
    </>
  );
}

export default Header;
