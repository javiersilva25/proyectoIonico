import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { ServicioService } from '../servicio.service';
import { NativeAudio } from '@capacitor-community/native-audio';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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

  // Prueba de la función `validarContrasena` cuando la contraseña es incorrecta
  it('should show alert when password is incorrect', async () => {
    spyOn(component, 'presentAlert');

    component.login.usuario = 'test';
    component.login.password = '4321';

    spyOn(component, 'validarContrasena').and.returnValue(Promise.resolve(false));
    component.validarLogin();

    expect(component.presentAlert).toHaveBeenCalledWith('Error al validar el usuario');
  });

  // Prueba para la redirección a "reestablecer contraseña"
  it('should navigate to "reestcontra" when redireccionReestablecer is called', () => {
    component.redireccionReestablecer();
    expect(router.navigate).toHaveBeenCalledWith(['reestcontra']);
  });

  // Prueba para la redirección a "crear cuenta"
  it('should navigate to "crearcuenta" when redireccionCrearCuenta is called', () => {
    component.redireccionCrearCuenta();
    expect(router.navigate).toHaveBeenCalledWith(['crearcuenta']);
  });

  // Prueba de la alerta de error
  it('should present alert with error message', async () => {
    spyOn(alertController, 'create').and.returnValue(Promise.resolve({ present: () => {} } as any));

    await component.presentAlert('Error de ejemplo');

    expect(alertController.create).toHaveBeenCalled();
  });

  // Prueba para la animación de carga (loading UI)
  it('should create and present loading UI', async () => {
    spyOn(loadingController, 'create').and.returnValue(Promise.resolve({ present: () => {} } as any));

    const loading = await component.loadingUI();
    expect(loadingController.create).toHaveBeenCalled();
  });

  // Prueba para la función `onInput`
  it('should update inputModel with numeric value only', () => {
    const event = {
      target: { value: '123abc4' }
    } as any;

    component.onInput(event);

    expect(component.inputModel).toBe('1234');
  });

  // Simulación de error en la obtención de usuario
  it('should handle error and show alert when getUsuarioNombre fails', async () => {

    const result = await component.validarContrasena();

    expect(component.presentAlert).toHaveBeenCalledWith('Error al validar el usuario');
    expect(result).toBeFalse();
  });

});

