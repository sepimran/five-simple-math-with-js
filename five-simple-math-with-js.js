// this function take a number as a input and then multiplication with 3 then add 10 after then divided by 2 and then minus 5 and finally return the number 

function mindGame(number){
    if(typeof number === 'number' ){
        let sum = (number * 3 + 10) / 2 -5;
        return sum;

    }else{
        return "Input Should be a Number";
    }

    
}

const result = mindGame(5);
console.log(result);


// This function take a string value as input and then it will check then sting even or odd based on there length 

function evenOdd(text){
    const str = text.length;
    if(typeof text === 'string'){
        if(str % 2 == 0 ){
            return "even";
        }else{
            return "odd";
        }
    }else{
        return "Input Should be a text";
    }
}


const result2 = evenOdd("Imran");
console.log(result2);


// this function take input as number and difference with 7 if the result is smaller than 7 the result will return and if it will getter than 7 the input number will be multiplicate with 2 and return it 


function isLGSeven(number){
    const isCheckSeven = number - 7;
    if(typeof number === 'number'){
        if(isCheckSeven < 7 ){
            return isCheckSeven;
        }else{
            return number * 2;
        }
    }else{
        return "Input Should be a Number";
    }
    
}

const result3 = isLGSeven(66);
console.log(result3);


// This function take input numbers as array and check the bad data form input , the bad data is less tha 0 . and return will be be how many bad data in input

function findingBadData(numbers){

    let checkIsArray = Array.isArray(numbers);

    if(  checkIsArray == true){
        const badData =[];

        for(let i=0; i< numbers.length ; i++){
            let index = i;
            let element = numbers[index];

            if(element < 0){
                badData.push(element);
            }
        
        }

        return badData.length;
    }else{
        return "Input Should only Array";
    }

    
}

const result4 = findingBadData([66,575,59,5875,-8,-58,-85]);
console.log(result4);



// This function takes 3 numbers as a parameter and multiplicate respectively 21 , 32 and 43 . And add total and return the value .If total number getter than 1000*2 then the resutl will be minus form 2000 and return the value   

function gemsToDiamond(firstFriendGemsNum, secondFriendGemsNum, thirdFriendGemsNum){
   
    totalDiamond = firstFriendGemsNum * 21 + secondFriendGemsNum * 32 + thirdFriendGemsNum * 43;

    if(typeof firstFriendGemsNum === 'number' && typeof secondFriendGemsNum === 'number' && typeof thirdFriendGemsNum === 'number'){
        if(totalDiamond >= 1000*2){
            getDiamond = totalDiamond -2000;
            return getDiamond ;
        }else{
            return totalDiamond;
        }
    
    }else{
        return "Input Should be a Numbers";
    }
    
    

}


const result5 = gemsToDiamond(4,4,1);
console.log(result5);