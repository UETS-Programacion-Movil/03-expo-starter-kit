import { Text, View, StyleSheet } from "react-native";
import React from "react";
type MyButton = {
  title:String;
   onClick: () => void;
}
function MyButton({title, onClick} : MyButton){
  return (
    <button onClick={onClick}>
      {title}
    </button>
  );
}
export default function Index() {
  const handleClick = () => {
    alert("¡Botón presionado!");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button>Haz clic aquí</button>
    </div>
  );
    <View style={styles.container}>
      <Text>HOLA MUNDO</Text>
      <button>Boton</button>
      
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
