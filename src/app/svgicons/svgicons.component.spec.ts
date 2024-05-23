import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgiconsComponent } from './svgicons.component';

describe('SvgiconsComponent', () => {
  let component: SvgiconsComponent;
  let fixture: ComponentFixture<SvgiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgiconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
