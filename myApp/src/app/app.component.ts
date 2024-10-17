import { Component } from '@angular/core';
import {NativeAudio} from '@capacitor-community/native-audio'
import { InAppReview } from '@capacitor-community/in-app-review';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.preloadAudio();
  }

  async preloadAudio(){
    await NativeAudio.preload({
      assetId: "error",
      assetPath: "error.mp3",
      audioChannelNum: 1,
      isUrl: false
    });  
    
    NativeAudio.setVolume({
    assetId: 'error',
    volume: 0.1,
  });
  }

  async requestReview() {
    try {
      await InAppReview.requestReview();
      console.log('Solicitud de reseña enviada.');
    } catch (error) {
      console.error('Error al solicitar la reseña:', error);
    }
  }
  

}
