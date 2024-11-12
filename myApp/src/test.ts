import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Inicializa el entorno de pruebas de Angular
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// **Solo importa las pruebas del componente LoginPage**
import './app/login/login.page.spec';  // Solo importa las pruebas de LoginPage

// Si tienes otros archivos de pruebas, **déjalos comentados** para evitar que se ejecuten:
// import './app/otro-componente/otro-componente.spec'; // Descomenta si quieres probar otro componente
// import './app/servicios/servicio.spec';            // Descomenta si quieres probar un servicio, etc.
