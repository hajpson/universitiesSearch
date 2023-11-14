import { SafeAreaView, View } from "react-native"
import { styles } from "../utils/constants/styles"
import { BackButton } from "../components/BackButton"
import { CustomText } from "../components/CustomText"
import { RouteProp, useRoute } from "@react-navigation/native"
import { StackParamList } from "../types/StackParamList"
import { DetailsRow } from "../components/DetailsRow"

export const DetailsScreen = () => {
    const { params } = useRoute<RouteProp<StackParamList>>()
    const name = params === undefined ? '' : params.name
    const country = params === undefined ? '' : params.country
    const webPage = params === undefined ? '' : params.web_pages[0]

    return (
        <SafeAreaView style={styles.flexWrapper}>
            <View style={styles.detailsScreenContainer}>
                <CustomText style={styles.detailsHeader}>Details</CustomText>

                <View style={styles.detailsCard}>
                    <DetailsRow 
                        title="Name"
                        content={name} />
                    <DetailsRow
                        title="Country"
                        content={country}
                        style={styles.detailsCardRowSpacing} />
                    <DetailsRow
                        title="Web page"
                        content={webPage}
                        style={styles.detailsCardRowSpacing} />
                </View>

                <BackButton />
            </View>
        </SafeAreaView>
    )
}