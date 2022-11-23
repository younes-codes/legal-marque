const buttons = document.getElementsByClassName('mate');
const buttonsDesktop = document.getElementsByClassName('active-bg-desktop');
const nameMate = document.getElementById('name');
const role = document.getElementById('role');
const flag = document.getElementById('flag');
const photo = document.getElementById('photo');
const summary = document.getElementById('summary');
const seeMore = document.getElementById('see-more');
const indicators = [...document.getElementsByClassName('indicator')];
const activeIndicator = document.getElementsByClassName('active-indicator');
const carouselContainer = document.getElementsByClassName('carousel-container');

let isOpen = false;
const arr = [...buttons];
const arrDesktop = [...buttonsDesktop];

console.log(indicators);

const clientWidth = document.documentElement.clientWidth;

arr.forEach((box, i) => {
  box.onclick = function () {
    if (clientWidth < 768) {
      box.classList.toggle('active-bg');
      box.children[2].classList.toggle('rotate-arrow');
      box.nextElementSibling.classList.toggle('active-presentation');
    }

    buttonsDesktop[0].classList.remove('active-bg-desktop');
    box.classList.add('active-bg-desktop');

    nameMate.innerHTML = arrTeam[i].name;
    role.innerHTML = arrTeam[i].role;
    summary.innerHTML = arrTeam[i].summary;
    flag.src = arrTeam[i].flag;
    photo.src = arrTeam[i].photo;
    summary.classList.remove('show');
    isOpen = false;
    seeMore.innerHTML = 'Voir plus';
  };
});

indicators.forEach((indicator, i) => {
  indicator.onclick = function () {
    activeIndicator[0].classList.remove('active-indicator');
    indicator.classList.add('active-indicator');
    carouselContainer[0].style.transform = `translateX(-${i * 100}vw)`;
    console.log(carouselContainer);
  };
});

seeMore.onclick = function () {
  summary.classList.toggle('show');
  isOpen = !isOpen;
  seeMore.innerHTML = isOpen ? 'Voir moins' : 'Voir plus';
};

const arrTeam = [
  {
    name: 'Brahima Soukouna',
    role: 'Associé (CH)',
    summary: `Brahima Soukouna est titulaire d’un master en droit de l’université
    de Genève qui lui a donné l’opportunité d’étudier également à
    l’université de Zurich et de Renmin en Chine. Etudiant parallèlement
    le management à l’Université de Harvard, Brahima Soukouna maîtrise
    désormais quatre langues : anglais, français, allemand et mandarin.
    Associé et expert en droit de la propriété intellectuelle, Brahima
    Soukouna a enchaîné les expériences professionnelles dans plusieurs
    pays pour acquérir une compétence internationale.`,
    flag: './assets/suisse.svg',
    photo: './assets/brahima.png',
  },
  {
    name: 'Judyta Kasperkiewicz',
    role: 'Associé (CH)',
    summary: `Judyta Kasperkiewicz est titulaire d’un master de droit et s’est également spécialisée en droit des technologies de l’information, en droit de la propriété intellectuelle et en droit pénal. Avocate avec une solide expérience en droit pénal et en droit des affaires acquise. Judyta Kasperkiewicz sillonne la planète sans discontinuer et a visité plus de trente pays en Europe, en Amérique du Nord, en Afrique et en Asie. Elle parle couramment le polonais, l’anglais et l’espagnol.`,
    flag: './assets/suisse.svg',
    photo: './assets/judyta.png',
  },
  {
    name: 'Jeovana Puente',
    role: 'Avocate (EC)',
    summary: `Depuis dix ans, Geovanna Puente intervient en tant que conseil et gestionnaire des droits de la propriété intellectuelle au niveau international. Elle a étudié l’origine et l’évolution du droit de la propriété intellectuelle à l’université Complutense de Madrid puis à l’université catholique pontificale en Équateur. Avocate et titulaire d’une maîtrise en propriété intellectuelle, elle parle couramment espagnol, anglais et français.`,
    flag: './assets/equateur.svg',
    photo: './assets/jeovana.png',
  },
  {
    name: 'Florin Sandu',
    role: 'Associé (RO)',
    summary: `Florin Sandu a étudié les sciences politiques à Fribourg en Suisse, mais aussi le droit sous toutes ses formes : droit comparé des contrats, arbitrage international, concurrence, gouvernance d’entreprise, et surtout le droit de la propriété intellectuelle. Avocat, il dispose d’une forte habilité à rédiger les contrats commerciaux et plus spécifiquement ce qui touche la propriété intellectuelle.`,
    flag: './assets/roumanie.svg',
    photo: './assets/florin.png',
  },
  {
    name: 'Elizabeth Cazzadore',
    role: 'Avocate (IT)',
    summary: `Elizabeth Cazzadore est une avocate formée au Venezuela et qui a complété sa formation avec une spécialisation dans le domaine de la propriété intellectuelle à Genève en Suisse. Elle a exercé dans divers cabinets d’avocats et a développé une solide expérience dans le domaine du contentieux en propriété intellectuelle.`,
    flag: './assets/italie.svg',
    photo: './assets/elizabeth.png',
  },
  {
    name: 'Luisa Maria Alvarez',
    role: 'Avocate (AUS)',
    summary: `Luisa Maria Alvarez a d’abord étudié le droit à l’université catholique de San Pablo au Pérou, avant de s’envoler pour la Suisse puis l’Australie pour se spécialiser en propriété intellectuelle. Forte de cette formation, Luisa Maria Alvarez est une Avocate polyglotte accomplie qui maîtrise parfaitement cinq langues : espagnol, anglais, portugais, allemand et français. Affiliée à l’institut des conseils en marques australien (IPTA), elle intervient régulièrement en Océanie et Amérique latine.`,
    flag: './assets/australie.svg',
    photo: './assets/luisa.png',
  },
  {
    name: 'Aminou Bouba',
    role: 'Associé (FR)',
    summary: `Aminou Bouba est Avocat depuis sept ans. Formé à l’Université Panthéon-Sorbonne en droit public des affaires à Paris, il s’est depuis spécialisé dans le contentieux international en matière d’arbitrage, en droit pénal, en droit de la propriété intellectuelle et en droit civil. En parallèle de son activité d’avocat, il est Professeur de Travaux Dirigés auprès de l’université de Cergy Pontoise en France.`,
    flag: './assets/france.svg',
    photo: './assets/aminou.png',
  },
  {
    name: 'Kevin Fournier',
    role: 'Associé (US)',
    summary: `Kevin est Avocat depuis plus de 25 ans. Titulaire d’un doctorat en droit de l’Université George Washington, il est mandataire agréé en Brevets et Marque auprès de l’Office des brevets en Europe. Spécialiste des accords technologiques, il dispose d’une forte expérience dans la rédaction de contrats complexes. Kevin use de ses nombreuses années en entreprise pour dispenser son savoir et accompagner les projets à haute technicité. Il parle couramment l’anglais et le français.`,
    flag: './assets/usa.svg',
    photo: './assets/kevin.png',
  },
];
