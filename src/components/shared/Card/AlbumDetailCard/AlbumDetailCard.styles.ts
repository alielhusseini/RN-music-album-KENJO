import { Dimensions } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { COLORS } from "../../../../assets/colors";

export const styles = ScaledSheet.create({
    // card container
    cardContainer: {
        width: '100%',
        height: Dimensions.get('screen').height * .25,
        marginBottom: '20@s',
        borderRadius: 10,
        borderWidth: '2@s',
        borderColor: COLORS.white,
        overflow: 'hidden',
    },
    // image
    albumCover: {
        width: '100%',
        height: '80%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    // info
    albumInfoContainer: {
        width: '100%',
        height: '20%',
        backgroundColor: COLORS.white,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingHorizontal: '5@s',
        justifyContent: 'center',
    },
    mainInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '2@s',
    },
    title: {
        fontSize: '15@s',
        color: COLORS.dark,
        fontWeight: 'bold',
    },
    artist: {
        fontSize: '13@s',
        color: COLORS.dark,
        fontStyle: 'italic',
    },
    addiontalInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5@s',
        position: 'absolute',
        backgroundColor: COLORS.white,
        borderBottomRightRadius: 10
    },
    addiontalInfoText: {
        fontSize: '12@s',
        fontWeight: 'bold',
        color: COLORS.standout,
    }
}) 