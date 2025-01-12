export function formatMin(min){
    const hours = Math.floor(min/60);
    const remainingMin = Math.floor(min%60)

    return `${hours}h ${remainingMin}min`
}