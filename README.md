# 📱 Taller Práctico — Semana 03: Expo Starter-Kit, NativeWind & useState
### Unidad Educativa Técnico Salesiano (UETS) — 3° BGU Informática (2026–2027)

Bienvenido/a al repositorio oficial de trabajo de la **Semana 03** del módulo de **Programación Móvil**. En esta práctica dominarás la estructura de proyectos con **Expo SDK 54**, la configuración previa de **NativeWind v4 (Tailwind CSS)**, los primitivos móviles nativos, la reactividad móvil con **`useState`**, y programarás la aplicación interactiva del **Bar Salesiano UETS**.

> [!IMPORTANT]
> **Modelo Evaluativo Dual MIT (10.0 Puntos Total):**
> - **Bloque A (50% · 5.0 pts):** Código en GitHub con pruebas superadas (`pnpm test`), TypeScript check limpio (`pnpm run check`), commits semánticos y entrega en Pull Request.
> - **Bloque B (50% · 5.0 pts):** Video Screencast demostrativo oral (3 a 5 min) con cámara y voz explicando `useState`, Modo Túnel, y demostrando la app en vivo en el celular con Expo Go.

---

## 📺 Guía Maestra & Diapositivas en Vivo (Cloudflare Edge)

[![Ver Diapositivas en Vivo](https://img.shields.io/badge/Guía_Maestra-Ver_en_Línea-38BDF8?style=for-the-badge&logo=cloudflare)](https://uets-pm-portal.vgmiltonisaac.workers.dev/03-expo-starter-kit/)

👉 **[Abrir Guía Maestra en el Portal Oficial (Cloudflare Workers)](https://uets-pm-portal.vgmiltonisaac.workers.dev/03-expo-starter-kit/)**  
👉 **[Ver Portal Principal de la Materia](https://uets-pm-portal.vgmiltonisaac.workers.dev/)**

---

## ❄️ 1. Setup Diario Anti-Deep Freeze & Expo Go Móvil

### En la computadora del laboratorio:
```bash
# 1. Configurar tu identidad exacta de GitHub:
git config --global user.name "TU_USUARIO_GITHUB"
git config --global user.email "tu_correo_registrado@ejemplo.com"

# 2. Instalar / verificar pnpm globalmente:
npm install -g pnpm

# 3. Comprobación rápida de versiones (Health Check):
node -v    # v20+ o v22+ LTS
git --version
pnpm -v
```

### En tu teléfono celular personal:
Descarga la aplicación gratuita **Expo Go** para probar tu app sin emuladores pesados:
- 🟢 **Android (Google Play):** [https://play.google.com/store/apps/details?id=host.exp.exponent](https://play.google.com/store/apps/details?id=host.exp.exponent)
- 🔵 **iOS (App Store):** [https://apps.apple.com/app/expo-go/id982107779](https://apps.apple.com/app/expo-go/id982107779)

---

## 🚀 Inicio Rápido en tu Computadora

### 1. Clonar tu Fork
Haz **Fork** de este repositorio hacia tu cuenta personal de GitHub y clónalo:
```bash
git clone https://github.com/TU_USUARIO/03-expo-starter-kit.git
cd 03-expo-starter-kit
```

### 2. Crear tu Rama de Trabajo Personal
```bash
git checkout -b entrega/nombre-apellido
```

### 3. Instalar Dependencias & Iniciar App en Modo Túnel
```bash
pnpm install

# Iniciar la App en tu celular con Expo Go (Modo Túnel obligatorio en la UETS):
pnpm start
# (o también: npx expo start --tunnel)
```
> *Aparecerá un gran Código QR en la terminal. Escanéalo con Expo Go (en Android) o con la app de Cámara (en iPhone).*

---

## 🥊 Los 4 Retos Obligatorios

| Reto | Archivo a Modificar | Concepto Clave | Script de Prueba | Puntos |
| :--- | :--- | :--- | :--- | :---: |
| **Reto 01** | `app.json` | Identidad, `slug`, `scheme` y Splash Screen | `pnpm run start:01` | **1.00 pt** |
| **Reto 02** | `components/ui/Button.tsx` | Props tipadas y variantes de Tailwind CSS | `pnpm run start:02` | **1.00 pt** |
| **Reto 03** | `app/(tabs)/tunnel.tsx` | Switch Reactivo con `useState(false)` | `pnpm run start:03` | **1.00 pt** |
| **Reto 04** | `app/(tabs)/pedidos.tsx` | Carrito reactivo del Bar Salesiano con descuento | `pnpm run start:04` | **1.00 pt** |

---

## 🛠️ Comandos de Validación Local

```bash
# 1. Probar reto por reto:
pnpm run start:01   # Reto 01: Identidad app.json
pnpm run start:02   # Reto 02: Botón Reutilizable Button.tsx
pnpm run start:03   # Reto 03: Switch de Red tunnel.tsx
pnpm run start:04   # Reto 04: Bar Salesiano pedidos.tsx

# 2. Ejecutar todos los retos con Auto-Sync Inteligente:
pnpm test
# (o también: pnpm run test:all)

# 3. Verificar que no existan errores de tipos en TypeScript:
pnpm run check
```

---

## 🚀 Guía de Flujo Git & Entrega en Pull Request

### Paso 1: Commits Semánticos (Conventional Commits)
```bash
git add -A
git commit -m "feat(reto-01): configurar identidad y esquema en app.json"
git commit -m "feat(reto-02): tipar props y variantes en Button.tsx"
git commit -m "feat(reto-03): implementar switch reactivo de red con useState"
git commit -m "feat(reto-04): completar logica de pedidos del bar salesiano"
git push origin entrega/nombre-apellido
```

### Paso 2: Abrir el Pull Request
> [!WARNING]
> **⚠️ Regla Crítica de Rama para el PR (Selector de GitHub):**  
> Al abrir el Pull Request en GitHub, verifica minuciosamente las ramas seleccionadas:  
> - **base repository:** `UETS-Programacion-Movil/03-expo-starter-kit` · **base:** `main`  
> - **head repository:** `TU_USUARIO/03-expo-starter-kit` · **compare:** `entrega/nombre-apellido`  
> *(Si dejas seleccionada la rama `main` de tu fork, GitHub dirá "There isn't anything to compare" con 0 commits).*

### 💡 Guía de Entrega Parcial Salesiana: ¡Nunca te quedes con 0!
Si concluye el tiempo y solo completaste 2 retos:
1. Haz `git add -A`, `git commit -m "feat: avance parcial"` y `git push origin entrega/nombre-apellido`.
2. Abre el Pull Request normalmente.
3. Graba tu Video Screencast oral demostrando tu avance para rescatar los **5.00 puntos orales completos**.

---

## 📹 Video Screencast Demostrativo (Bloque B · 5.0 pts)

Graba un video de **3 a 5 minutos** (Loom / YouTube No Listado / Google Drive):
1. **0:00 - 0:45:** Muestra tu rostro en cámara, di tu nombre completo y paralelo (`3E1` o `3E2`).
2. **0:45 - 1:45:** Explica conceptualmente qué es `useState`, por qué las variables `let` no sirven en React Native y por qué usamos el Modo Túnel (`--tunnel`) en la UETS.
3. **1:45 - 3:15:** Muestra la app interactiva funcionando en tu teléfono móvil personal con Expo Go.
4. **3:15 - 4:15:** Muestra la terminal corriendo `pnpm test` con los 4 retos en verde y `pnpm run check` con 0 errores.
5. **Entrega:** Pega el enlace del video en la descripción de tu Pull Request.

---

## ⚖️ Rúbrica de Evaluación Dual MIT (10.0 Puntos)

| Bloque Evaluativo | Criterio de Logro | Ponderación |
| :--- | :--- | :---: |
| **Bloque A: Pull Request en GitHub (50%)** | • 4 Retos superando pruebas automatizadas (`pnpm test`) (4.0 pts)<br>• Cero errores de tipos con `pnpm run check` (0.5 pts)<br>• Commits semánticos y File Guard respetado (0.5 pts) | **5.0 pts** |
| **Bloque B: Screencast Demostrativo (50%)** | • Sustentación conceptual de `useState` y Modo Túnel (2.5 pts)<br>• Demostración de pruebas en terminal y app en Expo Go (1.5 pts)<br>• Rostro visible, calidad audiovisual y enlace en PR (1.0 pt) | **5.0 pts** |
| **CALIFICACIÓN TOTAL** | **Suma Consolidada** | **10.0 pts** |

---

*Módulo Formativo: Aplicaciones Web y Móviles (Programación Móvil) — Unidad Educativa Técnico Salesiano (UETS) 2026–2027.*
