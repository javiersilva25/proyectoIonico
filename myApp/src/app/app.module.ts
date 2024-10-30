import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MiperfilComponent } from './miperfil/miperfil.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';  
import { HttpClientModule } from '@angular/common/http';
import { MisentrenosComponent } from './misentrenos/misentrenos.component';
@NgModule({
  declarations: [
    AppComponent,
    MiperfilComponent,
    MisentrenosComponent
  ],
  imports: [
    IonicModule.forRoot({ innerHTMLTemplatesEnabled: true }),
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule {}

