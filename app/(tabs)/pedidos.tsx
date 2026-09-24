import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from '../../components/ui/Button';

export default function PedidosScreen() {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState(0);

  const agregarSanduche = () => {
    setItems(items + 1);
    setTotal(total + 1.25);
  };

  const agregarEmpanada = () => {
    setItems(items + 1);
    setTotal(total + 0.75);
  };

  const agregarJugo = () => {
    setItems(items + 1);
    setTotal(total + 0.80);
  };

  const vaciarCarrito = () => {
    setItems(0);
    setTotal(0);
  };

  const tieneDescuento = total >= 5.00;

  return (
    <ScrollView className="flex-1 bg-[#FFFDF9] p-6">
      <View className="gap-4">
        <Text className="text-3xl font-black text-black">Bar Salesiano UETS</Text>
        
        <View className="p-4 bg-yellow-300 border-[3px] border-black rounded-xl">
          <Text className="text-lg font-black text-black">Artículos: {items}</Text>
          <Text className="text-2xl font-black text-black">Total: ${total.toFixed(2)}</Text>
          {tieneDescuento && (
            <Text className="text-sm font-bold text-black mt-2">
              🎉 ¡Descuento Salesiano del Recreo Activado!
            </Text>
          )}
        </View>

        <View className="gap-3">
          <Button label="Sánduche de Pollo (+$1.25)" variant="primary" onPress={agregarSanduche} />
          <Button label="Empanada de Viento (+$0.75)" variant="secondary" onPress={agregarEmpanada} />
          <Button label="Jugo de Mora (+$0.80)" variant="primary" onPress={agregarJugo} />
        </View>

        <Button label="🗑️ Vaciar Carrito" variant="danger" onPress={vaciarCarrito} />
      </View>
    </ScrollView>
  );
}