/*!
 * The Final Countdown for jQuery v2.0.4 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2014 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

 !function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){"use strict";var e=[],s=[];s.push(/^[0-9]*$/.source),s.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),s.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),s=new RegExp(s.join("|"));var n={Y:"years",m:"months",w:"weeks",d:"days",D:"totalDays",H:"hours",M:"minutes",S:"seconds"};function i(t,e){var s="s",n="";return t&&(1===(t=t.replace(/(:|;|\s)/gi,"").split(/\,/)).length?s=t[0]:(n=t[0],s=t[1])),1===Math.abs(e)?n:s}var a=function(s,n,i){this.el=s,this.$el=t(s),this.interval=null,this.offset={},this.instanceNumber=e.length,e.push(this),this.$el.data("countdown-instance",this.instanceNumber),i&&(this.$el.on("update.countdown",i),this.$el.on("stoped.countdown",i),this.$el.on("finish.countdown",i)),this.setFinalDate(n),this.start()};t.extend(a.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var t=this;this.update(),this.interval=setInterval(function(){t.update.call(t)},100)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},pause:function(){this.stop.call(this)},resume:function(){this.start.call(this)},remove:function(){this.stop(),e[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(t){this.finalDate=function(t){if(t instanceof Date)return t;if(String(t).match(s))return String(t).match(/^[0-9]*$/)&&(t=Number(t)),String(t).match(/\-/)&&(t=String(t).replace(/\-/g,"/")),new Date(t);throw new Error("Couldn't cast `"+t+"` to a date object.")}(t)},update:function(){0!==this.$el.closest("html").length?(this.totalSecsLeft=this.finalDate.getTime()-(new Date).getTime(),this.totalSecsLeft=Math.ceil(this.totalSecsLeft/1e3),this.totalSecsLeft=this.totalSecsLeft<0?0:this.totalSecsLeft,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,totalDays:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30),years:Math.floor(this.totalSecsLeft/60/60/24/365)},0===this.totalSecsLeft?(this.stop(),this.dispatchEvent("finish")):this.dispatchEvent("update")):this.remove()},dispatchEvent:function(e){var s,a=t.Event(e+".countdown");a.finalDate=this.finalDate,a.offset=t.extend({},this.offset),a.strftime=(s=this.offset,function(t){var e=t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(e)for(var a=0,o=e.length;a<o;++a){var h=e[a].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),r=new RegExp(h[0]),l=h[1]||"",c=h[3]||"",f=null;h=h[2],n.hasOwnProperty(h)&&(f=n[h],f=Number(s[f])),null!==f&&("!"===l&&(f=i(c,f)),""===l&&f<10&&(f="0"+f.toString()),t=t.replace(r,f.toString()))}return t=t.replace(/%%/,"%")}),this.$el.trigger(a)}}),t.fn.countdown=function(){var s=Array.prototype.slice.call(arguments,0);return this.each(function(){var n=t(this).data("countdown-instance");if(void 0!==n){var i=e[n],o=s[0];a.prototype.hasOwnProperty(o)?i[o].apply(i,s.slice(1)):null===String(o).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(i.setFinalDate.call(i,o),i.start()):t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,o))}else new a(this,s[0],s[1])})}});
