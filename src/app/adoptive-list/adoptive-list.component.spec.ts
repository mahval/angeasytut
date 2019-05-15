import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptiveListComponent } from './adoptive-list.component';

describe('AdoptiveListComponent', () => {
  let component: AdoptiveListComponent;
  let fixture: ComponentFixture<AdoptiveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptiveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
