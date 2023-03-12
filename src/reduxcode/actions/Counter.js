const increase = (step = 1) => ({
  type: 'increase',
  step,
});

const decrease = (step = 1) => ({
  type: 'decrease',
  step,
});

export { increase, decrease };
