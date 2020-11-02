import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.css']
})
export class TestformComponent implements OnInit {
  Name=""
  Phone=""
  adress=""
  email=""
  formName:any
  formPhone:any
  formadress:any
  formemail:any
  checker(){
    this.formName = this.Name
    this.formPhone = this.Phone
    this.formadress = this.adress
    this.formemail = this.email
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
