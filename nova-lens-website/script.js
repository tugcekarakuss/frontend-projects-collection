const cards=document.querySelector(".product-list")
function moveSlider(direction){
    if(direction==='next'){
        const firstCard =cards.firstElementChild
        cards.appendChild(firstCard)
    }
    else if(direction==='prev'){
        const lastCard = cards.lastElementChild
        cards.prepend(lastCard)
    }

}
