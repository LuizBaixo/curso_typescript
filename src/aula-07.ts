const funcaoCallback = (valor: number): void => {
  console.log("DEU BOM" + valor);
};

const funcaoTeste2 = (valor1: number, valor2: number, callback: (n: number) => void): string => {
  if (valor1 > valor2) {
    callback(valor1);
  }
  return "Não deu Bom";
};

funcaoTeste2(29, 32, funcaoCallback);
funcaoTeste2(654, 32, funcaoCallback);
funcaoTeste2(43, 32, (x: number) => {
  console.log("outra funcao" + x);
});
