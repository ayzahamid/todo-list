import React, {useState} from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  height: 100%;
  height: 70rem;
  width: 300px;
  background: #e7e7e7cf;
  color: black;
  padding: 3rem 1rem;
  display: flex;
  justify-content: flex-start;
`

const NavLink = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
  font-size: ${(props) => (props.isActive) ? "18px": ""};
  font-weight: ${(props) => (props.isActive) ? "bold": ""};
  color: ${(props) => (props.isActive) ? "#06a606": ""};
  background: ${(props) => (props.isActive) ? "#c6c6c6": ""};
  border-radius: ${(props) => (props.isActive) ? "2rem": ""};
  padding: 9px 2rem;
  display: flex;
  justify-content: flex-start;
`

const SidebarHeading = styled.h2`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin: 2rem;
`

const Sidebar = (props) => {
  const [activeLink, setActiveLink] = useState("Todo Tasks");

  const handleRediect = (link) => {
    setActiveLink(link);
  }

  return (
    <SidebarContainer>
      <ul>
        <SidebarHeading>Todo Application</SidebarHeading>
        <NavLink isActive={activeLink === "Todo Tasks"} onClick={() => handleRediect("Todo Tasks")}>Todo Tasks</NavLink>
        <NavLink isActive={activeLink === "Coming Soon"} onClick={() => handleRediect("Coming Soon")}>Coming Soon</NavLink>
      </ul>
    </SidebarContainer>
  );
}

export default Sidebar;
