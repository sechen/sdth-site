import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { Link } from "gatsby"
import BurgerMenu from "react-burger-menu/lib/menus/slide"
import "./burger.css"

const Burger = () => {
  const [openMenu, setOpenMenu] = React.useState(false)
  const closeMenu = () => setOpenMenu(false)

  return (
    <BurgerMenu
      right
      isOpen={openMenu}
      onStateChange={state => {
        setOpenMenu(state.isOpen)
        if (state.isOpen) {
          document.body.classList.add("no-scroll")
        } else {
          document.body.classList.remove("no-scroll")
        }
      }}
    >
      <Cta onClick={closeMenu} to="/get-involved">
        Get Involved
      </Cta>
      <MenuItem onClick={closeMenu} to="/about">
        About
      </MenuItem>
      <MenuItem onClick={closeMenu} to="/team">
        Team
      </MenuItem>

      <Pillars>
        PILLARS of EXCELLENCE <FontAwesomeIcon icon="caret-down" />
      </Pillars>
      <MenuItem indent="true" firstpillar="true" onClick={closeMenu} to="/community">
        Community
      </MenuItem>
      <MenuItem indent="true" onClick={closeMenu} to="/education">
        Education
      </MenuItem>
      <MenuItem indent="true" onClick={closeMenu} to="/inclusion">
        Inclusion
      </MenuItem>
      <MenuItem indent="true" onClick={closeMenu} to="/innovation">
        Innovation
      </MenuItem>
      <MenuItem indent="true" onClick={closeMenu} to="/talent">
        Talent
      </MenuItem>

      <MenuItem onClick={closeMenu} to="/events">
        Events
      </MenuItem>
      <MenuItem onClick={closeMenu} to="/partners">
        Our Partners
      </MenuItem>
    </BurgerMenu>
  )
}

const Cta = styled(Link)`
  background: ${props => props.theme.greenDark};
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
  font-size: 2rem;
  margin: 3rem 0;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
`

const MenuItem = styled(Link)`
  font-size: 2rem;
  margin: 3rem 0;
  margin-top: ${props => { return props.firstpillar ? "1rem" : "3rem" }};
  margin-left: ${props => { return props.indent ? "3rem" : "0" }};
  text-transform: uppercase;
`

const Pillars = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0;

`

export default Burger
