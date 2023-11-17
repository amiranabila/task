// class Testimonial {
//     constructor(author, review, image) {
//         this.author = author
//         this.review = review
//         this.image = image
//     }

//     html() {
//         return `
//             <div class="testimonial">
//                 <img src="${this.image}" class="testimonial img" />
//                 <p class="quote">"${this.review}"</p>
//                 <p class="author">- ${this.author}</p>
//             </div>
//         `
//     }
// }


// const testimonial1 = new Testimonial("Zakiyyah", "Never give up", "img/dumbways.png")
// const testimonial2 = new Testimonial("Nabila", "Bisa bisa dan pasti bisa", "img/dumbways.png")
// const testimonial3 = new Testimonial("Amira", "Practice the best teacher", "img/dumbways.png")

// const testimonials = [testimonial1, testimonial2, testimonial3]

// let testimonialHTML = ``
// for(let index = 0; index < testimonials.length; index++) {
//     testimonialHTML += testimonials[index].html()
// }

// document.getElementById("testimonials").innerHTML = testimonialHTML
const testimonialData = [
    {
        author: "Zakiyyah",
        content: "Keren sekalihh",
        image: "img/dumbways.png",
        rating: 5
    },
    {
        author: "Nabila",
        content: "Keren ",
        image: "img/dumbways.png",
        rating: 4
    },
    {
        author: "Amira",
        content: "biasa aja",
        image: "img/dumbways.png",
        rating: 3
    },
    {
        author: "Jihan",
        content: "Kurang memuaskan",
        image: "img/dumbways.png",
        rating: 2
    },
    {
        author: "Zayd",
        content: "Apa sih ini",
        image: "img/dumbways.png",
        rating: 1
    }
   
]

let testimonialHTML = "";
testimonialData.forEach((item) =>{
    testimonialHTML +=`<div class="testimonial">
                     <img src="${item.image}" class="testimonial img" />
                     <p class="quote">"${item.content}"</p>
                     <p class="author">- ${item.author}</p>
                     <p class="rating">- ${item.rating} <i class= "fa-solid fa-star"></i></p>
                    </div>`

})
document.getElementById("testimonials").innerHTML = testimonialHTML;

function allTestimonials(){
    let testimonialHTML = ``
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

function filterTestimonials(rating){
    let testimonialHTML = ``
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