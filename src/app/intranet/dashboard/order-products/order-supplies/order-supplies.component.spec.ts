import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSuppliesComponent } from './order-supplies.component';

describe('ActualizarPathComponent', () => {
  let component: OrderSuppliesComponent;
  let fixture: ComponentFixture<OrderSuppliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSuppliesComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
