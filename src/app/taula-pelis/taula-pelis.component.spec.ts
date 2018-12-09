import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaulaPelisComponent } from './taula-pelis.component';

describe('TaulaPelisComponent', () => {
  let component: TaulaPelisComponent;
  let fixture: ComponentFixture<TaulaPelisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaulaPelisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaulaPelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
