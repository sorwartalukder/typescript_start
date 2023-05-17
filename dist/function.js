"use strict";
// //normal function
// function add(num1: number, num2: number): number /* return type */ {
//     return num1 + num2;
// };
// add(2, 2);
// //spread operatior
// const friends = ['sorwar', 'rakib', 'newaz'];
// const newFriends = ['monica', 'rachel', 'norjahan']
// friends.push(...newFriends);
// console.log(friends)
// //rest paremeter
// const greetFriends = (
//     ...friends: string[]
// ): void => friends.forEach((friend) => console.log(`Hi ${friend}`));
// greetFriends('kasem', 'marof', 'shojon', 'murad');
// const addArrow = (num1: number, num2: number): number => num1 + num2;
// const arr = [1, 3, 5];
// const newArray = arr.map((elem: number) => elem * elem);
// const person: {
//     name: string,
//     balance: number,
//     addBalance(money: number): void;
// } = {
//     name: 'sorwar',
//     balance: 5,
//     addBalance(money: number) {
//         console.log(`My new balance is ${this.balance + money}`)
//     }
// }
