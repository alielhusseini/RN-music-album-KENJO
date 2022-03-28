import { StyleSheet } from "react-native";
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
        flex: 1,
    },
    // save icon
    iconContainers: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: '16@s',
        paddingRight: '32@s',
    },
    iconContainer: {
        backgroundColor: COLORS.white,
        height: '40@s',
        width: '40@s',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: '1@s',
        borderColor: COLORS.dark,
    },
    iconEdit: {
        fontSize: '16@s',
        color: COLORS.blue,
    },
    // form
    infoEditContainer: {
        marginBottom: '15@s',
    },
    infoEdit: {
        fontSize: '20@s',
        color: COLORS.white,
    },
    input: {
        fontSize: '20@s',
        color: COLORS.blue,
    },
})

export const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 4,
        color: COLORS.white,
        paddingRight: 30 // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderRadius: 8,
        color: COLORS.white,
        paddingRight: 30 // to ensure the text is never behind the icon
    }
});