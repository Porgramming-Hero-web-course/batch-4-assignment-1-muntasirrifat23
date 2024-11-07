{
    //
   function removeDuplicates(Values: number[]) : number[] {
    let output: number[] =[];
    for(let value of Values){
        if(!output.includes(value)){
            output.push(value);
        }
    }
    return output;
   }

   console.log(`After Remove duplicate values:`, removeDuplicates([1,2,2,3,4,4,5]));

    //
}