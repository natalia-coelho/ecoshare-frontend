import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/Pessoa';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  // TODO: implementar métodos que façam essa contagem
  pessoa: Pessoa;
  produtosCount = 22
  fotosCount = 10
  avaliacoesCount = 89
  idade = calculaIdade();

  constructor(private perfilService: PerfilService) { }

  ngOnInit(): void {
    this.perfilService.getPerfil().subscribe(
      data => this.pessoa = data,
      error => console.error(error)
    )
  }

  onSave(): void {
    this.perfilService.updatePerfil(this.pessoa).subscribe(
      () => alert('Perfil atualizado com sucesso'),
      error => console.error(error)
    )
  }

}
function calculaIdade() {
  return 23;
}

