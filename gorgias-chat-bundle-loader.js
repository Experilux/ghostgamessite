!function(){var appId=11869;var script=document.createElement('script')
script.src='https://config.gorgias.chat/gorgias-chat-bundle.js?rev=47096128&applicationId='+appId
script.id='gorgias-chat-bundle'
var gorgiasChatHandler={get(target,prop){if(prop!="init"&&prop!="resolve"){throw new Error("You are trying to use the Gorgias Chat API before its initialization (property or function \""+prop+"\")! Please use `GorgiasChat.init()`. Refer to our documentation https://docs.gorgias.com/gorgias-chat/advanced-customization-new-chat for more info.")}
let value=target[prop]
return(typeof value==='function')?value.bind(target):value}}
window.GorgiasChat=new Proxy({},gorgiasChatHandler)
var initialisation=new Promise(function(resolve,reject){window.GorgiasChat.resolve=resolve})
window.GorgiasChat.init=function(){return initialisation;}
window.gorgiasChatPendingEvents=[]
function appendScriptTag(){document.body.appendChild(script)}
if(document.readyState==='loading'){document.addEventListener("DOMContentLoaded",appendScriptTag)}else{appendScriptTag()}
var gorgiasChatHandlerLegacy={get(target,prop){if(prop!="init"){throw new Error("You are using the legacy `gorgiasChat` Chat API! Please use `GorgiasChat` instead. Refer to our documentation https://docs.gorgias.com/gorgias-chat/advanced-customization-new-chat for more info.")}
let value=target[prop]
return(typeof value==='function')?value.bind(target):value}}
window.gorgiasChat=new Proxy({},gorgiasChatHandlerLegacy)
window.gorgiasChat.init=function(){console.warn("You are using the legacy `gorgiasChat.init()` function, please use the unified `GorgiasChat` chat API (`GorgiasChat.init()`). Refer to our documentation https://docs.gorgias.com/gorgias-chat/advanced-customization-new-chat for more info.");return initialisation;}}()