import './style.css';

const outputContainer = document.getElementById('output-container'); //container of editor area
const inputContainer = document.getElementById('input-container');

// create h1 element
const createH1 = (input) => {
  const h1 = document.createElement('h1');
  h1.innerHTML = input;
  outputContainer.insertBefore(h1, inputContainer);
};

// create text element
const createP = (input) => {
  const p = document.createElement('p');
  p.innerHTML = input;
  outputContainer.insertBefore(p, inputContainer);
};

// determine if user has inputted /1 or /+
const getUserInput = (input) => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if (input === '/1') {
        createH1(e.target.value);
        input = '';
      } else if (input === '/+') {
        createP(e.target.value);
        input = '';
      }
    }
  });
};

// call getUserInput to generate the users output
inputContainer.addEventListener('input', (e) => {
  getUserInput(e.target.value);
});

const displayOptions = (input) => {
  document.addEventListener('input', () => {
    if (input === '/') {
      const options = document.createElement('div');
      options.setAttribute('class', 'options');
      options.innerHTML = `
        <div>
          <div>Add blocks</div>
        </div>
          `;
      outputContainer.appendChild(options);
    }
  });
};

inputContainer.addEventListener('input', (e) => {
  displayOptions();
});
