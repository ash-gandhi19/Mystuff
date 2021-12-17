

const url="https://61b9ab5e38f69a0017ce61d3.mockapi.io/people";

function display_data(url,callback){

        var request=new XMLHttpRequest();
        request.open('GET',url,true);
        request.onload=()=>{
        var data= request.responseText;
        callback(data);
        }
        request.send();
}

function tableformat(data){

    var newdd =data;
  console.log(newdd[0].first_name);
 
    /*var datatoprint="";
for(var i=0;i<10;i++){
 
   
    datatoprint += "<tr>";
    datatoprint += "<td>"+ data[i].first_name + "</td>";
    datatoprint += "<td></td>";
    datatoprint += "<td></td>";
    datatoprint += "<td></td>";
    datatoprint += "<td></td>";
    datatoprint += "<td></td>";
    datatoprint += "<tr/>";
 }

//console.log(datatoprint);
   document.getElementById('showData').innerHTML=datatoprint;*/
}

display_data(url,tableformat);