(self["webpackChunkjunseojjang"]=self["webpackChunkjunseojjang"]||[]).push([[372],{372:function(i,t,s){"use strict";s.r(t),s.d(t,{default:function(){return w}});var e=s(3396),c=s(7139),f=s(6713);const n={class:"black-bg"},o={class:"white-bg"},g=(0,e._)("img",{src:"",alt:"",class:"commands_title_description_img"},null,-1),r=(0,e._)("div",{class:"commands_title_description"},[(0,e._)("h2",{class:"commands_title_description_h2"},"null"),(0,e.Uk)(),(0,e._)("span",{class:"commands_title_description_span"}," null")],-1),u={class:"wrapper"},a={class:"section"},p={class:"top_navbar"},m={key:0,class:"hamburger"},l={class:"sidebar"},d=(0,e._)("div",{class:"profile"},[(0,e._)("img",{src:f,alt:"profile_picture"}),(0,e._)("h3",null,"알로항"),(0,e._)("p",null,"디스코드를 더 편하게.")],-1),_={class:"icon"},x={class:"now_site"},b=["onClick"];function v(i,t,s,f,v,h){const k=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("div",n,[(0,e._)("div",o,[g,r,(0,e._)("button",{class:"test_button",onClick:t[0]||(t[0]=(...i)=>h.command_modal_close&&h.command_modal_close(...i))},"확인")])]),(0,e._)("div",u,[(0,e._)("div",a,[(0,e._)("div",p,[1==v.hamburger?((0,e.wg)(),(0,e.iD)("div",m,[(0,e._)("a",null,[(0,e._)("i",{class:"fas fa-bars",onClick:t[1]||(t[1]=(...i)=>h.menu_var_f&&h.menu_var_f(...i))})])])):(0,e.kq)("",!0)])]),(0,e._)("div",l,[d,(0,e._)("ul",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(v.name_list,((i,t)=>((0,e.wg)(),(0,e.iD)("li",{key:t},[(0,e.Wm)(k,{class:(0,c.C_)(void 0!==v.name_list[t].split("|")[1]?"activen":"active"),to:v.link_list[t]},{default:(0,e.w5)((()=>[(0,e._)("span",_,[(0,e._)("i",{class:(0,c.C_)(v.font_list[t])},null,2)]),(0,e._)("span",x,(0,c.zw)(v.name_list[t].replace("|","")),1)])),_:2},1032,["class","to"])])))),128))])])]),(0,e._)("div",{class:"commands",onClick:t[2]||(t[2]=(...i)=>h.menu_var_ff&&h.menu_var_ff(...i))},[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(v.command_name,((i,t)=>((0,e.wg)(),(0,e.iD)("div",{class:"commandss",key:t},[(0,e._)("h2",null,(0,c.zw)("/"+v.command_name[t]),1),(0,e._)("p",null,[(0,e._)("button",{class:"commandss_button",onClick:i=>h.command_modal(v.command_name[t],v.command_description[t])},"미리보기",8,b)])])))),128))])],64)}var h={name:"Commands_Manage",data(){return{hamburger:!1,font_list:["fas fa-home","fas fa-pills","fas fa-cog fa-spin","fas fa-crosshairs","fas fa-money-bill","fas fa-grin-beam","fas fa-chart-bar","fas fa-images","fas fa-list","fas fa-database"],name_list:["메인","일반 명령어","서버 세팅 명령어","|서버 관리 명령어","도박 명령어","재미 명령어","통계 명령어","짤 명령어","기타 명령어","데이터 삭제"],link_list:["/","/gernal","/setting","/manage","/gambling","/fun","/stat","/meme","/app","/data"],command_name:["경고","공지사항","밴유저목록","청소","풀링"],command_description:["경고를 부여, 회수합니다","채널에 공지 & 규칙을 전송합니다","서버에서 밴 당한 유저 리스트를 보여줍니다","메시지를 특정수만큼 삭제합니다","모든 유저를 하나의 통화방으로 옮깁니다"]}},methods:{menu_var_f(){1==document.querySelector("body").classList.toggle("active")?this.hamburger=!0:this.hamburger=!1},menu_var_ff(){""==document.querySelector("body").classList.value&&(document.querySelector("body").classList.toggle("active"),this.hamburger=!0)},command_modal(i,t){const e=document.querySelector(".black-bg"),c=document.querySelector(".commands_title_description_h2"),f=document.querySelector(".commands_title_description_span"),n=document.querySelector(".commands_title_description_img");n.src=s(8742)(`./${i.replace(" ","")}.gif`),c.innerHTML=i,f.innerHTML=t,e.style.display="block"},command_modal_close(){const i=document.querySelector(".black-bg");i.style.display="none"}},components:{}},k=s(89);const y=(0,k.Z)(h,[["render",v]]);var w=y},8742:function(i,t,s){var e={"./test.gif":4361,"./tts.gif":5598,"./가위바위보.gif":2511,"./개인음성채널.gif":5479,"./경고.gif":3690,"./경고처벌.gif":8447,"./골라.gif":9524,"./공지사항.gif":8817,"./구글검색.gif":3602,"./금지어.gif":3187,"./네이버실검.gif":9810,"./넷플릭스.gif":1328,"./단어삭제.gif":2112,"./댄스.gif":934,"./데이터삭제.gif":8650,"./도박순위.gif":617,"./도배방지.gif":7954,"./도움말.gif":8055,"./돈줘.gif":1270,"./디데이리스트.gif":6745,"./디데이삭제.gif":9171,"./디데이추가.gif":6686,"./뜻.gif":2107,"./랭크.gif":1085,"./로그채널.gif":9597,"./리더보드.gif":2002,"./링크단축.gif":9414,"./맞춤법검사.gif":8820,"./멜론.gif":7374,"./배워.gif":2553,"./배틀.gif":7926,"./밴유저목록.gif":649,"./복권.gif":9705,"./빌보드.gif":676,"./서버프로필.gif":1168,"./송금.gif":479,"./스티커스틸.gif":4337,"./스포티파이.gif":2965,"./앱.gif":8425,"./유저정보.gif":845,"./유튜브검색.gif":5989,"./음성채널접속.gif":5064,"./이모지스틸.gif":9034,"./이모지확대.gif":3313,"./인원수업데이트채널.gif":532,"./인증.gif":1765,"./인증설정.gif":3395,"./입장로그설정.gif":4559,"./잔액.gif":3555,"./주사위.gif":8119,"./질문.gif":5529,"./짤.gif":5637,"./청소.gif":8859,"./출첵.gif":5566,"./코드업로드.gif":9202,"./코로나.gif":3703,"./키스.gif":4009,"./퇴장로그설정.gif":82,"./투표.gif":6146,"./티켓설정.gif":9388,"./풀링.gif":8632,"./프사.gif":3284,"./핑.gif":9520,"./한타로.gif":7084,"./허그.gif":1972};function c(i){var t=f(i);return s(t)}function f(i){if(!s.o(e,i)){var t=new Error("Cannot find module '"+i+"'");throw t.code="MODULE_NOT_FOUND",t}return e[i]}c.keys=function(){return Object.keys(e)},c.resolve=f,i.exports=c,c.id=8742},6713:function(i,t,s){"use strict";i.exports=s.p+"img/alh.19301434.png"},4361:function(i,t,s){"use strict";i.exports=s.p+"img/test.f543144f.gif"},5598:function(i,t,s){"use strict";i.exports=s.p+"img/tts.804615be.gif"},2511:function(i,t,s){"use strict";i.exports=s.p+"img/가위바위보.3f65e052.gif"},5479:function(i,t,s){"use strict";i.exports=s.p+"img/개인음성채널.0bd094f7.gif"},3690:function(i,t,s){"use strict";i.exports=s.p+"img/경고.33734ad7.gif"},8447:function(i,t,s){"use strict";i.exports=s.p+"img/경고처벌.8aabcec1.gif"},9524:function(i,t,s){"use strict";i.exports=s.p+"img/골라.5320e2d1.gif"},8817:function(i,t,s){"use strict";i.exports=s.p+"img/공지사항.d5b6039b.gif"},3602:function(i,t,s){"use strict";i.exports=s.p+"img/구글검색.e3e19d57.gif"},3187:function(i,t,s){"use strict";i.exports=s.p+"img/금지어.f9bb2512.gif"},9810:function(i,t,s){"use strict";i.exports=s.p+"img/네이버실검.84d10182.gif"},1328:function(i,t,s){"use strict";i.exports=s.p+"img/넷플릭스.41f79121.gif"},2112:function(i,t,s){"use strict";i.exports=s.p+"img/단어삭제.0ae85ff0.gif"},934:function(i,t,s){"use strict";i.exports=s.p+"img/댄스.ce87de59.gif"},8650:function(i,t,s){"use strict";i.exports=s.p+"img/데이터삭제.6fdd44b1.gif"},617:function(i,t,s){"use strict";i.exports=s.p+"img/도박순위.3148c048.gif"},7954:function(i,t,s){"use strict";i.exports=s.p+"img/도배방지.c651364a.gif"},8055:function(i,t,s){"use strict";i.exports=s.p+"img/도움말.8e9354a5.gif"},1270:function(i,t,s){"use strict";i.exports=s.p+"img/돈줘.cc8c1b15.gif"},6745:function(i,t,s){"use strict";i.exports=s.p+"img/디데이리스트.9f4b4a01.gif"},9171:function(i,t,s){"use strict";i.exports=s.p+"img/디데이삭제.e277a48f.gif"},6686:function(i,t,s){"use strict";i.exports=s.p+"img/디데이추가.da0eb1ea.gif"},2107:function(i,t,s){"use strict";i.exports=s.p+"img/뜻.7f2a223a.gif"},1085:function(i,t,s){"use strict";i.exports=s.p+"img/랭크.4e31be82.gif"},9597:function(i,t,s){"use strict";i.exports=s.p+"img/로그채널.b0feba01.gif"},2002:function(i,t,s){"use strict";i.exports=s.p+"img/리더보드.930401a9.gif"},9414:function(i,t,s){"use strict";i.exports=s.p+"img/링크단축.9554f078.gif"},8820:function(i,t,s){"use strict";i.exports=s.p+"img/맞춤법검사.8c4a50c1.gif"},7374:function(i,t,s){"use strict";i.exports=s.p+"img/멜론.3872ffdd.gif"},2553:function(i,t,s){"use strict";i.exports=s.p+"img/배워.4edab81d.gif"},7926:function(i,t,s){"use strict";i.exports=s.p+"img/배틀.2a2e87da.gif"},649:function(i,t,s){"use strict";i.exports=s.p+"img/밴유저목록.4e6d6bc7.gif"},9705:function(i,t,s){"use strict";i.exports=s.p+"img/복권.a6e119b3.gif"},676:function(i,t,s){"use strict";i.exports=s.p+"img/빌보드.5e6ea028.gif"},1168:function(i,t,s){"use strict";i.exports=s.p+"img/서버프로필.8e9e6633.gif"},479:function(i,t,s){"use strict";i.exports=s.p+"img/송금.3d13a4e7.gif"},4337:function(i,t,s){"use strict";i.exports=s.p+"img/스티커스틸.bf9c0d0a.gif"},2965:function(i,t,s){"use strict";i.exports=s.p+"img/스포티파이.3a17625f.gif"},8425:function(i,t,s){"use strict";i.exports=s.p+"img/앱.c8765a4d.gif"},845:function(i,t,s){"use strict";i.exports=s.p+"img/유저정보.a3ff9145.gif"},5989:function(i,t,s){"use strict";i.exports=s.p+"img/유튜브검색.14e05fc9.gif"},5064:function(i,t,s){"use strict";i.exports=s.p+"img/음성채널접속.31142f88.gif"},9034:function(i,t,s){"use strict";i.exports=s.p+"img/이모지스틸.3ab1c287.gif"},3313:function(i,t,s){"use strict";i.exports=s.p+"img/이모지확대.c1a4cd56.gif"},532:function(i,t,s){"use strict";i.exports=s.p+"img/인원수업데이트채널.5ddd6781.gif"},1765:function(i,t,s){"use strict";i.exports=s.p+"img/인증.3a66114a.gif"},3395:function(i,t,s){"use strict";i.exports=s.p+"img/인증설정.6eb4be72.gif"},4559:function(i,t,s){"use strict";i.exports=s.p+"img/입장로그설정.fb0c115a.gif"},3555:function(i,t,s){"use strict";i.exports=s.p+"img/잔액.102aaa45.gif"},8119:function(i,t,s){"use strict";i.exports=s.p+"img/주사위.74320edc.gif"},5529:function(i,t,s){"use strict";i.exports=s.p+"img/질문.b872dc11.gif"},5637:function(i,t,s){"use strict";i.exports=s.p+"img/짤.dcb5b045.gif"},8859:function(i,t,s){"use strict";i.exports=s.p+"img/청소.ce74427b.gif"},5566:function(i,t,s){"use strict";i.exports=s.p+"img/출첵.8c20e4b8.gif"},9202:function(i,t,s){"use strict";i.exports=s.p+"img/코드업로드.bc3d798a.gif"},3703:function(i,t,s){"use strict";i.exports=s.p+"img/코로나.7d3c5a1f.gif"},4009:function(i,t,s){"use strict";i.exports=s.p+"img/키스.5289ef64.gif"},82:function(i,t,s){"use strict";i.exports=s.p+"img/퇴장로그설정.ccd51bea.gif"},6146:function(i,t,s){"use strict";i.exports=s.p+"img/투표.e39ad03f.gif"},9388:function(i,t,s){"use strict";i.exports=s.p+"img/티켓설정.e30c678d.gif"},8632:function(i,t,s){"use strict";i.exports=s.p+"img/풀링.ea4f893f.gif"},3284:function(i,t,s){"use strict";i.exports=s.p+"img/프사.3054a02a.gif"},9520:function(i,t,s){"use strict";i.exports=s.p+"img/핑.36a6469d.gif"},7084:function(i,t,s){"use strict";i.exports=s.p+"img/한타로.f9fe05c2.gif"},1972:function(i,t,s){"use strict";i.exports=s.p+"img/허그.763eeaa3.gif"}}]);
//# sourceMappingURL=372.3bce90bd.js.map