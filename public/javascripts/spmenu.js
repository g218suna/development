export const menu = () => {
    spmenu.onclick = () => {
        document.getElementById("spNav").style.display = "block";
        document.getElementById("spmenu").style.display = "none";
        document.getElementById("spmenuClose").style.display = "block";
    };

    spmenuClose.onclick = () => {
        document.getElementById("spNav").style.display = "none";
        document.getElementById("spmenu").style.display = "block";
        document.getElementById("spmenuClose").style.display = "none";
    };
};