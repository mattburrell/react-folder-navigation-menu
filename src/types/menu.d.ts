interface IMenuItem {
  isFolder: boolean;
  name: string; // must be unique
  label: string;
  icon?: string;
  link?: string;
  children?: IMenuItem[];
  isRoot?: boolean;
}

type IMenu = IMenuItem[];
