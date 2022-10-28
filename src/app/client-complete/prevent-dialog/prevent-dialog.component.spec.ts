import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventDialogComponent } from './prevent-dialog.component';

describe('OrdersCategoryComponent', () => {
  let component: PreventDialogComponent;
  let fixture: ComponentFixture<PreventDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventDialogComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
