const arrayOfNumbers = [1, 3, 2];
const arrayOfStrings = arrayOfNumbers.map((number) => number.toString())
console.log(arrayOfStrings);

type volume = {
    height: number;
    width: string;
    depth: number;
};
type Area<T> = {
    // [key in keyof volume]: volume[key];
    readonly [key in keyof T]: T[key];
}
const area1: Area<volume> = {
    height: 10,
    width: '10',
    depth: 11
}

type AreaReadonly = {
    readonly height: number;
    readonly width: number;
};

const rectangularArea: AreaReadonly = {
    height: 10,
    width: 12
}

type A = AreaReadonly['height']; //lok up types
type B = keyof AreaReadonly;