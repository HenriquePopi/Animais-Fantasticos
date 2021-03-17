import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
//import initAnimaNumeros from './modules/anima-numeros.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetchanimais.js';
import initFetchBtnc from './modules/fetchbtnc.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init()

const acordion = new Accordion('[data-anime="accordion"] dt', "ativo");

acordion.init()

const tabNav = new TabNav('[data-tab="menu"] li','[data-tab="content"] section')
tabNav.init()

initAnimacaoScroll();

const modal = new Modal('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]');
modal.init()
initTooltip();
initDropdownMenu();
initMenuMobile()
initFuncionamento()
initFetchAnimais()
initFetchBtnc()
