const menu: IMenu = [
  {
    isFolder: true,
    label: "PROJECT",
    name: "root",
    isRoot: true,
    children: [
      {
        isFolder: true,
        label: "public",
        name: "public",
        link: "",
        children: [
          {
            isFolder: false,
            label: "index.html",
            name: "public_index",
            icon: "html",
            link: "/public/index.html",
          },
          {
            isFolder: true,
            label: "files",
            name: "files",
            link: "",
            children: [
              {
                isFolder: false,
                label: "file1.html",
                name: "file1",
                icon: "html",
                link: "/public/file1.html",
              },
              {
                isFolder: false,
                label: "file2.html",
                name: "file2",
                icon: "html",
                link: "/public/file2.html",
              },
            ],
          },
        ],
      },
      {
        isFolder: false,
        name: "about",
        label: "about.html",
        icon: "html",
        link: "/about",
      },
      {
        isFolder: false,
        name: "home",
        label: "index.html",
        icon: "html",
        link: "/",
      },
    ],
  },
];

export default menu;
