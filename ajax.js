// penggabungan promise dan ajax
const janji = new Promise ((resolve, rejected) =>{
    const xhr = new XMLHttpRequest()
    xhr.open ('GET', 'https://api.npoint.io/3280b54dacae1e2269cd', true)
    xhr.onload = () =>{
        if (xhr.status === 200){
            // console.log( "berhasil", xhr.response)
            resolve(JSON.parse (xhr.response))
        } else{
            rejected()
        }
    }
    xhr.onerror = () =>{
        
        console.log("network error")

    }
    xhr.send()
})

function html(item){
    return `<div class="testimonial">
    <img src="${item.image}" class="testimonial img" />
    <p class="quote">"${item.content}"</p>
    <p class="author">- ${item.author}</p>
    <p class="rating">- ${item.rating} <i class= "fa-solid fa-star"></i></p>
   </div>`
}
async function allTestimonials(){
    let testimonialHTML = ``
    const testimonialData = await janji 
        testimonialData.forEach((item) =>{
        testimonialHTML +=`<div class="testimonial">
                         <img src="${item.image}" class="testimonial img" />
                         <p class="quote">"${item.content}"</p>
                         <p class="author">- ${item.author}</p>
                         <p class="rating">- ${item.rating} <i class= "fa-solid fa-star"></i></p>
                        </div>`
    
    })
    document.getElementById("testimonials").innerHTML = testimonialHTML
}
allTestimonials()

async function filterTestimonials(rating){
    let testimonialHTML = ``
    const testimonialData = await janji
    const testimonialFiltered = testimonialData.filter((item) => {
        return item.rating === rating
    })

    if (testimonialFiltered.length === 0) {
        testimonialHTML = `<h3> Data not found! </h3>`
    } else {
        testimonialFiltered.forEach((item) => {
            testimonialHTML += `<div class="testimonial">
            <img src="${item.image}" class="testimonial img" />
            <p class="quote">"${item.content}"</p>
            <p class="author">- ${item.author}</p>
            <p class="rating">- ${item.rating} <i class= "fa-solid fa-star"></i></p>
           </div>`
        })
    }

    document.getElementById("testimonials").innerHTML = testimonialHTML

}