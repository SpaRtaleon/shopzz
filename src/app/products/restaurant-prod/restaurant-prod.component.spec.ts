import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantProdComponent } from './restaurant-prod.component';

describe('RestaurantProdComponent', () => {
  let component: RestaurantProdComponent;
  let fixture: ComponentFixture<RestaurantProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
