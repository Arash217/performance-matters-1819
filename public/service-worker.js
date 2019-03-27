/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/countries","dc292e54ef650725cde9a557170254e9"],["css/main.min-18740415d5d12fcb17f7b6f7a75b34da.css","18740415d5d12fcb17f7b6f7a75b34da"],["images/flags/ABW.svg","bff115949b081f6555c7136aab0492f7"],["images/flags/AFG.svg","72f47f8d28219a8657036f43b5db38c8"],["images/flags/AGO.svg","6d601184136008fd458dd8933eb667a3"],["images/flags/AIA.svg","df9ae361d8190a7a437e8abe8f913a7b"],["images/flags/ALA.svg","6b9195b7dc930845f98a75adf07bf406"],["images/flags/ALB.svg","fdcacc2be5d2831dacf74038f56920fe"],["images/flags/AND.svg","4dda8d909c955835ba47f02a838dc1f9"],["images/flags/ARE.svg","eab2780cbd493b1c243ab5358c5910ca"],["images/flags/ARG.svg","c42249cbf6d5242cc5b96694c2b95958"],["images/flags/ARM.svg","69727bec1f2a92340d3a6822131ffc23"],["images/flags/ASM.svg","377ae72c111e1c30f7ae9c17336a8dc3"],["images/flags/ATA.svg","796705f6ebd435b16deeac34ee192d4b"],["images/flags/ATF.svg","8ffe82d50b0c1beb9b114e3e61377b64"],["images/flags/ATG.svg","c3d5dcecd75473c155c2b0a7bf5ccd55"],["images/flags/AUS.svg","78e720135e9215dfbdac3642cec62f59"],["images/flags/AUT.svg","43a5e930d2dbb221da29d1f361cd5a81"],["images/flags/AZE.svg","6730306af1526f946d3a5a8e170773e9"],["images/flags/BDI.svg","63c510f7cb1dc859de5c8798d4faa39b"],["images/flags/BEL.svg","4bc9f1734a8dfde189069eea7058ef00"],["images/flags/BEN.svg","de249a8f9cedd0f903c7132445d9f420"],["images/flags/BES.svg","54f0693292fa564f13d0fbf52e9d0c15"],["images/flags/BFA.svg","693103a61a0fcc13821d37322ff693ed"],["images/flags/BGD.svg","f0022529b274fff14c920584639ef6f4"],["images/flags/BGR.svg","abe12f732163fbbf7050eb30776b6c12"],["images/flags/BHR.svg","90cd4b70eb39ef16c09ea36f8356fa99"],["images/flags/BHS.svg","54ae9bda452effeed60928a2ad79659b"],["images/flags/BIH.svg","179455fc353dee08d3b282da0cac1061"],["images/flags/BLM.svg","5e259dbe68cbc3a23e41c85325dc78be"],["images/flags/BLR.svg","464d63ed5f84bfca4e21dd694e1e2832"],["images/flags/BLZ.svg","84d6cc4648d06aa9088b48c8ea0f3b81"],["images/flags/BMU.svg","fda3b014f33766c8be070017281d91f9"],["images/flags/BOL.svg","fa2acaa5beef845d75d4da6678d01204"],["images/flags/BRA.svg","f3a8896d9b3a2414adb7da6eb549f18c"],["images/flags/BRB.svg","4afa94d228ce89234c974626e54ca0c3"],["images/flags/BRN.svg","b5ed8737ef9580c56979be62478003f3"],["images/flags/BTN.svg","aeacd117f5502224f740f59a8db5e3b6"],["images/flags/BVT.svg","b055a104cef55232e01a5ee94d3f72c9"],["images/flags/BWA.svg","2d10176e14c228d87b199c77c5559eaa"],["images/flags/CAF.svg","2318493096e023f41e79b699c068964d"],["images/flags/CAN.svg","55aff6aef15c142b115a14d823429ea4"],["images/flags/CCK.svg","4a8d27d486d118c7120b2f63367d80cd"],["images/flags/CHE.svg","f5c857cda64c6696e384545a49a18244"],["images/flags/CHL.svg","4e9ff41f7c822ef9a7b2bc728bde3c52"],["images/flags/CHN.svg","ac97fb38bb7dac277dd445c588c59546"],["images/flags/CIV.svg","1b31eae9e899999cc1fcf7f0fb250d98"],["images/flags/CMR.svg","7d565eb9f9ccb7b42c3c2baf397ba6a7"],["images/flags/COD.svg","5fe6a5d347fb4cc910f6ad9cd0b0861d"],["images/flags/COG.svg","33119f581cfd1604e02f46afd34dbf0a"],["images/flags/COK.svg","d9fcf3008b2f1ef17c658f473ff0f774"],["images/flags/COL.svg","acb2ee8bf5ffb34f1ff201e726020462"],["images/flags/COM.svg","4fbc1d65474b96bad00e34e1aa6795f6"],["images/flags/CPV.svg","8f0173d711ceb53245b52bf134820ef8"],["images/flags/CRI.svg","b76202e86001a6e600f7473fbd1b6d1b"],["images/flags/CUB.svg","e9d64941fd7906c238610306d43e0df8"],["images/flags/CUW.svg","2851129d8b27178283db83d64f66b9cc"],["images/flags/CXR.svg","10b1d8bfd6eeb0ff2fd638c6d8a1c4fa"],["images/flags/CYM.svg","f05349c79a35ebf1126e229b2db7dcfd"],["images/flags/CYP.svg","4ccc85017945e197ec7402e5b86e92f3"],["images/flags/CZE.svg","887bde53c976433f611ed3cf514f2735"],["images/flags/DEU.svg","cfed9f984610e26dac5ff281c0329bcc"],["images/flags/DJI.svg","42324916750e94412eb64b7b97de0228"],["images/flags/DMA.svg","908567b560ea0922073799e1a414ec0b"],["images/flags/DNK.svg","731a2047da06021b55cd33beb22de750"],["images/flags/DOM.svg","4684252a8f88ab6f98e301e2e518b48f"],["images/flags/DZA.svg","e79a06e118c460cb29fb60a58d1301bd"],["images/flags/ECU.svg","54c22bd934203ed8aa00582af808fe3a"],["images/flags/EGY.svg","c8daae219cd494738da2046694a6109a"],["images/flags/ERI.svg","23e92a2ab4f4cb016274489f404c4954"],["images/flags/ESH.svg","2160ac2c2703e1d4c968e4f398682e84"],["images/flags/ESP.svg","50beff1a9f2d0b02004edf52e0fc8077"],["images/flags/EST.svg","d518e4fcbdd5521bd95e4795739e34cb"],["images/flags/ETH.svg","40d13e2870be6ed754941f4392ef055d"],["images/flags/FIN.svg","ba67bb5282667317435991908b3c753e"],["images/flags/FJI.svg","30444d73901a740b73a28beda2546b57"],["images/flags/FLK.svg","d0d9bc36fa800d59d33e15394e324601"],["images/flags/FRA.svg","c6ad3636055d0b5a84bae6ba5f70ce6f"],["images/flags/FRO.svg","eb15119bb441118011fa3ccb2c8ba9be"],["images/flags/FSM.svg","20b41028d8ff87bb54def5f8e0dad9b5"],["images/flags/GAB.svg","f40ca27d03677b541adbdc68a820eb1e"],["images/flags/GBR.svg","b6b50cc1a5579937b7479d2795943322"],["images/flags/GEO.svg","1459c6ca7e9eae1839d0a3152c768e0e"],["images/flags/GGY.svg","781fd8488201cbae4ab2740309aac619"],["images/flags/GHA.svg","60aba6d3beb86b248e8eb1aa1d64386b"],["images/flags/GIB.svg","94e09a44544c8a049e05850863513fea"],["images/flags/GIN.svg","c0557d580b60bd4a6dd42cb280070b1c"],["images/flags/GLP.svg","81a73082deeca9542075347aee8dbb8d"],["images/flags/GMB.svg","57ab173883f273d7fcd15cb35f8ed8e4"],["images/flags/GNB.svg","bb59b0be48021bc0e3230b7b457f9f34"],["images/flags/GNQ.svg","2ab467e1db47393748f70977db3eec95"],["images/flags/GRC.svg","2b624c79d234bfa8722294ba3a06c835"],["images/flags/GRD.svg","39bbc4220a1b7e57fb9757f4f71028b2"],["images/flags/GRL.svg","fe8e27226c04b5f2c1e2e6912e7d30ad"],["images/flags/GTM.svg","66778ce214bb38fa059a5469dc0e9d31"],["images/flags/GUF.svg","36d7ee9fcddf846370bd4e92a95fe261"],["images/flags/GUM.svg","77505c6de515bffe705ae83582b3129d"],["images/flags/GUY.svg","e88df3842820a7c50ad0ef84a830a573"],["images/flags/HKG.svg","9b47b196ebe9b8a95e7a454c6dad7160"],["images/flags/HMD.svg","78e720135e9215dfbdac3642cec62f59"],["images/flags/HND.svg","8d0121bb08ccd5044a21e4b74e90d303"],["images/flags/HRV.svg","ebe49922eb1d01b2ee49c94a24e05ab1"],["images/flags/HTI.svg","7950791c5c30e25a7c325dcd0dbeabf6"],["images/flags/HUN.svg","94e14f24020ff7ee492b66a728a3e73c"],["images/flags/IDN.svg","1dc1a39ed3f760a093e06025c6f9cead"],["images/flags/IMN.svg","b9415313d0774c518503f879aa29e890"],["images/flags/IND.svg","0c1ca4bc19610e6a059668c1f518b691"],["images/flags/IOT.svg","f50ef5bb8b82acb6c3324fa707abdc5d"],["images/flags/IRL.svg","13574515d006c658893e64ebb9265788"],["images/flags/IRN.svg","5445a5a1fcfccc3ea1ce748ef5d91991"],["images/flags/IRQ.svg","46f84aad1af46368581a4020ec66a334"],["images/flags/ISL.svg","921ebe79105215db8e11c4b7f711b481"],["images/flags/ISR.svg","450172838c9f9e80edc70485391041b8"],["images/flags/ITA.svg","cd4c4ad89d828c1eb8eccd2f9f9dc65b"],["images/flags/JAM.svg","dbe2a1fd506d0d2b58c642486b344d78"],["images/flags/JEY.svg","8b78cef94ecd0f2517246a8a5bcbf716"],["images/flags/JOR.svg","ac10308e7ff52d6a727e3d084a4e2fe7"],["images/flags/JPN.svg","b4dbf8d28cc3aa8fc5a763ec7127e0d8"],["images/flags/KAZ.svg","692bbc0bfd4c937575d82b78bc5f6a72"],["images/flags/KEN.svg","1a6e94ad742f14be4c7e075a573012bb"],["images/flags/KGZ.svg","20fc2aa51d70e258c4539cde14e1f014"],["images/flags/KHM.svg","bad3ac22fc6410833c9459c0eeecad5f"],["images/flags/KIR.svg","3493c75d3c7024586dd0c274a790ec55"],["images/flags/KNA.svg","5c08a86ccfab80c689dbbcb5bc27bd12"],["images/flags/KOR.svg","a62da802cc5ce87cb4078a6730f571eb"],["images/flags/KOS.svg","b43bbd52759e97755e0a46ab42d1d772"],["images/flags/KWT.svg","7fe688c0201069910b60e230e2506115"],["images/flags/LAO.svg","477d5834a842d3ae8a8427dc10638ae2"],["images/flags/LBN.svg","26ffa07cdbd9979186add3e95cef6df8"],["images/flags/LBR.svg","e670e00b602d308b4c1d109ad8d3378b"],["images/flags/LBY.svg","407630d19b05f41f6c7ba4a98f3e5dd4"],["images/flags/LCA.svg","73ba7becfbc345018435667c9c7f5409"],["images/flags/LIE.svg","0f27f98afd93495cc9b85f48d37c1b22"],["images/flags/LKA.svg","614edeaf23708faf268e5b63a3c62565"],["images/flags/LSO.svg","3a66bb282f627d1ea90a7a6de38f3cac"],["images/flags/LTU.svg","33f2c6496736ca04655bf96982eb46a4"],["images/flags/LUX.svg","7f0dfa41b55ecd5dd0c742bd992e6139"],["images/flags/LVA.svg","fcee18bec9dc7bcbce80ce56a8fa34dd"],["images/flags/MAC.svg","7d389e15a8f605c08d02be172a5bc868"],["images/flags/MAF.svg","c6ad3636055d0b5a84bae6ba5f70ce6f"],["images/flags/MAR.svg","024275eacda39f65f6ca13ba4c59c3f8"],["images/flags/MCO.svg","17a776e30265d3932d5d10b3e1c2d484"],["images/flags/MDA.svg","610071eb84cf42b6c4610310b815544b"],["images/flags/MDG.svg","5312e127a0eb7e3421adb062a52695e8"],["images/flags/MDV.svg","b0a5949a3aec1d9f3c728b5b477a1360"],["images/flags/MEX.svg","55d9d00a89f36b517baa120223810a22"],["images/flags/MHL.svg","1b69c2590055c8816cf0525fde5ee7c5"],["images/flags/MKD.svg","78b8d1f29b1a508cb34730ca1894123c"],["images/flags/MLI.svg","80c94680cc33578cdbaa12c78f3a59ab"],["images/flags/MLT.svg","0454c81ded1588d36dd029142cc243e2"],["images/flags/MMR.svg","cdfecf1b69cca8f63f956a7b334de6b3"],["images/flags/MNE.svg","e796d72f60c6030bd37f8ca43e0deefc"],["images/flags/MNG.svg","895a9b80faed0c6b5517212b30e29d85"],["images/flags/MNP.svg","a4402d7c13a2ee8f36ca08f32577332c"],["images/flags/MOZ.svg","ced18895c423a1b0af5a84b49b6ea99f"],["images/flags/MRT.svg","c73c9b77095ec6e94649cac0b263c5ff"],["images/flags/MSR.svg","dc29970b0c1127d55ca13113b419182e"],["images/flags/MTQ.svg","ec555cc4a6a6b5eabcb9b11540376a58"],["images/flags/MUS.svg","f7e1673d297d127315ae312bec598b9b"],["images/flags/MWI.svg","0b8cfb8e14258d4f14b653ce397a64c2"],["images/flags/MYS.svg","b356325a34e095c6f30d4b93c6401d59"],["images/flags/MYT.svg","02d7834204014475495e95cdab34d8a0"],["images/flags/NAM.svg","9bf64cbca6a4f92bcb3e52edc1c5f4c6"],["images/flags/NCL.svg","9c94522363570aacb83e75d7bb677b22"],["images/flags/NER.svg","c28edaf5b4505d0f53a0f952cbd455b5"],["images/flags/NFK.svg","2c6fb0665300a1f8d7176ee7a0f6d223"],["images/flags/NGA.svg","6be9b23057a622725fc9ca837986cddb"],["images/flags/NIC.svg","cf243d725f1a1dd047810225bd78effe"],["images/flags/NIU.svg","b58e6dce6ae87d02787344810c2a0582"],["images/flags/NLD.svg","a96fbfa17f9bb422e6fe414467a0b63a"],["images/flags/NOR.svg","b055a104cef55232e01a5ee94d3f72c9"],["images/flags/NPL.svg","cb021b7106781b811c0b1571a6e17a55"],["images/flags/NRU.svg","8f68e4fa6449baf222cabde2ff4ca1d2"],["images/flags/NZL.svg","1978a5538b2698bf15afbbeecb5f8c23"],["images/flags/OMN.svg","e08d3916c0a2e40991baf574779a8135"],["images/flags/PAK.svg","e6ab8a7e46f358fb44644c2df8624a84"],["images/flags/PAN.svg","7672bffc584195947a95af78a761d426"],["images/flags/PCN.svg","e2baba47a7b2b40d4117814fdec7b33e"],["images/flags/PER.svg","a3855d5b76c478e227e09117957ca4cd"],["images/flags/PHL.svg","ee28403d43abb45861db65f61cd6e318"],["images/flags/PLW.svg","92093a6035afc592e4e108ddbd9b3b88"],["images/flags/PNG.svg","e2cb2c942a8ad74287276e5a286a50ff"],["images/flags/POL.svg","83f535e677c20f47c39ffd4ebce06418"],["images/flags/PRI.svg","2e42b2c89321b2cc2b968dcf27a06531"],["images/flags/PRK.svg","c9960c24bcfeeb0f7fab814225c520f4"],["images/flags/PRT.svg","e7d6cb401a0453150d055bf667309c16"],["images/flags/PRY.svg","5d4017cf81f7a8882fd964ac2eb98bb8"],["images/flags/PSE.svg","c953d9a956c8b6ddaa81a97e722f04f3"],["images/flags/PYF.svg","e89848b786e00ec493455fbfb9ce22da"],["images/flags/QAT.svg","ab51fefc91b14d1c8173b3dca977745d"],["images/flags/REU.svg","c6ad3636055d0b5a84bae6ba5f70ce6f"],["images/flags/ROU.svg","f2b7ef6c6dae8caedbd7884c386eb7aa"],["images/flags/RUS.svg","14814a48e7284c087eaa9c44fb581302"],["images/flags/RWA.svg","c1887e8926775361f0a3bcb4bb4665ab"],["images/flags/SAU.svg","9f7c79049b8b30f2c0fd51bd28869fe3"],["images/flags/SDN.svg","35d3946b1e0f1b1ee692148bc5d908d4"],["images/flags/SEN.svg","61de7b9253282a37aad7127e62837bec"],["images/flags/SGP.svg","b0536b9b75d65db5f96222382eec5108"],["images/flags/SGS.svg","d27373e76b1f5d133706b84dbcf54d00"],["images/flags/SHN.svg","a116f03506fc8028a137a60364b5680d"],["images/flags/SJM.svg","b055a104cef55232e01a5ee94d3f72c9"],["images/flags/SLB.svg","99d4805308c8696073fa3463cc915741"],["images/flags/SLE.svg","669e23af79d65a2ae75f047c98256448"],["images/flags/SLV.svg","072bd64c31c9b0a23bad9067b8c2a4d9"],["images/flags/SMR.svg","afa1ccf106f0f76958827b40b412e06a"],["images/flags/SOM.svg","63285f262384121599817cb9bbd921fe"],["images/flags/SPM.svg","550cac6c045531a485dfe024925be449"],["images/flags/SRB.svg","480d0a88d98f5ad0756f2eed7a130398"],["images/flags/SSD.svg","e8ff73f8cf7af354dc4d723c2fe3a011"],["images/flags/STP.svg","44d222e5cf2930be200e9a54c8061b04"],["images/flags/SUR.svg","7a500113c4faa91d99bb6f4940399469"],["images/flags/SVK.svg","9d09e8253ec560d1d016426884e607c1"],["images/flags/SVN.svg","4b25208a3ec278c8e4d8a234846cb911"],["images/flags/SWE.svg","50840f10c9472775309a1c59c3e751d2"],["images/flags/SWZ.svg","e233c960d04959fa78c166df8375c798"],["images/flags/SXM.svg","d994d06449d4de8c81e3b9e9200e7e85"],["images/flags/SYC.svg","7b5f8390f0df196e1155fdcd2e73629b"],["images/flags/SYR.svg","2f02b393482d80fa2aae0f2d9a9e0bc6"],["images/flags/TCA.svg","968329822b8858a2418c792a81c53fb9"],["images/flags/TCD.svg","d42e379e9a44d4b17eb10f62ff7582a4"],["images/flags/TGO.svg","b0cd37b8a23415ec54aae0492fccaf54"],["images/flags/THA.svg","c996d054e82a3594703c3069b1d7d76c"],["images/flags/TJK.svg","e29a8ecc39318cbd16a4e2d6bc4802cb"],["images/flags/TKL.svg","a08735892f1a73265327cda9e768bc69"],["images/flags/TKM.svg","30e80936f7f94115594926fde58fba09"],["images/flags/TLS.svg","0db9b6deb2fba0075965dea3260c1591"],["images/flags/TON.svg","9b7fd23aa479fc462a6f1ea749200bc0"],["images/flags/TTO.svg","7fc35d1947849928422f719fd2e5da77"],["images/flags/TUN.svg","fad132b8034976f834f4dc09059d3b87"],["images/flags/TUR.svg","da3d6dc0d61b1d04e77681442f6c471e"],["images/flags/TUV.svg","23e474f9883727923d97fe1d51809525"],["images/flags/TWN.svg","b6b04d158564b4832b53aa4a67214a8b"],["images/flags/TZA.svg","4843f6562b74aaae308d245469c19968"],["images/flags/UGA.svg","1af2f3eea44e0fa231a904234355ea15"],["images/flags/UKR.svg","9ef03bd61fd0371e2864ee5cc8aad3b9"],["images/flags/UMI.svg","81c35c12cf120fa30a99cb12c3651747"],["images/flags/URY.svg","6ebcf55bc5b4f6947802c518358299af"],["images/flags/USA.svg","81c35c12cf120fa30a99cb12c3651747"],["images/flags/UZB.svg","518fcbfc96664c9846499dd206c15db7"],["images/flags/VAT.svg","8e922038f72e639bf52e70a1d6faff71"],["images/flags/VCT.svg","cb4e0b87ec1b2b630b0f029a24c295f9"],["images/flags/VEN.svg","779b8965ebcfa8bfd0724007ec269df8"],["images/flags/VGB.svg","4e89467b2e2718b7bec5b72007441dbd"],["images/flags/VIR.svg","9e7bfcb4f1486dedc082a9eb2f980878"],["images/flags/VNM.svg","9f5e9e102b7d2df00cb4101d24415f18"],["images/flags/VUT.svg","56e30aefa1cfcb32748aff10171fab29"],["images/flags/WLF.svg","50e7ccee617213133034b9d3c0372250"],["images/flags/WSM.svg","62f8b58b631fb946c538b25d2723add5"],["images/flags/YEM.svg","9d1f4a88adcfc99f30cdffc9aebef337"],["images/flags/ZAF.svg","118f5fbedd50fe230cb61a7b1c8c5d8d"],["images/flags/ZMB.svg","dd25c1d2d0400fafa0f7575428362045"],["images/flags/ZWE.svg","798dbae79e48b4748b75c249a75336f8"],["images/icons/icon-128x128.png","a912eb8dc269c0473aca05cbd845345b"],["images/icons/icon-144x144.png","8710187c0f1916e729c256881ec46d8a"],["images/icons/icon-152x152.png","ca8e5192f7abed125db34eb903ba1d36"],["images/icons/icon-192x192.png","515be33735a4db5477594885d7b5efc0"],["images/icons/icon-384x384.png","44fc091d31aa1d569206c39dfb4ea880"],["images/icons/icon-512x512.png","183c52f72086b38841e42885ae92bdd9"],["images/icons/icon-72x72.png","27a9635d12354d95227558059e05139c"],["images/icons/icon-96x96.png","a2967c26f3461d73a5383d4e07b0c35a"],["js/all.min-3012c5cd91309fb71ce1655420432c53.js","3012c5cd91309fb71ce1655420432c53"],["main.js","7b940f9ebae11ec277c3e17e620eb579"],["manifest.json","46b739be54347df2222559b741ef2fc2"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/countries\/.+/, toolbox.cacheFirst, {});




