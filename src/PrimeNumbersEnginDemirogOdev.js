
function primeNumber(isPrime){
    for(let i = 2; i <= 1000; i++)
        if(isPrime[i] % i != 0){
            console.log(isPrime[i])
        }
    }
primeNumber(1000)












