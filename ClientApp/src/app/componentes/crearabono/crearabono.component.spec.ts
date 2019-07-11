import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearabonoComponent } from './crearabono.component';

describe('CrearabonoComponent', () => {
  let component: CrearabonoComponent;
  let fixture: ComponentFixture<CrearabonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearabonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearabonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
