import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { ServicioService } from '../servicio.service';
import { NativeAudio } from '@capacitor-community/native-audio';
import { of, throwError } from 'rxjs';

// Mock de los servicios
class MockAuthService {
  storeToken = jasmine.createSpy('storeToken');
  isAdmin = jasmine.createSpy('isAdmin').and.returnValue(false);
}

class MockServicioService {
  getUsuarioNombre = jasmine.createSpy('getUsuarioNombre').and.returnValue(of([{ password: btoa('12345'), rol: 'usuario' }]));
}

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let authService: AuthService;
  let servicioService: ServicioService;
  let router: Router;
  let alertController: AlertController;
  let loadingController: LoadingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: ServicioService, useClass: MockServicioService },
        { provide: Router, useClass: MockRouter },
        AlertController,
        LoadingController,
      ]
    });

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    servicioService = TestBed.inject(ServicioService);
    router = TestBed.inject(Router);
    alertController = TestBed.inject(AlertController);
    loadingController = TestBed.inject(LoadingController);

    fixture.detectChanges();
  });

  // Prueba si el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Prueba para la función `validarLogin`
  it('should call storeToken and navigate on successful login', async () => {
    component.login.usuario = 'usuarioTest';
    component.login.password = '12345';

    // Mock de los servicios
    spyOn(component, 'validarContrasena').and.returnValue(Promise.resolve(true));
    spyOn(component, 'validarRol').and.returnValue(Promise.resolve());

    // Simula la llamada a `validarLogin`
    await component.validarLogin();

    expect(authService.storeToken).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['home/mi-perfil']);
  });

  // Prueba de la función `validarContrasena` cuando la contraseña es incorrecta
  it('should show alert when password is incorrect', async () => {
    component.login.usuario = 'usuarioTest';
    component.login.password = 'wrongPassword';

    // Simulamos el comportamiento del servicio
    spyOn(component, 'presentAlert').and.callThrough();
    spyOn(component, 'validarContrasena').and.returnValue(Promise.resolve(false));

    await component.validarLogin();

    expect(component.presentAlert).toHaveBeenCalledWith('Contraseña incorrecta');
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
      target: { value: '123abc456' }
    } as any;

    component.onInput(event);

    expect(component.inputModel).toBe('123456');
  });

  // Simulación de error en la obtención de usuario
  it('should handle error and show alert when getUsuarioNombre fails', async () => {
    spyOn(servicioService, 'getUsuarioNombre').and.returnValue(throwError('Error'));

    const result = await component.validarContrasena();

    expect(component.presentAlert).toHaveBeenCalledWith('Error al validar el usuario');
    expect(result).toBeFalse();
  });

});

