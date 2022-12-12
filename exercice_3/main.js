class TestComponent extends HTMLElement {
  constructor() {
    super();
    this.innerText = "test";
    this.style.color = "blue";
  }
  connectedCallback() {
    console.log("Ajouté à la page");
  }
  disconnectedCallback() {
    console.log("Retiré de la page");
  }
}

customElements.define("test-component", TestComponent);
