import { Dimensions } from "react-native"
import { ScaledSheet } from "react-native-size-matters"
import { COLORS } from "../../../assets/colors"

export const styles = ScaledSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('screen').height * .13,
        backgroundColor: COLORS.white,
        marginTop: '15@s',
        paddingHorizontal: '15@s',
        borderRadius: 10,
        justifyContent: 'center'
    },
    textTitle: {
        fontSize: '18@s',
        color: COLORS.dark,
    },
    text: {
        fontSize: '14@s',
        color: COLORS.dark,
    }
})