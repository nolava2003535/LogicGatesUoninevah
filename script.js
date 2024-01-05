function performLogic(operation) {
  const inputA = document.getElementById('inputA').checked;
  const inputB = document.getElementById('inputB').checked;
  let result;

  switch (operation) {
    case 'AND':
      result = inputA && inputB;
      break;
    case 'OR':
      result = inputA || inputB;
      break;
    case 'XOR':
      result = inputA !== inputB;
      break;
    case 'NAND':
      result = !(inputA && inputB);
      break;
    case 'NOR':
      result = !(inputA || inputB);
      break;
    case 'XNOR':
      result = inputA === inputB;
      break;
    case 'NOT':
      result = !inputA;
      break;
    // Ì„ﬂ‰ﬂ ≈÷«›… «·„“Ìœ „‰ «·»Ê«»«  Â‰«
    default:
      result = '-';
  }

  displayResult(result);
}

function displayResult(result) {
  const resultElement = document.getElementById('resultValue');
  resultElement.textContent = result ? "1" : "0";
  resultElement.style.color = result ? "green" : "red";
}
