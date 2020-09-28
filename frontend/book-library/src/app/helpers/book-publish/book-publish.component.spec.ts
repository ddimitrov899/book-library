import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPublishComponent } from './book-publish.component';

describe('BookPublishComponent', () => {
  let component: BookPublishComponent;
  let fixture: ComponentFixture<BookPublishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookPublishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
