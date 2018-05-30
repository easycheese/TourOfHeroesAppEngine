import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesComponentComponent } from './messages.component';

describe('MessagesComponentComponent', () => {
  let component: MessagesComponentComponent;
  let fixture: ComponentFixture<MessagesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
