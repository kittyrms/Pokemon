const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonPokemonJugador = document.getElementById('boton-pokemon')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionReiniciar.style.display = 'none'

const seccionSeleccionarPokemon = document.getElementById('seleccionar-pokemon')
const spanMascotaJugador = document.getElementById('pokemon-jugador')

const spanPokemonEnemigo = document.getElementById('pokemon-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let pokemones = []
let ataqueJugador =[]
let ataqueEnemigo = []
let opcionDePokemon
let inputCubone
let inputLapras
let inputPiplup
let inputPlusle
let inputVulpix
let pokemonJugador
let pokemonJugaedorObjeto
let ataquesPokemon
let ataquesPokemonEnemigo
let botonFuego
let botonAgua
let botonTierra
let botonHielo
let botonElectrico
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0 
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/pokemonmap.png'
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Pokemon {
    constructor(nombre, foto, vida, fotoMapa) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let cubone = new Pokemon('Cubone', './assets/cubonePokemon.png', 5, './assets/cubonee.png')

let lapras = new Pokemon('Lapras', './assets/laprasPokemon.png', 5, './assets/Lapras.webp')

let piplup = new Pokemon('Piplup', './assets/piplupPokemon.png', 5, './assets/piplupp.png')

let plusle = new Pokemon('Plusle', './assets/pluslePokemon.png', 5, './assets/plusle.webp')

let vulpix = new Pokemon('Vulpix', './assets/vulpixPokemon.png', 5, './assets/vulpix.webp')

let cuboneEnemigo = new Pokemon('Cubone', './assets/cubonePokemon.png', 5, './assets/cubonee.png')

let laprasEnemigo = new Pokemon('Lapras', './assets/laprasPokemon.png', 5, './assets/Lapras.webp')

let piplupEnemigo = new Pokemon('Piplup', './assets/piplupPokemon.png', 5, './assets/piplupp.png')

let plusleEnemigo = new Pokemon('Plusle', './assets/pluslePokemon.png', 5, './assets/plusle.webp')

let vulpixEnemigo = new Pokemon('Vulpix', './assets/vulpixPokemon.png', 5, './assets/vulpix.webp')

cubone.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🧊', id: 'boton-hielo' },
    { nombre: '⚡', id: 'boton-electrico' },
)

cuboneEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🧊', id: 'boton-hielo' },
    { nombre: '⚡', id: 'boton-electrico' },
)

lapras.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🧊', id: 'boton-hielo' },
    { nombre: '⚡', id: 'boton-electrico' },
)

laprasEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🧊', id: 'boton-hielo' },
    { nombre: '⚡', id: 'boton-electrico' },
)

piplup.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🧊', id: 'boton-hielo' },
    { nombre: '⚡', id: 'boton-electrico' },
)

piplupEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🧊', id: 'boton-hielo' },
    { nombre: '⚡', id: 'boton-electrico' },
)

plusle.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🧊', id: 'boton-hielo' },
    { nombre: '⚡', id: 'boton-electrico' },
)

plusleEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🧊', id: 'boton-hielo' },
    { nombre: '⚡', id: 'boton-electrico' },
)

vulpix.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🧊', id: 'boton-hielo' },
    { nombre: '⚡', id: 'boton-electrico' },
)

vulpixEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🧊', id: 'boton-hielo' },
    { nombre: '⚡', id: 'boton-electrico' },
)

pokemones.push(cubone,lapras,piplup,plusle,vulpix)

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

    pokemones.forEach((pokemon) => {
        opcionDePokemon = `
        <input type="radio" name="pokemon" id=${pokemon.nombre} />
        <label class="tarjeta-de-pokemon" for=${pokemon.nombre}>
            <p>${pokemon.nombre}</p>
            <img src=${pokemon.foto} alt=${pokemon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDePokemon

     inputCubone = document.getElementById('Cubone')
     inputLapras = document.getElementById('Lapras')
     inputPiplup = document.getElementById('Piplup')
     inputPlusle = document.getElementById('Plusle')
     inputVulpix = document.getElementById('Vulpix')

    })
    
    botonPokemonJugador.addEventListener('click', seleccionarPokemonJugador)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarPokemonJugador() {
    
    seccionSeleccionarPokemon.style.display = 'none'
    
    if (inputCubone.checked) {
        spanMascotaJugador.innerHTML = inputCubone.id
        pokemonJugador = inputCubone.id
    } else if (inputLapras.checked) {
        spanMascotaJugador.innerHTML = inputLapras.id
        pokemonJugador = inputLapras.id
    } else if (inputPiplup.checked) {
        spanMascotaJugador.innerHTML = inputPiplup.id
        pokemonJugador = inputPiplup.id
    } else if (inputPlusle.checked) {
        spanMascotaJugador.innerHTML = inputPlusle.id
        pokemonJugador = inputPlusle.id
    } else if (inputVulpix.checked) {
        spanMascotaJugador.innerHTML = inputVulpix.id
        pokemonJugador = inputVulpix.id
    } else {
        alert('Selecciona un pokemon')
    }

    extraerAtaques(pokemonJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
}

function extraerAtaques(pokemonJugador) {
    let ataques
    for (let i = 0; i < pokemones.length; i++) {
        if (pokemonJugador === pokemones[i].nombre) {
            ataques = pokemones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesPokemon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesPokemon
    })

     botonFuego = document.getElementById('boton-fuego')
     botonAgua = document.getElementById('boton-agua')
     botonTierra = document.getElementById('boton-tierra')
     botonHielo = document.getElementById('boton-hielo')
     botonElectrico = document.getElementById('boton-electrico')
     botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true   
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true  
            } else if (e.target.textContent === '🌱') {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if (e.target.textContent === '🧊') {
                ataqueJugador.push('HIELO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else {
                ataqueJugador.push('ELECTRICO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true  
            
            }
            ataqueAleatorioEnemigo()
        })
    })
    

}

function seleccionarPokemonEnemigo(enemigo) {
    spanPokemonEnemigo.innerHTML = enemigo.nombre
    ataquesPokemonEnemigo = enemigo.ataques
    secuenciaAtaque()
}


function ataqueAleatorioEnemigo() {
    console.log('Ataques enemigo', ataquesPokemonEnemigo);
    let ataqueAleatorio = aleatorio(0,ataquesPokemonEnemigo.length -1)
    
    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('TIERRA')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('HIELO')
    } else {
        ataqueEnemigo.push('ELECTRICO')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponente(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponente(index, index)
            crearMensaje("EMPATE")
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] ==='AGUA' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'TIERRA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'HIELO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'ELECTRICO' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'HIELO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'ELECTRICO' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'HIELO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'ELECTRICO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'HIELO' && ataqueEnemigo[index] === 'ELECTRICO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponente(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto fue un empate!!!")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else {
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}

function crearMensaje(resultado) {
    
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    
    sectionMensajes.innerHTML = resultadoFinal


    
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas() {
    pokemonJugaedorObjeto.x = pokemonJugaedorObjeto.x + pokemonJugaedorObjeto.velocidadX
    pokemonJugaedorObjeto.y = pokemonJugaedorObjeto.y + pokemonJugaedorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    pokemonJugaedorObjeto.pintarMokepon()
    cuboneEnemigo.pintarMokepon()
    laprasEnemigo.pintarMokepon()
    piplupEnemigo.pintarMokepon()
    plusleEnemigo.pintarMokepon()
    vulpixEnemigo.pintarMokepon()
    if (pokemonJugaedorObjeto.velocidadX !== 0 || pokemonJugaedorObjeto.velocidadY !== 0) {
        revisarColision(cuboneEnemigo)
        revisarColision(laprasEnemigo)
        revisarColision(piplupEnemigo)
        revisarColision(plusleEnemigo)
        revisarColision(vulpixEnemigo)
    }
}

function moverDerecha() {
    pokemonJugaedorObjeto.velocidadX = 5
}

function moverIzquierda() {
    pokemonJugaedorObjeto.velocidadX = -5
}

function moverAbajo() {
    pokemonJugaedorObjeto.velocidadY = 5
}

function moverArriba() {
    pokemonJugaedorObjeto.velocidadY = -5
}

function detenerMovimiento() {
    pokemonJugaedorObjeto.velocidadX = 0
    pokemonJugaedorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa() {

    pokemonJugaedorObjeto = obtenerObjetoMascota(pokemonJugador)
    console.log(pokemonJugaedorObjeto, pokemonJugador);
    intervalo = setInterval(pintarCanvas, 50)
    
    window.addEventListener('keydown', sePresionoUnaTecla)

    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota() {
    for (let i = 0; i < pokemones.length; i++) {
        if (pokemonJugador === pokemones[i].nombre) {
            return pokemones[i]
        }
        
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = 
        pokemonJugaedorObjeto.y
    const abajoMascota = 
        pokemonJugaedorObjeto.y + pokemonJugaedorObjeto.alto
    const derechaMascota = 
        pokemonJugaedorObjeto.x + pokemonJugaedorObjeto.ancho
    const izquierdaMascota = 
        pokemonJugaedorObjeto.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    console.log('Se detecto una colision');
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarPokemonEnemigo(enemigo)
}

window.addEventListener('load', iniciarJuego)
