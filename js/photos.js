var imgDataPath="./photos.json",imgPath="https://cdn.jsdelivr.net/gh/Goopher97/blog_volantis_auto@main/photos/",imgMaxNum=50,windowWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(windowWidth<768)var imageWidth=145;else imageWidth=250;const photo={page:1,offset:imgMaxNum,init:function(){var t=this;$.getJSON(imgDataPath,(function(i){t.render(t.page,i),t.eventListen(i)}))},constructHtml(t){const{imageWidth:i,imageX:a,imageY:e,name:n,imgPath:m,imgName:o,imgNameWithPattern:d}=t;return`<div class="card lozad" style="width:${i}px">\n                  <div class="ImageInCard" style="height:${i*e/a}px">\n                    <a data-fancybox="gallery" href="${m}${n}/${d}" data-caption="${o}" title="${o}">\n                            <img src="${m}${n}/${d}">\n                    </a>\n                  </div>\n                </div>`},render:function(t,i=[]){if(this.data=i,!i.length)return;var a,e,n,m,o,d="";let l="",s="";i.forEach(((t,i)=>{l+=`<li class="nav-item" role="presentation">\n          <a class="nav-link ${0===i?"active":""} photo-tab" id="home-tab" photo-uuid="${t.name}" data-toggle="tab" href="#${t.name}"  role="tab" aria-controls="${t.name}" aria-selected="true">${t.name}</a>\n        </li>`}));const[r={}]=i,{children:g=[],name:h}=r;g.forEach(((t,i)=>{a=t.split(" ")[1],e=a.split(".")[0],n=t.split(" ")[0],m=n.split(".")[0],o=n.split(".")[1];let l={imageWidth:imageWidth,imageX:m,imageY:o,name:h,imgName:e,imgPath:imgPath,imgNameWithPattern:a};d+=this.constructHtml(l)})),s+=` <div class="tab-pane fade show active"  role="tabpanel" aria-labelledby="home-tab">${d}</div>`;const c=`<ul class="nav nav-tabs" id="myTab" role="tablist">${l}</ul>`,p=`<div class="tab-content" id="myTabContent">${s}</div>`;$("#imageTab").append(c),$(".ImageGrid").append(p),this.minigrid()},eventListen:function(t){let i=this;var a,e,n,m,o;$('a[data-toggle="tab"]').on("shown.bs.tab",(function(d){$(".ImageGrid").empty();const l=$(d.target).attr("photo-uuid"),s=t.find((t=>t.name===l))||{},{children:r,name:g}=s;let h="";r.forEach(((t,d)=>{a=t.split(" ")[1],e=a.split(".")[0],n=t.split(" ")[0],m=n.split(".")[0],o=n.split(".")[1];let l={imageWidth:imageWidth,imageX:m,imageY:o,name:g,imgName:e,imgPath:imgPath,imgNameWithPattern:a};h+=i.constructHtml(l)})),$(".ImageGrid").append(h),i.minigrid()}))},minigrid:function(){var t=new Minigrid({container:".ImageGrid",item:".card",gutter:12});t.mount(),$(window).resize((function(){t.mount()}))}};photo.init();