export function calculateStringSum(input: string): number {
    let delimiter = ",";  // Default delimiter
    const sanitizedInput = input.replace(/[^\S\n]+/g, "");  // Remove all non-whitespace characters except newlines
    let processedInput = sanitizedInput;

    // Check for custom delimiter at the start of the string
    if (processedInput.startsWith("//")) {
        const delimiterEndIndex = processedInput.indexOf("\n"); 
        if (delimiterEndIndex !== -1) {
            delimiter = processedInput.substring(2, delimiterEndIndex);  // Extract custom delimiter
            processedInput = processedInput.substring(delimiterEndIndex + 1); 
        }
    }

    // Replace all newline characters with the current delimiter
    processedInput = processedInput.replace(/\n/g, delimiter);
    
    const numberStrings: string[] = processedInput.split(delimiter); 
    const numbersArray: number[] = numberStrings.map(str => +str);
    const negativeNumbers = numbersArray.filter(num => num < 0);
    
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed: ${negativeNumbers.join(",")}`);
    }

    if (processedInput === '') return 0;
    
    return numbersArray.reduce((sum, num) => sum + num, 0);
}
