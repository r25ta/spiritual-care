import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spiritual-care';

  constructor(private router: Router){}

  navGoers(){
    this.router.navigateByUrl('/goers');
  }

  navWorkers(){
    this.router.navigateByUrl('/workers');
  }

  navBack(){
    this.router.navigateByUrl('/');
  }
}
