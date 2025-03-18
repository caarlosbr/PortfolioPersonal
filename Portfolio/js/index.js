document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("tema");
    const currentTheme = localStorage.getItem("theme");

    // Si el usuario tenía el modo claro activado, lo aplicamos, de lo contrario usamos oscuro por defecto
    if (currentTheme === "light") {
        document.body.classList.add("light-mode");
    } else {
        document.body.classList.add("dark-mode");
        toggleSwitch.classList.add("active");
    }

    // Evento para cambiar el tema
    toggleSwitch.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");
        toggleSwitch.classList.toggle("active");

        // Guardamos el tema actual en localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // Mostrar u ocultar imágenes según el tamaño de la ventana
    const imagenes = document.querySelectorAll("#imagen");
    imagenes.forEach(imagen => {
        if (window.innerWidth > 500) {
            imagen.style.display = "none";
        }
    });

    window.addEventListener("resize", function () {
        imagenes.forEach(imagen => {
            if (window.innerWidth > 500) {
                imagen.style.display = "none";
            } else {
                imagen.style.display = "block";
            }
        });
    });

    // Manejo de mockups según el tamaño de la ventana
    const cambiarMockups = document.querySelectorAll(".cambiarMokcup");

    cambiarMockups.forEach(cambiarMockup => {
        if (window.innerWidth < 500) {
            cambiarMockup.style.display = "none";
        } else {
            cambiarMockup.style.display = "flex";
        }

        window.addEventListener("resize", function () {
            if (window.innerWidth < 500) {
                cambiarMockup.style.display = "none";
            } else {
                cambiarMockup.style.display = "flex";
            }
        });

        // Mockup 1
        const cambiarMockupPc1 = document.getElementById("mockupPc1");
        const cambiarMockupMovil1 = document.getElementById("mockupMovil1");
        const mockupMovil1 = document.getElementById("movil1");
        const mockupPc1 = document.getElementById("pc1");

        mockupMovil1.style.display = "none";

        cambiarMockupPc1.addEventListener("click", function () {
            mockupMovil1.style.display = "none";
            mockupPc1.style.display = "block";
        });

        cambiarMockupMovil1.addEventListener("click", function () {
            mockupPc1.style.display = "none";
            mockupMovil1.style.display = "block";
        });

        // Mockup 2
        const cambiarMockupPc2 = document.getElementById("mockupPc2");
        const cambiarMockupMovil2 = document.getElementById("mockupMovil2");
        const mockupMovil2 = document.getElementById("movil2");
        const mockupPc2 = document.getElementById("pc2");

        mockupMovil2.style.display = "none";

        cambiarMockupPc2.addEventListener("click", function () {
            mockupMovil2.style.display = "none";
            mockupPc2.style.display = "block";
        });

        cambiarMockupMovil2.addEventListener("click", function () {
            mockupPc2.style.display = "none";
            mockupMovil2.style.display = "block";
        });

        // Mockup 3
        const cambiarMockupPc3 = document.getElementById("mockupPc3");
        const cambiarMockupMovil3 = document.getElementById("mockupMovil3");
        const mockupMovil3 = document.getElementById("movil3");
        const mockupPc3 = document.getElementById("pc3");

        mockupMovil3.style.display = "none";

        cambiarMockupPc3.addEventListener("click", function () {
            mockupMovil3.style.display = "none";
            mockupPc3.style.display = "block";
        });

        cambiarMockupMovil3.addEventListener("click", function () {
            mockupPc3.style.display = "none";
            mockupMovil3.style.display = "block";
        });

        // Mockup 4
        const cambiarMockupPc4 = document.getElementById("mockupPc4");
        const cambiarMockupMovil4 = document.getElementById("mockupMovil4");
        const mockupMovil4 = document.getElementById("movil4");
        const mockupPc4 = document.getElementById("pc4");

        mockupMovil4.style.display = "none";

        cambiarMockupPc4.addEventListener("click", function () {
            mockupMovil4.style.display = "none";
            mockupPc4.style.display = "block";
        });

        cambiarMockupMovil4.addEventListener("click", function () {
            mockupPc4.style.display = "none";
            mockupMovil4.style.display = "block";
        });

        // Funcionalidad para copiar correo al portapapeles
        const copiarBtn = document.getElementById("copiarBtn");
        const correoSpan = document.getElementById("correo");
      
        copiarBtn.addEventListener("click", () => {
            const textoACopiar = correoSpan.textContent;
            navigator.clipboard.writeText(textoACopiar);
        });
    });
});
