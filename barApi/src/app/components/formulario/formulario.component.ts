import { Component, OnInit } from '@angular/core';
import { CoctelI } from 'src/app/models/coctel/coctel.interface';
import { CoctelService } from 'src/app/services/coctel.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public cocteles: CoctelI[] = [];
  public coctel: string = "";

  constructor(private datosCocteles: CoctelService) { }

  ngOnInit(): void {
    this.datosCocteles.getByName("Margarita").subscribe(datos => {
      this.cocteles = <CoctelI[]>datos.drinks;
    });
  }

  buscar(): void {
      this.datosCocteles.getByName(this.coctel).subscribe(datos => {
        this.cocteles = <CoctelI[]>datos.drinks;
      });
  }
}
