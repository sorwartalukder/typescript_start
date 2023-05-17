// properties
interface Model<TData, TMethods> {
    data: TData,
    methods: TMethods
}

interface IUser {
    firstName: string;
    lastName: string;
};

//Methods
interface IMethods {
    fulllName(): string;
};

type model = Model<IUser, IMethods>;

class User implements model {
    data: IUser;
    methods: IMethods;

    constructor(firstName: string, lastName: string) {
        this.data = { firstName, lastName }
        this.methods = {
            fulllName: () => `${firstName} ${lastName}`
        }
    }
}

const user1 = new User('Sorwar', 'Talukder');

console.log(user1.methods.fulllName());