var app = document.getElementById('app');

 

var typewriter = new Typewriter(app, {

    loop: true

});

 

typewriter.typeString('Estefania Estrada')

    .pauseFor(1500)

    .deleteAll()

    .typeString('Una futura ingeniera')

    .pauseFor(1500)

    .deleteAll()

    .typeString('Apacionada del teror')

    .pauseFor(1500)

    .start();