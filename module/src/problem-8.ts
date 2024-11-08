{
    //
    type User ={
        name: string;
        age: number;
        email: string
    }
    
    function validateKeys<T extends object>(obj: T, keys: (keyof T)[]) : boolean {
        return keys.every((k) =>k in obj);
    };

    const person : User ={
        name: "Alice", 
        age: 25, 
        email: "alice@example.com"
    }

    //Result
    console.log(validateKeys(person, ['name', 'age']));
    //
}