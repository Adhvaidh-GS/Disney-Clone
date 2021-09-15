(this["webpackJsonpdisney-plus-clone"]=this["webpackJsonpdisney-plus-clone"]||[]).push([[0],{106:function(n,e,t){},189:function(n,e,t){"use strict";t.r(e);var i=t(0),r=t.n(i),c=t(42),a=t.n(c),o=(t(98),t(44)),s=t(13),d=t(29),p=t.n(d),l=t(43),b=t(20);function j(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(e){return setTimeout((function(){return e({data:n})}),500)}))}var x=Object(b.b)("counter/fetchCount",function(){var n=Object(l.a)(p.a.mark((function n(e){var t;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j(e);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),g=Object(b.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(n){n.value+=1},decrement:function(n){n.value-=1},incrementByAmount:function(n,e){n.value+=e.payload}},extraReducers:function(n){n.addCase(x.pending,(function(n){n.status="loading"})).addCase(x.fulfilled,(function(n,e){n.status="idle",n.value+=e.payload}))}}),u=g.actions,h=(u.increment,u.decrement,u.incrementByAmount,g.reducer,t(19),t(1));t(106);var m,O,f,v,w,y,k=t(3),_=t(33),z=t.n(_),S=(t(165),z.a.initializeApp({apiKey:"AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",authDomain:"disneyplus-clone-a33d5.firebaseapp.com",projectId:"disneyplus-clone-a33d5",storageBucket:"disneyplus-clone-a33d5.appspot.com",messagingSenderId:"37918794208",appId:"1:37918794208:web:dbe9842dfe1dda522a4b85",measurementId:"G-DRVLJKWRWG"}).firestore()),A=z.a.auth(),C=new z.a.auth.GoogleAuthProvider,I=(z.a.storage(),S),R=t(4),E=t(8),L=Object(b.c)({name:"user",initialState:{name:"",email:"",photo:""},reducers:{setUserLogin:function(n,e){n.name=e.payload.name,n.email=e.payload.email,n.photo=e.payload.photo},setSignOut:function(n){n.name=null,n.email=null,n.photo=null}}}),B=L.actions,D=B.setUserLogin,T=B.setSignOut,G=function(n){return n.user.name},J=function(n){return n.user.photo},M=L.reducer;var W,P,U=function(){var n=Object(s.b)(),e=Object(E.f)(),t=Object(s.c)(G);return Object(s.c)(J),Object(i.useEffect)((function(){A.onAuthStateChanged(function(){var t=Object(l.a)(p.a.mark((function t(i){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i&&(n(D({name:i.displayName,email:i.email,photo:i.photoURL})),e.push("/"));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}())}),[]),Object(h.jsxs)(N,{children:[Object(h.jsx)(X,{src:"/images/logo.svg"}),t?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(F,{children:[Object(h.jsxs)("a",{children:[Object(h.jsx)("img",{src:"/images/home-icon.svg"}),Object(h.jsx)("span",{children:"HOME"})]}),Object(h.jsxs)("a",{children:[Object(h.jsx)("img",{src:"/images/search-icon.svg"}),Object(h.jsx)("span",{children:"SEARCH"})]}),Object(h.jsxs)("a",{children:[Object(h.jsx)("img",{src:"/images/watchlist-icon.svg"}),Object(h.jsx)("span",{children:"WATCHLIST"})]}),Object(h.jsxs)("a",{children:[Object(h.jsx)("img",{src:"/images/original-icon.svg"}),Object(h.jsx)("span",{children:"ORIGINALS"})]}),Object(h.jsxs)("a",{children:[Object(h.jsx)("img",{src:"/images/movie-icon.svg"}),Object(h.jsx)("span",{children:"MOVIES"})]}),Object(h.jsxs)("a",{children:[Object(h.jsx)("img",{src:"/images/series-icon.svg"}),Object(h.jsx)("span",{children:"SERIES"})]})]}),Object(h.jsx)(H,{onClick:function(){A.signOut().then((function(){n(T()),e.push("/login")}))},src:"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/123155116/original/ada692539ed9ea12a2d20bf054ab5316d211254b/create-illustrative-instagram-twitch-and-youtube-profile-pictures.jpg"})]}):Object(h.jsx)(Y,{children:Object(h.jsx)(V,{onClick:function(){A.signInWithPopup(C).then((function(t){var i=t.user;n(D({name:i.displayName,email:i.email,photo:i.photoURL})),e.push("/")}))},children:"Login"})})]})},N=R.a.nav(m||(m=Object(k.a)(["\n    height: 70px;\n    display: flex;\n    align-items: center;\n    padding: 0 36px;\n    background-color: #090b13;\n    overflow-x: hidden\n"]))),X=R.a.img(O||(O=Object(k.a)(["\n    width: 80px;\n\n"]))),F=R.a.div(f||(f=Object(k.a)(['\n    display: flex;\n    flex: 1;\n    margin-left: 20px;\n    align-items: center;\n    \n    \n    a {\n        display: flex;\n        align-items: center;\n        padding: 0 12px;\n        \n\n        img {\n            height: 20px;\n            padding-right: 5px;\n            cursor: pointer;\n        }\n\n        span {\n            cursor: pointer;\n            position: relative;\n            font-size: 13px;\n            letter-spacing: 1.42px;\n\n            &:after {\n                content: "";\n                height: 2px;\n                position: absolute;\n                left: 0;\n                right: 0;\n                bottom: -6px;\n                background: white;\n                opacity: 0;\n                transform-origin: left center;\n                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.96) 0s;\n                transform: scaleX(0);\n            }\n        }\n        &:hover {\n            span:after {\n                transform: scaleX(1);\n                opacity: 1;\n            }\n        }\n\n\n    }\n\n']))),H=R.a.img(v||(v=Object(k.a)(["\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    cursor: pointer;\n    \n"]))),V=R.a.div(w||(w=Object(k.a)(["\n    border: 1px solid #f9f9f9;\n    padding: 8px 16px;\n    border-radius: 4px;\n    letter-spacing: 1.5px;\n    text-transform: uppercase;\n    background-color: rgba(0, 0, 0, 0.6);\n    transition: all 0.2s ease 0s;\n    cursor: pointer;\n\n    &:hover {\n        background-color: #f9f9f9;\n        color: #000;\n        border-color: transparent;\n    }\n\n"]))),Y=R.a.div(y||(y=Object(k.a)(["\n    flex: 1;\n    display: flex;\n    justify-content: flex-end;\n"]))),q=t(23),K=(t(170),t(171),t(93)),$=t.n(K);var Q,Z,nn,en=function(){return Object(h.jsxs)(tn,Object(q.a)(Object(q.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slideToScroll:1,autoplay:!0}),{},{children:[Object(h.jsx)(rn,{children:Object(h.jsx)("img",{src:"/images/slider-badging.jpg"})}),Object(h.jsx)(rn,{children:Object(h.jsx)("img",{src:"/images/slider-badag.jpg"})}),Object(h.jsx)(rn,{children:Object(h.jsx)("img",{src:"/images/slider-scale.jpg"})}),Object(h.jsx)(rn,{children:Object(h.jsx)("img",{src:"/images/slider-scales.jpg"})})]}))},tn=Object(R.a)($.a)(W||(W=Object(k.a)(["\n    margin-top: 20px;\n\n    ul li button {\n        &:before {\n            font-size: 10px;\n            color: rgb(150, 158, 171);\n        }\n    }\n\n    li.slick-active button:before {\n        color: white;\n    }\n\n    .slick-list {\n        overflow: visible;\n    }\n\n    button {\n        z-index: 1;\n    }\n\n"]))),rn=R.a.div(P||(P=Object(k.a)(["\n    cursor: pointer;\n\n    img {\n        border: 2px solid transparent;\n        width: 100%;\n        height: 100%;\n        border-radius: 5px;\n        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px , rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n        transition-duration: 300ms ;\n\n        &:hover {\n            border: 2px solid rgba(249, 249, 249, 0.8);\n\n        }\n\n    }\n\n"]))),cn=t(28),an=Object(b.c)({name:"movie",initialState:{movies:[]},reducers:{setMovies:function(n,e){n.movies=e.payload}}}),on=an.actions.setMovies,sn=function(n){return n.movie.movies},dn=an.reducer;var pn,ln,bn=function(){var n=Object(s.c)(sn);return Object(h.jsxs)(jn,{children:[Object(h.jsx)("h4",{children:"Recommended for You"}),Object(h.jsx)(xn,{children:n&&n.map((function(n){return Object(h.jsx)(gn,{children:Object(h.jsx)(cn.b,{to:"/detail/".concat(n.id),children:Object(h.jsx)("img",{src:n.cardImg})})},n.id)}))})]})},jn=R.a.div(Q||(Q=Object(k.a)(["\n    \n"]))),xn=R.a.div(Z||(Z=Object(k.a)(["\n    display: grid;\n    grid-gap: 25px;\n    grid-template-columns: repeat(4, minmax(0,1fr));\n   \n"]))),gn=R.a.div(nn||(nn=Object(k.a)(["\n    border-radius: 10px;\n    overflow: hidden;\n    border: 2px solid rgba(249, 249, 249, 0.1);\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px , rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.96) 0s;\n    cursor: pointer;\n    \n\n\n    img {\n        height: 100%;\n        width: 100%;\n        object-fit: cover;\n    }\n\n    &:hover {\n        transform: scale(1.05);\n        border-color: rgba(249, 249, 249, 0.8);\n        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px , rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    }\n\n\n"])));var un,hn=function(){return Object(h.jsxs)(mn,{children:[Object(h.jsx)(On,{children:Object(h.jsx)("img",{src:"/images/viewers-disney.png"})}),Object(h.jsx)(On,{children:Object(h.jsx)("img",{src:"/images/viewers-pixar.png"})}),Object(h.jsx)(On,{children:Object(h.jsx)("img",{src:"/images/viewers-marvel.png"})}),Object(h.jsx)(On,{children:Object(h.jsx)("img",{src:"/images/viewers-starwars.png"})}),Object(h.jsx)(On,{children:Object(h.jsx)("img",{src:"/images/viewers-national.png"})})]})},mn=R.a.div(pn||(pn=Object(k.a)(["\n    margin-top: 30px;\n    display: grid;\n    padding: 30px 0 26px;\n    grid-gap: 25px;\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n    \n\n"]))),On=R.a.div(ln||(ln=Object(k.a)(["\n    border: 3px solid rgba(249, 249, 249, 0.1);\n    border-radius: 10px;\n    cursor: pointer;\n    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.96) 0s;\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px , rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        \n\n    }\n\n    &:hover {\n        transform: scale(1.05);\n        border-color: rgba(249, 249, 249, 0.8);\n        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px , rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    }\n\n"])));var fn,vn,wn,yn,kn,_n,zn,Sn,An,Cn,In=function(){var n=Object(s.b)();return Object(i.useEffect)((function(){I.collection("movies").onSnapshot((function(e){var t=e.docs.map((function(n){return Object(q.a)({id:n.id},n.data())}));n(on(t))}))}),[]),Object(h.jsxs)(Rn,{children:[Object(h.jsx)(en,{}),Object(h.jsx)(hn,{}),Object(h.jsx)(bn,{})]})},Rn=R.a.main(un||(un=Object(k.a)(['\n    min-height: calc(100vh - 70px);\n    padding: 0 calc(3.5vw + 5px);\n    position: relative;\n    overflow-x: hidden;\n   \n\n    &:before {\n        background: url("/images/home-background.png") center center / cover no-repeat fixed;\n        content: "";\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        z-index:-1;\n    }\n\n'])));var En,Ln,Bn,Dn,Tn,Gn,Jn=function(){var n=Object(E.g)().id,e=Object(i.useState)(),t=Object(o.a)(e,2),r=t[0],c=t[1];return Object(i.useEffect)((function(){I.collection("movies").doc(n).get().then((function(n){n.exists&&c(n.data())}))}),[n]),Object(h.jsx)(Mn,{children:r&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Wn,{children:Object(h.jsx)("img",{src:r.backgroundImg})}),Object(h.jsx)(Pn,{children:Object(h.jsx)("img",{src:r.titleImg})}),Object(h.jsxs)(Un,{children:[Object(h.jsxs)(Nn,{children:[Object(h.jsx)("img",{src:"/images/play-icon-black.png"}),Object(h.jsx)("span",{children:"PLAY"})]}),Object(h.jsxs)(Xn,{children:[Object(h.jsx)("img",{src:"/images/play-icon-white.png"}),Object(h.jsx)("span",{children:"TRAILER"})]}),Object(h.jsx)(Fn,{children:Object(h.jsx)("span",{children:"+"})}),Object(h.jsx)(Hn,{children:Object(h.jsx)("img",{src:"/images/group-icon.png"})})]}),Object(h.jsx)(Vn,{children:r.subTitle}),Object(h.jsx)(Yn,{children:r.description})]})})},Mn=R.a.div(fn||(fn=Object(k.a)(["\n    min-height: calc(100vh - 70px);\n    padding: 0 calc(3.5vw + 5px);\n    position: relative;\n"]))),Wn=R.a.div(vn||(vn=Object(k.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n    opacity: 0.8;\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n    }\n\n"]))),Pn=R.a.div(wn||(wn=Object(k.a)(["\n    height: 30vh;\n    width: 35vw;\n    min-height: 170px;\n    min-width: 200px;\n    margin-top: 60px;\n\n    img {\n        height: 100%;\n        width: 100%;\n        object-fit: contain;\n    }\n\n"]))),Un=R.a.div(yn||(yn=Object(k.a)(["\n    display: flex;\n    align-items: center;\n    \n"]))),Nn=R.a.button(kn||(kn=Object(k.a)(["\n    border-radius: 4px;\n    font-size: 15px;\n    display: flex;\n    align-items: center;\n    height: 56px;\n    cursor: pointer;\n    border: none;\n    padding: 0 24px;\n    margin-right: 22px;\n    letter-spacing: 1.8px;\n    background: rgb(249, 249, 249);\n\n    &:hover {\n        background: rgb(198, 198, 198);\n    }\n\n"]))),Xn=Object(R.a)(Nn)(_n||(_n=Object(k.a)(["\n    background: rgb(0, 0, 0, 0.3);\n    border: 1px solid rgb(249, 249, 249);\n    color: rgb(249, 249, 249);\n\n"]))),Fn=R.a.button(zn||(zn=Object(k.a)(["\n    height: 44px;\n    width: 44px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    cursor: pointer;\n    border: 2px solid white ;\n    background: rgba(0, 0, 0, 0.6);\n    color: white;\n    margin-right: 16px;\n\n    span {\n        font-size: 30px;\n\n    }\n\n"]))),Hn=Object(R.a)(Fn)(Sn||(Sn=Object(k.a)(["\n    background: rgb(0, 0, 0);\n\n"]))),Vn=R.a.div(An||(An=Object(k.a)(["\n    color: rgb(249, 249, 249);\n    font-size: 15px;\n    min-height: 20px;\n    margin-top: 26px;\n"]))),Yn=R.a.div(Cn||(Cn=Object(k.a)(["\n    line-height: 1.4;\n    font-size: 20px;\n    margin-top: 16px;\n    max-width: 760px;\n    color: rgb(249, 249, 249);\n"])));var qn=function(){return Object(h.jsx)(Kn,{children:Object(h.jsxs)($n,{children:[Object(h.jsx)(Qn,{src:"/images/cta-logo-one.svg"}),Object(h.jsx)(Zn,{children:"Get All There"}),Object(h.jsx)(ne,{children:"Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1."}),Object(h.jsx)(ee,{src:"/images/cta-logo-two.png"})]})})},Kn=R.a.div(En||(En=Object(k.a)(['\n    position: relative;\n    height: calc(100vh - 70px);\n    display: flex;\n    align-items: top;\n    \n    justify-content: center;\n\n    &:before {\n        background-position: top;\n        background-size: cover;\n        position: absolute;\n        background-repeat: no-repeat;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        opacity: 0.7;\n        content: "";\n        background-image: url("/images/login-background.jpg");\n        z-index: -1;\n    }\n\n\n']))),$n=R.a.div(Ln||(Ln=Object(k.a)(["\n    max-width: 650px;\n    padding: 80px 40px;\n    width: 90%;\n    display: flex;\n    margin-top: 100px;\n    align-items: center;\n    flex-direction: column;\n\n"]))),Qn=R.a.img(Bn||(Bn=Object(k.a)(["\n\n"]))),Zn=R.a.a(Dn||(Dn=Object(k.a)(["\n    width: 100%;\n    background-color: #0063e5;\n    font-weight: bold;\n    padding: 20px;\n    border-radius: 4px;\n    text-align: center;\n    cursor: pointer;\n    color: #f9f9f9;\n    font-size: 18px;\n    transition: all 250ms;\n    letter-spacing: 1.5px;\n    margin-top: 10px;\n    margin-bottom: 12px;\n\n\n    &:hover {\n        background: #0483ee;\n    }\n\n"]))),ne=R.a.p(Tn||(Tn=Object(k.a)(["\n    font-size: 11px;\n    text-align: center;\n    line-height: 1.5;\n    letter-spacing: 1.5px;\n"]))),ee=R.a.img(Gn||(Gn=Object(k.a)(["\n    width: 90%;\n    \n"])));var te=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(cn.a,{children:[Object(h.jsx)(U,{}),Object(h.jsxs)(E.c,{children:[Object(h.jsx)(E.a,{path:"/login",children:Object(h.jsx)(qn,{})}),Object(h.jsx)(E.a,{path:"/detail/:id",children:Object(h.jsx)(Jn,{})}),Object(h.jsx)(E.a,{path:"/",children:Object(h.jsx)(In,{})})]})]})})},ie=Object(b.a)({reducer:{movie:dn,user:M}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(s.a,{store:ie,children:Object(h.jsx)(te,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},19:function(n,e,t){n.exports={row:"Counter_row__1wCoC",value:"Counter_value__2aJD0",button:"Counter_button__3fw7w",textbox:"Counter_textbox__1oAib",asyncButton:"Counter_asyncButton__D7ZtJ Counter_button__3fw7w"}},98:function(n,e,t){}},[[189,1,2]]]);
//# sourceMappingURL=main.14938872.chunk.js.map