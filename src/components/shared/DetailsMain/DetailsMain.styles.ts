import { Dimensions, StyleSheet } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { COLORS } from "../../../assets/colors";

export const styles = ScaledSheet.create({
    //container
    container: {
        top: '-30@s',
        width: '100%',
        paddingHorizontal: '16@s',
        paddingTop: '30@s',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: COLORS.white,
    },
    // buttons
    iconContainers: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
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
        marginLeft: '25@s',
    },
    iconEdit: {
        fontSize: '16@s',
        color: COLORS.blue,
    },
    iconDanger: {
        fontSize: '16@s',
        color: COLORS.danger,
    },
    // card details
    cardDetailsContainer: {
        width: '100%',
        paddingTop: '15@s',
    },
    info: {
        fontSize: '25@s',
        color: COLORS.dark,
        marginBottom: '15@s',
    },
    infoEdit: {
        fontSize: '20@s',
        color: COLORS.dark,
    },
    infoEditContainer: {
        marginBottom: '15@s',
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
        color: COLORS.blue,
        paddingRight: 30 // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderRadius: 8,
        color: COLORS.blue,
        paddingRight: 30 // to ensure the text is never behind the icon
    }
});