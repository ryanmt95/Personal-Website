import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TribalistComponent } from './tribalist.component';

describe('TribalistComponent', () => {
  let component: TribalistComponent;
  let fixture: ComponentFixture<TribalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TribalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TribalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
