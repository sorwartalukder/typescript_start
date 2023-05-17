
// const makePromise = (): Promise<String> => {
//     return new Promise<String>((resolve, reject) => {
//         const data: string = 'data is fatched';
//         if (data) {
//             resolve(data);
//         } else {
//             reject('failed to fetched data')
//         }
//     })
// }
// const getPromiseData = async (): Promise<void> => {
//     const data = await makePromise();
//     console.log(data);
// }
// type DataType = {
//     data: string;
// }
// const makePromiseObject = (): Promise<DataType> => {
//     return new Promise<DataType>((resolve, reject) => {
//         const data: DataType = { data: 'data is fatched' };
//         if (data) {
//             resolve(data);
//         } else {
//             reject('failed to fetched data')
//         }
//     })
// }
// const getPromiseDataObject = async (): Promise<DataType> => {
//     const data = await makePromiseObject();
//     return data;
// }

// //json data
// interface ITodo {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean
// }
// const getTodo = async (): Promise<ITodo> => {
//     const response = fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const data = (await response).json();
//     return data;
// }
// const getTodoData = async (): Promise<void> => {
//     const result = await getTodo();
//     console.log(result)
// }
// getTodoData()