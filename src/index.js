import './style.css';

const outputContainer = document.getElementById('output-container'); //container of editor area
const inputContainer = document.getElementById('input-container');
const userInput = document.getElementById('user-input');

// create h1 element
const createH1 = (input) => {
  const h1 = document.createElement('h1');
  h1.innerHTML = input;
  outputContainer.appendChild(h1);
};

// create text element
const createP = (input) => {
  const p = document.createElement('p');
  p.innerHTML = input;
  outputContainer.appendChild(p);
};

// convert text into h1 or p element
const convertText = (text) => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && text !== '') {
      if (text === '/1') {
        createH1(e.target.value);
        userInput.value = '';
        text = '';
      } else if (text === '/+') {
        createP(e.target.value);
        userInput.value = '';
        text = '';
      }
    }
  });
};

// listen for changes in input field
userInput.addEventListener('input', (e) => {
  convertText(e.target.value);
  const options = document.createElement('div');
  if (userInput.value === '/1') {
    userInput.value = '';
    userInput.setAttribute('placeholder', 'Type in your heading here...');
  } else if (userInput.value === '/+') {
    userInput.value = '';
    userInput.setAttribute('placeholder', 'Type in your text here...');
  } else if (userInput.value === '/') {
    options.className = 'options-div';
    options.innerHTML = `
    <div class="options w-50 p-2 border rounded">
      <div class="options-title title">Add blocks</div>
      <p class="options-desc mb-1">Keep typing to filter, or escape to exit</p>
      <p class="options-filter">Filtering keyword <span class="px-1 py-1 rounded">1</span></p>
      <div class="options-list container">
        <div class="heading row">
          <div class="col-sm-2"><i class="text-secondary bi bi-type-h1"></i></div>
          <div class="col-sm-8 pt-3">
            <div class="title">Heading 1</div>
            <p>Shortcut: type / and 1</p>
          </div>
        </div>
        <div class="text row">
          <div class="col-sm-2"><i class="text-secondary bi bi-type"></i></div>
          <div class="col-sm-8 pt-3">
            <div class="title">Text</div>
            <p>Shortcut: type / and +</p>
          </div>
        </div>
      </div>
    </div>
      `;
    inputContainer.appendChild(options);
  } else {
    let optionsDiv = document.querySelector('.options-div');
    if (optionsDiv !== null) optionsDiv.remove();
  }
});
