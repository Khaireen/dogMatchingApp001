import { Component, OnInit } from '@angular/core';
import { Dog } from '../../classes/Dog';
import { dogBreed} from '../../assets/tables/dogBreeds'


@Component({
  selector: 'app-add-dog-form',
  templateUrl: './add-dog-form.component.html',
  styleUrls: ['./add-dog-form.component.css']
})
export class AddDogFormComponent implements OnInit {

  public dog: Dog;
  public breed = dogBreed;

  ngOnInit() {

    this.dog = new Dog({
      dogName: "",
      kennelName: "",
      breed: "",
      color: "",
      sex: "",
      birthDate: "",
      healthInfo: "",
      showTitles: "",
      training: "",
      additionalInfo: "",
      dogWebsite: "",
      dogImage: File,
    })

  }

  handleBreedChange(value) {
    
  }

}


