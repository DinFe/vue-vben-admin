var y=Object.defineProperty,b=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var d=(i,e,t)=>e in i?y(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,u=(i,e)=>{for(var t in e||(e={}))v.call(e,t)&&d(i,t,e[t]);if(f)for(var t of f(e))w.call(e,t)&&d(i,t,e[t]);return i},h=(i,e)=>b(i,k(e));var _=(i,e,t)=>new Promise((s,n)=>{var m=r=>{try{a(t.next(r))}catch(l){n(l)}},o=r=>{try{a(t.throw(r))}catch(l){n(l)}},a=r=>r.done?s(r.value):Promise.resolve(r.value).then(m,o);a((t=t.apply(i,e)).next())});import"./componentMap-CI_tbXED.js";import"./entry/index-BoR6xJVt-1715568906032.js";import"./helper-BzjnrMUU.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DBD-rPR7.js";import"./antd-BmrhB3rb.js";import"./index-eimB2Yzs.js";import"./TableImg.vue_vue_type_style_index_0_lang-t0Y0dIuu.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import{_ as C}from"./index-B-AbmooN.js";import{g as S}from"./system-CruVmj1g.js";import{P as A}from"./index-B8qYn4jD.js";import{_ as B}from"./DeptTree.vue_vue_type_script_setup_true_lang-CKbj5Rja.js";import{d as P}from"./account.data-BB7JHTiU.js";import{V as R}from"./index-D1pQuO9w.js";import{d as T,f as g,r as V,Z as I,a8 as N,a9 as x,k as c,$,u as p,ac as q}from"./vue-BjERyvPm.js";import"./useFormItem-B4KjxddK.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DQfn9cCp.js";import"./index-DW6OC16O.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-D5ZrhPGh.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-ZMU28OLr.js";import"./index-DicK6aTM.js";import"./base64Conver-bBv-IO2K.js";import"./useWindowSizeFn-DYxWZ0vQ.js";import"./onMountedOrActivated-DcvTUt7V.js";import"./useSortable-Cr_qY9Bu.js";import"./download-DUAxyuYp.js";import"./useContentViewHeight-GBLpeseb.js";import"./index-RoYlAQU5.js";import"./useContextMenu-pORNUjTm.js";const z=[{title:"用户名",field:"account",width:120},{title:"昵称",field:"nickname",width:120},{title:"邮箱",field:"email",width:120},{title:"创建时间",field:"createTime",width:180},{title:"角色",field:"role",width:200},{title:"所属部门",field:"dept",slots:{default:({row:i})=>P[i.dept]}},{title:"备注",field:"remark"},{width:160,title:"操作",align:"center",slots:{default:"action"},fixed:"right"}],F=[{field:"account",title:"用户名",itemRender:{name:"AInput"},span:6},{field:"nickname",title:"昵称",itemRender:{name:"AInput"},span:6},{span:12,align:"right",className:"!pr-0",itemRender:{name:"AButtonGroup",children:[{props:{type:"primary",content:"查询",htmlType:"submit"},attrs:{class:"mr-2"}},{props:{type:"default",htmlType:"reset",content:"重置"}}]}}],H={class:"m-4 vxebasic-form-container"},ge=T({__name:"index",setup(i){const e=g(),t=g(),s=V({id:"VxeTable",keepSource:!0,columns:z,formConfig:{enabled:!0,items:F},height:"auto",proxyConfig:{ajax:{query:r=>_(this,[r],function*({page:o,form:a}){return S(h(u({page:o.currentPage,pageSize:o.pageSize},a),{searchInfo:t.value}))})}}}),n=(o="")=>{t.value=o,e.value&&e.value.commitProxy("query")},m=o=>[{label:"详情",onClick:()=>{}},{label:"编辑",onClick:()=>{}},{label:"删除",color:"error",popConfirm:{title:"是否确认删除",confirm:()=>{var r;(r=e.value)==null||r.remove(o)}}}];return(o,a)=>(I(),N(p(A),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:x(()=>[c(B,{class:"w-1/4 xl:w-1/5",onSelect:n}),$("div",H,[c(p(R),q({ref_key:"tableRef",ref:e},s),{action:x(({row:r})=>[c(p(C),{outside:"",actions:m(r)},null,8,["actions"])]),_:1},16)])]),_:1}))}});export{ge as default};
