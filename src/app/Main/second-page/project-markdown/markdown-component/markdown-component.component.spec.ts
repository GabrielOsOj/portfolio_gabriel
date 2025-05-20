import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownComponentComponent } from './markdown-component.component';

describe('MarkdownComponentComponent', () => {
  let component: MarkdownComponentComponent;
  let fixture: ComponentFixture<MarkdownComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkdownComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkdownComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
