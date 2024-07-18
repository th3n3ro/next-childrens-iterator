"use client";
import React, { createContext, Fragment, isValidElement, useContext } from "react";

const BreadcrumbItemContext = createContext<number>(null);
const useIndex = () => useContext(BreadcrumbItemContext);

const flatChildrens = (children: React.ReactNode) => {
  const flatElements = [];

  React.Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      if (child.type === Fragment) {
        flatElements.push(...flatChildrens(child.props.children));
      } else {
        flatElements.push(child);
      }
    }
  });

  return flatElements.map((child, index) => {
    return (
      <BreadcrumbItemContext.Provider key={index} value={index}>
        {child}
      </BreadcrumbItemContext.Provider>
    );
  });
};

export const BreadcrumbsList = ({ children }) => <ul>{flatChildrens(children)}</ul>;
export const BreadcrumbItem = ({ children }) => {
  const myIndex = useIndex();
  return (
    <li>
      {children} | my index is {myIndex}
    </li>
  );
};
