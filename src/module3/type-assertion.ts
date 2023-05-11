// type assertion

let emni: any;
emni = 'next lavel';
(emni as string).length;

function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `${value} gram`;
    }
    if (typeof param === 'number') {
        const valu = param * 1000;
        return valu;
    }
}

const resultToBeNumber = kgToGram(222) as number;
const resltToBeString = kgToGram('100') as string;