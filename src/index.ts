export function calculateStringSum(input: string): number {
    let delimiter = ",";                                    
    const sanitizedInput = input.replace(/[^\S\n]+/g, "");
    let processedInput = sanitizedInput;
    processedInput = processedInput.replace(/\n/g, delimiter);
    const numberStrings: string[] = processedInput.split(delimiter); 
    const numbersArray: number[] = numberStrings.map(str => +str);
    if(processedInput === '') return 0;
 
    return numbersArray.reduce((sum, num) => sum + num, 0);


}