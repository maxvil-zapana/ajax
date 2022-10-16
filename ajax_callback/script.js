const setText = (data) => {
  myContent.textContent = data;
};

const getData = (callback) => {
  setText("solicitando autorización");
  setTimeout(() => {
    callback(true);
  }, 1000);
};
const showData = (callback) => {
  setText("Esperando a mostrar la información");
  setTimeout(() => {
    callback({ name: "Carol" });
  }, 1000);
};

btn.addEventListener("click", () => {
  getData((authorization) => {
    if (authorization) {
      showData((user) => {
        setText(user.name);
      });
    }
  });
});
