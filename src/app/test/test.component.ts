import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name: FormControl;
  angForm:FormGroup;
  transportForms:FormArray;
  constructor() { }

  ngOnInit(): void {
    this.name = new FormControl('', [Validators.required]);
    
    this.transportForms = new FormArray([
      this.testForm(),this.testForm()
    ])
  }
  testForm(){
    return  new FormGroup({
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      college: new FormControl('', Validators.required),
    });
  }



  Function123() {
    console.log(this.transportForms)
  }
}
