import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfrComponent } from './cfr.component';

describe('CfrComponent', () => {
  let component: CfrComponent;
  let fixture: ComponentFixture<CfrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CfrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CfrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
