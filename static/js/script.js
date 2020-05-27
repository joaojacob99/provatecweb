const app = document.getElementById('raiz');

const caixa = document.createElement('div');
caixa.setAttribute('class', 'caixa');
app.appendChild(caixa);

for (var i = 1; i<=10; i++){

var c = document.createElement('div');
c.setAttribute('class', 'artigos');
caixa.appendChild(c);

var t = document.createElement('h3');
t.textContent = 'Curso ' + i;
c.appendChild(t);

var p = document.createElement('p');
p.textContent = 'Curso generico informado ' + i;
c.appendChild(p);
}

