import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/Pessoa';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  // TODO: implementar métodos que façam essa contagem
  pessoa: Pessoa;
  produtosCount = 0;
  fotosCount = 0;
  avaliacoesCount = 0;
  idade: number;
  userRole: string | null;
  isEditing: boolean = false;

  constructor(private perfilService: PerfilService,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.userRole = this.authService.getRole();
    this.perfilService.getPerfil().subscribe(
      data => {
        this.pessoa = data;
        this.pessoa.dataNascimento = this.formatarDataNascimento();
        this.idade = this.calculaIdade(this.pessoa.usuario?.dataNascimento);
        // Implementar métodos que atualizam os contadores.
      },
      error => console.error(error)
    );
  }

  calculaIdade(dataNascimento: string): number {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  }

  onSave(): void {
    this.perfilService.updatePerfil(this.pessoa).subscribe(
      () => alert('Perfil atualizado com sucesso'),
      error => console.error(error)
    );
  }

  isRoleNullOrClient(): boolean {
    return this.userRole === 'CLIENTE' || this.userRole === null;
  }

  private formatarDataNascimento(): string {
    if (this.pessoa?.dataNascimento) {
      const data = new Date(this.pessoa.dataNascimento);
      const ano = data.getFullYear();
      const mes = ('0' + (data.getMonth() + 1)).slice(-2);
      const dia = ('0' + data.getDate()).slice(-2);
      return `${ano}-${mes}-${dia}`;
    }
  }
}
