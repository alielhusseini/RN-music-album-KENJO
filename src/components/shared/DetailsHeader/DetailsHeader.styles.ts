import { Dimensions } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { COLORS } from "../../../assets/colors";

export const styles = ScaledSheet.create({
    // container
    container: {
        position: 'relative',
        flex: 1,
    },
    headerContainer: {
        width: '100%',
        position: 'absolute',
        zIndex: 1,
        flexDirection: 'row',
        paddingHorizontal: '10@s',
        paddingVertical: '15@s',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imageCover: {
        width: '100%',
        height: Dimensions.get('screen').height * .5,
    },
    // icons
    iconBackContainer: {
        height: '30@s',
        width: '30@s',
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: '1@s',
        borderColor: COLORS.dark,
    },
    iconBack: {
        color: COLORS.dark_green,
        fontSize: '16@s',
        fontWeight: 'bold',
    }
})