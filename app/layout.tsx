import Link from "next/link";
import { BreadcrumbItem, BreadcrumbsList } from "./BreadcrumbsList";
import { Fragment } from "react";

export default function RootLayout({ breadcrumbs }) {
  return (
    <html lang="en">
      <body>
        <div>{breadcrumbs}</div>
        <br />
        <Link href="/">Root</Link>
        <br />
        <Link href="/route1">Route</Link>
        <br />
        <Link href="/route1/route2">Nested route</Link>
        <br />
        <Link href="/route1/route2/dynamic_route">dynamic route</Link>

        <BreadcrumbsList>
          <Fragment>
            <BreadcrumbItem>i am static item 1</BreadcrumbItem>
            <Fragment>
              <BreadcrumbItem>i am static item 2</BreadcrumbItem>
              <Fragment>
                <BreadcrumbItem>i am static item 3</BreadcrumbItem>
              </Fragment>
            </Fragment>
          </Fragment>
        </BreadcrumbsList>
      </body>
    </html>
  );
}
