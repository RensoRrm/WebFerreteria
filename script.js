const productos = [
    { nombre: "Martillo", imagen: "img/martillo.jpg", precio: "S/ 25" },
    { nombre: "Caja de clavos", imagen: "img/clavos.jpg", precio: "S/ 10" }
  ];
  
  const contenedor = document.getElementById("productos");
  const buscador = document.getElementById("buscar");
  
  function mostrarProductos(lista) {
    contenedor.innerHTML = "";
    lista.forEach(p => {
      contenedor.innerHTML += `
        <div class="card">
          <h3>${p.nombre}</h3>
          <img src="${p.imagen}" width="150">
          <p>${p.precio}</p>
        </div>
      `;
    });
  }
  
  buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();
    const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(texto));
    mostrarProductos(filtrados);
  });
  
  mostrarProductos(productos);
  