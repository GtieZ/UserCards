import { Component, OnInit, Input } from '@angular/core';

import { User } from 'src/app/models/user';

declare var $: any;


@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() public user!: User;

  constructor() { }

  ngOnInit(): void {
    const animationTime: number = (Math.random() * (1 - 0.2) + 0.2) * 1000;

    $(".card").animate({
      width: '12rem', 
      height: '300px',      
    }, animationTime);
  }

  handleClick(): void{
    const animationTime: number = (Math.random() * (1 - 0.5) + 0.5) * 1000;

    $("#cd-" + this.user.id).animate({deg: '+=360'},{
      duration: animationTime,
      step: function(now: number){
        $(this).css({transform: 'rotate(' + now + 'deg)'})
      }, 
      complete: function(){
        $(this).css({transform: 'rotate(0deg)'});
      }
    });
  }

  nameClick(): void{
     $("#cd-" + this.user.id).css({
      'animation': 'heartBeat',
      'animation-duration': '1s'
    });

    const element: any = document.querySelector("#cd-" + this.user.id);
    element.addEventListener('animationend', () => {
      $("#cd-" + this.user.id).css({
        'animation': '',
        'animation-duration': ''
      });
    });
  
    
  }
}
