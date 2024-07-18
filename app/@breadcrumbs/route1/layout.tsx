import { BreadcrumbItem } from "@/app/BreadcrumbsList";
import { Fragment } from "react";

export default ({ children }) => (
  <Fragment>
    <BreadcrumbItem>i am route 1 breadcrumb</BreadcrumbItem>
    {children}
  </Fragment>
);
