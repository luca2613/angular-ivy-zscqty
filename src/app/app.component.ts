import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  t: string;
  id;
  lista = [];
  meuStorage = localStorage;

  addTarefa() {
    this.lista.push(this.t);
    this.t = '';
    this.salvarLocal();
  }
  exibirTarefa() {
    return this.lista;
  }

  delTarefa(id) {
    this.lista.splice(id, 1);
    this.salvarLocal();
  }

  salvarLocal() {
    localStorage.setItem('tarefas', JSON.stringify(this.lista));
    console.log(localStorage.getItem('tarefas'));
  }
}
