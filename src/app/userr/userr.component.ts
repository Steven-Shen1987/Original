import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-userr',
  templateUrl: './userr.component.html',
  styleUrls: ['./userr.component.css']
})
export class UserrComponent implements OnInit {
  myName='s'
  user1 = "john"
  list:any
errorMessage=''

  constructor(private http:HttpClient) { }
checker(){
  console.log(this.myName)
}
  ngOnInit(): void {

    console.log(this.user1)
    this.getApiPost()
  }
getApiPost(){
this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(
  (res)=>{console.log(res), 
    this.list=res
  },
  (err)=>{console.warn(err)
  this.errorMessage="Something went wrong"
  }
)

  return 
}


}

