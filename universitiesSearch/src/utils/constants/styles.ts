import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { sizes } from "./sizes";

export const styles = StyleSheet.create({
    flexWrapper: {
        display: "flex",
        flex: 1
    },

    mainContainer: {
        backgroundColor: colors.deepBlue
    },

    rowFlexWrapper: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "stretch"
    },
    
    rootContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    customText: {
        color: colors.plainWhite,
        fontFamily: 'Lexend-Regular'
    },

    headerText: {
        fontSize: sizes.bigSize,
        fontFamily: 'Lexend-Bold',
        marginTop: sizes.smallSize
    },

    customInput: {
        fontFamily: 'Lexend-Regular',
        fontSize: sizes.bigSize,
        backgroundColor: colors.mistyWhite,
        color: colors.plainWhite,
        padding: sizes.smallSize,
        borderRadius: sizes.extraSmallSize,
        borderWidth: sizes.tinySize,
        borderColor: colors.plainWhite,
        flex: 1,
        margin: sizes.standardSize
    },

    universitiesList: {
        marginHorizontal: sizes.bigSize,
        marginBottom: sizes.smallSize,
        padding: sizes.tinySize,
        borderColor: colors.plainWhite,
        borderTopWidth: sizes.tinySize,
        borderTopStartRadius: sizes.littleSize,
        borderTopEndRadius: sizes.littleSize,
        borderBottomWidth: sizes.tinySize,
        borderBottomStartRadius: sizes.littleSize,
        borderBottomEndRadius: sizes.littleSize
    },

    listItem: {
        padding: sizes.smallSize,
        marginVertical: sizes.extraSmallSize,
        borderRadius: sizes.extraSmallSize,
        borderWidth: sizes.tinySize,
        borderColor: colors.mistyWhite
    },

    listItemTitle: {
        fontSize: sizes.bigSize,
        color: colors.plainWhite
    },

    backButtonContainer: {
        borderRadius: sizes.extraSmallSize,
        backgroundColor: colors.deepBlue
    },

    backButtonText: {
        padding: sizes.bigSize,
        color: colors.plainWhite,
        fontSize: sizes.standardSize,
        fontFamily: 'Lexend-Bold'
    },

    detailsScreenContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        marginVertical: sizes.bigSize
    },

    detailsHeader: {
        fontFamily: 'Lexend-Bold',
        color: colors.deepBlue,
        fontSize: sizes.bigSize
    },

    detailsCard: {
        backgroundColor: colors.deepBlue,
        borderRadius: sizes.extraSmallSize,
        marginHorizontal: sizes.standardSize,
        padding: sizes.standardSize
    },

    detailsRowContainer: {
        display: "flex",
        flexDirection: 'row',
        alignSelf: "flex-start"
    },

    detailsCardRowSpacing: {
        marginTop: sizes.extraSmallSize
    },

    detailsRowText: {
        fontSize: sizes.bigSize
    },

    shrinkedText: {
        flexShrink: 1
    },

    mainWrapper: {
        display: "flex",
        flexDirection: 'column',
        flex: 1
    },

    listIndicatorContainer: {
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom: sizes.smallSize
    }
})