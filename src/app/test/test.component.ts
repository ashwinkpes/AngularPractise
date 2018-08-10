import { Component, OnInit } from '@angular/core';
import { TrustedHtmlString } from '@angular/core/src/sanitization/bypass';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  Person:Person;
  Genders : KeyValuePair[] = [{Name : 'Male', Value : 1},{Name : 'Female', Value : 2}];
  FavColors: KeyValuePair[];
  Hobbies: KeyValuePair[] = [{Name : 'Swimming', Value : 1},{Name : 'Cricket', Value : 2}, {Name : 'Reading books', Value : 3}];
  Nationalities : string [] = ['Indian','NRI']
  Addbackcolor:boolean = true;
  TotalClicks:number =3;
  constructor() {
    this.Person = {Firstname : "Ashwin" , LastName : "Kumar", id : 1 };

   }

  ngOnInit() {
  
  }

  onKeyup(event, val, type)
  {
    if (event.key == 'Enter')
    console.log('val '+ val + '----' + 'Type ' + type );    
  }

  onGenderSelect()
  {
   switch(parseInt(this.Person.Gender.toString()))
    {
      case 1 : delete this.Person.Color; this.FavColors = [];  this.FavColors= (this.getColorsForMale());break;
      case 2 : delete this.Person.Color; this.FavColors.length = 0;  this.FavColors= (this.getColorsForFeMale());break;
      default: console.log('Please select valid color!!!');
    }
  }

  getColorsForMale()
  {
    var colors : KeyValuePair[] = [{Name : 'Blue', Value : 1},{Name : 'White', Value : 2}];
    return colors;
  }
  
  getColorsForFeMale()
  {
    var colors : KeyValuePair[] = [{Name : 'Red', Value : 1},{Name : 'Pink', Value : 2}];
    return colors;
  }

  onHobbyChanged(val:number)
  {
    console.log(val)
    if (!this.Person.Hobby)
    {
      this.Person.Hobby = [];
    }

    if (!this.Person.Hobby.includes(val))
    {
      this.Person.Hobby.push(val);
    }else{

    }
  }

}

export interface Person { 
  id: number; 
  Firstname: string; 
  LastName: string; 
  Gender?: number; 
  Color?: number; 
  Hobby?: number[];
  Nationality?:number; 
}

export interface KeyValuePair
{
  Name : string;
  Value : number;
}
