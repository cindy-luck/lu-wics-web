import React ,{useState,useEffect}from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import{Nav,NavbarContainer,NavLogo,NavIcon,MobileIcon,NavItem,NavMenu,NavLinks} from "./NavbarElements"

const Navbar = ()=>{
    const [click,setClick] = useState(false)
    const [scroll,setScroll] = useState(false)

    const handleClick =()=> setClick(!click)
    
    const changeNav = () => {
        if(window.scrooY>=80){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }

    useEffect(()=>{
        changeNav()
        window.addEventListener("scroll",changeNav)
    },[])

    return(
        <>
          <IconContext.Provider value={{ color:"#141414" }}>
            <Nav active={scroll} click={click}>
              <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon />
                    WiCS
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                  <NavItem>
                    <NavLinks to="/">About</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="/News">News</NavLinks>
                  </NavItem>
                 
                    <a href="https://engineering.lehigh.edu/cse/events/wdsc">WiDC</a>
                 
                </NavMenu>
              </NavbarContainer>
            </Nav>
          </IconContext.Provider>
        </>
    )
}
export default Navbar