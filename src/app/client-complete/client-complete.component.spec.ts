import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCompleteComponent } from './client-complete.component';

describe('ClientCompleteComponent', () => {
  let component: ClientCompleteComponent;
  let fixture: ComponentFixture<ClientCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
