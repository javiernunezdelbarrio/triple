// ==========================================
// CONFIGURACIÓN GLOBAL Y ESTADO
// ==========================================
const paginaActual = window.location.pathname;
const matchDia = paginaActual.match(/(\d+)\.html/);
const numeroDiaActual = matchDia ? parseInt(matchDia[1], 10) : 1;

// Detectar año/edición a partir de la URL (ej: /2025/1.html vs /2024/1.html)
const esEdicion2025 = paginaActual.includes('2025');
const esEdicion2023 = paginaActual.includes('2023');
const esEdicion2022 = paginaActual.includes('2022');
const esEdicion2019 = paginaActual.includes('2019');
const esEdicion2018 = paginaActual.includes('2018');
const esEdicion2017 = paginaActual.includes('2017');
const esEdicion2016 = paginaActual.includes('2016');

let pruebasJornada = [];

if (esEdicion2016) 
    // ==========================================
    // CONFIGURACIÓN DE PRUEBAS 2016
    // ==========================================
    if (numeroDiaActual === 2) {
        pruebasJornada = [
            { id: "trofeo-mahou-2016", nombre: "TROFEO MAHOU", altura: "1.40 m", baremo: "Dos Fases", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2016/CSIO GIJÓN 2016 - TROFEO MAHOU.csv", resultados: [] },
            { id: "trofeo-princesa-2016", nombre: "TROFEO SAR PRINCESA DE ASTURIAS", altura: "1.60 m", baremo: "A con cronómetro y Desempate", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2016/CSIO GIJÓN 2016 - TROFEO SAR PRINCESA DE ASTURIAS.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 3) {
        pruebasJornada = [
            { id: "trofeo-dicar-ii-2016", nombre: "TROFEO DICAR", altura: "1.30/1.35 m", baremo: "A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2016/CSIO GIJÓN 2016 - TROFEO DICAR II.csv", resultados: [] },
            { id: "trofeo-casino-2016", nombre: "TROFEO CASINO DE ASTURIAS", altura: "1.50 m", baremo: "Dos Fases", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2016/CSIO GIJÓN 2016 - TROFEO CASINO DE ASTURIAS.csv", resultados: [] },
            { id: "trofeo-cla-2016", nombre: "TROFEO CENTRAL LECHERA ASTURIANA", altura: "1.45 m", baremo: "Speed C", esDobleFase: false, esDesempate: true, archivoCSV: "CSV/2016/CSIO GIJÓN 2016 - TROFEO CENTRAL LECHERA.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 4) {
        pruebasJornada = [
            { id: "copa-naciones-2016", nombre: "COPA DE NACIONES FURUSIYYA", altura: "1.60 m", baremo: "Dos Rondas y Desempate", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2016/CSIO GIJÓN 2016 - COPA DE NACIONES.csv", resultados: [] },
            { id: "trofeo-oquendo-2016", nombre: "TROFEO OQUENDO", altura: "1.45 m", baremo: "A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2016/CSIO GIJÓN 2016 - TROFEO OQUENDO.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 5) {
        pruebasJornada = [
            { id: "trofeo-dicar-iii-2016", nombre: "TROFEO DICAR", altura: "1.30/1.35 m", baremo: "A con cronómetro y Desempate", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2016/CSIO GIJÓN 2016 - TROFEO DICAR III.csv", resultados: [] },
            { id: "trofeo-veolia-2016", nombre: "TROFEO VEOLIA", altura: "1.40 m", baremo: "Acumulador", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2016/CSIO GIJÓN 2016 - TROFEO VEOLIA.csv", resultados: [] },
            { id: "trofeo-caja-rural-2016", nombre: "TROFEO CAJA RURAL GIJÓN", altura: "1.50 m", baremo: "A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2016/CSIO GIJÓN 2016 - TROFEO CAJA RURAL GIJON.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 6) {
        pruebasJornada = [
            { id: "trofeo-gaitero-2016", nombre: "TROFEO GAITERO", altura: "1.40 m", baremo: "Dos Fases", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2016/CSIO GIJÓN 2016 - TROFEO GAITERO.csv", resultados: [] },
            { id: "gran-premio-gijon-2016", nombre: "GRAN PREMIO DE GIJÓN", altura: "1.60 m", baremo: "Dos Mangas", esDobleFase: false, esDesempate: true, archivoCSV: "CSV/2016/CSIO GIJÓN 2016 - GRAN PREMIO DE GIJON.csv", resultados: [] }
        ];
    } else {
        // Día 1 por defecto
        pruebasJornada = [
            { id: "trofeo-dicar-2016", nombre: "TROFEO DICAR", altura: "1.30/1.35 m", baremo: "A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2016/CSIO GIJÓN 2016 - TROFEO DICAR 1.csv", resultados: [] },
            { id: "trofeo-cocacola-2016", nombre: "TROFEO COCACOLA", altura: "1.40 m", baremo: "A con cronómetros", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2016/CSIO GIJÓN 2016 - TROFEO COCACOLA.csv", resultados: [] },
            { id: "trofeo-funeraria-2016", nombre: "TROFEO FUNERARIA GIJONESA", altura: "1.50 m", baremo: "Manga ganadora", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2016/CSIO GIJÓN 2016 - TROFEO FUNERARIA GIJONESA.csv", resultados: [] }
        ];
    }
    else if (esEdicion2017) 
    // ==========================================
    // CONFIGURACIÓN DE PRUEBAS 2017
    // ==========================================
    if (numeroDiaActual === 2) {
        pruebasJornada = [
            { id: "trofeo-cocacola-2017", nombre: "TROFEO COCACOLA", altura: "1.40 m", baremo: "Dos Fases", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2017/CSIO 2017 - TROFEO COCA-COLA.csv", resultados: [] },
            { id: "trofeo-oquendo-2017", nombre: "TROFEO OQUENDO", altura: "1.60 m", baremo: "A con cronómetro y Desempate", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2017/CSIO 2017 - TROFEO OQUENDO.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 3) {
        pruebasJornada = [
            { id: "trofeo-boxbar-ii-2017", nombre: "TROFEO BOXBAR", altura: "1.30/1.35 m", baremo: "A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2017/CSIO 2017 - TROFEO BOXBAR II.csv", resultados: [] },
            { id: "trofeo-tryp-2017", nombre: "TROFEO TRYP REY PELAYO", altura: "1.50 m", baremo: "Dos Fases", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2017/CSIO 2017 - TROFEO TRYP REY PELAYO.csv", resultados: [] },
            { id: "trofeo-mahou-2017", nombre: "TROFEO MAHOU", altura: "1.45 m", baremo: "Speed C", esDobleFase: false, esDesempate: true, archivoCSV: "CSV/2017/CSIO 2017 - TROFEO MAHOU.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 4) {
        pruebasJornada = [
            { id: "copa-naciones-2017", nombre: "COPA DE NACIONES SABADELL", altura: "1.60 m", baremo: "Dos Rondas", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2017/CSIO 2017 - COPA DE NACIONES.csv", resultados: [] },
            { id: "trofeo-asturiana-2017", nombre: "TROFEO ASTURIANA", altura: "1.45 m", baremo: "A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2017/CSIO 2017 - TROFEO ASTURIANA.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 5) {
        pruebasJornada = [
            { id: "trofeo-boxbar-iii-2017", nombre: "TROFEO BOXBAR", altura: "1.35/1.40 m", baremo: "A con cronómetro y desempate", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2017/CSIO 2017 - TROFEO BOXBAR III.csv", resultados: [] },
            { id: "trofeo-gaitero-2017", nombre: "TROFEO EL GAITERO", altura: "1.40 m", baremo: "Acumulador con Joker", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2017/CSIO 2017 - TROFEO VEOLIA.csv", resultados: [] },
            { id: "trofeo-caja-rural-2017", nombre: "TROFEO CAJA RURAL GIJÓN", altura: "1.50 m", baremo: "A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2017/CSIO 2017 - TROFEO CAJA RURAL GIJON.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 6) {
        pruebasJornada = [
            { id: "trofeo-veolia-2017", nombre: "TROFEO VEOLIA", altura: "1.40 m", baremo: "Dos Fases", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2017/CSIO 2017 - TROFEO VEOLIA.csv", resultados: [] },
            { id: "gran-premio-gijon-2017", nombre: "GRAN PREMIO DE GIJÓN", altura: "1.60 m", baremo: "A con cronómetro y manga ganadora", esDobleFase: false, esDesempate: true, archivoCSV: "CSV/2017/CSIO 2017 - GRAN PREMIO DE GIJON.csv", resultados: [] }
        ];
    } else {
        // Día 1 por defecto
        pruebasJornada = [
            { id: "trofeo-boxbar-2017", nombre: "TROFEO BOXBAR", altura: "1.30/1.35 m", baremo: "A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2017/CSIO 2017 - TROFEO BOXBAR.csv", resultados: [] },
            { id: "trofeo-casino-2017", nombre: "TROFEO CASINO DE ASTURIAS", altura: "1.40 m", baremo: "A con cronómetro", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2017/CSIO 2017 - TROFEO COCA-COLA.csv", resultados: [] },
            { id: "trofeo-lacera-2017", nombre: "TROFEO LACERA", altura: "1.50 m", baremo: "Manga Ganadora", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2017/CSIO 2017 - TROFEO LACERA.csv", resultados: [] }
        ];
    }
    else if (esEdicion2018) 
    // ==========================================
    // CONFIGURACIÓN DE PRUEBAS 2018
    // ==========================================
    if (numeroDiaActual === 2) {
        pruebasJornada = [
            { id: "trofeo-cla-ii-2018", nombre: "TROFEO CENTRAL LECHERA ASTURIANA", altura: "1.30/1.35 m", baremo: "Dos Fases", esDobleFase: false, esDesempate: false, archivoCSV: "../CSV/2018/CSIO 2018 - TROFEO CENTRAL LECHERA II.csv", resultados: [] },
            { id: "trofeo-veolia-2018", nombre: "TROFEO VEOLIA", altura: "1.40 m", baremo: "Dos Fases", esDobleFase: false, esDesempate: false, archivoCSV: "../CSV/2018/CSIO 2018 - TROFEO VEOLIA.csv", resultados: [] },
            { id: "trofeo-oquendo-2018", nombre: "TROFEO OQUENDO", altura: "1.50 m", baremo: "A con cronómetro", esDobleFase: true, esDesempate: false, archivoCSV: "../CSV/2018/CSIO 2018 - TROFEO OQUENDO.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 3) {
        pruebasJornada = [
            { id: "copa-naciones-2018", nombre: "COPA DE NACIONES SABADELL", altura: "1.60 m", baremo: "Dos Rondas", esDobleFase: true, esDesempate: false, archivoCSV: "../CSV/2018/CSIO 2018 - COPA DE NACIONES.csv", resultados: [] },
            { id: "trofeo-mahou-2018", nombre: "TROFEO MAHOU", altura: "1.40 m", baremo: "A con cronómetro y Desempate", esDobleFase: false, esDesempate: false, archivoCSV: "../CSV/2018/CSIO 2018 - TROFEO MAHOU.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 4) {
        pruebasJornada = [
            { id: "trofeo-cla-iii-2018", nombre: "TROFEO CENTRAL LECHERA ASTURIANA", altura: "1.30/1.35 m", baremo: "Baremo A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "../CSV/2018/CSIO 2018 - TROFEO CENTRAL LECHERA III.csv", resultados: [] },
            { id: "trofeo-casino-2018", nombre: "TROFEO CASINO DE ASTURIAS", altura: "1.40 m", baremo: "Acumulador", esDobleFase: true, esDesempate: false, archivoCSV: "../CSV/2018/CSIO 2018 - TROFEO CASINO DE ASTURIAS.csv", resultados: [] },
            { id: "trofeo-caja-rural-2018", nombre: "TROFEO CAJA RURAL", altura: "1.60 m", baremo: "A con cronómetro y Desempate", esDobleFase: false, esDesempate: true, archivoCSV: "../CSV/2018/CSIO 2018 - TROFEO CAJA RURAL GIJON.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 5) {
        pruebasJornada = [
            { id: "trofeo-gaitero-2018", nombre: "TROFEO EL GAITERO", altura: "1.40 m", baremo: "A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "../CSV/2018/CSIO 2018 - TROFEO GAITERO.csv", resultados: [] },
            { id: "gran-premio-2018", nombre: "GRAN PREMIO DE GIJÓN", altura: "1.60 m", baremo: "Dos Mangas", esDobleFase: false, esDesempate: false, archivoCSV: "../CSV/2018/CSIO 2018 - GRAN PREMIO DE GIJON.csv", resultados: [] }
        ];
    } else {
        // Día 1 por defecto
        pruebasJornada = [
            { id: "trofeo-cla-2018", nombre: "TROFEO CENTRAL LECHERA ASTURIANA", altura: "1.30/1.35 m", baremo: "A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "../CSV/2018/CSIO 2018 - TROFEO CENTRAL LECHERA.csv", resultados: [] },
            { id: "trofeo-cocacola-2018", nombre: "TROFEO COCACOLA", altura: "1.40 m", baremo: "A con cronómetro", esDobleFase: true, esDesempate: false, archivoCSV: "../CSV/2018/CSIO 2018 - TROFEO COCA-COLA.csv", resultados: [] },
            { id: "trofeo-lacera-2018", nombre: "TROFEO LACERA", altura: "1.50 m", baremo: "Dos Fases", esDobleFase: true, esDesempate: false, archivoCSV: "../CSV/2018/CSIO 2018 - TROFEO LACERA.csv", resultados: [] }
        ];
    }
    else if (esEdicion2019) 
    // ==========================================
    // CONFIGURACIÓN DE PRUEBAS 2019
    // ==========================================
    if (numeroDiaActual === 2) {
        pruebasJornada = [
            { id: "trofeo-cocacola-ii-2019", nombre: "TROFEO COCACOLA", altura: "1.30/1.35 m", baremo: "Dos Fases Especial", esDobleFase: false, esDesempate: false, archivoCSV: "../CSV/2019/CSIO 2019 - TROFEO COCACOLA II.csv", resultados: [] },
            { id: "trofeo-veolia-2019", nombre: "TROFEO VEOLIA", altura: "1.40 m", baremo: "Dos Fases", esDobleFase: false, esDesempate: false, archivoCSV: "../CSV/2019/CSIO 2019 - TROFEO VEOLIA.csv", resultados: [] },
            { id: "trofeo-oquendo-2019", nombre: "TROFEO OQUENDO", altura: "1.50 m", baremo: "A con cronómetro", esDobleFase: true, esDesempate: false, archivoCSV: "../CSV/2019/CSIO 2019 - TROFEO OQUENDO.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 3) {
        pruebasJornada = [
            { id: "copa-naciones-2019", nombre: "COPA DE NACIONES SABADELL", altura: "1.60 m", baremo: "Dos Rondas", esDobleFase: true, esDesempate: false, archivoCSV: "../CSV/2019/CSIO 2019 - COPA NACIONES.csv", resultados: [] },
            { id: "trofeo-mahou-2019", nombre: "TROFEO MAHOU", altura: "1.40 m", baremo: "A con cronómetro y Desempate", esDobleFase: false, esDesempate: false, archivoCSV: "../CSV/2019/CSIO 2019 - TROFEO MAHOU.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 4) {
        pruebasJornada = [
            { id: "trofeo-cocacola-iii-2019", nombre: "TROFEO COCACOLA", altura: "1.30 m", baremo: "Baremo A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "../CSV/2019/CSIO 2019 - TROFEO COCACOLA III.csv", resultados: [] },
            { id: "trofeo-casino-2019", nombre: "TROFEO CASINO DE ASTURIAS", altura: "1.40 m", baremo: "Acumulador", esDobleFase: true, esDesempate: false, archivoCSV: "../CSV/2019/CSIO 2019 - TROFEO CASINO.csv", resultados: [] },
            { id: "trofeo-caja-rural-2019", nombre: "TROFEO CAJA RURAL", altura: "1.60 m", baremo: "A con cronómetro y Desempate", esDobleFase: false, esDesempate: true, archivoCSV: "../CSV/2019/CSIO 2019 - TROFEO CAJA RURAL.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 5) {
        pruebasJornada = [
            { id: "trofeo-cla-2019", nombre: "TROFEO CENTRAL LECHERA ASTURIANA", altura: "1.40 m", baremo: "A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "../CSV/2019/CSIO 2019 - TROFEO CENTRAL LECHERA.csv", resultados: [] },
            { id: "gran-premio-2019", nombre: "GRAN PREMIO DE GIJÓN", altura: "1.60 m", baremo: "Dos Mangas", esDobleFase: false, esDesempate: false, archivoCSV: "../CSV/2019/CSIO 2019 - GRAN PREMIO DE GIJON.csv", resultados: [] }
        ];
    } else {
        // Día 1 por defecto
        pruebasJornada = [
            { id: "trofeo-cocacola-2019", nombre: "TROFEO COCACOLA", altura: "1.30/1.35 m", baremo: "A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "../CSV/2019/CSIO 2019 - TROFEO COCACOLA.csv", resultados: [] },
            { id: "trofeo-lacera-2019", nombre: "TROFEO LACERA", altura: "1.40 m", baremo: "A con cronómetro", esDobleFase: true, esDesempate: false, archivoCSV: "../CSV/2019/CSIO 2019 - TROFEO LACERA.csv", resultados: [] },
            { id: "trofeo-ema-2019", nombre: "TROFEO LACERA", altura: "1.50 m", baremo: "Dos Fases", esDobleFase: true, esDesempate: false, archivoCSV: "../CSV/2019/CSIO 2019 - TROFEO EMA.csv", resultados: [] }
        ];
    }
    else if (esEdicion2022) 
    // ==========================================
    // CONFIGURACIÓN DE PRUEBAS 2022
    // ==========================================
    if (numeroDiaActual === 2) {
        pruebasJornada = [
            { id: "trofeo-banco-sabadell-2022", nombre: "TROFEO BANCO SABADELL", altura: "1.30 m", baremo: "Dos Fases Especial", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2022/CSI 2022 - TROFEO BANCO SABADELL.csv", resultados: [] },
            { id: "trofeo-esfer-2022", nombre: "TROFEO ESFER", altura: "1.40 m", baremo: "Dos Fases especial", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2022/CSI 2022 - TROFEO ESFER.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 3) {
        pruebasJornada = [
            { id: "trofeo-emulsa-2022", nombre: "TROFEO EMULSA", altura: "1.30/1.35 m", baremo: "Dos Fases Especial", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2022/CSI 2022 - TROFEO EMULSA.csv", resultados: [] },
            { id: "trofeo-dicar-2022", nombre: "TROFEO CASINO DE ASTURIAS", altura: "1.45 m", baremo: "A con cronómetro", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2022/CSI 2022 - TROFEO DICAR.csv", resultados: [] },
            { id: "trofeo-suzuki-2022", nombre: "TROFEO SUZUKI", altura: "1.50 m", baremo: "A con cronómetro", esDobleFase: false, esDesempate: true, archivoCSV: "CSV/2022/CSI 2022 - TROFEO SUZUKI.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 4) {
        pruebasJornada = [
            { id: "trofe-gesinne-2022", nombre: "TROFEO GESINNE", altura: "1.30 m", baremo: "Acumulador", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2022/CSI 2022 - TROFEO GESINNE.csv", resultados: [] },
            { id: "trofeo-visama-2022", nombre: "TROFEO VISAMA", altura: "1.45 m", baremo: "Dos Fases Especial", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2022/CSI 2022 - TROFEO VISAMA.csv", resultados: [] },
            { id: "trofeo-caja-rural-2022", nombre: "TROFEO CAJA RURAL GIJÓN", altura: "1.55 m", baremo: "A con cronómetro y Desempate", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2022/CSI 2022 - TROFEO CAJA RURAL.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 5) {
        pruebasJornada = [
            { id: "trofeo-cocacola-2022", nombre: "TROFEO COCACOLA", altura: "1.30/1.35 m", baremo: "A con cronómetro", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2022/CSI 2022 - TROFEO COCACOLA.csv", resultados: [] },
            { id: "trofeo-oquendo-2022", nombre: "TROFEO OQUENDO", altura: "1.45 m", baremo: "A con cronómetro y Desempate", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2022/CSI 2022 - TROFEO OQUENDO.csv", resultados: [] },
            { id: "trofeo-lacera-2022", nombre: "TROFEO LACERA", altura: "1.50 m", baremo: "Dos Mangas", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2022/CSI 2022 - TROFEO LACERA.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 6) {
        pruebasJornada = [
            { id: "trofeo-mahou-2022", nombre: "TROFEO MAHOU", altura: "1.30/1.35 m", baremo: "A con cronómetro y desempate", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2022/CSI 2022 - TROFEO MAHOU.csv", resultados: [] },
            { id: "trofeo-funeraria-2022", nombre: "TROFEO FUNERARIA GIJONESA", altura: "1.45 m", baremo: "A con cronómetro y desempate", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2022/CSI 2022 - TROFEO FUNERARIA GIJONESA.csv", resultados: [] },
            { id: "gran-premio-gijon-2022", nombre: "GRAN PREMIO DE GIJÓN", altura: "1.60 m", baremo: "A con cronómetro y manga ganadora", esDobleFase: false, esDesempate: true, archivoCSV: "CSV/2022/CSI 2022 - GRAN PREMIO DE GIJON.csv", resultados: [] }
        ];
    } else {
        // Día 1 por defecto
        pruebasJornada = [
            { id: "trofeo-ema-2022", nombre: "TROFEO EMA", altura: "1.30 m", baremo: "A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2022/CSI 2022 - TROFEO EMA.csv", resultados: [] }
            ];
    }
    else if (esEdicion2023) 
    // ==========================================
    // CONFIGURACIÓN DE PRUEBAS 2023
    // ==========================================
    if (numeroDiaActual === 2) {
        pruebasJornada = [
            { id: "trofeo-dicar-2023", nombre: "TROFEO DICAR", altura: "1.30 m", baremo: "Dos Fases Especial", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2023/CSI 2023 - TROFEO DICAR.csv", resultados: [] },
            { id: "trofeo-esfer-2023", nombre: "TROFEO ESFER", altura: "1.40 m", baremo: "Dos Fases especial", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2023/CSI 2023 - TROFEO ESFER.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 3) {
        pruebasJornada = [
            { id: "trofeo-emulsa-2023", nombre: "TROFEO EMULSA", altura: "1.45 m", baremo: "A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2023/CSI 2023 - TROFEO EMULSA.csv", resultados: [] },
            { id: "trofeo-visama-2023", nombre: "TROFEO VISAMA", altura: "1.45 m", baremo: "A con cronómetro", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2023/CSI 2023 - TROFEO VISAMA.csv", resultados: [] },
            { id: "trofeo-mahou-2023", nombre: "TROFEO MAHOU", altura: "1.50 m", baremo: "Dos Fases Especial", esDobleFase: false, esDesempate: true, archivoCSV: "CSV/2023/CSI 2023 - TROFEO MAHOU.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 4) {
        pruebasJornada = [
            { id: "trofe-cocacola-2023", nombre: "TROFEO COCACOLA", altura: "1.30 m", baremo: "Dos Fases Especial", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2023/CSI 2023 - TROFEO COCACOLA.csv", resultados: [] },
            { id: "trofeo-oquendo-2023", nombre: "TROFEO OQUENDO", altura: "1.30 m", baremo: "Acumulador", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2023/CSI 2023 - TROFEO OQUENDO.csv", resultados: [] },
            { id: "trofeo-caja-rural-2023", nombre: "TROFEO CAJA RURAL GIJÓN", altura: "1.55 m", baremo: "A con cronómetro y Desempate", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2023/CSI 2023 - TROFEO CAJA RURAL.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 5) {
        pruebasJornada = [
            { id: "trofeo-cocacola-ii-2023", nombre: "TROFEO COCACOLA", altura: "1.30/1.35 m", baremo: "A con cronómetro", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2023/CSI 2023 - TROFEO COCACOLA II.csv", resultados: [] },
            { id: "trofeo-caser-2023", nombre: "TROFEO CASER GRUPO HELVETIA", altura: "1.45 m", baremo: "A con cronómetro y Desempate", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2023/CSI 2023 - TROFEO CASER GRUPO HELVETIA.csv", resultados: [] },
            { id: "trofeo-lacera-2023", nombre: "TROFEO LACERA", altura: "1.50 m", baremo: "Manga Ganadora", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2023/CSI 2023 - TROFEO LACERA.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 6) {
        pruebasJornada = [
            { id: "trofeo-triocar-2023", nombre: "TROFEO TRIOCAR", altura: "1.30/1.35 m", baremo: "A con cronómetro y desempate", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2023/CSI 2023 - TROFEO TRIOCAR.csv", resultados: [] },
            { id: "trofeo-funeraria-2023", nombre: "TROFEO FUNERARIA GIJONESA", altura: "1.45 m", baremo: "A con cronómetro", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2023/CSI 2023 - TROFEO FUNERARIA GIJONESA.csv", resultados: [] },
            { id: "gran-premio-gijon-2023", nombre: "GRAN PREMIO DE GIJÓN", altura: "1.60 m", baremo: "Dos Mangas", esDobleFase: false, esDesempate: true, archivoCSV: "CSV/2023/CSI 2023 - GRAN PREMIO DE GIJON.csv", resultados: [] }
        ];
    } else {
        // Día 1 por defecto
        pruebasJornada = [
            { id: "trofeo-ema-2023", nombre: "TROFEO EMA", altura: "1.30 m", baremo: "A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2023/CSI 2023 - TROFEO EMA.csv", resultados: [] },
            { id: "trofeo-cla-2023", nombre: "TROFEO CENTRAL LECHERA ASTURIANA", altura: "1.40 m", baremo: "Dos Fases Especial", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2023/CSI 2023 - TROFEO CENTRAL LECHERA.csv", resultados: [] }
            ];
    }
    else if (esEdicion2025) {
    // ==========================================
    // CONFIGURACIÓN DE PRUEBAS 2025
    // ==========================================
    if (numeroDiaActual === 2) {
        pruebasJornada = [
            { id: "trofeo-siroko-2025", nombre: "TROFEO SIROKO", altura: "1.30 m", baremo: "Dos Fases Especial", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2025/CSI GIJÓN 2025 - TROFEO SIROKO.csv", resultados: [] },
            { id: "trofeo-oquendo-2025", nombre: "TROFEO OQUENDO", altura: "1.40 m", baremo: "Dos Fases especial", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2025/CSI GIJÓN 2025 - TROFEO OQUENDO.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 3) {
        pruebasJornada = [
            { id: "trofeo-artiem-2025", nombre: "TROFEO ARTIEM", altura: "1.45 m", baremo: "A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2025/CSI GIJÓN 2025 - TROFEO ARTIEM.csv", resultados: [] },
            { id: "trofeo-dicar-2025", nombre: "TROFEO DICAR", altura: "1.45 m", baremo: "A con cronómetro", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2025/CSI GIJÓN 2025 - TROFEO DICAR.csv", resultados: [] },
            { id: "trofeo-funeraria-2025", nombre: "TROFEO FUNERARIA GIJONESA", altura: "1.50 m", baremo: "Dos Fases Especial", esDobleFase: false, esDesempate: true, archivoCSV: "CSV/2025/CSI GIJÓN 2025 - TROFEO FUNERARIA GIJONESA.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 4) {
        pruebasJornada = [
            { id: "trofeo-esnovaracks-2025", nombre: "TROFEO ESNOVA RACKS", altura: "1.30/1.35 m", baremo: "Dos Fases Especial", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2025/CSI GIJÓN 2025 - TROFEO ESNOVA RACKS.csv", resultados: [] },
            { id: "trofeo-esfer-2025", nombre: "TROFEO ESFER", altura: "1.40 m", baremo: "Acumulador", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2025/CSI GIJÓN 2025 - TROFEO ESFER.csv", resultados: [] },
            { id: "trofeo-gijon-rural-2025", nombre: "TROFEO FUNDACIÓN GIJÓN RURAL", altura: "1.55 m", baremo: "A con cronómetro y desempate", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2025/CSI GIJÓN 2025 - TROFEO FUNDACION GIJON RURAL.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 5) {
        pruebasJornada = [
            { id: "trofeo-mahou-2025", nombre: "TROFEO MAHOU", altura: "1.30/1.35 m", baremo: "A con cronómetros", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2025/CSI GIJÓN 2025 - TROFEO MAHOU.csv", resultados: [] },
            { id: "trofeo-caser-2025", nombre: "TROFEO CASER GRUPO HELVETIA", altura: "1.45 m", baremo: "A con cronómetro y Desempate", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2025/CSI GIJÓN 2025 - TROFEO CASER GRUPO HELVETIA.csv", resultados: [] },
            { id: "trofeo-volvo-2025", nombre: "TROFEO VOLVO", altura: "1.50 m", baremo: "Speed C", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2025/CSI GIJÓN 2025 - TROFEO VOLVO.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 6) {
        pruebasJornada = [
            { id: "trofeo-cocacola-2025", nombre: "TROFEO COCA-COLA", altura: "1.30/1.35 m", baremo: "A con cronómetro y Desempate", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2025/CSI GIJÓN 2025 - TROFEO COCACOLA.csv", resultados: [] },
            { id: "trofeo-lacera-2025", nombre: "TROFEO LACERA", altura: "1.45 m", baremo: "Baremo A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2025/CSI GIJÓN 2025 - TROFEO LACERA.csv", resultados: [] },
            { id: "gran-premio-gijon-2025", nombre: "GRAN PREMIO DE GIJÓN", altura: "1.60 m", baremo: "Dos Mangas", esDobleFase: false, esDesempate: true, archivoCSV: "CSV/2025/CSI GIJÓN 2025 - GRAN PREMIO DE GIJÓN.csv", resultados: [] }
        ];
    } else {
        // Día 1 por defecto
        pruebasJornada = [
            { id: "trofeo-valoriza-2025", nombre: "TROFEO VALORIZA", altura: "1.30 m", baremo: "A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/2025/CSI GIJÓN 2025 - TROFEO VALORIZA.csv", resultados: [] },
            { id: "trofeo-cla-2025", nombre: "TROFEO CENTRAL LECHERA ASTURIANA", altura: "1.40 m", baremo: "Dos Fases especial", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/2025/CSI GIJÓN 2025 - TROFEO CENTRAL LECHERA.csv", resultados: [] }
        ];
    }
} else {
    // ==========================================
    // CONFIGURACIÓN DE PRUEBAS 2024
    // ==========================================
    if (numeroDiaActual === 2) {
        pruebasJornada = [
            { id: "trofeo-mahou", nombre: "TROFEO MAHOU", altura: "1.30 m", baremo: "Dos Fases Especial", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/CSI GIJÓN 2024 - TROFEO MAHOU.csv", resultados: [] },
            { id: "trofeo-oquendo", nombre: "TROFEO OQUENDO", altura: "1.40 m", baremo: "Dos Fases especial", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/CSI GIJÓN 2024 - TROFEO OQUENDO.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 3) {
        pruebasJornada = [
            { id: "trofeo-emulsa", nombre: "TROFEO EMULSA", altura: "1.45 m", baremo: "A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/CSI GIJÓN 2024 - TROFEO EMULSA.csv", resultados: [] },
            { id: "trofeo-dicar", nombre: "TROFEO DICAR", altura: "1.45 m", baremo: "A con cronómetros", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/CSI GIJÓN 2024 - TROFEO DICAR.csv", resultados: [] },
            { id: "trofeo-funeraria", nombre: "TROFEO FUNERARIA GIJONESA", altura: "1.50 m", baremo: "Dos Fases Especial", esDobleFase: false, esDesempate: true, archivoCSV: "CSV/CSI GIJÓN 2024 - TROFEO FUNERARIA GIJONESA.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 4) {
        pruebasJornada = [
            { id: "trofeo-cocacola", nombre: "TROFEO COCA-COLA", altura: "1.30/1.35 m", baremo: "Dos Fases Especial", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/CSI GIJÓN 2024 - TROFEO COCA-COLA.csv", resultados: [] },
            { id: "trofeo-esfer", nombre: "TROFEO ESFER", altura: "1.40 m", baremo: "Acumulador", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/CSI GIJÓN 2024 - TROFEO ESFER.csv", resultados: [] },
            { id: "trofeo-caja-rural", nombre: "TROFEO FUNDACIÓN CAJA RURAL DE GIJÓN", altura: "1.555 m", baremo: "A con cronómetro y Desempate", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/CSI GIJÓN 2024 - TROFEO FUNDACIÓN CAJA RURAL GIJÓN.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 5) {
        pruebasJornada = [
            { id: "trofeo-cocacola-ii", nombre: "TROFEO COCA-COLA II", altura: "1.30/1.35 m", baremo: "A con cronómetro", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/CSI GIJÓN 2024 - TROFEO COCA-COLA II.csv", resultados: [] },
            { id: "trofeo-caser", nombre: "TROFEO CASER GRUPO HELVETIA", altura: "1.45 m", baremo: "A con cronómetro y Desempate", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/CSI GIJÓN 2024 - TROFEO CASER GRUPO HELVETIA.csv", resultados: [] },
            { id: "trofeo-volvo", nombre: "TROFEO VOLVO", altura: "1.50 m", baremo: "Manga Ganadora", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/CSI GIJÓN 2024 - TROFEO VOLVO.csv", resultados: [] }
        ];
    } else if (numeroDiaActual === 6) {
        pruebasJornada = [
            { id: "trofeo-cocacola-iii", nombre: "TROFEO COCA-COLA III", altura: "1.30/1.35 m", baremo: "A con cronómetro y Desempate", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/CSI GIJÓN 2024 - TROFEO COCA-COLA III.csv", resultados: [] },
            { id: "trofeo-lacera", nombre: "TROFEO LACERA", altura: "1.45 m", baremo: "A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/CSI GIJÓN 2024 - TROFEO LACERA.csv", resultados: [] },
            { id: "gran-premio-gijon", nombre: "GRAN PREMIO DE GIJÓN", altura: "1.60 m", baremo: "Dos Mangas", esDobleFase: false, esDesempate: true, archivoCSV: "CSV/CSI GIJÓN 2024 - GRAN PREMIO DE GIJÓN.csv", resultados: [] }
        ];
    } else {
        // Día 1 por defecto
        pruebasJornada = [
            { id: "trofeo-ema", nombre: "TROFEO EMA", altura: "1.30 m", baremo: "A con cronómetro", esDobleFase: false, esDesempate: false, archivoCSV: "CSV/CSI GIJÓN 2024 - TROFEO EMA.csv", resultados: [] },
            { id: "trofeo-cla", nombre: "TROFEO CENTRAL LECHERA ASTURIANA", altura: "1.40 m", baremo: "Dos Fases especial", esDobleFase: true, esDesempate: false, archivoCSV: "CSV/CSI GIJÓN 2024 - TROFEO CENTRAL LECHERA ASTURIANA.csv", resultados: [] }
        ];
    }
}

let pruebaActivaId = pruebasJornada[0] ? pruebasJornada[0].id : "";
let chartInstance = null;

// ==========================================
// INICIALIZACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    inicializar();
    generarNavegacionDias();
});

async function inicializar() {
    poblarDesplegablePruebas();
    poblarListaPruebasLateral();
    await cargarTodosLosCSVs();
    mostrarPrueba(pruebaActivaId);
}

// ==========================================
// CARGA Y PROCESADO DE CSVs (CORREGIDO)
// ==========================================
async function cargarTodosLosCSVs() {
    for (let prueba of pruebasJornada) {
        let rutaCSV = prueba.archivoCSV;
        
        // CORRECCIÓN CLAVE: Aplica ../ si estamos tanto en /2024/ como en /2025/
        if (paginaActual.includes('/2024/') || paginaActual.includes('/2025/') || paginaActual.includes('/2016/') || paginaActual.includes('/2017/') || paginaActual.includes('/2018/') || paginaActual.includes('/2019/') || paginaActual.includes('/2022/') || paginaActual.includes('/2023/')) {
            rutaCSV = "../" + prueba.archivoCSV;
        }

        await new Promise((resolve) => {
            Papa.parse(rutaCSV, {
                download: true,
                header: true,
                skipEmptyLines: true,
                delimiter: "",
                complete: function(results) {
                    if (results.data && results.data.length > 0) {
                        procesarDatosCSV(results.data, prueba.id);
                    }
                    resolve();
                },
                error: function() { 
                    resolve(); 
                }
            });
        });
    }
}

function procesarDatosCSV(filas, pruebaId) {
    if (!filas || filas.length === 0) return;
    const primeraFila = filas[0];

    // Función auxiliar para procesar los puntos (mantiene RET y EL como texto, o devuelve el número/0)
    const limpiarPuntos = (valor) => {
        if (!valor) return 0;
        const v = String(valor).trim().toUpperCase();
        if (v === 'RET' || v === 'RETIRADO') return 'RET';
        if (v === 'EL' || v === 'ELIMINADO' || v === 'ELIM') return 'EL';
        
        const num = parseFloat(v.replace(',', '.'));
        return isNaN(num) ? 0 : num;
    };

    // Detectar si la prueba tiene Dos Fases
    const tieneDobleFase = Object.keys(primeraFila).some(k => {
        const key = k.toLowerCase();
        return key.includes('fase i') || key.includes('fase 1') || key.includes('fase ii') || key.includes('fase 2');
    });

    // Detectar si la prueba tiene Desempate o Manga Ganadora
    const tieneDesempate = Object.keys(primeraFila).some(k => {
        const key = k.toLowerCase();
        return key.includes('desempate') || key.includes('jump-off') || key.includes('jump off') || key.includes('manga');
    });
    
    let formateados = filas.map(f => {
        if (tieneDobleFase) {
            const f1Puntos = limpiarPuntos(obtenerCampo(f, ['puntos fase i', 'fase i puntos', 'fase 1 puntos', 'fase i faltas', 'puntos fase 1']));
            const f2Puntos = limpiarPuntos(obtenerCampo(f, ['puntos fase ii', 'fase ii puntos', 'fase 2 puntos', 'fase ii faltas', 'puntos fase 2']));
            const totPuntos = limpiarPuntos(obtenerCampo(f, ['total', 'total puntos', 'total faltas']));

            return {
                pos: obtenerCampo(f, ['posición', 'posicion', 'pos', 'pos.']),
                jinete: obtenerCampo(f, ['atleta', 'jinete', 'amazona', 'participante', 'jinete/amazona']),
                caballo: obtenerCampo(f, ['caballo']),
                premio: obtenerCampo(f, ['premio (€)', 'premio', 'premios']),
                fase1Puntos: f1Puntos,
                fase1Tiempo: (f1Puntos === 'RET' || f1Puntos === 'EL') ? '-' : obtenerCampo(f, ['tiempo fase i', 'fase i tiempo', 'fase 1 tiempo', 'tiempo fase 1']),
                fase2Puntos: f2Puntos,
                fase2Tiempo: (f2Puntos === 'RET' || f2Puntos === 'EL') ? '-' : obtenerCampo(f, ['tiempo fase ii', 'fase ii tiempo', 'fase 2 tiempo', 'tiempo fase 2']),
                totalPuntos: totPuntos
            };
        } else if (tieneDesempate) {
            const pts = limpiarPuntos(obtenerCampo(f, ['puntos', 'faltas', 'puntos recorrido', 'faltas recorrido']));
            const despts = limpiarPuntos(obtenerCampo(f, ['puntos desempate', 'desempate puntos', 'faltas desempate', 'desempate faltas', 'puntos manga', 'manga puntos']));

            return {
                pos: obtenerCampo(f, ['posición', 'posicion', 'pos', 'pos.']),
                jinete: obtenerCampo(f, ['atleta', 'jinete', 'amazona', 'participante', 'jinete/amazona']),
                caballo: obtenerCampo(f, ['caballo']),
                premio: obtenerCampo(f, ['premio (€)', 'premio', 'premios']),
                puntos: pts,
                tiempo: (pts === 'RET' || pts === 'EL') ? '-' : obtenerCampo(f, ['tiempo', 'tiempo recorrido']),
                desempatePuntos: despts,
                desempateTiempo: (despts === 'RET' || despts === 'EL') ? '-' : obtenerCampo(f, ['tiempo desempate', 'desempate tiempo', 'tiempo manga', 'manga tiempo'])
            };
        } else {
            const pts = limpiarPuntos(obtenerCampo(f, ['puntos', 'faltas']));

            return {
                pos: obtenerCampo(f, ['posición', 'posicion', 'pos', 'pos.']),
                jinete: obtenerCampo(f, ['atleta', 'jinete', 'amazona', 'participante', 'jinete/amazona']),
                caballo: obtenerCampo(f, ['caballo']),
                premio: obtenerCampo(f, ['premio (€)', 'premio', 'premios']),
                puntos: pts,
                tiempo: (pts === 'RET' || pts === 'EL') ? '-' : obtenerCampo(f, ['tiempo'])
            };
        }
    });

    const idx = pruebasJornada.findIndex(p => p.id === pruebaId);
    if (idx !== -1) {
        pruebasJornada[idx].esDobleFase = tieneDobleFase;
        pruebasJornada[idx].esDesempate = tieneDesempate;
        pruebasJornada[idx].resultados = formateados;
    }
}

function obtenerCampo(objeto, nombresPosibles) {
    if (!objeto) return '-';
    const normalizar = (texto) => texto.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    const nombresLimpios = nombresPosibles.map(n => normalizar(n));
    const claveEncontrada = Object.keys(objeto).find(key => nombresLimpios.includes(normalizar(key)));
    return (claveEncontrada && objeto[claveEncontrada] !== "") ? objeto[claveEncontrada] : '-';
}

// ==========================================
// INTERFAZ Y NAVEGACIÓN
// ==========================================
function generarNavegacionDias() {
    const header = document.querySelector('.main-header');
    if (!header) return;

    // Detectamos si es 2018 para usar 5 días, si no, usamos 6 por defecto
    const esEdicion2018 = window.location.pathname.includes('/2018/');
    const totalDias = esEdicion2018 ? 5 : 6;

    const navDiv = document.createElement('div');
    navDiv.className = 'nav-dias-container';

    // Botón Anterior
    if (numeroDiaActual > 1) {
        const btnAnt = document.createElement('a');
        btnAnt.className = 'btn-nav-dia';
        btnAnt.href = `${numeroDiaActual - 1}.html`;
        btnAnt.innerText = `⬅️ Día ${numeroDiaActual - 1}`;
        navDiv.appendChild(btnAnt);
    } else {
        const spacer = document.createElement('div');
        spacer.className = 'btn-spacer';
        navDiv.appendChild(spacer);
    }

    // Etiqueta del día actual
    const labelDia = document.createElement('span');
    labelDia.className = 'dia-actual-label';
    labelDia.innerText = `Jornada ${numeroDiaActual}`;
    navDiv.appendChild(labelDia);

    // Botón Siguiente (Ahora respetará si el total es 5)
    if (numeroDiaActual < totalDias) {
        const btnSig = document.createElement('a');
        btnSig.className = 'btn-nav-dia';
        btnSig.href = `${numeroDiaActual + 1}.html`;
        btnSig.innerText = `Día ${numeroDiaActual + 1} ➡️`;
        navDiv.appendChild(btnSig);
    } else {
        const spacer = document.createElement('div');
        spacer.className = 'btn-spacer';
        navDiv.appendChild(spacer);
    }

    header.appendChild(navDiv);
}

function poblarDesplegablePruebas() {
    const select = document.getElementById('select-prueba-activa');
    if (!select) return;
    select.innerHTML = '';
    pruebasJornada.forEach(p => {
        select.innerHTML += `<option value="${p.id}">${p.nombre}</option>`;
    });
}

function poblarListaPruebasLateral() {
    const ul = document.getElementById('lista-pruebas-dia');
    if (!ul) return;
    ul.innerHTML = '';
    pruebasJornada.forEach(p => {
        ul.innerHTML += `<li><button class="test-btn" style="width: 100%; text-align: left; padding: 8px 12px; margin-bottom: 5px; border: 1px solid #ddd; background: #f9f9f9; border-radius: 4px; cursor: pointer;" onclick="cambiarPruebaActiva('${p.id}')">🏇 ${p.nombre}</button></li>`;
    });
}

function cambiarPruebaActiva(pruebaId) {
    pruebaActivaId = pruebaId;
    const select = document.getElementById('select-prueba-activa');
    if (select) select.value = pruebaId;
    mostrarPrueba(pruebaId);
}

function mostrarPrueba(pruebaId) {
    const prueba = pruebasJornada.find(p => p.id === pruebaId);
    if (!prueba) return;

    const tituloTabla = document.getElementById('titulo-tabla');
    const tituloGrafico = document.getElementById('titulo-grafico');
    const subtituloJornada = document.getElementById('subtitulo-jornada');

    if (tituloTabla) tituloTabla.innerText = `Clasificación General - ${prueba.nombre}`;
    if (tituloGrafico) tituloGrafico.innerText = `${prueba.nombre}`;
    if (subtituloJornada) subtituloJornada.innerText = `Resultados oficiales de la prueba ${prueba.nombre}`;

    renderizarJornada(prueba);
}

function buscarEnJornada() {
    const input = document.getElementById('input-busqueda');
    if (!input) return;
    const texto = input.value.toLowerCase().trim();

    const prueba = pruebasJornada.find(p => p.id === pruebaActivaId);
    if (!prueba) return;

    if (texto === '') {
        renderizarJornada(prueba);
        return;
    }

    const resultadosFiltrados = prueba.resultados.filter(r => 
        (r.jinete && r.jinete.toLowerCase().includes(texto)) ||
        (r.caballo && r.caballo.toLowerCase().includes(texto))
    );

    const pruebaClon = { ...prueba, resultados: resultadosFiltrados };
    renderizarJornada(pruebaClon);
}

// ==========================================
// RENDERIZADO Y TABLAS
// ==========================================
function renderizarJornada(prueba) {
    const resultados = prueba.resultados;

    const statPruebas = document.getElementById('stat-pruebas');
    if (statPruebas) {
        statPruebas.innerHTML = `
            <span style="font-size: 1.3rem; color: #1b5e20; font-weight: bold;">
                ${prueba.altura || '1.40 m'}
            </span>
            <br>
            <small style="font-size: 0.85rem; color: #555; font-weight: normal;">
                ${prueba.baremo || 'Baremo A con cronómetro'}
            </small>
        `;
    }

    const statBinomios = document.getElementById('stat-binomios');
    if (statBinomios) statBinomios.innerText = resultados.length;

    const statCeros = document.getElementById('stat-ceros');
    const ceros = resultados.filter(r => {
        if (prueba.esDobleFase) return r.totalPuntos === 0;
        if (prueba.esDesempate) return r.puntos === 0 && (isNaN(r.desempatePuntos) || r.desempatePuntos === 0);
        return r.puntos === 0;
    }).length;
    if (statCeros) statCeros.innerText = ceros;

    const statTiempo = document.getElementById('stat-tiempo');
    if (resultados.length > 0) {
        const tiempos = resultados.map(r => {
            if (prueba.esDobleFase) return parseFloat(r.fase2Tiempo) || 999;
            if (prueba.esDesempate) return parseFloat(r.desempateTiempo) || parseFloat(r.tiempo) || 999;
            return parseFloat(r.tiempo) || 999;
        });
        const minTiempo = Math.min(...tiempos);
        if (statTiempo) statTiempo.innerText = minTiempo < 999 ? `${minTiempo}s` : '--';
    } else {
        if (statTiempo) statTiempo.innerText = '--';
    }

    renderTablaAdaptable(prueba);
}

function renderTablaAdaptable(prueba) {
    const tabla = document.getElementById('tabla-resultados');
    if (!tabla) return;

    const resultados = prueba.resultados || [];
    const tieneDobleFase = prueba.esDobleFase;
    const tieneDesempate = prueba.esDesempate;

    const formatearPuntos = (val) => {
        if (val === undefined || val === null || val === '-' || isNaN(val)) return '-';
        const num = parseFloat(val);
        if (num === 0) return '<span style="color:green;font-weight:bold;">0</span>';
        return num;
    };

    const formatearTiempo = (val) => {
        if (!val || val === '-' || val === 'undefined') return '-';
        const strVal = val.toString().trim();
        return strVal.endsWith('s') ? strVal : `${strVal}s`;
    };

    let theadHTML = `
        <thead>
            <tr>
                <th>Pos.</th>
                <th>Jinete / Amazona</th>
                <th>Caballo</th>
                <th>Premio</th>
    `;

    if (tieneDobleFase) {
        theadHTML += `
                <th>Fase I Puntos</th>
                <th>Fase I Tiempo</th>
                <th>Fase II Puntos</th>
                <th>Fase II Tiempo</th>
                <th>Total Puntos</th>
        `;
    } else if (tieneDesempate) {
        theadHTML += `
                <th>Puntos Recorrido</th>
                <th>Tiempo Recorrido</th>
                <th>Puntos Desempate</th>
                <th>Tiempo Desempate</th>
        `;
    } else {
        theadHTML += `
                <th>Puntos</th>
                <th>Tiempo</th>
        `;
    }

    theadHTML += `</tr></thead>`;

    let tbodyHTML = `<tbody id="cuerpo-tabla">`;

    if (resultados.length === 0) {
        const colSpan = tieneDobleFase ? 9 : (tieneDesempate ? 8 : 6);
        tbodyHTML += `<tr><td colspan="${colSpan}" style="text-align:center;">No hay resultados cargados para esta prueba.</td></tr>`;
    } else {
        resultados.forEach(r => {
            tbodyHTML += `
                <tr>
                    <td><strong>${r.pos || '-'}º</strong></td>
                    <td><strong>${r.jinete || '-'}</strong></td>
                    <td><em>${r.caballo || '-'}</em></td>
                    <td>${r.premio && r.premio !== '-' ? r.premio + '€' : '-'}</td>
            `;

            if (tieneDobleFase) {
                tbodyHTML += `
                    <td>${formatearPuntos(r.fase1Puntos)}</td>
                    <td>${formatearTiempo(r.fase1Tiempo)}</td>
                    <td>${formatearPuntos(r.fase2Puntos)}</td>
                    <td>${formatearTiempo(r.fase2Tiempo)}</td>
                    <td><strong>${formatearPuntos(r.totalPuntos)}</strong></td>
                `;
            } else if (tieneDesempate) {
                tbodyHTML += `
                    <td>${formatearPuntos(r.puntos)}</td>
                    <td>${formatearTiempo(r.tiempo)}</td>
                    <td>${formatearPuntos(r.desempatePuntos)}</td>
                    <td>${formatearTiempo(r.desempateTiempo)}</td>
                `;
            } else {
                tbodyHTML += `
                    <td>${formatearPuntos(r.puntos)}</td>
                    <td>${formatearTiempo(r.tiempo)}</td>
                `;
            }

            tbodyHTML += `</tr>`;
        });
    }

    tbodyHTML += `</tbody>`;
    tabla.innerHTML = theadHTML + tbodyHTML;
}



function procesarCSVManual() {
    const fileInput = document.getElementById('file-csv');
    const pruebaIdSelect = document.getElementById('select-prueba-activa');
    const statusDiv = document.getElementById('csv-status');

    if (!fileInput || !fileInput.files.length) {
        if (statusDiv) statusDiv.innerHTML = '<span style="color:red; font-weight:bold;">⚠️ Por favor, selecciona un archivo CSV.</span>';
        return;
    }

    const idSeleccionado = pruebaIdSelect ? pruebaIdSelect.value : pruebaActivaId;

    Papa.parse(fileInput.files[0], {
        header: true,
        skipEmptyLines: true,
        delimiter: "",
        complete: function(results) {
            if (results.data && results.data.length > 0) {
                procesarDatosCSV(results.data, idSeleccionado);
                if (statusDiv) statusDiv.innerHTML = `<span style="color:green; font-weight:bold;">✅ Prueba cargada con éxito.</span>`;
                mostrarPrueba(idSeleccionado);
            }
        }
    });
}