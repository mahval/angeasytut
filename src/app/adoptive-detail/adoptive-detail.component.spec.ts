import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptiveDetailComponent } from './adoptive-detail.component';

describe('AdoptiveDetailComponent', () => {
  let component: AdoptiveDetailComponent;
  let fixture: ComponentFixture<AdoptiveDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptiveDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptiveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
