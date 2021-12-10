import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-newitem',
  templateUrl: './newitem.page.html',
  styleUrls: ['./newitem.page.scss'],
})
export class NewitemPage implements OnInit {

  categories= ['work','personnal','home']

  taskName
  taskDate
  taskPriority
  taskCategory
  taskObject
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async dismis(){
    await this.modalCtrl.dismiss(this.taskObject)

  }
  selectedCategory(index){
    this.taskCategory=this.categories[index]

  }
  async addTask(){
    this.taskObject=({itemName:this.taskName,
      itemDueDate:this.taskDate,
      itemPriority:this.taskPriority,
      itemCategory:this.taskCategory
    })


    this.dismis()
  }

}
