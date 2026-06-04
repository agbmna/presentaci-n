let contador = 0;

const productos = document.querySelectorAll('.producto');

productos.forEach(producto => {

    producto.addEventListener('click', () => {

        contador++;

        document.getElementById('contador').innerText = contador;

        producto.setAttribute(
            'color',
            '#' + Math.floor(Math.random()*16777215).toString(16)
        );

        producto.setAttribute(
            'animation',
            'property: rotation; to: 0 360 0; dur: 1000'
        );

        // Crear sonido
        producto.setAttribute(
            "sound",
            "src: #click; autoplay: true"    
        )

    });

});
