import fs from "fs";
import path from "path";

console.log("=================================================================");
console.log("🥊 EJECUTANDO PRUEBAS: RETO 02 — Props & Variantes de Button.tsx");
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

const buttonPath = path.resolve(process.cwd(), "components/ui/Button.tsx");
assert(fs.existsSync(buttonPath), "El archivo components/ui/Button.tsx existe");

const content = fs.readFileSync(buttonPath, "utf-8");

console.log("🔍 Verificando Tipado de Variantes y Clases de Tailwind...");
assert(
  content.includes("ButtonVariant") && content.includes("'primary'") && content.includes("'danger'"),
  "Define el tipo ButtonVariant con variantes primary, secondary, danger y success",
  "Define: export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';"
);

assert(content.includes("bg-yellow-300"), "Variante 'primary' configurada con 'bg-yellow-300'");
assert(content.includes("bg-cyan-300"), "Variante 'secondary' configurada con 'bg-cyan-300'");
assert(content.includes("bg-pink-400"), "Variante 'danger' configurada con 'bg-pink-400'");
assert(content.includes("bg-emerald-300"), "Variante 'success' configurada con 'bg-emerald-300'");
assert(
  content.includes("shadow-[3px_3px_0px_0px_#000000]") || content.includes("border-[3px]"),
  "Aplica bordes definidos y estilos modulares con Tailwind"
);

console.log("\n-----------------------------------------------------------------");
if (testsFallidos === 0) {
  console.log("🎉 ¡FELICITACIONES! Reto 02 superado con éxito. (1.00 / 1.00 pt)");
  console.log("-----------------------------------------------------------------\n");
  process.exit(0);
} else {
  console.log(`⚠️ Tienes ${testsFallidos} prueba(s) pendiente(s). Completa Button.tsx y vuelve a ejecutar.`);
  console.log("-----------------------------------------------------------------\n");
  process.exit(1);
}
