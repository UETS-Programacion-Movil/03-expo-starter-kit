import fs from "fs";
import path from "path";

console.log("=================================================================");
console.log("🥊 EJECUTANDO PRUEBAS: RETO 03 — Reactividad con useState (tunnel.tsx)");
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

const tunnelPath = path.resolve(process.cwd(), "app/(tabs)/tunnel.tsx");
assert(fs.existsSync(tunnelPath), "El archivo app/(tabs)/tunnel.tsx existe");

const content = fs.readFileSync(tunnelPath, "utf-8");

assert(content.includes("useState"), "Importa y utiliza el hook 'useState'", "Usa const [tunelActivo, setTunelActivo] = useState(false);");
assert(
  /const\s*\[\s*tunelActivo\s*,\s*setTunelActivo\s*\]\s*=\s*useState/.test(content),
  "Declara el estado reactivo [tunelActivo, setTunelActivo]",
  "Declara: const [tunelActivo, setTunelActivo] = useState(false);"
);
assert(
  content.includes("toggleTunel") || content.includes("setTunelActivo(!tunelActivo)"),
  "Contiene función para alternar el estado del túnel",
  "Implementa la función toggleTunel para cambiar el estado"
);
assert(
  content.includes("tunelActivo ?") || content.includes("if (tunelActivo)"),
  "Renderiza condicionalmente el estado del túnel en la UI",
  "Usa el operador ternario tunelActivo ? ... : ... en el Card o Button"
);

console.log("\n-----------------------------------------------------------------");
if (testsFallidos === 0) {
  console.log("🎉 ¡FELICITACIONES! Reto 03 superado con éxito. (1.00 / 1.00 pt)");
  console.log("-----------------------------------------------------------------\n");
  process.exit(0);
} else {
  console.log(`⚠️ Tienes ${testsFallidos} prueba(s) pendiente(s). Revisa app/(tabs)/tunnel.tsx y vuelve a ejecutar.`);
  console.log("-----------------------------------------------------------------\n");
  process.exit(1);
}
