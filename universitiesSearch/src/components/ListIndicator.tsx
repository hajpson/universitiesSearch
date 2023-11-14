import { Pressable, View } from "react-native"
import { styles } from "../utils/constants/styles"
import { CustomText } from "./CustomText"
import { LucideArrowLeftSquare, LucideArrowRightSquare } from "lucide-react-native"
import { colors } from "../utils/constants/colors"
import { sizes } from "../utils/constants/sizes"
import { ListIndicatorProps } from "../types/ListIndicatorProps"

export const ListIndicator = ({ page, setPage, itemsCount }: ListIndicatorProps) => {
    const isLastPage = page * 10 >= itemsCount

    const handlePreviousPageClick = () => {
        if (page === 1) {
            return;
        }

        setPage((prev) => prev - 1)
    }

    const handleNextPageClick = () => {
        if (isLastPage) {
            return;
        }

        setPage((prev) => prev + 1)
    }

    return (
        <View style={[styles.rowFlexWrapper, styles.listIndicatorContainer]}>
            <Pressable onPress={handlePreviousPageClick}>
                <LucideArrowLeftSquare 
                    color={page === 1 ? colors.lightGray : colors.plainWhite}
                    size={sizes.iconSize} />
            </Pressable>

            <CustomText style={{ fontSize: 20 }}>{page}</CustomText>

            <Pressable onPress={handleNextPageClick}>
                <LucideArrowRightSquare 
                    color={isLastPage ? colors.lightGray : colors.plainWhite}
                    size={sizes.iconSize} />
            </Pressable>
        </View>
    )
}