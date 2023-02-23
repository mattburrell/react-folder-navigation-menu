import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "./navbar";

const title = "MENU";
const blog = "Blog";
const post = "Post";
const blogMenu: IMenu = [
  {
    isRoot: true,
    isFolder: true,
    name: "Blog",
    label: blog,
    children: [
      {
        isRoot: false,
        isFolder: false,
        name: "Post",
        label: post,
        link: "/post",
      },
    ],
  },
];

describe("NavBar", () => {
  it("renders title", () => {
    render(<NavBar title={title} menu={[]} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("renders folder menu with child", () => {
    render(<NavBar title={title} menu={blogMenu} />);
    expect(screen.getByText(blog)).toBeInTheDocument();
    expect(screen.getByText(post)).toBeInTheDocument();
  });

  it("clicking folder hides child", async () => {
    render(<NavBar title={title} menu={blogMenu} />);
    await userEvent.click(screen.getByText(blog));
    await waitFor(() => {
      expect(screen.queryByText(post)).not.toBeInTheDocument();
    });
  });
});
