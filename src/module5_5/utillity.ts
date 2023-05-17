// Pick
interface Person {
    name: string;
    email?: string;
    contactNo: string;
};
type Contact = Pick<Person, 'contactNo' | 'email'>;

//Omit
type Name = Omit<Person, 'email' | 'contactNo'>

//Partial
type Optional = Partial<Person>; //To make all the properties be optional type

//Required
type RequiredProps = Required<Person>;

//Readonly
const person: Readonly<Person> = {
    name: 'Sorwar',
    email: 'sor@gmail.com',
    contactNo: '01742554039'
}

//Record type
type MyObj = Record<'name' | 'email' | 'contactNo', string>;

const myObj: MyObj = {
    name: 'Sorwar',
    email: 'sor@gmail.com',
    contactNo: '01742554039'
}
