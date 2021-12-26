
document.body.innerHTML=`<div class="heading-container">
<h1>Brewrry List</h1>
</div>
<div id="mainContainer" class="main-container"></div>`;

const url="https://api.openbrewerydb.org/breweries";
const getData=async()=>{
    try{
        const data= await fetch(url);
        const brewarry=await data.json();
        mainContainer.innerHTML="";

        brewarry.forEach((brewary) => {
            displayData(brewary);
        });

    }catch(err){
        console.log(err);
    }
};

getData();

const displayData=((obj)=>{
        mainContainer.innerHTML +=`
            <div class=container>
            
                <h3 class="blue">Name: <span>${obj.name}</span></h3>
                <p>brewery_type: <span>${obj.brewery_type}</span></p>
                <p class="para blue">street: <span>${obj.street}</span></p>
                <p class="para blue">state: <span>${obj.state}</span></p>
            </div>`;
});
