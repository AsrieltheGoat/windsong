// Assign letter
const KEYS_TOP = ['q', 'w', 'e', 'r', 't', 'y', 'u'];
const KEYS_MIDDLE = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
const KEYS_BOTTOM = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

const keys = document.querySelectorAll('.key')
const topKeys = document.querySelectorAll('.key.top');
const middleKeys = document.querySelectorAll('.key.middle');
const bottomKeys = document.querySelectorAll('.key.bottom');

// Allow to click the notes
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
})

// Allow to use keyboard
document.addEventListener('keydown', e => {
    if (e.repeat) return;
    const key = e.key;
    const topKeyIndex = KEYS_TOP.indexOf(key);
    const middleKeyIndex = KEYS_MIDDLE.indexOf(key);
    const bottomKeyIndex = KEYS_BOTTOM.indexOf(key);

    if (topKeyIndex > -1) playNote(topKeys[topKeyIndex]);
    if (middleKeyIndex > -1) playNote(middleKeys[middleKeyIndex]);
    if (bottomKeyIndex > -1) playNote(bottomKeys[bottomKeyIndex]);
});

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();

    // Add press element
    key.classList.add('active');
    // Remove active element after audio file end
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    });
};