import { useState } from "react";
import { IMenu, IMenuItem } from "./menu";

export interface IFolderMenuProps {
  data: IMenu;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export default function FolderMenu({
  data,
  active,
  setActive,
  selected,
  setSelected,
}: IFolderMenuProps): JSX.Element {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  if (!data) return <></>;

  return (
    <div className="submenu">
      {data.map((item: IMenuItem) => {
        if (item.isFolder) {
          return (
            <div key={item.name}>
              <div
                className={`row ${
                  item.isRoot ? "root" : active === item.name ? "active" : ""
                } ${selected === item.name ? "selected" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(item.name);
                  setSelected(item.name);
                  setCollapsed({
                    ...collapsed,
                    [item.name]: !collapsed[item.name],
                  });
                }}
              >
                <div
                  className={`folder ${collapsed[item.name] ? "" : "closed"}`}
                ></div>
                <a href={item.link}>{item.label}</a>
              </div>
              {item.children && (
                <div
                  style={{
                    display: `${!collapsed[item.name] ? "none" : "block"}`,
                  }}
                >
                  <FolderMenu
                    data={item.children}
                    active={active}
                    setActive={setActive}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </div>
              )}
            </div>
          );
        }
        return (
          <div
            key={item.name}
            className={`row ${active === item.name ? "active" : ""} ${
              selected === item.name ? "selected" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              setActive(item.name);
              setSelected(item.name);
            }}
          >
            <div className="code"></div>
            <a href={item.link}>{item.label}</a>
          </div>
        );
      })}
    </div>
  );
}
