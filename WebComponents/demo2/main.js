class SearchInput extends HTMLElement {
    constructor() {
        super();
        this.state = { count:0 };
        // 创建一个 shadow root
        let shadow = this.attachShadow({mode: 'open'});

        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('class', 'input-value');

        const button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Search');

        const text = document.createElement('p');

        // 创建一些 CSS，并应用到 shadow dom上
        let style = document.createElement('style');
        style.textContent=".input-vlaue{margin:5px; color:red;}";

        shadow.append(input);
        shadow.append(button);
        shadow.append(text);
        shadow.append(style);

        button.addEventListener('click', e => {
            this.state.count++;
            text.textContent = `按钮被点击了${this.state.count}次。`
        });
    }

    connectedCallback () {
        const defaultValue = this.getAttribute('defaultValue');
        const input = this.shadowRoot.querySelector('.input-value');
        input.value = defaultValue;
    }
}

// declare var customElements: CustomElementRegistry;
customElements.define('search-input', SearchInput);