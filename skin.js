// Garden Gnome Software - Skin
// Pano2VR 6.0 alpha/16570
// Filename: 768x1024.ggsk
// Generated Sun Jan 28 17:43:24 2018

function pano2vrSkin(player,base) {
	player.addVariable('showGallery', 1);
	player.setVariableValue('showGallery', 99);
	var me=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._slidingcontainer=document.createElement('div');
		this._slidingcontainer.ggId="sliding-container";
		this._slidingcontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._slidingcontainer.ggVisible=false;
		this._slidingcontainer.className='ggskin ggskin_container ';
		this._slidingcontainer.ggType='container';
		hs ='';
		hs+='height : 1024px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1024px;';
		hs+='visibility : hidden;';
		hs+='width : 768px;';
		hs+='pointer-events:none;';
		this._slidingcontainer.setAttribute('style',hs);
		this._slidingcontainer.style[domTransform + 'Origin']='50% 50%';
		me._slidingcontainer.ggIsActive=function() {
			return false;
		}
		me._slidingcontainer.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._slidingcontainer.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width / me.player.getViewerSize().height < 1)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._slidingcontainer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._slidingcontainer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._slidingcontainer.style[domTransition]='';
				if (me._slidingcontainer.ggCurrentLogicStateVisible == 0) {
					me._slidingcontainer.style.visibility=(Number(me._slidingcontainer.style.opacity)>0||!me._slidingcontainer.style.opacity)?'inherit':'hidden';
					me._slidingcontainer.ggVisible=true;
				}
				else {
					me._slidingcontainer.style.visibility="hidden";
					me._slidingcontainer.ggVisible=false;
				}
			}
		}
		this._slidingcontainer.ggUpdatePosition=function (useTransition) {
		}
		this._vertslidebg=document.createElement('div');
		this._vertslidebg.ggId="vertslide-bg";
		this._vertslidebg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vertslidebg.ggVisible=true;
		this._vertslidebg.className='ggskin ggskin_rectangle ';
		this._vertslidebg.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 1024px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 768px;';
		hs+='pointer-events:auto;';
		this._vertslidebg.setAttribute('style',hs);
		this._vertslidebg.style[domTransform + 'Origin']='50% 50%';
		me._vertslidebg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vertslidebg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vertslidebg.ggUpdatePosition=function (useTransition) {
		}
		this._slidingcontainer.appendChild(this._vertslidebg);
		this._map_1=document.createElement('div');
		this._map_1.ggFilter = '';
		this._map_1.ggFilteredIds = [];
		this._map_1.ggId="Map 1";
		this._map_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_1.ggVisible=true;
		this._map_1.className='ggskin ggskin_map ';
		this._map_1.ggType='map';
		hs ='';
		hs+='background : #fff;';
		hs+='border : 1px solid #000;';
		hs+='bottom : 60px;';
		hs+='height : 385px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 768px;';
		hs+='pointer-events:auto;';
		this._map_1.setAttribute('style',hs);
		this._map_1.style[domTransform + 'Origin']='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
			}
		}
		this._map_1.ggNodeChange=function () {
			if (this.ggLastActivMarker) {
				if (this.ggLastActivMarker._div.ggDeactivate) this.ggLastActivMarker._div.ggDeactivate();
			}
			var id=me.player.getCurrentNode();
			var marker=this.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			this.ggLastActivMarker=marker;
		}
		this._slidingcontainer.appendChild(this._map_1);
		this._homebgbutton=document.createElement('div');
		this._homebgbutton__img=document.createElement('img');
		this._homebgbutton__img.className='ggskin ggskin_svg';
		this._homebgbutton__img.setAttribute('src',basePath + 'images/homebgbutton.svg');
		this._homebgbutton__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._homebgbutton__img['ondragstart']=function() { return false; };
		this._homebgbutton.appendChild(this._homebgbutton__img);
		this._homebgbutton.ggId="home-bg-button";
		this._homebgbutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._homebgbutton.ggVisible=true;
		this._homebgbutton.className='ggskin ggskin_svg ';
		this._homebgbutton.ggType='svg';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 702px;';
		hs+='position : absolute;';
		hs+='top : 900px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		this._homebgbutton.setAttribute('style',hs);
		this._homebgbutton.style[domTransform + 'Origin']='50% 50%';
		me._homebgbutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._homebgbutton.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._homebgbutton.ggUpdatePosition=function (useTransition) {
		}
		this._slidingcontainer.appendChild(this._homebgbutton);
		this._videobutton=document.createElement('div');
		this._videobutton__img=document.createElement('img');
		this._videobutton__img.className='ggskin ggskin_svg';
		this._videobutton__img.setAttribute('src',basePath + 'images/videobutton.svg');
		this._videobutton__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._videobutton__img['ondragstart']=function() { return false; };
		this._videobutton.appendChild(this._videobutton__img);
		this._videobutton.ggId="video-button";
		this._videobutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._videobutton.ggVisible=true;
		this._videobutton.className='ggskin ggskin_svg ';
		this._videobutton.ggType='svg';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 702px;';
		hs+='position : absolute;';
		hs+='top : 840px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		this._videobutton.setAttribute('style',hs);
		this._videobutton.style[domTransform + 'Origin']='50% 50%';
		me._videobutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._videobutton.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._videobutton.ggUpdatePosition=function (useTransition) {
		}
		this._slidingcontainer.appendChild(this._videobutton);
		this._mapbutton=document.createElement('div');
		this._mapbutton__img=document.createElement('img');
		this._mapbutton__img.className='ggskin ggskin_svg';
		this._mapbutton__img.setAttribute('src',basePath + 'images/mapbutton.svg');
		this._mapbutton__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._mapbutton__img['ondragstart']=function() { return false; };
		this._mapbutton.appendChild(this._mapbutton__img);
		this._mapbutton.ggId="map-button";
		this._mapbutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mapbutton.ggVisible=true;
		this._mapbutton.className='ggskin ggskin_svg ';
		this._mapbutton.ggType='svg';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 702px;';
		hs+='position : absolute;';
		hs+='top : 780px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		this._mapbutton.setAttribute('style',hs);
		this._mapbutton.style[domTransform + 'Origin']='50% 50%';
		me._mapbutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._mapbutton.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._mapbutton.ggUpdatePosition=function (useTransition) {
		}
		this._slidingcontainer.appendChild(this._mapbutton);
		this._infobutton=document.createElement('div');
		this._infobutton__img=document.createElement('img');
		this._infobutton__img.className='ggskin ggskin_svg';
		this._infobutton__img.setAttribute('src',basePath + 'images/infobutton.svg');
		this._infobutton__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._infobutton__img['ondragstart']=function() { return false; };
		this._infobutton.appendChild(this._infobutton__img);
		this._infobutton.ggId="info-button";
		this._infobutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._infobutton.ggVisible=true;
		this._infobutton.className='ggskin ggskin_svg ';
		this._infobutton.ggType='svg';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 702px;';
		hs+='position : absolute;';
		hs+='top : 720px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		this._infobutton.setAttribute('style',hs);
		this._infobutton.style[domTransform + 'Origin']='50% 50%';
		me._infobutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._infobutton.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._infobutton.ggUpdatePosition=function (useTransition) {
		}
		this._slidingcontainer.appendChild(this._infobutton);
		this._slideshow0=document.createElement('div');
		this._slideshow0.ggId="slideshow";
		this._slideshow0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._slideshow0.ggVisible=true;
		this._slideshow0.className='ggskin ggskin_rectangle ';
		this._slideshow0.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 580px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 768px;';
		hs+='pointer-events:auto;';
		this._slideshow0.setAttribute('style',hs);
		this._slideshow0.style[domTransform + 'Origin']='50% 50%';
		me._slideshow0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._slideshow0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._slideshow0.ggUpdatePosition=function (useTransition) {
		}
		this._slidingcontainer.appendChild(this._slideshow0);
		this._slideshow=document.createElement('div');
		this._slideshow__text=document.createElement('div');
		this._slideshow.className='ggskin ggskin_textdiv';
		this._slideshow.ggTextDiv=this._slideshow__text;
		this._slideshow.ggId="slideshow";
		this._slideshow.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._slideshow.ggVisible=true;
		this._slideshow.className='ggskin ggskin_text info_header';
		this._slideshow.ggType='text';
		hs ='';
		hs+='height : 56px;';
		hs+='position : absolute;';
		hs+='right : 230px;';
		hs+='top : 252px;';
		hs+='visibility : inherit;';
		hs+='width : 336px;';
		hs+='pointer-events:auto;';
		this._slideshow.setAttribute('style',hs);
		this._slideshow.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._slideshow__text.setAttribute('style',hs);
		this._slideshow__text.innerHTML="SLIDESHOW";
		this._slideshow.appendChild(this._slideshow__text);
		me._slideshow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._slideshow.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._slideshow.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
			}
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((334-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._slidingcontainer.appendChild(this._slideshow);
		this._slideshowfade=document.createElement('div');
		this._slideshowfade__text=document.createElement('div');
		this._slideshowfade.className='ggskin ggskin_textdiv';
		this._slideshowfade.ggTextDiv=this._slideshowfade__text;
		this._slideshowfade.ggId="slideshow-fade";
		this._slideshowfade.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._slideshowfade.ggVisible=true;
		this._slideshowfade.className='ggskin ggskin_text ';
		this._slideshowfade.ggType='text';
		hs ='';
		hs+='height : 580px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 769px;';
		hs+='pointer-events:auto;';
		this._slideshowfade.setAttribute('style',hs);
		this._slideshowfade.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 769px;';
		hs+='height: 580px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._slideshowfade__text.setAttribute('style',hs);
		this._slideshowfade__text.innerHTML="";
		this._slideshowfade.appendChild(this._slideshowfade__text);
		me._slideshowfade.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._slideshowfade.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._slideshowfade.logicBlock_text = function() {
			var newLogicStateText;
			if (
				(me.player.getVariableValue('showGallery') == 99)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(me.player.getVariableValue('showGallery') == 1)
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._slideshowfade.ggCurrentLogicStateText != newLogicStateText) {
				me._slideshowfade.ggCurrentLogicStateText = newLogicStateText;
				me._slideshowfade.style[domTransition]='';
				if (me._slideshowfade.ggCurrentLogicStateText == 0) {
					me._slideshowfade.ggText="";
					me._slideshowfade__text.innerHTML=me._slideshowfade.ggText;
					if (me._slideshowfade.ggUpdateText) {
					me._slideshowfade.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._slideshowfade.ggUpdatePosition) me._slideshowfade.ggUpdatePosition();
					}
				}
				else if (me._slideshowfade.ggCurrentLogicStateText == 1) {
					me._slideshowfade.ggText="<iframe width='769' height='580' src='fade.html' frameborder='0'  scrolling='no'><\/iframe>\n\n";
					me._slideshowfade__text.innerHTML=me._slideshowfade.ggText;
					if (me._slideshowfade.ggUpdateText) {
					me._slideshowfade.ggUpdateText=function() {
						var hs="<iframe width='769' height='580' src='fade.html' frameborder='0'  scrolling='no'><\/iframe>\n\n";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._slideshowfade.ggUpdatePosition) me._slideshowfade.ggUpdatePosition();
					}
				}
				else {
					me._slideshowfade.ggText="";
					me._slideshowfade__text.innerHTML=me._slideshowfade.ggText;
					if (me._slideshowfade.ggUpdateText) {
					me._slideshowfade.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._slideshowfade.ggUpdatePosition) me._slideshowfade.ggUpdatePosition();
					}
				}
			}
		}
		this._slideshowfade.ggUpdatePosition=function (useTransition) {
		}
		this._slidingcontainer.appendChild(this._slideshowfade);
		this.divSkin.appendChild(this._slidingcontainer);
		this._panomenu=document.createElement('div');
		this._panomenu.ggId="pano-menu";
		this._panomenu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._panomenu.ggVisible=true;
		this._panomenu.className='ggskin ggskin_container ';
		this._panomenu.ggType='container';
		hs ='';
		hs+='height : 124px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 900px;';
		hs+='visibility : inherit;';
		hs+='width : 768px;';
		hs+='pointer-events:none;';
		this._panomenu.setAttribute('style',hs);
		this._panomenu.style[domTransform + 'Origin']='50% 50%';
		me._panomenu.ggIsActive=function() {
			return false;
		}
		me._panomenu.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._panomenu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._panomenu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._panomenu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._panomenu.style[domTransition]='';
				if (me._panomenu.ggCurrentLogicStateVisible == 0) {
					me._panomenu.style.visibility="hidden";
					me._panomenu.ggVisible=false;
				}
				else {
					me._panomenu.style.visibility=(Number(me._panomenu.style.opacity)>0||!me._panomenu.style.opacity)?'inherit':'hidden';
					me._panomenu.ggVisible=true;
				}
			}
		}
		this._panomenu.ggUpdatePosition=function (useTransition) {
		}
		this._homebutton=document.createElement('div');
		this._homebutton__img=document.createElement('img');
		this._homebutton__img.className='ggskin ggskin_svg';
		this._homebutton__img.setAttribute('src',basePath + 'images/homebutton.svg');
		this._homebutton__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._homebutton__img['ondragstart']=function() { return false; };
		this._homebutton.appendChild(this._homebutton__img);
		this._homebutton.ggId="home-button";
		this._homebutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._homebutton.ggVisible=true;
		this._homebutton.className='ggskin ggskin_svg ';
		this._homebutton.ggType='svg';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 702px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		this._homebutton.setAttribute('style',hs);
		this._homebutton.style[domTransform + 'Origin']='50% 50%';
		me._homebutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._homebutton.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._homebutton.ggUpdatePosition=function (useTransition) {
		}
		this._panomenu.appendChild(this._homebutton);
		this._panomenubg=document.createElement('div');
		this._panomenubg__img=document.createElement('img');
		this._panomenubg__img.className='ggskin ggskin_svg';
		this._panomenubg__img.setAttribute('src',basePath + 'images/panomenubg.svg');
		this._panomenubg__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._panomenubg__img['ondragstart']=function() { return false; };
		this._panomenubg.appendChild(this._panomenubg__img);
		this._panomenubg.ggId="pano-menu-bg";
		this._panomenubg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._panomenubg.ggVisible=true;
		this._panomenubg.className='ggskin ggskin_svg ';
		this._panomenubg.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 87px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 768px;';
		hs+='pointer-events:auto;';
		this._panomenubg.setAttribute('style',hs);
		this._panomenubg.style[domTransform + 'Origin']='50% 50%';
		me._panomenubg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._panomenubg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._panomenubg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
			}
		}
		this._panomenu.appendChild(this._panomenubg);
		this._forwardbutton=document.createElement('div');
		this._forwardbutton.ggId="forward-button";
		this._forwardbutton.ggDy=21;
		this._forwardbutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._forwardbutton.ggVisible=true;
		this._forwardbutton.className='ggskin ggskin_rectangle ';
		this._forwardbutton.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 6px;';
		hs+='border-radius : 6px;';
		hs+='background : #55aa00;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 19px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		this._forwardbutton.setAttribute('style',hs);
		this._forwardbutton.style[domTransform + 'Origin']='50% 50%';
		me._forwardbutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._forwardbutton.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._forwardbutton.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		this._panomenu.appendChild(this._forwardbutton);
		this._backbutton=document.createElement('div');
		this._backbutton.ggId="back-button";
		this._backbutton.ggDy=21;
		this._backbutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._backbutton.ggVisible=true;
		this._backbutton.className='ggskin ggskin_rectangle ';
		this._backbutton.ggType='rectangle';
		hs ='';
		hs+='background : #55aa00;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 19px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._backbutton.setAttribute('style',hs);
		this._backbutton.style[domTransform + 'Origin']='50% 50%';
		me._backbutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._backbutton.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._backbutton.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		this._panomenu.appendChild(this._backbutton);
		this._backtopanoramacontainer=document.createElement('div');
		this._backtopanoramacontainer.ggId="back-to-panorama-container";
		this._backtopanoramacontainer.ggDx=0;
		this._backtopanoramacontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._backtopanoramacontainer.ggVisible=true;
		this._backtopanoramacontainer.className='ggskin ggskin_container ';
		this._backtopanoramacontainer.ggType='container';
		hs ='';
		hs+='bottom : 26px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:none;';
		this._backtopanoramacontainer.setAttribute('style',hs);
		this._backtopanoramacontainer.style[domTransform + 'Origin']='50% 50%';
		me._backtopanoramacontainer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._backtopanoramacontainer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._backtopanoramacontainer.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._backpanoramabutton=document.createElement('div');
		this._backpanoramabutton__img=document.createElement('img');
		this._backpanoramabutton__img.className='ggskin ggskin_svg';
		this._backpanoramabutton__img.setAttribute('src',basePath + 'images/backpanoramabutton.svg');
		this._backpanoramabutton__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._backpanoramabutton__img['ondragstart']=function() { return false; };
		this._backpanoramabutton.appendChild(this._backpanoramabutton__img);
		this._backpanoramabutton.ggId="back-panorama-button";
		this._backpanoramabutton.ggDx=0;
		this._backpanoramabutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._backpanoramabutton.ggVisible=true;
		this._backpanoramabutton.className='ggskin ggskin_svg ';
		this._backpanoramabutton.ggType='svg';
		hs ='';
		hs+='bottom : 2px;';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		this._backpanoramabutton.setAttribute('style',hs);
		this._backpanoramabutton.style[domTransform + 'Origin']='50% 50%';
		me._backpanoramabutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._backpanoramabutton.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._backpanoramabutton.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._backtopanoramacontainer.appendChild(this._backpanoramabutton);
		this._backtopanoramatitle=document.createElement('div');
		this._backtopanoramatitle__text=document.createElement('div');
		this._backtopanoramatitle.className='ggskin ggskin_textdiv';
		this._backtopanoramatitle.ggTextDiv=this._backtopanoramatitle__text;
		this._backtopanoramatitle.ggId="back-to-panorama-title";
		this._backtopanoramatitle.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._backtopanoramatitle.ggVisible=true;
		this._backtopanoramatitle.className='ggskin ggskin_text info_buttons';
		this._backtopanoramatitle.ggType='text';
		hs ='';
		hs+='height : 22px;';
		hs+='left : 11px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 129px;';
		hs+='pointer-events:auto;';
		this._backtopanoramatitle.setAttribute('style',hs);
		this._backtopanoramatitle.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._backtopanoramatitle__text.setAttribute('style',hs);
		this._backtopanoramatitle__text.innerHTML="BACK TO PANORAMA";
		this._backtopanoramatitle.appendChild(this._backtopanoramatitle__text);
		me._backtopanoramatitle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._backtopanoramatitle.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._backtopanoramatitle.ggUpdatePosition=function (useTransition) {
		}
		this._backtopanoramacontainer.appendChild(this._backtopanoramatitle);
		this._rectangle_10=document.createElement('div');
		this._rectangle_10.ggId="Rectangle 1";
		this._rectangle_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_10.ggVisible=true;
		this._rectangle_10.className='ggskin ggskin_rectangle ';
		this._rectangle_10.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 183px;';
		hs+='pointer-events:auto;';
		this._rectangle_10.setAttribute('style',hs);
		this._rectangle_10.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_10.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rectangle_10.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._slidingcontainer.style[domTransition]='none';
			} else {
				me._slidingcontainer.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._slidingcontainer.ggParameter.rx=0;me._slidingcontainer.ggParameter.ry=0;
			me._slidingcontainer.style[domTransform]=parameterToTransform(me._slidingcontainer.ggParameter);
			me._backtopanoramacontainer.style[domTransition]='none';
			me._backtopanoramacontainer.style.visibility='hidden';
			me._backtopanoramacontainer.ggVisible=false;
			me._moreinformationcontainer.style[domTransition]='none';
			me._moreinformationcontainer.style.visibility=(Number(me._moreinformationcontainer.style.opacity)>0||!me._moreinformationcontainer.style.opacity)?'inherit':'hidden';
			me._moreinformationcontainer.ggVisible=true;
			me._homebutton.style[domTransition]='none';
			me._homebutton.style.visibility=(Number(me._homebutton.style.opacity)>0||!me._homebutton.style.opacity)?'inherit':'hidden';
			me._homebutton.ggVisible=true;
			if (me.player.transitionsDisabled) {
				me._homebutton.style[domTransition]='none';
			} else {
				me._homebutton.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._homebutton.ggParameter.rx=0;me._homebutton.ggParameter.ry=0;
			me._homebutton.style[domTransform]=parameterToTransform(me._homebutton.ggParameter);
			me.player.setVariableValue('showGallery', Number("99"));
			me._panotitle.style[domTransition]='none';
			me._panotitle.style.visibility=(Number(me._panotitle.style.opacity)>0||!me._panotitle.style.opacity)?'inherit':'hidden';
			me._panotitle.ggVisible=true;
		}
		this._rectangle_10.ggUpdatePosition=function (useTransition) {
		}
		this._backtopanoramacontainer.appendChild(this._rectangle_10);
		this._panomenu.appendChild(this._backtopanoramacontainer);
		this._moreinformationcontainer=document.createElement('div');
		this._moreinformationcontainer.ggId="more-information-container";
		this._moreinformationcontainer.ggDx=0;
		this._moreinformationcontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._moreinformationcontainer.ggVisible=true;
		this._moreinformationcontainer.className='ggskin ggskin_container ';
		this._moreinformationcontainer.ggType='container';
		hs ='';
		hs+='bottom : 26px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:none;';
		this._moreinformationcontainer.setAttribute('style',hs);
		this._moreinformationcontainer.style[domTransform + 'Origin']='50% 50%';
		me._moreinformationcontainer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._moreinformationcontainer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._moreinformationcontainer.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._moreinformationbutton=document.createElement('div');
		this._moreinformationbutton__img=document.createElement('img');
		this._moreinformationbutton__img.className='ggskin ggskin_svg';
		this._moreinformationbutton__img.setAttribute('src',basePath + 'images/moreinformationbutton.svg');
		this._moreinformationbutton__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._moreinformationbutton__img['ondragstart']=function() { return false; };
		this._moreinformationbutton.appendChild(this._moreinformationbutton__img);
		this._moreinformationbutton.ggId="more-information-button";
		this._moreinformationbutton.ggDx=0;
		this._moreinformationbutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._moreinformationbutton.ggVisible=true;
		this._moreinformationbutton.className='ggskin ggskin_svg ';
		this._moreinformationbutton.ggType='svg';
		hs ='';
		hs+='bottom : 2px;';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		this._moreinformationbutton.setAttribute('style',hs);
		this._moreinformationbutton.style[domTransform + 'Origin']='50% 50%';
		me._moreinformationbutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._moreinformationbutton.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._moreinformationbutton.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._moreinformationcontainer.appendChild(this._moreinformationbutton);
		this._moreinformationtitle=document.createElement('div');
		this._moreinformationtitle__text=document.createElement('div');
		this._moreinformationtitle.className='ggskin ggskin_textdiv';
		this._moreinformationtitle.ggTextDiv=this._moreinformationtitle__text;
		this._moreinformationtitle.ggId="more-information-title";
		this._moreinformationtitle.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._moreinformationtitle.ggVisible=true;
		this._moreinformationtitle.className='ggskin ggskin_text info_buttons';
		this._moreinformationtitle.ggType='text';
		hs ='';
		hs+='height : 22px;';
		hs+='left : 11px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 129px;';
		hs+='pointer-events:auto;';
		this._moreinformationtitle.setAttribute('style',hs);
		this._moreinformationtitle.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._moreinformationtitle__text.setAttribute('style',hs);
		this._moreinformationtitle__text.innerHTML="MORE INFORMATION";
		this._moreinformationtitle.appendChild(this._moreinformationtitle__text);
		me._moreinformationtitle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._moreinformationtitle.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._moreinformationtitle.ggUpdatePosition=function (useTransition) {
		}
		this._moreinformationcontainer.appendChild(this._moreinformationtitle);
		this._rectangle_1=document.createElement('div');
		this._rectangle_1.ggId="Rectangle 1";
		this._rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_1.ggVisible=true;
		this._rectangle_1.className='ggskin ggskin_rectangle ';
		this._rectangle_1.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 183px;';
		hs+='pointer-events:auto;';
		this._rectangle_1.setAttribute('style',hs);
		this._rectangle_1.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rectangle_1.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._slidingcontainer.style[domTransition]='none';
			} else {
				me._slidingcontainer.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._slidingcontainer.ggParameter.rx=0;me._slidingcontainer.ggParameter.ry=-1024;
			me._slidingcontainer.style[domTransform]=parameterToTransform(me._slidingcontainer.ggParameter);
			me._moreinformationcontainer.style[domTransition]='none';
			me._moreinformationcontainer.style.visibility='hidden';
			me._moreinformationcontainer.ggVisible=false;
			me._homebutton.style[domTransition]='none';
			me._homebutton.style.visibility='hidden';
			me._homebutton.ggVisible=false;
			me._backtopanoramacontainer.style[domTransition]='none';
			me._backtopanoramacontainer.style.visibility=(Number(me._backtopanoramacontainer.style.opacity)>0||!me._backtopanoramacontainer.style.opacity)?'inherit':'hidden';
			me._backtopanoramacontainer.ggVisible=true;
			if (me.player.transitionsDisabled) {
				me._homebutton.style[domTransition]='none';
			} else {
				me._homebutton.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._homebutton.ggParameter.rx=0;me._homebutton.ggParameter.ry=30;
			me._homebutton.style[domTransform]=parameterToTransform(me._homebutton.ggParameter);
			me.player.setVariableValue('showGallery', Number("1"));
			me._panotitle.style[domTransition]='none';
			me._panotitle.style.visibility='hidden';
			me._panotitle.ggVisible=false;
		}
		this._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		this._moreinformationcontainer.appendChild(this._rectangle_1);
		this._panomenu.appendChild(this._moreinformationcontainer);
		this.divSkin.appendChild(this._panomenu);
		this._panotitle=document.createElement('div');
		this._panotitle__text=document.createElement('div');
		this._panotitle.className='ggskin ggskin_textdiv';
		this._panotitle.ggTextDiv=this._panotitle__text;
		this._panotitle.ggId="pano-title";
		this._panotitle.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._panotitle.ggVisible=true;
		this._panotitle.className='ggskin ggskin_text info_header';
		this._panotitle.ggType='text';
		hs ='';
		hs+='height : 56px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 336px;';
		hs+='pointer-events:auto;';
		this._panotitle.setAttribute('style',hs);
		this._panotitle.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._panotitle__text.setAttribute('style',hs);
		this._panotitle__text.innerHTML="Dr David Silverberg on location";
		this._panotitle.appendChild(this._panotitle__text);
		me._panotitle.ggIsActive=function() {
			return false;
		}
		me._panotitle.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._panotitle.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
			}
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((334-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this.divSkin.appendChild(this._panotitle);
		this._landmenu=document.createElement('div');
		this._landmenu.ggId="land-menu";
		this._landmenu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._landmenu.ggVisible=false;
		this._landmenu.className='ggskin ggskin_container ';
		this._landmenu.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 67px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 1024px;';
		hs+='pointer-events:none;';
		this._landmenu.setAttribute('style',hs);
		this._landmenu.style[domTransform + 'Origin']='50% 50%';
		me._landmenu.ggIsActive=function() {
			return false;
		}
		me._landmenu.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._landmenu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._landmenu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._landmenu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._landmenu.style[domTransition]='';
				if (me._landmenu.ggCurrentLogicStateVisible == 0) {
					me._landmenu.style.visibility=(Number(me._landmenu.style.opacity)>0||!me._landmenu.style.opacity)?'inherit':'hidden';
					me._landmenu.ggVisible=true;
				}
				else {
					me._landmenu.style.visibility="hidden";
					me._landmenu.ggVisible=false;
				}
			}
		}
		this._landmenu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
			}
		}
		this._homelandbutton=document.createElement('div');
		this._homelandbutton__img=document.createElement('img');
		this._homelandbutton__img.className='ggskin ggskin_svg';
		this._homelandbutton__img.setAttribute('src',basePath + 'images/homelandbutton.svg');
		this._homelandbutton__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._homelandbutton__img['ondragstart']=function() { return false; };
		this._homelandbutton.appendChild(this._homelandbutton__img);
		this._homelandbutton.ggId="home-land-button";
		this._homelandbutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._homelandbutton.ggVisible=true;
		this._homelandbutton.className='ggskin ggskin_svg ';
		this._homelandbutton.ggType='svg';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 24px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		this._homelandbutton.setAttribute('style',hs);
		this._homelandbutton.style[domTransform + 'Origin']='50% 50%';
		me._homelandbutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._homelandbutton.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._homelandbutton.ggUpdatePosition=function (useTransition) {
		}
		this._landmenu.appendChild(this._homelandbutton);
		this._landscapemenu=document.createElement('div');
		this._landscapemenu__img=document.createElement('img');
		this._landscapemenu__img.className='ggskin ggskin_svg';
		this._landscapemenu__img.setAttribute('src',basePath + 'images/landscapemenu.svg');
		this._landscapemenu__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._landscapemenu__img['ondragstart']=function() { return false; };
		this._landscapemenu.appendChild(this._landscapemenu__img);
		this._landscapemenu.ggId="landscape-menu";
		this._landscapemenu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._landscapemenu.ggVisible=true;
		this._landscapemenu.className='ggskin ggskin_svg ';
		this._landscapemenu.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 34px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1024px;';
		hs+='pointer-events:auto;';
		this._landscapemenu.setAttribute('style',hs);
		this._landscapemenu.style[domTransform + 'Origin']='50% 50%';
		me._landscapemenu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._landscapemenu.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._landscapemenu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
			}
		}
		this._landmenu.appendChild(this._landscapemenu);
		this.divSkin.appendChild(this._landmenu);
		this._map_1.ggMarkerArray=[];
		this._map_1.ggMarkerInstances=[];
		this._map_1.ggGoogleMarkerArray=[];
		this._map_1.ggMapId = 'googlesatellite';
		this._map_1.ggTileAvailable=function(x, y, z) {
			var mapDetails = me.player.getMapDetails(me._map_1.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		this._map_1.ggInitMap=function() {
			me._map_1.ggMapNotLoaded = false;
			var mapType = me.player.getMapType(me._map_1.ggMapId);
			var mapDetails = me.player.getMapDetails(me._map_1.ggMapId);
			if (mapType == 'file') {
				me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			} else {
				me._map_1.style.backgroundColor = '#fff';
			}
			var gps;
			if (me.player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=me.player.getNodeLatLng();
			} else {
				gps=me.player.getNodeMapCoords(null, me._map_1.ggMapId);
			}
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = new google.maps.LatLng(0,0);
			}
			if (mapType == 'web') {
				var mapTypeId;
				if (me._map_1.ggMapId == 'googleroadmap') {
					mapTypeId = google.maps.MapTypeId.ROADMAP;
				} else if (me._map_1.ggMapId == 'googlehybrid') {
					mapTypeId = google.maps.MapTypeId.HYBRID;
				} else if (me._map_1.ggMapId == 'googlesatellite') {
					mapTypeId = google.maps.MapTypeId.SATELLITE;
				} else if (me._map_1.ggMapId == 'googleterrain') {
					mapTypeId = google.maps.MapTypeId.TERRAIN;
				} else {
					mapTypeId = mapDetails['mapprovider'];
				}
				var mapOptions = {
					zoom: 14,
					center: activeNodeLatLng,
					mapTypeId: mapTypeId,
					disableDefaultUI: true,
					streetViewControl: false
				};
				me._map_1.ggMap = new google.maps.Map(me._map_1, mapOptions);
				if (mapTypeId == 'openstreetmap') {
					me._map_1.ggMap.mapTypes.set('openstreetmap', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							if (mapDetails['mapstyle'] == 'streets') {
								return 'http://tile.openstreetmap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							} else if (mapDetails['mapstyle'] == 'outdoors') {
								return 'http://a.tile.opentopomap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							}
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapstyle'] == 'outdoors' ? 17 : 18
					}));
				}
				if (mapTypeId == 'mapbox') {
					me._map_1.ggMap.mapTypes.set('mapbox', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							return 'https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] + '/' + zoom + '/' + coord.x + '/' + coord.y + '@2x.png?access_token='  + mapDetails['mapkey'];
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: 18
					}));
				}
				if (mapTypeId == 'custom') {
					me._map_1.ggMap.mapTypes.set('custom', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							var urlString = mapDetails['mapurltemplate'];
							urlString = urlString.replace('{s}', 'a');
							urlString = urlString.replace('{z}', zoom);
							urlString = urlString.replace('{x}', coord.x);
							urlString = urlString.replace('{y}', coord.y);
							return urlString;
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapmaxzoom']
					}));
				}
			} else if (mapType == 'file') {
				var mapOptions = {
				  backgroundColor: mapDetails['bgcolor'],
					zoom: 7,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: activeNodeLatLng,
					disableDefaultUI: true,
					streetViewControl: false
				};
				me._map_1.ggMap = new google.maps.Map(me._map_1, mapOptions);
				var customMapType = new google.maps.ImageMapType({
					getTileUrl: function(coord, zoom) {
						if (me._map_1.ggTileAvailable(coord.x, coord.y, zoom)) {
							return 'images/maptiles/' + me._map_1.ggMapId + '/' + zoom + '/' + coord.x + '_' + coord.y + '.' + mapDetails['tileformat'];
						} else {
							return null;
						}
					},
					tileSize: new google.maps.Size(256, 256),
					minZoom: 7,
					maxZoom: 7 + mapDetails['zoomlevels'],
					name: mapDetails['title'],
				});
				me._map_1.ggMap.mapTypes.set(me._map_1.ggMapId, customMapType);
				me._map_1.ggMap.setMapTypeId(me._map_1.ggMapId);
				google.maps.event.addListener(me._map_1.ggMap, 'center_changed', function() {
					checkBounds();
				});
				google.maps.event.addListener(me._map_1.ggMap, 'zoom_changed', function() {
					checkBounds();
				});
				var inCheckBounds = false;
				var mapAR = mapDetails['width'] / mapDetails['height'];
				var mapWidthInDeg = 360.0 / Math.pow(2, 7);
				var mapHeightInDeg = mapWidthInDeg / mapAR;
				function checkBounds() {
					if (inCheckBounds) return;
					inCheckBounds = true;
					var mapCenter = me._map_1.ggMap.getCenter();
					var currentZoom = me._map_1.ggMap.getZoom();
					var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
					var xOffset = (me._map_1.clientWidth / 2.0) * pixelInDeg;
					var yOffset = (me._map_1.clientHeight / 2.0) * pixelInDeg;
					var x = mapCenter.lng();
					var y = mapCenter.lat();
					if (x > mapWidthInDeg - xOffset) x = mapWidthInDeg - xOffset;
					if (x < xOffset) x = xOffset;
					if (y < -mapHeightInDeg + yOffset) y = -mapHeightInDeg + yOffset;
					if (y > -yOffset) y = -yOffset;
					me._map_1.ggMap.setCenter(new google.maps.LatLng(y, x));
					inCheckBounds = false;
				}
			}
		}
		this._map_1.ggClearMap=function() {
		me._map_1.ggMap = null;
		me._map_1.ggClearMapMarkers();
		me._map_1.ggMapNotLoaded = true;
		}
		this._map_1.ggClearMapMarkers=function() {
			me._map_1.ggLastActivMarker = null;
			for (i = 0; i < me._map_1.ggGoogleMarkerArray.length; i ++) {
				me._map_1.ggGoogleMarkerArray[i].setMap(null);
			}
			me._map_1.ggGoogleMarkerArray=[];
		}
		this._map_1.ggFitBounds=function(force) {
			if (!me._map_1.ggMarkerBounds.isEmpty()) {
				if (me._map_1.ggMarkerInstances.length > 1 || me._map_1.ggGoogleMarkerArray.length > 1) {
					me._map_1.ggMap.fitBounds(me._map_1.ggMarkerBounds, 30);
					me._map_1.ggMap.panToBounds(me._map_1.ggMarkerBounds);
				} else {
					me._map_1.ggMap.setCenter(me._map_1.ggMarkerBounds.getCenter());
					if (me.player.getMapType(me._map_1.ggMapId) == 'web') {
						me._map_1.ggMap.setZoom(18);
					} else {
						me._map_1.ggMap.setZoom(7);
					}
				}
			}
		}
		this._map_1.ggInitMapMarkers=function(updateMapBounds) {
			me._map_1.ggClearMapMarkers();
			var ids=me.player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._map_1.ggMarkerBounds = new google.maps.LatLngBounds();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (me.player.getMapType(me._map_1.ggMapId) == 'web') {
					gps=me.player.getNodeLatLng(id);
				} else {
					gps=me.player.getNodeMapCoords(id, me._map_1.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = new google.maps.LatLng(gps[0], gps[1]);
					marker = new google.maps.Marker({position: markerLocation,map: me._map_1.ggMap});
					marker.setTitle(me.player.getNodeTitle(id));
					marker.setAnimation(google.maps.Animation.DROP);
					marker.setClickable(true);
					marker.ggId=id;
					google.maps.event.addListener(marker, 'click', function() {
						me.player.openNext('{' + this.ggId + '}');
						activeNodeLatLng=me.position;
						lastFov=-1; // force radar update
					});
					me._map_1.ggGoogleMarkerArray.push(marker);
					me._map_1.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && !me._map_1.ggMarkerBounds.isEmpty() && updateMapBounds) {
				me._map_1.ggFitBounds(false);
			}
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
		}
		this.player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		this.player.addListener('configloaded', function() {
			me._map_1.ggInitMap();
			me._map_1.ggInitMapMarkers(true);
		});
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyDoubleClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.player.addListener('changenodeid', function() {
		me.ggUserdata=me.player.userdata;
		me._map_1.ggNodeChange();
	});
	this.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	this.player.addListener('timer', this.skinTimerEvent);
	this.addSkin();
	me._slidingcontainer.logicBlock_visible();
	me._panomenu.logicBlock_visible();
	me._landmenu.logicBlock_visible();
	me._slideshowfade.logicBlock_text();
	player.addListener('sizechanged', function(args) { me._slidingcontainer.logicBlock_visible();me._panomenu.logicBlock_visible();me._landmenu.logicBlock_visible(); });
	player.addListener('changenodeid', function(args) { me._slideshowfade.logicBlock_text(); });
	player.addListener('varchanged_showGallery', function(args) { me._slideshowfade.logicBlock_text(); });
};