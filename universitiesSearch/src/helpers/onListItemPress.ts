import { OnListItemPressProps } from "../types/OnListItemPressProps";

export const onListItemPress = ({ item, navigation }: OnListItemPressProps) => {
    navigation.navigate('Details', item)
}