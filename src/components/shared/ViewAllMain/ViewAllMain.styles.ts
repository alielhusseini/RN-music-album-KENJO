import { ScaledSheet } from "react-native-size-matters";
import { COLORS } from "../../../assets/colors";

export const styles = ScaledSheet.create({
    // container
    container: {
        backgroundColor: COLORS.light_green,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        flex: 1,
    }
})