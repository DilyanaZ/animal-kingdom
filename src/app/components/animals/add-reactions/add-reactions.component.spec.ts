import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReactionsComponent } from './add-reactions.component';

describe('AddReactionsComponent', () => {
  let component: AddReactionsComponent;
  let fixture: ComponentFixture<AddReactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
