import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ComposerPage } from "../composer/composer";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  goToComposer() {
    this.navCtrl.setRoot(ComposerPage);
  }

  goToLibrary() {
    this.showToast('bottom', 'This feature is not ready yet!');
  }

  showToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

}
