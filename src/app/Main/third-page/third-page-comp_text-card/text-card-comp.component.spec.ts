import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCardCompComponent } from './text-card-comp.component';

describe('TextCardCompComponent', () => {
  let component: TextCardCompComponent;
  let fixture: ComponentFixture<TextCardCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextCardCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextCardCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
