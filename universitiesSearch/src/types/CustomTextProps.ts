import { ReactNode } from "react";
import { TextStyle } from "react-native";

export type CustomTextProps = {
    children?: ReactNode,
    style?: TextStyle | TextStyle[]
}