"use strict";(self.webpackChunkauthApp=self.webpackChunkauthApp||[]).push([[902],{2902:(h,s,e)=>{e.r(s),e.d(s,{ProtectedModule:()=>r});var d=e(6895),i=e(4154),t=e(8256),l=e(8115);class u{constructor(o,c){this.router=o,this.authService=c}get usuario(){return this.authService.usuario}logout(){this.authService.logout(),this.router.navigateByUrl("/auth")}}u.\u0275fac=function(o){return new(o||u)(t.Y36(i.F0),t.Y36(l.e))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-dashboard"]],decls:17,vars:3,consts:[[1,"dashboard-bg"],[1,"center"],[1,"logout-btn",3,"click"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"Dashboard"),t.qZA(),t._UZ(3,"hr"),t.TgZ(4,"p"),t._uU(5," Esta p\xe1gina s\xf3lo funcionar\xe1 con autenticaci\xf3n\n"),t.qZA(),t.TgZ(6,"div",1)(7,"h4"),t._uU(8," User info "),t.qZA(),t._UZ(9,"br"),t.TgZ(10,"pre"),t._uU(11),t.ALo(12,"json"),t.qZA()(),t._UZ(13,"br"),t.TgZ(14,"div")(15,"button",2),t.NdJ("click",function(){return c.logout()}),t._uU(16,"Logout"),t.qZA()()()),2&o&&(t.xp6(11),t.hij(" ",t.lcZ(12,1,c.usuario)," "))},dependencies:[d.Ts],styles:["*[_ngcontent-%COMP%]{margin:15px;color:#ffffff91}.dashboard-bg[_ngcontent-%COMP%]{background-image:url(pexels-alexander-kovalev-2847648.1fcbb9f41a874dd3.jpg);min-width:100%;min-height:100%;margin:0%}.logout-btn[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(16,18,112,.733) 0%,rgba(37,37,165,.733) 92%);padding:1rem 2rem;border-radius:1rem}.center[_ngcontent-%COMP%]{text-align:center;margin:2rem 0}"]});const g=[{path:"",children:[{path:"",component:u},{path:"**",redirectTo:""}]}];class n{}n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[i.Bz.forChild(g),i.Bz]});class r{}r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[d.ez,n]})}}]);