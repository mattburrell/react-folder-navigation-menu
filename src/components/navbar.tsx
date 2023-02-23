import "./navbar.css";
import FolderMenu from "./folder-menu";
import { useState } from "react";
import { useOutsideClick } from "../hooks/use-outside-click";

interface NavBarProps {
  title?: string;
  menu: Menu;
}

export default function NavBar({ menu, title = "MENU" }: NavBarProps) {
  const [active, setActive] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const [mouseHover, setMouseHover] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const handleOnMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    setMouseHover(true);
  };

  const handleOnMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    setMouseHover(false);
  };

  const handleOnClick = () => {
    setSelected("nav");
  };

  const handleClickOutside = () => {
    setSelected("");
  };

  const ref = useOutsideClick(handleClickOutside);

  return (
    <nav
      className={`nav${selected === "nav" ? " selected" : ""}${
        mouseHover ? " hover" : ""
      }`}
      ref={ref as any}
      onClick={handleOnClick}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <h2>{title}</h2>
      <FolderMenu
        data={menu}
        active={active}
        setActive={setActive}
        selected={selected}
        setSelected={setSelected}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
    </nav>
  );
}
