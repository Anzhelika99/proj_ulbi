(function(){"use strict";var t={2034:function(t,e,o){var s=o(9242),i=o(3396);const n={class:"app"};function a(t,e){const o=(0,i.up)("navbar"),s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(o),(0,i._)("div",n,[(0,i.Wm)(s)])],64)}var l=o(89);const r={},u=(0,l.Z)(r,[["render",a]]);var d=u;const c={class:"btn"};function p(t,e,o,s,n,a){return(0,i.wg)(),(0,i.iD)("button",c,[(0,i.WI)(t.$slots,"default",{},void 0,!0)])}var m={name:"my-button"};const h=(0,l.Z)(m,[["render",p],["__scopeId","data-v-711d380b"]]);var v=h;const g=["value"];function f(t,e,o,s,n,a){return(0,i.wg)(),(0,i.iD)("input",{value:o.modelValue,onInput:e[0]||(e[0]=(...t)=>a.updateInput&&a.updateInput(...t)),class:"input",type:"text"},null,40,g)}var y={name:"my-input",props:{modelValue:[String,Number]},methods:{updateInput(t){this.$emit("update:modelValue",t.target.value)}}};const _=(0,l.Z)(y,[["render",f],["__scopeId","data-v-dbe1e23e"]]);var w=_;function b(t,e,o,n,a,l){return t.show?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"dialog",onClick:e[1]||(e[1]=(0,s.iM)(((...e)=>t.hideDialog&&t.hideDialog(...e)),["stop"]))},[(0,i._)("div",{onClick:e[0]||(e[0]=(0,s.iM)((()=>{}),["stop"])),class:"dialog__content"},[(0,i.WI)(t.$slots,"default",{},void 0,!0)])])):(0,i.kq)("",!0)}var k={props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}},mounted(){console.log("mixin mounted")}},P={name:"my-dialog",mixins:[k],mounted(){console.log("dialog")}};const C=(0,l.Z)(P,[["render",b],["__scopeId","data-v-4070138c"]]);var V=C,S=o(7139);const D=["value"],W=(0,i._)("option",{disabled:"",value:""},"Choose from list:",-1),U=["value"];function L(t,e,o,s,n,a){return(0,i.wg)(),(0,i.iD)("select",{value:o.modelValue,onChange:e[0]||(e[0]=(...t)=>a.changeOption&&a.changeOption(...t))},[W,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.options,(t=>((0,i.wg)(),(0,i.iD)("option",{value:t.value,key:t.value},(0,S.zw)(t.name),9,U)))),128))],40,D)}var O={name:"my-select",props:{modelValue:{type:String},options:{type:Array,default:()=>[]}},methods:{changeOption(t){this.$emit("update:modelValue",t.target.value)}}};const $=(0,l.Z)(O,[["render",L]]);var x=$;o(7658);const Z={class:"navbar"},j={class:"navbar__btns"};function I(t,e,o,s,n,a){const l=(0,i.up)("my-button");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("nav",Z,[(0,i._)("div",{onClick:e[0]||(e[0]=e=>t.$router.push("/")),style:{cursor:"pointer"}},"Posts"),(0,i._)("div",j,[(0,i.Wm)(l,{onClick:e[1]||(e[1]=e=>t.$router.push("/posts"))},{default:(0,i.w5)((()=>[(0,i.Uk)("Posts")])),_:1}),(0,i.Wm)(l,{onClick:e[2]||(e[2]=e=>t.$router.push("/about")),style:{"margin-left":"15px"}},{default:(0,i.w5)((()=>[(0,i.Uk)("About us")])),_:1}),(0,i.Wm)(l,{onClick:e[3]||(e[3]=e=>t.$router.push("/store")),style:{"margin-left":"15px"}},{default:(0,i.w5)((()=>[(0,i.Uk)("Store")])),_:1})])])])}var A={name:"navbar"};const M=(0,l.Z)(A,[["render",I],["__scopeId","data-v-15ebcf3e"]]);var Q=M,E=[v,w,V,x,Q];const q=t=>((0,i.dD)("data-v-2677af5b"),t=t(),(0,i.Cn)(),t),z=q((()=>(0,i._)("div",null,[(0,i._)("h1",null,"Wellcome to my list of posts!")],-1))),R={class:"router__links"};function F(t,e,o,s,n,a){const l=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[z,(0,i._)("div",R,[(0,i.Wm)(l,{to:"/posts"},{default:(0,i.w5)((()=>[(0,i.Uk)("Posts")])),_:1}),(0,i.Wm)(l,{to:"/about"},{default:(0,i.w5)((()=>[(0,i.Uk)("About us")])),_:1})])],64)}var H={};const Y=(0,l.Z)(H,[["render",F],["__scopeId","data-v-2677af5b"]]);var T=Y;const G=(0,i._)("h1",null,"Page with my posts",-1),K={class:"app__btns"},N={key:1,style:{"margin-top":"15px"}},B={class:"observer"};function J(t,e,o,s,n,a){const l=(0,i.up)("my-input"),r=(0,i.up)("my-button"),u=(0,i.up)("my-select"),d=(0,i.up)("post-form"),c=(0,i.up)("my-dialog"),p=(0,i.up)("post-list"),m=(0,i.Q2)("focus"),h=(0,i.Q2)("intersection");return(0,i.wg)(),(0,i.iD)("div",null,[G,(0,i.wy)((0,i.Wm)(l,{modelValue:n.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=t=>n.searchQuery=t),placeholder:"Search..."},null,8,["modelValue"]),[[m]]),(0,i._)("div",K,[(0,i.Wm)(r,{onClick:a.showDialog},{default:(0,i.w5)((()=>[(0,i.Uk)("Create post")])),_:1},8,["onClick"]),(0,i.Wm)(u,{modelValue:n.selectedSort,"onUpdate:modelValue":e[1]||(e[1]=t=>n.selectedSort=t),options:n.sortOptions},null,8,["modelValue","options"])]),(0,i.Wm)(c,{show:n.dialogVisible,"onUpdate:show":e[2]||(e[2]=t=>n.dialogVisible=t)},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{onCreate:a.createPost},null,8,["onCreate"])])),_:1},8,["show"]),n.isPostsLoading?((0,i.wg)(),(0,i.iD)("div",N,"Getting posts... Please, wait")):((0,i.wg)(),(0,i.j4)(p,{key:0,posts:a.sortedAndSearchedPosts,onRemove:a.removePost},null,8,["posts","onRemove"])),(0,i.wy)((0,i._)("div",B,null,512),[[h,a.loadMorePosts]])])}o(541);const X=t=>((0,i.dD)("data-v-26963ff2"),t=t(),(0,i.Cn)(),t),tt={class:"posts"},et=X((()=>(0,i._)("h2",null,"List of all posts",-1))),ot={style:{color:"red","margin-top":"20px"}};function st(t,e,o,n,a,l){const r=(0,i.up)("post-item");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.wy)((0,i._)("div",tt,[et,(0,i.Wm)(s.W3,{name:"post-list"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.posts,(e=>((0,i.wg)(),(0,i.j4)(r,{post:e,key:e.id,onRemove:o=>t.$emit("remove",e)},null,8,["post","onRemove"])))),128))])),_:1})],512),[[s.F8,o.posts.length]]),(0,i.wy)((0,i._)("h2",ot,"No more posts :(",512),[[s.F8,0===o.posts.length]])],64)}const it=t=>((0,i.dD)("data-v-afa01912"),t=t(),(0,i.Cn)(),t),nt={class:"post"},at={class:"post__item"},lt=it((()=>(0,i._)("strong",null,"Post id:",-1))),rt={class:"post__item"},ut=it((()=>(0,i._)("strong",null,"Article name:",-1))),dt=it((()=>(0,i._)("br",null,null,-1))),ct=it((()=>(0,i._)("strong",null,"Article description:",-1))),pt=it((()=>(0,i._)("br",null,null,-1))),mt=it((()=>(0,i._)("strong",null,"Likes quantity:",-1))),ht={class:"post__btns"};function vt(t,e,o,s,n,a){const l=(0,i.up)("my-button");return(0,i.wg)(),(0,i.iD)("div",nt,[(0,i._)("div",null,[(0,i._)("div",at,[lt,(0,i.Uk)(" "+(0,S.zw)(o.post.id),1)]),(0,i._)("div",rt,[ut,(0,i.Uk)(),dt,(0,i.Uk)((0,S.zw)(o.post.title),1)]),(0,i._)("div",null,[ct,(0,i.Uk)(),pt,(0,i.Uk)((0,S.zw)(o.post.body),1)]),(0,i._)("div",null,[mt,(0,i.Uk)(" "+(0,S.zw)(t.$store.state.likes),1)])]),(0,i._)("div",ht,[(0,i.Wm)(l,{onClick:e[0]||(e[0]=e=>t.$router.push(`/posts/${o.post.id}`))},{default:(0,i.w5)((()=>[(0,i.Uk)("Open")])),_:1}),(0,i.Wm)(l,{onClick:e[1]||(e[1]=e=>t.$emit("remove",o.post))},{default:(0,i.w5)((()=>[(0,i.Uk)("Delete")])),_:1}),(0,i.Wm)(l,{onClick:e[2]||(e[2]=e=>t.$store.commit("incrementLikes"))},{default:(0,i.w5)((()=>[(0,i.Uk)("Like")])),_:1}),(0,i.Wm)(l,{onClick:e[3]||(e[3]=e=>t.$store.commit("decrimentLikes"))},{default:(0,i.w5)((()=>[(0,i.Uk)("Dislike")])),_:1})])])}var gt={props:{post:{type:Object,required:!0}}};const ft=(0,l.Z)(gt,[["render",vt],["__scopeId","data-v-afa01912"]]);var yt=ft,_t={emits:["remove"],components:{PostItem:yt},props:{posts:{type:Array,required:!0}}};const wt=(0,l.Z)(_t,[["render",st],["__scopeId","data-v-26963ff2"]]);var bt=wt;const kt=(0,i._)("h4",null,"Create post",-1);function Pt(t,e,o,n,a,l){const r=(0,i.up)("my-input"),u=(0,i.up)("my-button"),d=(0,i.Q2)("focus");return(0,i.wg)(),(0,i.iD)("form",{onSubmit:e[2]||(e[2]=(0,s.iM)((()=>{}),["prevent"]))},[kt,(0,i.wy)((0,i.Wm)(r,{modelValue:a.post.title,"onUpdate:modelValue":e[0]||(e[0]=t=>a.post.title=t),type:"text",placeholder:"Article name"},null,8,["modelValue"]),[[d]]),(0,i.Wm)(r,{modelValue:a.post.body,"onUpdate:modelValue":e[1]||(e[1]=t=>a.post.body=t),type:"text",placeholder:"Article description"},null,8,["modelValue"]),(0,i.Wm)(u,{onClick:l.createPost,style:{"margin-top":"15px"}},{default:(0,i.w5)((()=>[(0,i.Uk)(" Create! ")])),_:1},8,["onClick"])],32)}var Ct={data(){return{post:{title:"",body:""}}},methods:{createPost(){this.post.id=Date.now(),this.$emit("create",this.post),this.post={title:"",body:""}}}};const Vt=(0,l.Z)(Ct,[["render",Pt]]);var St=Vt,Dt=o(4161),Wt={components:{PostList:bt,PostForm:St},data(){return{posts:[],page:1,limit:10,totalPages:0,dialogVisible:!1,isPostsLoading:!1,selectedSort:"",searchQuery:"",sortOptions:[{value:"title",name:"Sort by title"},{value:"body",name:"Sort by description"},{value:"id",name:"Sort by id"}]}},methods:{createPost(t){this.posts.unshift(t),this.dialogVisible=!1},removePost(t){this.posts=this.posts.filter((e=>e.id!==t.id))},showDialog(){this.dialogVisible=!0},async fetchPosts(){try{this.isPostsLoading=!0;const t=await Dt.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.page,_limit:this.limit}});this.totalPages=Math.ceil(t.headers["x-total-count"]/this.limit),this.posts=t.data}catch(t){alert(`Error ${t}`)}finally{this.isPostsLoading=!1}},async loadMorePosts(){this.page+=1;try{const t=await Dt.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.page,_limit:this.limit}});this.totalPages=Math.ceil(t.headers["x-total-count"]/this.limit),this.posts=[...this.posts,...t.data]}catch(t){alert(`Error ${t}`)}}},mounted(){this.fetchPosts()},computed:{sortedPosts(){return[...this.posts].sort(((t,e)=>"id"===this.selectedSort?e[this.selectedSort]-t[this.selectedSort]:t[this.selectedSort]?.localeCompare(e[this.selectedSort])))},sortedAndSearchedPosts(){return this.sortedPosts.filter((t=>t.title.toLowerCase().includes(this.searchQuery.toLowerCase())))}},watch:{}};const Ut=(0,l.Z)(Wt,[["render",J]]);var Lt=Ut;const Ot=(0,i._)("h1",null,"Page with my posts",-1),$t={class:"app__btns"},xt={key:1,style:{"margin-top":"15px"}},Zt={class:"observer"};function jt(t,e,o,s,n,a){const l=(0,i.up)("my-input"),r=(0,i.up)("my-button"),u=(0,i.up)("my-select"),d=(0,i.up)("post-form"),c=(0,i.up)("my-dialog"),p=(0,i.up)("post-list"),m=(0,i.Q2)("focus"),h=(0,i.Q2)("intersection");return(0,i.wg)(),(0,i.iD)("div",null,[Ot,(0,i.wy)((0,i.Wm)(l,{modelValue:n.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=t=>n.searchQuery=t),placeholder:"Search..."},null,8,["modelValue"]),[[m]]),(0,i._)("div",$t,[(0,i.Wm)(r,{onClick:a.showDialog},{default:(0,i.w5)((()=>[(0,i.Uk)("Create post")])),_:1},8,["onClick"]),(0,i.Wm)(u,{modelValue:n.selectedSort,"onUpdate:modelValue":e[1]||(e[1]=t=>n.selectedSort=t),options:n.sortOptions},null,8,["modelValue","options"])]),(0,i.Wm)(c,{show:n.dialogVisible,"onUpdate:show":e[2]||(e[2]=t=>n.dialogVisible=t)},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{onCreate:a.createPost},null,8,["onCreate"])])),_:1},8,["show"]),n.isPostsLoading?((0,i.wg)(),(0,i.iD)("div",xt,"Getting posts... Please, wait")):((0,i.wg)(),(0,i.j4)(p,{key:0,posts:a.sortedAndSearchedPosts,onRemove:a.removePost},null,8,["posts","onRemove"])),(0,i.wy)((0,i._)("div",Zt,null,512),[[h,a.loadMorePosts]])])}var It={components:{PostList:bt,PostForm:St},data(){return{posts:[],page:1,limit:10,totalPages:0,dialogVisible:!1,isPostsLoading:!1,selectedSort:"",searchQuery:"",sortOptions:[{value:"title",name:"Sort by title"},{value:"body",name:"Sort by description"},{value:"id",name:"Sort by id"}]}},methods:{createPost(t){this.posts.unshift(t),this.dialogVisible=!1},removePost(t){this.posts=this.posts.filter((e=>e.id!==t.id))},showDialog(){this.dialogVisible=!0},async fetchPosts(){try{this.isPostsLoading=!0;const t=await Dt.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.page,_limit:this.limit}});this.totalPages=Math.ceil(t.headers["x-total-count"]/this.limit),this.posts=t.data}catch(t){alert(`Error ${t}`)}finally{this.isPostsLoading=!1}},async loadMorePosts(){this.page+=1;try{const t=await Dt.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.page,_limit:this.limit}});this.totalPages=Math.ceil(t.headers["x-total-count"]/this.limit),this.posts=[...this.posts,...t.data]}catch(t){alert(`Error ${t}`)}}},mounted(){this.fetchPosts()},computed:{sortedPosts(){return[...this.posts].sort(((t,e)=>"id"===this.selectedSort?e[this.selectedSort]-t[this.selectedSort]:t[this.selectedSort]?.localeCompare(e[this.selectedSort])))},sortedAndSearchedPosts(){return this.sortedPosts.filter((t=>t.title.toLowerCase().includes(this.searchQuery.toLowerCase())))}},watch:{}};const At=(0,l.Z)(It,[["render",jt]]);var Mt=At;function Qt(t,e,o,s,n,a){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("h1",null,"Post page id = "+(0,S.zw)(t.$route.params.id),1)])}var Et={};const qt=(0,l.Z)(Et,[["render",Qt]]);var zt=qt;const Rt=(0,i._)("h1",null,"About page",-1),Ft=(0,i._)("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eius quos, esse, dolores sit labore odio quod, in alias enim fuga laudantium nesciunt! Inventore eveniet ad culpa iure fugit earum?",-1),Ht=[Rt,Ft];function Yt(t,e,o,s,n,a){return(0,i.wg)(),(0,i.iD)("div",null,Ht)}var Tt={};const Gt=(0,l.Z)(Tt,[["render",Yt]]);var Kt=Gt,Nt=o(2483);const Bt=[{path:"/",component:T},{path:"/posts",component:Lt},{path:"/about",component:Kt},{path:"/posts/:id",component:zt},{path:"/store",component:Mt}],Jt=(0,Nt.p7)({routes:Bt,history:(0,Nt.PO)("/proj_ulbi/")});var Xt=Jt,te={mounted(t,e){const o={rootMargin:"0px",threshold:1},s=(t,o)=>{t[0].isIntersecting&&e.value()},i=new IntersectionObserver(s,o);i.observe(t)},name:"intersection"},ee=o(65),oe=(0,ee.MT)({state:{likes:2,isAuth:!1},getters:{doubleLikes(t){return 2*t.likes}},mutations:{incrementLikes(t){t.likes+=1},decrimentLikes(t){t.likes-=1}}}),se={mounted(t){t.focus()},name:"focus"},ie=[se,te];const ne=(0,s.ri)(d);ie.forEach((t=>{ne.directive(t.name,t)})),E.forEach((t=>{ne.component(t.name,t)})),ne.use(Xt).use(oe).mount("#app")}},e={};function o(s){var i=e[s];if(void 0!==i)return i.exports;var n=e[s]={exports:{}};return t[s].call(n.exports,n,n.exports,o),n.exports}o.m=t,function(){var t=[];o.O=function(e,s,i,n){if(!s){var a=1/0;for(d=0;d<t.length;d++){s=t[d][0],i=t[d][1],n=t[d][2];for(var l=!0,r=0;r<s.length;r++)(!1&n||a>=n)&&Object.keys(o.O).every((function(t){return o.O[t](s[r])}))?s.splice(r--,1):(l=!1,n<a&&(a=n));if(l){t.splice(d--,1);var u=i();void 0!==u&&(e=u)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[s,i,n]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,n,a=s[0],l=s[1],r=s[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);if(r)var d=r(o)}for(e&&e(s);u<a.length;u++)n=a[u],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(d)},s=self["webpackChunkproj_ulbi"]=self["webpackChunkproj_ulbi"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(2034)}));s=o.O(s)})();
//# sourceMappingURL=app.aa5fdcd2.js.map