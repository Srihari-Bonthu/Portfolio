var a=document.querySelector('.hamburger'),b=document.querySelector('.nav-menu');a.addEventListener('click',()=>{a.classList.toggle('active');b.classList.toggle('active')});for(const n of document.querySelectorAll('.nav-link'))n.addEventListener('click',()=>{a.classList.remove('active');b.classList.remove('active')});for(const B of document.querySelectorAll('a[href^="#"]'))B.addEventListener('click',function(e){e.preventDefault();var C=document.querySelector(this.getAttribute('href'));C?.scrollIntoView({behavior:'smooth',block:'start'})});window.addEventListener('scroll',()=>{var _a=document.querySelector('.navbar');window.scrollY>100?(_a.style.background='rgba(255, 255, 255, 0.98)',_a.style.boxShadow='0 2px 20px rgba(0, 0, 0, 0.15)'):(_a.style.background='rgba(255, 255, 255, 0.95)',_a.style.boxShadow='0 2px 10px rgba(0, 0, 0, 0.1)')});function c(){var D=document.createElement('div');D.className='scroll-progress';document.body.appendChild(D);window.addEventListener('scroll',()=>{var _A=window.pageYOffset,_b=document.body.offsetHeight-window.innerHeight,_c=_A/_b;D.style.transform=`scaleX(${_c})`})}function d(){var E=document.querySelectorAll('section[id]'),_B=document.querySelectorAll('.nav-link');window.addEventListener('scroll',()=>{let aA='';for(const aC of E){var aB=aC.offsetTop,_C=aC.clientHeight;window.pageYOffset>=(aB-200)&&(aA=aC.getAttribute('id'))}for(const aD of _B){aD.classList.remove('active');aD.getAttribute('href')===`#${aA}`&&aD.classList.add('active')}})}function A(){var aE=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.style.opacity='1';entry.target.style.transform='translateY(0)'}}}, {threshold:0.1,rootMargin:'0px 0px -50px 0px'});for(const aG of document.querySelectorAll('.skill-category')){aG.style.opacity='0';aG.style.transform='translateY(30px)';aG.style.transition='opacity 0.6s ease, transform 0.6s ease';aE.observe(aG)}for(const aH of document.querySelectorAll('.timeline-content')){aH.style.opacity='0';aH.style.transform='translateY(30px)';aH.style.transition='opacity 0.6s ease, transform 0.6s ease';aE.observe(aH)}var aF=document.querySelector('.education-card');aF&&(aF.style.opacity='0',aF.style.transform='translateY(30px)',aF.style.transition='opacity 0.6s ease, transform 0.6s ease',aE.observe(aF))}function f(aI,aJ,aK=100){let i=0;aI.innerHTML='';function _e(){i<aJ.length&&(aI.innerHTML+=aJ.charAt(i),i++,setTimeout(_e,aK))}_e()}function g(){var aL=document.querySelector('#contact-form');aL?.addEventListener('submit',e=>{e.preventDefault();alert('Thank you for your message! I\'ll get back to you soon.')})}function h(){for(const aM of document.querySelectorAll('.skill-tag'))aM.addEventListener('click',()=>{aM.style.transform='scale(1.05)';setTimeout(()=>aM.style.transform='scale(1)',200)})}function _(){var aN=document.querySelector('a[href^="mailto:"]');aN?.addEventListener('click',e=>{e.preventDefault();navigator.clipboard.writeText(aN.textContent).then(()=>{var aO=document.createElement('div');aO.textContent='Email copied to clipboard!';aO.style.cssText=`
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: #10b981;
                    color: white;
                    padding: 12px 20px;
                    border-radius: 8px;
                    z-index: 1000;
                    animation: slideIn 0.3s ease;
                `;document.body.appendChild(aO);setTimeout(()=>aO.remove(),3000)}).catch(()=>window.location.href=aN.href)})}var j=document.createElement('style');j.textContent=`
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .nav-link.active {
        color: #2563eb !important;
        position: relative;
    }
    
    .nav-link.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background: #2563eb;
    }
    
    .skill-tag {
        cursor: pointer;
        transition: transform 0.2s ease;
    }
    
    .skill-tag:hover {
        transform: translateY(-2px);
        background: #c7d2fe;
    }
`;document.head.appendChild(j);document.addEventListener('DOMContentLoaded',()=>{c();d();A();g();h();_();document.body.style.opacity='0';setTimeout(()=>{document.body.style.transition='opacity 0.5s ease';document.body.style.opacity='1'},100)});function k(aP,aQ){let aR;let _d;return function(){var aS=this,aT=arguments;!_d?(aP.apply(aS,aT),_d=Date.now()):(clearTimeout(aR),aR=setTimeout(function(){(Date.now()-_d)>=aQ&&(aP.apply(aS,aT),_d=Date.now())},aQ-(Date.now()-_d)))}}window.addEventListener('scroll',k(()=>{},16));
