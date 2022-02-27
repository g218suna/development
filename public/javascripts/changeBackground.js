export const changeBackground = () => {
    var btns = Array.from(document.getElementsByClassName("colors"));
    var clearCs = (cs, def) => {
        for (let i = 0; i < cs.length; i++) {
            cs[i].setAttribute('class', def);
        }
    };

    for (let i = 0; i < btns.length; i++) {
        btns[i].onclick = () => {
            clearCs(btns, 'colors');
            document.body.style.backgroundColor = btns[i].value;
            btns[i].setAttribute('class', 'colors this');
        };
    }
};