import { ScaledSheet } from "react-native-size-matters";
import { COLORS } from "../../../../assets/colors";

export const styles = ScaledSheet.create({
    // introduction
    introContainer: {
        paddingTop: '30@s',
        paddingHorizontal: '16@s',
        marginBottom: '30@s',
    },
    titleUser: {
        marginBottom: '1.5@s',
    },
    textUser: {
        fontSize: '16@s',
        fontWeight: 'normal',
        color: COLORS.dark,
        opacity: .8,
    },
    titleHeading: {
        marginBottom: '30@s'
    },
    textHeading: {
        fontSize: '18@s',
        fontWeight: 'normal',
        color: COLORS.white,
    },
    // search bar
    searchContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '50@s',
    },
    searchBar: {
        backgroundColor: '#00000044',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    iconContainer: {
        paddingHorizontal: '10@s',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconSearch: {
        fontSize: '25@s',
        color: COLORS.white,
    },
    iconFilter: {
        fontSize: '14@s',
        color: COLORS.white,
    },
    inputSearch: {
        flex: 1,
        alignItems: 'center',
        fontSize: '14@s',
        color: COLORS.white,
    },
})