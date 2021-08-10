import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title> Blank </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-button (click)="openModal()">open modal</ion-button>
    </ion-content>
  `,
})
export class HomePage {
  constructor(private modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: ImgViewerComponent,
    });

    modal.present();
  }
}

@Component({
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Try to close it</ion-title>
        <ion-buttons slot="primary">
          <ion-button (click)="close()">
            <ion-icon slot="icon-only" name="close"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true" class="content">
      <ion-slides [options]="sliderOpts">
        <ion-slide>
          <div class="swiper-zoom-container">
            <img [src]="imageUrl" />
          </div>
        </ion-slide>
      </ion-slides>
    </ion-content>
  `,
  styles: [
    `
      ion-slides {
        height: 100%;
      }
    `,
  ],
})
export class ImgViewerComponent {
  imageUrl =
    'https://blog.soat.fr/wp-content/uploads/2017/11/ionic-logo-landscape-600x199.png';

  sliderOpts = {
    zoom: {
      maxRatio: 5,
    },
  };

  constructor(private modalController: ModalController) {}

  close() {
    this.modalController.dismiss();
  }
}
