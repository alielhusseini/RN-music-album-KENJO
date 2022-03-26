import { ScaledSheet } from "react-native-size-matters"
import { COLORS } from "../../../assets/colors"

export const styles = ScaledSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: COLORS.dark_green,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
})