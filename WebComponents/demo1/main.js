class ShowText extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const text = this.getAttribute('text');
        this.outerHTML = `<div style="color: red;">文本为: <label>${text}</label></div>`;

    }
}

customElements.define('show-text', ShowText);
