import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyFightComponent } from './candy-fight.component';

describe('CandyFightComponent', () => {
  let component: CandyFightComponent;
  let fixture: ComponentFixture<CandyFightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandyFightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandyFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
