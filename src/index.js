import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['tabs', 'panels']
  static values = { currentIndex: Number }
  static classes = ['active', 'hidden']

  connect() {
    this.currentIndexValueChanged(this.currentIndexValue)
  }

  change(e) {
    const index = this.tabsTargets.indexOf(e.target)
    this.currentIndexValue = index
  }

  currentIndexValueChanged() {
    this.showPanel(this.currentIndexValue)
    for(let i = 0; i < this.panelsTargets.length; i++) {
      if(i !== this.currentIndexValue) {
        this.hidePanel(i);
      }
    }
  }

  showPanel(index) {
    if(this.hasActiveClass) {
      this.tabsTargets[index].classList.add(this.activeClass)
    } else {
      this.tabsTargets[index].classList.add('active')
    }

    if(this.hasHiddenClass) {
      this.panelsTargets[index].classList.remove(this.hiddenClass)
    } else {
      this.panelsTargets[index].style.display = "block"
    }
  }

  hidePanel(index) {
    if(this.hasActiveClass) {
      this.tabsTargets[index].classList.remove(this.activeClass)
    } else {
      this.tabsTargets[index].classList.remove('active')
    }

    if(this.hasHiddenClass) {
      this.panelsTargets[index].classList.add(this.hiddenClass)
    } else {
      this.panelsTargets[index].style.display = "none"
    }
  }
}