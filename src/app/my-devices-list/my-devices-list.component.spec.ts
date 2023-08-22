/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyDevicesListComponent } from './my-devices-list.component';

describe('MyDevicesListComponent', () => {
  let component: MyDevicesListComponent;
  let fixture: ComponentFixture<MyDevicesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDevicesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDevicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
