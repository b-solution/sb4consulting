/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
!function(){CKEDITOR.dialog.add("templates",function(e){function t(e,t){var n=CKEDITOR.dom.element.createFromHtml('<a href="javascript:void(0)" tabIndex="-1" role="option" ><div class="cke_tpl_item"></div></a>'),i='<table style="width:350px;" class="cke_tpl_preview" role="presentation"><tr>';return e.image&&t&&(i+='<td class="cke_tpl_preview_img"><img src="'+CKEDITOR.getUrl(t+e.image)+'"'+(CKEDITOR.env.ie6Compat?' onload="this.width=this.width"':"")+' alt="" title=""></td>'),i+='<td style="white-space:normal;"><span class="cke_tpl_title">'+e.title+"</span><br/>",e.description&&(i+="<span>"+e.description+"</span>"),n.getFirst().setHtml(i+"</td></tr></table>"),n.on("click",function(){a(e.html)}),n}function a(t){var a=CKEDITOR.dialog.getCurrent();a.getValueOf("selectTpl","chkInsertOpt")?(e.fire("saveSnapshot"),e.setData(t,function(){a.hide();var t=e.createRange();t.moveToElementEditStart(e.editable()),t.select(),setTimeout(function(){e.fire("saveSnapshot")},0)})):(e.insertHtml(t),a.hide())}function n(e){var t=e.data.getTarget(),a=r.equals(t);if(a||r.contains(t)){var n,i=e.data.getKeystroke(),o=r.getElementsByTag("a");if(o){if(a)n=o.getItem(0);else switch(i){case 40:n=t.getNext();break;case 38:n=t.getPrevious();break;case 13:case 32:t.fire("click")}n&&(n.focus(),e.data.preventDefault())}}}var i=CKEDITOR.plugins.get("templates");CKEDITOR.document.appendStyleSheet(CKEDITOR.getUrl(i.path+"dialogs/templates.css"));var r,i="cke_tpl_list_label_"+CKEDITOR.tools.getNextNumber(),o=e.lang.templates,l=e.config;return{title:e.lang.templates.title,minWidth:CKEDITOR.env.ie?440:400,minHeight:340,contents:[{id:"selectTpl",label:o.title,elements:[{type:"vbox",padding:5,children:[{id:"selectTplText",type:"html",html:"<span>"+o.selectPromptMsg+"</span>"},{id:"templatesList",type:"html",focus:!0,html:'<div class="cke_tpl_list" tabIndex="-1" role="listbox" aria-labelledby="'+i+'"><div class="cke_tpl_loading"><span></span></div></div><span class="cke_voice_label" id="'+i+'">'+o.options+"</span>"},{id:"chkInsertOpt",type:"checkbox",label:o.insertOption,"default":l.templates_replaceContent}]}]}],buttons:[CKEDITOR.dialog.cancelButton],onShow:function(){var e=this.getContentElement("selectTpl","templatesList");r=e.getElement(),CKEDITOR.loadTemplates(l.templates_files,function(){var a=(l.templates||"default").split(",");if(a.length){var n=r;n.setHtml("");for(var i=0,s=a.length;s>i;i++)for(var d=CKEDITOR.getTemplates(a[i]),c=d.imagesPath,d=d.templates,u=d.length,m=0;u>m;m++){var p=t(d[m],c);p.setAttribute("aria-posinset",m+1),p.setAttribute("aria-setsize",u),n.append(p)}e.focus()}else r.setHtml('<div class="cke_tpl_empty"><span>'+o.emptyListMsg+"</span></div>")}),this._.element.on("keydown",n)},onHide:function(){this._.element.removeListener("keydown",n)}}})}();