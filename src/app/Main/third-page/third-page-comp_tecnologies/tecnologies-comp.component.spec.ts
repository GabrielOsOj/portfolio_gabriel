import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiesCompComponent } from './tecnologies-comp.component';

describe('TecnologiesCompComponent', () => {
  let component: TecnologiesCompComponent;
  let fixture: ComponentFixture<TecnologiesCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnologiesCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiesCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
