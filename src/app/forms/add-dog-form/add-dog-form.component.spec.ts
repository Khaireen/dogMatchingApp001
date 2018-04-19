import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDogFormComponent } from './add-dog-form.component';

describe('AddDogFormComponent', () => {
  let component: AddDogFormComponent;
  let fixture: ComponentFixture<AddDogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
