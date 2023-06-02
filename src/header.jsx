import { Fragment } from "react";
import "./header.css";
export const Header = ({ title, navBarFields }) => {
  return (
    <>
      <header>
        <h1>{title}</h1>
        <nav>
          {navBarFields.map((field, i) => {
            return (
              <Fragment key={i}>
                <li>{field}</li>
              </Fragment>
            );
          })}
        </nav>
      </header>
    </>
  );
};
