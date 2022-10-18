let usuarios = [
  {
    id: 1,
    nombre: "Marcos",
  },
  {
    id: 2,
    nombre: "Lena",
  },
];

let telefonos = [
  {
    id: 1,
    telefono: 12345678,
  },
  {
    id: 2,
    telfono: 87654321,
  },
];

const obtenerUsuario=id=>{
    return new Promise((resolve,reject)=>{
        if(usuarios.find(usuario=>usuario.id===id)){
            console.log("el usuario existe")
            resolve(obtenerTelefono(id))
        }else{
            reject('el usuario no existe')
        }
    })
}

const obtenerTelefono=id=>{
    return new Promise((resolve,reject)=>{
    if(telefonos.find(telefono=>telefono.id===id)){
        resolve('el telefono existe')
    }else{ 
        reject('El telefono no existe')
    }
    })
}


obtenerUsuario(1)
.then(res=>{
    return res;
})
.then(mensaje=>{
    console.log(mensaje)
})
.catch(error=>{
    console.log(error);
})