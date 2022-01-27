import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  currentRoute = this.route

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  getRoute(){
    return (this.currentRoute.snapshot.firstChild?.url[0].path)
  }

}
