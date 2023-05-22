import { Component, OnInit } from '@angular/core';
import {AsistenteService} from "../../services/asistente.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BotpressService} from "../../services/botpress.service";
declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-asistente',
  templateUrl: './asistente.component.html',
  styleUrls: ['./asistente.component.css']
})
export class AsistenteComponent implements OnInit {
  recognition: any;
  asistenteForm = this.createForm()
  recognizedText: string = '';
  recognizedByWords: string[] = []
  constructor(
    private asistenteService: AsistenteService,
    private botpressService: BotpressService
  ) {
    this.recognition = new webkitSpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.lang = 'es-ES';

    this.recognition.onresult = (event:any) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      this.recognizedText = transcript;
      const words = transcript.split(' ');
      this.recognizedByWords = words
      console.log(transcript)
    }
  }

  ngOnInit(): void {
    this.botpressService.getConversations().subscribe((resp:any) => {
      console.log(resp)
    })
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

  startRecognition() {
    this.recognition.start();
  }

  stopRecognition() {
    this.recognition.stop();
  }

  speakText() {
    const utterance = new SpeechSynthesisUtterance(this.recognizedText);
    window.speechSynthesis.speak(utterance);
  }

}
