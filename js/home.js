const fun = (el) => {
    console.log(`${el.id}`)
    }



const cardHtml = ( array, nodo ) => {
    const generarNodos = array.reduce(( acc, element) => {
        return acc + `
                <div class="container">
                <a href="${element.link}" target="_parent"><img onclick='console.log(${element.id})' src=${element.img} alt=${element.nombre}></a>
                    <div class="materias">
                        <h3>
                            ${element.materias[1]}
                        </h3>  
                        <h3>
                            ${element.materias[2]}
                        </h3>
                    </div>
                    <div class="nombre">             
                        <h3>
                            ${element.nombre}
                        </h3>
                    </div>
                    <div class="descripcion">
                        <p>${element.descripcion}</p>
                    </div>
                </div> `
    }, "")

    document.querySelector(nodo).innerHTML = generarNodos
}
cardHtml(oradores,".oradores")

