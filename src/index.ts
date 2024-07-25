export function calculateStringSum(input: string): number {
    let delimiter = ",";  // Default delimiter
    const sanitizedInput = input.replace(/[^\S\n]+/g, "");  // Remove all non-whitespace characters except newlines
    let processedInput = sanitizedInput;

   const customDelString = findCustomDeli(processedInput);
   delimiter = customDelString.newDeli;
   processedInput = customDelString.processedInput;


    // Replace all newline characters with the current delimiter
    processedInput = processedInput.replace(/\n/g, delimiter);
    
    const numbersArray: number[] = processedInput.split(delimiter).map(str => +str);
    const negativeNumbers = numbersArray.filter(num => num < 0);
    
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed: ${negativeNumbers.join(",")}`);
    }

    if (processedInput === '') return 0;
    
    return numbersArray.reduce((sum, num) => sum + num, 0);
}


const findCustomDeli = (processedInput:string) => {
    let newDeli = ",";
    if (processedInput.startsWith("//")) {
        const delimiterEndIndex = processedInput.indexOf("\n"); 
        if (delimiterEndIndex !== -1) {
            newDeli = processedInput.substring(2, delimiterEndIndex);  // Extract custom delimiter
            processedInput = processedInput.substring(delimiterEndIndex + 1); 
        }
    }
    return {newDeli, processedInput}
}