import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Wifi,
  WifiOff,
  CloudLightning,
  Network,
} from 'lucide-react-native';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export default function TunnelScreen() {
  const [tunelActivo, setTunelActivo] = useState(false);

  const toggleTunel = () => {
    setTunelActivo(!tunelActivo);
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
          <Badge label="RETO 03 · REACTIVIDAD CON USESTATE" tone="green" />

          <View className="mt-2 flex-row items-center gap-2">
            <Network size={26} color="#000" />
            <Text className="text-3xl font-black uppercase text-black">
              Modo Túnel UETS
            </Text>
          </View>

          <Text className="mt-1 text-xs font-bold text-black/70">
            Supera el aislamiento de la red WiFi institucional alternando el estado reactivo.
          </Text>
        </View>

        <Card
          titulo="📘 ENUNCIADO ACADÉMICO · RETO 03 (1.00 PT)"
          subtitulo="Control de estado booleano en app/(tabs)/tunnel.tsx"
          variante="yellow"
        >
          <Text className="mb-3 text-xs font-bold leading-relaxed text-black">
            <Text className="font-bold">Misión:</Text> Utiliza{' '}
            <Text className="font-mono font-bold text-pink-700">
              useState(false)
            </Text>{' '}
            para controlar el estado del túnel.
          </Text>

          <View className="gap-1.5 rounded-lg border-2 border-black bg-white/80 p-3">
            <Text className="text-xs font-extrabold text-black">
              🔍 Verificación del Reto:
            </Text>

            <Text className="text-xs font-medium text-black">
              1. Activa y desactiva el túnel con el botón.
            </Text>

            <Text className="text-xs font-medium text-black">
              2. La tarjeta cambia según el estado.
            </Text>

            <Text className="text-xs font-medium text-black">
              3. Ejecuta: pnpm run start:03
            </Text>
          </View>
        </Card>

        <Card
          titulo={tunelActivo ? 'TÚNEL CONECTADO' : 'RED LAN BLOQUEADA'}
          variante={tunelActivo ? 'green' : 'pink'}
        >
          <View className="mb-3 flex-row items-center gap-2">
            {tunelActivo ? (
              <Wifi size={24} color="#000" />
            ) : (
              <WifiOff size={24} color="#000" />
            )}

            <Text className="text-sm font-black uppercase text-black">
              {tunelActivo
                ? 'Conectado vía Expo Cloud'
                : 'Bloqueado por Client Isolation'}
            </Text>
          </View>

          <Text className="mb-3 text-xs font-bold leading-relaxed text-black">
            {tunelActivo
              ? 'El túnel seguro de Expo está activo y permite la comunicación mediante los servidores de Expo.'
              : 'La red institucional aísla los dispositivos clientes y evita la comunicación directa.'}
          </Text>

          <View className="mb-3 flex-row items-center gap-2 rounded-lg border-2 border-black bg-white/80 p-3">
            <CloudLightning size={18} color="#000" />

            <Text className="text-xs font-extrabold text-black">
              URL:{' '}
              {tunelActivo
                ? 'exp://bar-salesiano.exp.direct:80'
                : 'exp://192.168.10.45:8081 (Sin Conexión)'}
            </Text>
          </View>

          <Button
            label={
              tunelActivo
                ? 'Desconectar Túnel'
                : 'Activar Modo Túnel (--tunnel)'
            }
            variante={tunelActivo ? 'danger' : 'success'}
            onPress={toggleTunel}
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}