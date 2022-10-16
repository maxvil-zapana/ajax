const setText = (data) => {
  myContent.textContent = data;
};

const getData = () => {
  return new Promise((resolve, reject) => {
    setText("solicitando autorización");
    setTimeout(() => {
      resolve(false);
    }, 1000);
  });
};
const showData = () => {
  return new Promise((resolve, reject) => {
    setText("Esperando a mostrar la información");
    setTimeout(() => {
      resolve({ name: "Carol" });
    }, 1000);
  });
};

btn.addEventListener("click", () => {
  getData()
    .then((authorization) => {
      if (authorization) {
        return showData();
      }
    })
    .then((user) => {
      setText(user.name);
    });
});
