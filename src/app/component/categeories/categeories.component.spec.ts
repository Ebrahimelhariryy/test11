import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategeoriesComponent } from './categeories.component';

describe('CategeoriesComponent', () => {
  let component: CategeoriesComponent;
  let fixture: ComponentFixture<CategeoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategeoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategeoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
