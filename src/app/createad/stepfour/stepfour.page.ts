import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentChecked, Output, EventEmitter, ViewChild, ViewChildren, Input } from '@angular/core';
import { UserService } from 'src/app/model/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stepfour',
  templateUrl: './stepfour.page.html',
  styleUrls: ['./stepfour.page.scss'],
})
export class StepfourPage implements OnInit {
  public id: any;
  
  constructor(private route: ActivatedRoute, private userService: UserService, public router: Router) {

    }

  ngOnInit() {
	  this.id = this.route.snapshot.paramMap.get('id');
  }
  
  categoryrt(id:string) {
	    
        this.router.navigate(['stepthree/'+id]);
    }

}
