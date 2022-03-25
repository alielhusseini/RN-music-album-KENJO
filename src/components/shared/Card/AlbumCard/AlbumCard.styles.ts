import { Dimensions } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { COLORS } from "../../../../assets/colors";

export const styles = ScaledSheet.create({
    // card container
    cardContainer: {
        width: Dimensions.get('screen').width * .5,
        height: Dimensions.get('screen').height * .2,
        marginHorizontal: '10@s',
        marginTop: '20@s',
        borderRadius: 10,
        borderWidth: '2@s',
        borderColor: COLORS.white,
        overflow: 'hidden',
    },
    // image
    albumCover: {
        width: '100%',
        height: '50%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    // info
    albumInfoContainer: {
        width: '100%',
        height: '50%',
        backgroundColor: COLORS.white,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: '5@s',
    },
    title: {
        fontSize: '15@s',
        color: COLORS.dark,
        fontWeight: 'bold',
    },
    artist: {
        fontSize: '13.3@s',
        color: COLORS.dark,
        fontStyle: 'italic',
        paddingTop: '5@s',
    },
    addiontalInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '5@s',
    },
    addiontalInfoText: {
        fontSize: '12@s',
        color: COLORS.standout,
    }
}) 