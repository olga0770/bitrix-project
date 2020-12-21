/*function changeStringColor() {
    const str = document.getElementById("block924").innerHTML;
    document.getElementById("block924").innerHTML = str.replace("ДС Групп", "<span style='color:#E7EA9D'>ДС Групп</span>");
}
changeStringColor();

function addNonBreakingSpace() {
    const str = document.getElementById("block924").innerHTML;
    document.getElementById("block924").innerHTML = str.replace("на рассылку", "на&nbsp;рассылку");
}
addNonBreakingSpace();*/



function changeHeader() {
    const iframe = document.getElementById("bx_form_iframe_6");
    const element = iframe.contentWindow.document.getElementsByTagName("H2")[0];

    const str = element.innerHTML;

    element.innerHTML = str.replace("ДС Групп", "<span style='color:#E7EA9D !important;'>ДС Групп</span>");

    element.innerHTML = str.replace("на рассылку", "на&nbsp;рассылку");
}

changeHeader();




/*const element = document.getElementsByClassName('crm-webform-header')[0];
const str = element.innerHTML;

const text1 = str.replace("ДС Групп", "<span style='color:#E7EA9D !important;'>ДС Групп</span>");
element.innerHTML = text1;

const text2 = str.replace("на рассылку", "на&nbsp;рассылку");
element.innerHTML = text2;*/



