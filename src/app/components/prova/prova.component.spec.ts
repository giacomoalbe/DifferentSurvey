import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaComponent } from './prova.component';

describe('ProvaComponent', () => {
  let component: ProvaComponent;
  let fixture: ComponentFixture<ProvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
