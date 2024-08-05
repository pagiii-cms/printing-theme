import { Controller } from '@hotwired/stimulus'; 
export default class extends Controller {
  static targets = ["bar"]
  connect() {    
    console.log('submenu connected')
  }

  showSubmenu() {
    this.barTarget.classList.remove("hidden")    
  }

  hideSubmenu() {
    this.barTarget.classList.add("hidden")
  }

  toggleSubmenu(e) {
    e.preventDefault()    
    
    if (this.barTarget.classList.contains('hidden')){      
      this.showSubmenu()
    }else{
      this.hideSubmenu()
    }
  }
}
