{
    //
    function countWordOccurrences(sentence:string, word:string) : number {
        const SentenceDoLowerCase = sentence.toLowerCase();
        const WordDoLowerCase = word.toLowerCase();

        const AllSentence = SentenceDoLowerCase.split(' ');
        const HowManyWord = AllSentence.filter(All => All === WordDoLowerCase).length;
        return HowManyWord;
    }
    console.log(countWordOccurrences("I love typescript", "typescript"));
    
    //
}