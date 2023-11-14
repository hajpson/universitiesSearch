import { ActivityIndicator, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "../utils/constants/styles"
import { CustomText } from "../components/CustomText"
import { CustomInput } from "../components/CustomInput"
import { List } from "../components/List"
import { useState } from "react"
import { useUniversitiesData } from "../hooks/useUniversitiesData"
import { colors } from "../utils/constants/colors"
import { ListIndicator } from "../components/ListIndicator"

export const RootScreen = () => {
    const [phrase, setPhrase] = useState('')
    const [page, setPage] = useState(1)
    const { universitiesData, error, isLoading } = useUniversitiesData({ phrase, setPage })

    return (
        <SafeAreaView style={[styles.flexWrapper, styles.mainContainer]}>
            <View style={styles.rootContainer}>
                <CustomText style={styles.headerText}>Universities search</CustomText>
                <CustomInput 
                    placeholder="Search"
                    onChange={(textValue) => setPhrase(textValue)} />
            </View>

            {isLoading
            ?
                <View style={styles.rootContainer}>
                    <ActivityIndicator 
                        color={colors.plainWhite}
                        size={"large"} />
                    <CustomText style={styles.headerText}>Looking for universities</CustomText>
                </View>
            :
                error
                ?
                    <View style={styles.rootContainer}>
                        <CustomText style={styles.headerText}>Error. Try again.</CustomText>
                    </View>
                :
                    universitiesData === null
                        || universitiesData === undefined
                        || universitiesData.length <= 0
                        ?
                            <View style={styles.rootContainer}>
                                <CustomText style={styles.headerText}>No results.</CustomText>
                            </View>
                        :
                            <View style={styles.mainWrapper}>
                                <List data={universitiesData} page={page} />
                                <ListIndicator page={page} setPage={setPage} itemsCount={universitiesData.length} />
                            </View>
                        }
        </SafeAreaView>
    )
}