import { Controller } from '@hotwired/stimulus';

// Connects to data-controller="dropdown"
export default class extends Controller {
  static targets = ['bucket'];
  static values = {toggleState: Boolean};

  initialize() {
    this.bucketTarget.hidden = true;
  }

  connect() {
  }

  toggle(event) {
    event.preventDefault()
    this.bucketTarget.hidden = !this.bucketTarget.hidden;
  }
}
