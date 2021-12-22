getRamens()
addNewRamen()

function getRamens () {
    fetch('http://localhost:3000/ramens')
        .then(res => res.json())
        .then(ramens => ramens.forEach(showRamens))
}

function showRamens (ramen) {
    const ramenMenu = document.getElementById('ramen-menu')
    const ramenImgs = document.createElement('img')
    ramenImgs.src = ramen.image
    ramenMenu.appendChild(ramenImgs)

    ramenImgs.addEventListener("click", () => {
        const detailImg = document.querySelector('.detail-image')
        detailImg.src = ramen.image
        detailImg.alt = ramen.name
        
        const detailName = document.querySelector('.name')
        detailName.textContent = ramen.name

        const detailRestaurant = document.querySelector('.restaurant')
        detailRestaurant.textContent = ramen.restaurant

        const ratingDisplay = document.querySelector('#rating-display')
        ratingDisplay.textContent = ramen.rating

        const commentDisplay = document.querySelector('#comment-display')
        commentDisplay.textContent = ramen.comment
    })  
}

function addNewRamen () {
    const form = document.querySelector('#new-ramen')
    form.addEventListener("submit", (e) => {
        e.preventDefault()
    const ramenMenu = document.getElementById('ramen-menu')

    const ramenImageInput = e.target.querySelector('#new-image').value
    const newImg = document.createElement('img')
    newImg.src = ramenImageInput
    ramenMenu.append(newImg)

    newImg.addEventListener("click" , () => {
        const ramenNameInput = e.target.querySelector('#new-name').value
        const detailName = document.querySelector('.name')
        detailName.textContent = ramenNameInput

        const ramenImageInput = e.target.querySelector('#new-image').value
        const detailImg = document.querySelector('.detail-image')
        detailImg.src = ramenImageInput
        detailImg.alt = ramenNameInput

        const ramenRestaurantInput = e.target.querySelector('#new-restaurant').value
        const detailRestaurant = document.querySelector('.restaurant')
        detailRestaurant.textContent = ramenRestaurantInput

        const ramenRatingInput = e.target.querySelector('#new-rating').value
        const ratingDisplay = document.querySelector('#rating-display')
        ratingDisplay.textContent = ramenRatingInput

        const ramenCommentInput = e.target.querySelector('#new-comment').value
        const commentDisplay = document.querySelector('#comment-display')
        commentDisplay.textContent = ramenCommentInput
    
    })

    
 })
    

}