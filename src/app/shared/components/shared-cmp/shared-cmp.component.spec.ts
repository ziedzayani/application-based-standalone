import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCmpComponent } from './shared-cmp.component';

describe('SharedCmpComponent', () => {
  let component: SharedCmpComponent;
  let fixture: ComponentFixture<SharedCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedCmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
