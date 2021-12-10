import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user ={
    email:'',
     password:'',
  
  
  }

  constructor(
    public modalCtrl: ModalController,private router: Router,public ngFireAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  async dismiss() {
    return await this.modalCtrl.dismiss();
  }

  async register(){
    const user=await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email,this.user.password);
    console.log(user);
    if(user.user.email){
      alert('Register succuess!');
      this.router.navigate(['/login']);
    }else{
      alert('Register Faild !');
    }
   }













}
