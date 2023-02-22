import { Dispatch, SetStateAction } from "react";
import { IMenu, IMenuItem } from "./menu";

export interface IFolderMenuProps {
  data: IMenu;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  collapsed: Record<string, boolean>;
  setCollapsed: Dispatch<SetStateAction<Record<string, boolean>>>;
}

export default function FolderMenu({
  data,
  active,
  setActive,
  selected,
  setSelected,
  collapsed,
  setCollapsed,
}: IFolderMenuProps): JSX.Element {
  if (!data) return <></>;

  return (
    <div className="submenu">
      {data.map((item: IMenuItem) => {
        if (item.isFolder) {
          return (
            <div key={item.name}>
              <div
                className={`row${
                  item.isRoot ? " root" : active === item.name ? " active" : ""
                }${selected === item.name ? " selected" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActive(item.name);
                  setSelected(item.name);
                  setCollapsed({
                    ...collapsed,
                    [item.name]: !collapsed[item.name],
                  });
                }}
              >
                <div></div>
                <div
                  className={`folder ${!!collapsed[item.name] ? "" : "closed"}`}
                ></div>
                {item.isRoot ? (
                  <h3>{item.label}</h3>
                ) : (
                  <a href={item.link}>{item.label}</a>
                )}
              </div>
              {item.children && !!!collapsed[item.name] && (
                <div>
                  <FolderMenu
                    data={item.children}
                    active={active}
                    setActive={setActive}
                    selected={selected}
                    setSelected={setSelected}
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                  />
                </div>
              )}
            </div>
          );
        }
        return (
          <div
            key={item.name}
            className={`row${active === item.name ? " active" : ""}${
              selected === item.name ? " selected" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActive(item.name);
              setSelected(item.name);
            }}
          >
            <div className="border"></div>
            <div className="code"></div>
            <a href={item.link}>{item.label}</a>
          </div>
        );
      })}
    </div>
  );
}
