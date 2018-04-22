import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryScreenViewComponent } from './entry-screen-view.component';

describe('EntryScreenViewComponent', () => {
  let component: EntryScreenViewComponent;
  let fixture: ComponentFixture<EntryScreenViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryScreenViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryScreenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
