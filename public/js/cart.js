const addButton = document.querySelectorAll(".addButton");
addButton.forEach((addBtn) => {
  addBtn.addEventListener("click", (event) => {
    const productId = event.target.id;
    const amount = { quantity: 1 };
    //  console.log(productId,typeof(productId));
    fetch(`/api/carts/653eeb012e0ec29202518ac6/products/${productId}`, {
      method: "PUT",
      body: JSON.stringify(amount),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((json) => console.log(json));
  });
});

// document.addEventListener('click', function(event) {
//     if (event.target.id === 'addButton') {
//       // Encuentra el botón que se hizo clic
//       const addButton = event.target;

//       // Navega hacia arriba en el DOM para encontrar la ul
//       const ul = addButton.closest('ul');

//       if (ul) {
//         const ulId = ul.id;
//         console.log('ID de la ul:', ulId);
//       }
//     }
//   });

const addToCart = (id) => {
  console.log("id:", id);
  console.log("Agregado");
};
