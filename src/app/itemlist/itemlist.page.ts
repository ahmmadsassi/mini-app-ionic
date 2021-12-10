import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { NewitemPage } from '../newitem/newitem.page';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.page.html',
  styleUrls: ['./itemlist.page.scss'],
})
export class ItemlistPage implements OnInit {

  todoList =[]

  today : number=Date.now();
  availabe= false;
    constructor(private alertctrl: AlertController,public modalCtrl: ModalController) { }
  
    ngOnInit() {
    }
  
  
    async addTask(){
      const modal = await this.modalCtrl.create({
        component :NewitemPage
      });
      modal.onDidDismiss().then(newTaskObj =>{
        console.log(newTaskObj.data);
        this.todoList.push(newTaskObj.data);
      });
  
      return await modal.present();
  
    }
    delete(index){
      this.todoList.splice(index,1);
  
    }
    workingbtn(){
      this.presentAlert();
    }
    async presentAlert(){
      const alert =await this.alertctrl.create({
        cssClass:'my-custom-class',
        header:'Alert',
        subHeader:'Subtitle',
        message: 'button is working fine',
        buttons:['OK']
      });
    }

}
