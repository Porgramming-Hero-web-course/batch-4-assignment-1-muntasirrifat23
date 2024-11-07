{
    //

    function sumArray(AllNumber: number[]): number {
        let AddNumber = 0;
        for(let All of AllNumber){
            AddNumber = All + AddNumber;
        }
        return AddNumber;
    }
    
    console.log(sumArray ([1, 2, 3, 4, 5]) ); 

    //

}