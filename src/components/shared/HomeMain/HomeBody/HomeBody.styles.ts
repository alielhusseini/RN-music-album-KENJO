import { ScaledSheet } from "react-native-size-matters";
import { COLORS } from "../../../../assets/colors";

export const styles = ScaledSheet.create({
    // main
    mainContainer: {
        backgroundColor: COLORS.dark_green,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: '30@s',
        paddingHorizontal: '16@s',
        flex: 1,
    },
    // buttons
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: '120@s',
        padding: '10@s',
        marginHorizontal: '15@s',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.gray,
    },
    buttonActive: {
        backgroundColor: COLORS.white,
    },
    buttonText: {
        fontSize: '16@s',
        fontWeight: 'bold',
        color: COLORS.dark,
    },
    // albums
    albumsContainer: {
        marginTop: '20@s',
    },
    albumsTitleContainer: {
        marginTop: '40@s',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    albumsTitleText: {
        fontSize: '20@s',
        color: COLORS.white,
        fontWeight: 'bold',
    },
    viewAllText: {
        color: COLORS.standout,
        fontSize: '12@s',
    },
    flatList: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})