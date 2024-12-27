import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectprofileComponent } from './projectprofile.component';

describe('ProjectprofileComponent', () => {
  let component: ProjectprofileComponent;
  let fixture: ComponentFixture<ProjectprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectprofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
