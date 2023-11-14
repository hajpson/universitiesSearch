import { FlatList } from "react-native"
import { UniversitiesListProps } from "../types/UniversitiesListProps"
import { ListItem } from "./ListItem"
import { styles } from "../utils/constants/styles"
import { useEffect, useState } from "react"
import { University } from "../types/University"

export const List = ({ data, page }: UniversitiesListProps ) => {
    const [nextTenItems, setNextTenItems] = useState<University[] | null>(null)

    useEffect(() => {
        const arrayStart = page === 1 ? page - 1 : (page - 1) * 10;
        const arrayEnd = page === 1 ? 10 : page * 10;
        const newItems = data === undefined || data === null
            ? null
            : data.slice(arrayStart, arrayEnd)
        setNextTenItems(newItems)
    }, [page])
    return (
        <FlatList 
            data={nextTenItems}
            renderItem={({ item }) => <ListItem item={item} />}
            style={styles.universitiesList}
            pagingEnabled
            showsVerticalScrollIndicator={false} />
    )
}