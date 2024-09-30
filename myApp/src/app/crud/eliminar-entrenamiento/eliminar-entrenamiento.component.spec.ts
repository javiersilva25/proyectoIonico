import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EliminarEntrenamientoComponent } from './eliminar-entrenamiento.component';

describe('EliminarEntrenamientoComponent', () => {
  let component: EliminarEntrenamientoComponent;
  let fixture: ComponentFixture<EliminarEntrenamientoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarEntrenamientoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarEntrenamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
