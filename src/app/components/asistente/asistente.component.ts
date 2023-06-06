import { Component, OnInit } from '@angular/core';
import {AsistenteService} from "../../services/asistente.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BotpressService} from "../../services/botpress.service";
import {RasaService} from "../../services/rasa.service";
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
  microLoad = false
  stopLoad = true

  respuestaBot: string []= []

  loading = true
  constructor(
    private asistenteService: AsistenteService,
    private botpressService: BotpressService,
    private rasaService: RasaService
  ) {
    this.recognition = new webkitSpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = 'es-MX';
    /*this.recognition.lang = 'en-US';*/


    this.recognition.onresult = (event:any) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      this.recognizedText = transcript;
      const words = transcript.split(' ');
      this.recognizedByWords = words
      console.log(transcript)
    }
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
      /*this.asistenteService.textoVoz(textos).subscribe((resp) =>{
        console.log("correcto")
      })*/
    }
  }

  startRecognition() {
    this.microLoad = true
    this.stopLoad = false
    this.recognition.start();
  }

  stopRecognition() {
    this.recognition.stop();
    this.microLoad = false

    this.rasaService.enviarMensaje(this.recognizedText).subscribe((resp : rasaResponse[])=>{
      console.log(resp)
      this.respuestaBot = resp.map(respuesta  => respuesta.text )
      this.speakText()
      this.microLoad = false
      this.stopLoad = true
    }, error => {
      this.microLoad = false
      this.stopLoad = true
    })
  }

  speakText() {
    this.respuestaBot.forEach((r,index)=>{
      const utterance = new SpeechSynthesisUtterance(r);
      let voices   = window.speechSynthesis.getVoices();

      console.log(voices)
      utterance.voice = voices.filter(
        function(voice) {
          return voice.name == 'Monica';
        })[0];
      window.speechSynthesis.speak(utterance);
    })

  }

}

interface rasaResponse {
  recipient_id: string;
  text: string
}
