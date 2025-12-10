// Array de objetos com nome e nota dos alunos
const alunos = [
  { nome: 'Bruno', nota: 7.5 },
  { nome: 'Ana', nota: 9 },
  { nome: 'Carlos', nota: 5 },
  { nome: 'Juliana', nota: 6 },
  { nome: 'Pedro', nota: 4.5 },
  { nome: 'Otávio', nota: 8 }
];

// Função que retorna apenas alunos com nota >= 6
const alunosAprovados = (lista) => {
  return lista.filter(aluno => aluno.nota >= 6);
};

// Exibindo resultado
console.log('Alunos aprovados:');
console.log(alunosAprovados(alunos));
