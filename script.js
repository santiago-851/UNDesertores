document.addEventListener('DOMContentLoaded', () => {

    // === PROGRESO DE SCROLL ===
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        document.getElementById('progressBar').style.width = `${scrollPercent}%`;
    });

    // === ALERTAS SWEETALERT ===
    function alerta(titulo, texto, tipo) {
        Swal.fire({
            title: titulo,
            text: texto,
            icon: tipo,
            confirmButtonColor: '#007bff'
        });
    }

    // === PREGUNTA 1 ===
    const btn1 = document.getElementById('calculateButton');
    const rInput = document.getElementById('input_radio_circunferencia');
    const res1 = document.getElementById('calculationResult');

    btn1.addEventListener('click', () => {
        const r = parseFloat(rInput.value);
        if (isNaN(r) || r <= 0) {
            alerta('Error', 'Por favor ingrese un radio válido (> 0)', 'error');
            return;
        }

        const a = 5, b = r, c = - (r**2 - (r/2)**2);
        const D = b**2 - 4*a*c;

        if (D < 0) {
            alerta('Sin solución', 'No hay raíces reales (discriminante < 0)', 'warning');
            return;
        }

        const sqrtD = Math.sqrt(D);
        const x1 = (-b + sqrtD) / (2*a);
        const x2 = (-b - sqrtD) / (2*a);
        const x = (x1 > 0 ? x1 : x2);

        const areaTotal = 2*((r/2)**2) + 2*(x**2);
        res1.textContent = `Área total: ${areaTotal.toFixed(4)} unidades²`;
        res1.style.color = 'green';
    });

    // === PREGUNTA 2 ===
    const btn2 = document.getElementById('calculateButton2');
    const ladoInput = document.getElementById('input_cuadrado_lado');
    const radioInput = document.getElementById('input_circunferencia_radio');
    const res2 = document.getElementById('calculationResult2');

    btn2.addEventListener('click', () => {
        const lado = parseFloat(ladoInput.value);
        const r = parseFloat(radioInput.value);

        if (isNaN(lado) || isNaN(r) || lado <= 0 || r <= 0) {
            alerta('Error', 'Ingrese números válidos para lado y radio.', 'error');
            return;
        }

        const areaCuadrado = lado ** 2;
        const areaCirculo = Math.PI * (r ** 2);
        const areaSombreada = areaCuadrado - areaCirculo;

        res2.textContent = `Área sombreada: ${areaSombreada.toFixed(3)} unidades²`;
        res2.style.color = 'green';
    });

});
