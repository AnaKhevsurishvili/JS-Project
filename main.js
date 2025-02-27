let allRooms = document.querySelector(".allRooms")


fetch("https://hotelbooking.stepprojects.ge/api/Rooms/GetAll")
.then(res => res.json())
.then(data => {
    console.log(data);
    data.forEach( item => allRooms.innerHTML += cardCode(item) )
})


function cardCode(item) {
    return `<div class="card" style="width: 18rem;">
    <img src="${item.images[0].source}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a onclick="gotoDetails(${item.id})" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
}


function gotoDetails(id)  {
    sessionStorage.setItem("roomId", id)
    window.location.href = "./diteal.html"
}  

