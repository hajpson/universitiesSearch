import { StackNavigationProp } from "@react-navigation/stack"
import { University } from "./University"
import { StackParamList } from "./StackParamList"

export type OnListItemPressProps = {
    item: University,
    navigation: StackNavigationProp<StackParamList>
}