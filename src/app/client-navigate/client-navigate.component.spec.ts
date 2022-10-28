import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNavigateComponent } from './client-navigate.component';

describe('ClientNavigateComponent', () => {
  let component: ClientNavigateComponent;
  let fixture: ComponentFixture<ClientNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
