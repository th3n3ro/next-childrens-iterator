import { BreadcrumbItem } from "@/app/BreadcrumbsList";
import { Fragment } from "react";

export default ({ children }) => (
  <Fragment>
    <BreadcrumbItem>i am dynamic route 3 breadcrumb</BreadcrumbItem>
    {children}
  </Fragment>
);
