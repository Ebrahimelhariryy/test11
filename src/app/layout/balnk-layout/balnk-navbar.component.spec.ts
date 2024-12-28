import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalnkNavbarComponent } from './balnk-navbar.component';

describe('BalnkNavbarComponent', () => {
  let component: BalnkNavbarComponent;
  let fixture: ComponentFixture<BalnkNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalnkNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BalnkNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
