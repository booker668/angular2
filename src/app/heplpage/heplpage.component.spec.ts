import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeplpageComponent } from './heplpage.component';

describe('HeplpageComponent', () => {
  let component: HeplpageComponent;
  let fixture: ComponentFixture<HeplpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeplpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeplpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
