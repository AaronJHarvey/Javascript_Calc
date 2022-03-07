class Calculator {
  constructor(previousOperAndTextElement, currentOperAndTextElement) {
    this.previousOperAnd = previousOperAndTextElement;
    this.currentOperAnd = currentOperAndTextElement;
    this.clear();
  }

  clear() {
    (this.currentOperAnd = ""),
      (this.previousOperAnd = ""),
      (this.operation = undefined);
  }

  delete() {}

  appendNumber(number) {}

  chooseOperation(operation) {}

  compute() {}

  updatedDisplay() {}
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperAndTextElement = document.querySelector(
  "[data-previous-operand]"
);
const CurrentOperAndTextElement = document.querySelector(
  "[data-current-operand]"
);
