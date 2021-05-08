import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlazmaComponent } from './plazma.component';

describe('PlazmaComponent', () => {
  let component: PlazmaComponent;
  let fixture: ComponentFixture<PlazmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlazmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlazmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
