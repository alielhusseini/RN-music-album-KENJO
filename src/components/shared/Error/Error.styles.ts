import { ScaledSheet } from "react-native-size-matters";
import { COLORS } from "../../../assets/colors";

export const styles = ScaledSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    scrollView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: COLORS.danger,
        fontSize: '20@s',
        fontWeight: 'bold',
    },
})