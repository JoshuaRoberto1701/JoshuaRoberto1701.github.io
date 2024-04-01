'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "877ecb3dc0f0d7032202ed2df906c606",
"assets/AssetManifest.bin.json": "6891eaada175fa5769086957319fab98",
"assets/AssetManifest.json": "ed1e1f9a1df0f0db2c55803947d0183a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "fb5d80ad99b5b1e2549ff2694cc93d3e",
"assets/images/160A%2520Fuse%2520Holder%25203P.png": "6eacb77c88cd88d83c3a6d728c7df6d0",
"assets/images/250A%2520Fuse%2520Holder%25203P.png": "e648532a7704992a51041fe2ed7252f0",
"assets/images/Adjustable%2520%2520Leg%2520Rear.png": "0db5dfe84ac71e7c22a638e773152c97",
"assets/images/Adjustable%2520Leg%2520Front.png": "e5218082ebe067e523989d4203e65a41",
"assets/images/batt.png": "f6a47d4e0f5fe05f0285ceedea467467",
"assets/images/BYD%2520MLTK-36-550W.png": "e2780ea68556a5de88497ca15e2a3a49",
"assets/images/Canadian%2520Solar%2520380W%2520Super%2520High%2520Power%2520Mono%2520PERC%2520HiKU%2520with%2520MC4-EVO2.jpg": "c649335b9da423a536e1e847e8f6634b",
"assets/images/Canadian%2520Solar%2520455W%2520Super%2520High%2520Power%2520Mono%2520PERC%2520HiKU%2520with%2520MC4-EVO2.jpg": "ae7b20ece9d2f7466958efab12985c98",
"assets/images/Canadian%2520Solar%2520535W%2520Super%2520High%2520Power%2520Mono%2520PERC%2520HiKU%2520with%2520MC4-EVO2.jpg": "63af4980428cd6d2d11f729de7cf069f",
"assets/images/Canadian%2520Solar%2520540W%2520Super%2520High%2520Power%2520Mono%2520PERC%2520HiKU%2520with%2520MC4-EVO2.jpg": "a32fb4614eed1a0682df5d2364b4b2e1",
"assets/images/End%2520Clamp%252030-35.png": "3e991ad7e91797a510522dd2a5090e59",
"assets/images/Freedom%2520Won%252015%252012.png": "ec53c05a732683702de5698a75819f0b",
"assets/images/Freedom%2520Won%252020%252016.png": "d70d3ca40b2954cb85881606e021597e",
"assets/images/Freedom%2520Won%2520Lite%2520%2520Business%252040%252032.png": "6f34e7b7ba1d3541f68a479de2ade291",
"assets/images/Freedom%2520Won%2520Lite%2520Business%252060%252048%2520HV.png": "eedb558345f973a63d4615535f161f45",
"assets/images/Freedom%2520Won%2520Lite%2520Business%252080%252064.png": "abed0c7e283772dc4027e0090647f6b9",
"assets/images/FREEDOM%2520Won%2520Lite%2520Home%252010%25208%2520LiFePO4%2520Solar%2520Battery.jpg": "011950f38f1a091ecbe146c2478ed3c1",
"assets/images/FREEDOM%2520Won%2520Lite%2520Home%252020%252016%2520LiFePO4%2520Solar%2520Battery.jpg": "8ad9886be17f3d7b3905aa2f460ab195",
"assets/images/FREEDOM%2520Won%2520Lite%2520Home%25205%25204%2520LiFePO4%2520Solar%2520Battery.jpg": "42e39814fe4a5539ddc4c204e278c3e1",
"assets/images/Fuse%2520100A.png": "81ef35b98cb22d444e98ac525d9500fa",
"assets/images/Fuse%2520125A.png": "ffca257166524af008dcac3ccb0633fd",
"assets/images/Fuse%2520160%2520A.png": "cf618b9e8df2c57a3ba9570bc0015a0d",
"assets/images/Fuse%2520250A.png": "a12d2ad181afa6a54e4988fcff0fbecf",
"assets/images/Fuse%252080A.png": "3f0a0a2edaa9f924218d6a7956b19eeb",
"assets/images/Gisun%2520%2520M-36-90.png": "86f31d0ea1507a8bf57b21e2842e7395",
"assets/images/Gisun%2520M-32-80.png": "d5bc04e48ace2264eba0f5c25c25097a",
"assets/images/Gisun%2520M-66-180.png": "f6b58799fbb45f877d6180b5554f718d",
"assets/images/Gisun%2520M-72-200.png": "305cfaa2f10d7fccf3cd041bf408e592",
"assets/images/Grounding%2520Clip.png": "e960615aa32a434b6f58cc2436137f79",
"assets/images/Grounding%2520Lug.png": "3bf21f2b327de7963323ce8736b8576a",
"assets/images/Huawei%2520Intelligent%2520PowerMate%2520Storage%2520Module.png": "50a73a1f2e55ecaf19e91eb20b96c55b",
"assets/images/Huawei%2520Intelligent%2520PowerMate.png": "b6d47e82794600c52cf686af2aed6174",
"assets/images/Hubble%2520Lithium%2520AM10%252010Wh%252051.2V%2520Battery.png": "e48b19d809aadf7d474ac4e92e621182",
"assets/images/Hubble%2520Lithium%2520AM2%25205.5kWh%252051V%2520Battery.jpg": "80d4809c60958151cc139cdfb5e2411b",
"assets/images/Hubble%2520Lithium%2520AM2%25205.5kWh%252051V%2520Battery.png": "2efc199bc4c95d119ce718e554771757",
"assets/images/Hubble%2520Lithium%2520AM5%25205.12kWh%252051.2V%2520Battery.png": "aa99a6126bf7c7d3c807eb1d7e2a66e5",
"assets/images/inverter.jpg": "dc545db6ad7e77c53fa45bc9600d2351",
"assets/images/JA%2520Solar%2520365W%2520Mono%2520MBB%2520Percium%2520Half-Cell%2520All%2520Black%2520Short%2520Frame%2520MC4.jpg": "ffae181459d21204aea8a0694549f7da",
"assets/images/JA%2520Solar%2520370W%2520Mono%2520MBB%2520Percium%2520Half-Cell%2520All%2520Black%2520Short%2520Frame%2520MC4.jpg": "8b9cc3d5e9f6464d94a7c61c4ceeca44",
"assets/images/JA%2520Solar%2520380W%2520Mono%2520MBB%2520Percium%2520Half-Cell%2520Black%2520Short%2520Frame%2520MC4.jpg": "5939d9a42f3d541af2d0ce577b385f41",
"assets/images/JA%2520Solar%2520380W%2520Mono%2520MBB%2520Percium%2520Half-Cell%2520Silver%2520Short%2520Frame%2520MC4.jpg": "41c5e4d37871ccae12572d65bf0cba05",
"assets/images/JA%2520Solar%2520385W%2520Mono%2520MBB%2520Percium%2520Half-Cell%2520Black%2520Short%2520Frame%2520MC4.jpg": "e8f04996c85d0a26459ebbd9b5ab5dc0",
"assets/images/JA%2520Solar%2520385W%2520Mono%2520MBB%2520Percium%2520Half-Cell%2520Silver%2520Short%2520Frame%2520MC4.jpg": "abda449fc56ccb99da729b8571c21c57",
"assets/images/JA%2520Solar%2520455W%2520Mono%2520MBB%2520Percium%2520Half-Cell%2520Silver%2520Frame%2520Short%2520Frame%2520MC4.jpg": "158ef2c0e70d7866465125860bf79899",
"assets/images/JA%2520Solar%2520540W%2520Mono%2520PERC%2520Half-Cell%2520MBB.jpg": "960be358d250bb718714a9c003997135",
"assets/images/Jinko%2520JKM-475M.png": "3b0fd19193dbda97bc539f36196f2aff",
"assets/images/Jinko%2520JKM-550M.png": "f15a56c1f0cd7166ef93e5e9ca8d0798",
"assets/images/Jinko%2520JKM-555M.png": "1aed3c3b67c6c3d3bda1522b7c0d5763",
"assets/images/Jinko%2520JKM-575M.png": "a170911bb44cdfc14959201f554b57f9",
"assets/images/Kodak%25203kW%2520Back-up%2520Kit.jpg": "468dd503b51a74433947291fe4964801",
"assets/images/Kodak%25205kW%2520Back-up%2520Kit%2520UP5000.jpg": "40bafbbc3a34dcc247173249947e50aa",
"assets/images/Kodak%25205kW%2520Back-up%2520Kit.jpg": "81c9818ff4c126cbfd4fead2e5e73ba3",
"assets/images/Kodak%25205kW%2520Off%2520Grid%2520Kit.jpg": "c98ff20cc3afcd0946c3d40d5ce74e29",
"assets/images/KODAK%2520Solar%2520Off-Grid%2520Inverter%252010kW%252048V.jpg": "db650af082e6d57ed16d8783488202fe",
"assets/images/KODAK%2520Solar%2520Off-Grid%2520Inverter%25205.6kW%252048V.jpg": "901af0b131e002a72d6e7c969810ce98",
"assets/images/KODAK%2520Solar%2520Off-Grid%2520Inverter%2520MAX%25207.2kW%252048V%2520Hybrid%2520Inverter.jpg": "f717d5b1f7031dba89902ca1175ed4ac",
"assets/images/KODAK%2520Solar%2520Off-Grid%2520Inverter%2520VMIII%25203kW%252024V%2520Hybrid%2520Inverter.jpg": "c0d68d772c697915f21f569946aff2cb",
"assets/images/Kool%25201KW12V.jpg": "8d3c27a9a9214c42440b1c362da73c46",
"assets/images/L%2520Feet.png": "1a3226e68e4b3e144ace51aac7ec295e",
"assets/images/mainFooter.png": "cec3d44785d26bd2d76caae487c3500a",
"assets/images/MainScreen.png": "8d5cb1d7d3b0f63784149ca7b59191cc",
"assets/images/MC4%2520Connector%2520Male%2520and%2520Female.png": "2b0d8fb4a725fbb347d75b44979d5036",
"assets/images/mc4.png": "0da9d2b5d91df5236e93246bcf41b37e",
"assets/images/Megarevo%2520Hybrid%25205kw.png": "9d47dd6663b8a543fd34c2a12dc10dd2",
"assets/images/Megarevo%2520Hybrid%25208kw.png": "a60fef722e512fcfc1df228c8972bc8c",
"assets/images/MetaSole%2520%2520Sheet%2520thickness.jpg": "106a43d062d20791deb715bcd7a15cfe",
"assets/images/Mid%2520Clamp%252030-35.png": "83126692d940f840ad8f2462de7c281a",
"assets/images/panel.png": "09e0a97a16e8332bf995348a59550615",
"assets/images/PV%25204mm%2520Black%2520100m%2520.png": "ebf9241baf4af52314cb66517241e668",
"assets/images/PV%25204mm%2520Earth%2520100m%2520.png": "74a62286c6b67a147cb6043befc2db1b",
"assets/images/PV%25204mm%2520Red%2520100m%2520.png": "941c134991917cde331b03361397178a",
"assets/images/PV%25206mm%2520Black%2520100m%2520.png": "bd83fdf60a616a7f2560b17bc880046f",
"assets/images/PV%25206mm%2520Earth%2520100m%2520.png": "cee84a7526e471a8b37187ff5a492432",
"assets/images/PV%25206mm%2520Red%2520100m%2520.png": "fe481b1d1b7cc69a277f7b7760970787",
"assets/images/Pylon%2520UP2500%25202.84kWh%2520Li-Ion%2520Solar%2520Battery%252024V%2520with%2520CAN%2520connection.jpg": "6c942a26a326b63ffa9bed2f6a105956",
"assets/images/Pylon%2520UP5000%25204.8kWh%2520Li-Ion%2520Solar%2520Battery%252048V.jpg": "fd19c1dc5eb18091565802755b74d331",
"assets/images/Pylon%2520US2000%25202.4kWh%2520Li-Ion%2520Solar%2520Battery%2520(excl.%2520brackets).jpg": "a388dcc4335d003e90602a4709598839",
"assets/images/Pylon%2520US3000C%25203.5kWh%2520Li-Ion%2520Solar%2520Battery%2520(excl.%2520brackets).jpg": "eed296b2e241a32dafdc860b15c969ce",
"assets/images/Rail%25204.7m%2520Length.png": "d7440a7a89e4593ff93aa30ba34717a3",
"assets/images/Rail%2520Splice.png": "d61534597a181bc8d8efe205525c505d",
"assets/images/Renusol%2520MetaSole%2520Corrugated%2520Roof%2520Adaptor.jpg": "9c1f15b2be04142394f02fdf9d1bd051",
"assets/images/Roof%2520Hook%2520Eco%2520Basic%2520(no%2520wood%2520screws).jpg": "cc99739f2271c8cf4e845017c8b5d4a1",
"assets/images/RS1%2520Universal%2520End%2520and%2520Mid%2520Clamp%252030%2520%25E2%2580%2593%252050mm%2520Black%2520ONE%2520FOR%2520ALL.jpg": "42a71cef4299f3a183e7306bed725c5c",
"assets/images/RS1%2520Universal%2520End%2520and%2520Mid%2520Clamp%252030%2520%25E2%2580%2593%252050mm%2520Silver%2520ONE%2520FOR%2520ALL.jpg": "f12c521c46967bc5004b0654599aeee2",
"assets/images/Seraphim%2520SRP-460.png": "6a9d8e9983dde747acb1c3f6c05d9b5f",
"assets/images/Seraphim%2520SRP-555M-BMA.png": "8397bb0494299225a72ead4a98109bbe",
"assets/images/Seraphim%2520SRP-560.png": "60ba13e5238e8458dd1ba99f198afa51",
"assets/images/Seraphim%2520SRP-560M-BMA.png": "9f4f45637afa3a8602861b2f809fe427",
"assets/images/solarkit.png": "f830df61591184fb73757f12989a98d0",
"assets/images/Solarpic.jpg": "2eeba171f19543a7f2da6a2071517f34",
"assets/images/Solis%252010kW%25204G%25203%2520Phase%2520Dual%2520MPPT%2520%25E2%2580%2593%2520DC%2520PV%2520Inverter.jpg": "e53c38f0973100b36bfdeab3e3f48c9c",
"assets/images/Solis%25203.6kW%2520S6%2520Dual%2520MPPT%2520%25E2%2580%2593%2520Single%2520Phase%2520with%2520DC%2520PV%2520Inverter.jpg": "cb8c2692c809f55559108ab36ca1c12c",
"assets/images/Solis%25204.6kW%2520S6%2520Dual%2520MPPT%2520%25E2%2580%2593%2520Single%2520Phase%2520with%2520DC%2520PV%2520Inverter.jpg": "2d2566c22ccc4bd3a258e28000e2f541",
"assets/images/Solis%25206kW%25204G%25203%2520Phase%2520Dual%2520MPPT%2520%25E2%2580%2593%2520DC%2520PV%2520Inverter.jpg": "19fa5c31e00653eb7a0319b9d493a446",
"assets/images/SRNE%2520PowerOnWheel.png": "6f53d11f5fc5f22dc160d6107f30c5a8",
"assets/images/Sunsynk%252012kw.png": "8daa02e66ce851591f4f1b2250f6ed7b",
"assets/images/Sunsynk%252050kw.png": "cc7dd8f6f7c913b86d54ac216ce51043",
"assets/images/SunSynk%25205kW%252048V%2520Self%2520Consumption%2520Kit.jpg": "bf47c61790d6acadefceb93d07e18c93",
"assets/images/SunSynk%25205kW%2520Back-up%2520Kit.jpg": "2d9408fa67818a64649a175b04101c92",
"assets/images/Sunsynk%25205kw.png": "1041e4b0d95f1c0ca4d5c98761fc15a1",
"assets/images/SunSynk%25208kW%2520Back-up%2520Kit.jpg": "3b0e1b8944513fa36fb5efaab031ab85",
"assets/images/Sunsynk%25208kw.png": "10ec5df5756c8b5e5d2b2beb5f68af48",
"assets/images/Sunsynk%2520Battery%2520LFP%252010.65Kwh%2520.png": "42dfd763ea342f726ee6300a9eec5ca4",
"assets/images/Sunsynk%2520Battery%2520LFP%25205.32Kwh.png": "9b557e055efc8c6843076d782447d728",
"assets/images/Sunsynk%2520Sun%252016K%2520Hybrid%2520Inverter.jpg": "df0635e3de6cd18c34121f2c9626a183",
"assets/images/Sunsynk%2520Sun%25205K%2520Hybrid%2520Inverter.jpg": "d0d8e0adc28b8822835f5e63e95a53b7",
"assets/images/Sunsynk%2520Sun%25208K%2520Hybrid%2520Inverter.jpg": "40b500dac72cc42975119932f30f7e83",
"assets/images/T%2520Module.png": "000360afb7b3088d00416a53eb6c2a60",
"assets/images/Tile%2520Roof%2520Hook.png": "e97b338ca5eb15665321b9811f4288e6",
"assets/images/VarioSole%2520Bracket%2520M10.jpg": "eee0563ec6413819b21509aafba9b64f",
"assets/images/VarioSole%2520Stainless%2520Steel%2520Roof%2520Hook%2520for%2520Pantiles%2520(no%2520wood%2520screws).jpg": "0bbeb447a1e07d08d3a10ba91e323c3c",
"assets/images/VarioSole+%2520End%2520Cap%252041X35%2520Rail%2520Single%2520%25E2%2580%2593%2520Grey.jpg": "a8d2c2e0008363908c8053facb00380f",
"assets/images/VarioSole+%2520End%2520Cap%252050X37%2520Rail%2520%25E2%2580%2593%2520RIGHT%2520LEFT%2520Grey%2520(1%2520pair).jpg": "cb361818b4f14b030e60448f145ff668",
"assets/images/VarioSole+%2520Hanger%2520Bolt%2520M10%2520x%2520200%2520Wood%2520Substructure.jpg": "13c51d057de9ee5121d7989a944b78c3",
"assets/images/VarioSole+%2520Mounting%2520Rail%252041%2520x%252035%2520x%25202225mm.jpg": "6c19a0afd024551d8224dcbb80d7dd34",
"assets/images/VarioSole+%2520Mounting%2520Rail%252041%2520x%252035%2520x%25203300mm.jpg": "272d33d4642e9b7489ab81d7293eebc7",
"assets/images/VarioSole+%2520Mounting%2520Rail%252041%2520x%252035%2520x%25204400mm.jpg": "37cbd03e808e684750f7eca5993187a3",
"assets/images/VarioSole+%2520Mounting%2520Rail%252050%2520x%252037%2520x%25203300mm.jpg": "1006ef4814aecec665d52eb29a35410a",
"assets/images/VarioSole+%2520Mounting%2520Rail%252050%2520x%252037%2520x%25204400mm.jpg": "8a3cb73a40fd6b70731cc1e6f8de0c16",
"assets/images/VarioSole+%2520Rail%2520Connector%2520for%2520Rail%252041%2520x%252035mm.jpg": "e05aabd69c56b85dfc443c92b6f3e67d",
"assets/images/VarioSole+%2520Rail%2520Connector%2520for%2520Rail%252050%2520x%252037mm.jpg": "f1c397ac14ec78227e958374889a7d34",
"assets/images/Victron%2520Multiplus%252048-5000-70-100%2520Self%2520Consumption%2520Kit.jpg": "480a446ae07854c484580bbdedc97aeb",
"assets/images/Victron%2520Multiplus%252048-5000-70-50%2520Backup%2520Kit.jpg": "c1790c15fdb420a73808da5421498a29",
"assets/images/Victron%2520Quattro%252048-10000-140-100-100%2520Backup%2520Kit.jpg": "b95759b5702f707ef618e0be19d44392",
"assets/images/Victron%2520Quattro%252048-8000-110-100%2520Self%2520Consumption%2520Kit.jpg": "6008ae7bb132548861f34dc753dfca9a",
"assets/NOTICES": "b481154ffa3924c046336ad97e5607d1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "66a5d4636803068a14c40ce311c19a3c",
"/": "66a5d4636803068a14c40ce311c19a3c",
"main.dart.js": "a4832327d5d49f29b63b40d613f97810",
"manifest.json": "b22f799886e84fee3c7cae3a53d7f869",
"version.json": "1eacce980dcf3a917e305e76f44a873d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
