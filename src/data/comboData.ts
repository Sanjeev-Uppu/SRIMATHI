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
import BellamGorimittilu from "@/assets/sweets/Bellam Gorimittilu.png";
import BellamDiamonds from "@/assets/sweets/Bellam Diamonds.png";
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
import BellamMothichoorChikki from "@/assets/sweets/Bellam Mothichoor Chikki.png";
import BellamKommulu from "@/assets/sweets/Bellam Kommulu.png";
import RoastedKhalakhand from "@/assets/sweets/Roasted Khalakhand.png";
import BellamPootharekulu from "@/assets/sweets/Bellam pootharekulu.png";
import BellamNuvvulaArisealu from "@/assets/sweets/Bellam Nuvvula Ariselu.png";
// PRASADAMS
import PaakamGarelu from "@/assets/prasadams/Paakam Garelu.png";
import AnnamayyaLaddu from "@/assets/prasadams/Annamayya Laddu.png";

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
import Namkeens from "@/assets/hot/Namkeens.png";
import MethiChekkalu from "@/assets/hot/Methi Chekkalu.png";
import ButterRibbonPakodi from "@/assets/hot/Butter Ribbon Pakodi.png";
import KaaramBoondi from "@/assets/hot/Kaaram Boondi.png";
import Alubujiya from "@/assets/hot/Alu bujiya.png";
import KaramPoosa from "@/assets/hot/Karam Poosa.png";
import SajjaAppalu from "@/assets/hot/Sajja Appalu.png";
import VaamuPusa from "@/assets/hot/Vaamu Pusa.png";
import Ghatiya from "@/assets/hot/Ghatiya.png";
import PalliPakodi from "@/assets/hot/Palli Pakodi.png";
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
      { en: "Kajjikayalu", te: "కాజ్జికాయలు", image: DryFruitKajjikaya }, /*----------Needs to replce --------------*/
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
      { en: "Bellam Namkeen", te: "బెల్లం నమ్కీన్", image: BellamDiamonds },
      { en: "Mothichoor Bellam Chikki", te: "మోతిచూర్ చిక్కి", image: BellamMothichoorChikki },
      { en: "Dry Fruit Kajjikayalu", te: "డ్రై ఫ్రూట్ కాజ్జికాయలు", image: DryFruitKajjikaya }, /*----------Needs to replce --------------*/
      { en: "Butter Ribbon Pakodi", te: "బటర్ రిబ్బన్ పకోడి", image: ButterRibbonPakodi }, /*----------Needs to replce --------------*/
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
      { en: "Bellam Kommulu", te: "బెల్లం కొమ్ములు", image: BellamKommulu },
      { en: "Bellam Boondi Mithai", te: "బెల్లం బూంది మిఠాయి", image: BellamBoondiChikki }, /*----------Needs to replce --------------*/
      { en: "Gulabeelu", te: "గులాబీలు", image: Gulabeelu },
      { en: "Saggu Biyyam Chekkalu", te: "సగ్గుబియ్యం చెక్కలు", image: SagguBiyyamChakkalu },
      { en: "Karam Boondi", te: "కారం బూంది", image: KaaramBoondi },
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
      { en: "Bellam Sunnundalu", te: "బెల్లం సున్నుండలు", image: BellamSunnunda }, /*----------Needs to replce --------------*/
      { en: "Pesarapappu Chekkalu", te: "పెసరపప్పు చెక్కలు", image: PesaraPappuChekkalu }, /*----------Needs to replce --------------*/
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
      { en: "Bellam Bandhar Halwa", te: "బెల్లం బందరు హల్వా", image: BellamBandharuHalwa }, /*----------Needs to replce --------------*/
      { en: "Dry Fruit Pootharekulu", te: " డ్రై ఫ్రూట్ పూతరేకులు", image: DryFruitBellamPootharekulu },/*----------Needs to replce --------------*/
      { en: "Bellam Boondi Chikki", te: "బెల్లం బూందీ చిక్కీ", image: BellamBoondiChikki }, /*----------Needs to replce --------------*/
      { en: "Chitti Pappu Chekodi", te: "చిట్టి చెకోడి", image: ChittiPappuChekodi },/*---------- final  -------------*/
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
      { en: "Roasted Kalakhand", te: "రోస్టెడ్ కళాఖండ్", image: RoastedKhalakhand }, /*----------Needs to replce --------------*/
      { en: "Roasted Kova Billalu", te: " ఖాజా", image: RoastedKovaBillalu }, /*---------- final --------------*/
      { en: "Kaaju Burfy", te: "కాజు బర్ఫీ", image: KaajuBurfy },
      { en: "Namkeen", te: "నమ్కీన్", image: Namkeens },
      { en: "Methi Chekkalu", te: "మేతి చెక్కలు", image: MethiChekkalu }, /*----------Needs to replce --------------*/
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
      { en: "Bellam Nethi Ariselu", te: "బెల్లం నేతి అరిసెలు", image: BellamNethiAriselu }, /*----------Needs to replce --------------*/
      { en: "Dry Fruit Laddu", te: "డ్రై ఫ్రూట్ లడ్డు", image: DryFruitLaddu },
      { en: "Bellam Pootharekulu", te: "బెల్లం పూతరేకులు", image: BellamPootharekulu },/*----------Needs to replce --------------*/
      { en: "Aalu Bhujiya", te: "ఆలు భుజియా", image: Alubujiya },
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
      { en: "Bellam Bobbatlu", te: "బెల్లం బొబ్బట్లు", image: BellamBobbatlu },/*----------Needs to replce --------------*/
      { en: "Pongadalu", te: "పొంగడాలు", image: BellamPongadalu },
      { en: "Nuvvula Ariselu", te: "నువ్వుల అరిసెలు", image: BellamNuvvulaArisealu },
      { en: "Karam Poosa", te: "కారం పూస", image: KaramPoosa },
      { en: "Palli Pakodi", te: "పల్లి పకోడి", image: PalliPakodi },
    ],
    pricing: {
      "250": { actual: 700, offer: 599 },
      "500": { actual: 1400, offer: 1149 },
    },
  },

  {
    id: 9,
    nameEn: "Weekly Health Combo",
    nameTe: "వీక్లీ హెల్త్ కాంబో",
    items: [
      { en: "Sajja Appalu", te: "సజ్జ అప్పాలు", image: SajjaAppalu },
      { en: "Paakam Garelu", te: "పాకం గారెలు", image: PaakamGarelu },
      { en: "Annamayya Laddu", te: "అన్నమయ్య లడ్డు", image: AnnamayyaLaddu },
      { en: "Vaamu Poosa", te: "వాము పూస", image: VaamuPusa },
      { en: "Ghatiya", te: "ఘటియా", image: Ghatiya }, /*----------Needs to replce --------------*/
    ],
    pricing: {
      "250": { actual: 700, offer: 599 },
      "500": { actual: 1400, offer: 1149 },
    },
  },
];