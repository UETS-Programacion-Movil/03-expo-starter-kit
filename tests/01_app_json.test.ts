import fs from "fs";
import path from "path";

console.log("=================================================================");
console.log("🥊 EJECUTANDO PRUEBAS: RETO 01 — Manifiesto y Configuración app.json");
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

const appJsonPath = path.resolve(process.cwd(), "app.json");
assert(fs.existsSync(appJsonPath), "El archivo app.json existe en la raíz");

const content = JSON.parse(fs.readFileSync(appJsonPath, "utf-8"));
const expo = content.expo || {};

assert(Boolean(expo.name), "app.json contiene 'name'", "Define name en app.json");
assert(Boolean(expo.slug), "app.json contiene 'slug'", "Define slug en app.json");
assert(expo.orientation === "portrait", "La orientación está fijada en 'portrait'", "Fija orientation: 'portrait'");
assert(Boolean(expo.scheme), "app.json define un 'scheme' para navegación nativa", "Define scheme en app.json (ej. 'uetsapp' o 'barsalesiano')");
assert(Boolean(expo.splash?.image), "app.json contiene imagen de splash screen", "Configura splash.image con ruta válida");

console.log("\n-----------------------------------------------------------------");
if (testsFallidos === 0) {
  console.log("🎉 ¡FELICITACIONES! Reto 01 superado con éxito. (1.00 / 1.00 pt)");
  console.log("-----------------------------------------------------------------\n");
  process.exit(0);
} else {
  console.log(`⚠️ Tienes ${testsFallidos} prueba(s) pendiente(s). Completa tu app.json y vuelve a ejecutar.`);
  console.log("-----------------------------------------------------------------\n");
  process.exit(1);
}
