import { Text } from "react-native";
import { CustomTextProps } from "../types/CustomTextProps";
import { styles } from "../utils/constants/styles";

export const CustomText = ({ children, style }: CustomTextProps) => {
    return (
        <Text
            style={[styles.customText, style]}
            numberOfLines={2}
            ellipsizeMode="tail">{children}</Text>
    )
}