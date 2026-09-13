'use client';
import {useState} from 'react';
import {Moon,Sun,Menu,X,Stethoscope,Plane,MapPin,Mail,ArrowLeft,Heart,Globe2,MessageCircle,Award,FileBadge,Instagram,Facebook,Linkedin,ChevronDown} from 'lucide-react';

const whatsapp='201015683844';
const socials=[
  {name:'Instagram',url:'https://instagram.com/',icon:Instagram},
  {name:'Facebook',url:'https://facebook.com/',icon:Facebook},
  {name:'LinkedIn',url:'https://linkedin.com/',icon:Linkedin},
];

export default function Home(){
 const [dark,setDark]=useState(true);
 const [menuOpen,setMenuOpen]=useState(false);
 const [mobileOpen,setMobileOpen]=useState(false);
 const nav=[['الرئيسية','home'],['عني','about'],['الإنجازات','achievements'],['الشهادات','certificates'],['السفر','travel'],['التواصل','contact']];

 const go=(id)=>{
   setMenuOpen(false);
   setMobileOpen(false);
   document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
 };

 return <main className={dark?'min-h-screen bg-slate-950 text-white':'min-h-screen bg-stone-50 text-slate-900'}>
  <nav className={'fixed top-0 z-50 w-full border-b backdrop-blur-xl '+(dark?'border-white/10 bg-slate-950/85':'border-slate-200 bg-white/90')}>
   <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
    <button onClick={()=>go('home')} className="text-xl font-black">Mostafa <span className="text-cyan-500">Alswak</span></button>

    {/* Desktop dropdown navigation */}
    <div className="hidden md:block relative">
      <button
        onClick={()=>setMenuOpen(!menuOpen)}
        className={'nav-dropdown-btn inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-bold transition '+(dark?'border-white/10 bg-white/5 hover:bg-white/10':'border-slate-200 bg-white hover:bg-slate-50')}
        aria-expanded={menuOpen}
      >
        القائمة <ChevronDown size={18} className={menuOpen?'rotate-180 transition-transform':'transition-transform'}/>
      </button>
      <div className={'dropdown-menu '+(menuOpen?'dropdown-open':'')}>
        {nav.map(([t,id])=><button key={id} onClick={()=>go(id)}>{t}</button>)}
      </div>
    </div>

    <div className="flex items-center gap-2">
      <button aria-label="تغيير المظهر" onClick={()=>setDark(!dark)} className="rounded-full p-2 hover:bg-slate-500/10">{dark?<Sun size={20}/>:<Moon size={20}/>}</button>
      <button aria-label="فتح القائمة" className="md:hidden rounded-full p-2 hover:bg-slate-500/10" onClick={()=>setMobileOpen(!mobileOpen)}>{mobileOpen?<X/>:<Menu/>}</button>
    </div>
   </div>

   {/* Mobile dropdown */}
   <div className={'mobile-dropdown md:hidden '+(mobileOpen?'mobile-dropdown-open':'')}>
     {nav.map(([t,id])=><button onClick={()=>go(id)} key={id}>{t}</button>)}
   </div>
  </nav>

  <section id="home" className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pt-28 md:grid-cols-[1.2fr_.8fr]">
   <div className="max-w-3xl">
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 px-4 py-2 text-sm text-cyan-500"><Stethoscope size={17}/> DENTIST • TRAVELER • EXPLORER</div>
    <h1 className="text-5xl font-black leading-tight sm:text-7xl">أنا <span className="text-cyan-500">Mostafa Alswak</span></h1>
    <p className="mt-6 max-w-2xl text-xl leading-9 opacity-75">طبيب أسنان شغوف بالسفر، استكشاف العالم، والتعلم المستمر. أهلاً بك في موقعي الشخصي.</p>
    <div className="mt-8 flex flex-wrap gap-4"><button onClick={()=>go('about')} className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-bold text-slate-950">اكتشف المزيد <ArrowLeft size={18}/></button><button onClick={()=>go('contact')} className="rounded-full border px-6 py-3 font-bold">تواصل معي</button></div>
   </div>

   {/* Profile photo */}
   <div className="flex justify-center md:justify-end">
     <div className={'profile-frame '+(dark?'profile-dark':'profile-light')}>
       <div className="profile-glow"></div>
       <img src="/profile-placeholder.svg" alt="صورة مصطفى السواق" className="profile-photo"/>
       <div className="profile-label"><span className="h-2.5 w-2.5 rounded-full bg-cyan-400"></span> Mostafa Alswak</div>
     </div>
   </div>
  </section>

  <section id="about" className="mx-auto max-w-6xl px-5 py-24"><h2 className="text-4xl font-black">عني</h2><p className="mt-5 max-w-3xl text-lg leading-9 opacity-75">أعمل في مجال طب الأسنان، وأحب الجمع بين الحياة المهنية واكتشاف أماكن وثقافات جديدة. هذا الموقع مساحة للتعريف بي، بإنجازاتي، وشهاداتي واهتماماتي.</p>
   <div className="mt-10 grid gap-5 md:grid-cols-3">{[[Stethoscope,'طب الأسنان','اهتمام بالمجال الطبي والتعلم المستمر'],[Plane,'السفر','شغف باكتشاف أماكن وتجارب جديدة'],[Globe2,'الاستكشاف','فضول للتعرف على العالم وثقافاته']].map(([I,t,d])=><div key={t} className={'rounded-3xl border p-7 '+(dark?'border-white/10 bg-white/[.04]':'border-slate-200 bg-white')}><I className="text-cyan-500"/><h3 className="mt-5 text-xl font-bold">{t}</h3><p className="mt-2 opacity-65">{d}</p></div>)}</div>
  </section>

  <section id="achievements" className={'px-5 py-24 '+(dark?'bg-white/[.03]':'bg-slate-100')}><div className="mx-auto max-w-6xl"><div className="flex items-center gap-3"><Award className="text-cyan-500" size={32}/><h2 className="text-4xl font-black">الإنجازات</h2></div><p className="mt-4 max-w-3xl text-lg opacity-70">مساحة لعرض أهم إنجازاتي وتجربتي المهنية والتعليمية.</p>
   <div className="mt-10 grid gap-5 md:grid-cols-3">{['التطور الأكاديمي','التطوير المهني','المشاريع والتجارب'].map((t,i)=><article key={t} className={'rounded-3xl border p-7 '+(dark?'border-white/10 bg-white/[.04]':'border-slate-200 bg-white')}><span className="text-4xl font-black text-cyan-500">0{i+1}</span><h3 className="mt-5 text-xl font-bold">{t}</h3><p className="mt-2 opacity-65">أضف هنا تفاصيل الإنجاز، السنة، أو نبذة قصيرة عنه.</p></article>)}</div>
  </div></section>

  <section id="certificates" className="mx-auto max-w-6xl px-5 py-24"><div className="flex items-center gap-3"><FileBadge className="text-cyan-500" size={32}/><h2 className="text-4xl font-black">الشهادات</h2></div><p className="mt-4 max-w-3xl text-lg opacity-70">هنا يمكنك عرض الشهادات والدورات والاعتمادات التي حصلت عليها.</p>
   <div className="mt-10 grid gap-5 md:grid-cols-3">{['شهادة / دورة 01','شهادة / دورة 02','شهادة / دورة 03'].map((t,i)=><article key={t} className={'rounded-3xl border p-7 '+(dark?'border-white/10 bg-white/[.04]':'border-slate-200 bg-white')}><FileBadge className="text-cyan-500"/><h3 className="mt-5 text-xl font-bold">{t}</h3><p className="mt-2 opacity-65">ضع اسم الشهادة والجهة المانحة والتاريخ هنا.</p></article>)}</div>
  </section>

  <section id="travel" className="mx-auto max-w-6xl px-5 py-24"><div className="grid items-center gap-12 md:grid-cols-2"><div><h2 className="text-4xl font-black">السفر <span className="text-cyan-500">✈️</span></h2><p className="mt-5 text-lg leading-9 opacity-75">السفر بالنسبة لي فرصة للتجربة والتعلم ورؤية العالم من زوايا مختلفة. كل رحلة تضيف تجربة جديدة وذكرى مختلفة.</p><div className="mt-6 flex items-center gap-3 text-cyan-500"><MapPin/> <span className="font-bold">Exploring the world, one journey at a time.</span></div></div><div className={'rounded-[2rem] border p-10 text-center '+(dark?'border-white/10 bg-white/[.04]':'border-slate-200 bg-white')}><Plane className="mx-auto text-cyan-500" size={52}/><p className="mt-5 text-2xl font-black">Travel • Discover • Learn</p></div></div></section>

  <section id="contact" className="px-5 py-24"><div className={'mx-auto max-w-4xl rounded-[2rem] border p-10 text-center '+(dark?'border-white/10 bg-white/[.04]':'border-slate-200 bg-white')}><Heart className="mx-auto text-cyan-500"/><h2 className="mt-4 text-4xl font-black">تواصل معي</h2><p className="mt-4 opacity-70">يمكنك التواصل معي مباشرة عبر واتساب أو البريد الإلكتروني، ومتابعتي على منصات التواصل الاجتماعي.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-3"><a target="_blank" rel="noreferrer" href={`https://wa.me/${whatsapp}`} className="inline-flex items-center gap-2 rounded-full bg-green-500 px-7 py-3 font-bold text-white"><MessageCircle size={18}/> واتساب</a><a href="mailto:mostafaalswak0@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-7 py-3 font-bold text-slate-950"><Mail size={18}/> البريد الإلكتروني</a></div>
    <div className="mt-10 border-t border-slate-500/10 pt-7"><p className="mb-4 font-bold">تابعني على السوشيال ميديا</p><div className="flex justify-center gap-3">{socials.map(({name,url,icon:Icon})=><a key={name} target="_blank" rel="noreferrer" href={url} aria-label={name} className={'inline-flex items-center gap-2 rounded-full border px-5 py-3 font-semibold '+(dark?'border-white/10':'border-slate-200')}><Icon size={18}/>{name}</a>)}</div></div>
   </div></section>

  <footer className="border-t border-slate-500/10 px-5 py-8 text-center text-sm opacity-60">© {new Date().getFullYear()} Mostafa Alswak — Dentist & Traveler</footer>
 </main>
}
