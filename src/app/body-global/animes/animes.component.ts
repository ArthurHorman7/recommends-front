import { Consultar } from '../../model/indicacao';
import { IndicacaoService } from '../../service/indicacao.service';
import { Component, OnInit } from '@angular/core';
import idAnimes from 'src/assets/idAnimes/idAnimes.json';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {

  i: string = ''
  t: string = ''
  recommendsAnime?: Consultar
  resultAnime?: Consultar
  animeExiste?: boolean
  idArray= idAnimes

  constructor(
    private service: IndicacaoService
  ) { }

  ngOnInit(): void {}

  recomendaId() {
    return idAnimes
  }

  indicacaoAnimes() {
    var rand = Math.floor(Math.random() * this.idArray.length);
    this.i = this.idArray[rand].id;

    this.service.indicaAnimes(this.i).subscribe((result) => {
      this.recommendsAnime = result
    }, error => {
      console.log("Error na consulta")
    })

  }

  pesquisarAnime() {
      this.service.consultarAnimes(this.t).subscribe((result) => {
        this.resultAnime = result

        if (this.resultAnime.id.length > 0) {
          this.animeExiste = true
        } else {
          this.animeExiste = false
        }

      }, error => {
        console.log("Error na consulta")
      })
  }
}
