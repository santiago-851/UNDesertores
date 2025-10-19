/* ============================================================
   SCRIPT PRINCIPAL - QUIZ 17: MATEMÁTICAS BÁSICAS
   Autor: Santiago Roberto Saiz
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* =========================
     BOTÓN DE TEMA CLARO/OSCURO
  ========================== */
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
     FUNCIONES AUXILIARES
  ========================== */
  const showAlert = (title, msg, type) => {
    alert(`${title}: ${msg}`);
  };

  const setResult = (element, msg) => {
    element.textContent = msg;
    element.style.color = "green";
  };

  /* =========================
     PREGUNTA 1
  ========================== */
  const calculateButton = document.getElementById('calculateButton');
  if (calculateButton) {
    calculateButton.addEventListener('click', function() {
      const r = parseFloat(document.getElementById('input_radio_circunferencia').value);
      const calculationResult = document.getElementById('calculationResult');

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

      let x = x1 > 0 ? x1 : x2 > 0 ? x2 : null;
      if (!x) {
        calculationResult.textContent = 'No hay raíz positiva.';
        calculationResult.style.color = 'red';
        return;
      }

      const area_cuadrado_grande = (r / 2) ** 2;
      const area_cuadrado_pequeño = x ** 2;
      const area_total = 2 * area_cuadrado_grande + 2 * area_cuadrado_pequeño;

      calculationResult.textContent = `x = ${area_total.toFixed(5)}`;
      calculationResult.style.color = 'green';
    });
  }

  /* =========================
     PREGUNTA 2
  ========================== */
  const calculateButton2 = document.getElementById('calculateButton2');
  if (calculateButton2) {
    calculateButton2.addEventListener('click', function() {
      const lado = parseFloat(document.getElementById('input_cuadrado_lado').value);
      const r = parseFloat(document.getElementById('input_circunferencia_radio').value);
      const calculationResult2 = document.getElementById('calculationResult2');

      if (isNaN(lado) || isNaN(r)) {
        calculationResult2.textContent = 'Por favor, ingrese números válidos en todos los campos.';
        calculationResult2.style.color = 'red';
        return;
      }

      const area_cuadrado = lado ** 2;
      const area_circulo = 3.14 * (r ** 2);
      const area = area_cuadrado - area_circulo;

      calculationResult2.textContent = `El área sombreada es: ${area.toFixed(4)}`;
      calculationResult2.style.color = 'green';
    });
  }

  /* =========================
     PREGUNTA 3
  ========================== */
  const btn3 = document.getElementById('calculateButton3');
  if (btn3) {
    btn3.addEventListener('click', () => {
      const area = parseFloat(document.getElementById('inputAreaSectorC').value);
      const radio = parseFloat(document.getElementById('inputRadioSectorC').value);
      const res3 = document.getElementById('calculationResult3');

      if (isNaN(area) || isNaN(radio) || radio <= 0) {
        showAlert('Error', 'Ingrese valores válidos de área y radio', 'error');
        return;
      }

      const angulo = (2 * area) / (radio ** 2);
      setResult(res3, `Ángulo central = ${angulo.toFixed(4)} rad`);
    });
  }

  /* =========================
     PREGUNTA 4
  ========================== */
  const btn4 = document.getElementById('calculateButton4');
  if (btn4) {
    btn4.addEventListener('click', () => {
      const ang = parseFloat(document.getElementById('inputAngRadSC').value);
      const area = parseFloat(document.getElementById('inputArSC').value);
      const res4 = document.getElementById('calculationResult4');

      if (isNaN(ang) || isNaN(area) || ang <= 0) {
        showAlert('Error', 'Ingrese un ángulo y un área válidos', 'error');
        return;
      }

      const radio = Math.sqrt((2 * area) / ang);
      setResult(res4, `Radio = ${radio.toFixed(4)} m`);
    });
  }

  /* =========================
     PREGUNTA 5 a 12
  ========================== */
  const preguntas = [
    { btn: 'calculateButton5', res: 'calculationResult5', fn: () => {
        const a = parseFloat(document.getElementById('inputA1').value);
        const b = parseFloat(document.getElementById('inputA2').value);
        const c = parseFloat(document.getElementById('inputA3').value);
        if ([a,b,c].some(v => isNaN(v) || v <= 0)) return ['Error', 'Ingrese valores válidos para a, b y c'];
        const h = Math.sqrt(a ** 2 + b ** 2);
        const d = Math.sqrt(h ** 2 - c ** 2);
        const area = (a * b / 2) + (d * c / 2);
        return [`Área total = ${area.toFixed(3)} unidades²`];
    }},
    { btn: 'calculateButton6', res: 'calculationResult6', fn: () => {
        const p = parseFloat(document.getElementById('input_perimetro').value);
        if (isNaN(p) || p <= 0) return ['Error', 'Ingrese un perímetro válido'];
        const R = p / 16;
        const area = (2 * R) ** 2 + (4 * 3 * R * R) / 2;
        return [`Área = ${area.toFixed(4)} unidades²`];
    }},
    { btn: 'calculateButton7', res: 'calculationResult7', fn: () => {
        const AB = parseFloat(document.getElementById('inputAB').value);
        const BC = parseFloat(document.getElementById('inputBC').value);
        const AD = parseFloat(document.getElementById('inputAD').value);
        if ([AB,BC,AD].some(v => isNaN(v))) return ['Error', 'Ingrese números válidos'];
        const AE = (AD - BC) / 2;
        const x2 = AB ** 2 - AE ** 2;
        return [`x² = ${x2.toFixed(4)}`];
    }},
    { btn: 'calculateButton8', res: 'calculationResult8', fn: () => {
        const ang = parseFloat(document.getElementById('input_rad_longarc').value);
        const r = parseFloat(document.getElementById('input_radio_longarc').value);
        if (isNaN(ang) || isNaN(r) || ang <= 0 || r <= 0) return ['Error', 'Ingrese un ángulo y radio válidos'];
        const l = r * ang;
        return [`Longitud del arco = ${l.toFixed(4)} unidades`];
    }},
    { btn: 'calculateButton9', res: 'calculationResult9', fn: () => {
        const l = parseFloat(document.getElementById('inputhb').value);
        const ang = parseFloat(document.getElementById('inputangled').value);
        if (isNaN(l) || isNaN(ang) || ang <= 0) return ['Error', 'Ingrese valores válidos'];
        const r = l / ang;
        return [`Radio = ${r.toFixed(4)} unidades`];
    }},
    { btn: 'calculateButton10', res: 'calculationResult10', fn: () => {
        const a = parseFloat(document.getElementById('input_lado_a').value);
        const b = parseFloat(document.getElementById('input_lado_b').value);
        const c = parseFloat(document.getElementById('input_lado_c').value);
        const d = parseFloat(document.getElementById('input_lado_d').value);
        if ([a,b,c,d].some(v => isNaN(v))) return ['Error', 'Ingrese valores válidos'];
        const area = (b * c / 2) + (a * b) + (b * d);
        return [`Área = ${area.toFixed(4)} unidades²`];
    }},
    { btn: 'calculateButton11', res: 'calculationResult11', fn: () => {
        const lado = parseFloat(document.getElementById('input_pulgadas').value);
        if (isNaN(lado) || lado <= 0) return ['Error', 'Ingrese un valor válido'];
        const area = lado ** 2 - (lado ** 2) / 2;
        return [`Área = ${area.toFixed(4)} pulgadas²`];
    }},
    { btn: 'calculateButton12', res: 'calculationResult12', fn: () => {
        const lado = parseFloat(document.getElementById('input_long_equilatero').value);
        if (isNaN(lado) || lado <= 0) return ['Error', 'Ingrese un valor válido'];
        const base = Math.sqrt(lado ** 2 - (lado / 2) ** 2);
        const area = (base * lado) / 2;
        return [`Área = ${area.toFixed(4)} cm²`];
    }},
  ];

  preguntas.forEach(p => {
    const btn = document.getElementById(p.btn);
    const res = document.getElementById(p.res);
    if (!btn) return;
    btn.addEventListener('click', () => {
      const result = p.fn();
      if (result.length === 2) showAlert(result[0], result[1], 'error');
      else setResult(res, result[0]);
    });
  });

  /* ===============================
     GALERÍA INTERACTIVA
  =============================== */
  const galleryImages = document.querySelectorAll('.photo-gallery img');
  if (galleryImages.length > 0) {
    const modal = document.createElement('div');
    modal.id = 'galleryModal';
    modal.innerHTML = `
      <span id="closeModal">&times;</span>
      <img id="modalImage" src="" alt="Imagen ampliada">
    `;
    document.body.appendChild(modal);

    const modalImage = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');

    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        modalImage.src = img.src;
        modal.classList.add('active');
      });
    });

    closeModal.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('active'); });
  }

}); // Fin del DOMContentLoaded principal
