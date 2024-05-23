import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloormanagerComponent } from './floormanager.component';

describe('FloormanagerComponent', () => {
  let component: FloormanagerComponent;
  let fixture: ComponentFixture<FloormanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FloormanagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloormanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
