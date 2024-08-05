import { Controller } from '@hotwired/stimulus'; 
export default class extends Controller {
  static targets = ["menu", "open", "close"]
  connect() {    
    console.log('main-menu connected')
  }

  show(e) {
    console.log('show')
    this.menuTarget.classList.remove('hidden')
    this.openTarget.classList.add('hidden')
    this.closeTarget.classList.remove('hidden')
  }

  hide(e) {
    console.log('hide')
    this.menuTarget.classList.add('hidden')
    this.openTarget.classList.remove('hidden')
    this.closeTarget.classList.add('hidden')
  }
  
}
