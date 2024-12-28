import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLankComponent } from './nav-lank.component';

describe('NavLankComponent', () => {
  let component: NavLankComponent;
  let fixture: ComponentFixture<NavLankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavLankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavLankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
