/* ============================================================
   SCRIPT PRINCIPAL - QUIZ 17: MATEMÁTICAS BÁSICAS
   Autor: Santiago Roberto Saiz
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

   /* =========================
   BOTÓN DE TEMA CLARO/OSCURO
========================= */
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggle.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? '' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
  });
});

  /* =========================
     CONTROL DE TEMA CLARO/OSCURO
  ========================== */
  const themeToggle = document.createElement('button');
  themeToggle.id = 'theme-toggle';
  themeToggle.innerHTML = '🌙';
  document.querySelector('header').appendChild(themeToggle);

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggle.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? '' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
  });

  /* =========================
     BARRA DE PROGRESO
  ========================== */
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progressBar').style.width = `${scrollPercent}%`;
  });

  /* =========================
     PREGUNTA 1
  ========================== */
  const calculateButton = document.getElementById('calculateButton');
  const input_radio_circunferencia = document.getElementById('input_radio_circunferencia');
  const calculationResult = document.getElementById('calculationResult');
    
  calculateButton.addEventListener('click', function() {
      const r = parseFloat(input_radio_circunferencia.value);
      if (isNaN(r) || r <= 0) {
          calculationResult.textContent = 'Por favor, ingrese un radio válido (> 0).';
          calculationResult.style.color = 'red';
          return;
      }

      const a = 5;
      const b = r;
      const c = - (r ** 2 - (r / 2) ** 2);

      const discriminante = b * b - 4 * a * c;
      if (discriminante < 0) {
          calculationResult.textContent = 'No hay soluciones reales (discriminante < 0).';
          calculationResult.style.color = 'red';
          return;
      }

      const sqrtD = Math.sqrt(discriminante);
      const x1 = (-b + sqrtD) / (2 * a);
      const x2 = (-b - sqrtD) / (2 * a);

      let x = null;
      if (x1 > 0) {
          x = x1;
      } else if (x2 > 0) {
          x = x2;
      } else {
          calculationResult.textContent = 'No hay raíz positiva.';
          calculationResult.style.color = 'red';
          return;
      }

      const area_cuadrado_grande= (r/2)**2;
      const area_cuadrado_pequeño= x**2;
      const area_total = 2*area_cuadrado_grande+2*area_cuadrado_pequeño;
      calculationResult.textContent = `x = ${area_total.toFixed(5)}`;
      calculationResult.style.color = 'green';
  });

  /* =========================
     PREGUNTA 2
  ========================== */
  const calculateButton2 = document.getElementById('calculateButton2');
  const input_cuadrado_lado = document.getElementById('input_cuadrado_lado');
  const input_circunferencia_radio = document.getElementById('input_circunferencia_radio');
  const calculationResult2 = document.getElementById('calculationResult2');

  calculateButton2.addEventListener('click', function() {
      const lado = parseFloat(input_cuadrado_lado.value);
      const r = parseFloat(input_circunferencia_radio.value);

      if (isNaN(lado) || isNaN(r)) {
          calculationResult2.textContent = 'Por favor, ingrese números válidos en todos los campos.';
          calculationResult2.style.color = 'red';
          return;
      }

      const area_cuadrado = lado**2;
      const area_circulo = (3.14)*(r**2);
      const area = area_cuadrado - area_circulo;
      calculationResult2.textContent = `El área sombreada es: ${area.toFixed(4)}`;
      calculationResult2.style.color = 'green';
  });

    /* =========================
       PREGUNTA 3
    ========================== */
    const btn3 = document.getElementById('calculateButton3');
    const res3 = document.getElementById('calculationResult3');
    btn3.addEventListener('click', () => {
        const area = parseFloat(document.getElementById('inputAreaSectorC').value);
        const radio = parseFloat(document.getElementById('inputRadioSectorC').value);
        if (isNaN(area) || isNaN(radio) || radio <= 0) {
            showAlert('Error', 'Ingrese valores válidos de área y radio', 'error');
            return;
        }
        const angulo = (2 * area) / (radio ** 2);
        setResult(res3, `Ángulo central = ${angulo.toFixed(4)} rad`);
    });

    /* =========================
       PREGUNTA 4 (3b)
    ========================== */
    const btn4 = document.getElementById('calculateButton4');
    const res4 = document.getElementById('calculationResult4');
    btn4.addEventListener('click', () => {
        const ang = parseFloat(document.getElementById('inputAngRadSC').value);
        const area = parseFloat(document.getElementById('inputArSC').value);
        if (isNaN(ang) || isNaN(area) || ang <= 0) {
            showAlert('Error', 'Ingrese un ángulo y un área válidos', 'error');
            return;
        }
        const radio = Math.sqrt((2 * area) / ang);
        setResult(res4, `Radio = ${radio.toFixed(4)} m`);
    });

    /* =========================
       PREGUNTA 5
    ========================== */
    const btn5 = document.getElementById('calculateButton5');
    const res5 = document.getElementById('calculationResult5');
    btn5.addEventListener('click', () => {
        const a = parseFloat(document.getElementById('inputA1').value);
        const b = parseFloat(document.getElementById('inputA2').value);
        const c = parseFloat(document.getElementById('inputA3').value);
        if ([a,b,c].some(v => isNaN(v) || v <= 0)) {
            showAlert('Error', 'Ingrese valores válidos para a, b y c', 'error');
            return;
        }
        const h = Math.sqrt(a ** 2 + b ** 2);
        const d = Math.sqrt(h ** 2 - c ** 2);
        const area = (a * b / 2) + (d * c / 2);
        setResult(res5, `Área total = ${area.toFixed(3)} unidades²`);
    });

    /* =========================
       PREGUNTA 6
    ========================== */
    const btn6 = document.getElementById('calculateButton6');
    const res6 = document.getElementById('calculationResult6');
    btn6.addEventListener('click', () => {
        const perimetro = parseFloat(document.getElementById('input_perimetro').value);
        if (isNaN(perimetro) || perimetro <= 0) {
            showAlert('Error', 'Ingrese un perímetro válido', 'error');
            return;
        }
        const R = perimetro / 16;
        const area = (2 * R) ** 2 + (4 * 3 * R * R) / 2;
        setResult(res6, `Área = ${area.toFixed(4)} unidades²`);
    });

    /* =========================
       PREGUNTA 7
    ========================== */
    const btn7 = document.getElementById('calculateButton7');
    const res7 = document.getElementById('calculationResult7');
    btn7.addEventListener('click', () => {
        const AB = parseFloat(document.getElementById('inputAB').value);
        const BC = parseFloat(document.getElementById('inputBC').value);
        const AD = parseFloat(document.getElementById('inputAD').value);
        if ([AB, BC, AD].some(v => isNaN(v))) {
            showAlert('Error', 'Ingrese números válidos en todos los campos', 'error');
            return;
        }
        const AE = (AD - BC) / 2;
        const x2 = AB ** 2 - AE ** 2;
        setResult(res7, `x² = ${x2.toFixed(4)}`);
    });

    /* =========================
       PREGUNTA 8
    ========================== */
    const btn8 = document.getElementById('calculateButton8');
    const res8 = document.getElementById('calculationResult8');
    btn8.addEventListener('click', () => {
        const angle = parseFloat(document.getElementById('input_rad_longarc').value);
        const radio = parseFloat(document.getElementById('input_radio_longarc').value);
        if (isNaN(angle) || isNaN(radio) || angle <= 0 || radio <= 0) {
            showAlert('Error', 'Ingrese un ángulo y radio válidos', 'error');
            return;
        }
        const l = radio * angle;
        setResult(res8, `Longitud del arco = ${l.toFixed(4)} unidades`);
    });

    /* =========================
       PREGUNTA 9
    ========================== */
    const btn9 = document.getElementById('calculateButton9');
    const res9 = document.getElementById('calculationResult9');
    btn9.addEventListener('click', () => {
        const longitud = parseFloat(document.getElementById('inputhb').value);
        const angulo = parseFloat(document.getElementById('inputangled').value);
        if (isNaN(longitud) || isNaN(angulo) || angulo <= 0) {
            showAlert('Error', 'Ingrese valores válidos de longitud y ángulo', 'error');
            return;
        }
        const r = longitud / angulo;
        setResult(res9, `Radio = ${r.toFixed(4)} unidades`);
    });

    /* =========================
       PREGUNTA 10
    ========================== */
    const btn10 = document.getElementById('calculateButton10');
    const res10 = document.getElementById('calculationResult10');
    btn10.addEventListener('click', () => {
        const a = parseFloat(document.getElementById('input_lado_a').value);
        const b = parseFloat(document.getElementById('input_lado_b').value);
        const c = parseFloat(document.getElementById('input_lado_c').value);
        const d = parseFloat(document.getElementById('input_lado_d').value);
        if ([a,b,c,d].some(v => isNaN(v))) {
            showAlert('Error', 'Ingrese valores válidos en todos los lados', 'error');
            return;
        }
        const area = (b * c / 2) + (a * b) + (b * d);
        setResult(res10, `Área = ${area.toFixed(4)} unidades²`);
    });

    /* =========================
       PREGUNTA 11
    ========================== */
    const btn11 = document.getElementById('calculateButton11');
    const res11 = document.getElementById('calculationResult11');
    btn11.addEventListener('click', () => {
        const lado = parseFloat(document.getElementById('input_pulgadas').value);
        if (isNaN(lado) || lado <= 0) {
            showAlert('Error', 'Ingrese un valor válido', 'error');
            return;
        }
        const area = lado ** 2 - (lado ** 2) / 2;
        setResult(res11, `Área = ${area.toFixed(4)} pulgadas²`);
    });

    /* =========================
       PREGUNTA 12
    ========================== */
    const btn12 = document.getElementById('calculateButton12');
    const res12 = document.getElementById('calculationResult12');
    btn12.addEventListener('click', () => {
        const lado = parseFloat(document.getElementById('input_long_equilatero').value);
        if (isNaN(lado) || lado <= 0) {
            showAlert('Error', 'Ingrese un valor válido para el lado', 'error');
            return;
        }
        const base = Math.sqrt(lado ** 2 - (lado / 2) ** 2);
        const area = (base * lado) / 2;
        setResult(res12, `Área = ${area.toFixed(4)} cm²`);
    });

});
