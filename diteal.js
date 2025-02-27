let roomId = sessionStorage.getItem("roomId")
let h1 = document.querySelector("h1")
let img = document.querySelector("img")

fetch("https://restaurant.stepprojects.ge/api/Categories/GetAll")
.then(res2 => res2.json())
.then(data2 => {
    console.log(data2);
    data2.forEach( item => zedaXazi.innerHTML +=  `<p>${item.name}</p>` )
})

fetch(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${roomId}`)
.then( pasuxi => pasuxi.json())
.then( data => {
   
    h1.innerHTML = data.name
    img.src = data.images[0].source
} ).catch( () => h1.innerHTML = "კავშირის პრობლემა" )




function bookMyRoom(e) {
    e.preventDefault()
    
    let formData = new FormData(e.target)
    let finalForm = Object.fromEntries(formData)
    finalForm.roomID = roomId
    
    fetch("https://hotelbooking.stepprojects.ge/api/Booking", {
        method: "POST",
        headers: {
            accept: "*/*",
            'Content-Type': "application/json"
        },
        body: JSON.stringify(finalForm) 
    }).then( pasuxi => pasuxi.text() )
    .then( data => {
        console.log(data);
    } )

}

// procademi