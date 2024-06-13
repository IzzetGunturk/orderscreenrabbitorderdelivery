import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupordersdeliveryComponent } from './pickupordersdelivery.component';

describe('PickupordersdeliveryComponent', () => {
  let component: PickupordersdeliveryComponent;
  let fixture: ComponentFixture<PickupordersdeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PickupordersdeliveryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickupordersdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
