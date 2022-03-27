import { ScaledSheet } from "react-native-size-matters";
import { COLORS } from "../../../assets/colors";

export const styles = ScaledSheet.create({
    // view all container
    container: {
        flexDirection: 'row',
        paddingHorizontal: '10@s',
        paddingTop: '5@s',
        paddingVertical: '13@s',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    iconContainer: {
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
    },
    iconBackContainer: {
        height: '30@s',
        width: '30@s',
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    iconBack: {
        color: COLORS.dark_green,
        fontSize: '16@s',
        fontWeight: 'bold',
    }
})
