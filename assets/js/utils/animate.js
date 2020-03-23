class SliderEvent {
    // On definit nos variables de classes(proprietes)
    slideParentElt = document.querySelector('.slides')
    slideElts = document.querySelectorAll('.slide')
    moving = false
    initPosit = null
    currentPosit = null

    constructor(){
        this.slideParentElt.addEventListener('pointerdown', this.handlePointerDown)
        this.slideParentElt.addEventListener('pointermove',this.handlePointerMove)
        this.slideParentElt.addEventListener('pointerup',this.handlePointerUp)
    }

    handlePointerDown = (event) =>{
        this.initPosit = event.pageX
        this.moving = true
    }

    handlePointerMove = (event) => {
        if (this.moving) {
            this.currentPosit = event.pageX
        }
    }

    handlePointerUp = event =>{
        const difference = this.currentPosit - this.initPosit
        if (difference < 0) {
            this.slideElts.forEach(slideItem =>{
                slideItem.style.transform = `translateX(-100vw)`
            })
        } else {
            this.slideElts.forEach(slideItem =>{
                slideItem.style.transform = `translateX(0)`
            })
        }
        this.moving = false
    }

}

export {SliderEvent}