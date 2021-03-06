function binary_search(lista, item_procurado) {
  const inicio = 0;
  const fim = lista.length - 1;

  if (inicio <= fim) {
    const elementoDoMeio = (inicio + fim) / 2;

    if (lista[elementoDoMeio] === item_procurado) {
      return `Posição do elemento encontrado: ${elementoDoMeio}`;
    }

    if (item_procurado < lista[elementoDoMeio]) {
      binary_search(lista, item_procurado, inicio, elementoDoMeio - 1);
    } else {
      binary_search(lista, item_procurado, elementoDoMeio + 1, fim);
    }
  } else {
    return "Valor procurado não foi encontrado";
  }
}

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binary_search(lista, 5));
