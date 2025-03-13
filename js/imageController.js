function changeImg(part, direction) {
    const currentIndex = model.input.currentIndex[part];
    const maxIndex = model.data[part].length - 1;
    console.log(maxIndex)

    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
        newIndex = 3;
    } else if (newIndex > maxIndex) {
        newIndex = 0;
    }
    model.input.currentIndex[part] = newIndex;
    updateView();
}
