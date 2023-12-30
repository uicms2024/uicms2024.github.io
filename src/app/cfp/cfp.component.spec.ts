import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfpComponent } from './cfp.component';

describe('CfpComponent', () => {
  let component: CfpComponent;
  let fixture: ComponentFixture<CfpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CfpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
