import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavbarComponent } from './navbar.component';

describe('AppNavbarComponent', () => {
  let component: AppNavbarComponent;
  let fixture: ComponentFixture<AppNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
