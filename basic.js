// let a=30;
//  //b=40;

// b=60;
// console.log(a);
// console.log(b);

//copy by value
var arr1=[3,4,5,6,7];

var arr2 =arr1; //coping the addres of aaray

arr2[2]=100;

console.log(arr1);
console.log(arr2);

const url = 'https://restcountries.com/v3.1/all';

function api_data(url){
    let request =  new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload=()=>{
        let data = request.responseText;
        document.getElementById('data').innerHTML=JSON.stringify(data);
        console.log(data);
    }
    request.send();
}

api_data(url);




