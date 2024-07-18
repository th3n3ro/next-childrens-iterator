import { BreadcrumbItem } from "@/app/BreadcrumbsList";
import { Fragment } from "react";

export default ({ children, params: { route3 } }) => (
  <Fragment>
    <BreadcrumbItem>i am route 2 breadcrumb</BreadcrumbItem>
    {children}
  </Fragment>
);
