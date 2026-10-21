import {Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {Frase} from '../shared/frase.model';
import {FRASES} from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES;
  public instrucao = 'Traduza a frase';
  public resposta = '';
  public rodada = 0;
  public rodadaFrase: Frase;

  public progresso = 0;
  public tentativas = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // console.log('Foi destruido')
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    // console.log(this.resposta)
  }

  public verificarResposta(): void {
    // console.log(this.tentativas)
    // console.log('Verificar resposta: ', this.resposta)
    // tslint:disable-next-line:triple-equals
    if (this.rodadaFrase.frasePtBr == this.resposta) {

      this.rodada++;

      if (this.rodada === 4) {
        this.encerrarJogo.emit('vitoria');
      }
      this.atualizaRodada();

      this.progresso = this.progresso + (100 / this.frases.length);


    } else {
      this.tentativas--;

      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota');
      }
      // console.log(this.tentativas)
    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }
}
