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
    photoCover: {
        width: '100%',
        height: '80%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    // info
    artistInfoContainer: {
        width: '100%',
        height: '20%',
        backgroundColor: COLORS.white,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: '5@s',
    },
    name: {
        textAlign: 'center',
        fontSize: '15@s',
        color: COLORS.dark,
        fontWeight: 'bold',
    },
}) 