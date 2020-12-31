import { Component } from '@angular/core';
import {Contact} from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  
  contacts: Contact[] = [];
// contact:Contact;

// contacts=[];

  addContact(contactForm){
    this.contacts.push(new Contact(contactForm.value.name,contactForm.value.bdate));
    console.log(this.contacts);
    contactForm.resetForm();
  }

//   bdayArray=[];
//   addBday(value){
//     this.bdayArray.push(value);
//     console.log(this.bdayArray);
//   }
  deleteContact(bday){
    for(let i=0;i<=this.contacts.length;i++){
      if(bday == this.contacts[i].name){
        this.contacts.splice(i,1)
      }
    }
  }
//   bdaySubmit(value:any){
//     if(value!==""){
//       this.bdayArray.push(value.bday)
//     } else {
//       alert("Enter a value")
//     }
//   }
//   onSubmit(contactForm){
//     console.log(contactForm);
//   }
// }
}

