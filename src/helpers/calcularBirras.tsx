//Helper para calcular la cantidad de cajones de cerveza necesarios
export const calcularBirras = (guests: number, temp: number): number => {

    let beers: number;
    let crates: number;

    if (temp <= 24 && temp >= 20) {
        beers = guests * 1;
    } else if (temp < 20) {
        beers = guests * 0.75;
    } else {
        beers = guests * 2;
    }

    crates = beers / 6;

    if (crates % 1 !== 0) {
        crates = Math.floor(crates) + 1
    }

    return crates;
}   