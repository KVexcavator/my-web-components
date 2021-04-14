//
class Slider extends HTMLElement {
  connectedCallback() {
    // add murkup
    this.innerHTML = '<div class="bg-overlay"></div><div class="thumb"></div>';    
  }
}

if (!customElements.get('wcia-slider')) {
  customElements.define('wcia-slider', Slider);
}