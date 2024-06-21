export function calculateStringSum(input: string): number {
    let delimiter = ",";                                    

    if(input === '') return 0;
    const numberStrings: string[] = input.split(delimiter); 
    const numbersArray: number[] = numberStrings.map(str => +str);

    return numbersArray.reduce((sum, num) => sum + num, 0);


}