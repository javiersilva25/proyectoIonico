import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActualizarEntrenamientoComponent } from './actualizar-entrenamiento.component';

describe('ActualizarEntrenamientoComponent', () => {
  let component: ActualizarEntrenamientoComponent;
  let fixture: ComponentFixture<ActualizarEntrenamientoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarEntrenamientoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizarEntrenamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
