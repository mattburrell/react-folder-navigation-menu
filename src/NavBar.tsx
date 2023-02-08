import "./NavBar.css";
import menu from "./menu";
import FolderMenu from "./FolderMenu";
import { useState } from "react";
import { useOutsideClick } from "./hooks/useOutsideClick";

export default function NavBar() {
  const [active, setActive] = useState<string>("");
  const [selected, setSelected] = useState<string>("");

  const handleClickOutside = () => {
    setSelected("");
  };

  const ref = useOutsideClick(handleClickOutside);

  return (
    <nav className="nav" ref={ref as any}>
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
