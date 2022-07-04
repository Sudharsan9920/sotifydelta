import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsongspgComponent } from './addsongspg.component';

describe('AddsongspgComponent', () => {
  let component: AddsongspgComponent;
  let fixture: ComponentFixture<AddsongspgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsongspgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsongspgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
