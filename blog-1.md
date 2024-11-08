**Union:**
Union in Typescript use for or operation. Union denoted by (|) this symbol. If I give two data type in one if else condition. One is string data type and another is number data type. But for result showing it will take one data type based on condition. 
For example:
{
    function myData(values: string | number){
    if(typeof values ==="string"){
        return values;
    } else{
        return values;
    };
} 
    console.log(myData('Muntasir Rifat')) ;
    console.log(myData(10));
}

**Intersection:**
Intersection in Typescript use for common operation. Intersection denoted by (&) this symbol. It combines multiple types into one combined types. If one type has string data type and another type has number data type. It does two data type into one combined data type that has string data type and number data type. 
For example:
{
    type Person = { 
        name: string
    };
    type Salary ={
        amount: number
    };

    type Developer = Person & Salary;
    const Dev : Developer={
        name: "Muntasir Rifat",
        amount: 2000
    }
    console.log(Dev);
}