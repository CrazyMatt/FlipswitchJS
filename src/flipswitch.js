/*
	FlipSwitch.js
	
	Copyright (c) 2016 Crazymatt.net
	
	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
	documentation files (the "Software"), to deal in the Software without restriction, including without limitation
	the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
	and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of this Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
	THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
	TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	
*/

function toggleFlipSwitch(id){
	var flipswitch = document.getElementById(id);
	
	var isInitialized = ((flipswitch.getAttribute("data-is-flipswitch") == "true") ? true : false);
	if(!isInitialized){console.warn('FlipSwitch "' + id + '" never initialized.'); return;}
	
	var cValue = flipswitch.getAttribute("data-flipswitch-value");
	var parent = flipswitch.childNodes[0];
	var child = parent.childNodes[0];
	
	if(cValue == "false"){
		parent.style.paddingLeft = "27px";
		parent.style.paddingRight = "2px";
		flipswitch.setAttribute("data-flipswitch-value", "true");
	}else if(cValue == "true"){
		parent.style.paddingLeft = "2px";
		parent.style.paddingRight = "27px";
		flipswitch.setAttribute("data-flipswitch-value", "false");
	}
	
	console.log('FlipSwitch "' + id + '" toggled.');
}

function newFlipSwitch(id){
	function getAttrDefault(dId, attribute){
		if(document.getElementById(dId).getAttribute(attribute) == null){
			switch(attribute){
				case "data-flipswitch-color-front":
					return "#cccccc";
					break;
				case "data-flipswitch-color-back":
					return "#898989";
					break;
			}
		} else {
			return document.getElementById(dId).getAttribute(attribute);
		}
	}
	
	var cElem = document.getElementById(id);
	var parentCSS = "width: 21px; height: 21px; padding: 2px; padding-right: 27px; border-radius: 7px; background-color: " + getAttrDefault(id, "data-flipswitch-color-back") + ";";
	var childCSS = "width: 21px; height: 21px; border-radius: 5px; background-color: " + getAttrDefault(id, "data-flipswitch-color-front") + ";";
	
	cElem.innerHTML = '<div style="' + parentCSS + '"><div style="' + childCSS + '"></div></div>';
	
	var parent = cElem.childNodes[0];
	var child = parent.childNodes[0];
	
	cElem.setAttribute("data-flipswitch-value", "false");
	cElem.setAttribute("data-is-flipswitch", "true");
	
	parent.addEventListener("click", function() {toggleFlipSwitch(id);}, false);
	
	console.log('FlipSwitch "' + id + '" created.');
}

function getFlipSwitchValue(id){
	return ((document.getElementById(id).getAttribute("data-flipswitch-value") == "true") ? true : false);
}
