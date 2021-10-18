(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[9987],{58973:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o={},l={unversionedId:"react/slides",id:"react/slides",isDocsHomePage:!1,title:"Slides",description:"We recommend Swiper.js if you need a modern touch slider component. It powers our IonSlides component, but we now recommend that developers use Swiper for React directly.",source:"@site/docs/react/slides.md",sourceDirName:"react",slug:"/react/slides",permalink:"/docs/react/slides",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/react/slides.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Virtual Scroll",permalink:"/docs/react/virtual-scroll"},next:{title:"Config",permalink:"/docs/react/config"}},p=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Swiping with Style",id:"swiping-with-style",children:[{value:"Pre-processors (optional)",id:"pre-processors-optional",children:[]}]},{value:"Using Components",id:"using-components",children:[]},{value:"The IonicSwiper Module",id:"the-ionicswiper-module",children:[]},{value:"Additional Modules",id:"additional-modules",children:[]},{value:"Events",id:"events",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Effects",id:"effects",children:[]},{value:"Wrap Up",id:"wrap-up",children:[{value:"Where do I file issues?",id:"where-do-i-file-issues",children:[]}]}],s={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We recommend ",(0,a.kt)("a",{href:"http://swiperjs.com/",target:"_blank",rel:"noopener noreferrer"},"Swiper.js")," if you need a modern touch slider component. It powers our ",(0,a.kt)("inlineCode",{parentName:"p"},"IonSlides")," component, but we now recommend that developers use Swiper for React directly."),(0,a.kt)("p",null,"This guide will go over how to get Swiper for React set up in your Ionic Framework application. It will also go over any migration information you may need to move from ",(0,a.kt)("inlineCode",{parentName:"p"},"IonSlides")," to the official Swiper React integration."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"To get started, install the Swiper dependency in your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install swiper\n")),(0,a.kt)("h2",{id:"swiping-with-style"},"Swiping with Style"),(0,a.kt)("p",null,"Next, we need to import the base Swiper styles. We recommend importing the styles in the component in which Swiper is being used. This ensures that the styles are only loaded when needed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import 'swiper/swiper-bundle.min.css';\n")),(0,a.kt)("p",null,"Ionic Framework also provides some default styles, as well as the CSS Variables that were used inside of the old ",(0,a.kt)("inlineCode",{parentName:"p"},"IonSlides"),". If you would like to continue to use those styles and CSS Variables, be sure to import the ",(0,a.kt)("inlineCode",{parentName:"p"},"ionic-swiper.css")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import 'swiper/swiper-bundle.min.css';\nimport '@ionic/react/css/ionic-swiper.css';\n")),(0,a.kt)("h3",{id:"pre-processors-optional"},"Pre-processors (optional)"),(0,a.kt)("p",null,"For developers using SCSS or Less styles, Swiper also provides imports for those files. The difference here is that each Swiper module is broken out into its own file, so you may have to import multiple stylesheets if you are using modules such as transition effects, zoom, or pagination."),(0,a.kt)("p",null,"If you wanted to import the base Swiper styles and the pagination styles, you would do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import 'swiper.scss';\nimport 'swiper/components/pagination/pagination.scss';\nimport '@ionic/react/css/ionic-swiper.css';\n")),(0,a.kt)("p",null,"Swiper has a complete list of the stylesheets you can import here: ",(0,a.kt)("a",{href:"https://swiperjs.com/react#styles",target:"_blank",rel:"noopener noreferrer"},(0,a.kt)("a",{parentName:"p",href:"https://swiperjs.com/react#styles"},"https://swiperjs.com/react#styles")),"."),(0,a.kt)("h2",{id:"using-components"},"Using Components"),(0,a.kt)("p",null,"Swiper exports two components: ",(0,a.kt)("inlineCode",{parentName:"p"},"Swiper")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SwiperSlide"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"Swiper")," component is the equivalent of ",(0,a.kt)("inlineCode",{parentName:"p"},"IonSlides"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"SwiperSlide")," is the equivalent of ",(0,a.kt)("inlineCode",{parentName:"p"},"IonSlide"),"."),(0,a.kt)("p",null,"These components are imported from ",(0,a.kt)("inlineCode",{parentName:"p"},"swiper/react"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\nimport { IonContent, IonPage } from '@ionic/react';\nimport { Swiper, SwiperSlide } from 'swiper/react';\n\nimport 'swiper/swiper-bundle.min.css';\nimport '@ionic/react/css/ionic-swiper.css';\n\nconst Home: React.FC = () => {\n  return (\n    <IonPage>\n      <IonContent>\n        <Swiper>\n          <SwiperSlide>Slide 1</SwiperSlide>\n          <SwiperSlide>Slide 2</SwiperSlide>\n          <SwiperSlide>Slide 3</SwiperSlide>\n        </Swiper>\n      </IonContent>\n    </IonPage>\n  );\n};\nexport default Home;\n")),(0,a.kt)("h2",{id:"the-ionicswiper-module"},"The IonicSwiper Module"),(0,a.kt)("p",null,"There are a few edge cases in Ionic Framework where Swiper may not be able to compute the slider dimensions properly. As a result, we have created the ",(0,a.kt)("inlineCode",{parentName:"p"},"IonicSwiper")," module to resolve some of these issues."),(0,a.kt)("p",null,"To install it, we first need to import the core Swiper library and the IonicSwiper module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import SwiperCore from 'swiper';\nimport { IonicSwiper } from '@ionic/react';\n")),(0,a.kt)("p",null,"Then we can install the module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\nimport { IonContent, IonPage, IonicSwiper } from '@ionic/react';\nimport SwiperCore from 'swiper';\n\nimport 'swiper/swiper-bundle.min.css';\nimport '@ionic/react/css/ionic-swiper.css';\n\nSwiperCore.use([IonicSwiper]);\n\nconst Home: React.FC = () => {\n  return (\n    <IonPage>\n      <IonContent>\n        <Swiper>\n          <SwiperSlide>Slide 1</SwiperSlide>\n          <SwiperSlide>Slide 2</SwiperSlide>\n          <SwiperSlide>Slide 3</SwiperSlide>\n        </Swiper>\n      </IonContent>\n    </IonPage>\n  );\n};\nexport default Home;\n")),(0,a.kt)("h2",{id:"additional-modules"},"Additional Modules"),(0,a.kt)("p",null,"By default, Swiper for React uses the core version of Swiper and does not import any additional modules. To use modules such as Navigation or Pagination, you need to import them first."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IonSlides")," automatically included the Pagination, Scrollbar, Autoplay, Keyboard, and Zoom modules. If you used any of these features, be sure to import them in your application."),(0,a.kt)("p",null,"The following example shows how to install the Navigation and Pagination plugins:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\nimport { IonContent, IonPage, IonicSwiper } from '@ionic/react';\nimport SwiperCore, { Navigation, Pagination } from 'swiper';\nimport { Swiper, SwiperSlide } from 'swiper/react';\n\nSwiper.use([IonicSwiper, Navigation, Pagination]);\n\nimport 'swiper/swiper-bundle.min.css';\nimport '@ionic/react/css/ionic-swiper.css';\n\nconst Home: React.FC = () => {\n  return (\n    <IonPage>\n      <IonContent>\n        <Swiper\n          pagination={{\n            clickable: true\n          }}\n          navigation\n        >\n          <SwiperSlide>Slide 1</SwiperSlide>\n          <SwiperSlide>Slide 2</SwiperSlide>\n          <SwiperSlide>Slide 3</SwiperSlide>\n        </Swiper>\n      </IonContent>\n    </IonPage>\n  );\n};\nexport default Home;\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Importing ",(0,a.kt)("inlineCode",{parentName:"p"},"swiper-bundle.min.css")," imports styles for all modules. When using the SCSS or Less styles, you will need to import the styles for each module. See ",(0,a.kt)("a",{href:"https://swiperjs.com/react#styles",target:"_blank",rel:"noopener noreferrer"},(0,a.kt)("a",{parentName:"p",href:"https://swiperjs.com/react#styles"},"https://swiperjs.com/react#styles"))," for a full list of stylesheets."),(0,a.kt)("h2",{parentName:"blockquote",id:"properties"},"Properties")),(0,a.kt)("p",null,"Swiper options are provided as props directly on the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Swiper>")," component rather than via the ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," object in ",(0,a.kt)("inlineCode",{parentName:"p"},"IonSlides"),"."),(0,a.kt)("p",null,"Let's say in an app with ",(0,a.kt)("inlineCode",{parentName:"p"},"IonSlides")," we had the ",(0,a.kt)("inlineCode",{parentName:"p"},"slidesPerView")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"loop")," options set:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"<IonSlides\n  options={{\n    slidesPerView: 3,\n    loop: true\n  }}\n  >\n  <IonSlide>Slide 1</IonSlide>\n  <IonSlide>Slide 2</IonSlide>\n  <IonSlide>Slide 3</IonSlide>\n</IonSlides>\n")),(0,a.kt)("p",null,"To migrate, we would move these options out of the ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," object and onto the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Swiper>")," component directly as properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"<Swiper\n  slidesPerView={3}\n  loop={true}\n  >\n  <SwiperSlide>Slide 1</SwiperSlide>\n  <SwiperSlide>Slide 2</SwiperSlide>\n  <SwiperSlide>Slide 3</SwiperSlide>\n</Swiper>\n")),(0,a.kt)("p",null,"Below is a full list of property changes when going from ",(0,a.kt)("inlineCode",{parentName:"p"},"IonSlides")," to Swiper Rreact:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},"Set each option as a property directly on the ",(0,a.kt)("inlineCode",{parentName:"td"},"<Swiper>")," component.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode"),(0,a.kt)("td",{parentName:"tr",align:null},"For different styles based upon the mode, you can target the slides with ",(0,a.kt)("inlineCode",{parentName:"td"},".ios .swiper-container")," or ",(0,a.kt)("inlineCode",{parentName:"td"},".md .swiper-container"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pager"),(0,a.kt)("td",{parentName:"tr",align:null},"Use the ",(0,a.kt)("inlineCode",{parentName:"td"},"pagination")," property instead. Requires installation of the Pagination module.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"scrollbar"),(0,a.kt)("td",{parentName:"tr",align:null},"You can continue to use the ",(0,a.kt)("inlineCode",{parentName:"td"},"scrollbar")," property, just be sure to install the Scrollbar module first.")))),(0,a.kt)("p",null,"All properties available in Swiper React can be found at ",(0,a.kt)("a",{href:"https://swiperjs.com/react#swiper-props",target:"_blank",rel:"noopener noreferrer"},(0,a.kt)("a",{parentName:"p",href:"https://swiperjs.com/react#swiper-props"},"https://swiperjs.com/react#swiper-props")),"."),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("p",null,"Since the ",(0,a.kt)("inlineCode",{parentName:"p"},"Swiper")," component is not provided by Ionic Framework, event names will not have an ",(0,a.kt)("inlineCode",{parentName:"p"},"onIonSlide")," prefix to them."),(0,a.kt)("p",null,"Let's say in an app with ",(0,a.kt)("inlineCode",{parentName:"p"},"IonSlides")," we used the ",(0,a.kt)("inlineCode",{parentName:"p"},"onIonSlideDidChange")," event:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"<IonSlides\n  onIonSlideDidChange={() => onSlideChange()}\n>\n  <IonSlide>Slide 1</IonSlide>\n  <IonSlide>Slide 2</IonSlide>\n  <IonSlide>Slide 3</IonSlide>\n</IonSlides>\n")),(0,a.kt)("p",null,"To migrate, we would change the name of the event to ",(0,a.kt)("inlineCode",{parentName:"p"},"onSlideChange"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"<Swiper\n  onSlideChange={() => onSlideChange()}\n>\n  <SwiperSlide>Slide 1</SwiperSlide>\n  <SwiperSlide>Slide 2</SwiperSlide>\n  <SwiperSlide>Slide 3</SwiperSlide>\n</Swiper>\n")),(0,a.kt)("p",null,"Below is a full list of event name changes when going from ",(0,a.kt)("inlineCode",{parentName:"p"},"IonSlides")," to Swiper React:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"IonSlides Event"),(0,a.kt)("th",{parentName:"tr",align:null},"Swiper Event"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onIonSlideWillChange"),(0,a.kt)("td",{parentName:"tr",align:null},"onSlideChangeTransitionStart")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onIonSlideDidChange"),(0,a.kt)("td",{parentName:"tr",align:null},"onSlideChangeTransitionEnd")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onIonSlideDoubleTap"),(0,a.kt)("td",{parentName:"tr",align:null},"onDoubleTap")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onIonSlideDrag"),(0,a.kt)("td",{parentName:"tr",align:null},"onSliderMove")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onIonSlideNextStart"),(0,a.kt)("td",{parentName:"tr",align:null},"onSlideNextTransitionStart")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onIonSlideNextEnd"),(0,a.kt)("td",{parentName:"tr",align:null},"onSlideNextTransitionEnd")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onIonSlidePrevStart"),(0,a.kt)("td",{parentName:"tr",align:null},"onSlidePrevTransitionStart")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onIonSlidePrevEnd"),(0,a.kt)("td",{parentName:"tr",align:null},"onSlidePrevTransitionEnd")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onIonSlideReachStart"),(0,a.kt)("td",{parentName:"tr",align:null},"onReachBeginning")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onIonSlideReachEnd"),(0,a.kt)("td",{parentName:"tr",align:null},"onReachEnd")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onIonSlideTap"),(0,a.kt)("td",{parentName:"tr",align:null},"onTap")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onIonSlideTouchStart"),(0,a.kt)("td",{parentName:"tr",align:null},"onTouchStart")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onIonSlideTouchEnd"),(0,a.kt)("td",{parentName:"tr",align:null},"onTouchEnd")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onIonSlideTransitionStart"),(0,a.kt)("td",{parentName:"tr",align:null},"onTransitionStart")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onIonSlideTransitionEnd"),(0,a.kt)("td",{parentName:"tr",align:null},"onTransitionEnd")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onIonSlidesDidLoad"),(0,a.kt)("td",{parentName:"tr",align:null},"onInit")))),(0,a.kt)("p",null,"All events available in Swiper React can be found at ",(0,a.kt)("a",{href:"https://swiperjs.com/react#swiper-events",target:"_blank",rel:"noopener noreferrer"},(0,a.kt)("a",{parentName:"p",href:"https://swiperjs.com/react#swiper-events"},"https://swiperjs.com/react#swiper-events")),"."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("p",null,"Most methods have been removed in favor of accessing the ",(0,a.kt)("inlineCode",{parentName:"p"},"Swiper")," props directly."),(0,a.kt)("p",null,"Accessing these properties can be tricky as you want to access the properties on the Swiper instance itself, not your React component. To do this, we recommend getting a reference to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Swiper")," instance via ",(0,a.kt)("inlineCode",{parentName:"p"},"onSwiper"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, { useState } from 'react';\n...\nconst Home: React.FC = () => {\n  const [swiperInstance, setSwiperInstance] = useState();\n  return (\n    ...\n    <Swiper\n      onSwiper={(swiper) => setSwiperInstance(swiper)}\n    >\n      ...\n    </Swiper>\n  )\n};\nexport default Home;\n")),(0,a.kt)("p",null,"From here, if you wanted to access a property on the Swiper instance you would access ",(0,a.kt)("inlineCode",{parentName:"p"},"swiperInstance"),". For example, if you wanted to check the ",(0,a.kt)("inlineCode",{parentName:"p"},"isBeginning")," property, you could do: ",(0,a.kt)("inlineCode",{parentName:"p"},"swiperInstance.isBeginning"),". Make sure ",(0,a.kt)("inlineCode",{parentName:"p"},"swiperInstance")," is defined first though!"),(0,a.kt)("p",null,"Below is a full list of method changes when going from ",(0,a.kt)("inlineCode",{parentName:"p"},"IonSlides")," to Swiper React:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"getActiveIndex()"),(0,a.kt)("td",{parentName:"tr",align:null},"Use the ",(0,a.kt)("inlineCode",{parentName:"td"},"activeIndex")," property instead.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"getPreviousIndex()"),(0,a.kt)("td",{parentName:"tr",align:null},"Use the ",(0,a.kt)("inlineCode",{parentName:"td"},"previousIndex")," property instead.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"getSwiper()"),(0,a.kt)("td",{parentName:"tr",align:null},"Get a reference to the Swiper instance using ",(0,a.kt)("inlineCode",{parentName:"td"},"onSwiper"),". See example above.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isBeginning()"),(0,a.kt)("td",{parentName:"tr",align:null},"Use the ",(0,a.kt)("inlineCode",{parentName:"td"},"isBeginning")," property instead.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isEnd()"),(0,a.kt)("td",{parentName:"tr",align:null},"Use the ",(0,a.kt)("inlineCode",{parentName:"td"},"isEnd")," property instead.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"length()"),(0,a.kt)("td",{parentName:"tr",align:null},"Use the ",(0,a.kt)("inlineCode",{parentName:"td"},"slides")," property instead. (i.e swiperRef.slides.length)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"lockSwipeToNext()"),(0,a.kt)("td",{parentName:"tr",align:null},"Use the ",(0,a.kt)("inlineCode",{parentName:"td"},"allowSlidesNext")," property instead.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"lockSwipeToPrev()"),(0,a.kt)("td",{parentName:"tr",align:null},"Use the ",(0,a.kt)("inlineCode",{parentName:"td"},"allowSlidePrev")," property instead.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"lockSwipes()"),(0,a.kt)("td",{parentName:"tr",align:null},"Use the ",(0,a.kt)("inlineCode",{parentName:"td"},"allowSlideNext"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"allowSlidePrev"),", and ",(0,a.kt)("inlineCode",{parentName:"td"},"allowTouchMove")," properties instead.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"startAutoplay()"),(0,a.kt)("td",{parentName:"tr",align:null},"Use the ",(0,a.kt)("inlineCode",{parentName:"td"},"autoplay")," property instead.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"stopAutoplay()"),(0,a.kt)("td",{parentName:"tr",align:null},"Use the ",(0,a.kt)("inlineCode",{parentName:"td"},"autoplay")," property instead.")))),(0,a.kt)("h2",{id:"effects"},"Effects"),(0,a.kt)("p",null,"If you are using effects such as Cube or Fade, you can install them similar to how you installed the other modules:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\nimport { IonContent, IonPage, IonicSwiper } from '@ionic/react';\nimport SwiperCore, { EffectFade } from 'swiper';\nimport { Swiper, SwiperSlide } from 'swiper/react';\n\nSwiper.use([IonicSwiper, EffectFade]);\n\nimport 'swiper/swiper-bundle.min.css';\nimport '@ionic/react/css/ionic-swiper.css';\n\nconst Home: React.FC = () => {\n  return (\n    <IonPage>\n      <IonContent>\n        <Swiper effect=\"fade\">\n          <SwiperSlide>Slide 1</SwiperSlide>\n          <SwiperSlide>Slide 2</SwiperSlide>\n          <SwiperSlide>Slide 3</SwiperSlide>\n        </Swiper>\n      </IonContent>\n    </IonPage>\n  );\n};\nexport default Home;\n")),(0,a.kt)("p",null,"For more information on effects in Swiper, please see ",(0,a.kt)("a",{href:"https://swiperjs.com/react#effects",target:"_blank",rel:"noopener noreferrer"},(0,a.kt)("a",{parentName:"p",href:"https://swiperjs.com/react#effects"},"https://swiperjs.com/react#effects")),"."),(0,a.kt)("h2",{id:"wrap-up"},"Wrap Up"),(0,a.kt)("p",null,"Now that you have Swiper installed, there is a whole set of new Swiper features for you to enjoy. We recommend starting with the ",(0,a.kt)("a",{href:"https://swiperjs.com/react",target:"_blank",rel:"noopener noreferrer"},"Swiper React Introduction")," and then referencing ",(0,a.kt)("a",{href:"https://swiperjs.com/swiper-api",target:"_blank",rel:"noopener noreferrer"},"the Swiper API docs"),"."),(0,a.kt)("h3",{id:"where-do-i-file-issues"},"Where do I file issues?"),(0,a.kt)("p",null,"Before opening an issue, please consider creating a post on the ",(0,a.kt)("a",{href:"https://github.com/nolimits4web/swiper/discussions",target:"_blank",rel:"noopener noreferrer"},"Swiper Discussion Board")," or the ",(0,a.kt)("a",{href:"https://forum.ionicframework.com",target:"_blank"},"Ionic Forum")," to see if your issue can be resolved by the community."),(0,a.kt)("p",null,"If you are running into problems with the Swiper library, new bugs should be filed on the Swiper repo: ",(0,a.kt)("a",{href:"https://github.com/nolimits4web/swiper/issues",target:"_blank",rel:"noopener noreferrer"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/nolimits4web/swiper/issues"},"https://github.com/nolimits4web/swiper/issues"))),(0,a.kt)("p",null,"If you are running into problems with the ",(0,a.kt)("inlineCode",{parentName:"p"},"IonicSwiper")," module, new bugs should be filed on the Ionic Framework repo: ",(0,a.kt)("a",{href:"https://github.com/ionic-team/ionic-framework/issues",target:"_blank",rel:"noopener noreferrer"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/ionic-framework/issues"},"https://github.com/ionic-team/ionic-framework/issues"))))}d.isMDXComponent=!0}}]);