/**
 * Formatea un número a moneda local MXN.
 * @param {number} cantidad Cantidad a formatear.
 * @returns Cantidad con el formato $1,000.00 (string).
 */
export const formatearCantidad = cantidad => {
    return cantidad.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN'
    })
}

/**
 * Formatea una cantidad añadiendo separación por miles con coma (,)
 * y centavos con punto (.).
 * @param {string} amount Cantidad a formatear.
 * @returns Cantidad en formato "1,000.00"
 */
export const formatearNumero = amountInput => {
    const amount = amountInput.replaceAll(',', '').replaceAll('.', '');
    const decimales = amount.slice(-2).length === 1 ? `0${amount.slice(-2)}` : amount.slice(-2);
    const cantidad = amount.slice(0, -2);
    let cantidadInt = '';
    let partes = [];
    let valorActual = '';

    for(let i = cantidad.length - 1; i >= 0; i--) {
        valorActual = cantidad[i] + valorActual;
        if(valorActual.length === 3 || i === 0) {
            partes.unshift(valorActual);
            valorActual = '';
        }
    }

    cantidadInt = partes.join(',').replace(/^(0,|0,|0)+/, '');

    return `${ cantidadInt }.${ decimales }`;
}

/**
 * Formatea una fecha en milisegundos a un string que el usuario puede entender.
 * @param {number} fechaMilisegundos Fecha en milisegundos obtenida con Date.now().
 * @returns String de la fecha con el formato: '17 oct 2023'.
 */
export const formatearFecha = fechaMilisegundos => {
    const fecha = new Date(fechaMilisegundos);
    return fecha.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

/**
 * Genera un UUID versión 4.
 * @returns UUDI v4.
 */
export const generarUUIDv4 = () => {
    return "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === "x" ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}