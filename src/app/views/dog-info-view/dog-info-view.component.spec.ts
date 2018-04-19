import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogInfoViewComponent } from './dog-info-view.component';

describe('DogInfoViewComponent', () => {
  let component: DogInfoViewComponent;
  let fixture: ComponentFixture<DogInfoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogInfoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
