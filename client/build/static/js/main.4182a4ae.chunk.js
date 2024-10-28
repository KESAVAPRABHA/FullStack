(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{120:function(e,t,n){},121:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(1),r=n.n(c),s=n(24),o=n.n(s),i=(n(84),n(8)),l=n(11),j=n(9),u=n(10),b=n.n(u),h=n(15),d=n(129),O=n(130),m=n(72),x=n(7),p=n(135),f=n(128);var v=function(e){var t=e.book,n=e.onDelete;return Object(a.jsxs)(p.a,{style:{width:"325px",backgroundColor:"#dcf8e8"},className:"p-4",children:[t.image&&Object(a.jsx)(p.a.Img,{variant:"top",src:t.image,style:{height:320}}),Object(a.jsxs)(p.a.Body,{children:[t.title&&Object(a.jsx)(p.a.Title,{style:{color:"#306"},children:t.title}),t.authors&&Object(a.jsx)(p.a.Text,{className:"font-italic text-muted",children:"By: ".concat(t.authors.join(", "))}),t.description&&Object(a.jsxs)(p.a.Text,{children:[t.description.substr(0,100),"..."]}),t.infoLink&&Object(a.jsx)(p.a.Text,{children:Object(a.jsx)("a",{href:t.infoLink,target:"_blank",rel:"noreferrer",children:"View Details"})}),Object(a.jsx)(f.a,{variant:"warning",onClick:function(){return n(t)},children:"Remove"})]})]})};var g=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){function e(){return(e=Object(h.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3000/api/books");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Failed to fetch saved books");case 6:return e.next=8,t.json();case 8:n=e.sent,r(n.data),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),x.c.error("Error getting saved books",{position:x.c.POSITION.TOP_CENTER});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var s=function(){var e=Object(h.a)(b.a.mark((function e(t){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3000/api/books/".concat(t.id),{headers:{"Content-Type":"application/json"},method:"DELETE"});case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,console.log(c),console.log("Deleting book with _id:",t._id),c.success?(r(n.filter((function(e){return e._id!==t._id}))),x.c.success("The book has been removed successfully!",{position:x.c.POSITION.TOP_CENTER})):x.c.error("Error removing book",{position:x.c.POSITION.TOP_CENTER}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),x.c.error("Error removing book",{position:x.c.POSITION.TOP_CENTER});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"kesavaprabhal.22cse@kongu.edu",e.next=4,fetch("http://localhost:3000/api/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userEmail:"kesavaprabhal.22cse@kongu.edu",books:n})});case 4:if(e.sent.ok){e.next=7;break}throw new Error("Failed to send email");case 7:x.c.success("Email sent successfully!",{position:x.c.POSITION.TOP_CENTER}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error sending email:",e.t0),x.c.error("Error sending email",{position:x.c.POSITION.TOP_CENTER});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(d.a,{fluid:!0,className:"my-5 p-3 ml-5",children:[Object(a.jsxs)(O.a,{className:"mx-auto",children:[Object(a.jsx)("h3",{className:"px-3 mx-5 font-weight-bold",style:{color:"#fb2"},children:"Saved Books"}),Object(a.jsx)("button",{onClick:o,className:"ml-3 btn btn-primary",children:"Send Saved Books to Email"})]}),Object(a.jsx)(O.a,{className:"ml-5",children:n.length>0?n.map((function(e){return Object(a.jsx)(m.a,{className:"my-3",children:Object(a.jsx)(v,{book:e,onDelete:s})},e.id)})):Object(a.jsx)(m.a,{children:Object(a.jsx)("h5",{children:"No saved books found."})})})]})},k=n(131),N=function(){return Object(a.jsxs)("div",{className:"m-5 p-5",children:[Object(a.jsx)("h1",{children:"Loading..."}),Object(a.jsx)(k.a,{animation:"border",variant:"primary",className:"mx-5"}),Object(a.jsx)(k.a,{animation:"border",variant:"success"}),Object(a.jsx)(k.a,{animation:"border",variant:"danger",className:"mx-5"}),Object(a.jsx)(k.a,{animation:"border",variant:"warning"})]})};var y,T=function(){return Object(a.jsxs)("div",{className:"text-center m-5 p-5",children:[Object(a.jsx)("h1",{children:"404... Not Found"}),";",Object(a.jsxs)("h2",{children:[Object(a.jsx)(l.b,{to:"/",children:"Click HERE"})," to Search Books"]})]})},w=n(18),E=Object(c.createContext)(),I={books:[]},S=function(e,t){switch(t.type){case"searchResult":return Object(w.a)(Object(w.a)({},e),{},{books:t.payload});default:return e}},C=function(e){var t=Object(c.useReducer)(S,I),n=Object(i.a)(t,2),r=n[0],s=n[1];return Object(a.jsx)(E.Provider,Object(w.a)({value:[r,s]},e))},P=function(){return Object(c.useContext)(E)},L=n(74),R=n.n(L);var _=function(){var e=P(),t=Object(i.a)(e,1)[0].books,n=Object(c.useState)([]),r=Object(i.a)(n,2),s=r[0],o=r[1];Object(c.useEffect)((function(){return(y=R()("http://localhost:3000")).on("connect",(function(){console.log("Connected to the socket server")})),y.on("saved book title",(function(e){x.c.success("Saved a book titled ".concat(e),{position:x.c.POSITION.TOP_CENTER})})),y.on("connect_error",(function(e){console.error("Socket connection error:",e)})),function(){y.disconnect()}}),[]),Object(c.useEffect)((function(){(function(){var e=Object(h.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3000/api/recommendations");case 3:if(!(t=e.sent).ok){e.next=11;break}return e.next=7,t.json();case 7:n=e.sent,o(n),e.next=12;break;case 11:console.warn("Failed to fetch recommendations:",t.statusText);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error("Error fetching recommendations:",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var l=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a,c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3000/api/books",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({id:t.id,title:t.volumeInfo.title,authors:t.volumeInfo.authors,description:t.volumeInfo.description,infoLink:t.volumeInfo.infoLink,image:null===(n=t.volumeInfo.imageLinks)||void 0===n?void 0:n.thumbnail})});case 3:if((a=e.sent).ok){e.next=9;break}return e.next=7,a.json();case 7:throw c=e.sent,new Error(c.message||"Error saving the book");case 9:return e.next=11,a.json();case 11:(r=e.sent).success?y.emit("save book",r.data.title):x.c.warning("This book is already saved!",{position:x.c.POSITION.TOP_CENTER}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.error("Error saving book:",e.t0),x.c.error("Error saving book: "+e.t0.message,{position:x.c.POSITION.TOP_CENTER});case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(d.a,{className:"my-5 p-3",children:[Object(a.jsx)(O.a,{className:"mx-5",children:t&&t.map((function(e,t){return Object(a.jsx)(m.a,{className:"mb-4",children:Object(a.jsxs)(p.a,{style:{width:"300px",height:"700px",backgroundColor:"#deeaf7"},className:"p-4",children:[e.volumeInfo.imageLinks&&Object(a.jsx)(p.a.Img,{variant:"top",src:e.volumeInfo.imageLinks.thumbnail,style:{height:320}}),Object(a.jsxs)(p.a.Body,{children:[Object(a.jsx)(p.a.Title,{children:e.volumeInfo.title}),e.volumeInfo.authors&&Object(a.jsxs)(p.a.Title,{className:"font-italic text-muted",style:{fontSize:"1.1rem"},children:["By: ",e.volumeInfo.authors.join(", ")]}),e.volumeInfo.description&&Object(a.jsx)(p.a.Text,{children:e.volumeInfo.description.substr(0,100)}),e.volumeInfo.infoLink&&Object(a.jsx)(p.a.Text,{children:Object(a.jsx)("a",{href:e.volumeInfo.infoLink,target:"_blank",rel:"noreferrer",children:"View Details"})}),Object(a.jsx)("div",{className:"mt-4",children:Object(a.jsx)(f.a,{size:"sm",variant:"warning",onClick:function(){return l(e)},children:"Save Book"})})]})]})},t)}))}),Object(a.jsx)("h3",{className:"my-5",children:"You May Also Like"}),Object(a.jsx)(O.a,{className:"mx-5",children:s.length>0?s.map((function(e,t){return Object(a.jsx)(m.a,{className:"mb-4",children:Object(a.jsxs)(p.a,{style:{width:"300px",height:"700px",backgroundColor:"#deeaf7"},className:"p-4",children:[e.image?Object(a.jsx)(p.a.Img,{variant:"top",src:e.image,style:{height:320}}):Object(a.jsx)(p.a.Img,{variant:"top",src:"default-thumbnail.jpg",style:{height:320}}),Object(a.jsxs)(p.a.Body,{children:[Object(a.jsx)(p.a.Title,{children:e.title||"Untitled"}),e.authors&&Object(a.jsxs)(p.a.Text,{className:"font-italic text-muted",children:["By: ",e.authors.join(", ")]}),e.infoLink&&Object(a.jsx)(p.a.Text,{children:Object(a.jsx)("a",{href:e.infoLink,target:"_blank",rel:"noreferrer",children:"View Details"})})]})]})},t)})):Object(a.jsx)("p",{children:"No recommendations available."})})]})},B=n(132);n(120);var D=function(){var e=P(),t=Object(i.a)(e,2)[1],n=Object(c.useState)(!1),r=Object(i.a)(n,2),s=r[0],o=r[1],l=Object(c.useState)(!1),j=Object(i.a)(l,2),u=j[0],O=j[1],m=Object(c.useRef)(),p=function(){var e=Object(h.a)(b.a.mark((function e(n){var a,c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),o(!0),O(!1),e.prev=3,a=m.current.value.trim(),console.log("Searching for:",a),a){e.next=10;break}return x.c.error("Please enter a search term.",{position:x.c.POSITION.TOP_CENTER}),o(!1),e.abrupt("return");case 10:return e.next=12,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(a,"&key=").concat("AIzaSyBrUERf8QOfwiiXD7ppYKKIm7_5Mcgdj4Y"));case 12:if((c=e.sent).ok){e.next=15;break}throw new T("Error: ".concat(c.statusText));case 15:return e.next=17,c.json();case 17:r=e.sent,console.log("API Response:",r),r.items&&0!==r.items.length?t({type:"searchResult",payload:r.items}):x.c.info("No books found for this search.",{position:x.c.POSITION.TOP_CENTER}),e.next=27;break;case 22:e.prev=22,e.t0=e.catch(3),O(!0),console.error(e.t0),x.c.error("Error fetching books: "+e.t0.message,{position:x.c.POSITION.TOP_CENTER});case 27:return e.prev=27,o(!1),m.current.value="",m.current.focus(),e.finish(27);case 32:case"end":return e.stop()}}),e,null,[[3,22,27,32]])})));return function(t){return e.apply(this,arguments)}}();return s?Object(a.jsx)("main",{children:Object(a.jsx)(N,{})}):u?Object(a.jsx)("main",{children:Object(a.jsx)(T,{})}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(B.a,{fluid:!0,className:"jumbotron",children:Object(a.jsxs)(d.a,{className:"d-flex flex-column justify-content-center align-items-center",children:[Object(a.jsx)("h1",{className:"Search-title bg-light p-1 mt-5",children:"Discover the Book of Your Interests"}),Object(a.jsxs)("form",{onSubmit:p,children:[Object(a.jsx)("label",{htmlFor:"query"}),Object(a.jsx)("input",{className:"Search-input",required:!0,id:"query",name:"query",ref:m,placeholder:"Enter a Book or Author name ... ",type:"text"}),Object(a.jsx)(f.a,{size:"sm",type:"submit",children:"Search"})]})]})}),Object(a.jsx)(_,{})]})};n(121);var A=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(j.g)();return Object(c.useEffect)((function(){"/save"===s.pathname&&r(!0),"/"===s.pathname&&r(!1)}),[s.pathname]),Object(a.jsxs)("nav",{className:"Navbar",children:[Object(a.jsx)("div",{className:"Navbar-brand",children:Object(a.jsxs)(l.b,{to:"/",children:[Object(a.jsx)("img",{src:"assets/book-logo.png",style:{width:120,height:60},alt:"book-logo"})," "]})}),Object(a.jsxs)("ul",{className:"Navbar-links",children:[n&&Object(a.jsx)("li",{className:"Navbar-link",children:Object(a.jsx)(l.b,{to:"/search",children:" Search Books "})}),!n&&Object(a.jsx)("li",{className:"Navbar-link",children:Object(a.jsx)(l.b,{to:"/save",children:" View Saved Books "})})]})]})},q=n(134),F=n(77),z=n(78);var J=function(){return Object(a.jsx)("footer",{children:Object(a.jsx)(q.a,{bg:"dark",fixed:"bottom",className:"Footer justify-content-around",children:Object(a.jsxs)("div",{children:[Object(a.jsxs)(l.b,{to:"/",className:"pl-2",children:[Object(a.jsx)(F.a,{size:22,style:{fill:"#1c0"}})," "]})," ",Object(a.jsx)(l.b,{to:"/save",className:"px-2",children:Object(a.jsx)(z.a,{size:20,style:{fill:"#fb2"}})})]})})})};var G=function(e){var t=e.location;return Object(a.jsxs)("div",{className:"text-center m-5",children:[Object(a.jsxs)("h2",{children:["No match for the path ",Object(a.jsx)("code",{children:t.pathname})]}),Object(a.jsxs)("h3",{children:[Object(a.jsx)(l.b,{to:"/",children:"Click HERE"})," to Search Books"]})]})},V=n(29),Y=n(136),M=n(133);var U=function(e){var t=e.setIsLogin,n=Object(c.useState)({email:"",password:""}),r=Object(i.a)(n,2),s=r[0],o=r[1],u=Object(c.useState)(""),O=Object(i.a)(u,2),m=O[0],x=O[1],p=Object(c.useState)(""),v=Object(i.a)(p,2),g=v[0],k=v[1],N=Object(j.f)(),y=function(e){var t=e.target,n=t.name,a=t.value;o(Object(w.a)(Object(w.a)({},s),{},Object(V.a)({},n,a)))},T=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),x(""),k(""),e.prev=3,e.next=6,fetch("http://localhost:3000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 6:return n=e.sent,e.next=9,n.json();case 9:(a=e.sent).success?(k("Login successful!"),setTimeout((function(){N.push("/save")}),2e3)):x(a.message||"Login failed. Please try again."),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),x("An error occurred. Please try again later.");case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(d.a,{className:"mt-5",children:[Object(a.jsx)("h2",{className:"text-center",children:"Login"}),m&&Object(a.jsx)(Y.a,{variant:"danger",children:m}),g&&Object(a.jsx)(Y.a,{variant:"success",children:g}),Object(a.jsxs)(M.a,{onSubmit:T,children:[Object(a.jsxs)(M.a.Group,{controlId:"formEmail",children:[Object(a.jsx)(M.a.Label,{children:"Email address"}),Object(a.jsx)(M.a.Control,{type:"email",placeholder:"Enter email",name:"email",onChange:y,required:!0})]}),Object(a.jsxs)(M.a.Group,{controlId:"formPassword",children:[Object(a.jsx)(M.a.Label,{children:"Password"}),Object(a.jsx)(M.a.Control,{type:"password",placeholder:"Password",name:"password",onChange:y,required:!0})]}),Object(a.jsx)(f.a,{variant:"primary",type:"submit",className:"w-100",children:"Login"})]}),Object(a.jsxs)("div",{className:"text-center mt-3",children:[Object(a.jsx)("span",{children:"Don't have an account? "}),Object(a.jsx)(l.b,{to:"#",onClick:function(){return t(!1)},children:"Create a new account"})]})]})};var H=function(e){var t=e.setIsLogin,n=Object(c.useState)({email:"",password:""}),r=Object(i.a)(n,2),s=r[0],o=r[1],u=Object(c.useState)(""),O=Object(i.a)(u,2),m=O[0],x=O[1],p=Object(c.useState)(""),v=Object(i.a)(p,2),g=v[0],N=v[1],y=Object(c.useState)(!1),T=Object(i.a)(y,2),E=T[0],I=T[1],S=Object(j.f)(),C=function(e){var t=e.target,n=t.name,a=t.value;o(Object(w.a)(Object(w.a)({},s),{},Object(V.a)({},n,a)))},P=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),x(""),N(""),I(!0),e.prev=4,e.next=7,fetch("https://localhost:3000/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 7:return n=e.sent,e.next=10,n.json();case 10:(a=e.sent).success?(N("Account created successfully! Redirecting to login..."),setTimeout((function(){S.push("/")}),2e3)):x(a.message||"Signup failed. Please try again."),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),x("An error occurred. Please try again later.");case 17:return e.prev=17,I(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[4,14,17,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(d.a,{className:"mt-5",children:[Object(a.jsx)("h2",{className:"text-center",children:"Create Account"}),m&&Object(a.jsx)(Y.a,{variant:"danger",children:m}),g&&Object(a.jsx)(Y.a,{variant:"success",children:g}),Object(a.jsxs)(M.a,{onSubmit:P,children:[Object(a.jsxs)(M.a.Group,{controlId:"formEmail",children:[Object(a.jsx)(M.a.Label,{children:"Email address"}),Object(a.jsx)(M.a.Control,{type:"email",placeholder:"Enter email",name:"email",onChange:C,required:!0})]}),Object(a.jsxs)(M.a.Group,{controlId:"formPassword",children:[Object(a.jsx)(M.a.Label,{children:"Password"}),Object(a.jsx)(M.a.Control,{type:"password",placeholder:"Password",name:"password",onChange:C,required:!0})]}),Object(a.jsx)(f.a,{variant:"primary",type:"submit",className:"w-100",disabled:E,children:E?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(k.a,{animation:"border",size:"sm"})," Loading..."]}):"Sign Up"})]}),Object(a.jsxs)("div",{className:"text-center mt-3",children:[Object(a.jsx)("span",{children:"Already have an account? "}),Object(a.jsx)(l.b,{to:"#",onClick:function(){return t(!0)},children:"Login"})]})]})};n(123),n(124);var K=function(){var e=Object(c.useState)(!0),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.jsx)(l.a,{children:Object(a.jsxs)(C,{children:[Object(a.jsx)(A,{}),Object(a.jsxs)("main",{className:"App",children:[Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{exact:!0,path:"/",children:n?Object(a.jsx)(U,{setIsLogin:r}):Object(a.jsx)(H,{setIsLogin:r})}),Object(a.jsx)(j.a,{exact:!0,path:"/save",component:g}),Object(a.jsx)(j.a,{exact:!0,path:"/search",component:D}),Object(a.jsx)(j.a,{component:G})]}),Object(a.jsx)(x.a,{transition:x.b,autoClose:3e3})]}),Object(a.jsx)(J,{})]})})};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(K,{})}),document.getElementById("root"))},84:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.4182a4ae.chunk.js.map