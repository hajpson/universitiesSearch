import { Pressable } from "react-native"
import { CustomText } from "./CustomText"
import { ListItemProps } from "../types/ListItemProps"
import { styles } from "../utils/constants/styles"
import { useStackNavigation } from "../hooks/useStackNavigation"
import { onListItemPress } from "../helpers/onListItemPress"
export const ListItem = ({ item }: ListItemProps) => {
    const navigation = useStackNavigation()

    return (
        <Pressable 
            style={[styles.rowFlexWrapper, styles.listItem]} 
            onPress={() => onListItemPress({ item: item, navigation: navigation})}>
            <CustomText style={styles.listItemTitle}>{item.name}</CustomText>
        </Pressable>
    )
}