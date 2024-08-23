document.addEventListener('DOMContentLoaded', function () {
  const inputField = document.querySelector('input');
  const keys = document.querySelector('.keys');

  keys.addEventListener('click', function (e) {
    if (e.target.matches('button')) {
      const key = e.target;
      const keyValue = key.textContent;
      switch (keyValue) {
        case ' AC ':
          inputField.value = '';
          break;
        case ' DEL ':
          const x = inputField.value.slice(-1)
          if (x == ' ')
            inputField.value = inputField.value.slice(0, -3)
          else
            inputField.value = inputField.value.slice(0, -1)
          break;
        case ' = ':
          document.querySelector('.equal').addEventListener('click', function () {
            try {
              inputField.value = eval(inputField.value);
            } catch (error) {
              inputField.value = 'Error ';
            }
          });
          break;
        default:
          inputField.value += keyValue;
      }

    }
  });
});
