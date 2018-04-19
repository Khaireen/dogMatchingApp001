import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesGalleryViewComponent } from './favourites-gallery-view.component';

describe('FavouritesGalleryViewComponent', () => {
  let component: FavouritesGalleryViewComponent;
  let fixture: ComponentFixture<FavouritesGalleryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritesGalleryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesGalleryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
