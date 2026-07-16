const menuBtn=document.querySelector('.menu-btn');const mobileNav=document.querySelector('.mobile-nav');menuBtn?.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open?'true':'false')});document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>mobileNav.classList.remove('open')));

const scenarioData={
 beach:{label:'Море и плаж',category:'Плаж',items:[['Плажна хавлия','2 бр.'],['Сенник / плажна палатка',''],['UV облекло','2 бр.']]},
 mountain:{label:'Планина',category:'Навън',items:[['Топъл слой','2 бр.'],['Дъждобран',''],['Слинг / ергономична раница','']]},
 travel:{label:'Пътуване',category:'Под ръка',items:[['Резервни дрехи','2 комплекта'],['Документи',''],['Храна за път','']]},
 camping:{label:'Къмпинг',category:'Къмпинг',items:[['Постелка',''],['Лампа / фенер',''],['Мрежа против насекоми','']]}
};
document.querySelectorAll('.scenario').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('.scenario').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
 const d=scenarioData[btn.dataset.scenario];
 document.getElementById('scenarioLabel').textContent=d.label;
 document.getElementById('scenarioCategory').textContent=d.category;
 const labels=document.querySelectorAll('.scenario-items label');
 labels.forEach((label,i)=>{const [name,qty]=d.items[i];label.innerHTML='<input type="checkbox"> '+name+(qty?' <em>'+qty+'</em>':'')});
}));

function openModal(id){const m=document.getElementById(id);m?.classList.add('open');m?.setAttribute('aria-hidden','false')}
function closeModal(id){const m=document.getElementById(id);m?.classList.remove('open');m?.setAttribute('aria-hidden','true')}
document.getElementById('aiPersonalize')?.addEventListener('click',()=>openModal('aiModal'));
document.getElementById('openReport')?.addEventListener('click',()=>openModal('reportModal'));
document.querySelectorAll('.store-link').forEach(btn=>btn.addEventListener('click',()=>{document.getElementById('storeTitle').textContent=btn.dataset.store;openModal('storeModal')}));
document.querySelectorAll('[data-close]').forEach(btn=>btn.addEventListener('click',()=>closeModal(btn.dataset.close)));
document.querySelectorAll('.modal-backdrop').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)closeModal(m.id)}));