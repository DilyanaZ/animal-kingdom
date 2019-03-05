import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineAnimalsComponent } from './mine-animals.component';

describe('MineAnimalsComponent', () => {
  let component: MineAnimalsComponent;
  let fixture: ComponentFixture<MineAnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineAnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
