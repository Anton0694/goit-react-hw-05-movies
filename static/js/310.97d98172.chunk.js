"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{47:function(n,e,t){t.d(e,{e:function(){return s}});var i,o,r,a,l=t(168),c=t(444),p=t(87),d=(c.ZP.div(i||(i=(0,l.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n"]))),c.ZP.div(o||(o=(0,l.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n\n  > a {\n    text-decoration: none;\n  }\n"]))),c.ZP.h3(r||(r=(0,l.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),(0,c.ZP)(p.rU)(a||(a=(0,l.Z)(["\ndisplay: flex;\ntext-decoration: none;\ncolor: black;\nfont-size: 16px;\nmargin-bottom: 4px;\n&:hover, :focus{\n    color: #aec492\n}\n"])))),u=t(184),s=function(n){var e=n.movies;return(0,u.jsx)("ul",{children:e.map((function(n){var e;return(0,u.jsx)(d,{to:"/movies/".concat(n.id),children:null!==(e=n.title)&&void 0!==e?e:n.name},n.id)}))})}},310:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var i,o,r,a,l,c=t(439),p=t(87),d=t(47),u=t(798),s=t(791),f=t(168),x=t(444),m=t(128),h=x.ZP.form(i||(i=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),b=x.ZP.button(o||(o=(0,f.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  \n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n  opacity: 1;\n}\n"]))),g=x.ZP.input(r||(r=(0,f.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: 1px solid black;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n  font: inherit;\n  font-size: 18px;\n  } \n  \n"]))),v=x.ZP.div(a||(a=(0,f.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),Z=(0,x.ZP)(m.G4C)(l||(l=(0,f.Z)(["\n  \n\n  right: 6px;\n"]))),k=t(184),y=function(){var n=(0,s.useState)([]),e=(0,c.Z)(n,2),t=e[0],i=e[1],o=(0,p.lr)(),r=(0,c.Z)(o,2),a=r[0],l=r[1],f=a.get("name");return(0,s.useEffect)((function(){f&&(0,u.g4)(f).then((function(n){return i(n.data.results)}))}),[f]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(v,{children:(0,k.jsxs)(h,{onSubmit:function(n){var e=n.target.name.value;n.preventDefault(),l(""===e?{}:{name:e}),n.target.name.value=""},children:[(0,k.jsx)(g,{defaultValue:f,name:"name",type:"text",autoComplete:"off",autoFocus:!0}),(0,k.jsx)(b,{type:"submit",children:(0,k.jsx)(Z,{size:"2em"})})]})}),f&&(0,k.jsx)(d.e,{movies:t})]})}}}]);
//# sourceMappingURL=310.97d98172.chunk.js.map