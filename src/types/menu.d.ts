type MenuItem = {
  isFolder: boolean;
  name: string; // must be unique
  label: string;
  icon?: string;
  link?: string;
  children?: MenuItem[];
  isRoot?: boolean;
};

type Menu = MenuItem[];
