import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { StackParamList } from "../types/StackParamList"

export const useStackNavigation = () => {
    return useNavigation<StackNavigationProp<StackParamList>>()
}