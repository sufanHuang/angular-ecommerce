import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() cartTotal = 0;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate(category: string){
    this.router.navigate(['home'],{
      queryParams: { category}
    });
  }

}
