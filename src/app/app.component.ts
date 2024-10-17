import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { SelosService } from './selos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'memoteca';
  combinedData: any;

  constructor(private readonly _selosService: SelosService) {}

  ngOnInit(): void {
    forkJoin({
      appData: this._selosService.getApp(),
      selosData: this._selosService.getSelo(),
    }).subscribe(({ appData, selosData }) => {
      console.log('appData:', appData);
      console.log('selosData:', selosData);
      this.combinedData = this.combineData(appData, selosData);
      console.log('combinedData:', this.combinedData);
    });
  }

  combineData(appData: any, selosData: any): any {
    if (!appData || !appData[0] || !selosData || !selosData[0]) {
      return []; // Retorna um array vazio se os dados não estiverem corretos
    }

    return appData.map((appItem: any) => {
      appItem.selos = appItem.selos.map((selo: any) => {
        const seloDetails = selosData.find((s: any) => s.nome === selo.tipo);
        if (seloDetails) {
          selo.descricao = seloDetails.descricao;
          const nivelDetails = seloDetails.niveis.find(
            (nivel: any) => nivel.tipo === selo.nivel
          );
          if (nivelDetails) {
            selo.color = nivelDetails.color;
          }
        }
        return selo;
      });
      return appItem;
    });
  }
}
