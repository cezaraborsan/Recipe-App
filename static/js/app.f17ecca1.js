(function(){"use strict";var e={4802:function(e,r,t){var i=t(9242),n=t(3396);const s={class:"app-container"};function a(e,r,t,i,a,c){const o=(0,n.up)("Navbar"),p=(0,n.up)("router-view"),l=(0,n.up)("Footer");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(o),(0,n.Wm)(p),(0,n.Wm)(l)])}const c={class:"logo"},o={class:"links"};function p(e,r,t,i,s,a){const p=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("nav",null,[(0,n._)("div",c,[(0,n.Wm)(p,{to:"/",onClick:a.pageReload},{default:(0,n.w5)((()=>[(0,n.Uk)("Recipes")])),_:1},8,["onClick"])]),(0,n._)("div",o,[(0,n.Wm)(p,{class:"router",to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)("Food")])),_:1}),(0,n.Wm)(p,{class:"router",to:"/drinks"},{default:(0,n.w5)((()=>[(0,n.Uk)("Drinks")])),_:1})])])}var l={name:"Navbar",methods:{pageReload(){window.location.href="https://cezaraborsan.github.io/Recipe-App/#/"}}},h=t(89);const u=(0,h.Z)(l,[["render",p],["__scopeId","data-v-43d7a880"]]);var d=u,m=t(7139);const w={class:"footer"};function g(e,r,t,i,s,a){return(0,n.wg)(),(0,n.iD)("footer",w,[(0,n._)("p",null,"© "+(0,m.zw)(s.currentYear)+" Recipe App. All rights reserved.",1)])}var v={data(){return{currentYear:(new Date).getFullYear()}}};const f=(0,h.Z)(v,[["render",g],["__scopeId","data-v-3bc57531"]]);var k=f,b={components:{Navbar:d,Footer:k}};const y=(0,h.Z)(b,[["render",a]]);var A=y,R=t(2483);function _(e,r,t,i,s,a){const c=(0,n.up)("SearchBar"),o=(0,n.up)("RecipeList");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(c,{onSearch:a.updateSearchTerm},null,8,["onSearch"]),(0,n.Wm)(o,{recipes:s.recipes,class:"recipe-list"},null,8,["recipes"])],64)}const T={class:"searchComponent"},D=(0,n._)("div",{class:"backgroundImage"},null,-1),S=(0,n._)("button",{type:"submit"},"Search",-1);function C(e,r,t,s,a,c){return(0,n.wg)(),(0,n.iD)("div",T,[D,(0,n._)("form",{onSubmit:r[1]||(r[1]=(0,i.iM)(((...e)=>c.handleSearch&&c.handleSearch(...e)),["prevent"]))},[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>a.searchTerm=e),placeholder:"Search a recipe..."},null,512),[[i.nr,a.searchTerm]]),S],32)])}var M={data(){return{searchTerm:"",loading:!1}},methods:{handleSearch(){this.$emit("search",this.searchTerm),this.searchTerm=""}}};const I=(0,h.Z)(M,[["render",C]]);var E=I;const W={class:"list-container"},Z={class:"card-list"},x={key:1};function V(e,r,t,i,s,a){const c=(0,n.up)("RecipeCard");return(0,n.wg)(),(0,n.iD)("div",W,[(0,n._)("div",Z,[t.recipes.length?((0,n.wg)(!0),(0,n.iD)(n.HY,{key:0},(0,n.Ko)(t.recipes,(e=>((0,n.wg)(),(0,n.j4)(c,{key:e.id,recipe:e},null,8,["recipe"])))),128)):((0,n.wg)(),(0,n.iD)("p",x,"No recipe found."))])])}var P="data:image/png;base64,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";const j=e=>((0,n.dD)("data-v-b23f1d62"),e=e(),(0,n.Cn)(),e),K={class:"card"},z=["src"],U={class:"card-info"},Y=["href"],O=j((()=>(0,n._)("button",null,[(0,n._)("img",{src:P,alt:"video icon"})],-1))),F=[O];function J(e,r,t,i,s,a){return(0,n.wg)(),(0,n.iD)("div",K,[(0,n._)("img",{src:a.thumbnail,alt:"Recipe Thumbnail",onClick:r[0]||(r[0]=(...e)=>a.openRecipe&&a.openRecipe(...e))},null,8,z),(0,n._)("div",U,[(0,n._)("div",null,[(0,n._)("h3",{onClick:r[1]||(r[1]=(...e)=>a.openRecipe&&a.openRecipe(...e))},(0,m.zw)(a.name),1),(a.category||a.area)&&"meal"===s.type?((0,n.wg)(),(0,n.iD)("p",{key:0,onClick:r[2]||(r[2]=(...e)=>a.openRecipe&&a.openRecipe(...e))},[(0,n._)("span",null,(0,m.zw)(a.category),1),(0,n._)("span",null,(0,m.zw)(a.area),1)])):(0,n.kq)("",!0),a.alcoholic&&"drink"===s.type?((0,n.wg)(),(0,n.iD)("p",{key:1,onClick:r[3]||(r[3]=(...e)=>a.openRecipe&&a.openRecipe(...e))},[(0,n._)("span",null,(0,m.zw)(a.category),1),(0,n._)("span",null,(0,m.zw)(a.alcoholic),1)])):(0,n.kq)("",!0)]),a.video?((0,n.wg)(),(0,n.iD)("a",{key:0,href:a.video,target:"_blank"},F,8,Y)):(0,n.kq)("",!0)])])}t(7658);var N={props:{recipe:{type:Object,required:!0}},data(){return{type:""}},computed:{thumbnail(){return this.recipe.strMealThumb||this.recipe.strDrinkThumb},name(){return this.recipe.strMeal||this.recipe.strDrink},category(){return this.recipe.strCategory||null},area(){return this.recipe.strArea||null},alcoholic(){return this.recipe.strAlcoholic||null},video(){return this.recipe.strYoutube||this.recipe.strVideo}},created(){this.recipe.strMeal?this.type="meal":this.recipe.strDrink&&(this.type="drink")},methods:{openRecipe(){"meal"===this.type?this.$router.push({name:"MealRecipeView",params:{id:this.recipe.idMeal}}):"drink"===this.type&&this.$router.push({name:"DrinkRecipeView",params:{id:this.recipe.idDrink}})}}};const L=(0,h.Z)(N,[["render",J],["__scopeId","data-v-b23f1d62"]]);var H=L,X={components:{RecipeCard:H},props:{recipes:{type:Array,required:!0}}};const G=(0,h.Z)(X,[["render",V]]);var B=G,Q=t(5939),q={components:{SearchBar:E,RecipeList:B},data(){return{searchTerm:"",recipes:[]}},mounted(){Q.Z.get("https://www.themealDB.com/api/json/v1/1/search.php?s=").then((e=>{this.recipes=e.data.meals}))},methods:{updateSearchTerm(e){this.searchTerm=e,this.fetchRecipes()},fetchRecipes(){this.searchTerm&&Promise.all([Q.Z.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.searchTerm}`),Q.Z.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.searchTerm}`),Q.Z.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.searchTerm}`),Q.Z.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.searchTerm}`)]).then((e=>{let r=[];e.forEach((e=>{e.data.meals&&(r=[...r,...e.data.meals])})),this.recipes=r})).catch((e=>{console.error(e)}))}}};const $=(0,h.Z)(q,[["render",_]]);var ee=$;function re(e,r,t,i,s,a){const c=(0,n.up)("SearchBar"),o=(0,n.up)("RecipeList");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(c,{onSearch:a.updateSearchTerm},null,8,["onSearch"]),(0,n.Wm)(o,{recipes:s.recipes},null,8,["recipes"])])}var te={components:{SearchBar:E,RecipeList:B},data(){return{searchTerm:"",recipes:[]}},mounted(){Q.Z.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").then((e=>{this.recipes=e.data.drinks}))},methods:{updateSearchTerm(e){this.searchTerm=e,this.fetchRecipes()},fetchRecipes(){this.searchTerm&&Promise.all([Q.Z.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.searchTerm}`),Q.Z.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${this.searchTerm}`),Q.Z.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${this.searchTerm}`),Q.Z.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${this.searchTerm}`)]).then((e=>{let r=[];e.forEach((e=>{e.data.drinks&&(r=[...r,...e.data.drinks])})),this.recipes=r})).catch((e=>{console.error(e)}))}}};const ie=(0,h.Z)(te,[["render",re]]);var ne=ie;const se=e=>((0,n.dD)("data-v-973c3ac4"),e=e(),(0,n.Cn)(),e),ae={class:"recipe-info-container"},ce={key:0,class:"category"},oe={class:"details"},pe={class:"img"},le=["src"],he=se((()=>(0,n._)("h3",{id:"ingredients-title"},"Ingredients:",-1))),ue={class:"ingredients-list"},de=["value"],me={class:"instructions"},we=se((()=>(0,n._)("h3",{id:"instructions-title"},"Instructions:",-1))),ge={class:"instructions-paragraph"},ve=["href"],fe=se((()=>(0,n._)("button",{class:"recipe-btn"},"Video",-1))),ke=[fe];function be(e,r,t,i,s,a){return(0,n.wg)(),(0,n.iD)("div",ae,[(0,n._)("h1",null,(0,m.zw)(s.recipe.strMeal),1),s.recipe.strCategory||s.recipe.strArea?((0,n.wg)(),(0,n.iD)("p",ce,[(0,n._)("span",null,(0,m.zw)(s.recipe.strCategory),1),(0,n._)("span",null,(0,m.zw)(s.recipe.strArea),1)])):(0,n.kq)("",!0),(0,n._)("div",oe,[(0,n._)("div",pe,[(0,n._)("img",{src:s.recipe.strMealThumb,alt:"Meal Image"},null,8,le),he,(0,n._)("ul",ue,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.ingredients,(e=>((0,n.wg)(),(0,n.iD)("li",{key:e},[(0,n._)("input",{type:"checkbox",value:e},null,8,de),(0,n.Uk)(" "+(0,m.zw)(e),1)])))),128))])]),(0,n._)("div",me,[we,(0,n._)("p",ge,(0,m.zw)(s.recipe.strInstructions),1),s.recipe.strYoutube?((0,n.wg)(),(0,n.iD)("a",{key:0,href:s.recipe.strYoutube,target:"_blank"},ke,8,ve)):(0,n.kq)("",!0)])])])}var ye={props:{id:{type:String,required:!0}},data(){return{recipe:null}},computed:{ingredients(){let e=[];for(let r=1;r<=20;r++){let t=this.recipe[`strIngredient${r}`],i=this.recipe[`strMeasure${r}`];t&&e.push(` ${t} - ${i}`)}return e}},created(){Q.Z.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`).then((e=>{this.recipe=e.data.meals[0]})).catch((e=>{console.error(e)}))}};const Ae=(0,h.Z)(ye,[["render",be],["__scopeId","data-v-973c3ac4"]]);var Re=Ae;const _e=e=>((0,n.dD)("data-v-57617678"),e=e(),(0,n.Cn)(),e),Te={class:"recipe-info-container"},De={class:"category"},Se={class:"details"},Ce={class:"img"},Me=["src"],Ie={class:"instructions"},Ee=_e((()=>(0,n._)("h3",null,"Instructions:",-1))),We={class:"instructions-paragraph"},Ze=_e((()=>(0,n._)("h3",{class:"ingredients-title"},"Ingredients:",-1))),xe=["value"],Ve=["href"],Pe=_e((()=>(0,n._)("button",{class:"recipe-btn"},"Video",-1))),je=[Pe];function Ke(e,r,t,i,s,a){return(0,n.wg)(),(0,n.iD)("div",Te,[(0,n._)("h1",null,(0,m.zw)(s.recipe.strDrink),1),(0,n._)("p",De,[(0,n._)("span",null,(0,m.zw)(s.recipe.strCategory),1),(0,n._)("span",null,(0,m.zw)(s.recipe.strAlcoholic),1)]),(0,n._)("div",Se,[(0,n._)("div",Ce,[(0,n._)("img",{src:s.recipe.strDrinkThumb,alt:"Meal Image"},null,8,Me)]),(0,n._)("div",Ie,[Ee,(0,n._)("p",We,(0,m.zw)(s.recipe.strInstructions),1),Ze,(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.ingredients,(e=>((0,n.wg)(),(0,n.iD)("li",{key:e},[(0,n._)("input",{type:"checkbox",value:e},null,8,xe),(0,n.Uk)(" "+(0,m.zw)(e),1)])))),128))]),s.recipe.strVideo?((0,n.wg)(),(0,n.iD)("a",{key:0,href:s.recipe.strVideo,target:"_blank"},je,8,Ve)):(0,n.kq)("",!0)])])])}var ze={props:{id:{type:String,required:!0}},data(){return{recipe:null}},computed:{ingredients(){let e=[];for(let r=1;r<=20;r++){let t=this.recipe[`strIngredient${r}`],i=this.recipe[`strMeasure${r}`];t&&e.push(` ${t} - ${i}`)}return e}},created(){let e=JSON.parse(localStorage.getItem(`drink-${this.id}`));e?this.recipe=e:Q.Z.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.id}`).then((e=>{this.recipe=e.data.drinks[0],localStorage.setItem(`drink-${this.id}`,JSON.stringify(this.recipe))})).catch((e=>{console.error(e)}))}};const Ue=(0,h.Z)(ze,[["render",Ke],["__scopeId","data-v-57617678"]]);var Ye=Ue;const Oe=[{path:"/",name:"home",component:ee},{path:"/drinks",name:"drinks",component:ne},{path:"/drink-recipe/:id",name:"DrinkRecipeView",component:Ye,props:!0},{path:"/meal-recipe/:id",name:"MealRecipeView",component:Re,props:!0}],Fe=(0,R.p7)({history:(0,R.r5)(),routes:Oe});var Je=Fe;(0,i.ri)(A).use(Je).mount("#app")}},r={};function t(i){var n=r[i];if(void 0!==n)return n.exports;var s=r[i]={exports:{}};return e[i](s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(r,i,n,s){if(!i){var a=1/0;for(l=0;l<e.length;l++){i=e[l][0],n=e[l][1],s=e[l][2];for(var c=!0,o=0;o<i.length;o++)(!1&s||a>=s)&&Object.keys(t.O).every((function(e){return t.O[e](i[o])}))?i.splice(o--,1):(c=!1,s<a&&(a=s));if(c){e.splice(l--,1);var p=n();void 0!==p&&(r=p)}}return r}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[i,n,s]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var i in r)t.o(r,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:r[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={143:0};t.O.j=function(r){return 0===e[r]};var r=function(r,i){var n,s,a=i[0],c=i[1],o=i[2],p=0;if(a.some((function(r){return 0!==e[r]}))){for(n in c)t.o(c,n)&&(t.m[n]=c[n]);if(o)var l=o(t)}for(r&&r(i);p<a.length;p++)s=a[p],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(l)},i=self["webpackChunkrecipe_app"]=self["webpackChunkrecipe_app"]||[];i.forEach(r.bind(null,0)),i.push=r.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(4802)}));i=t.O(i)})();
//# sourceMappingURL=app.f17ecca1.js.map