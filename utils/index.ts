// Some Functions that can be useful

// concatena duas strings
export const getConcat = (str1: string, str2: string) => {
  return str1.concat(str2);
};

// gera uma nova senha aleatoria (sugestão de senha)
export const passGen = () => {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
};
