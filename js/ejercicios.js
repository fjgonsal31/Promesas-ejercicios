function peticionServidor() {
  return new Promise((resolve, reject) => {
    // let exito = false;
    let exito = true;

    setTimeout(() => {
      if (exito) {
        resolve({ id: 1, nombre: "producto" });
      } else {
        reject(new Error("Error en la petición."));
      }
    }, 2000);
  });
}

async function obtenerDatos() {
  try {
    const resultado = await peticionServidor();
    console.log(resultado);
  } catch (error) {
    console.error(`Error al obtener datos.`);
  }
}

peticionServidor()
  .then((datos) => console.log(`Datos recibidos!: ${datos}`))
  .catch((error) => console.error(`Error!: ${error}`));

obtenerDatos();

// const resultado = peticionServidor();
// console.log(resultado); // si abre el objeto en la consola 2 segundos despues, obtienes los datos
