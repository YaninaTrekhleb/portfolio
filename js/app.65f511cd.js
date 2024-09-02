(function(){"use strict";var e={1026:function(e,a,t){var n=t(3751),i=t(641);const r={id:"app",class:""};function s(e,a,t,n,s,o){const A=(0,i.g2)("Header"),m=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)("div",r,[(0,i.bF)(A),(0,i.bF)(m)])}const o={id:"header"},A={class:"fixed flex flex-row py-4 top-0 left-0 w-full bg-white bg-opacity-90"},m={class:"flex justify-center w-full text-base"};function g(e,a,t,n,r,s){const g=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("div",o,[(0,i.Lk)("header",A,[(0,i.Lk)("nav",m,[(0,i.bF)(g,{to:"/",class:"pl-3 pr-3 hover:text-indigo-400"},{default:(0,i.k6)((()=>[(0,i.eW)("About")])),_:1}),(0,i.bF)(g,{to:"/Projects",class:"pl-3 pr-3 hover:text-indigo-400"},{default:(0,i.k6)((()=>[(0,i.eW)("Projects")])),_:1}),(0,i.bF)(g,{to:"/Certificates",class:"pl-3 pr-3 hover:text-indigo-400"},{default:(0,i.k6)((()=>[(0,i.eW)("Certificates")])),_:1})])])])}var c={name:"Header"},l=t(6262);const u=(0,l.A)(c,[["render",g]]);var p=u,d={name:"App",components:{Header:p}};const b=(0,l.A)(d,[["render",s]]);var f=b,h=t(5220),I=t(33),C=t.p+"img/avatar-image.c669ee7b.jpg",k=t.p+"img/linkedin-logo.01a200b3.png",v=t.p+"img/github-logo-icon.b69b21ac.png",j=t.p+"img/instagram-logo.4f4ca758.png",w=t.p+"img/youtube-logo.a3b7160c.png",y="data:image/png;base64,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";const x={id:"profile"},D={class:"flex flex-col justify-center items-center h-auto w-auto sm:flex-row"},q=(0,i.Lk)("div",{class:"avatar mr-6 mb-6 sm:mb-0"},[(0,i.Lk)("img",{class:"rounded-full h-64 w-64",src:C,alt:"avatar-image"})],-1),L={class:"about flex flex-col justify-center items-center sm:items-start"},B={class:"flex flex-row text-3xl text-center mb-3 font-normal text-black text-4xl"},M={class:"mb-3 text-lg"},S=(0,i.Lk)("span",null,"📧 ",-1),V={class:"mb-3 text-base"},F=(0,i.Lk)("span",null,"📍",-1),N=(0,i.Fv)('<div class="skills mb-3"><span class="inline-block bg-gray-200 rounded-sm px-2 py-1 text-sm font-normal mr-2 mb-2 last:mr-0"> html </span><span class="inline-block bg-gray-200 rounded-sm px-2 py-1 text-sm font-normal mr-2 mb-2 last:mr-0"> css </span><span class="inline-block bg-gray-200 rounded-sm px-2 py-1 text-sm font-normal mr-2 mb-2 last:mr-0"> javascript </span><span class="inline-block bg-gray-200 rounded-sm px-2 py-1 text-sm font-normal mr-2 mb-2 last:mr-0"> outlook mso code </span><span class="inline-block bg-gray-200 rounded-sm px-2 py-1 text-sm font-normal mr-2 mb-2 last:mr-0"> sql </span></div><div class="contact-links flex flex-row justify-center w-full sm:justify-start"><a href="https://www.linkedin.com/in/yanina-trekhleb/" target="_blank" class="mr-2 w-8"><img src="'+k+'" alt="linkedin-logo"></a><a href="https://github.com/YaninaTrekhleb" target="_blank" class="mr-2 w-8"><img src="'+v+'" alt="github-logo"></a><a href="https://www.instagram.com/home_full_of_recipes/" target="_blank" class="mr-2 w-8"><img src="'+j+'" alt="instagram-logo"></a><a href="https://www.youtube.com/c/HomefullofrecipesCookingchannel" target="_blank" class="mr-2 w-8"><img src="'+w+'" alt="youtube-logo"></a><a href="https://www.udemy.com/course/ukrainian-cooking-authentic-ukrainian-recipes-course/" target="_blank" class="mr-2 w-8"><img src="'+y+'" alt="udemy-logo"></a></div>',2);function T(e,a,t,n,r,s){return(0,i.uX)(),(0,i.CE)("div",x,[(0,i.Lk)("section",D,[q,(0,i.Lk)("div",L,[(0,i.Lk)("h2",B,(0,I.v_)(r.fullName),1),(0,i.Lk)("p",M,[S,(0,i.eW)((0,I.v_)(r.position),1)]),(0,i.Lk)("p",V,[F,(0,i.eW)((0,I.v_)(r.location),1)]),N])])])}var E={name:"Profile",data(){return{fullName:"Yanina Trekhleb",position:"Campaign Developer",location:"Amsterdam, The Netherlands"}}};const U=(0,l.A)(E,[["render",T]]);var W=U;const P={id:"projects"},Q=(0,i.Lk)("h3",{class:"text-4xl font-semibold text-gray-700 pt-4 mb-4"},"Projects",-1),X={class:"grid grid-cols-1 gap-8 mx-10 sm:grid-cols-3"};function J(e,a,t,n,r,s){const o=(0,i.g2)("Project");return(0,i.uX)(),(0,i.CE)("div",P,[(0,i.Lk)("section",null,[Q,(0,i.Lk)("div",X,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.projects,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.name},[(0,i.bF)(o,{project:e},null,8,["project"])])))),128))])])])}const R=[{name:"How can I help Ukraine?",url:"https://yaninatrekhleb.github.io/standWithUkraine/",img:t(5387),date:"Mar 2022 - Mar 2022",tags:[{name:"jQuery"},{name:"javascript"},{name:"html/css"}]},{name:"Test assignment for Media.Monks company interview",url:"https://github.com/YaninaTrekhleb/portfolio/blob/main/src/images/projects-img/media-monks-desktop.gif",img:t(2260),date:"Feb 2022 - Mar 2022",tags:[{name:"javascript"},{name:"dom"},{name:"html/css"}]},{name:"Birthday Reminder",url:"https://yaninatrekhleb.github.io/birthday-reminder-react/",img:t(4862),date:"Feb 2022 - Feb 2022",tags:[{name:"react.js"},{name:"javascript"},{name:"html/css"}]},{name:"Food Menu",url:"https://yaninatrekhleb.github.io/food-menu/",img:t(1078),date:"Dec 2021 - Dec 2021",tags:[{name:"react.js"},{name:"javascript"},{name:"html/css"}]},{name:"Animated Banner",url:"https://yaninatrekhleb.github.io/animated-banner-bootstrap/",img:t(3351),date:"Apr 2021 - Apr 2021",tags:[{name:"landing page"},{name:"bootstrap"},{name:"html/css"}]},{name:"To Do List Vue",url:"https://yaninatrekhleb.github.io/to-do-list-vue/",img:t(2303),date:"Oct 2020 - Nov 2020",tags:[{name:"vue.js"},{name:"javascript"},{name:"html/css"}]},{name:"Public API",url:"https://yaninatrekhleb.github.io/public-api/",img:t(7997),date:"Aug 2020 - Sep 2020",tags:[{name:"vue.js"},{name:"javascript"},{name:"html/css"},{name:"api"}]},{name:"Weather App Vue",url:"https://yaninatrekhleb.github.io/weatherApp-vueJs/",img:t(4473),date:"Aug 2020 - Aug 2020",tags:[{name:"vue.js"},{name:"javascript"},{name:"html/css"},{name:"api"}]},{name:"Food Blog",url:"https://yaninatrekhleb.github.io/food-blog-sass/",img:t(2745),date:"Jun 2020 - Jun 2020",tags:[{name:"html/css"},{name:"sass"},{name:"landing page"}]},{name:"To Do List React",url:"https://yaninatrekhleb.github.io/to-do-list/",img:t(8146),date:"Apr 2020 - May 2020",tags:[{name:"react.js"},{name:"html/css"},{name:"javascript"}]},{name:"Things to do on quarantine",url:"https://yaninatrekhleb.github.io/quarantine-what-to-do/",img:t(5838),date:"Apr 2020 - Apr 2020",tags:[{name:"react.js"},{name:"javascript"},{name:"html/css"}]},{name:"Tip Calculator",url:"https://yaninatrekhleb.github.io/tip-calculator/index.html",img:t(3960),date:"Oct 2019 - Nov 2019",tags:[{name:"javascript"},{name:"html/css"}]},{name:"Restaurant Landing Page",url:"https://yaninatrekhleb.github.io/restaurant-website/",img:t(1143),date:"Sep 2019 - Sep 2019",tags:[{name:"html/css"},{name:"bootstrap"},{name:"landing page"}]},{name:"Succulent Gallery",url:"https://yaninatrekhleb.github.io/succulent-gallery/",img:t(6586),date:"Feb 2020 - Feb 2020",tags:[{name:"html/css"},{name:"bootstrap"}]},{name:"Luhn algorithm - credit card validity checker",url:"https://yaninatrekhleb.github.io/luhn-algorithm/index.html",img:t(7611),date:"Feb 2020 - Feb 2020",tags:[{name:"javascript"},{name:"algorithm"},{name:"html/css"}]},{name:"10 000 days Birthday",url:"https://yaninatrekhleb.github.io/tenThousandDays/index.html",img:t(9574),date:"Dec 2019 - Dec 2019",tags:[{name:"javascript"},{name:"html/css"}]},{name:"Find a Pet Landing Page",url:"https://yaninatrekhleb.github.io/adopt-a-pet/",img:t(2886),date:"Oct 2019 - Oct 2019",tags:[{name:"html/css"},{name:"bootstrap"},{name:"landing page"}]},{name:"Wedding Agency Landing Page",url:"https://yaninatrekhleb.github.io/wedding-agency-landing-page/",img:t(9556),date:"Sep 2020 - Sep 2020",tags:[{name:"html/css"},{name:"bootstrap"},{name:"landing page"}]},{name:"Learn HTML and CSS from scratch. Practical Exercises",url:"https://yaninatrekhleb.github.io/learn-html-css/",img:t(9962),date:"Sep 2019 - Sep 2019",tags:[{name:"html/css"},{name:"educational material"},{name:"practice"}]},{name:"Sign Up Page Template",url:"https://yaninatrekhleb.github.io/sign-up-page-template/",img:t(9861),date:"Jun 2019 - Jun 2019",tags:[{name:"html/css"},{name:"ui"}]},{name:"Blog Landing Page",url:"https://yaninatrekhleb.github.io/blogger-website-template/",img:t(7512),date:"Mar 2018 - Mar 2018",tags:[{name:"html/css"},{name:"ui"},{name:"landing page"}]},{name:"Cooking blog",url:"https://yaninatrekhleb.github.io/Yanina-s-cooking-blog/",img:t(4200),date:"Feb 2018 - Feb 2018",tags:[{name:"html/css"},{name:"landing page"},{name:"ui"}]}],Y={id:"project",class:"mb-2 bg-gray-50 border-solid border-2 border-gray-50 shadow bg-opacity-0.3 rounded"},G={class:"text-2xl underline font-semibold text-gray-500 hover:text-blue-200 my-2.5 p-2"},O=["href"],H={class:"sm:h-64 overflow-hidden mb-2.5"},K=["href"],Z=["src"],z={class:"mb-2.5"},_={class:"flex flex-row flex-wrap justify-center"},$={class:"inline-block bg-gray-200 rounded-sm px-2 py-1 text-sm font-normal mr-2 mb-2 last:mr-0"};function ee(e,a,t,n,r,s){return(0,i.uX)(),(0,i.CE)("div",Y,[(0,i.Lk)("section",null,[(0,i.Lk)("div",null,[(0,i.Lk)("h3",G,[(0,i.Lk)("a",{href:t.project.url,target:"_blank"},(0,I.v_)(t.project.name),9,O)]),(0,i.Lk)("div",H,[(0,i.Lk)("a",{href:t.project.url,target:"_blank"},[(0,i.Lk)("img",{src:t.project.img,alt:"project-image",class:"h-auto w-full"},null,8,Z)],8,K)]),(0,i.Lk)("p",z,(0,I.v_)(t.project.date),1),(0,i.Lk)("div",_,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t.project.tags,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.name,class:"skills-tag"},[(0,i.Lk)("span",$,(0,I.v_)(e.name),1)])))),128))])])])])}var ae={name:"Project",data(){return{}},props:["project"]};const te=(0,l.A)(ae,[["render",ee]]);var ne=te,ie={name:"Projects",data(){return{projects:R}},components:{Project:ne}};const re=(0,l.A)(ie,[["render",J]]);var se=re;const oe={id:"certificates"},Ae=(0,i.Lk)("h3",{class:"text-4xl font-semibold text-gray-700 pt-4 mb-4"},"Certificates",-1),me={class:"grid grid-cols-1 gap-8 mx-10 sm:grid-cols-3"};function ge(e,a,t,n,r,s){const o=(0,i.g2)("Certificate");return(0,i.uX)(),(0,i.CE)("div",oe,[(0,i.Lk)("section",null,[Ae,(0,i.Lk)("div",me,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.certificates,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.name},[(0,i.bF)(o,{certificate:e},null,8,["certificate"])])))),128))])])])}const ce=[{name:"Digital Marketer Walkthrough",url:"https://github.com/YaninaTrekhleb/portfolio/blob/main/src/images/certificates-img/marigold_digital_marketer_walkthrough_yanina_trekhleb.png",img:t(4164),date:"May 2024 - May 2024",tags:[{name:"engage"},{name:"marketing automation tool"},{name:"omnichannel marketing platform"}]},{name:"Selligent Marketing Cloud - Base",url:"https://github.com/YaninaTrekhleb/portfolio/blob/main/src/images/certificates-img/selligent_base.png",img:t(2763),date:"Sep 2022 - Sep 2022",tags:[{name:"selligent"},{name:"marketing automation tool"},{name:"omnichannel marketing platform"}]},{name:"Customer Analytics and A/B Testing in Python",url:"https://github.com/YaninaTrekhleb/portfolio/blob/main/src/images/certificates-img/a-b-testing-data-camp.jpg",img:t(510),date:"Jan 2022 - Jan 2022",tags:[{name:"python"},{name:"a/b testing"}]},{name:"Foundations: Data, Data, Everywhere",url:"https://github.com/YaninaTrekhleb/portfolio/blob/main/src/images/certificates-img/Google-Data-Part1-Foundations-Data-Data-Everywhere.jpg",img:t(4515),date:"Oct 2021 - Oct 2021",tags:[{name:"data"},{name:"data analysis"}]},{name:"Introduction to Python",url:"https://github.com/YaninaTrekhleb/portfolio/blob/main/src/images/certificates-img/Introduction_to_Python_datacamp.jpg",img:t(4223),date:"Sep 2021 - Oct 2021",tags:[{name:"python"}]},{name:"Google Tag Manager Fundamentals",url:"https://github.com/YaninaTrekhleb/portfolio/blob/main/src/images/certificates-img/Google-Tag-Manager-Fundamentals-Course_Certificate.jpg",img:t(2163),date:"Mar 2021 - Mar 2021",tags:[{name:"google analytics"},{name:"google ads"},{name:"google tag"}]},{name:"Advanced Google Analytics",url:"https://github.com/YaninaTrekhleb/portfolio/blob/main/src/images/certificates-img/Advanced-Google-Analytics-Course_Certificate.jpg",img:t(5499),date:"Mar 2021 - Mar 2021",tags:[{name:"google analytics"},{name:"google ads"}]},{name:"Google Analytics for Beginners",url:"https://github.com/YaninaTrekhleb/portfolio/blob/main/src/images/certificates-img/Google-Analytics-for-Beginners-Course_Certificate_Yanina_Trekhleb.jpg",img:t(9899),date:"Mar 2021 - Mar 2021",tags:[{name:"google analytics"},{name:"google ads"}]},{name:"Learn Vue.js Course",url:"https://github.com/YaninaTrekhleb/portfolio/blob/main/src/images/certificates-img/Learn-Vue.js-Course.jpg",img:t(2490),date:"Jul 2020 - Aug 2020",tags:[{name:"vue.js"},{name:"javascript"}]},{name:"Learn SQL Course",url:"https://github.com/YaninaTrekhleb/portfolio/blob/main/src/images/certificates-img/Learn-SQL-Course.jpg",img:t(9943),date:"Jul 2020 - Jul 2020",tags:[{name:"sql"},{name:"database"}]},{name:"Learn JavaScript Course",url:"https://github.com/YaninaTrekhleb/portfolio/blob/main/src/images/certificates-img/Learn-JavaScript-Course-Codecademy.jpg",img:t(7959),date:"Jun 2020 - Jul 2020",tags:[{name:"html/css"},{name:"javascript"}]},{name:"Learn React.js: Part I Course",url:"https://github.com/YaninaTrekhleb/portfolio/blob/main/src/images/certificates-img/Learn-React.js-Part-I-Codecademy-react.jpg",img:t(9874),date:"Jun 2020 - Jul 2020",tags:[{name:"html/css"},{name:"javascript"},{name:"react.js"}]},{name:"Building Interactive JavaScript Websites Course",url:"https://github.com/YaninaTrekhleb/portfolio/blob/main/src/images/certificates-img/Building-Interactive-JavaScript-Websites-codecademy.jpg",img:t(9729),date:"Jan 2019 - Feb 2020",tags:[{name:"html/css"},{name:"javascript"}]},{name:"Learn CSS Course",url:"https://github.com/YaninaTrekhleb/portfolio/blob/main/src/images/certificates-img/learn-css-codecademy.jpg",img:t(6727),date:"Dec 2018 - Jan 2019",tags:[{name:"html/css"}]},{name:"Learn Responsive Design Course",url:"https://github.com/YaninaTrekhleb/portfolio/blob/main/src/images/certificates-img/Learn-Responsive-Design-Course-Codecademy-responsive.jpg",img:t(8600),date:"Dec 2018 - Jan 2019",tags:[{name:"html/css"},{name:"responsive design"},{name:"javascript"}]},{name:"Responsive Web Design",url:"https://github.com/YaninaTrekhleb/portfolio/blob/main/src/images/certificates-img/Responsive-Web%20Design-Coursera-2018.jpg",img:t(9864),date:"Sep 2018 - Oct 2018",tags:[{name:"html/css"},{name:"responsive design"},{name:"javascript"}]},{name:"Responsive Website Basics: Code with HTML, CSS, and JavaScript",url:"https://github.com/YaninaTrekhleb/portfolio/blob/main/src/images/certificates-img/Responsive-Website-Coursera-2018.jpg",img:t(7955),date:"Sep 2018 - Oct 2018",tags:[{name:"html/css"},{name:"javascript"}]},{name:"HTML 5 App Development Fundamentals",url:"https://github.com/YaninaTrekhleb/portfolio/blob/main/src/images/certificates-img/softserve-basic-frontend-course-y-trekhleb.png",img:t(6381),date:"Feb 2018 - Mar 2018",tags:[{name:"html/css"},{name:"javascript"}]},{name:"How to Make a Website with NameCheap Course",url:"https://github.com/YaninaTrekhleb/portfolio/blob/main/src/images/certificates-img/How-to-Make-a-Website-with-NameCheap-Course-Codecademy.jpg",img:t(1186),date:"Jan 2018 - Feb 2018",tags:[{name:"html/css"},{name:"javascript"}]}],le={id:"certificate",class:"mb-2 bg-gray-50 border-solid border-2 border-gray-50 shadow bg-opacity-0.3 rounded"},ue={class:"text-2xl underline font-semibold text-gray-500 hover:text-blue-200 my-2.5 p-2"},pe=["href"],de={class:"sm:h-64 overflow-hidden mb-2.5"},be=["href"],fe=["src"],he={class:"mb-2.5"},Ie={class:"flex flex-row flex-wrap justify-center"},Ce={class:"inline-block bg-gray-200 rounded-sm px-2 py-1 text-sm font-normal mr-2 mb-2 last:mr-0"};function ke(e,a,t,n,r,s){return(0,i.uX)(),(0,i.CE)("div",le,[(0,i.Lk)("section",null,[(0,i.Lk)("div",null,[(0,i.Lk)("h3",ue,[(0,i.Lk)("a",{href:t.certificate.url,target:"_blank"},(0,I.v_)(t.certificate.name),9,pe)]),(0,i.Lk)("div",de,[(0,i.Lk)("a",{href:t.certificate.url,target:"_blank"},[(0,i.Lk)("img",{src:t.certificate.img,alt:"certificate-image",class:"h-auto w-full"},null,8,fe)],8,be)]),(0,i.Lk)("p",he,(0,I.v_)(t.certificate.date),1),(0,i.Lk)("div",Ie,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t.certificate.tags,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.name,class:"skills-tag"},[(0,i.Lk)("span",Ce,(0,I.v_)(e.name),1)])))),128))])])])])}var ve={name:"Certificate",data(){return{}},props:["certificate"]};const je=(0,l.A)(ve,[["render",ke]]);var we=je,ye={name:"Certificates",data(){return{certificates:ce}},components:{Certificate:we}};const xe=(0,l.A)(ye,[["render",ge]]);var De=xe;const qe=[{path:"/",name:"About",component:W},{path:"/Projects",name:"Projects",component:se},{path:"/Certificates",name:"Certificates",component:De}],Le=(0,h.aE)({history:(0,h.LA)("/portfolio/"),routes:qe});var Be=Le;const Me=(0,n.Ef)(f);Me.use(Be),Me.mount("#app")},5499:function(e,a,t){e.exports=t.p+"img/Advanced-Google-Analytics-Course_Certificate.6128ba94.jpg"},9729:function(e,a,t){e.exports=t.p+"img/Building-Interactive-JavaScript-Websites-codecademy.af7f2db9.jpg"},9899:function(e,a,t){e.exports=t.p+"img/Google-Analytics-for-Beginners-Course_Certificate_Yanina_Trekhleb.7f911b92.jpg"},4515:function(e,a,t){e.exports=t.p+"img/Google-Data-Part1-Foundations-Data-Data-Everywhere.b1f4a504.jpg"},2163:function(e,a,t){e.exports=t.p+"img/Google-Tag-Manager-Fundamentals-Course_Certificate.98e22d74.jpg"},1186:function(e,a,t){e.exports=t.p+"img/How-to-Make-a-Website-with-NameCheap-Course-Codecademy.fc380ee9.jpg"},4223:function(e,a,t){e.exports=t.p+"img/Introduction_to_Python_datacamp.9b0ac9e4.jpg"},7959:function(e,a,t){e.exports=t.p+"img/Learn-JavaScript-Course-Codecademy.e3d9bf71.jpg"},9874:function(e,a,t){e.exports=t.p+"img/Learn-React.js-Part-I-Codecademy-react.581b9f58.jpg"},8600:function(e,a,t){e.exports=t.p+"img/Learn-Responsive-Design-Course-Codecademy-responsive.12607376.jpg"},9943:function(e,a,t){e.exports=t.p+"img/Learn-SQL-Course.b1a49ffd.jpg"},2490:function(e,a,t){e.exports=t.p+"img/Learn-Vue.js-Course.a1b216a4.jpg"},9864:function(e,a,t){e.exports=t.p+"img/Responsive-Web Design-Coursera-2018.7f4bc5b0.jpg"},7955:function(e,a,t){e.exports=t.p+"img/Responsive-Website-Coursera-2018.1ef9f404.jpg"},510:function(e,a,t){e.exports=t.p+"img/a-b-testing-data-camp.2df820df.jpg"},6727:function(e,a,t){e.exports=t.p+"img/learn-css-codecademy.4b36479e.jpg"},4164:function(e,a,t){e.exports=t.p+"img/marigold_digital_marketer_walkthrough_yanina_trekhleb.4eab846c.png"},2763:function(e,a,t){e.exports=t.p+"img/selligent_base.3b9cdf9e.png"},6381:function(e,a,t){e.exports=t.p+"img/softserve-basic-frontend-course-y-trekhleb.cb71dc3f.png"},2886:function(e,a,t){e.exports=t.p+"img/adopt-a-pet.f8b3acde.png"},7997:function(e,a,t){e.exports=t.p+"img/api-vue.0be9ff11.png"},4862:function(e,a,t){e.exports=t.p+"img/birthday-reminder-react.14dc95b4.png"},7512:function(e,a,t){e.exports=t.p+"img/blogger-website.f51207e4.png"},4200:function(e,a,t){e.exports=t.p+"img/cooking-css.7e3613bb.png"},1078:function(e,a,t){e.exports=t.p+"img/food-menu.8e9f3bd0.png"},2745:function(e,a,t){e.exports=t.p+"img/food-sass.fe1a5706.png"},6586:function(e,a,t){e.exports=t.p+"img/gallery-css.1d1a78c2.png"},9962:function(e,a,t){e.exports=t.p+"img/learn-html-css.6ab4a56b.png"},7611:function(e,a,t){e.exports=t.p+"img/luhn-algorithm.c90a8672.png"},2260:function(e,a,t){e.exports=t.p+"img/media-monks-test-assigment.98d725e1.png"},5838:function(e,a,t){e.exports=t.p+"img/quarantine-react.7494aac5.png"},1143:function(e,a,t){e.exports=t.p+"img/restaurant-landing.38aecdf5.png"},9861:function(e,a,t){e.exports=t.p+"img/sign-up.e0e3ac34.png"},5387:function(e,a,t){e.exports=t.p+"img/stand-with-Ukraine-img.1c89cd4f.png"},9574:function(e,a,t){e.exports=t.p+"img/ten-thousand-days.c0727797.png"},3960:function(e,a,t){e.exports=t.p+"img/tip-calculator.79748464.png"},8146:function(e,a,t){e.exports=t.p+"img/to-do-list-react.ca7e82ff.png"},2303:function(e,a,t){e.exports=t.p+"img/to-do-list-vue.f05e0ea3.png"},3351:function(e,a,t){e.exports=t.p+"img/tulip-banner.48c80bb8.png"},4473:function(e,a,t){e.exports=t.p+"img/weather-vue.b2998c29.png"},9556:function(e,a,t){e.exports=t.p+"img/wedding-agency.492a3c0f.png"}},a={};function t(n){var i=a[n];if(void 0!==i)return i.exports;var r=a[n]={exports:{}};return e[n](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(a,n,i,r){if(!n){var s=1/0;for(g=0;g<e.length;g++){n=e[g][0],i=e[g][1],r=e[g][2];for(var o=!0,A=0;A<n.length;A++)(!1&r||s>=r)&&Object.keys(t.O).every((function(e){return t.O[e](n[A])}))?n.splice(A--,1):(o=!1,r<s&&(s=r));if(o){e.splice(g--,1);var m=i();void 0!==m&&(a=m)}}return a}r=r||0;for(var g=e.length;g>0&&e[g-1][2]>r;g--)e[g]=e[g-1];e[g]=[n,i,r]}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p="/portfolio/"}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var i,r,s=n[0],o=n[1],A=n[2],m=0;if(s.some((function(a){return 0!==e[a]}))){for(i in o)t.o(o,i)&&(t.m[i]=o[i]);if(A)var g=A(t)}for(a&&a(n);m<s.length;m++)r=s[m],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(g)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(1026)}));n=t.O(n)})();
//# sourceMappingURL=app.65f511cd.js.map