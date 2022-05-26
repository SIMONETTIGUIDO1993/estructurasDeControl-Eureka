let clave: string = "eureka";
let cantidadDeIntentos: number = 0;
let claveIngresada: string | null = prompt("ingrese su clave");

for (let i = 1; i < 3; i++) {
  if (claveIngresada !== clave) {
    cantidadDeIntentos++;
    claveIngresada = prompt("ingrese su clave");
  } else {
    console.log("clave correcta");
    break;
  }
  if (cantidadDeIntentos === 3) {
    console.log("intentos agotados");
  }
}
