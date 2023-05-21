import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChatbotComponent} from "./components/chatbot/chatbot.component";
import {AsistenteComponent} from "./components/asistente/asistente.component";

const routes: Routes = [
  {
    path: 'mr-bot',
    component: ChatbotComponent
  },
  {
    path: 'asistente',
    component: AsistenteComponent
  },
  {
    path: '**', redirectTo:'mr-bot'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
