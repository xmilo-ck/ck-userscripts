// ==UserScript==
// @name        Neopets Navigation enhancer
// @version     1.0.0
// @namespace   xmilo@clraik
// @description QoL script for all of you who wants to customize your own top navigation bar!
// @include     /https?://(?:www\.)?neopets\.com/*/
// @match        *://*.neopets.com/*
// @match        *://neopets.com/*
// ==/UserScript==

const _0x5d97de=(function(){let _0xa30ee9=!![];return function(_0x112247,_0xe540d){const _0x508a96=_0xa30ee9?function(){if(_0xe540d){const _0x411f50=_0xe540d['apply'](_0x112247,arguments);return _0xe540d=null,_0x411f50;}}:function(){};return _0xa30ee9=![],_0x508a96;};}()),_0x7b808b=_0x5d97de(this,function(){const _0x39cb4c=_0x4ca1;return _0x7b808b[_0x39cb4c(0x21)]()[_0x39cb4c(0x9b)]('(((.+)+)+)'+'+$')[_0x39cb4c(0x21)]()[_0x39cb4c(0x36)+'r'](_0x7b808b)[_0x39cb4c(0x9b)](_0x39cb4c(0x3c)+'+$');});_0x7b808b();function _0x4ca1(_0x4ca1a6,_0x50b3c3){const _0x2d8a7a=_0x4471();return _0x4ca1=function(_0x3b7263,_0x590511){_0x3b7263=_0x3b7263-(-0xe5*0x2a+-0x4eb*0x1+0x49*0x95);let _0x2ed1e8=_0x2d8a7a[_0x3b7263];return _0x2ed1e8;},_0x4ca1(_0x4ca1a6,_0x50b3c3);}const _0x586930=(function(){let _0x1655e3=!![];return function(_0x40c745,_0x35a15d){const _0x2bcc29=_0x1655e3?function(){const _0xf7ecd5=_0x4ca1;if(_0x35a15d){const _0x383a64=_0x35a15d[_0xf7ecd5(0x87)](_0x40c745,arguments);return _0x35a15d=null,_0x383a64;}}:function(){};return _0x1655e3=![],_0x2bcc29;};}()),_0x29af53=_0x586930(this,function(){const _0x26e8ba=_0x4ca1;let _0x7da769;try{const _0x5d539d=Function(_0x26e8ba(0x3f)+_0x26e8ba(0x3e)+('{}.constru'+_0x26e8ba(0x38)+'rn\x20this\x22)('+'\x20)')+');');_0x7da769=_0x5d539d();}catch(_0xcfe6ee){_0x7da769=window;}const _0x5b5408=_0x7da769[_0x26e8ba(0x2d)]=_0x7da769[_0x26e8ba(0x2d)]||{},_0x18965e=['log',_0x26e8ba(0x8e),_0x26e8ba(0x34),'error',_0x26e8ba(0x15),_0x26e8ba(0x4e),_0x26e8ba(0xa2)];for(let _0x15f66f=-0xd3*-0x1b+0x1498+-0x2ad9;_0x15f66f<_0x18965e[_0x26e8ba(0x9a)];_0x15f66f++){const _0x31f889=_0x586930[_0x26e8ba(0x36)+'r'][_0x26e8ba(0x60)][_0x26e8ba(0x27)](_0x586930),_0x5418bf=_0x18965e[_0x15f66f],_0x214f69=_0x5b5408[_0x5418bf]||_0x31f889;_0x31f889[_0x26e8ba(0xf)]=_0x586930['bind'](_0x586930),_0x31f889[_0x26e8ba(0x21)]=_0x214f69[_0x26e8ba(0x21)][_0x26e8ba(0x27)](_0x214f69),_0x5b5408[_0x5418bf]=_0x31f889;}});_0x29af53();let fetchData=async()=>{const _0x5c3d91=_0x4ca1;localStorage[_0x5c3d91(0x8c)](_0x5c3d91(0x62)+_0x5c3d91(0x1e));const _0x2926ea=await fetch(_0x5c3d91(0x74)+'ilo-ck.git'+_0x5c3d91(0x57)+_0x5c3d91(0x40)+_0x5c3d91(0x80)+_0x5c3d91(0x5c)+'on'),_0x23a6e2=await _0x2926ea['json']();return localStorage[_0x5c3d91(0x5f)]('xm-nav-jso'+'n==',JSON[_0x5c3d91(0x16)](_0x23a6e2)),localStorage[_0x5c3d91(0x5f)](_0x5c3d91(0x1b)+_0x5c3d91(0x31),new Date()),$('#xm-nav-js'+'on')['val'](JSON[_0x5c3d91(0x16)](_0x23a6e2,void(-0xe06+-0x2*0x10c2+-0x982*-0x5),-0x15fa*0x1+0x2*0x52d+-0x5d1*-0x2)),_0x23a6e2;},save=()=>{const _0x4e27b7=_0x4ca1;localStorage['setItem']('xm-nav-jso'+_0x4e27b7(0x9),JSON[_0x4e27b7(0x16)](JSON[_0x4e27b7(0x7a)]($(_0x4e27b7(0x4a)+'on')[_0x4e27b7(0x7c)]()))),localStorage[_0x4e27b7(0x5f)](_0x4e27b7(0x62)+_0x4e27b7(0x1e),!(-0x18af+-0x1*0x2af+-0x2*-0xdaf)),setTimeout(()=>location['reload'](),-0x26c3*-0x1+0x49*-0x4e+-0xfbd);},reset=async()=>{const _0x4dc2ac=_0x4ca1;localStorage[_0x4dc2ac(0x5f)](_0x4dc2ac(0x62)+_0x4dc2ac(0x1e),!(0x2200+0x1*-0xe41+-0x85*0x26)),await fetchData(),setTimeout(()=>location['reload'](),-0x4*-0x332+-0x21*-0x87+-0x1d67*0x1);},run=async()=>{const _0x58eb32=_0x4ca1,_0x3c2ab6=localStorage[_0x58eb32(0x8c)](_0x58eb32(0x59)+_0x58eb32(0x9)),_0x42c786=localStorage[_0x58eb32(0x8c)](_0x58eb32(0x62)+_0x58eb32(0x1e));(null==_0x42c786||_0x58eb32(0x98)===_0x42c786)&&Math[_0x58eb32(0x88)](new Date()-Date[_0x58eb32(0x7a)](localStorage[_0x58eb32(0x8c)]('xm-nav-las'+_0x58eb32(0x31))))/(-0x2b43e*-0x8+0x22ff3*0x16+0xd6*-0x11bb)>=0x1*0x7ae+0x221c+-0x5d*0x73||null==_0x3c2ab6?updateLinks(await fetchData()):updateLinks(JSON[_0x58eb32(0x7a)](_0x3c2ab6));},updateLinks=_0x4c32e2=>{const _0x2cc528=_0x4ca1;_0x4c32e2[_0x2cc528(0x0)][_0x2cc528(0x61)](_0x2eb71f=>document[_0x2cc528(0xa3)+_0x2cc528(0x97)](_0x2cc528(0x53)+'\x27shopdropd'+_0x2cc528(0x5e)+_0x2cc528(0x1d))[_0x2cc528(0x10)+_0x2cc528(0x18)](_0x2cc528(0x7d),_0x2eb71f));},toggleSettings=()=>{const _0x27d9c0=_0x4ca1,_0x42f8f2=document[_0x27d9c0(0xd)+_0x27d9c0(0x7)]('xm-nav-set'+'tings');var _0x335a6a=document['getElement'+_0x27d9c0(0x7)]('navpopupsh'+'ade__2020');_0x42f8f2[_0x27d9c0(0xa)][_0x27d9c0(0x30)]='-180px\x200\x200'+_0x27d9c0(0x2a),_0x27d9c0(0x56)===_0x42f8f2['style'][_0x27d9c0(0x68)]?(_0x42f8f2[_0x27d9c0(0xa)][_0x27d9c0(0x68)]=_0x27d9c0(0x65),_0x335a6a[_0x27d9c0(0xa)][_0x27d9c0(0x68)]='none'):(_0x42f8f2[_0x27d9c0(0xa)][_0x27d9c0(0x68)]=_0x27d9c0(0x56),_0x335a6a[_0x27d9c0(0xa)][_0x27d9c0(0x68)]=_0x27d9c0(0x56));},settingsConfig=()=>{const _0x29d954=_0x4ca1,_0x40ae83=JSON['parse'](localStorage[_0x29d954(0x8c)](_0x29d954(0x59)+'n==')),_0x426387=JSON[_0x29d954(0x16)](_0x40ae83,void(0x1b8c+-0xb*0xa3+-0x148b),-0x464+0xbe4+-0x77e);$('head')[_0x29d954(0xa4)](_0x29d954(0x71)+_0x29d954(0x2f)+_0x29d954(0x6e)+'pets.com/t'+_0x29d954(0x83)+_0x29d954(0x82)+'ntory.css\x22'+_0x29d954(0x46)+_0x29d954(0x90)),document[_0x29d954(0xa3)+_0x29d954(0x97)](_0x29d954(0x53)+_0x29d954(0x1f)+_0x29d954(0x5e)+_0x29d954(0x1d))[_0x29d954(0x10)+_0x29d954(0x18)](_0x29d954(0x7d),_0x29d954(0x67)+'=\x27margin-l'+_0x29d954(0x94)+_0x29d954(0x70)+_0x29d954(0x55)+_0x29d954(0x6b)+'\x200;\x27><butt'+_0x29d954(0x35)+_0x29d954(0x33)+_0x29d954(0x9c)+_0x29d954(0x58)+_0x29d954(0x8d)+_0x29d954(0x32)+_0x29d954(0x1c)+_0x29d954(0x63)+_0x29d954(0x22)+_0x29d954(0x8a)+'e:\x200.875em'+_0x29d954(0x2b)+_0x29d954(0x92)+_0x29d954(0x49)+_0x29d954(0x3a)+_0x29d954(0x5)+'ustomizati'+_0x29d954(0x29)+_0x29d954(0x50));var _0x39a883=document['createElem'+_0x29d954(0x86)](_0x29d954(0x2));_0x39a883['innerHTML']=_0x29d954(0x1)+_0x29d954(0x89)+_0x29d954(0x66)+'\x22>\x20\x20\x20\x20<h3>'+'Navigation'+_0x29d954(0x72)+_0x29d954(0x48)+_0x29d954(0x54)+_0x29d954(0x19)+_0x29d954(0x8b)+'on_button_'+_0x29d954(0x91)+_0x29d954(0x9d)+_0x29d954(0x5d)+_0x29d954(0x76)+_0x29d954(0x4f)+_0x29d954(0x51)+_0x29d954(0x77)+_0x29d954(0x64)+_0x29d954(0x8)+_0x29d954(0x25)+_0x29d954(0x1)+_0x29d954(0x9e)+_0x29d954(0x6f)+_0x29d954(0x3)+_0x29d954(0x13)+_0x29d954(0x78)+_0x29d954(0x17)+'er-pattern'+'__2020\x22></'+_0x29d954(0x4b)+_0x29d954(0x1)+'=\x22popup-bo'+_0x29d954(0x43)+_0x29d954(0x5b)+'-height:\x206'+'00x;\x22>\x20\x20\x20\x20'+_0x29d954(0x39)+_0x29d954(0x26)+_0x29d954(0x2e)+_0x29d954(0x28)+'style=\x22wid'+'th:97%\x22>'+_0x426387+(_0x29d954(0x23)+_0x29d954(0x24)+_0x29d954(0xa0)+_0x29d954(0x3b)+_0x29d954(0x4c)+'tion_butto'+_0x29d954(0x37)+_0x29d954(0x75)+':150px;dis'+_0x29d954(0x69)+_0x29d954(0x6a)+_0x29d954(0x4)+_0x29d954(0x6d)+_0x29d954(0xe)+_0x29d954(0x44)+_0x29d954(0xa5)+'Save\x20chang'+_0x29d954(0x8f)+_0x29d954(0x99)+_0x29d954(0x20)+_0x29d954(0x81)+_0x29d954(0x7f)+_0x29d954(0x6)+_0x29d954(0x45)+_0x29d954(0x3d)+'\x22width:150'+'px;display'+_0x29d954(0x2c)+_0x29d954(0x11)+'ss=\x22button'+_0x29d954(0x14)+_0x29d954(0x52)+_0x29d954(0xc)+_0x29d954(0x79)+_0x29d954(0x42)+_0x29d954(0x85)+_0x29d954(0x73)+'></div>'),_0x39a883['setAttribu'+'te']('id',_0x29d954(0x1a)+_0x29d954(0xb)),_0x39a883[_0x29d954(0x93)+'te']('class',_0x29d954(0x5a)+'p__2020\x20mo'+_0x29d954(0x6c)+_0x29d954(0xa1)),_0x39a883['setAttribu'+'te'](_0x29d954(0xa),_0x29d954(0x95)+'70%;'),document['body'][_0x29d954(0x12)+'d'](_0x39a883),document[_0x29d954(0xd)+'ById']('xm-nav-cus'+_0x29d954(0x47)+_0x29d954(0x4d))[_0x29d954(0x7e)+_0x29d954(0x9f)]('click',toggleSettings,!(0x61*-0x5e+0xfb3*-0x1+-0x1c5*-0x1d)),document[_0x29d954(0xd)+_0x29d954(0x7)]('xm-nav-cus'+_0x29d954(0x47)+_0x29d954(0x41)+'ose')[_0x29d954(0x7e)+_0x29d954(0x9f)](_0x29d954(0x96),toggleSettings,!(0x392*-0x5+0x22a*-0x1+0x16e*0xe)),document[_0x29d954(0xd)+_0x29d954(0x7)](_0x29d954(0x7b)+_0x29d954(0x47)+'_button_sa'+'ve')['addEventLi'+_0x29d954(0x9f)](_0x29d954(0x96),save,!(0x1ef0+0x12a5+0x3195*-0x1)),document[_0x29d954(0xd)+_0x29d954(0x7)](_0x29d954(0x7b)+_0x29d954(0x47)+_0x29d954(0x84)+'set')[_0x29d954(0x7e)+_0x29d954(0x9f)](_0x29d954(0x96),reset,!(-0x3*-0x779+0x1*-0x1d5d+0x6f2));};function _0x4471(){const _0x1b486b=['links','<div\x20class','div','div>\x20\x20\x20\x20</','\x20class=\x22bu','vigation\x20C','omization_','ById','tton__2020','n==','style','tings','n-yellow__','getElement','lt__2020\x20b','__proto__','insertAdja','lock;\x22\x20cla','appendChil','div>\x20\x20\x20\x20<d','-default__','exception','stringify','popup-head','centHTML','=\x22xm-nav-c','xm-nav-set','xm-nav-las','020\x20button','\x20>\x20ul','rwrite==','\x27shopdropd','sp;\x20\x20\x20\x20<bu','toString','020\x27\x20style','</textarea','></p>\x20\x20\x20\x20<','\x22>\x20\x20\x20\x20\x20\x20\x20\x20','ea\x20id=\x22xm-','bind','rows=\x2215\x22\x20','on</button','\x20-35%',';\x20width:14',':\x20inline-b','console','nav-json\x22\x20','=\x22https://','margin','tUpdated==','default__2','nav-custom','info','on\x20id=\x27xm-','constructo','n_save\x22\x20st','ctor(\x22retu','<p><textar','block;\x27>Na','id=\x22xm-nav','(((.+)+)+)','et\x22\x20style=','nction()\x20','return\x20(fu','userscript','_button_cl','t\x20links\x20to','dy__2020\x22\x20','utton-yell','button_res','\x20rel=\x22styl','tomization','tion</h3>\x20','y:\x20inline-','#xm-nav-js','div></div>','-customiza','_button','table','ult__2020\x20','></div>','button-red','2020\x20butto','div[class=','\x20\x20\x20<div\x20id',':\x20center;m','block','hub.io/ck-','tton\x27\x20clas','xm-nav-jso','togglePopu','style=\x22max','nhancer.js','pup-exit\x20b','ownNPTab\x27]','setItem','prototype','forEach','xm-nav-ove','-yellow__2','up-left-bu','none','ader__2020','<div\x20style','display','play:\x20inli','ne-block;\x22','argin:\x205px','vePopup__2','tton-defau','images.neo','__2020\x22></','text-align','<link\x20href','\x20Customiza','button></p','https://xm','yle=\x22width','utton-defa','__2020\x20pop','iv\x20class=\x22','2020\x22>Rese','parse','xm-nav-cus','val','beforeend','addEventLi','m-nav-cust','s/np-nav-e','tton\x20id=\x22x','ommon/inve','hemes/h5/c','_button_re','\x20default</','ent','apply','abs','=\x22popup-he','=\x27font-siz','ustomizati','getItem','s=\x27button-','warn','es</button','esheet\x22>','close\x22\x20cla','0px;displa','setAttribu','eft:\x20auto;','max-width:','click','tor','false','>&nbsp;&nb','length','search','ization_bu','ss=\x22inv-po','=\x22button-x','stener','p><button\x20','020','trace','querySelec','append','ow__2020\x22>'];_0x4471=function(){return _0x1b486b;};return _0x4471();}run(),settingsConfig();
