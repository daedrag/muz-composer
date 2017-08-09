import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';

import Vex from "vexflow/releases/vexflow-debug";

@Component({
  selector: 'page-composer',
  templateUrl: 'composer.html',
})
export class ComposerPage {
  @ViewChild('title') title: ElementRef;

  sheetWidth: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    this.sheetWidth = this.title.nativeElement.offsetWidth;
    this.renderSheet();
  }

  renderSheet() {

    var vf = new Vex.Flow.Factory({
      renderer: {
        elementId: 'my-music-sheet',
        width: this.sheetWidth,
        height: 500
      }
    });

    var score = vf.EasyScore();
    var system = vf.System();

    system.addStave({
      voices: [score.voice(score.notes('C#5/q, B4, A4, G#4'))]
    }).addClef('treble').addTimeSignature('4/4');

    system.addStave({
      voices: [
        score.voice(score.notes('C#3/q, B2, A2/8, B2, C#3, D3', { clef: 'bass', stem: 'up' })),
        score.voice(score.notes('C#2/h, C#2', { clef: 'bass', stem: 'down' }))
      ]
    }).addClef('bass').addTimeSignature('4/4');

    vf.draw();
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Options',
      buttons: [
        {
          text: 'View raw text',
          handler: () => {
            // TODO
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
