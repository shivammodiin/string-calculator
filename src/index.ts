export function calculateStringSum(input: string): number {
    let delimiter = ",";                                    
    const sanitizedInput = input.replace(/[^\S\n]+/g, "");
    let processedInput = sanitizedInput;
    if (processedInput.startsWith("//")) {                     // custom delimiter search
        const delimiterEndIndex = processedInput.indexOf("\n");
        if (delimiterEndIndex !== -1) {
            delimiter = processedInput.substring(2, delimiterEndIndex); // change to custom delimiter
            processedInput = processedInput.substring(delimiterEndIndex + 1); // change to processedString
        }
    }
    processedInput = processedInput.replace(/\n/g, delimiter);
    const numberStrings: string[] = processedInput.split(delimiter); 
    const numbersArray: number[] = numberStrings.map(str => +str);
    if(processedInput === '') return 0;
 
    return numbersArray.reduce((sum, num) => sum + num, 0);


}