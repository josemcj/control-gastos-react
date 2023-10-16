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