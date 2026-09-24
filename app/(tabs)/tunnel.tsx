import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from '../../components/ui/Button';

export default function TunnelScreen() {
  const [tunelActivo, setTunelActivo] = useState(false);

  const toggleTunel = () => {
    setTunelActivo(!tunelActivo);
  };

  return (
    <ScrollView className="flex-1 bg-[#FFFDF9] p-6">
      <View className="p-6 bg-white border-[3px] border-black rounded-xl shadow-[4px_4px_0px_0px_#000] gap-4">
        <Text className="text-2xl font-black text-black">
          {tunelActivo ? 'TÚNEL CONECTADO' : 'RED LAN BLOQUEADA'}
        </Text>
        
        <Text className="text-base font-bold text-gray-700">
          {tunelActivo 
            ? 'Estado: Conexión segura Ngrok activa para Expo Go.' 
            : 'Estado: Modo LAN bloqueado por Client Isolation.'}
        </Text>

        <Button 
          label={tunelActivo ? 'Desconectar Túnel' : 'Conectar Modo Túnel'}
          variant={tunelActivo ? 'success' : 'danger'}
          onPress={toggleTunel}
        />
      </View>
    </ScrollView>
  );
}