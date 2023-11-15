const porsches = [
    { titulo: "Porsche 718 Spyder", foto: "../img/718ppyder.png" },
    { titulo: "Porsche 911 Carrera", foto: "../img/911carrera.png" },
    { titulo: "Porsche 911 Turbo S", foto: "../img/911tubo.png" },
    { titulo: "Porsche 918 Sypder", foto: "../img/918-spyder.png" },
    { titulo: "Porsche 911 GT3RS", foto: "../img/gt3rs.png" },
    { titulo: "Porsche Macan", foto: "../img/maca.png" },
    { titulo: "Porsche Panamera", foto: "../img/panamera.png" },
    { titulo: "Porsche GT", foto: "../img/pngwing.com (1).png" },
    { titulo: "Porsche Boxter", foto: "../img/PorscheBoxster.png" },
    { titulo: "Porsche Cayman", foto: "../img/PorscheCayman.png" },
    { titulo: "Porsche Tycan", foto: "../img/PorscheTaycan.png" },
    { titulo: "Porsche 911 Targa", foto: "../img/targa.png" },
    { titulo: "Porsche 959", foto: "../img/porsche959.png" },
    { titulo: "Porsche 935", foto: "../img/Porsche935.png"},
    { titulo: "Porsche 977", foto: "../img/porsche977.png"},
    { titulo: "Porsche 911gt2", foto: "../img/carlosporsche.png"},
    { titulo: "Porsche 356", foto: "../img/porsche356.png"},
    { titulo: "Porsche 964", foto: "../img/porsche964.png"},
    { titulo: "Porsche 550", foto: "../img/porsche550.png"},
    { titulo: "Porsche 930", foto: "../img/porsche930.png"},
    { titulo: "Sally Carrera", foto: "../img/sallycarrera.png"},
];

let carroExibido = false;
let RandomPorsche; 

function mostrarPorsche() {
    document.getElementById("titulo").innerText = RandomPorsche.titulo;
    document.getElementById("foto").src = RandomPorsche.foto;
}

function formatTime(num) {
    return num < 10 ? '0' + num : num;
}

function time() {
    var agora = new Date();
    var hora = formatTime(agora.getHours())
    var minutos = formatTime(agora.getMinutes())

    const clock = document.getElementById("clock")
    clock.textContent = hora + ":" + minutos;

    if (!carroExibido && agora.getHours() === 9 && agora.getMinutes() === 11){
        RandomPorsche = porsches[Math.floor(Math.random() * porsches.length)]
        mostrarPorsche();
        carroExibido = true;
    }
    
    if (!carroExibido && agora.getHours() === 21 && agora.getMinutes() === 11){
        RandomPorsche = porsches[Math.floor(Math.random() * porsches.length)]
        mostrarPorsche()
        carroExibido = true
    }
    
}

function setime(){
    var body = document.body
    body.classList.remove('manha', 'noite')

    var agora = new Date()
    var horas = formatTime(agora.getHours())

    if(horas >= 6 && horas < 18 ){
        body.classList.add('manha')
    }else{
        body.classList.add('noite')
    }

}

setime()
setInterval(time, 1000);
