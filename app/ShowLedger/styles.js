import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { ThemeColors } from "./colors";
export default StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: '5%',
    },
    title: {
        marginTop: hp(7),
        fontSize: 28,
        marginBottom: hp(3),
        fontWeight: 'bold',
        color: ThemeColors.primary,
        paddingVertical: hp(1),
        paddingHorizontal: hp(2),
        textAlign: 'center',
    },
    fetchDatabtn: {
        paddingVertical: hp(1),
        marginTop: hp(1),
        marginBottom:hp(3),
    },
    fetchDataTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: ThemeColors.white,
    },
    head: {
        backgroundColor: ThemeColors.primary,

    },
    table: {
        borderWidth: 1,
        borderColor: ThemeColors.primary,
    },
    headText: {
        paddingVertical: hp(1),
        paddingHorizontal: hp(0.4),
        color: ThemeColors.white,
        fontSize: 16,
        fontWeight: '500',
    },
    rowText: {
        paddingVertical: hp(1),
        paddingHorizontal: hp(0.4),
        color: ThemeColors.black,
        fontSize: 14,
        fontWeight: '400',
    },
    emptyView: {
       flex:1,
       justifyContent:"center",
       alignItems:'center'
    },
    emptyText:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '400',
        color:ThemeColors.gray
    },
    error: {
        color: ThemeColors.red,
        fontSize: 14,
    }

})