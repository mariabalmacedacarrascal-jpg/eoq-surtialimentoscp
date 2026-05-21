// ============================================================
// DATOS DE PRODUCTOS — Surtialimentos CP
// D: Demanda promedio diaria (kg)
// sigma: Desviación estándar
// EOQ: EOQ clásico √(2DS/H)
// ROP: Punto de reorden (D×LT) + Z×σ×√LT
// SS: Stock de seguridad Z×σ×√LT
// ============================================================
const productos = [
  { nombre: "Limón Tahití",       D: 2.5714, sigma: 1.6996, EOQ: 3.8655, ROP: 9.1088,  SS: 3.9659  },
  { nombre: "Maracuyá",           D: 1.2407, sigma: 0.8817, EOQ: 2.6850, ROP: 4.5388,  SS: 2.0575  },
  { nombre: "Zanahoria",          D: 4.6527, sigma: 4.7153, EOQ: 5.1996, ROP: 20.3083, SS: 11.0030 },
  { nombre: "Cebolla larga",      D: 5.4734, sigma: 5.1147, EOQ: 5.6396, ROP: 22.8817, SS: 11.9349 },
  { nombre: "Guayaba",            D: 1.5059, sigma: 0.8628, EOQ: 2.9581, ROP: 5.0250,  SS: 2.0132  },
  { nombre: "Melón",              D: 1.0909, sigma: 0.5438, EOQ: 2.7920, ROP: 3.4506,  SS: 1.2688  },
  { nombre: "Papaya",             D: 1.0000, sigma: 0.4941, EOQ: 2.6732, ROP: 3.1531,  SS: 1.1531  },
  { nombre: "Piña Oromiel",       D: 1.1500, sigma: 0.7456, EOQ: 2.5850, ROP: 4.0398,  SS: 1.7398  },
  { nombre: "Tomate de árbol",    D: 1.2413, sigma: 0.6801, EOQ: 2.6857, ROP: 4.0696,  SS: 1.5871  },
  { nombre: "Cebolla roja",       D: 7.3675, sigma: 8.5969, EOQ: 7.2559, ROP: 34.7956, SS: 20.0605 },
  { nombre: "Papa",               D: 9.4094, sigma: 8.3239, EOQ: 8.1999, ROP: 38.2422, SS: 19.4234 },
  { nombre: "Cebolla blanca",     D: 7.7336, sigma: 8.5800, EOQ: 7.4339, ROP: 35.4882, SS: 20.0210 },
  { nombre: "Tomate Chonto",      D: 2.3288, sigma: 1.3336, EOQ: 4.0794, ROP: 7.7695,  SS: 3.1118  },
  { nombre: "Banano",             D: 2.7967, sigma: 1.8801, EOQ: 4.4704, ROP: 9.9805,  SS: 4.3872  },
  { nombre: "Plátano verde",      D: 6.1285, sigma: 3.9889, EOQ: 6.6177, ROP: 21.5649, SS: 9.3080  },
  { nombre: "Ajo criollo",        D: 0.7912, sigma: 0.4725, EOQ: 2.3777, ROP: 2.6849,  SS: 1.1026  },
  { nombre: "Cilantro",           D: 1.4110, sigma: 0.8808, EOQ: 2.8634, ROP: 4.8772,  SS: 2.0552  },
  { nombre: "Apio",               D: 0.9509, sigma: 0.6746, EOQ: 2.3506, ROP: 3.4759,  SS: 1.5741  },
  { nombre: "Aguacate papelillo", D: 0.9000, sigma: 0.4958, EOQ: 2.5360, ROP: 2.9570,  SS: 1.1570  },
  { nombre: "Coco",               D: 0.7824, sigma: 0.4277, EOQ: 2.3645, ROP: 2.5627,  SS: 0.9980  },
  { nombre: "Mazorca",            D: 2.8649, sigma: 2.8723, EOQ: 4.0801, ROP: 12.4322, SS: 6.7024  },
  { nombre: "Pimentón rojo",      D: 2.0851, sigma: 1.6495, EOQ: 3.4808, ROP: 8.0192,  SS: 3.8490  },
];

// ============================================================
// CONFIGURACIÓN GENERAL
// ============================================================
const SEMANAS    = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'];
const NUM_CICLOS = 6;
const PUNTOS_PC  = 40; // puntos intermedios por ciclo

let chartClasico = null;
let chartEsto    = null;

// ============================================================
// INICIALIZACIÓN — poblar los selectores con los productos
// ============================================================
function poblarSelects() {
  ['sel-clasico', 'sel-esto'].forEach(id => {
    const sel = document.getElementById(id);
    productos.forEach((p, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = p.nombre;
      sel.appendChild(opt);
    });
  });
}

// ============================================================
// CAMBIO DE PESTAÑA
// ============================================================
function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach((b, i) =>
    b.classList.toggle('active', (i === 0 && tab === 'clasico') || (i === 1 && tab === 'estocastico'))
  );
  document.getElementById('panel-clasico').classList.toggle('active', tab === 'clasico');
  document.getElementById('panel-estocastico').classList.toggle('active', tab === 'estocastico');
  if (tab === 'clasico') drawClasico();
  else drawEstocastico();
}

// ============================================================
// RENDERIZAR MÉTRICAS
// ============================================================
function renderMetrics(id, items) {
  document.getElementById(id).innerHTML = items.map(it =>
    `<div class="metric">
       <div class="metric-label">${it.label}</div>
       <div class="metric-value">${it.value}</div>
     </div>`
  ).join('');
}

// ============================================================
// GENERAR ETIQUETAS DEL EJE X (S1 a S6)
// ============================================================
function generarLabels() {
  const labels = [];
  for (let c = 0; c < NUM_CICLOS; c++) {
    for (let t = 0; t <= PUNTOS_PC; t++) {
      labels.push(t === 0 ? SEMANAS[c] : '');
    }
  }
  return labels;
}

// ============================================================
// GRÁFICA EOQ CLÁSICO
// ============================================================
function drawClasico() {
  const p      = productos[+document.getElementById('sel-clasico').value];
  const Q      = p.EOQ;
  const labels = generarLabels();
  const data   = [];

  // Diente de sierra: baja de Q a 0, sube a Q, repite por 6 ciclos
  for (let c = 0; c < NUM_CICLOS; c++) {
    for (let t = 0; t <= PUNTOS_PC; t++) {
      const frac = t / PUNTOS_PC;
      data.push(parseFloat((Q * (1 - frac)).toFixed(3)));
    }
  }

  // Línea horizontal de inventario promedio Q/2
  const avgLine = data.map(() => parseFloat((Q / 2).toFixed(3)));

  renderMetrics('metrics-clasico', [
    { label: 'Demanda promedio (D)', value: p.D.toFixed(2) + ' kg' },
    { label: 'EOQ clásico (Q*)',     value: p.EOQ.toFixed(2) + ' kg' },
    { label: 'Inventario promedio',  value: (p.EOQ / 2).toFixed(2) + ' kg' },
    { label: 'Semanas analizadas',   value: NUM_CICLOS },
  ]);

  if (chartClasico) chartClasico.destroy();

  chartClasico = new Chart(document.getElementById('chart-clasico'), {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Nivel de inventario',
          data,
          borderColor: '#378ADD',
          backgroundColor: 'rgba(55,138,221,0.08)',
          fill: true,
          pointRadius: 0,
          borderWidth: 2,
          tension: 0,
        },
        {
          label: 'Inventario promedio (Q/2)',
          data: avgLine,
          borderColor: '#888780',
          borderDash: [6, 4],
          borderWidth: 1.5,
          pointRadius: 0,
          fill: false,
          tension: 0,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ctx.dataset.label + ': ' + ctx.parsed.y.toFixed(2) + ' kg'
          }
        }
      },
      scales: {
        x: {
          title: { display: true, text: 'Semanas', font: { size: 12 }, color: '#888780' },
          ticks: { maxRotation: 0, autoSkip: false },
          grid: { color: 'rgba(136,135,128,0.1)' }
        },
        y: {
          title: { display: true, text: 'Inventario (kg)', font: { size: 12 }, color: '#888780' },
          min: 0,
          grid: { color: 'rgba(136,135,128,0.1)' }
        }
      }
    }
  });
}

// ============================================================
// GRÁFICA EOQ ESTOCÁSTICO
// ============================================================
function drawEstocastico() {
  const p      = productos[+document.getElementById('sel-esto').value];
  const Q      = p.EOQ;
  const ROP    = p.ROP;
  const SS     = p.SS;
  const maxInv = ROP + Q; // Nivel máximo = ROP + EOQ clásico
  const labels = generarLabels();
  const data   = [];

  // Baja desde maxInv hasta SS con variabilidad (demanda variable)
  for (let c = 0; c < NUM_CICLOS; c++) {
    for (let t = 0; t <= PUNTOS_PC; t++) {
      const frac  = t / PUNTOS_PC;
      const noise = (Math.random() - 0.5) * p.sigma * 0.4;
      const base  = maxInv - (maxInv - SS) * frac;
      const val   = Math.max(SS * 0.5, base + noise);
      data.push(parseFloat(val.toFixed(3)));
    }
  }

  // Líneas horizontales de ROP y SS
  const ropLine = data.map(() => parseFloat(ROP.toFixed(3)));
  const ssLine  = data.map(() => parseFloat(SS.toFixed(3)));

  renderMetrics('metrics-esto', [
    { label: 'Nivel máx (ROP+Q)',  value: maxInv.toFixed(2) + ' kg' },
    { label: 'ROP',                value: ROP.toFixed(2) + ' kg'    },
    { label: 'Stock de seguridad', value: SS.toFixed(2) + ' kg'     },
    { label: 'EOQ clásico (Q*)',   value: Q.toFixed(2) + ' kg'      },
  ]);

  if (chartEsto) chartEsto.destroy();

  chartEsto = new Chart(document.getElementById('chart-esto'), {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Nivel de inventario',
          data,
          borderColor: '#378ADD',
          backgroundColor: 'rgba(55,138,221,0.07)',
          fill: true,
          pointRadius: 0,
          borderWidth: 2,
          tension: 0.3,
        },
        {
          label: 'Punto de reorden (ROP)',
          data: ropLine,
          borderColor: '#D85A30',
          borderDash: [6, 4],
          borderWidth: 1.5,
          pointRadius: 0,
          fill: false,
          tension: 0,
        },
        {
          label: 'Stock de seguridad',
          data: ssLine,
          borderColor: '#1D9E75',
          borderDash: [3, 3],
          borderWidth: 1.5,
          pointRadius: 0,
          fill: false,
          tension: 0,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ctx.dataset.label + ': ' + ctx.parsed.y.toFixed(2) + ' kg'
          }
        }
      },
      scales: {
        x: {
          title: { display: true, text: 'Semanas', font: { size: 12 }, color: '#888780' },
          ticks: { maxRotation: 0, autoSkip: false },
          grid: { color: 'rgba(136,135,128,0.1)' }
        },
        y: {
          title: { display: true, text: 'Inventario (kg)', font: { size: 12 }, color: '#888780' },
          min: 0,
          grid: { color: 'rgba(136,135,128,0.1)' }
        }
      }
    }
  });
}

// ============================================================
// ARRANQUE
// ============================================================
poblarSelects();
drawClasico();