(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1165],{76386:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/share/[[...shareParams]]",function(){return r(66556)}])},66556:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSP:function(){return N},config:function(){return P},default:function(){return D}});var t=r(39324),i=r(71209),s=r(22830),a=r(35250),o=r(13995),u=r(9181),l=r.n(u),d=r(70079),c=r(1454),h=r(94968),v=r(32004),_=r(77851),f=r(88327),g=r(50744),m=r(32542),x=r(31621),p=r(75864);function j(e){var n=e.sharedConversationId,r=e.initiallyHighlightedMessageId,t=e.continueConversationUrl,i=(0,x.GR)(n);return(0,a.jsx)(m.gB.Provider,{value:n,children:(0,a.jsx)(m.XA.Provider,{value:i,children:(0,a.jsx)(p.Z,{clientThreadId:n,setClientThreadId:function(){},initiallyHighlightedMessageId:r,continueConversationUrl:t})})})}var N=!0,P={runtime:"nodejs"},C=(0,h.vU)({home:{id:"sharedConversation.home",defaultMessage:"Home",description:"Home link text in error message"}});function D(e){if("error"===e.serverResponse.type)return(0,a.jsx)(y,{error:e.serverResponse.error});var n=(0,i._)((0,t._)({},e),{conversationData:e.serverResponse.data});return e.continueMode?(0,a.jsx)(I,(0,t._)({},n)):e.moderationMode?(0,a.jsx)(g.Z,{children:(0,a.jsx)(w,(0,t._)({},n))}):(0,a.jsx)(w,(0,t._)({},n))}function I(e){var n=(0,s._)((0,d.useState)(function(){return(0,x.OX)()}),1)[0];x.tQ.initThreadFromServerData(n,e.conversationData,!0,e.sharedConversationId);var r=(0,o.NL)();return(null!=e.plugins&&r.setQueryData(e.plugins.map(function(e){return e.id}),e.plugins),null!=e.chatPageProps)?(0,a.jsx)(_.ZP,(0,i._)((0,t._)({},e.chatPageProps),{clientThreadId:n})):null}function w(e){x.tQ.initThreadFromServerData(e.sharedConversationId,e.conversationData,!0);var n=(0,o.NL)();return null!=e.plugins&&n.setQueryData(e.plugins.map(function(e){return e.id}),e.plugins),(0,a.jsx)(j,(0,i._)((0,t._)({},e),{initiallyHighlightedMessageId:e.conversationData.highlighted_message_id,continueConversationUrl:e.conversationData.continue_conversation_url}))}function y(e){var n=e.error;return(0,a.jsx)("div",{className:"mx-8 mt-8 flex flex-col items-center sm:mt-16",children:(0,a.jsxs)("div",{className:"max-w-xl rounded-lg bg-red-500 px-8 py-4 text-white",role:"alert",children:[(0,a.jsx)("div",{children:n}),(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsxs)(l(),{href:"/",className:"flex items-center gap-2",children:[(0,a.jsx)(f.ZP,{icon:c.m6D}),(0,a.jsx)(v.Z,(0,t._)({},C.home))]})})]})})}}},function(e){e.O(0,[2798,8246,1741,6786,5960,8948,3504,4984,7483,3551,4521,6493,1230,8937,7851,9774,2888,179],function(){return e(e.s=76386)}),_N_E=e.O()}]);