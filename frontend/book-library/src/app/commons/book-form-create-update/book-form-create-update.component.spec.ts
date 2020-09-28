import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormCreateUpdateComponent } from './book-form-create-update.component';

describe('BookFormCreateUpdateComponent', () => {
  let component: BookFormCreateUpdateComponent;
  let fixture: ComponentFixture<BookFormCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFormCreateUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
