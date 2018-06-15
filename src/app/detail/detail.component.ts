import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  firstname
  surname
  date
  age
  pages = [
    {name: 'events', page: 'events'},
    {name: 'view', page: 'view'}
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
//retrieving information (route)
    this.route.queryParams.subscribe(params=>{

      this.firstname=params['firstname'];
      this.surname=params['surname'];
    this.age=params['age'];
    this.date=params['date'];
    
     console.log(this.firstname);
     console.log(this.surname);
     console.log(this.age);
     console.log(this.date);
      })

  }

  }


