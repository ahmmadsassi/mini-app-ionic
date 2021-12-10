import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user= {
    email:'',
    password:''
  }

  constructor(
    public modalCtrl: ModalController,private router: Router,public ngFireAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }


  async loginfun(){
    const user =await this.ngFireAuth.signInWithEmailAndPassword(this.user.email,this.user.password);
    console.log(user);
    if(user.user.email){
      this.router.navigate(['/to-do']);
    }else{
      alert('Login Failde !');
    }


}
}