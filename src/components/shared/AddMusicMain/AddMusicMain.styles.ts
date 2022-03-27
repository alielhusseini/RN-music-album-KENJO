import { ScaledSheet } from "react-native-size-matters";
import { COLORS } from "../../../assets/colors";

export const styles = ScaledSheet.create({
    // container
    container: {
        backgroundColor: COLORS.dark_green,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        flex: 1,
    },
    cardContainer: {
        paddingHorizontal: '16@s',
        paddingTop: '30@s',
        flex: 1
    }
})