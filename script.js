// ============================================================
// DATOS DE PRODUCTOS — Surtialimentos CP
// ============================================================
const productos = [
  { nombre: "Mazorca",            D: 2.8649, sigma: 2.8723, EOQ: 4.0801, ROP: 12.4322, SS: 6.7024  },
  { nombre: "Limón Tahití",       D: 2.5714, sigma: 1.6996, EOQ: 3.8655, ROP: 9.1088,  SS: 3.9659  },
  { nombre: "Maracuyá",           D: 1.2407, sigma: 0.8817, EOQ: 2.6850, ROP: 4.5388,  SS: 2.0575  },
  { nombre: "Guayaba",            D: 1.5059, sigma: 0.8628, EOQ: 2.9581, ROP: 5.0250,  SS: 2.0132  },
  { nombre: "Melón",              D: 1.0909, sigma: 0.5438, EOQ: 2.7920, ROP: 3.4506,  SS: 1.2688  },
  { nombre: "Papaya",             D: 1.0000, sigma: 0.4941, EOQ: 2.6732, ROP: 3.1531,  SS: 1.1531  },
  { nombre: "Piña Oromiel",       D: 1.1500, sigma: 0.7456, EOQ: 2.5850, ROP: 4.0398,  SS: 1.7398  },
  { nombre: "Tomate de árbol",    D: 1.2413, sigma: 0.6801, EOQ: 2.6857, ROP: 4.0696,  SS: 1.5871  },
  { nombre: "Banano",             D: 2.7967, sigma: 1.8801, EOQ: 4.4704, ROP: 9.9805,  SS: 4.3872  },
  { nombre: "Plátano Verde",      D: 6.1285, sigma: 3.9889, EOQ: 6.6177, ROP: 21.5649, SS: 9.3080  },
  { nombre: "Aguacate Papelillo", D: 0.9000, sigma: 0.4958, EOQ: 2.5360, ROP: 2.9570,  SS: 1.1570  },
  { nombre: "Coco",               D: 0.7824, sigma: 0.4277, EOQ: 2.3645, ROP: 2.5627,  SS: 0.9980  },
  { nombre: "Papa",               D: 9.4094, sigma: 8.3239, EOQ: 8.1999, ROP: 38.2422, SS: 19.4234 },
  { nombre: "Zanahoria",          D: 4.6527, sigma: 4.7153, EOQ: 5.1996, ROP: 20.3083, SS: 11.0030 },
  { nombre: "Cebolla larga",      D: 5.4734, sigma: 5.1147, EOQ: 5.6396, ROP: 22.8817, SS: 11.9349 },
  { nombre: "Cebolla roja",       D: 7.3675, sigma: 8.5969, EOQ: 7.2559, ROP: 34.7956, SS: 20.0605 },
  { nombre: "Cebolla blanca",     D: 7.7336, sigma: 8.5800, EOQ: 7.4339, ROP: 35.4882, SS: 20.0210 },
  { nombre: "Tomate Chonto",      D: 2.3288, sigma: 1.3336, EOQ: 4.0794, ROP: 7.7695,  SS: 3.1118  },
  { nombre: "Ajo criollo",        D: 0.7912, sigma: 0.4725, EOQ: 2.3777, ROP: 2.6849,  SS: 1.1026  },
  { nombre: "Cilantro",           D: 1.4110, sigma: 0.8808, EOQ: 2.8634, ROP: 4.8772,  SS: 2.0552  },
  { nombre: "Apio por rama",      D: 0.9509, sigma: 0.6746, EOQ: 2.3506, ROP: 3.4759,  SS: 1.5741  },
  { nombre: "Pimentón rojo",      D: 2.0851, sigma: 1.6495, EOQ: 3.4808, ROP: 8.0192,  SS: 3.8490  },
];

// ============================================================
// DATOS COMPARATIVO — pérdida y tasa de consumo por semana
// ============================================================
const datosComparativo = [
  { nombre: "Mazorca",            perdida: [0.1, 0.45, 0.087, 0.2, 0.0, 1.865],    tasa: [10.0, 10.0, 10.0, 10.0, 10.0, 10.0]        },
  { nombre: "Limón Tahití",       perdida: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],         tasa: [23.14, 21.01, 4.85, 11.33, 8.55, 3.12]      },
  { nombre: "Maracuyá",           perdida: [1.0, 0.654, 0.67, 0.0, 0.4, 0.0],      tasa: [12.0, 9.804, 0.696, 6.76, 2.05, 1.19]       },
  { nombre: "Guayaba",            perdida: [0.0, 0.0, 0.0, 0.32, 0.08, 0.0],       tasa: [3.335, 5.12, 11.77, 5.695, 0.08, 0.0]       },
  { nombre: "Melón",              perdida: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],         tasa: [8.0, 2.0, 2.0, 0.0, 0.0, 0.0]               },
  { nombre: "Papaya",             perdida: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],         tasa: [4.0, 4.0, 4.0, 0.0, 0.0, 0.0]               },
  { nombre: "Piña Oromiel",       perdida: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],         tasa: [6.3, 2.0, 6.0, 0.0, 5.0, 6.0]               },
  { nombre: "Tomate de árbol",    perdida: [0.4, 0.7, 0.0, 0.4, 0.157, 0.0],       tasa: [8.54, 3.46, 8.0, 3.843, 0.157, 0.0]         },
  { nombre: "Banano",             perdida: [3.25, 4.8, 1.7, 3.3, 0.0, 0.0],        tasa: [10.0, 15.0, 6.7, 3.3, 0.0, 20.0]            },
  { nombre: "Plátano Verde",      perdida: [4.5, 4.68, 3.8, 0.406, 1.4, 0.36],     tasa: [53.28, 48.375, 16.939, 0.406, 39.64, 40.36] },
  { nombre: "Aguacate Papelillo", perdida: [0.0, 0.0, 0.5, 0.0, 0.0, 0.0],         tasa: [6.0, 4.0, 4.0, 0.0, 0.0, 0.0]               },
  { nombre: "Coco",               perdida: [0.5, 1.0, 0.0, 0.67, 0.823, 0.6],      tasa: [6.78, 4.533, 3.05, 1.28, 1.433, 0.6]        },
  { nombre: "Papa",               perdida: [1.2, 0.3, 1.4, 0.4, 0.6, 0.0],         tasa: [50.0, 49.5, 48.75, 51.07, 55.68, 50.0]      },
  { nombre: "Zanahoria",          perdida: [10.069, 4.364, 7.25, 4.13, 3.172, 2.435], tasa: [23.325, 23.118, 25.5, 24.0, 24.172, 50.885] },
  { nombre: "Cebolla larga",      perdida: [1.2, 0.56, 0.079, 0.357, 0.023, 0.0],  tasa: [30.0, 30.0, 30.0, 27.347, 17.653, 15.0]     },
  { nombre: "Cebolla roja",       perdida: [1.5, 2.327, 5.86, 6.27, 1.41, 1.505],  tasa: [50.0, 50.0, 50.0, 45.95, 32.07, 33.98]      },
  { nombre: "Cebolla blanca",     perdida: [2.1, 4.266, 4.724, 3.07, 3.851, 0.25], tasa: [37.385, 34.891, 42.794, 31.505, 37.195, 27.83] },
  { nombre: "Tomate Chonto",      perdida: [2.2, 1.33, 2.036, 0.62, 1.48, 1.1],    tasa: [20.084, 13.365, 14.941, 9.03, 1.48, 1.1]    },
  { nombre: "Ajo criollo",        perdida: [0.0, 0.0, 0.1, 0.0, 0.0, 0.0],         tasa: [4.62, 4.28, 4.74, 4.36, 6.48, 2.52]         },
  { nombre: "Cilantro",           perdida: [0.3, 0.8, 0.089, 0.289, 0.247, 0.0],   tasa: [10.9, 1.1, 4.664, 0.289, 10.047, 10.0]      },
  { nombre: "Apio por rama",      perdida: [0.3, 0.24, 0.5, 1.25, 0.467, 5.225],   tasa: [10.36, 1.64, 2.323, 2.21, 0.467, 10.0]      },
  { nombre: "Pimentón rojo",      perdida: [6.27, 4.98, 7.475, 3.923, 3.42, 0.0],  tasa: [30.02, 9.98, 18.495, 6.488, 8.075, 0.967]   },
];

// ============================================================
// CONFIGURACIÓN GENERAL
// ============================================================
const SEMANAS    = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'];
const NUM_CICLOS = 6;
const PUNTOS_PC  = 40;

let chartClasico     = null;
let chartEsto        = null;
let chartComparativo = null;

// ============================================================
// POBLAR SELECTORES
// ============================================================
function poblarSelects() {
  ['sel-clasico', 'sel-esto', 'sel-comp'].forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    sel.innerHTML = ''; // limpiar por si acaso
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
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById('btn-' + tab).classList.add('active');
  document.getElementById('panel-' + tab).classList.add('active');
  if      (tab === 'clasico') drawClasico();
  else if (tab === 'esto')    drawEstocastico();
  else if (tab === 'comp')    drawComparativo();
}

// ============================================================
// MÉTRICAS
// ============================================================
function renderMetrics(id, items) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = items.map(it =>
    `<div class="metric">
       <div class="metric-label">${it.label}</div>
       <div class="metric-value">${it.value}</div>
     </div>`
  ).join('');
}

// ============================================================
// LABELS EJE X — S1 a S6
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
// GRÁFICA 1 — EOQ CLÁSICO
// ============================================================
function drawClasico() {
  const sel = document.getElementById('sel-clasico');
  if (!sel) return;
  const p      = productos[+sel.value];
  const Q      = p.EOQ;
  const labels = generarLabels();
  const data   = [];

  for (let c = 0; c < NUM_CICLOS; c++) {
    for (let t = 0; t <= PUNTOS_PC; t++) {
      data.push(parseFloat((Q * (1 - t / PUNTOS_PC)).toFixed(3)));
    }
  }

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
          tension: 0
        },
        {
          label: 'Inventario promedio (Q/2)',
          data: avgLine,
          borderColor: '#888780',
          borderDash: [6, 4],
          borderWidth: 1.5,
          pointRadius: 0,
          fill: false,
          tension: 0
        }
      ]
    },
    options: chartOptions('Semanas', 'Inventario (kg)')
  });
}

// ============================================================
// GRÁFICA 2 — EOQ ESTOCÁSTICO
// ============================================================
function drawEstocastico() {
  const sel = document.getElementById('sel-esto');
  if (!sel) return;
  const p      = productos[+sel.value];
  const Q      = p.EOQ;
  const ROP    = p.ROP;
  const SS     = p.SS;
  const maxInv = ROP + Q;
  const labels = generarLabels();
  const data   = [];

  for (let c = 0; c < NUM_CICLOS; c++) {
    for (let t = 0; t <= PUNTOS_PC; t++) {
      const noise = (Math.random() - 0.5) * p.sigma * 0.4;
      const base  = maxInv - (maxInv - SS) * (t / PUNTOS_PC);
      data.push(parseFloat(Math.max(SS * 0.5, base + noise).toFixed(3)));
    }
  }

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
          tension: 0.3
        },
        {
          label: 'Punto de reorden (ROP)',
          data: data.map(() => ROP),
          borderColor: '#D85A30',
          borderDash: [6, 4],
          borderWidth: 1.5,
          pointRadius: 0,
          fill: false,
          tension: 0
        },
        {
          label: 'Stock de seguridad',
          data: data.map(() => SS),
          borderColor: '#1D9E75',
          borderDash: [3, 3],
          borderWidth: 1.5,
          pointRadius: 0,
          fill: false,
          tension: 0
        }
      ]
    },
    options: chartOptions('Semanas', 'Inventario (kg)')
  });
}

// ============================================================
// GRÁFICA 3 — COMPARATIVO: Tasa de consumo, ROP y Pérdida
// ============================================================
function drawComparativo() {
  const sel = document.getElementById('sel-comp');
  if (!sel) return;
  const idx = +sel.value;
  const p   = productos[idx];
  const dc  = datosComparativo[idx];

  renderMetrics('metrics-comp', [
    { label: 'ROP',                   value: p.ROP.toFixed(2) + ' kg'                               },
    { label: 'Pérdida total',         value: dc.perdida.reduce((a, b) => a + b, 0).toFixed(3) + ' kg' },
    { label: 'Tasa consumo promedio', value: (dc.tasa.reduce((a, b) => a + b, 0) / 6).toFixed(2) + ' kg' },
    { label: 'Semanas analizadas',    value: 6                                                        },
  ]);

  const ropLine = SEMANAS.map(() => p.ROP);

  if (chartComparativo) chartComparativo.destroy();
  chartComparativo = new Chart(document.getElementById('chart-comp'), {
    type: 'line',
    data: {
      labels: SEMANAS,
      datasets: [
        {
          label: 'Pérdida (kg)',
          data: dc.perdida,
          borderColor: '#378ADD',
          backgroundColor: 'rgba(55,138,221,0.08)',
          fill: false,
          pointRadius: 5,
          pointBackgroundColor: '#378ADD',
          borderWidth: 2,
          tension: 0.3
        },
        {
          label: 'Tasa de consumo (kg)',
          data: dc.tasa,
          borderColor: '#D85A30',
          fill: false,
          pointRadius: 5,
          pointBackgroundColor: '#D85A30',
          borderWidth: 2,
          tension: 0.3
        },
        {
          label: `ROP = ${p.ROP.toFixed(2)} kg`,
          data: ropLine,
          borderColor: '#888780',
          borderDash: [6, 4],
          borderWidth: 1.5,
          pointRadius: 0,
          fill: false,
          tension: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: { font: { size: 12 }, color: '#555', boxWidth: 14, padding: 16 }
        },
        tooltip: {
          callbacks: {
            label: ctx => ctx.dataset.label + ': ' + ctx.parsed.y.toFixed(3) + ' kg'
          }
        }
      },
      scales: {
        x: {
          title: { display: true, text: 'Semanas', font: { size: 12 }, color: '#888780' },
          grid: { color: 'rgba(136,135,128,0.1)' }
        },
        y: {
          title: { display: true, text: 'Kilogramos (kg)', font: { size: 12 }, color: '#888780' },
          min: 0,
          grid: { color: 'rgba(136,135,128,0.1)' }
        }
      }
    }
  });
}

// ============================================================
// OPCIONES BASE DE GRÁFICAS (reutilizable)
// ============================================================
function chartOptions(xLabel, yLabel) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: { font: { size: 12 }, color: '#555', boxWidth: 14, padding: 16 }
      },
      tooltip: {
        callbacks: {
          label: ctx => ctx.dataset.label + ': ' + ctx.parsed.y.toFixed(2) + ' kg'
        }
      }
    },
    scales: {
      x: {
        title: { display: true, text: xLabel, font: { size: 12 }, color: '#888780' },
        ticks: { maxRotation: 0, autoSkip: false },
        grid: { color: 'rgba(136,135,128,0.1)' }
      },
      y: {
        title: { display: true, text: yLabel, font: { size: 12 }, color: '#888780' },
        min: 0,
        grid: { color: 'rgba(136,135,128,0.1)' }
      }
    }
  };
}

// ============================================================
// ARRANQUE — espera a que el DOM esté completamente cargado
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
  poblarSelects();
  drawClasico();
});