{
    //
    function sumArray(numbers) {
        return numbers.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
    }
    // Sample Input
    console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
    //
}
