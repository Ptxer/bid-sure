import { Controller } from '@hotwired/stimulus';

// Connects to data-controller="theme"
export default class extends Controller {
  connect() {
    // TODO: Default theme
    // this.element.classList.toggle('dark');
  }

  toggle() {
    this.element.classList.toggle('dark');
  }
}
