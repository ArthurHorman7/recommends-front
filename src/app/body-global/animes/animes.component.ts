import { Consultar } from '../../model/indicacao';
import { IndicacaoService } from '../../service/indicacao.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(
    private service: IndicacaoService
  ) { }

  ngOnInit(): void {}

  indicacaoAnimes() {
    const myArray = ['a4c79d5a-d33e-48f4-bf5b-4987bb504712', '650d3619-8a0f-4118-b095-6a071bc848f9', 'af402ce8-8a89-4bfb-90f7-522727fd2dbb', '98fa317d-7b1e-4836-a0dd-d3b5c151d1d9', '8da138b3-3aa7-4c2d-b1b9-5f6b17087273', '4107287c-c83f-4290-8830-e2864d203385', '88c625c3-ccc3-455d-8821-598361bd5d65', 'a2672330-a131-4f8d-ae21-1be85de7a930', '889d1480-728a-4a91-bd43-8cf12b3f0f7a', 'dd64f339-d763-4b93-80cf-70bce9602e45', 'b0317bc9-ae9f-47eb-926d-24a9dfc59e09', 'f40ac2fe-928a-401a-8a24-49ff807db4ca', 'ad8dd35c-1b08-4261-a399-0226044e0261', '8c3b89ff-d6ab-4426-ad5b-db0a4e134116', 'd7afe3db-c5c5-481b-9545-a14a3c7d0e74', '32a65870-1549-40e3-ac21-a1ef148299b9', '33a419dd-f542-4a17-a774-c672426ae363', '6454dfbc-6ce8-44e3-839d-1e1b2c21c3a3', 'a415db32-eff8-42f8-9689-01825e38798a', 'b9754da8-464f-4034-8bce-6cc359af55f3', '94244230-cf56-48b3-92f9-3c83bf35a4ac', 'dc10e51b-4287-4391-a334-1bb4d1a3cbf4'];
    var rand = Math.floor(Math.random() * myArray.length);
    this.i = myArray[rand];

    this.service.indicaAnimes(this.i).subscribe((result) => {
      this.recommendsAnime = result
      console.log(this.recommendsAnime)
    }, error => {
      console.log("Error na consulta")
    })

  }

  pesquisarAnime() {
    this.service.consultarAnimes(this.t).subscribe((result) => {
      this.resultAnime = result
      console.log(this.resultAnime)

      if (this.resultAnime.id.length > 0) {
        this.animeExiste = true
      } else {
        this.animeExiste = false
      }
      console.log(this.resultAnime)
    }, error => {
      console.log("Error na consulta")
    })
  }

}
