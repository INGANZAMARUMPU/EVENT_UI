export const templateHead = () =>
    `<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <style type="text/css">
    *{padding:0;margin:0}.card{position:relative;background:#5f9ea0;border:4px solid #000;width:10cm;height:5cm;color:#daa520}.container{display:inline-block}.cadre1{position:absolute;border-left:3px solid #000;border-bottom:3px solid #000;width:2.5cm;height:2.5cm;top:1.75cm;left:1cm}.cadre2{position:absolute;border-top:3px solid #000;border-right:3px solid #000;width:5cm;height:3.25cm;top:1cm;left:3.75cm}.logo img{width:2.75cm;background:#daa520;border:1px solid #000}.logo{position:absolute;width:2.5cm;left:1.25cm;top:1.3cm}.alpha{position:absolute;left:1.32cm;font-size:2em;top:.33cm;font-family:ABeeZee;font-weight:bold;color:#000}.title{position:absolute;left:4.5cm;top:.5cm;font-weight:700;color:#000}.qr img{width:2.5cm}.qr{position:absolute;bottom:.55cm;right:1.17cm}
        </style>
    </head>
    <body>`;

export const templateBody = (user, evenmt) => {
    console.log(user, evenmt);
    var qr = QRCode.generatePNG(user.qr, {
        ecclevel : 'L',
        textcolor: "#DAA520",
        fillcolor: "#000"
    });
    return`
    <div class="container">
        <div class="card">
            <div class="alpha">Alpha</div>
            <div class="title">PRIVATE PARTY</div>
            <div class="cadre1"></div>
            <div class="cadre2"></div>
            <div class="logo"><img src="${evenmt.logo}" alt=""/></div>
            <div class="qr"><img src="${qr}" alt=""/></div>
        </div>
    </div>
        `
};
export const templateFoot = () => `</body></head></html>`;
export const printTicket = (text) => {
    var a = window.open('', '', 'height=500, width=1000'); 
    a.document.write(templateHead());  
    a.document.write(text);  
    a.document.write(templateFoot());
    setTimeout(function(){
        a.print();  
        a.close(); 
    }, 1000);
};