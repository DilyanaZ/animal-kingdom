import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperSignupComponent } from './wrapper-signup.component';

describe('WrapperSignupComponent', () => {
  let component: WrapperSignupComponent;
  let fixture: ComponentFixture<WrapperSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapperSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
