{
    //
    function countWordOccurrences(sentence:string, word:string) : number {
        const SentenceDoLowerCase = sentence.toLowerCase();
        const WordDoLowerCase = word.toLowerCase();

        //Split
        const AllSentence = SentenceDoLowerCase.split(' ');
        const HowManyWord = AllSentence.filter(All => All === WordDoLowerCase).length;
        return HowManyWord;
    }
    console.log(`Count Word is:`, countWordOccurrences("I love typescript", "typescript"));
    
    //
}