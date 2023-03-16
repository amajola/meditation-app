import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import style from "./style";

type CenterViewTypes = {
  children: React.ReactNode;
};

export default function CenterView({ children }: CenterViewTypes) {
  return <View style={style.main}>{children}</View>;
}

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};
