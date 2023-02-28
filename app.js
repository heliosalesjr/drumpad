function playPad (idAudio) {

    document.querySelector(idAudio).play();
}

const keys = document.querySelectorAll('.key');

let count = 0

for (let count = 0; count < keys.length; count++) {

    const item = keys[count];

    const pad = item.classList[1];

    const keyId = `#som_${pad}`

    item.onclick = function () {
        playPad(keyId);
    };

}