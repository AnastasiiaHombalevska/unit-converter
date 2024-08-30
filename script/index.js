const btn = document.getElementById('convert-btn');
const input = document.getElementById('unit-input');

input.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    convertData()
  }
})

btn.addEventListener('click', convertData);

function roundValue(value) {
  return value.toFixed(3)
}

function convertData() {
  const input = document.getElementById('unit-input');
  const value = parseFloat(input.value);

  if (isNaN(value)) {
    return;
  }

  const feetValue = roundValue(value * 3.281);
  const meterValue = roundValue(value / 3.281);

  const gallonValue = roundValue(value * 0.264);
  const literValue = roundValue(value / 0.264);

  const poundValue = roundValue(value * 2.204);
  const kiloValue = roundValue(value / 2.204);

  const result = {
    length: `${value} meters = ${feetValue} feet | ${value} feet = ${meterValue} meters`,
    volume: `${value} liters = ${gallonValue} gallons | ${value} gallons = ${literValue} liters`,
    mass: `${value} kilos = ${poundValue} pounds | ${value} pounds = ${kiloValue} kilos`
  }

  const units = ['length', 'volume', 'mass'];

  for (let i = 0; i < units.length; i++) {
    const unit = units[i];
    const element = document.getElementById(unit);
    element.innerHTML = result[unit];
  }

  input.value = '';
}