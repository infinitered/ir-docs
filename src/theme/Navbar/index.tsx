import React from "react";
import { useLocation } from "@docusaurus/router";
import { useThemeConfig } from "@docusaurus/theme-common";
import Navbar from "@theme-original/Navbar";
import repoUrls from "../../../static/repo-urls.json";

export default function NavbarWrapper(props) {
  const { pathname } = useLocation();
  const {
    navbar: { items },
  } = useThemeConfig();


  const repoUrl = repoUrls[pathname.split("/").at(1)];
  const updatedItems = (items[items.length - 1] = {
    href: repoUrl,
    label: repoUrl && "GitHub",
    position: "right",
  });

  return (
    <>
      <Navbar {...props} items={updatedItems} />
    </>
  );
}
