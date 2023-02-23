import { Dispatch, SetStateAction } from "react";
import styles from "./folder-menu.module.css";

interface FolderMenuProps {
  data: Menu;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  collapsed: Record<string, boolean>;
  setCollapsed: Dispatch<SetStateAction<Record<string, boolean>>>;
  mouseHover: boolean;
}

export default function FolderMenu({
  data,
  active,
  setActive,
  selected,
  setSelected,
  collapsed,
  setCollapsed,
  mouseHover,
}: FolderMenuProps): JSX.Element {
  // base case
  if (!data) return <></>;

  return (
    <div className={styles.submenu}>
      {data.map((item: MenuItem) => {
        if (item.isFolder) {
          return (
            <div key={item.name}>
              <div
                className={`${styles.row}${
                  item.isRoot
                    ? " " + styles.root
                    : active === item.name
                    ? " " + styles.active
                    : ""
                }${selected === item.name ? " " + styles.selected : ""}`}
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
                  className={`${styles.folder} ${
                    !!collapsed[item.name] ? "" : styles.closed
                  }`}
                ></div>
                {item.isRoot ? (
                  <h3 className={styles.subheader}>{item.label}</h3>
                ) : (
                  <a className={styles.link} href={item.link}>
                    {item.label}
                  </a>
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
                    mouseHover={mouseHover}
                  />
                </div>
              )}
            </div>
          );
        }
        return (
          <div
            key={item.name}
            className={`${styles.row}${
              active === item.name ? " " + styles.active : ""
            }${selected === item.name ? " " + styles.selected : ""}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActive(item.name);
              setSelected(item.name);
            }}
          >
            <div className={`${mouseHover ? " " + styles.border : ""}`}></div>
            <div className={styles.code}></div>
            <a className={styles.link} href={item.link}>
              {item.label}
            </a>
          </div>
        );
      })}
    </div>
  );
}
