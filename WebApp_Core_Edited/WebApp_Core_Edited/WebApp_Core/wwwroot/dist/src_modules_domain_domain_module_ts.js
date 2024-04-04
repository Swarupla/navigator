(self.webpackChunkClientApp=self.webpackChunkClientApp||[]).push([["src_modules_domain_domain_module_ts"],{28763:(m,D,a)=>{"use strict";a.d(D,{s:()=>A});var S,l=a(15861),h=a(69862),v=a(65879),w=a(37398),u=a(178),C=a(79338);let A=((S=class{constructor(o,_){this.http=o,this.httpService=_,this.sessionID=""}getKeyContactUserPhoto(o){var _=this;let b=u.HB.replace("eid",o);return this.httpService.getimage(b).pipe((0,w.U)(function(){var p=(0,l.Z)(function*(f){return yield _.createImageFromBlob(f)});return function(f){return p.apply(this,arguments)}}()))}createImageFromBlob(o){return(0,l.Z)(function*(){return new Promise((_,b)=>{const p=new FileReader;p.onloadend=()=>_(p.result),o&&p.readAsDataURL(o)})})()}getDashboardContentData(o){return this.httpService.post(u.Rm,o)}getClientsAndWorkspaces(){return this.httpService.post(u.Z0)}getSuccessStories(){return this.httpService.get(u.fE)}getLeaderShipSpeaks(){return this.httpService.get(u.wH)}getStartedAI(){return this.httpService.get(u.wg)}getHomeData(){return this.httpService.get(u.R1)}getInsightsData(){return this.httpService.get(u.xS)}getFeaturedAssetsData(){return this.httpService.get(u.kZ)}getMarketPlaceAssets(o){return this.httpService.get(o)}getMarketPlaceData(o){return this.httpService.post(u._7,o)}getGlobalSearchData(o){return this.httpService.post(u._7,o)}getAIacademyData(o){return this.httpService.post(u.iB,o)}}).ctorParameters=()=>[{type:h.eN},{type:C.O}],S);A=function(I,o,_,b){var R,p=arguments.length,f=p<3?o:null===b?b=Object.getOwnPropertyDescriptor(o,_):b;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)f=Reflect.decorate(I,o,_,b);else for(var O=I.length-1;O>=0;O--)(R=I[O])&&(f=(p<3?R(f):p>3?R(o,_,f):R(o,_))||f);return p>3&&f&&Object.defineProperty(o,_,f),f}([(0,v.GSi)({providedIn:"root"})],A)},11694:(m,D,a)=>{"use strict";a.r(D),a.d(D,{DomainModule:()=>B});var l=a(65879),h=a(96814),v=a(4828);var A,u=a(31898),C=a.n(u),S=a(178),E=a(79338);let o=((A=class{constructor(e){this.httpService=e}responsibleAI(){return this.httpService.get(S.L2)}domainHome(){return this.httpService.get(S.j1)}}).ctorParameters=()=>[{type:E.O}],A);o=function(d,e,t,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(d,e,t,n);else for(var c=d.length-1;c>=0;c--)(r=d[c])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s}([(0,l.GSi)({providedIn:"root"})],o);var _;let p=((_=class{constructor(e){this.domainService=e}ngOnInit(){this.getData()}getActiveClass(){return this.responseData.dataReadiness.list.some(e=>e.selected)}getData(){this.domainService.domainHome().subscribe(e=>{this.responseData=e})}readiness(e){e.selected=!e.selected,this.responseData.dataReadiness.list.forEach(t=>{t.title!=e.title&&(t.selected=!1)})}}).ctorParameters=()=>[{type:o}],_);p=function(d,e,t,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(d,e,t,n);else for(var c=d.length-1;c>=0;c--)(r=d[c])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s}([(0,l.wA2)({selector:"app-domain-home",template:'<ng-container *ngIf="responseData">\r\n<div class="c-resposible-ai-card -noimg">\r\n  <div class="container">\r\n    <div class="c-resposible-ai-card__wrapper">\r\n      <div class="c-resposible-ai-card__left">\r\n        <div class="c-resposible-ai-card__heading">\r\n          <div class="c-domain-title ">\r\n            <div class="c-domain-title__left ">\r\n              {{responseData.domain.title}}\r\n            </div>\r\n            <div class="c-domain-title__right">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="c-resposible-ai-card__paracontent">\r\n          <div class="c-resposible-ai-card__para -opacity">\r\n            {{responseData.domain.description1}}\r\n          </div>\r\n          <div class="c-resposible-ai-card__para">\r\n            {{responseData.domain.description2}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class="c-ai-cards-list">\r\n  <div class="container">\r\n    <div class="c-domain-title ">\r\n      <div class="c-domain-title__left ">\r\n        {{responseData.activeAI.title}}\r\n      </div>\r\n      <div class="c-domain-title__right">\r\n      </div>\r\n    </div>\r\n    <div class="c-ai-cards-list__card-wrap">\r\n      <ng-container *ngFor="let activeData of responseData.activeAI.list;let i=index">\r\n      <div class="c-ai-cards-list__card -left" *ngIf="i==0">\r\n        <div class="c-ai-cards ">\r\n          <img class="c-ai-cards-img" [src]="activeData.image" alt="get-started">\r\n          <div class="c-ai-cards_head">\r\n            <div class="c-ai-cards_head-title">\r\n              {{activeData.type}}\r\n            </div>\r\n            <a class="o-primary-button-two -white domain-disabled-link">\r\n              {{activeData.button}}\r\n            </a>\r\n          </div>\r\n          <div class="c-ai-cards__content">\r\n            <div class="c-ai-cards__content-para">\r\n              {{activeData.description}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="c-ai-cards-list__card"  *ngIf="i==1">\r\n        <div class="c-ai-cards  -functional-ai ">\r\n          <img class="c-ai-cards-img" [src]="activeData.image" alt="get-started">\r\n\r\n          <div class="c-ai-cards_head">\r\n            <div class="c-ai-cards_head-title">\r\n              {{activeData.type}}\r\n            </div>\r\n            <a class="o-primary-button-two -white domain-disabled-link">\r\n              {{activeData.button}}\r\n            </a>\r\n          </div>\r\n          <div class="c-ai-cards__content">\r\n            <div class="c-ai-cards__content-para">\r\n              {{activeData.description}}\r\n            </div>\r\n          </div>\r\n          <div class="c-ai-cards__bottom-wrap">\r\n            <div class="c-ai-cards__num-wrap">\r\n              <div class="c-ai-cards__num">{{activeData.leftBottomTitle.value}}</div>\r\n              <div class="c-ai-cards__num-desc">{{activeData.leftBottomTitle.title}}</div>\r\n            </div>\r\n            <div class="c-ai-cards-icon-wrap">\r\n              <i class="c-ai-cards-icon icon-arrow-up-two"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class="c-ai-readiness -two">\r\n  <div class="container">\r\n    <div class="c-ai-readiness_wrapper">\r\n      <div class="c-ai-readiness__heading">\r\n        <div class="c-domain-title ">\r\n          <div class="c-domain-title__left ">\r\n            {{responseData.dataReadiness.title}}\r\n          </div>\r\n          <div class="c-domain-title__right">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="c-ai-readiness__wrap">\r\n        <div class="c-ai-readiness__left">\r\n          <div class="c-ai-readiness__content" *ngFor="let dataReadiness of responseData.dataReadiness.list" data-tab="content" [class.-active]="dataReadiness.selected" (click)="readiness(dataReadiness)">\r\n            <div class="c-ai-readiness__iconwrap">\r\n              <div class="c-ai-readiness__content-plus -arrow"><i class="icon-add-thin"></i></div>\r\n              <div class="c-ai-readiness__content-minus -arrow1"><i class="icon-minus"></i></div>\r\n            </div>\r\n            <div class="c-ai-readiness__content-title">{{dataReadiness.title}}</div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class="c-ai-readiness__right">\r\n          <div class="c-ai-readiness__innerwrap" [class.-active]="!getActiveClass()" id="image">\r\n            <img class="c-ai-readiness__image" src="./assets/toolkit/images/data-readiness.png" alt="Data Readiness">\r\n          </div>\r\n          <div class="c-ai-readiness__innerwrap -tab-cont" *ngFor="let dataReadiness of responseData.dataReadiness.list" [class.-active]="dataReadiness.selected" id="content">\r\n            <div class="c-ai-readiness__innertitle">{{dataReadiness.title}}</div>\r\n            <div class="c-ai-readiness__innercontent">{{dataReadiness.description}}</div>\r\n            <a class="o-primary-button-two domain-disabled-link">\r\n              View Details\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</ng-container>\r\n',styles:[C()]})],p);var T,R=a(6069),O=a.n(R),U=a(69014);let x=((T=class{constructor(e,t){this.chatInterfaceService=e,this.router=t,this.footerExtend=!1,this.searchText=""}ngOnInit(){setTimeout(()=>{document.getElementById("header-container").style.position="sticky",document.getElementById("header-container").style.height="66px"},600)}goToChatConversation(){var e,t;null!==(e=this.searchText)&&void 0!==e&&null!==(e=e.trim())&&void 0!==e&&e.length&&(null===(t=this.searchText)||void 0===t||null===(t=t.trim())||void 0===t?void 0:t.length)>0&&(this.chatInterfaceService.setSearchValue(this.searchText),this.chatInterfaceService.chatTitle="NEW CHAT",this.searchText="",this.router.navigateByUrl("chat-interface/conversation"))}}).ctorParameters=()=>[{type:U.g},{type:v.F0}],T);x=function(d,e,t,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(d,e,t,n);else for(var c=d.length-1;c>=0;c--)(r=d[c])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s}([(0,l.wA2)({selector:"app-domain-layout",template:'<div class="site-page">\r\n  <div class="c-domain-tab">\r\n    <div class="container">\r\n      <div class="c-domain-tab-ul">\r\n        <a class="c-domain-tab-li">Industry AI</a>\r\n        <a class="c-domain-tab-li">Function AI</a>\r\n        <a class="c-domain-tab-li">Data Foundation</a>\r\n        <a class="c-domain-tab-li">Talent Creation</a>\r\n        <a class="c-domain-tab-li" [routerLink]="[\'responsible-ai\']">Responsible AI</a>\r\n        <a class="c-domain-tab-li">AI Foundation</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n  <div class="o-input-fixed__footer" [class.-extend]="footerExtend" outSideClick (clickOutside)="footerExtend = false">\r\n    <div class="o-input-fixed__input" [class.-extend]="footerExtend">\r\n      <div class="o-input-custom -darkgrey" (click)="footerExtend = true">\r\n        <i class="o-input-custom__chat-icon icon-ai-logo"></i>\r\n        <input type="text" class="o-input-custom__input o-input-fixed__input-box" placeholder="Launch"\r\n               (keyup.enter)="goToChatConversation()" [(ngModel)]="searchText" value="">\r\n        <i class="o-input-custom__send-icon icon-send -hide"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n',styles:[O()]})],x);var L,K=a(86214),$=a.n(K);let P=((L=class{constructor(e){this.domainService=e,this.isLoading=!1,this.windowOBJ=window,this.options={items:2,firstItemFixed:!1,arrows:!0,dots:!1,leftArrow:'<i class="icon-arrow-up"></i>',rightArrow:'<i class="icon-arrow-up"></i>',margin:24,responsive:[{maxWidth:1500,items:2},{maxWidth:1140,items:2},{maxWidth:1e3,items:1},{maxWidth:600,items:1}]}}ngAfterViewInit(){setTimeout(()=>{this.renderCarousel(),window.scroll(0,0)},500)}renderCarousel(){new this.windowOBJ.IndustryXCarousel("success-card-list",this.options)}ngOnInit(){this.isLoading=!0,this.getData()}getData(){this.domainService.responsibleAI().subscribe(e=>{this.responseData=e,this.isLoading=!1})}openTab(e){window.open(e,"_blank")}}).ctorParameters=()=>[{type:o}],L);P=function(d,e,t,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(d,e,t,n);else for(var c=d.length-1;c>=0;c--)(r=d[c])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s}([(0,l.wA2)({selector:"app-responsible-ai",template:'<ng-container *ngIf="!isLoading && responseData">\r\n  <div class="c-custom-page-title">\r\n    <div class="container">\r\n      <div class="c-custom-page-title__wrapper">\r\n        <div class="c-breadcrumbs -explore">\r\n          <ul class="c-breadcrumbs__list">\r\n            <li class="c-breadcrumbs__item"><a>Offerings</a></li>\r\n            <li class="c-breadcrumbs__item -active"><a>{{responseData.title}}</a></li>\r\n          </ul>\r\n        </div>\r\n        <h2 class="c-custom-page-title__title">{{responseData.title}}</h2>\r\n        <p class="c-custom-page-title__para">{{responseData.description}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="c-resposible-ai-card ">\r\n    <div class="container">\r\n      <div class="c-resposible-ai-card__wrapper">\r\n        <div class="c-resposible-ai-card__left">\r\n          <div class="c-resposible-ai-card__heading">\r\n            <div class="c-domain-title ">\r\n              <div class="c-domain-title__left ">\r\n                {{responseData.section.question}}\r\n              </div>\r\n              <div class="c-domain-title__right">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="c-resposible-ai-card__paracontent">\r\n            <div class="c-resposible-ai-card__para" [innerHTML]="responseData.section.answer">\r\n            </div>\r\n          </div>\r\n          <div class="c-resposible-ai-card__button">\r\n            <a class="o-primary-button-two domain-disabled-link">\r\n              View Assets\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class="c-resposible-ai-card__right">\r\n          <img class="c-resposible-ai-card__image" [src]="responseData.section.image" alt="Responsibel AI">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="c-benefits-tiles">\r\n    <div class="container">\r\n      <div class="c-domain-title ">\r\n        <div class="c-domain-title__left -white">\r\n          {{responseData.benefits.title}}\r\n        </div>\r\n        <div class="c-domain-title__right">\r\n        </div>\r\n      </div>\r\n      <div class="c-benefits-tiles-cards">\r\n        <div class="c-benefits-tiles-cards__left">\r\n          <div class="c-benefits-card" *ngFor="let data of responseData.benefits.leftSection">\r\n            <div class="c-benefits-card-icon-wrap">\r\n              <i class="c-benefits-card-icon {{data.icon}}"></i>\r\n            </div>\r\n            <div class="c-benefits-card-text">\r\n              {{data.name}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="c-benefits-tiles-cards__right">\r\n          <div class="c-benefits-card-two" [class.-left-image]="i === 1" *ngFor="let benefit of responseData.benefits.rightSection;let i = index">\r\n            <div class="c-benefits-card-two__left">\r\n              <div class="c-benefits-card-two__left-title">\r\n                {{benefit.text}}\r\n              </div>\r\n              <a class="c-benefits-card-two__left-button domain-disabled-link">\r\n                View All\r\n              </a>\r\n            </div>\r\n            <div class="c-benefits-card-two__right">\r\n              <div class="c-benefits-card-two__right-imgWrap">\r\n                <img class="c-benefits-card-two__right-img" [src]="benefit.image" alt="get-started">\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="c-domain-assessment">\r\n    <div class="c-domain-assessment__top">\r\n      <div class="container">\r\n        <div class="c-domain-assessment__top-title">\r\n          <div class="c-domain-assessment__top-title-text">{{responseData.assessments.title}}</div>\r\n          <div class="c-domain-assessment__top-title-text">\r\n            {{responseData.assessments.description}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="container">\r\n      <div class="c-domain-assessment__content">\r\n        <div class="c-domain-assessment__content-list">\r\n          <div class="c-domain-assessment__content-list-item" *ngFor="let assessment of responseData.assessments.assessmentList">\r\n            {{assessment.name}}\r\n            <a class="o-cylindrical-button domain-disabled-link" *ngIf="assessment.getStarted">\r\n              Get Started\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class="c-domain-assessment__content-imgdiv">\r\n          <img class="c-domain-assessment__content-imgdiv-img" [src]="responseData.assessments.image" alt="Assessment Img">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="c-core-page-title">\r\n    <div class="container">\r\n      <div class="c-core-page-title__wrapper">\r\n        <div class="c-core-page-title__heading">{{responseData.quizSection.title}}</div>\r\n        <a class="c-core-page-title__button domain-disabled-link">\r\n          Start\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="c-success-card-list">\r\n    <div class="container">\r\n      <div class="c-success-card-list__wrapper" style="margin-top: 20px;">\r\n        <div class="c-domain-title ">\r\n          <div class="c-domain-title__left ">\r\n            {{responseData.leadership.title}}\r\n          </div>\r\n          <div class="c-domain-title__right">\r\n          </div>\r\n        </div>\r\n        <div id="success-card-list" class="c-success-card-list__carouselwrap industry-x-carousel">\r\n          <div class="carousel-wrapper">\r\n            <div class="c-success-card-list__item carousel-item" *ngFor="let leaderShip of responseData.leadership.list; let i= index">\r\n              <div class="c-success-card ">\r\n                <div class="c-success-card__mainwrap">\r\n                  <div class="c-success-card__left">\r\n                    <div class="c-success-card__top" *ngIf="!leaderShip.publishedOn"></div>\r\n                    <div class="c-success-card__top" *ngIf="leaderShip.publishedOn">Published on : {{leaderShip.publishedOn}}</div>\r\n                    <div class="c-success-card__middle">\r\n                      <div class="c-success-card__subtitle">{{leaderShip.name}}\u200b</div>\r\n                    </div>\r\n                    <div class="c-success-card__bottom">\r\n                      <a class="c-success-card__link cursor-pointer" (click)="openTab(leaderShip.link)">\r\n                        <span class="c-success-card__link-know">Know More</span>\r\n                        <span class="c-success-card__link-arrow"><i class="icon-arrow"></i></span>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                  <div class="c-success-card__right">\r\n                    <img class="c-success-card__image" [class.align-image]="i==2" [src]="leaderShip.image" alt="Leadership pov 1">\r\n                  </div>\r\n                </div>\r\n                <div class="c-success-card__outerwrap">\r\n                  {{leaderShip.description}}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n',styles:[$()]})],P);const N=[{path:"",component:x,children:[{path:"",component:p},{path:"responsible-ai",component:P}]}];let M=class{};M=function(d,e,t,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(d,e,t,n);else for(var c=d.length-1;c>=0;c--)(r=d[c])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s}([(0,l.LVF)({imports:[v.Bz.forChild(N)],exports:[v.Bz]})],M);var V=a(46717),Z=a(56223),F=a(15861);var y,J=a(98230),Q=a.n(J),Y=a(28763);let j=((y=class{constructor(e){this.navigatorService=e,this.distinctProfileArr=[]}ngOnInit(){var e;this.featuredAssets.forEach(t=>{t.userInitial="",t.profileImage=""}),this.distinctProfileArr=[...new Map(null===(e=this.featuredAssets.assetList)||void 0===e?void 0:e.map(t=>[t.createdBy,t])).values()],this.getUserInitials(),this.getProfileImage()}getUserInitials(){var e;null===(e=this.featuredAssets)||void 0===e||e.forEach((t,n)=>{var i,s;let r=null==t||null===(i=t.createdBy)||void 0===i?void 0:i.split(" ");t.userInitial=null==t||null===(s=t.createdBy)||void 0===s||null===(s=s.split(" "))||void 0===s||null===(s=s.filter((c,g)=>0==g||g==r.length-1))||void 0===s||null===(s=s.map(c=>{var g;return null==c||null===(g=c.charAt(0))||void 0===g?void 0:g.toLocaleUpperCase()}))||void 0===s?void 0:s.join("")})}getProfileImage(){var e,n,t=this;null!==(e=this.distinctProfileArr)&&void 0!==e&&e.length&&(null===(n=this.distinctProfileArr)||void 0===n||n.forEach((i,s)=>{i&&i.createdByEnterpriseId&&this.navigatorService.getKeyContactUserPhoto(i.createdByEnterpriseId+"@accenture.com").subscribe(function(){var r=(0,F.Z)(function*(c){var g;i.profileImage=yield c,s===(null===(g=t.distinctProfileArr)||void 0===g?void 0:g.length)-1&&setTimeout(()=>{t.updateAllProfile()},100)});return function(c){return r.apply(this,arguments)}}(),r=>{var c;console.error(r,"error get profile"),s===(null===(c=this.distinctProfileArr)||void 0===c?void 0:c.length)-1&&setTimeout(()=>{this.updateAllProfile()},100)})}))}updateAllProfile(){this.featuredAssets.assetList.forEach((e,t)=>{if(e&&e.createdByEnterpriseId){let n=this.distinctProfileArr.findIndex(i=>i.createdBy===e.createdBy);n>=0?e.profileImage=this.distinctProfileArr[n].profileImage:this.navigatorService.getKeyContactUserPhoto(e.createdByEnterpriseId+"@accenture.com").subscribe(function(){var i=(0,F.Z)(function*(s){e.profileImage=yield s});return function(s){return i.apply(this,arguments)}}())}})}}).ctorParameters=()=>[{type:Y.s}],y.propDecorators={featuredAssets:[{type:l.IIB}]},y);j=function(d,e,t,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(d,e,t,n);else for(var c=d.length-1;c>=0;c--)(r=d[c])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s}([(0,l.wA2)({selector:"app-domain-featured-assets",template:'<div class="c-asset-explorer-list__tiles-wrap">\r\n  <div class="c-asset-card  -featured-assset-card" *ngFor="let featureAsset of featuredAssets">\r\n    <div class="c-asset-card__asset"\r\n                    style="background-image: url({{featureAsset.bgImage}});">\r\n      <div class="c-asset-card__top">\r\n        <div class="c-asset-card__head">\r\n          <div class="c-asset-card__label">{{featureAsset.tag}}</div>\r\n        </div>\r\n        <div class="c-asset-card__asset-name">{{featureAsset.title}}</div>\r\n        <div class="c-asset-card__desc">{{featureAsset.description}} </div>\r\n      </div>\r\n      <div class="c-asset-card__bottom">\r\n        <div class="c-header__user -stepHome6" *ngIf="!featureAsset.profileImage">\r\n          <div class="c-header__user-image -client">\r\n            <span class="c-header__user-image-deftxt"\r\n                  [title]="featureAsset?.createdBy">{{featureAsset?.userInitial}}</span>\r\n          </div>\r\n        </div>\r\n        <img class="c-asset-card__img" *ngIf="featureAsset.profileImage" [src]="featureAsset.profileImage" alt="User Image" />\r\n        <div class="c-asset-card__info">\r\n          <span class="c-asset-card__info-title">Created by</span>\r\n          <span class="c-asset-card__name">{{featureAsset.createdBy}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n',styles:[Q()]})],j);let B=class{};B=function(d,e,t,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(d,e,t,n);else for(var c=d.length-1;c>=0;c--)(r=d[c])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s}([(0,l.LVF)({declarations:[x,p,P,j],imports:[h.ez,M,V.m,Z.u5]})],B)},98230:(m,D,a)=>{var l=a(34969),v=a(71451)(l);v.push([m.id,'\n\n.c-header__user-image-def {\n    background-color: #fff;\n    border: 1px solid #969696;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    min-width: 40px;\n    display: inline-flex;\n    align-items: center;\n  }\n  \n  .c-header__user-image-deftxt {\n    color: #a100ff;\n    font-family: "Graphik-Medium-Web";\n    font-size: 14px;\n    align-content: center;\n    justify-content: center;\n    display: inline-flex;\n    width: 100%;\n    margin-bottom: 3px;\n  }\n  \n  .c-header__user-image .-img {\n    border-radius: 50%;\n  }\n  \n  .c-header__user-link .-text {\n    font-size: 17px;\n  }\n  \n  .c-header__user-images {\n    background-color: #fff;\n    width: 40px;\n    height: 40px;\n    display: inline-table;\n  }\n  \n    .c-header__user-images.-client {\n      margin-right: 30px;\n    }\n  \n    .c-header__user-images .-img {\n      border-radius: 50%;\n      max-width: 100%;\n      max-height: 100%;\n    }\n  \n  .c-header__user-image-deftxt {\n    color: #a100ff;\n    font-family: "Graphik-Medium-Web";\n    font-size: 14px;\n    align-content: center;\n    justify-content: center;\n    display: inline-flex;\n    width: 100%;\n    margin-bottom: 3px;\n  }\n  \n  .-active .c-header__user-images.-client {\n    margin-right: 0;\n  }\n  \n  \n  .c-header__user-image {\n    background-color: #fff;\n    border: 1px solid #969696;\n    border-radius: 50%;\n    width: 32px;\n    height: 32px;\n    min-width: 32px;\n    display: inline-flex;\n    align-items: center;\n  }\n  \n  .c-asset-card__img {\n    border-radius: 50% !important;\n  }\n  \n  .c-asset-explorer-list__tiles-wrap {\n    overflow: unset;\n  }',""]),m.exports=v.toString()},31898:(m,D,a)=>{var l=a(34969),v=a(71451)(l);v.push([m.id,"",""]),m.exports=v.toString()},6069:(m,D,a)=>{var l=a(34969),v=a(71451)(l);v.push([m.id,"",""]),m.exports=v.toString()},86214:(m,D,a)=>{var l=a(34969),v=a(71451)(l);v.push([m.id,"\n.c-success-card__right .c-success-card__image.align-image {\n  object-fit: unset;\n  width: 264px;\n  height: 330px;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n",""]),m.exports=v.toString()}}]);