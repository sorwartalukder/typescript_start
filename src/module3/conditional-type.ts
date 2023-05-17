// //conditional type 
// type a1 = string;
// type a2 = a1 extends string ? string : null;

// //nested conditional type
// type a3 = undefined;
// type a4 = number;
// type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never;

// type Sheikh = {
//     wife1: string;
//     wife2: string;
// };
// type CheckProperty<T, K> = K extends keyof T ? true : false;

// type CheckWife2 = CheckProperty<Sheikh, 'wife2'>

// type Bandubi = 'Khadija' | 'Nurjahan' | 'Israt';

// type RemobeBandubi<T, K> = T extends K ? never : T;
// type CurrentBandubi = RemobeBandubi<Bandubi, 'Nurjahan'>;