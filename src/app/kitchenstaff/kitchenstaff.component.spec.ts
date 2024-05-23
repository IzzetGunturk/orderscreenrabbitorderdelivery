import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenstaffComponent } from './kitchenstaff.component';

describe('KitchenstaffComponent', () => {
  let component: KitchenstaffComponent;
  let fixture: ComponentFixture<KitchenstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KitchenstaffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KitchenstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
