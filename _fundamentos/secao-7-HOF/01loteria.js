const ramdomNumber = () => {
  return Math.floor(Math.random() * 5) + 1
};

const sorteio = (numeroApostado) => {
  const numeroSorteado = ramdomNumber()
  return numeroApostado === numeroSorteado ? 'Parabéns, você ganhou' : 'Tente novamente';
};
