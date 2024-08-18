const generateRandomIndex = (total: number, data: Array<number | string | object>): number[] => {
  const result = new Set<number>();

  while (result.size < total) {
    const random = Math.floor(Math.random() * data.length);
    result.add(random);
  }

  return Array.from(result);
};

export default generateRandomIndex;
