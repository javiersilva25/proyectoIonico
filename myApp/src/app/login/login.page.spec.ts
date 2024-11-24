import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { ServicioService } from '../servicio.service';
import { NativeAudio } from '@capacitor-community/native-audio';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { tick, fakeAsync } from '@angular/core/testing';

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let authService: AuthService;
  let router: Router;
  let alertController: AlertController;
  let loadingController: LoadingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [LoginPage],
      providers: [
        { provide: Router, useClass: MockRouter },
        AlertController,
        LoadingController,
      ],
    });
  
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    alertController = TestBed.inject(AlertController);
    loadingController = TestBed.inject(LoadingController);
    
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Prueba de login', async () => {
    component.login.usuario = 'test';
    component.login.password = '1234';

    component.validarLogin();

    expect(component.validarLogin).toBeTruthy();
  });

  it('Prueba Alerta con contrasena incorrecta', fakeAsync(() => {
    spyOn(component, 'presentAlert');
    spyOn(component, 'validarContrasena').and.returnValue(Promise.resolve(false));

    component.login.usuario = 'test';
    component.login.password = '4321';

    component.validarLogin();
    tick(1000);

    expect(component.presentAlert).toHaveBeenCalledWith('Error al validar el usuario');
  }));

  it('Prueba redireccion restablecer contrasena', () => {
    component.redireccionReestablecer();
    expect(router.navigate).toHaveBeenCalledWith(['reestcontra']);
  });

  it('Prueba redireccion crear cuenta', () => {
    component.redireccionCrearCuenta();
    expect(router.navigate).toHaveBeenCalledWith(['crearcuenta']);
  });

  it('Prueba alerta de error', async () => {
    spyOn(alertController, 'create').and.returnValue(Promise.resolve({ present: () => {} } as any));

    await component.presentAlert('Error de ejemplo');

    expect(alertController.create).toHaveBeenCalled();
  });

  it('Prueba de loading UI', async () => {
    spyOn(loadingController, 'create').and.returnValue(Promise.resolve({ present: () => {} } as any));

    const loading = await component.loadingUI();
    expect(loadingController.create).toHaveBeenCalled();
  });

  it('Prueba caracteres solo numericos en contrasena', () => {
    const event = {
      target: { value: '123abc4' }
    } as any;

    component.onInput(event);

    expect(component.inputModel).toBe('1234');
  });

});

