import { ScaledSheet } from "react-native-size-matters"
import { COLORS } from "../../../assets/colors"

export const styles = ScaledSheet.create({
    container: {
        height: '50@s',
        width: '50@s',
        backgroundColor: COLORS.white,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 10,
        right: 10,
        borderRadius: 50,
        elevation: 5,
    },
    icon: {
        fontWeight: 'bold',
        fontSize: '20@s',
        color: COLORS.standout,
    }
})