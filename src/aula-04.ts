interface Pessoas {
  idade: number;
  nome: string;
}

interface Usuarios {
  pessoas: Pessoas[];
  cidade: string;
}

const usuario: Usuarios = {
  cidade: "sadada",
  pessoas: [
    {
      idade: 54,
      nome: "fadjiadji",
    },
    {
      idade: 23,
      nome: "ldoajdo",
    },
    {
      idade: 23,
      nome: "snaudbua",
    },
  ],
};

console.log(usuario.pessoas.length);
console.log(usuario);
