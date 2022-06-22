import React from "react";
import {
  ChevronRight,
  CloudDownload,
} from "@material-ui/icons";

const HeaderTitle = ({name}) => {
  return (
    <div className="head-title">
      <div className="left">
        <h1>{name}</h1>
        <ul className="breadcrumb">
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <ChevronRight className="bx" />
          </li>
          <li>
            <a className="active" href="#">
              {name}
            </a>
          </li>
        </ul>
      </div>
      <a href="#" className="btn-download">
        <CloudDownload className="bx" />
        <span className="text">Download PDF</span>
      </a>
    </div>
  );
};

export default HeaderTitle;
