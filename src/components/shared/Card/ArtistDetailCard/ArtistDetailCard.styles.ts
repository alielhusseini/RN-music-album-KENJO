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
    photoCover: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    addiontalInfoContainer: {
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