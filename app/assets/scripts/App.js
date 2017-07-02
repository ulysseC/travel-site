import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import Modal from './modules/Modal';
import StickyHeader from './modules/StickyHeader';



var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var modal = new Modal();
var stickyHeader = new StickyHeader();
