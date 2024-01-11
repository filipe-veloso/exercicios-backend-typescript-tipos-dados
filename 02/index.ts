const usuarios2 = [
  {
    nome: 'Guido',
    idade: 32,
    status: true,
  },
  {
    nome: 'Dani',
    idade: 30,
    status: true,
  },
  {
    nome: 'João',
    idade: 40,
    status: false,
  },
  {
    nome: 'Guilherme',
    idade: 29,
    status: true,
  },
  {
    nome: 'Ana',
    idade: 18,
    status: false,
  },
  {
    nome: 'José',
    idade: 28,
    status: false,
  },
];

const filterUsers = (
  list: { nome: string; idade: number; status: boolean }[],
  name: string
): { nome: string; idade: number; status: boolean }[] => {
  const result = list.filter((user) => {
    return user.nome.toLowerCase().includes(name.toLowerCase());
  });
  return result;
};

console.log(filterUsers(usuarios2, 'Jo'));
