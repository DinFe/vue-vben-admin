import{_}from"./BasicTable.vue_vue_type_script_setup_true_lang-x8zB9wOZ.js";import{_ as p}from"./TableImg.vue_vue_type_style_index_0_lang-t0Y0dIuu.js";import"./index-B-AbmooN.js";import{u as h}from"./useTable-Cycyh5o0.js";import{d as k}from"./table-CJRGxgVe.js";import{Q as l,a1 as y}from"./antd-BmrhB3rb.js";import{d as f,k as n,G as s,l as x,Z as e,_ as g,a9 as o,F as I,a0 as m,a8 as i,u as t,ab as v}from"./vue-BjERyvPm.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-COnEzApJ.js";import"./FormItem.vue_vue_type_script_lang-CF0bqIeM.js";import"./componentMap-CI_tbXED.js";import"./useFormItem-B4KjxddK.js";import"./entry/index-BoR6xJVt-1715568906032.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DQfn9cCp.js";import"./index-DW6OC16O.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-D5ZrhPGh.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-ZMU28OLr.js";import"./index-DicK6aTM.js";import"./index-eimB2Yzs.js";import"./useWindowSizeFn-DYxWZ0vQ.js";import"./base64Conver-bBv-IO2K.js";import"./helper-BzjnrMUU.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DBD-rPR7.js";import"./useForm-UBndzbaa.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./onMountedOrActivated-DcvTUt7V.js";import"./useSortable-Cr_qY9Bu.js";import"./download-DUAxyuYp.js";const w={class:"p-4"},ae=f({__name:"CustomerCell",setup(b){const u=[{title:"ID",dataIndex:"id",helpMessage:n("div",null,[s("这个是tsx渲染出来的helpMessage")])},{title:"头像",dataIndex:"avatar",width:100,helpMessage:x("div","这是vue h函数渲染出来的helpMessage")},{title:"分类",dataIndex:"category",width:80,align:"center",defaultHidden:!0},{title:"姓名",dataIndex:"name",width:120},{title:"图片列表1",dataIndex:"imgArr",helpMessage:["这是简单模式的图片列表","只会显示一张在表格中","但点击可预览多张图片"],width:140},{title:"照片列表2",dataIndex:"imgs",width:160},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no"},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}],[c]=h({title:"自定义列内容",titleHelpMessage:"表格中所有头像、图片均为mock生成，仅用于演示图片占位",api:k,columns:u,bordered:!0,showTableSetting:!0});return(T,A)=>(e(),g("div",w,[n(t(_),{onRegister:t(c)},{bodyCell:o(({column:a,record:r,text:d})=>[a.key==="id"?(e(),g(I,{key:0},[s(" ID: "+m(r.id),1)],64)):a.key==="no"?(e(),i(t(l),{key:1,color:"green"},{default:o(()=>[s(m(r.no),1)]),_:2},1024)):a.key==="avatar"?(e(),i(t(y),{key:2,size:60,src:r.avatar},null,8,["src"])):a.key==="imgArr"?(e(),i(t(p),{key:3,size:60,simpleShow:!0,imgList:d},null,8,["imgList"])):a.key==="imgs"?(e(),i(t(p),{key:4,size:60,imgList:d},null,8,["imgList"])):a.key==="category"?(e(),i(t(l),{key:5,color:"green"},{default:o(()=>[s(m(r.no),1)]),_:2},1024)):v("",!0)]),_:1},8,["onRegister"])]))}});export{ae as default};
