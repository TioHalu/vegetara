import { NoEncryption } from "@mui/icons-material";
import { borderRadius } from "@mui/system";

const Style = () => ({

    checkoutSection: {
        marginTop: "100px",
        marginBottom: "50px"
    },

    checkoutCol: {
        padding: 20,
    },

    h2checkout: {
        paddingTop: 15,
        paddingLeft: 15,
        fontSize: "18px",
        fontWeight: "bold",
    },

    h3checkout: {
        paddingTop: 15,
        paddingLeft: 15,
        fontSize: "14px",
        fontWeight: "bold",
    },
    error: {
        color: "red",
    },
    checkoutPanel: {
        boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;",
        borderRadius: 10,
    },
    
    priceDetails: {
        color : "rgba(0,0,0,.54)",
        paddingTop: 5,
        padding: 15,
    },

    totalPrice: {
        paddingTop: 5,
        padding: 15,
        fontWeight: "bold",
    },

    wrapperButton: {
        paddingLeft: 15,
        paddingRight: 15,
    },

    buttonPay: {
        width: "100%",
        padding: 10,
        color: "white",
        background : "#7DCE13",
        cursor: "pointer",
        border: "none",
        marginBottom: 15,
        borderRadius: 10,
    },

    descItems: {
        paddingLeft: 10,
        paddingRight: 10,
    },

    titleItems: {
        fontWeight : "bold",
        fontSize: "16px",
        color : "black",
        marginBottom: "5px",
    },

    jumlahItems: {
        marginBottom: "5px",
    },

    totalHargaItems: {
        fontWeight : "bold",
        marginTop: "0px",
    },

    Address: {
        marginLeft: 15, 
        marginRight: 15,
        boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        padding : 15,
        borderRadius: 10,
    },

    AddressTitle: {
        background: "#6e7683",
        color : "white",
        fontSize: "14px",
        padding: "3px",
        borderRadius: "5px",
        marginRight: "5px",
    },

    pengiriman: {
        padding: 15,
        boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        borderRadius: 10,
        marginBottom: 15,
    },

    imageRadius: {
        borderRadius: 10
    },

    overallPrice : {
        fontSize: "18px"
    },

    selectLayanan: {
        width: "100%"
    }
});

export default Style;
