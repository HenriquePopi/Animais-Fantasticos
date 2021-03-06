import ScrollSuave from './modules/scroll-suave.js';
import ScrollAnima from './modules/scroll-anima.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
//import initAnimaNumeros from './modules/anima-numeros.js';
import Funcionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetchanimais.js';
import fetchBtnc from './modules/fetchbtnc.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init()

const acordion = new Accordion('[data-anime="accordion"] dt', "ativo");

acordion.init()

const tabNav = new TabNav('[data-tab="menu"] li','[data-tab="content"] section')
tabNav.init()



const modal = new Modal('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]');
modal.init()
const tooltip = new Tooltip('[data-tooltip]');
tooltip.init()
const dropDownMenu = new DropdownMenu('[data-dropdown]');
dropDownMenu.init()
const menuMobile = new MenuMobile('[data-menu="lista"]','[data-menu="button"]') 
menuMobile.init()
const funcionamento = new Funcionamento('[data-semana]')
funcionamento.init()

const scrollAnima = new ScrollAnima('[data-anime="scroll"]')
scrollAnima.init()

fetchAnimais('../../animaisapi.json', ".numeros-grid")
fetchBtnc(`https://blockchain.info/ticker`)