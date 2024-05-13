var app = document.getElementById('app');

 

var typewriter = new Typewriter(app, {

    loop: true

});

 

typewriter.typeString('Estefania Estrada!')

    .pauseFor(1500)

    .deleteAll()

    .typeString('Una futura ingeniera')

    .pauseFor(1500)

    .deleteAll()

    .typeString(' Una amante de la vida')

    .pauseFor(1500)

    .start();