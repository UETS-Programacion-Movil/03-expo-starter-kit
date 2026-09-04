import fs from "fs";
import path from "path";

console.log("=================================================================");
console.log("🥊 EJECUTANDO PRUEBAS: RETO 04 — Desafío Bar Salesiano Mobile");
console.log("=================================================================\n");

let testsFallidos = 0;

function assert(condicion: boolean, descripcion: string, pista?: string) {
  if (condicion) {
    console.log(`  ✅ [PASÓ]: ${descripcion}`);
  } else {
    console.log(`  ❌ [FALLÓ]: ${descripcion}`);
    if (pista) console.log(`     👉 PISTA: ${pista}`);
    testsFallidos++;
  }
}

const pedidosPath = path.resolve(process.cwd(), "app/(tabs)/pedidos.tsx");
assert(fs.existsSync(pedidosPath), "El archivo app/(tabs)/pedidos.tsx existe");

const content = fs.readFileSync(pedidosPath, "utf-8");

console.log("🔍 Verificando Estructura de Estados con useState...");
assert(content.includes("useState"), "Importa y utiliza el hook 'useState'", "Usa useState(0)");
assert(
  /const\s*\[\s*total\s*,\s*setTotal\s*\]\s*=\s*useState/.test(content),
  "Declara el estado reactivo [total, setTotal] para el dinero acumulado",
  "Declara: const [total, setTotal] = useState(0);"
);

assert(
  /const\s*\[\s*items\s*,\s*setItems\s*\]\s*=\s*useState/.test(content),
  "Declara el estado reactivo [items, setItems] para el conteo de productos",
  "Declara: const [items, setItems] = useState(0);"
);

console.log("\n🔍 Verificando Funciones de Suma Directa...");
assert(
  content.includes("agregarSanduche") || content.includes("1.25"),
  "Define función para agregar Sanduche (+ $1.25)"
);

assert(
  content.includes("agregarEmpanada") || content.includes("0.75"),
  "Define función para agregar Empanada (+ $0.75)"
);

assert(
  content.includes("vaciarCarrito") || content.includes("setTotal(0)"),
  "Define función para vaciar el carrito"
);

console.log("\n-----------------------------------------------------------------");
if (testsFallidos === 0) {
  console.log("🎉 ¡FELICITACIONES! Reto 04 superado con éxito. (1.00 / 1.00 pt)");
  console.log("-----------------------------------------------------------------\n");
  process.exit(0);
} else {
  console.log(`⚠️ Tienes ${testsFallidos} prueba(s) pendiente(s). Revisa app/(tabs)/pedidos.tsx y vuelve a ejecutar.`);
  console.log("-----------------------------------------------------------------\n");
  process.exit(1);
}
