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
    const myArray = ['a4c79d5a-d33e-48f4-bf5b-4987bb504712', '650d3619-8a0f-4118-b095-6a071bc848f9', 'af402ce8-8a89-4bfb-90f7-522727fd2dbb', '98fa317d-7b1e-4836-a0dd-d3b5c151d1d9', '8da138b3-3aa7-4c2d-b1b9-5f6b17087273', '4107287c-c83f-4290-8830-e2864d203385', '88c625c3-ccc3-455d-8821-598361bd5d65', 'a2672330-a131-4f8d-ae21-1be85de7a930', '889d1480-728a-4a91-bd43-8cf12b3f0f7a', 'dd64f339-d763-4b93-80cf-70bce9602e45', 'b0317bc9-ae9f-47eb-926d-24a9dfc59e09', 'f40ac2fe-928a-401a-8a24-49ff807db4ca', 'ad8dd35c-1b08-4261-a399-0226044e0261', '8c3b89ff-d6ab-4426-ad5b-db0a4e134116', 'd7afe3db-c5c5-481b-9545-a14a3c7d0e74', '32a65870-1549-40e3-ac21-a1ef148299b9', '33a419dd-f542-4a17-a774-c672426ae363', '6454dfbc-6ce8-44e3-839d-1e1b2c21c3a3', 'a415db32-eff8-42f8-9689-01825e38798a', 'b9754da8-464f-4034-8bce-6cc359af55f3', '94244230-cf56-48b3-92f9-3c83bf35a4ac', 'dc10e51b-4287-4391-a334-1bb4d1a3cbf4', '8534b531-0700-4714-9beb-cb1eab2c495d', '6de064a3-a653-4b0a-8807-62e287c37482', 'a833a1bf-97fe-464c-b492-e9dde1bc47f8', 'c1529c9e-d791-4b49-abe1-e38a79212dd3', '44ba107f-d591-44eb-8b9a-5cd94ff660a8', 'ef26643a-d64e-4a57-9f9b-fc49ee538038', 'd2759a49-eee8-4e42-83d7-7ca7bf884030', '833dd5e7-803a-40f4-9de7-fcbfd95320bd', '8d11ecd8-fdd4-44ab-a24b-04dbe122b527', '855365ac-d85e-4ca5-929b-32d0cb234e86', 'd019d48f-d9b8-4943-92d7-6f8b0d7bc53f', 'c68328fc-9eb4-49af-9156-38487a00c820', '50ee5517-d787-4ec8-bd1c-3f1110cfdc55', '11d77522-035d-4de8-8c03-6d63fb311e2d', '42d008fd-8f01-4da2-9b03-bb8ae4dd714d', 'f0332ea3-786b-49c3-846e-a6cf00135804', 'e0edb690-2d6d-4995-9d3d-0834e06f43f7', 'bef90459-659a-4236-a365-775c5f7a71f6', '6601826e-8cb7-4e28-a8b3-06fb4a53b34f', '1ffc4255-8d11-4734-9eec-d4e859d2dc7f', 'aab74ed0-cc26-428a-8b83-7ebad5b4751e', '70ee5823-81b0-4150-98ad-82e60b57f7a8'];
    var rand = Math.floor(Math.random() * myArray.length);
    this.i = myArray[rand];

    this.service.indicaAnimes(this.i).subscribe((result) => {
      this.recommendsAnime = result
    }, error => {
      console.log("Error na consulta")
    })

  }

  pesquisarAnime() {
    const name = this.t.toLowerCase().replaceAll(/ /g, '-')
    if(name.length) {
      console.log(name + 'teste 1')

      this.service.consultarAnimes(name).subscribe((result) => {
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
}
