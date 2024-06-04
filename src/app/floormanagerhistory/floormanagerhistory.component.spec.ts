import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloormanagerhistoryComponent } from './floormanagerhistory.component';

describe('FloormanagerhistoryComponent', () => {
  let component: FloormanagerhistoryComponent;
  let fixture: ComponentFixture<FloormanagerhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FloormanagerhistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloormanagerhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
