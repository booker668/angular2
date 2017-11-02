import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyqusetionnaireComponent } from './myqusetionnaire.component';

describe('MyqusetionnaireComponent', () => {
  let component: MyqusetionnaireComponent;
  let fixture: ComponentFixture<MyqusetionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyqusetionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyqusetionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
