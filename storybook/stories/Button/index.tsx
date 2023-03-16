import React, { ReactComponentElement } from "react";
import PropTypes from "prop-types";
import { TouchableHighlight } from "react-native";

type ButtonTypes = {
  onPress: () => void;
  children: React.ReactNode;
};

export default function Button({ onPress, children }: ButtonTypes) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
