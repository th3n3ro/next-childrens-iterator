import { Fragment } from "react";
import { BreadcrumbItem, BreadcrumbsList } from "../BreadcrumbsList";

export default ({ children }) => {
  return (
    <BreadcrumbsList>
      <Fragment>
        <BreadcrumbItem>i am root layout breadcrumb</BreadcrumbItem>
        {children}
      </Fragment>
    </BreadcrumbsList>
  );
};
