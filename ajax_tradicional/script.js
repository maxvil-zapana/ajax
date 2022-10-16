// alert("hola mundo");


const c=document.getElementById('content');
const b=document.getElementById('btnLoad');

b.addEventListener('click',evt=>{
    const xhr = new XMLHttpRequest()

    console.log('Obejto creado:',xhr.readyState)
    
    xhr.open('GET', 'data.html',true);
    console.log('Objeto Abierto (open):',xhr.readyState)
    
    //que se debe hacer con la data

    xhr.addEventListener('load',e=>{
        console.log(e.target)
        c.innerHTML=e.target.responseText
        console.log('Objeto cargado:',xhr.readyState)
    })

    xhr.send()

    console.log('Accion: solicitado',xhr.readyState)
})