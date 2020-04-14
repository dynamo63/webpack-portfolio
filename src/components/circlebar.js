const circleProgressBarTemplate = document.getElementById('circle-bar')
const linearProgressBarTemplate = document.getElementById('linear-bar')
const contentTemplate = {
    circle: circleProgressBarTemplate.content,
    linear: linearProgressBarTemplate.content
}

class ProgressBarTag extends HTMLElement {
    constructor () {
        super()
        this.attachShadow({ mode: 'open' })
        // this.shadowRoot.appendChild(contentTemplate.cloneNode(true))
        this.name = this.getAttribute('name')
        this.percent = this.getAttribute('progress')
        this.init(this.getAttribute('type'))
    }

    connectedCallback () {
        console.log('connected')
    }

    init (type) {
        switch (type) {
        case 'circle':
            this.shadowRoot.append(contentTemplate.circle.cloneNode(true))
            this.shadowRoot.querySelector('p').textContent = this.name
            break
        case 'linear':
            this.shadowRoot.append(contentTemplate.linear.cloneNode(true))
            this.shadowRoot.querySelector('.name').textContent = this.name
            this.shadowRoot.querySelector('.percent').textContent = this.percent + '%'
            break
        default:
            this.shadowRoot.append(contentTemplate.linear.cloneNode(true))
            this.shadowRoot.querySelector('.name').textContent = this.name
            this.shadowRoot.querySelector('.percent').textContent = this.percent + '%'
            break
        }
    }
}

export { ProgressBarTag }
