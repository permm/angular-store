import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloProductComponent } from './hello-product.component';

describe('HelloProductComponent', () => {
  let component: HelloProductComponent;
  let fixture: ComponentFixture<HelloProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelloProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelloProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
