const searchName = (value: string | null) => {
    if (value === null) {
        console.log('nothing');
    } else {
        console.log('Searching...');
    }
}

// searchName(null)

const getCarSpeed = (speed: unknown) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    } if (typeof speed === 'string') {
        const [value, unit] = speed.split(' ')
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    else {
        console.log('there is wrong type')
    }
}

getCarSpeed(10);
getCarSpeed('10 knh^-1')
getCarSpeed(true)

function throwError(message: string): never {
    throw new Error(message);
}
throwError('Error is mortal.')