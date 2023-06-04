import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PromedioService} from "../../services/promedio.service";

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.component.html',
  styleUrls: ['./promedio.component.css']
})
export class PromedioComponent implements OnInit {
  listaForm = this.createForm()
  promedioResultante: any

  constructor(
    private promedioService: PromedioService
  ) {
  }

  ngOnInit(): void {
  }

  createForm(){
    return new FormGroup({
      lista: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]})
    })
  }

  obtenerPromedio(){
    if (this.listaForm.valid){
      let texto = this.listaForm.controls.lista.value
      let textos : string[] = [texto]
      this.promedioService.obtenerPromedio(textos).subscribe((resp) =>{
        console.log(resp)
        this.promedioResultante = resp
      })
    }
  }

}
