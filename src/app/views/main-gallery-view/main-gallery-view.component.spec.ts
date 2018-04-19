import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGalleryViewComponent } from './main-gallery-view.component';

describe('MainGalleryViewComponent', () => {
  let component: MainGalleryViewComponent;
  let fixture: ComponentFixture<MainGalleryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainGalleryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGalleryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
