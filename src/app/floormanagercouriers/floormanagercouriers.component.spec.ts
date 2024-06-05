import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloormanagercouriersComponent } from './floormanagercouriers.component';

describe('FloormanagercouriersComponent', () => {
  let component: FloormanagercouriersComponent;
  let fixture: ComponentFixture<FloormanagercouriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FloormanagercouriersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloormanagercouriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
