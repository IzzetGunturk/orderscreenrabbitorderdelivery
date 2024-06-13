import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupordersrestaurantComponent } from './pickupordersrestaurant.component';

describe('PickupordersrestaurantComponent', () => {
  let component: PickupordersrestaurantComponent;
  let fixture: ComponentFixture<PickupordersrestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PickupordersrestaurantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickupordersrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
