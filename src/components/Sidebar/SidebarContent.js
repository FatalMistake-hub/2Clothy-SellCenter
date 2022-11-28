import React from "react";
import routes from "../../routes/sidebar";
import { NavLink, Route } from "react-router-dom";
import * as Icons from "../../icons";
import SidebarSubmenu from "./SidebarSubmenu";
import { Button } from "@windmill/react-ui";
// import Clothy from "../../assets/img/logo-2clothy.png";
import Clothy from "../../assets/img/logo.png";

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

function SidebarContent() {
  return (
    <div className="  text-gray-500 dark:text-gray-400">
      <div className="flex py-2  items-center w-full text-gray ">
        <img
                aria-hidden="true"
                className="object-contain w-16 h-16 ml-4 dark:hidden rounded-lg"
                src={Clothy}
                alt="Office"
              />
        <a
          className="ml-4 text-2xl font-semibold text-gray-800 dark:text-gray-200"
          href="#"
        >
          Kênh người bán
        </a>
      </div>
      <ul className="mt-6">
        {/* {routes.slice(0, -3).map((route) => */}
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-6 py-2 my-5" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                activeClassName="text-gray-800 dark:text-gray-100"
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-orange-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                <Icon
                  className="w-6 h-6"
                  aria-hidden="true"
                  icon={route.icon}
                />
                <span className="ml-4 text-base ">{route.name}</span>
              </NavLink>
            </li>
          )
        )}

        {/* <hr className="customeDivider mx-4 my-5" /> */}

        {/* {routes.slice(-3).map((route) => (
          <li className="relative px-6 py-2 my-5" key={route.name}>
            <NavLink
              exact
              to={route.path}
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              activeClassName="text-gray-800 dark:text-gray-100"
            >
              <Route path={route.path} exact={route.exact}>
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-orange-600 rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
              </Route>
              <Icon className="w-6 h-6" aria-hidden="true" icon={route.icon} />
              <span className="ml-4 text-base">{route.name}</span>
            </NavLink>
          </li>
        ))} */}
      </ul>

      <div className="px-6 my-6">
        {/* <Button>
          Genarate Report
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </Button> */}
      </div>
    </div>
  );
}

export default SidebarContent;
