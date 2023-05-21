import { Component, OnInit } from '@angular/core';
import {AsistenteService} from "../../services/asistente.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-asistente',
  templateUrl: './asistente.component.html',
  styleUrls: ['./asistente.component.css']
})
export class AsistenteComponent implements OnInit {

  asistenteForm = this.createForm()
  constructor(
    private asistenteService: AsistenteService
  ) {

  }

  ngOnInit(): void {
  }
  createForm(){
    return new FormGroup({
      texto: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]})
    })
  }

  realizarTextoVoz(){
    if (this.asistenteForm.valid){
      let texto = this.asistenteForm.controls.texto.value
      let textos : string[] = [texto]
      this.asistenteService.textoVoz(textos).subscribe((resp) =>{
        console.log("correcto")
      })
    }
  }

}
