import React from "react";
import { Link } from "react-router-dom";

const HeaderLinks = (props) => {
  return <Link to={props.address}>{props.title}</Link>;
};

export default HeaderLinks;
