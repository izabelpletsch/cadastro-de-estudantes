import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})

export class AlunoComponent implements OnInit {

  selectedAluno?: Aluno;

  alunos: Aluno[] = [];

  constructor(private AlunoService: AlunoService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getalunos();
  }

  onSelect(Aluno: Aluno): void {
    this.selectedAluno = Aluno;
    this.messageService.add(`alunosComponent: Selected Aluno id=${Aluno.id}`);
  }

  getalunos(): void {
    this.AlunoService.getAlunos()
        .subscribe(alunos => this.alunos = alunos);
  }
}