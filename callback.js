/*var message = document.getElementById('showmsg');

setTimeout(()=>{
    message.innerHTML = 10;
    setTimeout(()=>{
        message.innerHTML = 9;
        setTimeout(()=>{
            message.innerHTML = 8;
            setTimeout(()=>{
                message.innerHTML = 7;
                setTimeout(()=>{
                    message.innerHTML = 6;
                    setTimeout(()=>{
                        message.innerHTML = 5;
                        setTimeout(()=>{
                            message.innerHTML = 4;
                            setTimeout(()=>{
                                message.innerHTML = 3;
                                setTimeout(()=>{
                                    message.innerHTML = 2;
                                    setTimeout(()=>{
                                        message.innerHTML = 1;
                                            setTimeout(()=>{
                                                message.innerHTML = 'Happy Independence Day';
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
},1000)*/


//todays task

function My_Function(number1, callback) {
    console.log("checking number is prime/composite and factorial");
    callback(number1);
}
function prime(data) {


    var i = 1;
    var count = 0;

    for (i = 1; i <= data; i++) {
        if (data % i === 0)
            count++;
    }
    if (count == 2) {
        console.log(data + " is a prime number");
        factorial(data);
    }
    else {
        console.log(data + " is not a prime number");
        composite(data, factorial);

    }


}
function composite(comnum, factorial) {

    var i;
    var count = 0;

    for (i = 1; i <= comnum; i++) {
        if (comnum % i === 0)
            count++;
    }
    if (count > 2)
        console.log(comnum + " is a composite number");
    else
        console.log(comnum + " is a not composite number");
    factorial(comnum);

}
function factorial(data) {
    if (data < 0) {
        console.log('negative number does not exist.');
    }
    // if number is 0
    else if (data === 0) {
        console.log(`The factorial of ${data} is 1.`);
    }
    // if number is positive
    else {
        let fact = 1;
        for (i = 1; i <= data; i++) {
            fact *= i;
        }
        console.log(`The factorial of ${data} is ${fact}.`);
    }
}

My_Function(44, prime);

