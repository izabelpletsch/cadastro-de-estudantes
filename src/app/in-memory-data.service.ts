import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const alunos = [
      { id: 1,
        nome: 'Jessica',
        sobrenome: 'Alves',
        datanascimento: new Date('10-08-2022'),
        curso: 'ADS',
        semestre: 5},
      { id: 2,
        nome: 'Silvana',
        sobrenome: 'Silva',
        datanascimento: new Date('05-02-1987'),
        curso: 'Administração',
        semestre: 3 },
      { id: 3,
        nome: 'Peter',
        sobrenome: 'Sundays',
        datanascimento: new Date('13-06-1928'),
        curso: 'Gestão Empresarial',
        semestre: 1 }
    ];
    return {alunos};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(alunos: Aluno[]): number {
    return alunos.length > 0 ? Math.max(...alunos.map(aluno => aluno.id)) + 1 : 11;
  }
}