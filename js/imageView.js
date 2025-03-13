function imageView() {
    html = `
    ${createHtml('head')}
    ${createHtml('body')}
    ${createHtml('legs')}
`
    document.getElementById('app').innerHTML = html
}

function updateView() {
    imageView();
}

function createHtml(part) {
    return `
    <button onclick="changeImg('${part}', -1)">◀</button>
        <img src="img/${model.data[part][model.input.currentIndex[part]]}.png" alt="">
    <button onclick="changeImg('${part}', 1)">▶</button>
    <br>
    `;
}