const loadSport =(search)=>{
    const url=(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySport(data.player))
}
 const displaySport =(sports)=>{
    const bodyELement = document.getElementById('allElement');
    bodyELement.textContent="";
   sports.forEach(element => {
     console.log(element)
   const innerDiv = document.createElement('div');
   innerDiv.classList.add('col');
   innerDiv.innerHTML=`

                 <div class="card">
                 <img src="${element.strThumb ? element.strThumb : 'https://i.ibb.co/Fqkhn5m/Screenshot-2018-12-16-at-21-06-29.png'}" class="card-img-top" alt="...">
                 <div class="card-body">
                 <h5 class="card-title">${element.strPlayer}</h5>
                 <p class="card-title"> Position:${element.strPosition}</p>
                 <p class="card-title">Gender: ${element.strGender ? 'Male' :'female'}</p>
                 <p class="card-text py-3">${element.strDescriptionEN. slice(0, 200)}</p>
                 </div>
                </div>

   `;
   bodyELement.appendChild(innerDiv)
   });
 }

const serachBtn =()=>{
    const inputFeild = document.getElementById('inputfiled');
    const inputValue = inputFeild.value;
    inputFeild.value="";
    loadSport(inputValue);
    
}

