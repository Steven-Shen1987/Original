import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.css']
})
export class TestformComponent implements OnInit {

  list: any


  constructor(private http: HttpClient) { }
  onSubmit(form: FormGroup) {
    console.log(form)

    if (form.valid && form.dirty) {

      let datasToApi = form.value
      datasToApi['userId'] = 1
      this.postApi(datasToApi)
    }
  }
  ngOnInit(): void {
    this.getApi()
  }
  getApi() {
    this.http.get("https://jsonplaceholder.typicode.com/comments").subscribe(
      (res: Array<any>) => {
        console.log(res), this.list = res.slice(0, 50)

      },
      (err) => { console.warn(err) }
    )
  }

  postApi(data) {
    console.log({ 'submiting': data })
    this.http.post("https://jsonplaceholder.typicode.com/comments", data).subscribe(
      (res) => {
        console.log(res)
        this.list.push(res)
      },
      (err) => { console.warn(err) }
    )
  }



  saveFunction(data) {

    for (let item of this.list) {
      if (item.id == data.id) {
        item = data

      }
    }
    console.log(this.list)
  }

  insertFunction(data) {

    this.list.push(data);

    console.log(this.list)
  }




  deleteFunction(id) {
    console.log(id)

    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i]["id"] == id) {
        this.list.splice(i, 1);
        i--;
      }
    }

    // this.list.filter((item) => {
    //   return item.id != id;
    // })



  }

}

