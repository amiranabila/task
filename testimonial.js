class Testimonial {
    constructor(author, review, image) {
        this.author = author
        this.review = review
        this.image = image
    }

    html() {
        return `
            <div class="testimonial">
                <img src="${this.image}" class="testimonial img" />
                <p class="quote">"${this.review}"</p>
                <p class="author">- ${this.author}</p>
            </div>
        `
    }
}


const testimonial1 = new Testimonial("Zakiyyah", "Never give up", "img/dumbways.png")
const testimonial2 = new Testimonial("Nabila", "Bisa bisa dan pasti bisa", "img/dumbways.png")
const testimonial3 = new Testimonial("Amira", "Practice the best teacher", "img/dumbways.png")

const testimonials = [testimonial1, testimonial2, testimonial3]

let testimonialHTML = ``
for(let index = 0; index < testimonials.length; index++) {
    testimonialHTML += testimonials[index].html()
}

document.getElementById("testimonials").innerHTML = testimonialHTML