import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoApp';
  todaydate;
  colors : any = [];
  items:MenuItem[];
  months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
  isavailable = false;

  constructor(private myservice: MyserviceService ,private httpService: HttpClient ,private router: Router,
    private messageService: MessageService) {}

    save(severity: string) {
      this.messageService.add({severity:severity, summary:'Success', detail:'Data Saved'});
  }
  
  myClickFunction(event) { 
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    this.router.navigateByUrl('/app-first-page');
  }

//   changemonths(event) {
//     console.log("Changed month from the Dropdown");
//     console.log(event);
//  }


//  ngOnInit() {
//   this.todaydate = this.myservice.showTodayDate();

//     this.myservice.showColors().subscribe(res => {
//       this.colors = res;
//       console.log(this.colors = res);
//     });
// }
}
