import { useLinkProps } from "@react-navigation/native";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const SButton = ({ onTap, title, buttonColor }) => {
  return (
    <TouchableOpacity 
    onPress={onTap} 
    style={{...styles.appButtonContainer, backgroundColor: buttonColor || "#484085" }}>
    <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};
  export default SButton;

  const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      elevation: 8,
      //backgroundColor: "#484085",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginTop: 30
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });