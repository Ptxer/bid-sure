import { Controller } from '@hotwired/stimulus';

// Connects to data-controller="slideshow"
export default class extends Controller {
  static targets = ['slide'];
  static values = {index: {type: Number, default: 1}};

  connect() {
    this.slideCount = this.slideTargets.length;
  }

  next() {
    if (this.indexValue < this.slideCount) {
      this.indexValue++;
    }
  }

  previous() {
    if (this.indexValue > 1) {
      this.indexValue--;
    }
  }

  indexValueChanged() {
    this.showCurrentSlide();
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index !== (this.indexValue - 1);
    });
  }
}
