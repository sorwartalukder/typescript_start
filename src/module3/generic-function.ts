// // Arrow function
// const createArray = (param: string): string[] => [param];
// const createArray1 = <T>(param: T): T[] => [param];

// const result1 = createArray1<string>('sorwar');

// type Name = {
//     name: string
// }
// const result2 = createArray1<Name>({ name: 'sorwar' });

// //spread operator
// const crush = 'faria';
// const myInfo = {
//     name: 'sorwar',
//     age: 23,
//     salary: 15000
// }
// const newData = { ...myInfo, crush };

// const addMeInMyCrushMind = <T>(param: T) => {
//     const crush1 = 'faria';
//     const newData1 = { ...param, crush1 }
//     return newData1;
// }
// const result3 = addMeInMyCrushMind(myInfo);