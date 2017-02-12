'use strict'

module.exports = {
    getPrimes: function(num){
        if (typeof num !== "number" || Math.floor(num) !== num){
            return 'invalid input';
        }

        if (num < 0){
            return 'negative input';
        }

        if (num == 0){
            return 'cannot take 0 as input';
        }

        if (num == 1){
            return [];
        }

        if (num == 2){  
            return [2];     //we already know 2 is prime
        }

        if (num == 3){
            return [2,3];   //we know 2 and 3 are prime
        }
        
        //The concept here is that we know 2 is the only even prime number hence we only want to check odd numbers
        
        var primeNumbers = [2];
        var currentNum = 3;
        
        for(currentNum; currentNum <= num; currentNum += 2){
            var prime = true;
            var divisor = 3;
            
            while(divisor < currentNum){
                if (currentNum % divisor == 0){
                    prime = false;
                    break;
                }
                divisor += 2;
            }

            if (prime){
                primeNumbers.push(currentNum);
            }
        }
        return primeNumbers;
    }
}


