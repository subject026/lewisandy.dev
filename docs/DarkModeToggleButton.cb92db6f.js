import{d as h,c as o,a as i,o as d,b as s,g as n,i as u,m as w,r as p,S as f,t as l}from"./chunks/web.399659b1.js";const v=l('<svg class="h-10 w-10 fill-inherit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6Zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4ZM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Z"></path></svg>'),k=l('<svg class="h-10 w-10 fill-inherit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6Zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4Zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Z"></path></svg>'),M=l('<button class="fill-neutral-500 dark:fill-neutral-500"></button>'),T=()=>n(v),$=()=>n(k),x=()=>localStorage.getItem("lewisAndyTheme")??"light",S=()=>{const[t,a]=o(x()),[c,r]=o(!1),m=()=>{a(t()==="light"?"dark":"light")};return i(()=>{t()==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("lewisAndyTheme",t())}),d(async()=>{r(!0)}),s(f,{get when(){return c()},get children(){const e=n(M);return e.$$click=m,u(e,(()=>{const g=w(()=>t()==="light",!0);return()=>g()?s($,{}):s(T,{})})()),p(),e}})};h(["click"]);export{S as default};
