import {
  DECREMENT_COUNTER,
  DIVIDE_COUNTER,
  INCREMENT_COUNTER,
  MULTIPLY_COUNTER
} from "./action";

export const myReducer = (currentState, myAction) => {
  switch (myAction.type) {
    case INCREMENT_COUNTER:
      return {
        ...currentState,
        myCount: myAction.payload + currentState.myCount
      };

    case DECREMENT_COUNTER:
      return {
        ...currentState,
        myCount: currentState.myCount - myAction.payload
      };

    case MULTIPLY_COUNTER:
      return {
        ...currentState,
        myCount: currentState.myCount * myAction.payload
      };

    case DIVIDE_COUNTER:
      if (currentState.myCount / myAction.payload === Infinity) {
        alert("Anser is Infinity");
        return currentState;
      }
      return {
        ...currentState,

        myCount: currentState.myCount / myAction.payload
      };

    default:
      return currentState;
  }
};
