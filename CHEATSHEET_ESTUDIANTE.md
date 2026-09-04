# ⚡ Hoja de Referencia (Cheatsheet) — Semana 03
### Expo SDK 54, NativeWind & useState — UETS 2026-2027

---

## ❄️ 0. Setup Diario Anti-Deep Freeze & Expo Go Móvil

```bash
# 1. Configurar tu identidad exacta de GitHub:
git config --global user.name "TU_USUARIO_GITHUB"
git config --global user.email "tu_correo_registrado@ejemplo.com"

# 2. Instalar / verificar pnpm globalmente:
npm install -g pnpm

# 3. En tu teléfono: Instalar Expo Go (Google Play o Apple App Store)
```

---

## 🛠️ 1. Comandos Esenciales en Terminal

| Acción | Comando | Notas |
| :--- | :--- | :--- |
| **Instalar Dependencias** | `pnpm install` | Rápido y con symlinks |
| **Iniciar App en Celular (Túnel)** | `pnpm start` | Ya incluye `--tunnel` en este repo |
| **Comando Túnel Explícito** | `npx expo start --tunnel` | Universal para cualquier proyecto Expo |
| **Probar Reto 01 (`app.json`)** | `pnpm run start:01` | Valida slug, name, scheme |
| **Probar Reto 02 (`Button.tsx`)** | `pnpm run start:02` | Valida variantes y props tipadas |
| **Probar Reto 03 (`tunnel.tsx`)** | `pnpm run start:03` | Valida useState booleano |
| **Probar Reto 04 (`pedidos.tsx`)** | `pnpm run start:04` | Valida carrito del Bar Salesiano |
| **Correr Todas las Pruebas** | `pnpm test` | Auto-Sync con main |
| **Verificar Tipos (0 errores)** | `pnpm run check` | `tsc --noEmit` |

---

## 🧠 2. ¿Qué es `useState` y cómo funciona la reactividad?

El hook `useState` permite que un componente de React Native "recuerde" un dato y **gatille un redibujado automático (re-render)** en la pantalla del celular cuando cambia:

```tsx
import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

export function BotonLikes() {
  // 1. Declarar estado: [valorActual, funcionMutadora]
  const [likes, setLikes] = useState<number>(0);

  // 2. Al tocar, setLikes actualiza la memoria y React redibuja la UI
  return (
    <View className="items-center p-4">
      <TouchableOpacity
        className="bg-yellow-300 border-2 border-black p-3 rounded-lg"
        onPress={() => setLikes(likes + 1)}
      >
        <Text className="font-bold">❤️ Likes: {likes}</Text>
      </TouchableOpacity>
    </View>
  );
}
```

> [!WARNING]
> **¿Por qué `let likes = 0` no sirve?**  
> Porque React Native está ciego ante variables locales normales. Si cambias `likes = likes + 1`, el valor en memoria cambia pero no hay disparador de evento: **la pantalla física se quedará congelada**.

---

## 📱 3. Los 4 Primitivos Nativos vs HTML Web

| Primitivo Nativo | Equivalente Web | ¿Para qué sirve? | Regla de Oro |
| :--- | :--- | :--- | :--- |
| **`<View>`** | `<div>` | Contenedor base de maquetación | Flexbox activo por defecto (`column`). |
| **`<Text>`** | `<p>`, `<span>`, `<h1>` | Renderizar texto | ¡Todo texto DEBE ir dentro de `<Text>` o la app crashea! |
| **`<TouchableOpacity>`** | `<button>` | Elemento interactivo táctil | Da retroalimentación reduciendo opacidad en `onPress`. |
| **`<ScrollView>`** | `overflow-y: scroll` | Contenedor con scroll | En móvil la pantalla no scrollea sola; requiere `<ScrollView>`. |

---

## 🎨 4. Equivalencias de Estilos: StyleSheet vs NativeWind

| Estilo Deseado | StyleSheet Tradicional | NativeWind v4 (Tailwind CSS) |
| :--- | :--- | :--- |
| **Fondo Amarillo Neo-Brutalista** | `backgroundColor: '#FDE047'` | `className="bg-yellow-300"` |
| **Borde Negro Grueso (3.5px)** | `borderWidth: 3.5, borderColor: '#000'` | `className="border-[3.5px] border-black"` |
| **Sombra Dura Neo-Brutalista** | Requiere `shadowColor` + `elevation` | `className="shadow-[4px_4px_0px_#000]"` |
| **Flex y Centrado** | `display: 'flex', alignItems: 'center'` | `className="flex items-center"` |

---

## 🚀 5. Flujo Git y Regla Crítica de Pull Request

```bash
git checkout -b entrega/nombre-apellido
git add -A
git commit -m "feat: completar los 4 retos de la semana 03"
git push origin entrega/nombre-apellido
```

> [!WARNING]
> **⚠️ Regla Crítica de Rama para el PR:**  
> Compara siempre:  
> - **base:** `main` (docente)  
> - **compare:** `entrega/nombre-apellido` (tu rama)

---

## 🎬 6. Guión Rápido para tu Screencast (3 a 5 min)

1. **[0:00 - 0:45] Intro:** Muestra tu rostro en cámara, di tu nombre y paralelo.
2. **[0:45 - 1:45] Teoría:** Explica cómo funciona `useState`, por qué `let` falla y por qué usamos `--tunnel` en la red del colegio.
3. **[1:45 - 3:00] App en Vivo:** Muestra la app del Bar Salesiano en tu celular personal funcionando vía Expo Go.
4. **[3:00 - 4:00] Terminal:** Corre `pnpm test` (4 retos verdes) y `pnpm run check` (0 errores).
5. **[4:00 - 4:30] Cierre:** Pega el enlace del video en tu Pull Request de GitHub.
