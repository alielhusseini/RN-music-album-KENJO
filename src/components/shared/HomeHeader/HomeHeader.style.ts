import { ScaledSheet } from "react-native-size-matters";
import { COLORS } from "../../../assets/colors";

export const styles = ScaledSheet.create({
    // header container
    container: {
        flexDirection: 'row',
        paddingHorizontal: '10@s',
        paddingVertical: '5@s',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imageLogo: {
        height: '50@s',
        width: '50@s',
        opacity: .7,
    },
    titleContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        fontSize: '20@s',
        fontWeight: 'bold',
        color: COLORS.dark,
    },
    avatarContainer: {
        height: '30@s',
        width: '30@s',
        backgroundColor: COLORS.light_green,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    icon: {
        color: COLORS.white,
        fontSize: '14@s'
    }
})