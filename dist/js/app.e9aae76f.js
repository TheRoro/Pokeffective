(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},a={app:0},r=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var p=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("85ec"),a=s.n(n);a.a},"101e":function(t,e,s){"use strict";var n=s("399b"),a=s.n(n);a.a},"399b":function(t,e,s){},5349:function(t,e,s){"use strict";var n=s("9abc"),a=s.n(n);a.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{class:this.$store.state.lastType.toLowerCase(),attrs:{id:"app-body"}},[s("h1",{staticClass:"app-title"},[t._v("Pokeffective")]),s("v-main",[s("SelectedTypes")],1),s("v-main",[s("TypesTable")],1),s("v-main",[s("TypesResult")],1),s("h4",[t._v("Developed by: Rodrigo Ramirez")])],1)},r=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{light:""}},[s("h2",{staticClass:"selected-types"},[t._v(" Selected Types: ")]),s("div",{attrs:{id:"types-names"}},[s("v-row",{staticClass:"types"},[s("v-col",{staticClass:"type",attrs:{cols:"12",sm:"6"}},[s("p",{staticClass:"transparent",class:this.$store.state.type1.toLowerCase()},[t._v("Type 1: "+t._s(" ")+" "+t._s(this.$store.state.type1))])]),s("v-col",{staticClass:"type",attrs:{cols:"12",sm:"6"}},[s("p",{staticClass:"transparent",class:this.$store.state.type2.toLowerCase()},[t._v("Type 2: "+t._s(" ")+" "+t._s(this.$store.state.type2))])])],1)],1)])},o=[],c=(s("d3b7"),s("25f0"),{name:"SelectedTypes",methods:{onClick:function(){this.type1=this.$store.state.type1.toString().toLowerCase(),this.type2=this.$store.state.type2.toString().toLowerCase()}},data:function(){return{type1:"none",type2:"none"}}}),l=c,p=(s("6574"),s("2877")),u=s("6544"),f=s.n(u),y=s("62ad"),h=s("a523"),v=s("0fd9"),m=Object(p["a"])(l,i,o,!1,null,"79234c79",null),d=m.exports;f()(m,{VCol:y["a"],VContainer:h["a"],VRow:v["a"]});var C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("h2",{staticClass:"app-subtitle"},[t._v("Pokemon Types:")]),s("div",{staticClass:"type-buttons"},[s("v-btn",{staticClass:"btn-type",attrs:{height:"3.5em",color:"#C0E11D"},on:{click:function(e){return t.setType("Bug",0)}}},[t._v("Bug")]),s("v-btn",{staticClass:"btn-type",attrs:{height:"3.5em",color:"#51453C"},on:{click:function(e){return t.setType("Dark",1)}}},[t._v("Dark")]),s("v-btn",{staticClass:"btn-type",attrs:{height:"3.5em",color:"#6200EA"},on:{click:function(e){return t.setType("Dragon",2)}}},[t._v("Dragon")]),s("v-btn",{staticClass:"btn-type",attrs:{height:"3.5em",color:"#FFFF00"},on:{click:function(e){return t.setType("Electric",3)}}},[t._v("Electric")]),s("v-btn",{staticClass:"btn-type",attrs:{height:"3.5em",color:"#FF6FDE"},on:{click:function(e){return t.setType("Fairy",4)}}},[t._v("Fairy")]),s("v-btn",{staticClass:"btn-type",attrs:{height:"3.5em",color:"#C03028"},on:{click:function(e){return t.setType("Fighting",5)}}},[t._v("Fighting")]),s("v-btn",{staticClass:"btn-type",attrs:{height:"3.5em",color:"#FF6D00"},on:{click:function(e){return t.setType("Fire",6)}}},[t._v("Fire")]),s("v-btn",{staticClass:"btn-type",attrs:{height:"3.5em",color:"#9FA8DA"},on:{click:function(e){return t.setType("Flying",7)}}},[t._v("Flying")]),s("v-btn",{staticClass:"btn-type",attrs:{height:"3.5em",color:"#9575CD"},on:{click:function(e){return t.setType("Ghost",8)}}},[t._v("Ghost")]),s("v-btn",{staticClass:"btn-type",attrs:{height:"3.5em",color:"#00D12F"},on:{click:function(e){return t.setType("Grass",9)}}},[t._v("Grass")]),s("v-btn",{staticClass:"btn-type",attrs:{height:"3.5em",color:"#C4A96A"},on:{click:function(e){return t.setType("Ground",10)}}},[t._v("Ground")]),s("v-btn",{staticClass:"btn-type",attrs:{height:"3.5em",color:"#18FFFF"},on:{click:function(e){return t.setType("Ice",11)}}},[t._v("Ice")]),s("v-btn",{staticClass:"btn-type",attrs:{height:"3.5em",color:"#EFEBE9"},on:{click:function(e){return t.setType("Normal",12)}}},[t._v("Normal")]),s("v-btn",{staticClass:"btn-type",attrs:{height:"3.5em",color:"#AA00FF"},on:{click:function(e){return t.setType("Poison",13)}}},[t._v("Poison")]),s("v-btn",{staticClass:"btn-type",attrs:{height:"3.5em",color:"#FF00C5"},on:{click:function(e){return t.setType("Psychic",14)}}},[t._v("Psychic")]),s("v-btn",{staticClass:"btn-type",attrs:{height:"3.5em",color:"#A8814C"},on:{click:function(e){return t.setType("Rock",15)}}},[t._v("Rock")]),s("v-btn",{staticClass:"btn-type",attrs:{height:"3.5em",color:"#9E9E9E"},on:{click:function(e){return t.setType("Steel",16)}}},[t._v("Steel")]),s("v-btn",{staticClass:"btn-type",attrs:{height:"3.5em",color:"#304FFE"},on:{click:function(e){return t.setType("Water",17)}}},[t._v("Water")]),s("v-btn",{staticClass:"btn-type",attrs:{height:"3.5em",color:"#68A090"},on:{click:t.resetType}},[t._v("???")]),s("v-btn",{staticClass:"btn-type color-splash",attrs:{height:"3.5em"},on:{click:t.colorSplash}},[t._v("???")])],1)])},b=[],_={name:"TypesTable",methods:{setType:function(t,e){this.$store.commit("setType",t),this.$store.commit("setIndex",e),this.calculate()},resetType:function(){this.$store.commit("resetType","Default"),this.$store.commit("resetEffects"),this.$store.commit("resetTypesList")},colorSplash:function(){this.$store.commit("colorSplash")},calculate:function(){if(this.$store.commit("resetEffects"),this.$store.commit("resetTypesList"),null===this.$store.state.index2){for(var t=0;t<18;t++)this.$store.commit("addEffect",this.typeChart[t][this.$store.state.index1]/2);this.$store.commit("addTypesList",this.typeList)}else{this.$store.commit("resetEffects"),this.$store.commit("resetTypesList");for(var e=0;e<18;e++)this.$store.commit("addEffect",this.typeChart[e][this.$store.state.index1]*this.typeChart[e][this.$store.state.index2]/4);this.$store.commit("addTypesList",this.typeList)}}},created:function(){this.typeChart=[[2,4,2,2,1,1,1,1,1,4,2,2,2,1,4,2,1,2],[2,1,2,2,1,1,2,2,4,2,2,2,2,2,4,2,2,2],[2,2,4,2,0,2,2,2,2,2,2,2,2,2,2,2,1,2],[2,2,1,1,2,2,2,4,2,1,0,2,2,2,2,2,2,4],[2,4,4,2,2,4,1,2,2,2,2,2,2,1,2,2,1,2],[1,4,2,2,1,2,2,1,0,2,2,4,4,1,1,4,4,2],[4,2,1,2,2,2,1,2,2,4,2,4,2,2,2,1,4,1],[4,2,2,1,2,4,2,2,2,4,2,2,2,2,2,1,1,2],[2,1,2,2,2,2,2,2,4,2,2,2,0,2,4,2,2,2],[1,2,1,2,2,2,1,1,2,1,4,2,2,1,2,4,1,4],[1,2,2,4,2,2,4,0,2,1,2,2,2,4,2,4,4,2],[2,2,4,2,2,2,1,4,2,4,4,1,2,2,2,2,1,1],[2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,1,1,2],[2,2,2,2,4,2,2,2,1,4,1,2,2,1,2,1,0,2],[2,0,2,2,2,4,2,2,2,2,2,2,2,4,1,2,1,2],[4,2,2,2,2,1,4,4,2,2,1,4,2,2,2,2,1,2],[2,2,2,1,4,2,1,2,2,2,2,4,2,2,2,4,1,1],[2,2,1,2,2,2,4,2,2,1,4,2,2,2,2,4,2,1]],this.typeList=["BUG","DARK","DRAGON","ELECTRIC","FAIRY","FIGHTING","FIRE","FLYING","GHOST","GRASS","GROUND","ICE","NORMAL","POISON","PSYCHIC","ROCK","STEEL","WATER"]}},T=_,g=(s("101e"),s("8336")),$=Object(p["a"])(T,C,b,!1,null,"949ca7ee",null),k=$.exports;f()($,{VBtn:g["a"],VContainer:h["a"]});var S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"main-container"},[this.$store.state.effects.length?s("h2",{staticClass:"types-result"},[t._v("Types Result:")]):t._e(),this.$store.state.immunities.length?s("div",{staticClass:"type-title"},[t._v(" Immunities: ")]):t._e(),s("v-row",{staticClass:"types"},t._l(this.$store.state.immunities,(function(e){return s("v-col",{key:e,staticClass:"transparent type",class:e.toLowerCase(),attrs:{cols:"12",sm:"6"}},[t._v(" "+t._s(" "+e)+" ")])})),1),this.$store.state.resistances025.length?s("div",{staticClass:"type-title"},[t._v(" Resistances x0.25: ")]):t._e(),s("v-row",{staticClass:"types"},t._l(this.$store.state.resistances025,(function(e){return s("v-col",{key:e,staticClass:"transparent type",class:e.toLowerCase(),attrs:{cols:"12",sm:"6"}},[t._v(" "+t._s(" "+e)+" ")])})),1),this.$store.state.resistances050.length?s("div",{staticClass:"type-title"},[t._v(" Resistances x0.5: ")]):t._e(),s("v-row",{staticClass:"types"},t._l(this.$store.state.resistances050,(function(e){return s("v-col",{key:e,staticClass:"transparent type",class:e.toLowerCase(),attrs:{cols:"12",sm:"6"}},[t._v(" "+t._s(" "+e)+" ")])})),1),this.$store.state.normalDamage.length?s("div",{staticClass:"type-title"},[t._v(" Normal Damage: ")]):t._e(),s("v-row",{staticClass:"types"},t._l(this.$store.state.normalDamage,(function(e){return s("v-col",{key:e,staticClass:"transparent type",class:e.toLowerCase(),attrs:{cols:"12",sm:"6"}},[t._v(" "+t._s(" "+e)+" ")])})),1),this.$store.state.effective2.length?s("div",{staticClass:"type-title"},[t._v(" Super Effective x2: ")]):t._e(),s("v-row",{staticClass:"types"},t._l(this.$store.state.effective2,(function(e){return s("v-col",{key:e,staticClass:"transparent type",class:e.toLowerCase(),attrs:{cols:"12",sm:"6"}},[t._v(" "+t._s(" "+e)+" ")])})),1),this.$store.state.effective4.length?s("div",{staticClass:"type-title"},[t._v(" Super Effective x4: ")]):t._e(),s("v-row",{staticClass:"types"},t._l(this.$store.state.effective4,(function(e){return s("v-col",{key:e,staticClass:"transparent type",class:e.toLowerCase(),attrs:{cols:"12",sm:"6"}},[t._v(" "+t._s(" "+e)+" ")])})),1)],1)},F=[],w={name:"TypesResult",data:function(){return{typeChart:[],types:[],size1:6}}},E=w,x=(s("5349"),Object(p["a"])(E,S,F,!1,null,"4b74f5b3",null)),L=x.exports;f()(x,{VCol:y["a"],VContainer:h["a"],VRow:v["a"]});var D={name:"App",components:{TypesResult:L,TypesTable:k,SelectedTypes:d},data:function(){return{}}},O=D,R=(s("034f"),s("7496")),A=s("f6c4"),P=Object(p["a"])(O,a,r,!1,null,null,null),G=P.exports;f()(P,{VApp:R["a"],VMain:A["a"]});var I=s("f309"),j=s("fcf4");n["a"].use(I["a"]);var V=new I["a"]({theme:{themes:{light:{primary:j["a"].red.darken1,secondary:j["a"].red.lighten4,accent:j["a"].indigo.base}}}}),N=s("2f62");n["a"].use(N["a"]);var M=new N["a"].Store({state:{type1:"",type2:"",index1:null,index2:null,lastType:"Default",colorSplash:!1,effects:[],immunities:[],resistances025:[],resistances050:[],normalDamage:[],effective2:[],effective4:[]},mutations:{setType:function(t,e){""===t.type1?(t.type1=e,t.colorSplash&&(t.lastType=e)):""===t.type2&&t.type1!==e?(t.type2=e,t.colorSplash&&(t.lastType=e)):(t.type1=e,t.colorSplash&&(t.lastType=e),t.type2="")},setIndex:function(t,e){null===t.index1?t.index1=e:null===t.index2&&t.index1!==e?t.index2=e:(t.index1=e,t.index2=null)},addEffect:function(t,e){this.state.effects.push(e)},addTypesList:function(t,e){for(var s=0;s<18;s++)0===t.effects[s]&&t.immunities.push(e[s]),.25===t.effects[s]&&t.resistances025.push(e[s]),.5===t.effects[s]&&t.resistances050.push(e[s]),1===t.effects[s]&&t.normalDamage.push(e[s]),2===t.effects[s]&&t.effective2.push(e[s]),4===t.effects[s]&&t.effective4.push(e[s])},resetEffects:function(t){t.effects=[]},resetTypesList:function(t){t.immunities=[],t.resistances025=[],t.resistances050=[],t.normalDamage=[],t.effective2=[],t.effective4=[]},resetType:function(t,e){t.type1="",t.type2="",t.index1=null,t.index2=null,t.colorSplash&&(t.lastType=e)},colorSplash:function(t){t.colorSplash=!t.colorSplash,t.colorSplash||(t.lastType="Default"),t.colorSplash&&(""===t.type1?t.lastType="Default":""===t.type2?t.lastType=t.type1:t.lastType=t.type2)}}});n["a"].config.productionTip=!1,new n["a"]({store:M,vuetify:V,render:function(t){return t(G)}}).$mount("#app")},6574:function(t,e,s){"use strict";var n=s("9c2b"),a=s.n(n);a.a},"85ec":function(t,e,s){},"9abc":function(t,e,s){},"9c2b":function(t,e,s){}});
//# sourceMappingURL=app.e9aae76f.js.map