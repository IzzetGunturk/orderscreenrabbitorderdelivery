import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdershistoryComponent } from './ordershistory.component';

describe('OrdershistoryComponent', () => {
  let component: OrdershistoryComponent;
  let fixture: ComponentFixture<OrdershistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdershistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdershistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
