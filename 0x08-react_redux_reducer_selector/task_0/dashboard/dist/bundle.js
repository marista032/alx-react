
/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e={22:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(537),l=t.n(r),a=t(645),o=t.n(a)()(l());o.push([e.id,".App {\n  text-align: center;\n  font-family: 'Arial', sans-serif;\n}\n\n.App-header {\n  background-color: #ffffff;\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  color: #e0354b;\n  border-bottom: 3px solid #e0354b;\n}\n\n.App-logo {\n  width: 200px;\n}\n\n.App-body {\n  margin: 50px;\n  text-align: left;\n}\n\n.App-body input {\n  margin-right: 10px;\n}\n\n.App-footer {\n  border-top: 3px solid #e0354b;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  font-style: italic;\n}","",{version:3,sources:["webpack://./src/App/App.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,gCAAgC;AAClC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,kBAAkB;AACpB",sourcesContent:[".App {\n  text-align: center;\n  font-family: 'Arial', sans-serif;\n}\n\n.App-header {\n  background-color: #ffffff;\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  color: #e0354b;\n  border-bottom: 3px solid #e0354b;\n}\n\n.App-logo {\n  width: 200px;\n}\n\n.App-body {\n  margin: 50px;\n  text-align: left;\n}\n\n.App-body input {\n  margin-right: 10px;\n}\n\n.App-footer {\n  border-top: 3px solid #e0354b;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  font-style: italic;\n}"],sourceRoot:""}]);const u=o},842:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(537),l=t.n(r),a=t(645),o=t.n(a)()(l());o.push([e.id,'.Notifications {\n    padding: 0.25rem;\n    border: 1px dashed #e0354b;\n    position: relative;\n}\n\n.Notifications button img {\n    width: 10px;\n}\n\n[data-priority="default"] {\n    color: #0d0563;\n}\n\n[data-priority="urgent"] {\n    color: #e0354b;\n}\n',"",{version:3,sources:["webpack://./src/Notifications/Notifications.css"],names:[],mappings:"AAAA;IACI,gBAAgB;IAChB,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB",sourcesContent:['.Notifications {\n    padding: 0.25rem;\n    border: 1px dashed #e0354b;\n    position: relative;\n}\n\n.Notifications button img {\n    width: 10px;\n}\n\n[data-priority="default"] {\n    color: #0d0563;\n}\n\n[data-priority="urgent"] {\n    color: #e0354b;\n}\n'],sourceRoot:""}]);const u=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,l,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var u=0;u<this.length;u++){var i=this[u][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),l&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=l):c[4]="".concat(l)),n.push(c))}},n}},537:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(l," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},448:(e,n,t)=>{var r=t(294),l=t(840);function a(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,u={};function i(e,n){s(e,n),s(e+"Capture",n)}function s(e,n){for(u[e]=n,e=0;e<n.length;e++)o.add(n[e])}var c=!("undefined"==typeof window||void 0===window.document||void 0===wind
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7dUZBR0lBLFFBQTBCLEdBQTRCLEtBRTFEQSxFQUF3QkMsS0FBSyxDQUFDQyxFQUFPQyxHQUFJLDRmQWlDckMsR0FBRyxDQUFDLFFBQVUsRUFBRSxRQUFVLENBQUMsK0JBQStCLE1BQVEsR0FBRyxTQUFXLDJRQUEyUSxlQUFpQixDQUFDLDZmQUE2ZixXQUFhLE1BRTMzQix5RUNyQ0lILFFBQTBCLEdBQTRCLEtBRTFEQSxFQUF3QkMsS0FBSyxDQUFDQyxFQUFPQyxHQUFJLDBRQWlCdEMsR0FBRyxDQUFDLFFBQVUsRUFBRSxRQUFVLENBQUMsbURBQW1ELE1BQVEsR0FBRyxTQUFXLG9IQUFvSCxlQUFpQixDQUFDLDJRQUErUSxXQUFhLE1BRXpnQixtQkNsQkFELEVBQU9FLFFBQVUsU0FBVUMsR0FDekIsSUFBSUMsRUFBTyxHQTRFWCxPQXpFQUEsRUFBS0MsU0FBVyxXQUNkLE9BQU9DLEtBQUtDLEtBQUksU0FBVUMsR0FDeEIsSUFBSUMsRUFBVSxHQUNWQyxPQUErQixJQUFaRixFQUFLLEdBb0I1QixPQW5CSUEsRUFBSyxLQUNQQyxHQUFXLGNBQWNFLE9BQU9ILEVBQUssR0FBSSxRQUV2Q0EsRUFBSyxLQUNQQyxHQUFXLFVBQVVFLE9BQU9ILEVBQUssR0FBSSxPQUVuQ0UsSUFDRkQsR0FBVyxTQUFTRSxPQUFPSCxFQUFLLEdBQUdJLE9BQVMsRUFBSSxJQUFJRCxPQUFPSCxFQUFLLElBQU0sR0FBSSxPQUU1RUMsR0FBV04sRUFBdUJLLEdBQzlCRSxJQUNGRCxHQUFXLEtBRVRELEVBQUssS0FDUEMsR0FBVyxLQUVURCxFQUFLLEtBQ1BDLEdBQVcsS0FFTkEsQ0FDVCxJQUFHSSxLQUFLLEdBQ1YsRUFHQVQsRUFBS1UsRUFBSSxTQUFXQyxFQUFTQyxFQUFPQyxFQUFRQyxFQUFVQyxHQUM3QixpQkFBWkosSUFDVEEsRUFBVSxDQUFDLENBQUMsS0FBTUEsT0FBU0ssS0FFN0IsSUFBSUMsRUFBeUIsQ0FBQyxFQUM5QixHQUFJSixFQUNGLElBQUssSUFBSUssRUFBSSxFQUFHQSxFQUFJaEIsS0FBS00sT0FBUVUsSUFBSyxDQUNwQyxJQUFJckIsRUFBS0ssS0FBS2dCLEdBQUcsR0FDUCxNQUFOckIsSUFDRm9CLEVBQXVCcEIsSUFBTSxFQUVqQyxDQUVGLElBQUssSUFBSXNCLEVBQUssRUFBR0EsRUFBS1IsRUFBUUgsT0FBUVcsSUFBTSxDQUMxQyxJQUFJZixFQUFPLEdBQUdHLE9BQU9JLEVBQVFRLElBQ3pCTixHQUFVSSxFQUF1QmIsRUFBSyxXQUdyQixJQUFWVyxTQUNjLElBQVpYLEVBQUssS0FHZEEsRUFBSyxHQUFLLFNBQVNHLE9BQU9ILEVBQUssR0FBR0ksT0FBUyxFQUFJLElBQUlELE9BQU9ILEVBQUssSUFBTSxHQUFJLE1BQU1HLE9BQU9ILEVBQUssR0FBSSxNQUYvRkEsRUFBSyxHQUFLVyxHQU1WSCxJQUNHUixFQUFLLElBR1JBLEVBQUssR0FBSyxVQUFVRyxPQUFPSCxFQUFLLEdBQUksTUFBTUcsT0FBT0gsRUFBSyxHQUFJLEtBQzFEQSxFQUFLLEdBQUtRLEdBSFZSLEVBQUssR0FBS1EsR0FNVkUsSUFDR1YsRUFBSyxJQUdSQSxFQUFLLEdBQUssY0FBY0csT0FBT0gsRUFBSyxHQUFJLE9BQU9HLE9BQU9ILEVBQUssR0FBSSxLQUMvREEsRUFBSyxHQUFLVSxHQUhWVixFQUFLLEdBQUssR0FBR0csT0FBT08sSUFNeEJkLEVBQUtMLEtBQUtTLEdBQ1osQ0FDRixFQUNPSixDQUNULFdDbEZBSixFQUFPRSxRQUFVLFNBQVVNLEdBQ3pCLElBQUlDLEVBQVVELEVBQUssR0FDZmdCLEVBQWFoQixFQUFLLEdBQ3RCLElBQUtnQixFQUNILE9BQU9mLEVBRVQsR0FBb0IsbUJBQVRnQixLQUFxQixDQUM5QixJQUFJQyxFQUFTRCxLQUFLRSxTQUFTQyxtQkFBbUJDLEtBQUtDLFVBQVVOLE1BQ3pETyxFQUFPLCtEQUErRHBCLE9BQU9lLEdBQzdFTSxFQUFnQixPQUFPckIsT0FBT29CLEVBQU0sT0FDeEMsTUFBTyxDQUFDdEIsR0FBU0UsT0FBTyxDQUFDcUIsSUFBZ0JuQixLQUFLLEtBQ2hELENBQ0EsTUFBTyxDQUFDSixHQUFTSSxLQUFLLEtBQ3hCLGlCQ0hhLElBQUlvQixFQUFHLEVBQVEsS0FBU0MsRUFBRyxFQUFRLEtBQWEsU0FBU0MsRUFBRUMsR0FBRyxJQUFJLElBQUlDLEVBQUUseURBQXlERCxFQUFFRSxFQUFFLEVBQUVBLEVBQUVDLFVBQVUzQixPQUFPMEIsSUFBSUQsR0FBRyxXQUFXVCxtQkFBbUJXLFVBQVVELElBQUksTUFBTSx5QkFBeUJGLEVBQUUsV0FBV0MsRUFBRSxnSEFBZ0gsQ0FBQyxJQUFJRyxFQUFHLElBQUlDLElBQUlDLEVBQUcsQ0FBQyxFQUFFLFNBQVNDLEVBQUdQLEVBQUVDLEdBQUdPLEVBQUdSLEVBQUVDLEdBQUdPLEVBQUdSLEVBQUUsVUFBVUMsRUFBRSxDQUN4YixTQUFTTyxFQUFHUixFQUFFQyxHQUFXLElBQVJLLEVBQUdOLEdBQUdDLEVBQU1ELEVBQUUsRUFBRUEsRUFBRUMsRUFBRXpCLE9BQU93QixJQUFJSSxFQUFHSyxJQUFJUixFQUFFRCxHQUFHLENBQzVELElBQUlVLElBQUssb0JBQXFCQyxhQUFRLElBQXFCQSxPQUFPQyxlQUFVLElBQXFCRCxPQUFPQyxTQUFTQyxlQUFlQyxFQUFHQyxPQUFPQyxVQUFVQyxlQUFlQyxFQUFHLDhWQUE4VkMsRUFDcGdCLENBQUMsRUFBRUMsRUFBRyxDQUFDLEVBQ2lOLFNBQVNDLEVBQUVyQixFQUFFQyxFQUFFQyxFQUFFb0IsRUFBRUMsRUFBRUMsRUFBRUMsR0FBR3ZELEtBQUt3RCxnQkFBZ0IsSUFBSXpCLEdBQUcsSUFBSUEsR0FBRyxJQUFJQSxFQUFFL0IsS0FBS3lELGNBQWNMLEVBQUVwRCxLQUFLMEQsbUJBQW1CTCxFQUFFckQsS0FBSzJELGdCQUFnQjNCLEVBQUVoQyxLQUFLNEQsYUFBYTlCLEVBQUU5QixLQUFLNkQsS0FBSzlCLEVBQUUvQixLQUFLOEQsWUFBWVIsRUFBRXRELEtBQUsrRCxrQkFBa0JSLENBQUMsQ0FBQyxJQUFJUyxFQUFFLENBQUMsRUFDcGIsdUlBQXVJQyxNQUFNLEtBQUtDLFNBQVEsU0FBU3BDLEdBQUdrQyxFQUFFbEMsR0FBRyxJQUFJcUIsRUFBRXJCLEVBQUUsR0FBRSxFQUFHQSxFQUFFLE1BQUssR0FBRyxFQUFHLElBQUcsQ0FBQyxDQUFDLGdCQUFnQixrQkFBa0IsQ0FBQyxZQUFZLFNBQVMsQ0FBQyxVQUFVLE9BQU8sQ0FBQyxZQUFZLGVBQWVvQyxTQUFRLFNBQVNwQyxHQUFHLElBQUlDLEVBQUVELEVBQUUsR0FBR2tDLEVBQUVqQyxHQUFHLElBQUlvQixFQUFFcEIsRUFBRSxHQUFFLEVBQUdELEVBQUUsR0FBRyxNQUFLLEdBQUcsRUFBRyxJQUFHLENBQUMsa0JBQWtCLFlBQVksYUFBYSxTQUFTb0MsU0FBUSxTQUF
