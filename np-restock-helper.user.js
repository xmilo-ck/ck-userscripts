// ==UserScript==
// @name     Neopets (beta) semi-legit restock helper
// @version     2.1.3
// @namespace   xmilo@clraik
// @description Neopets (beta) semi-legit restock helper
// @include     /https?:\/\/www\.neopets\.com/haggle.phtml*
// @include     /https?:\/\/www\.neopets\.com/objects.phtml*
// @include     https://www.neopets.com/haggle.phtml?*
// @include     https://www.neopets.com/objects.phtml?*
// @include     http://www.neopets.com/haggle.phtml?*
// @include     http://www.neopets.com/objects.phtml?*
// @require     http://code.jquery.com/jquery-3.4.1.min.js
// @require     https://git.io/vMmuf
// ==/UserScript==

// customizable features
let doHaggle = 1
let isSmartHaggle = 1
let removeAreYouSure = 1
let OCR = 0
let maxHagglePercent = 99
let minHagglePercent = 97
let minDelay = 1000
let maxDelay = 1200

// do not modify
function _0x30c9(_0x324215,_0x462890){var _0x2c1e9a=_0x42ab();return _0x30c9=function(_0x1c4787,_0x2fb6ae){_0x1c4787=_0x1c4787-0xf8;var _0x4dd783=_0x2c1e9a[_0x1c4787];return _0x4dd783;},_0x30c9(_0x324215,_0x462890);}function _0x42ab(){var _0x11c174=['hidden','random','includes','(((.+)+)+)+$','height','width','oConfirmPurchase(this)','value','form[name=\x22haggleform\x22]','type','input[type=\x22image\x22]','console','floor','search','confirm-link','textContent','data','forEach','error','createElement','function\x20oConfirmPurchase(e){var\x20n=e.dataset.name,t=e.dataset.price,c=e.dataset.link,i=document.getElementById(\x22item-name\x22),o=document.getElementById(\x22item-price\x22),m=document.getElementById(\x22confirm-link\x22);i.innerHTML=n,o.innerHTML=t,m.onclick=function(){window.open(c,\x22_self\x22)},togglePopup__2020(confirmPurchasePopup),document.getElementById(\x22confirmPurchasePopup\x22).style.display=\x22none\x22,document.getElementById(\x22navpopupshade__2020\x22).style.display=\x22none\x22,document.getElementById(\x22confirm-link\x22).click()}','onload','which','toString','click','drawImage','getImageData','bind','appendChild','querySelectorAll','call','__proto__','submit','haggle.phtml','input','replace'];_0x42ab=function(){return _0x11c174;};return _0x42ab();}var _0xc218dd=(function(){var _0x3f594b=!![];return function(_0x15db9a,_0x29ba4e){var _0x2b4a5a=_0x3f594b?function(){if(_0x29ba4e){var _0x6f12f=_0x29ba4e['apply'](_0x15db9a,arguments);return _0x29ba4e=null,_0x6f12f;}}:function(){};return _0x3f594b=![],_0x2b4a5a;};}()),_0x11f412=_0xc218dd(this,function(){var _0x370916=_0x30c9;return _0x11f412['toString']()[_0x370916(0x105)]('(((.+)+)+)+$')[_0x370916(0x10f)]()['constructor'](_0x11f412)[_0x370916(0x105)](_0x370916(0xfb));});_0x11f412();var _0x1c4787=(function(){var _0x4e357b=!![];return function(_0x5b6d78,_0x556482){var _0x503c5e=_0x4e357b?function(){if(_0x556482){var _0x6d93df=_0x556482['apply'](_0x5b6d78,arguments);return _0x556482=null,_0x6d93df;}}:function(){};return _0x4e357b=![],_0x503c5e;};}()),_0x2c1e9a=_0x1c4787(this,function(){var _0xc8b8d1=_0x30c9,_0x32a6bf=function(){var _0x7fa3bb;try{_0x7fa3bb=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x172d33){_0x7fa3bb=window;}return _0x7fa3bb;},_0x55ccaf=_0x32a6bf(),_0x4ea9c0=_0x55ccaf['console']=_0x55ccaf[_0xc8b8d1(0x103)]||{},_0x12a962=['log','warn','info',_0xc8b8d1(0x10a),'exception','table','trace'];for(var _0x105b07=0x0;_0x105b07<_0x12a962['length'];_0x105b07++){var _0x29a214=_0x1c4787['constructor']['prototype']['bind'](_0x1c4787),_0x4c2e53=_0x12a962[_0x105b07],_0x18756a=_0x4ea9c0[_0x4c2e53]||_0x29a214;_0x29a214[_0xc8b8d1(0x117)]=_0x1c4787[_0xc8b8d1(0x113)](_0x1c4787),_0x29a214[_0xc8b8d1(0x10f)]=_0x18756a['toString']['bind'](_0x18756a),_0x4ea9c0[_0x4c2e53]=_0x29a214;}});_0x2c1e9a();function getReqPrice(_0x3d00d8){var _0x34e66e=_0x30c9;let _0x37c752=parseInt(_0x3d00d8[_0x34e66e(0x11b)](/\D/g,''));return _0x37c752;}function smartHaggle(_0x4e8a74){let _0xf33a59=getRandomInt(minHagglePercent,maxHagglePercent)/0x64;return Math['floor'](_0x4e8a74*_0xf33a59);}function getRandomInt(_0x4dfae4,_0x52b2b0){var _0x23d385=_0x30c9;return _0x4dfae4=Math['ceil'](_0x4dfae4),_0x52b2b0=Math['floor'](_0x52b2b0),Math['floor'](Math[_0x23d385(0xf9)]()*(_0x52b2b0-_0x4dfae4+0x1))+_0x4dfae4;}function waitForAjax(_0x1f925b){let _0x1d5e5a=getReqPrice(_0x1f925b[0x0]['innerHTML']),_0x5076f5=isSmartHaggle>0x0?smartHaggle(_0x1d5e5a):_0x1d5e5a;placeOffer(_0x5076f5);}function placeOffer(_0x1d36b7){let _0x3682cc=document['getElementsByName']('current_offer')[0x0];_0x3682cc['value']=_0x1d36b7;}function solve_captcha(_0x666c1f){return new Promise(_0x2c9e95=>{var _0x528e4f=_0x30c9,_0x332752=new Image();_0x332752['src']=_0x666c1f,_0x332752[_0x528e4f(0x10d)]=()=>{var _0xa13e71=_0x528e4f,_0x2f9321=_0x332752['width'],_0x503d94=_0x332752[_0xa13e71(0xfc)],_0xdc8d88=unsafeWindow['document']['createElement']('canvas');_0xdc8d88[_0xa13e71(0xfd)]=_0x2f9321,_0xdc8d88[_0xa13e71(0xfc)]=_0x2f9321,_0xdc8d88['getContext']('2d')[_0xa13e71(0x111)](_0x332752,0x0,0x0);var _0x22ca26=_0xdc8d88['getContext']('2d')[_0xa13e71(0x112)](0x0,0x0,_0x2f9321,_0x503d94),_0x2c0724=0x3e7,_0x5ca339=0x3e7,_0x10be1f=0x3e7;for(var _0x3107e7=0x0;_0x3107e7<_0x22ca26['width'];_0x3107e7++){for(var _0x4efa93=0x0;_0x4efa93<_0x22ca26['height'];_0x4efa93++){var _0x55d500=_0x3107e7*0x4+_0x4efa93*0x4*_0x22ca26[_0xa13e71(0xfd)],_0x3c231f=Math['floor']((_0x22ca26[_0xa13e71(0x108)][_0x55d500]+_0x22ca26['data'][_0x55d500+0x1]+_0x22ca26['data'][_0x55d500+0x2])/0x3);_0x3c231f<_0x10be1f&&(_0x10be1f=_0x3c231f,_0x5ca339=_0x3107e7,_0x2c0724=_0x4efa93);}}_0x2c9e95({'lowx':_0x5ca339,'lowy':_0x2c0724});};});}function getRandomDelay(_0x248b80,_0x46a25c){var _0x40cca4=_0x30c9;return _0x248b80=Math['ceil'](_0x248b80),_0x46a25c=Math['floor'](_0x46a25c),Math[_0x40cca4(0x104)](Math[_0x40cca4(0xf9)]()*(_0x46a25c-_0x248b80+0x1))+_0x248b80;}((async()=>{var _0x5dace5=_0x30c9;let _0x3799f0=document['URL'];if(_0x3799f0['includes']('objects.phtml')){document['onkeyup']=function(){var _0x3e81e8=_0x30c9,_0x507a45=_0x507a45||window['event'];if(_0x507a45[_0x3e81e8(0x10e)]==0x20)return document['getElementById'](_0x3e81e8(0x106))[_0x3e81e8(0x110)](),![];else{if(_0x507a45['which']==0x1b)return togglePopup__2020(),![];}};if(removeAreYouSure>0x0){let _0x5bd127=_0x5dace5(0x10c),_0x1c67be=document[_0x5dace5(0x10b)]('script');_0x1c67be[_0x5dace5(0x107)]=_0x5bd127,document['body'][_0x5dace5(0x114)](_0x1c67be);let _0x391559=document[_0x5dace5(0x115)]('.item-img');[][_0x5dace5(0x109)][_0x5dace5(0x116)](_0x391559,function(_0x4a3a67){var _0x10f1cf=_0x5dace5;_0x4a3a67['setAttribute']('onclick',_0x10f1cf(0xfe));});}}else{if(_0x3799f0[_0x5dace5(0xfa)](_0x5dace5(0x119))&&doHaggle>0x0){waitForKeyElements('div#shopkeeper_makes_deal>p>b',waitForAjax);if(OCR>0x0){const {lowx:_0x519b10,lowy:_0xe657d6}=await solve_captcha(document['querySelector'](_0x5dace5(0x102))['src']);setTimeout(()=>{var _0x2c6317=_0x5dace5,_0x1535a9=document['querySelector'](_0x2c6317(0x100)),_0x5a3fbd=document[_0x2c6317(0x10b)]('input'),_0x2b0be0=document['createElement'](_0x2c6317(0x11a));_0x5a3fbd[_0x2c6317(0x101)]=_0x2c6317(0xf8),_0x5a3fbd['name']='x',_0x5a3fbd[_0x2c6317(0xff)]=_0x519b10,_0x1535a9[_0x2c6317(0x114)](_0x5a3fbd),_0x2b0be0['type']='hidden',_0x2b0be0['name']='y',_0x2b0be0['value']=_0xe657d6,_0x1535a9['appendChild'](_0x2b0be0),_0x1535a9[_0x2c6317(0x118)]();},getRandomDelay(minDelay,maxDelay));}}}})());