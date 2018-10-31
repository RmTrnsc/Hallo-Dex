import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyMapComponent } from './candy-map.component';

describe('CandyMapComponent', () => {
  let component: CandyMapComponent;
  let fixture: ComponentFixture<CandyMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandyMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
