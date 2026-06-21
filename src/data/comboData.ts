import BellamGavvalu from "@/assets/sweets/Bellam Gavvalu.png";
import BellamPalliChikki from "@/assets/sweets/Bellam Palli Chikki.png";
import BellamJeedipappuPaakam from "@/assets/sweets/Bellam Jeedipappu Paakam.png";
import BellamNuvvulaChimmidi from "@/assets/sweets/Bellam Nuvvula Chimmidi.png";
import BellamNethiAriselu from "@/assets/sweets/Bellam Nethi Ariselu.png";
import BellamBoondiChikki from "@/assets/sweets/Bellam Boondi Chikki.png";
import BellamBobbatlu from "@/assets/sweets/Bellam Bobbatlu.png";
import BellamSunnunda from "@/assets/sweets/Bellam Sunnunda.png";
import BellamPongadalu from "@/assets/sweets/Bellam Pongadalu.png";
import BellamBandharuHalwa from "@/assets/sweets/Bellam Bandharu Halwa.png";
import BellamBoorelu from "@/assets/sweets/Bellam Boorelu(Poornalu).png";

import DryFruitBellamPootharekulu from "@/assets/sweets/Dry Fruit Bellam Pootharekulu.png";
import DryFruitKajjikaya from "@/assets/sweets/Dry Fruit Kajjikaya.png";
import DryFruitLaddu from "@/assets/sweets/Dry Fruit Laddu.png";

import Gulabeelu from "@/assets/sweets/Gulabeelu.png";
import Kaajalu from "@/assets/sweets/Kaajalu.png";
import KaajuBurfy from "@/assets/sweets/Kaaju Burfy.png";
import KovaKajjikaya from "@/assets/sweets/Kova Kajjikaya(Chandrakala).png";
import PanchadaraLaddu from "@/assets/sweets/Panchadara Laddu.png";
import RoastedKovaBillalu from "@/assets/sweets/Roasted Kova Billalu.png";
import Chalividi from "@/assets/sweets/Chalividi.png";

// HOT ITEMS
import AgraMixture from "@/assets/hot/Agra Mixture.png";
import ButterMurukulu from "@/assets/hot/Butter Murukulu.png";
import ChittiPappuChekodi from "@/assets/hot/Chitti Pappu Chekodi.png";
import ChittiVaamuChekodi from "@/assets/hot/Chitti Vaamu Chekodi.png";
import CornFlakesMixture from "@/assets/hot/CornFlakes Mixture.png";
import JeediPappuPakodi from "@/assets/hot/Jeedi Pappu Pakodi.png";
import Janthikalu from "@/assets/hot/Janthikalu.png";
import KaajuMasala from "@/assets/hot/Kaaju Masala.png";
import Mixture from "@/assets/hot/Mixture.png";
import PesaraPappuChekkalu from "@/assets/hot/Pesara Pappu Chekkalu(Spicy).png";
import SagguBiyyamChakkalu from "@/assets/hot/Saggu Biyyam Chakkalu.png";
import Sev from "@/assets/hot/Sev.png";
export interface ComboItem {
  en: string;
  te: string;
  image: string;
}

export interface Combo {
  id: number;
  nameEn: string;
  nameTe: string;
  items: ComboItem[];
  pricing: {
    "250": {
      actual: number;
      offer: number;
    };
    "500": {
      actual: number;
      offer: number;
    };
  };
}

export const comboData: Combo[] = [
  {
    id: 1,
    nameEn: "Weekly Health Combo",
    nameTe: "వీక్లీ హెల్త్ కాంబో",
    items: [
      { en: "Bellam Gavvalu", te: "బెల్లం గవ్వలు", image: BellamGavvalu },
      { en: "Palli Chikki", te: "పల్లి చిక్కి", image: BellamPalliChikki },
      { en: "Kajjikaya", te: "కాజ్జికాయ", image: KovaKajjikaya },
      { en: "Murukulu", te: "మురుకులు", image: ButterMurukulu },
      { en: "Mixture", te: "మిక్చర్", image: Mixture },
    ],
    pricing: {
      "250": { actual: 700, offer: 599 },
      "500": { actual: 1400, offer: 1149 },
    },
  },

  {
    id: 2,
    nameEn: "Weekly Health Combo",
    nameTe: "వీక్లీ హెల్త్ కాంబో",
    items: [
      { en: "Bellam Namkeen", te: "బెల్లం నమ్కీన్", image: BellamGavvalu },
      { en: "Mothichoor Bellam Chikki", te: "మోతిచూర్ చిక్కి", image: PanchadaraLaddu },
      { en: "Dry Fruit Kajjikaya", te: "డ్రై ఫ్రూట్ కాజ్జికాయ", image: DryFruitKajjikaya },
      { en: "Butter Ribbon Pakodi", te: "బటర్ పకోడి", image: ButterMurukulu },
      { en: "Cornflakes Mixture", te: "కార్న్ ఫ్లేక్స్ మిక్చర్", image: CornFlakesMixture },
    ],
    pricing: {
      "250": { actual: 700, offer: 599 },
      "500": { actual: 1400, offer: 1149 },
    },
  },

  {
    id: 3,
    nameEn: "Weekly Health Combo",
    nameTe: "వీక్లీ హెల్త్ కాంబో",
    items: [
      { en: "Bellam Kommulu", te: "బెల్లం కొమ్ములు", image: BellamJeedipappuPaakam },
      { en: "Bellam Boondi Mithai", te: "బెల్లం మిఠాయి", image: BellamBoondiChikki },
      { en: "Gulabeelu", te: "గులాబీలు", image: Gulabeelu },
      { en: "Saggu Biyyam Chekkalu", te: "సగ్గుబియ్యం చెక్కలు", image: SagguBiyyamChakkalu },
      { en: "Karam Boondi", te: "కారం బూంది", image: Sev },
    ],
    pricing: {
      "250": { actual: 700, offer: 599 },
      "500": { actual: 1400, offer: 1149 },
    },
  },

  {
    id: 4,
    nameEn: "Weekly Health Combo",
    nameTe: "వీక్లీ హెల్త్ కాంబో", 
    items: [
      { en: "Jeedipappu Chikki", te: "జీడిపప్పు చిక్కి", image: BellamJeedipappuPaakam },
      { en: "Nuvvula Chimmidi", te: "నువ్వుల చిమ్మిడి", image: BellamNuvvulaChimmidi },
      { en: "Bellam Sunnunda", te: "బెల్లం సున్నుండ", image: BellamSunnunda },
      { en: "Pesarapappu Chillilu", te: "పెసరపప్పు", image: PesaraPappuChekkalu },
      { en: "Agra Mixture", te: "ఆగ్రా మిక్చర్", image: AgraMixture },
    ],
    pricing: {
      "250": { actual: 900, offer: 799 },
      "500": { actual: 1800, offer: 1549 },
    },
  },

  {
    id: 5,
    nameEn: "Weekly Health Combo",
    nameTe: "వీక్లీ హెల్త్ కాంబో",
    items: [
      { en: "Bellam Bandhar Halwa", te: "బందరు హల్వా", image: BellamBandharuHalwa },
      { en: "Dry Fruit Pootharekulu", te: "పూతరేకులు", image: DryFruitBellamPootharekulu },
      { en: "Bellam Boondi Laddu", te: "బూంది లడ్డు", image: BellamBoorelu },
      { en: "Chitti Chekodi", te: "చిట్టి చెకోడి", image: ChittiPappuChekodi },
      { en: "Jeedipappu Pakodi", te: "జీడిపప్పు పకోడి", image: JeediPappuPakodi },
    ],
    pricing: {
      "250": { actual: 900, offer: 799 },
      "500": { actual: 1800, offer: 1549 },
    },
  },

  {
    id: 6,
    nameEn: "Weekly Health Combo",
    nameTe: "వీక్లీ హెల్త్ కాంబో",
    items: [
      { en: "Roasted Kali Choori", te: "రోస్టెడ్", image: RoastedKovaBillalu },
      { en: "Brown Kaaja", te: "బ్రౌన్ ఖాజా", image: Kaajalu },
      { en: "Kaaju Burfy", te: "కాజు బర్ఫీ", image: KaajuBurfy },
      { en: "Karam Namkeen", te: "కారం నమ్కీన్", image: KaajuMasala },
      { en: "Mothi Chikki", te: "మోతి చిక్కి", image: BellamPalliChikki },
    ],
    pricing: {
      "250": { actual: 900, offer: 799 },
      "500": { actual: 1800, offer: 1549 },
    },
  },

  {
    id: 7,
    nameEn: "Weekly Health Combo",
    nameTe: "వీక్లీ హెల్త్ కాంబో",
    items: [
      { en: "Bellam Nethi Ariselu", te: "నేతి అరిసెలు", image: BellamNethiAriselu },
      { en: "Dry Fruit Laddu", te: "డ్రై ఫ్రూట్ లడ్డు", image: DryFruitLaddu },
      { en: "Bellam Pootharekulu", te: "పూతరేకులు", image: DryFruitBellamPootharekulu },
      { en: "Aalu Bhujiya", te: "ఆలు భుజియా", image: Sev },
      { en: "Janthikalu", te: "జంతికలు", image: Janthikalu },
    ],
    pricing: {
      "250": { actual: 800, offer: 699 },
      "500": { actual: 1400, offer: 1149 },
    },
  },

  {
    id: 8,
    nameEn: "Weekly Health Combo",
    nameTe: "వీక్లీ హెల్త్ కాంబో",
    items: [
      { en: "Bellam Bobbatlu", te: "బొబ్బట్లు", image: BellamBobbatlu },
      { en: "Pongadalu", te: "పొంగడాలు", image: BellamPongadalu },
      { en: "Nuvvula Ariselu", te: "నువ్వుల అరిసెలు", image: BellamNethiAriselu },
      { en: "Karam Poosa", te: "కారం పూస", image: Sev },
      { en: "Palli Pakodi", te: "పల్లి పకోడి", image: JeediPappuPakodi },
    ],
    pricing: {
      "250": { actual: 700, offer: 699 },
      "500": { actual: 1600, offer: 1349 },
    },
  },

  {
    id: 9,
    nameEn: "Weekly Health Combo",
    nameTe: "వీక్లీ హెల్త్ కాంబో",
    items: [
      { en: "Sajja Appalu", te: "సజ్జ అప్పాలు", image: Chalividi },
      { en: "Paakam Garelu", te: "పాకం గారెలు", image: BellamBoorelu },
      { en: "Annamayya Laddu", te: "అన్నమయ్య లడ్డు", image: PanchadaraLaddu },
      { en: "Vaamu Poosa", te: "వాము పూస", image: ChittiVaamuChekodi },
      { en: "Ghaliya", te: "ఘాలియా", image: ChittiVaamuChekodi },
    ],
    pricing: {
      "250": { actual: 700, offer: 699 },
      "500": { actual: 1400, offer: 1149 },
    },
  },
];