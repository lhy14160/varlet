import{_ as v}from"./elevation.703f44d6.js";import{q as f,o as a,c as o,a as p,B as e,n as s,f as i,m as c,l as r,t as l}from"./vendor.ea41cd30.js";function u(t){return["left","center","right"].includes(t)}const _={color:{type:String},textColor:{type:String},title:{type:String},titlePosition:{type:String,default:"left",validator:u},elevation:{type:Boolean,default:!0}};const g=f({name:"VarAppBar",props:_}),m={class:"var-app-bar__left"},y={key:0,class:"var-app-bar__title"},$={class:"var-app-bar__right"};function h(t,d,B,b,S,k){return a(),o("div",{class:c(["var-app-bar",{"var-elevation--3":t.elevation}]),style:s({background:t.color,color:t.textColor})},[p("div",m,[e(t.$slots,"left"),t.titlePosition==="left"?(a(),o("div",{key:0,class:"var-app-bar__title",style:s({paddingLeft:t.$slots.left?0:void 0})},[e(t.$slots,"default",{},()=>[r(l(t.title),1)])],4)):i("v-if",!0)]),t.titlePosition==="center"?(a(),o("div",y,[e(t.$slots,"default",{},()=>[r(l(t.title),1)])])):i("v-if",!0),p("div",$,[t.titlePosition==="right"?(a(),o("div",{key:0,class:"var-app-bar__title",style:s({paddingRight:t.$slots.right?0:void 0})},[e(t.$slots,"default",{},()=>[r(l(t.title),1)])],4)):i("v-if",!0),e(t.$slots,"right")])],6)}var n=v(g,[["render",h]]);n.install=function(t){t.component(n.name,n)};export{n as A};
