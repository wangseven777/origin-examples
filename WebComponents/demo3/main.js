const str = `
<style>
  p {
    color: white;
    background-color: #909090;
    padding: 5px;
    border: 1px solid silver;
  }
</style>
<p class="test"><slot name="my-text">默认文本</slot></p>

`;

customElements.define('my-paragraph',
  class extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({mode: 'open'});

      //const template = document.getElementById('my-paragraph');
      // const templateContent = template.content;
      const template = document.createElement('template');
      template.innerHTML = str;
      const templateContent = template.content;

      shadow.appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);