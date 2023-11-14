import { TextInput, View } from "react-native"
import { CustomInputProps } from "../types/CustomInputProps"
import { styles } from "../utils/constants/styles"
import { colors } from "../utils/constants/colors"

export const CustomInput = ({ placeholder, onChange }: CustomInputProps)  => {
    return (
        <View style={styles.rowFlexWrapper}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={colors.lightGray}
                style={styles.customInput}
                onChangeText={onChange} />
        </View>
    )
}