//
class Slider extends HTMLElement {
  connectedCallback() {
    alert('hi from Slider');
  }
}

if (!customElements.get('wcia-slider')) {
  customElements.define('wcia-slider', Slider);
}