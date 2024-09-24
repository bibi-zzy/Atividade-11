console.log('Olá mundo!');
// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
// Cria um elemento canvas
const canvas = document.createElement('canvas');
canvas.width = 400;
canvas.height = 400;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

// Função para desenhar uma mandala
function drawMandala() {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'cyan', 'magenta'];

    for (let i = 0; i < 12; i++) {
        ctx.save();
        ctx.translate(200, 200);
        ctx.rotate((Math.PI / 6) * i);

        // Círculo externo
        ctx.fillStyle = colors[i % colors.length];
        ctx.beginPath();
        ctx.arc(100, 0, 40, 0, Math.PI * 2);
        ctx.fill();

        // Triângulo
        ctx.fillStyle = colors[(i + 1) % colors.length];
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(30, 30);
        ctx.lineTo(-30, 30);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }

    // Círculo central
    ctx.fillStyle = 'gold';
    ctx.beginPath();
    ctx.arc(200, 200, 50, 0, Math.PI * 2);
    ctx.fill();
}

// Chama a função para desenhar a mandala
drawMandala();
