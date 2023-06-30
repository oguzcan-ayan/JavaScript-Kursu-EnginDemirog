
function findPrime(...primeNumber){
    for (let i = 0; i < primeNumber.length; i++) {
        if(primeNumber[i] % i != 0){
            console.log(primeNumber[i])
        } 
    }
}
findPrime(2, 5, 8, 21, 13, 25, 31, 17, 16, 103)









