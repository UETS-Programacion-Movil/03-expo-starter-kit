import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { Home, Palette, Wifi, UtensilsCrossed } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFDF9',
          borderTopWidth: 3,
          borderTopColor: '#0A0A0A',
          height: 70,
          paddingBottom: 10,
          paddingTop: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 1,
          shadowRadius: 0,
          elevation: 8,
        },
        tabBarActiveTintColor: '#0A0A0A',
        tabBarInactiveTintColor: '#777777',
        tabBarLabelStyle: {
          fontFamily: 'Space Grotesk',
          fontWeight: '800',
          fontSize: 11,
          textTransform: 'uppercase',
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size, focused }) => (
            <Home size={22} color={focused ? '#0A0A0A' : '#777777'} strokeWidth={focused ? 2.8 : 2} />
          ),
        }}
      />
      <Tabs.Screen
        name="nativewind"
        options={{
          title: 'UI Gallery',
          tabBarIcon: ({ color, size, focused }) => (
            <Palette size={22} color={focused ? '#0A0A0A' : '#777777'} strokeWidth={focused ? 2.8 : 2} />
          ),
        }}
      />
      <Tabs.Screen
        name="tunnel"
        options={{
          title: 'Modo Túnel',
          tabBarIcon: ({ color, size, focused }) => (
            <Wifi size={22} color={focused ? '#0A0A0A' : '#777777'} strokeWidth={focused ? 2.8 : 2} />
          ),
        }}
      />
      <Tabs.Screen
        name="pedidos"
        options={{
          title: 'Bar Salesiano',
          tabBarIcon: ({ color, size, focused }) => (
            <UtensilsCrossed size={22} color={focused ? '#0A0A0A' : '#777777'} strokeWidth={focused ? 2.8 : 2} />
          ),
        }}
      />
    </Tabs>
  );
}
