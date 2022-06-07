import { Injectable } from '@angular/core';
import { Aluno } from './aluno';
import { ALUNOS } from './mock-aluno';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  getAlunos(): Observable<Aluno[]> {
    const alunos = of(ALUNOS);
    this.messageService.add('AlunoService: fetched alunos');
    return alunos;
  }

  getAluno(id: number): Observable<Aluno> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const aluno = ALUNOS.find(h => h.id === id)!;
    this.messageService.add(`Aluno Service: fetched aluno id=${id}`);
    return of(aluno);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
}

