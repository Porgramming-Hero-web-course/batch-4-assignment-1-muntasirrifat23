{
    //
    interface User {
        name: string;
        age: number;
    }

    const person: User = { 
        name: "Alice",
        age: 30 
      }; 

      const name = getProperty (person, "name");
      const age = getProperty(person, "age");
      function getProperty<T, Q extends keyof T> (param1: T, param2: Q): T[Q] {
        return param1[param2];
      }

      //Result
      console.log(getProperty(person, "name"));
      
    //
}