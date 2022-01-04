export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const MULTIPLY_COUNTER = "MULTIPLY_COUNTER";
export const DIVIDE_COUNTER = "DIVIDE_COUNTER";

export const incrementCounter = (val) => ({
  type: INCREMENT_COUNTER,
  payload: Number(val)
});

export const decrementCounter = (val) => ({
  type: DECREMENT_COUNTER,
  payload: Number(val)
});

export const multiplyCounter = (val) => ({
  type: MULTIPLY_COUNTER,
  payload: Number(val)
});

export const divideCounter = (val) => ({
  type: DIVIDE_COUNTER,
  payload: Number(val)
});
