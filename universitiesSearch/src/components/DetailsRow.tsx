import { View } from "react-native"
import { styles } from "../utils/constants/styles"
import { CustomText } from "./CustomText"
import { DetailsRowProps } from "../types/DetailsRowProps"

export const DetailsRow = ({ title, content, style }: DetailsRowProps) => {
    return (
        <View style={[styles.detailsRowContainer, style]}>
            <CustomText style={styles.detailsRowText}>{title}: </CustomText>
            <CustomText style={[styles.detailsRowText, styles.shrinkedText]}>{content}</CustomText>
        </View>
    )
}