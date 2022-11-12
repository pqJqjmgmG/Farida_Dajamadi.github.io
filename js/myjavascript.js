const text = ['Mahasiswa', 'Anak Motor Vespa', 'Pekerja Keras'];
let count = 0;
let index = 0;
let currenttext = '';
let words = '';

(function ngetik() {
  if (count == text.length) {
    count = 0;
  }

  currenttext = text[count];

  words = currenttext.slice(0, ++index);
  document.querySelector('.mengetik').textContent = words;

  if (words.length == currenttext.length) {
    count++;
    index = 0;
  }

  setTimeout(ngetik, 300);
})();
