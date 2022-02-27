export const clock = () => {
    var d = new Date();
    const dayname = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var date = d.getDate();
    var dayofweek = d.getDay();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();

    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    document.getElementsByClassName("clock")[0].innerHTML = year + "/" + month + "/" + date + "/" + dayname[dayofweek] + ' ' + hour + ":" + minute + ":" + second;
};