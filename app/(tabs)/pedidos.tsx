
import React, { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  UtensilsCrossed,
  Sandwich,
  CupSoda,
  Sparkles,
  ShoppingBag,
} from 'lucide-react-native';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export default function PedidosScreen() {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState(0);

  const agregarSanduche = () => {
    setItems((cantidad) => cantidad + 1);
    setTotal((valor) => valor + 1.25);
  };

  const agregarEmpanada = () => {
    setItems((cantidad) => cantidad + 1);
    setTotal((valor) => valor + 0.75);
  };

  const agregarJugo = () => {
    setItems((cantidad) => cantidad + 1);
    setTotal((valor) => valor + 0.8);
  };

  const vaciarCarrito = () => {
    setItems(0);
    setTotal(0);
  };

  const tieneDescuento = total >= 5;

  const mostrarPedido = () => {
    if (items === 0) {
      Alert.alert(
        'Carrito vacío',
        'Agrega algún producto antes de confirmar.'
      );
      return;
    }

    Alert.alert(
      'Pedido realizado',
      `Productos: ${items}\nTotal: $${total.toFixed(2)}${
        tieneDescuento ? '\nDescuento aplicado' : ''
      }`
    );
  };

  return (
    <SafeAreaView
      className="flex-1 bg-[#FFFDF9]"
      edges={['top', 'left', 'right']}
    >
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-5 pt-4 pb-36"
      >
        <View className="mb-6 border-b-[3px] border-black pb-4">
          <Badge label="RETO 04 · USESTATE" tone="green" />

          <View className="mt-2 flex-row items-center gap-2">
            <UtensilsCrossed size={27} color="#000" />

            <Text className="text-3xl font-black uppercase text-black">
              Pedidos UETS
            </Text>
          </View>

          <Text className="mt-1 text-xs font-bold text-black/70">
            Control de productos, cantidades y total del carrito.
          </Text>
        </View>

        <Card
          titulo="📘 ENUNCIADO · RETO 04 (1.00 PT)"
          subtitulo="Carrito reactivo para el Bar Salesiano"
          variante="yellow"
        >
          <Text className="mb-3 text-xs font-bold leading-relaxed text-black">
            Agrega productos al carrito y observa cómo se actualizan
            automáticamente la cantidad y el total.
          </Text>

          <View className="rounded-lg border-2 border-black bg-white/80 p-3">
            <Text className="text-xs font-extrabold text-black">
              Productos disponibles
            </Text>

            <Text className="mt-1 text-xs text-black">
              Sánduche de Pollo · $1.25
            </Text>

            <Text className="text-xs text-black">
              Empanada de Viento · $0.75
            </Text>

            <Text className="text-xs text-black">
              Jugo de Mora · $0.80
            </Text>
          </View>
        </Card>

        <View className="mt-5 gap-4">
          <Card
            titulo="SÁNDUCHE DE POLLO"
            subtitulo="$1.25"
            variante="yellow"
          >
            <View className="mb-3 flex-row items-center gap-3">
              <Sandwich size={28} color="#000" />

              <Text className="flex-1 text-sm font-black uppercase text-black">
                Sánduche de pollo
              </Text>
            </View>

            <Button
              label="Agregar"
              variante="primary"
              onPress={agregarSanduche}
            />
          </Card>

          <Card
            titulo="EMPANADA DE VIENTO"
            subtitulo="$0.75"
            variante="pink"
          >
            <View className="mb-3 flex-row items-center gap-3">
              <Sparkles size={26} color="#000" />

              <Text className="flex-1 text-sm font-black uppercase text-black">
                Empanada de viento
              </Text>
            </View>

            <Button
              label="Agregar"
              variante="danger"
              onPress={agregarEmpanada}
            />
          </Card>

          <Card
            titulo="JUGO DE MORA"
            subtitulo="$0.80"
            variante="green"
          >
            <View className="mb-3 flex-row items-center gap-3">
              <CupSoda size={27} color="#000" />

              <Text className="flex-1 text-sm font-black uppercase text-black">
                Jugo de mora
              </Text>
            </View>

            <Button
              label="Agregar"
              variante="success"
              onPress={agregarJugo}
            />
          </Card>
        </View>

        <Card
          titulo="RESUMEN DEL CARRITO"
          subtitulo={`${items} producto${items === 1 ? '' : 's'}`}
          variante={tieneDescuento ? 'green' : 'cyan'}
        >
          <View className="mb-4 flex-row items-center gap-3">
            <ShoppingBag size={30} color="#000" />

            <View>
              <Text className="text-xs font-bold uppercase text-black">
                Total a pagar
              </Text>

              <Text className="text-3xl font-black text-black">
                ${total.toFixed(2)}
              </Text>
            </View>
          </View>

          {tieneDescuento && (
            <View className="mb-4 rounded-lg border-2 border-black bg-emerald-200 p-3">
              <Text className="text-xs font-black uppercase text-black">
                🎉 ¡Tienes descuento!
              </Text>

              <Text className="mt-1 text-xs font-bold text-black">
                Tu compra alcanzó los $5.00.
              </Text>
            </View>
          )}

          <View className="gap-3">
            <Button
              label="Confirmar pedido"
              variante="success"
              onPress={mostrarPedido}
              disabled={items === 0}
            />

            <Button
              label="Vaciar carrito"
              variante="danger"
              onPress={vaciarCarrito}
            />
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}