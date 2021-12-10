import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewitemPage } from './newitem.page';

describe('NewitemPage', () => {
  let component: NewitemPage;
  let fixture: ComponentFixture<NewitemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewitemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewitemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
