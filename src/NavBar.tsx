import "./NavBar.css";
import menu from "./menu";
import FolderMenu from "./FolderMenu";
import { useState } from "react";
import { useOutsideClick } from "./hooks/useOutsideClick";

export default function NavBar() {
  const [active, setActive] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const [mouseHover, setMouseHover] = useState<boolean>(false);

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
      <h2>MENU</h2>
      <FolderMenu
        data={menu}
        active={active}
        setActive={setActive}
        selected={selected}
        setSelected={setSelected}
      />
    </nav>
  );
}
