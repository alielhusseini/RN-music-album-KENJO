import { ScaledSheet } from "react-native-size-matters";
import { COLORS } from "../../../assets/colors";

export const styles = ScaledSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.dark_green,
        padding: '5@s',
        paddingBottom: '15@s',
    },
    text: {
        fontSize: '14@s',
        color: COLORS.white,
    }
})