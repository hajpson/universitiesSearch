import { Pressable, View } from "react-native"
import { useStackNavigation } from "../hooks/useStackNavigation"
import { styles } from "../utils/constants/styles"
import { CustomText } from "./CustomText"

export const BackButton = () => {
    const navigation = useStackNavigation()

    return (
        <Pressable 
            onPress={navigation.goBack}>
            <View style={styles.backButtonContainer}>
                <CustomText style={styles.backButtonText}>Go back</CustomText>
            </View>
        </Pressable>
    )
}