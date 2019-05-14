import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App.ModuleComponent } from './app.module.component';

describe('App.ModuleComponent', () => {
  let component: App.ModuleComponent;
  let fixture: ComponentFixture<App.ModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App.ModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App.ModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
