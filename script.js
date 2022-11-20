const $ = (sel) => document.querySelector(sel);

const cimg = $('#icon');
const cname = $('#name');

const champions = [];
let loading = false;

(async () => {
  const res = await fetch('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-summary.json');
  const raw = await res.json();

  champions.push(...raw.slice(1));
})();

$('#btn').addEventListener('click', () => {
  if (!champions.length || loading) return;
  loading = true;

  const c = champions.at(Math.floor(Math.random() * champions.length));

  cimg.onload = () => {
    loading = false;
    cname.textContent = c.name;
  }
  
  cimg.src = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/' + c.id + '.png';
})