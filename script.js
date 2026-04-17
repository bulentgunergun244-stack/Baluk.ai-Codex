const chat = document.getElementById("chat");
const splash = document.getElementById("splash");
const splashPrompt = document.getElementById("splashPrompt");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const thinkingImageInput = document.getElementById("thinkingImageInput");
const thinkingImagePreview = document.getElementById("thinkingImagePreview");
const thinkingImageThumb = document.getElementById("thinkingImageThumb");
const thinkingImageRemove = document.getElementById("thinkingImageRemove");
const clearChat = document.getElementById("clearChat");
const modelToggle = document.getElementById("modelToggle");
const modelMenu = document.getElementById("modelMenu");
const modelOptions = document.querySelectorAll(".model-option");
const currentModelBadge = document.getElementById("currentModelBadge");
const memoryToggle = document.getElementById("memoryToggle");
const memoryPanel = document.getElementById("memoryPanel");
const memoryList = document.getElementById("memoryList");
const clearMemory = document.getElementById("clearMemory");
const memoryToast = document.getElementById("memoryToast");
const introGate = document.getElementById("introGate");
const appRoot = document.getElementById("appRoot");
const enterAppBtn = document.getElementById("enterAppBtn");
const enterTransition = document.getElementById("enterTransition");
const plusToggle = document.getElementById("plusToggle");
const plusMenu = document.getElementById("plusMenu");
const advancedMathMode = document.getElementById("advancedMathMode");
const webSearchMode = document.getElementById("webSearchMode");
const balukLensMode = document.getElementById("balukLensMode");
const testModeToggle = document.getElementById("testModeToggle");
const balleMode = document.getElementById("balleMode");
const webInputBadge = document.getElementById("webInputBadge");
const textComposerWrap = document.getElementById("textComposerWrap");
const balleGenerateBtn = document.getElementById("balleGenerateBtn");
const chatSubmitBtn = document.getElementById("chatSubmitBtn");
const voiceModePanel = document.getElementById("voiceModePanel");
const voiceModeCore = document.getElementById("voiceModeCore");
const voiceOpenFx = document.getElementById("voiceOpenFx");
const voiceModeStatus = document.getElementById("voiceModeStatus");
const voiceMuteBtn = document.getElementById("voiceMuteBtn");
const voiceWebBtn = document.getElementById("voiceWebBtn");
const voiceCloseBtn = document.getElementById("voiceCloseBtn");
const lensPanel = document.getElementById("lensPanel");
const lensClose = document.getElementById("lensClose");
const lensDropZone = document.getElementById("lensDropZone");
const lensFileInput = document.getElementById("lensFileInput");
const lensPickBtn = document.getElementById("lensPickBtn");
const lensCanvasWrap = document.getElementById("lensCanvasWrap");
const lensCanvas = document.getElementById("lensCanvas");
const lensAnalyzeBtn = document.getElementById("lensAnalyzeBtn");
const lensStatus = document.getElementById("lensStatus");
const lensResults = document.getElementById("lensResults");
const mathStudioToggle = document.getElementById("mathStudioToggle");
const mathStudioPanel = document.getElementById("mathStudioPanel");
let mathStudioInput = document.getElementById("mathStudioInput");
const mathModeFlash = document.getElementById("mathModeFlash");
const mathTutorOverlay = document.getElementById("mathTutorOverlay");
const mathTutorDone = document.getElementById("mathTutorDone");
const mathTutorNext = document.getElementById("mathTutorNext");
const mathTutorSkip = document.getElementById("mathTutorSkip");
const mathTutorTitle = document.getElementById("mathTutorTitle");
const mathTutorText = document.getElementById("mathTutorText");
const mathTutorFinale = document.getElementById("mathTutorFinale");
const profanityLock = document.getElementById("profanityLock");
const banTimer = document.getElementById("banTimer");
const banReason = document.getElementById("banReason");
const banPassword = document.getElementById("banPassword");
const banUnlockBtn = document.getElementById("banUnlockBtn");
const accountToggle = document.getElementById("accountToggle");
const accountPanel = document.getElementById("accountPanel");
const accountName = document.getElementById("accountName");
const accountGmail = document.getElementById("accountGmail");
const accountPhoto = document.getElementById("accountPhoto");
const accountPhotoPreview = document.getElementById("accountPhotoPreview");
const accountNamePreview = document.getElementById("accountNamePreview");
const accountMailPreview = document.getElementById("accountMailPreview");
const saveAccount = document.getElementById("saveAccount");
const persistBrowserAccount = document.getElementById("persistBrowserAccount");
const persistBrowserHint = document.getElementById("persistBrowserHint");
const logoutAccount = document.getElementById("logoutAccount");
const deleteAccount = document.getElementById("deleteAccount");
const sideDrawer = document.getElementById("sideDrawer");
const drawerClose = document.getElementById("drawerClose");
const drawerPremiumOpen = document.getElementById("drawerPremiumOpen");
const drawerBackgroundOpen = document.getElementById("drawerBackgroundOpen");
const drawerAccountSettings = document.getElementById("drawerAccountSettings");
const newChatBtn = document.getElementById("newChatBtn");
const chatList = document.getElementById("chatList");
const premiumOwnedLabel = document.getElementById("premiumOwnedLabel");
const premiumExpiryLabel = document.getElementById("premiumExpiryLabel");
const premiumPendingLabel = document.getElementById("premiumPendingLabel");
const premiumModal = document.getElementById("premiumModal");
const premiumClose = document.getElementById("premiumClose");
const premiumBuyBtn = document.getElementById("premiumBuyBtn");
const premiumPayLinkBtn = document.getElementById("premiumPayLinkBtn");
const premiumConfirmBtn = document.getElementById("premiumConfirmBtn");
const premiumCodeRow = document.getElementById("premiumCodeRow");
const premiumCodeInput = document.getElementById("premiumCodeInput");
const backgroundModal = document.getElementById("backgroundModal");
const backgroundClose = document.getElementById("backgroundClose");
const backgroundThemeSelect = document.getElementById("backgroundThemeSelect");
const backgroundMusicSelect = document.getElementById("backgroundMusicSelect");
const backgroundMusicVolume = document.getElementById("backgroundMusicVolume");
const allowProfanityMode = document.getElementById("allowProfanityMode");
const balukEngineBtn = document.getElementById("balukEngineBtn");
const engineWorkspace = document.getElementById("engineWorkspace");
const engineBackBtn = document.getElementById("engineBackBtn");
const engineNewChatBtn = document.getElementById("engineNewChatBtn");
const engineChatList = document.getElementById("engineChatList");
const engineThinkingQuota = document.getElementById("engineThinkingQuota");
const engineNotebookToggle = document.getElementById("engineNotebookToggle");
const engineStudyToggle = document.getElementById("engineStudyToggle");
const engineCodeToggle = document.getElementById("engineCodeToggle");
const engineDock = document.getElementById("engineDock");
const engineDockTitle = document.getElementById("engineDockTitle");
const engineDockBody = document.getElementById("engineDockBody");
const engineDockClose = document.getElementById("engineDockClose");
const engineStatusCard = document.getElementById("engineStatusCard");
const engineStatusTitle = document.getElementById("engineStatusTitle");
const engineStatusText = document.getElementById("engineStatusText");
const engineCanvas = document.querySelector(".engine-canvas");
const engineProjectTitle = document.getElementById("engineProjectTitle");
const engineProjectText = document.getElementById("engineProjectText");
const engineProjectView = document.getElementById("engineProjectView");
const engineProjectLanguageBadge = document.getElementById("engineProjectLanguageBadge");
const engineProjectModelBadge = document.getElementById("engineProjectModelBadge");
const engineIntro = document.getElementById("engineIntro");
const engineLog = document.getElementById("engineLog");
const enginePrompt = document.getElementById("enginePrompt");
const engineModelPicker = document.getElementById("engineModelPicker");
const engineModelMenu = document.getElementById("engineModelMenu");
const engineLanguagePicker = document.getElementById("engineLanguagePicker");
const engineLanguageMenu = document.getElementById("engineLanguageMenu");
const engineSelectionMeta = document.getElementById("engineSelectionMeta");
const engineSubmitBtn = document.getElementById("engineSubmitBtn");
const warningOverlay = document.getElementById("warningOverlay");
const warningText = document.getElementById("warningText");
const safetySurveyModal = document.getElementById("safetySurveyModal");
const safetySurveyOptions = document.getElementById("safetySurveyOptions");
const closeSafetySurveyModal = document.getElementById("closeSafetySurveyModal");
const geometryToolbar = document.getElementById("geometryToolbar");
const geometrySketch = document.getElementById("geometrySketch");
const solveGeometryBtn = document.getElementById("solveGeometryBtn");
const geometryWarn = document.getElementById("geometryWarn");
const thinkingToggle = document.getElementById("thinkingToggle");
const thinkingQuotaText = document.getElementById("thinkingQuotaText");
const thinkingLimitBanner = document.getElementById("thinkingLimitBanner");
const thinkingLimitTitle = document.getElementById("thinkingLimitTitle");
const thinkingLimitText = document.getElementById("thinkingLimitText");
const thinkingUnlockBtn = document.getElementById("thinkingUnlockBtn");
const thinkingUpgradeBtn = document.getElementById("thinkingUpgradeBtn");
const thinkingDismissBtn = document.getElementById("thinkingDismissBtn");
const thinkingPromoBubble = document.getElementById("thinkingPromoBubble");
const thinkingPromoClose = document.getElementById("thinkingPromoClose");
let currentModel = localStorage.getItem("balukSelectedModel") || "baluk-2.2";
const allowedModels = ["baluk-1.0", "baluk-1.5", "baluk-1.6", "baluk-1.7", "baluk-1.8", "baluk-1.9", "baluk-2.0", "baluk-2.1", "baluk-2.2"];
if (!allowedModels.includes(currentModel)) {
  currentModel = "baluk-2.2";
  localStorage.setItem("balukSelectedModel", currentModel);
}
let hasStartedChat = false;
let memoryToastTimer = null;
let lastBotResponse = "";
let lastWikiAssistQuery = "";
let lastWikiAssistSummaryLink = "";
let lastWikiAssistExpandedOnce = false;
let introAudioCtx = null;
let introAudioNodes = [];
let introAmbientNodes = [];
let bgAudioCtx = null;
let bgAudioNodes = [];
let advancedMathEnabled = false;
let chatSessions = [];
let activeChatId = null;
let banUntil = 0;
let banInterval = null;
let lastStudioExplained = "";
let mathFlashTimer = null;
let selectedGeometryShape = "square";
let geometryPlacement = { x: 50, y: 46 };
let geometryDragState = null;
let geometryDragMoveHandler = null;
let geometryDragEndHandler = null;
let tutorStep = 0;
let insultWarningCount = 0;
let warningOverlayTimer = null;
let pendingSafetySurvey = null;
let webModeEnabled = false;
let lensModeEnabled = false;
let testModeEnabled = false;
let balleModeEnabled = false;
let engineModeOpen = false;
let enginePanelMode = null;
let engineChatSessions = [];
let activeEngineChatId = null;
let engineRunning = false;
let engineStatusStateTitle = "Baluk Engine hazir";
let engineStatusStateText = "Komut ver, uygun kodu ve paneli hazirlayayim.";
let balleGenerating = false;
let lensImageDataUrl = "";
let lensSelection = null;
let lensDragStart = null;
let lensAnalyzing = false;
let lensAiLabels = [];
let lensClassifierReady = false;
let lensClassifierLoading = false;
let lensModelRef = null;
let lensDrawTicker = null;
let isAccountLoggedIn = false;
let voiceModeActive = false;
let voiceOutputMuted = false;
let voiceRecognition = null;
let voiceRecognitionRunning = false;
let voiceOpenAnimTimer = null;
let voiceMicPrimed = false;
let voiceTurnInFlight = false;
let voiceSpeechPrimed = false;
let voiceWebModeEnabled = false;
let isPremiumUser = localStorage.getItem("balukPremium") === "1";
let premiumPaymentPending = localStorage.getItem("balukPremiumPending") === "1";
let allowProfanity = localStorage.getItem("balukAllowProfanity") === "1";
let premiumExpiresAt = Number(localStorage.getItem("balukPremiumExpiresAt") || "0");
let usedPremiumCodes = JSON.parse(localStorage.getItem("balukPremiumUsedCodes") || "[]");
let premiumCodeGuard = JSON.parse(localStorage.getItem("balukPremiumCodeGuard") || "{\"stage\":0,\"triesLeft\":3,\"lockedUntil\":0}");
let thinkingModeEnabled = localStorage.getItem("balukThinkingMode") === "1";
let thinkingUsageTimestamps = JSON.parse(localStorage.getItem("balukThinkingUsage") || "[]");
let thinkingAttachedImageDataUrl = "";
const playfulProfanityReplies = [
  "Lan tatlı sert girdin 😄 Kavga yok ama şaka dozunda takılabiliriz kanka.",
  "Aaa küfür modu açıkmış 😅 Ben de hafif atışmayla devam ederim: sen efsane bir manyaksın ama tatlısından.",
  "Tamamdır dostum, premium şaka modu aktif 🤝 Kırmadan dökmeden takılalım; ben buradayım.",
  "Hadi bakalım küfürlü mizah açıldı 😎 Sert değil, eğlenceli devam: enerjin ateş ediyor!"
];
const profanityTokensByIntent = {
  greeting: ["aq", "amk", "mk"],
  mood: ["aq", "amk"],
  question: ["aq", "amk"],
  tech: ["aq", "mk"],
  game: ["amk", "aq"],
  money: ["amk", "aq"],
  math: ["aq", "mk"],
  web: ["aq", "amk"],
  system: ["mk", "aq"],
  default: ["aq", "amk", "mk"]
};
const webAnswerIntroPrompts = [
  "Evet, bu konuyu sana net ve anlaşılır şekilde açayım:",
  "Harika soru, bunu adım adım anlatayım:",
  "Bunu kısa bir girişle başlayıp detaylıca açıklayayım:",
  "Tam yerinden bir konu; işte özlü ama güçlü anlatım:",
  "Sana bu konuyu akıcı bir dille toparlayayım:",
  "Önce ana resmi çizelim, sonra detaya girelim:",
  "Bunu kolay anlaşılır bir çerçevede anlatalım:",
  "Güzel bir başlık seçtin, net açıklaması şöyle:",
  "Bunu konuşma diliyle ama doğru şekilde özetleyeyim:",
  "Hadi başlayalım, bu konunun temel mantığı şu şekilde:"
];
const webAnswerOutroPrompts = [
  "İstersen bir sonraki adımda bunu daha teknik seviyede de açabilirim.",
  "Dilersen bunun pratik örneklerini de tek tek çıkarırım.",
  "İstersen bu konuyu maddeler halinde daha da sadeleştireyim.",
  "Hazırsan şimdi bunun kritik noktalarını ayrıca listelerim.",
  "İstersen bunu kısa-not formatına çevirip kaydedebiliriz.",
  "Dilersen aynı konuyu farklı kaynaklarla da kıyaslayabilirim.",
  "İstersen şimdi bununla ilgili hızlı bir soru-cevap turu yapalım.",
  "Gerekirse bunu 3 dakikalık öğrenme planına da dönüştürürüm.",
  "İstersen bunun yanlış bilinen kısımlarını da ayrıca anlatayım.",
  "Devam etmek istersen konuyu daha derin bir seviyeye taşıyalım."
];
const convoState = {
  awaitingMoodReply: false,
  awaitingGoalPlan: false,
  awaitingGeneralAnswer: false,
  awaitingEpsteinList: false,
  awaitingCreativeTheme: false,
  creativeMode: null,
  awaitingActivityChoice: false
};
const userMemory = JSON.parse(localStorage.getItem("balukMemory") || "{}");
const BAN_STORAGE_KEY = "balukBanState";
const ACCOUNT_STORAGE_KEY = "balukAccountProfile";
const ACCOUNT_BROWSER_PIN_KEY = "balukAccountBrowserPinned";
const ACCOUNT_BROWSER_BACKUP_KEY = "balukAccountBrowserBackup";
const ACCOUNT_LOGOUT_MARK_KEY = "balukAccountLoggedOut";
const PREMIUM_STORAGE_KEY = "balukPremium";
const PREMIUM_PENDING_KEY = "balukPremiumPending";
const ALLOW_PROFANITY_STORAGE_KEY = "balukAllowProfanity";
const PREMIUM_PAY_LINK = "https://www.paytr.com/link/JdCHee7";
const PREMIUM_VERIFY_CODES = ["324213", "213414", "983243", "372321", "120545"];
const PREMIUM_DECOY_CODES = Array.from({ length: 400 }, (_, i) => `9${String(i + 1000).padStart(5, "0")}`);
const PREMIUM_CODE_GUARD_KEY = "balukPremiumCodeGuard";
const PREMIUM_USED_CODES_KEY = "balukPremiumUsedCodes";
const PREMIUM_EXPIRY_KEY = "balukPremiumExpiresAt";
const PREMIUM_DURATION_MS = 30 * 24 * 60 * 60 * 1000;
const MODEL_STORAGE_KEY = "balukSelectedModel";
const CHAT_SESSIONS_STORAGE_KEY = "balukChatSessions";
const BACKGROUND_THEME_KEY = "balukBackgroundTheme";
const BACKGROUND_MUSIC_KEY = "balukBackgroundMusic";
const BACKGROUND_VOLUME_KEY = "balukBackgroundVolume";
const THINKING_MODE_KEY = "balukThinkingMode";
const THINKING_USAGE_KEY = "balukThinkingUsage";
const ENGINE_CHAT_STORAGE_KEY = "balukEngineChatSessions";
const ENGINE_PANEL_STORAGE_KEY = "balukEnginePanelMode";
const DEFAULT_BLM_NOTEBOOK = `print("Baluk Engine")
print(name=yazi"BLM not defterine hos geldin.")
button(name=buton"Study'den ornek al")
style=text { color=purple font-size=28px font-weight=800 }
style=button { background=purple color=white padding=12px 18px radius=18px }`;
const THINKING_PASSWORD = "240913";
const GUEST_CLEAR_KEYS = [
  "balukMemory", ACCOUNT_STORAGE_KEY, ACCOUNT_BROWSER_PIN_KEY, ACCOUNT_BROWSER_BACKUP_KEY, ACCOUNT_LOGOUT_MARK_KEY, PREMIUM_STORAGE_KEY, PREMIUM_PENDING_KEY, PREMIUM_CODE_GUARD_KEY, ALLOW_PROFANITY_STORAGE_KEY,
  PREMIUM_USED_CODES_KEY, PREMIUM_EXPIRY_KEY, BACKGROUND_THEME_KEY, BACKGROUND_MUSIC_KEY, BACKGROUND_VOLUME_KEY,
  MODEL_STORAGE_KEY, CHAT_SESSIONS_STORAGE_KEY, THINKING_MODE_KEY, THINKING_USAGE_KEY,
  "balukMathTutorDone", "balukMasterTutor17Done", "balukMasterTutor21Done", "balukMasterTutor22Done", BAN_STORAGE_KEY
];
const ambientMusicPresets = {
  "1": { base: 174, lfo: 0.04, wave: "sine", layer: "pad", detune: 6 },
  "2": { base: 196, lfo: 0.05, wave: "triangle", layer: "pad", detune: 8 },
  "3": { base: 165, lfo: 0.035, wave: "sine", layer: "airy", detune: 4 },
  "4": { base: 208, lfo: 0.05, wave: "triangle", layer: "pad", detune: 9 },
  "5": { base: 156, lfo: 0.03, wave: "sine", layer: "warm", detune: 5 },
  "6": { base: 220, lfo: 0.045, wave: "triangle", layer: "airy", detune: 7 },
  "7": { base: 146, lfo: 0.028, wave: "sine", layer: "warm", detune: 4 },
  "8": { base: 233, lfo: 0.04, wave: "triangle", layer: "pad", detune: 8 },
  "9": { base: 185, lfo: 0.038, wave: "sine", layer: "airy", detune: 6 },
  "10": { base: 208, lfo: 0.034, wave: "triangle", layer: "warm", detune: 5 }
};
const balleAssets = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Colorful_bokeh_background.jpg/1280px-Colorful_bokeh_background.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Yellow_boxfish_ostracion_cubicus.jpg/1024px-Yellow_boxfish_ostracion_cubicus.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Carassius_auratus_Luc_Viatour.jpg/1024px-Carassius_auratus_Luc_Viatour.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Green_woodpecker_%28Picus_viridis%29.jpg/800px-Green_woodpecker_%28Picus_viridis%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Red-bellied_Woodpecker-27527-2.jpg/800px-Red-bellied_Woodpecker-27527-2.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Starfish_in_the_sea.jpg/1024px-Starfish_in_the_sea.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Solar_flare.jpg/1024px-Solar_flare.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sunrise_over_sea.jpg/1024px-Sunrise_over_sea.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/The_tube.jpg/1280px-The_tube.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Tropical_beach.jpg/1280px-Tropical_beach.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Ocean_wave.jpg/1280px-Ocean_wave.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mountain_sunrise.jpg/1280px-Mountain_sunrise.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lake_view.jpg/1280px-Lake_view.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Valley_landscape.jpg/1280px-Valley_landscape.jpg"
];

const splashPromptTemplates = [
  "Bugün neye dalalım?",
  "Nasıl yardım edebilirim?",
  "Ne zaman hazırsan ben de hazırım.",
  "Bugün ne yapıyoruz?",
  "Nasıl gidiyor {name}?",
  "Hazır mısın?"
];
const geometryShapeMeta = {
  square: { label: "Kare", sides: ["a", "b", "c", "d"], vertexCount: 4 },
  rectangle: { label: "Dikdörtgen", sides: ["uzun", "kısa", "uzun", "kısa"], vertexCount: 4 },
  triangle: { label: "Üçgen", sides: ["a", "b", "c"], vertexCount: 3 },
  circle: { label: "Daire", sides: ["r"], vertexCount: 0 },
  parallelogram: { label: "Paralelkenar", sides: ["a", "b", "a", "b"], vertexCount: 4 },
  trapezoid: { label: "Yamuk", sides: ["a", "b", "c", "d"], vertexCount: 4 },
  pentagon: { label: "Beşgen", sides: ["a", "b", "c", "d", "e"], vertexCount: 5 },
  hexagon: { label: "Altıgen", sides: ["a", "b", "c", "d", "e", "f"], vertexCount: 6 },
  rational: { label: "Rasyonel İşlem", sides: [], vertexCount: 0 }
};
const merhabaResponses = [
  "Selam dostum 😄 Buradayım ve yardıma hazırım. Sen nasılsın?",
  "Merhaba kanka 🌟 Baluk yanında. Sen nasılsın?",
  "Heyy, hoş geldin 🐟 Güzel bir sohbete var mısın? Sen nasılsın?",
  "Merhabaaa ✨ Enerjim yüksek, senden de iyi haber bekliyorum. Sen nasılsın?",
  "Selamlar 🤝 İstersen birlikte üretelim. Sen nasılsın?",
  "Merhaba dost 💙 Bugün nasıl hissediyorsun, sen nasılsın?",
  "Selam! Hazırım 🚀 Önce bir yoklama: sen nasılsın?",
  "Merhaba kankam 😎 Ben buradayım, sen nasılsın?",
  "Ahooy 🧭 Baluk aktif! Sen nasılsın?",
  "Selammm 🌈 Sohbete başlayalım, sen nasılsın?"
];
const nasilsinResponses = [
  "Ben iyiyim kanka 😄 Sen nasılsın?",
  "Gayet iyiyim dostum 🌟 Sen nasılsın?",
  "Harikayım, enerji full ⚡ Sen nasılsın?",
  "İyiyim ve buradayım 🐟 Sen nasılsın?",
  "Süperim, bugün çok motiveyim 🚀 Sen nasılsın?",
  "Baya iyiyim, sohbet modum açık 💙 Sen nasılsın?",
  "İyiyim vallahi, keyfim yerinde 😎 Sen nasılsın?",
  "Şu an çok iyiyim, birlikte üretmeye hazırım ✨ Sen nasılsın?",
  "İyiyim dost, sana da iyi gelmek isterim 🤝 Sen nasılsın?",
  "İyiyim, teşekkürler! Bugün çok canlıyım 🌈 Sen nasılsın?"
];

const extendedGreetingKeywords = [
  "merhabalar", "selamlar", "selammm", "selamın aleyküm", "selamunaleyk", "sea", "slm", "slm nbr",
  "sa naber", "naber ya", "naber dost", "naber kank", "naber kral", "ne var ne yok", "ne haber var",
  "nasıl gidiyor", "nasil gidiyor", "nasıl gidiyoo", "nasil gidiyoo", "nasıl gidiyr", "nasil gidiyr",
  "napıyosun", "napiyosun", "napion", "napiyon", "noluyo", "neler oluyor",
  "günaydın", "gunaydin", "iyi sabahlar", "iyi akşamlar", "iyi aksamlar", "iyi geceler", "hayırlı geceler",
  "selam dostum", "selam canım", "selam baluk", "hey baluk", "yo baluk", "kanka naber", "bro naber"
];


const appreciationKeywords = [
  "teşekkür", "tesekkur", "teşekkürler", "tesekkurler", "sağ ol", "sag ol", "eyvallah", "çok iyi", "harika olmuş", "eline sağlık", "ellerine sağlık", "thanks", "thank you"
];
const appreciationResponses = [
  "Rica ederim dostum 💙 İstersen devamını da birlikte halledelim.",
  "Ne demek, her zaman buradayım 🤝 Sıradaki sorunu da çözebilirim.",
  "Teşekkürünü aldım, çok mutlu oldum 😊 Devam edelim mi?",
  "Rica ederim kanka ✨ İstersen bir sonraki adımı da planlayalım.",
  "İyi ki yazdın, yardımcı olabildiysem ne güzel 🙌 Yeni bir şey sorabilirsin.",
  "Ben teşekkür ederim 🌈 Beraber devam etmek istersen hazırım.",
  "Kalbine sağlık, ne zaman istersen buradayım 🐟",
  "Rica ederim! 💫 İstersen bunu daha da geliştirebiliriz.",
  "Memnun olmana sevindim 😄 Bir sonraki konuda da yanındayım.",
  "Her zaman, çekinmeden yazabilirsin 🚀"
];
const praiseKeywords = [
  "aferin", "helal", "helal be", "helal knk", "helal kanka", "kanka helal", "bravo", "brawo", "tebrik", "tebrikler", "adamsın", "kralsın", "efsanesin", "mükemmel"
];
const praiseResponses = [
  "Eyvallah kanka 😎 Güzel enerji! İstersen bir adım daha ileri taşıyalım.",
  "Helalini aldım dostum 🔥 Devam etmek istersen buradayım.",
  "Brawo demen bile motive etti 🚀 Şimdi sıradaki hedefe geçelim mi?",
  "Tebrik mesajını aldım, çok iyi hissettirdi 🙏 Yeni bir konu açabiliriz.",
  "Aferinini cebime koydum 😄 İstersen başka bir şeyi de çözelim.",
  "Kanka helal dedin ya, tüm sistemler boostlandı ⚡ Devam edelim!",
  "Çok iyi geldin dostum 💙 Hadi yeni bir görev ver.",
  "Bu enerji efsane 🌟 Bir sonraki sorunda da yanındayım.",
  "Helal be modu açıldı 😄 Hazırsan yeni tur başlatalım.",
  "Tebrikin için sağ ol 🤝 İstersen şimdi mini bir plan da çıkarırım."
];

const unknownInputResponses = [
  'Bunu tam anlayamadım 😅 Cümleyi biraz daha açar mısın?',
  'Aklıma oturtamadım 🤔 Biraz daha net yazarsan hemen yakalarım.',
  'Mesajın ilginç geldi ama tam çözemedim 🧩 Bir örnekle tekrar yazar mısın?',
  'Bunu yarım yakaladım gibi oldu 😬 Biraz detay verirsen tam çözerim.',
  'Tam bağlayamadım dostum 🐟 Ne demek istediğini bir tık açar mısın?',
  'Bu kısmı net okuyamadım 👀 Daha sade bir cümleyle tekrar deneyelim mi?',
  'Biraz karışık algıladım 🙈 Kısa ve net yazarsan hemen cevaplarım.',
  'Anlamı kaçırdım gibi oldu 😄 Bir daha farklı kelimelerle yazar mısın?',
  'Bunu tam çözemedim ama buradayım 💙 İstersen adım adım gidelim.',
  'Sinyali zayıf aldım 📡 Ne demek istediğini biraz daha açabilir misin?',
  'Bu mesajı tam parse edemedim 🤖 Bir daha yazarsan bu kez yakalarım.',
  'Anlamı yarım kaldı bende 🫠 Biraz daha detay ekleyelim mi?',
  'Bunu çözmek için biraz daha ipucu lazım 🧠 Örnek verir misin?',
  'Tam oturtamadım 😇 Ama beraber netleştiririz, tekrar yazalım.',
  'Bu cümleyi net anlayamadım 🌈 Sadeleştirip tekrar atar mısın?',
  'Bir yerde bağlantıyı kaçırdım 🔍 Kısa bir versiyonunu yazar mısın?',
  'Anlayamadım demeyeyim de yarım anladım 😅 Bir tık daha net olur mu?',
  'Beynimde eşleşmedi 🧠✨ Başka bir şekilde ifade eder misin?',
  'Bunu tam okuyamadım, kusura bakma 🙏 Tekrar dene, bu sefer yakalayayım.',
  'Biraz muğlak kaldı 😶 Ne istediğini net cümleyle yazarsan hemen dönerim.',
  'Yorumlayamadım ama ilgileniyorum 🤝 Daha açık bir sürüm atar mısın?',
  'Bu mesajı tam çözemedim dostum 😄 Konuyu bir tık açar mısın?',
  'Anlamayı çok istiyorum ama cümle net değil 😬 Bir daha dener misin?',
  'Bunu tam anlayamadım, yanlış yönlendirmek istemem ⚠️ Daha net yazalım.',
  'Kelimeleri yakaladım ama niyeti kaçırdım 🎯 Ne demek istediğini açar mısın?',
  'Bunu netleyelim mi? 🙂 Kısa bir örnekle tekrar yazman yeterli.',
  'Burada takıldım biraz 🚧 Cümleyi sadeleştirirsen hemen çözebilirim.',
  'Anlamı tam oturmadı bende 🫶 Yeniden yazarsan hızlıca yardımcı olurum.',
  'Bu ifade bana kapalı geldi 🌫️ Bir tık daha açık anlatır mısın?',
  'Tam anlayamadım ama vazgeçmedim 💪 Tekrar yaz, birlikte çözelim.',
  'Bunu net okuyamadım 😅 İstersen tek cümlede ne istediğini yaz.',
  'Algı tarafında kayma oldu sanırım 🤓 Tekrar dene, bu kez tam yakalayayım.'
];

const saKeywords = [
  "sa", "selamün aleyküm", "selamun aleyküm", "selamünaleyküm", "selamunaleykum",
  "aleyküm selam", "aleykum selam", "selamun aleykum", "s.a", "a.s", "esselamu aleykum",
  "esselamün aleyküm", "hayırlı sabahlar", "hayırlı akşamlar", "hayırlı geceler", "cümleten selam", "selamlar", "selam", "merhaba"
];
const saResponses = [
  "Aleyküm selam canım dostum 🌙✨ Hoş geldin, nasılsın bugün?",
  "Ve aleyküm selam 🤍 Buradayım, birlikte harika işler çıkaralım!",
  "Selamün aleykümün alındı 🌟 Ruhun sakin, günün bereketli olsun!",
  "Aleyküm selam kankam 😄 İyi ki geldin, sana nasıl yardımcı olayım?",
  "Selam dostum 🐟 Kalpten bir selam da benden, keyifler nasıl?",
  "Aleyküm selam ✨ Modun yüksek olsun, bugün ne üretelim?",
  "Hoş geldin! 🤝 Selamını aldım, enerjin çok güzel geldi.",
  "Selamlarrr 🌈 Buradayım ve hazırım, hadi başlayalım!",
  "Aleyküm selam güzel insan 💙 İstersen sohbet, istersen çözüm modu açalım.",
  "Selamın başım üstüne 🙌 Bugün yanında Baluk var, birlikte hallederiz."
];
const unifiedKeywordCategories = {
  greetings: ["merhaba", "selam", "hey", "günaydın", "iyi akşamlar", "nasılsın", "naber", "görüşürüz", "bye", "hoş geldin"],
  questionStarters: ["neden", "nasıl", "ne", "kim", "kaç", "hangi", "olur mu", "mümkün mü", "gerçekten", "doğru mu"],
  aiTech: ["ai", "yapay zeka", "robot", "algoritma", "kod", "yazılım", "python", "html", "javascript", "veritabanı", "sunucu", "internet", "uygulama", "site", "tarayıcı"],
  game: ["oyun", "level", "boss", "silah", "karakter", "xp", "skor", "görev", "harita", "mod", "pvp", "rank", "kazandım", "kaybettim", "respawn"],
  business: ["para", "satış", "kazanç", "zarar", "yatırım", "müşteri", "ürün", "indirim", "kampanya", "fiyat"],
  emotions: ["mutluyum", "üzgünüm", "sinirliyim", "heyecanlıyım", "korkuyorum", "stres", "boşluk", "motive", "yorgunum", "sıkıldım"],
  creativity: ["tasarım", "logo", "fikir", "proje", "hayal", "çizim", "animasyon", "hikaye", "karakter", "konsept"],
  education: ["matematik", "sınav", "ders", "okul", "ödev", "soru", "çözüm", "formül", "konu", "test"],
  system: ["başlat", "dur", "yeniden", "sıfırla", "kaydet", "yükle", "sil", "aç", "kapat", "yardım"]
};
const unifiedKeywordPromptBank = [
  "{keyword} konusunda net bir yol haritası çıkarabiliriz. Önce hedefi tanımlayalım, sonra 3 seviyede ilerleyelim: temel mantık, pratik uygulama ve ileri optimizasyon. İstersen hemen sana uygulanabilir bir mini plan + örnek senaryo da hazırlayayım.",
  "Harika bir başlık seçtin: {keyword}. Bunu AI gibi düşünerek ele alalım: problem tanımı, veri/bağlam, çözüm yaklaşımı ve doğrulama adımları. İstersen bir sonraki mesajda bunu tablo gibi, adım adım ve kısa-uzun versiyonlu anlatabilirim.",
  "{keyword} ile ilgili güçlü bir sonuç almak için önce doğru soruyu kuralım. Sana önce hızlı özet, sonra derin analiz, en sonda da uygulanabilir aksiyon listesi verebilirim. Böylece sadece bilgi değil, direkt eylem planı da çıkmış olur.",
  "{keyword} için sana iki katmanlı anlatım yapabilirim: (1) 30 saniyelik sade özet, (2) uzman seviyesi detay. Ayrıca hata yapmaman için kritik noktaları ve en sık yapılan yanlışları da ekleyebilirim.",
  "Mükemmel, {keyword} konuşalım. İstersen bunu gerçek hayata uyarlayıp örnekler üzerinden gidelim: ne zaman çalışır, nerede çalışmaz, nasıl geliştirilebilir. Böylece konu ezber değil, gerçekten anlaşılmış olur.",
  "{keyword} sorusunu sistematik çözelim: giriş bilgileri → analiz → çözüm → kontrol. İstersen buna bonus olarak alternatif yöntemleri de kıyaslayıp hangisinin daha verimli olduğunu birlikte seçebiliriz.",
  "Süper seçim: {keyword}. Sana bu konuyu hem başlangıç seviyesinde hem ileri seviyede açıklayabilirim. Ayrıca istersen öğrenme hızına göre 1 günlük, 1 haftalık ve 1 aylık mini gelişim planı da oluşturabilirim.",
  "{keyword} için AI tarzı bir çerçeve öneriyorum: amaç, kısıtlar, strateji ve çıktı kalitesi. Bu yöntemle karmaşık görünen konular daha yönetilebilir hale gelir. İstersen şimdi doğrudan senin senaryona özel uyarlayayım.",
  "Bu başlık çok iyi: {keyword}. Sana kısa cevap yerine güçlü bir neden-sonuç analizi sunabilirim: neden önemli, nasıl uygulanır, hangi sonuçlar beklenir. İstersen hemen somut örnek ve kontrol listesi de eklerim.",
  "{keyword} konusunda birlikte profesyonel bir çıktı üretebiliriz. Önce net hedefi koyup sonra adımları ölçülebilir hale getiririz; böylece ilerleme görünür olur. Hazırsan şimdi sana özel, uzun ve detaylı bir sürümle başlayayım."
];
const localUtilityQuestionTriggers = {
  time: ["saat kaç", "saat su an kac", "şu an saat", "simdi saat", "time now", "what time"],
  date: ["bugünün tarihi", "bugun tarih", "tarih ne", "ayın kaçı", "hangi gündeyiz", "hangi gun", "today date"],
  weather: ["hava nasıl", "hava durumu", "bugün hava", "yarın hava", "hava kaç derece", "weather", "hava soguk mu", "hava sıcak mı"]
};
const offlineKnowledgeTopics = [
  { key: "uyku düzeni", tags: ["uyku", "uyku düzeni", "erken kalk"], reply: "Uyku düzeni için sabit saat, ekranı azaltma ve kafeini erkene çekme en etkili üçlüdür 😴" },
  { key: "odaklanma", tags: ["odak", "odaklanma", "konsantre"], reply: "Odak için 25-5 pomodoro + tek görev listesi en hızlı sonuç verir 🎯" },
  { key: "zaman yönetimi", tags: ["zaman yönetimi", "planlama", "ajanda"], reply: "Zaman yönetiminde önce 3 ana hedef belirleyip kalan işleri ikinci plana almak verimi çok artırır ⏱️" },
  { key: "stres yönetimi", tags: ["stres", "kaygı", "anksiyete"], reply: "Stres yönetiminde nefes egzersizi, kısa yürüyüş ve işleri küçük adımlara bölmek çok işe yarar 🌿" },
  { key: "motivasyon", tags: ["motivasyon", "heves", "isteksizlik"], reply: "Motivasyon düşüşünde hedefi küçültüp hemen başlayabileceğin 5 dakikalık bir adım seçmek en iyi tekniktir 🚀" },
  { key: "ders çalışma", tags: ["ders", "çalışma", "sınav"], reply: "Ders çalışırken aktif tekrar ve soru çözümü, sadece okumadan çok daha etkilidir 📚" },
  { key: "matematik", tags: ["matematik", "problem", "denklem"], reply: "Matematikte hız için konu özetinden sonra artan zorlukta 20 soru çözmek ideal yöntemdir ➗" },
  { key: "fizik", tags: ["fizik", "kuvvet", "hareket"], reply: "Fizikte formülü ezberlemekten çok birim analizi ve temel mantığı anlamak daha kalıcıdır ⚛️" },
  { key: "kimya", tags: ["kimya", "mol", "reaksiyon"], reply: "Kimyada denklem dengeleme ve mol oranı iyi oturunca çoğu soru kolaylaşır 🧪" },
  { key: "biyoloji", tags: ["biyoloji", "hücre", "genetik"], reply: "Biyolojide kavram haritası çıkararak çalışma, bilgiyi daha uzun süre akılda tutar 🧬" },
  { key: "yazılım öğrenme", tags: ["yazılım", "programlama", "kod"], reply: "Yazılım öğrenirken en iyi yol: küçük proje yap, her gün biraz kod yaz, sonra iyileştir 💻" },
  { key: "javascript", tags: ["javascript", "js", "frontend"], reply: "JavaScript'te temeli güçlendirmek için önce değişkenler, fonksiyonlar ve async mantığını pekiştir ⚙️" },
  { key: "python", tags: ["python", "pandas", "numpy"], reply: "Python'da pratik için veri işleme + otomasyon mini projeleri hızlı gelişim sağlar 🐍" },
  { key: "html css", tags: ["html", "css", "web tasarım"], reply: "HTML/CSS'te düzenli component yapısı ve responsive yaklaşım projeyi çok temiz tutar 🎨" },
  { key: "kariyer", tags: ["kariyer", "iş", "meslek"], reply: "Kariyer planında beceri + portföy + iletişim üçlüsünü birlikte güçlendirmek fark yaratır 🧭" },
  { key: "mülakat", tags: ["mülakat", "interview", "iş görüşmesi"], reply: "Mülakatta STAR yöntemiyle örnek vermek seni çok daha net ve güçlü gösterir 🎤" },
  { key: "cv hazırlama", tags: ["cv", "özgeçmiş", "resume"], reply: "CV'de kısa, ölçülebilir başarı cümleleri kullanmak en etkili yaklaşımdır 📝" },
  { key: "iletişim", tags: ["iletişim", "konuşma", "anlatım"], reply: "İletişimde kısa cümle + net örnek + aktif dinleme en iyi kombinasyondur 🤝" },
  { key: "sunum", tags: ["sunum", "prezentasyon", "slayt"], reply: "Sunumda tek slayt tek mesaj prensibi izleyicinin odağını yüksek tutar 📊" },
  { key: "ingilizce", tags: ["ingilizce", "english", "kelime"], reply: "İngilizce gelişimi için günlük kısa dinleme + tekrar + cümle üretimi birlikte yapılmalı 🇬🇧" },
  { key: "spor", tags: ["spor", "antrenman", "fitness"], reply: "Spor rutini için sürdürülebilir program en iyisidir: az ama düzenli ilerlemek kalıcıdır 💪" },
  { key: "beslenme", tags: ["beslenme", "diyet", "kalori"], reply: "Beslenmede denge önemli: protein, lif ve suyu düzenli tutmak enerjiyi ciddi artırır 🥗" },
  { key: "su tüketimi", tags: ["su", "hidrasyon", "su tüketimi"], reply: "Gün boyu suyu parçalara bölerek içmek hem odak hem enerji için çok faydalıdır 💧" },
  { key: "ekonomi", tags: ["ekonomi", "enflasyon", "faiz"], reply: "Ekonomiyi anlamak için enflasyon, faiz ve kur ilişkisini birlikte takip etmek gerekir 📈" },
  { key: "yatırım", tags: ["yatırım", "birikim", "portföy"], reply: "Yatırımda tek enstrümana yüklenmek yerine risk dağıtımıyla ilerlemek daha güvenlidir 💼" },
  { key: "girişimcilik", tags: ["girişim", "startup", "iş fikri"], reply: "Girişimcilikte hızlı prototip ve gerçek kullanıcı geri bildirimi en kritik adımdır 🛠️" },
  { key: "pazarlama", tags: ["pazarlama", "marketing", "reklam"], reply: "Pazarlamada doğru hedef kitle ve net değer önerisi satışın temelidir 📣" },
  { key: "sosyal medya", tags: ["sosyal medya", "instagram", "tiktok"], reply: "Sosyal medyada düzenli içerik + tek tema + ölçümleme uzun vadede büyüme sağlar 📱" },
  { key: "oyun stratejisi", tags: ["oyun", "rank", "strateji"], reply: "Oyunlarda gelişim için tekrar eden hatayı bulup tek tek düzeltmek en hızlı yöntemdir 🎮" },
  { key: "film önerisi", tags: ["film", "dizi", "izlenecek"], reply: "Film/dizi seçerken tür + tempo + süre kriteriyle filtrelemek doğru öneriye hızlı götürür 🍿" },
  { key: "kitap önerisi", tags: ["kitap", "roman", "okuma"], reply: "Kitap alışkanlığında kısa ve sürükleyici kitaplarla başlamak sürekliliği artırır 📖" },
  { key: "seyahat", tags: ["seyahat", "gezi", "tatil"], reply: "Seyahat planında bütçe, ulaşım ve konaklamayı erken netleştirmek stres azaltır ✈️" },
  { key: "verimlilik", tags: ["verimlilik", "üretkenlik", "performans"], reply: "Verimlilikte günün ilk 90 dakikasını en zor işe ayırmak fark yaratır ⚡" },
  { key: "alışkanlık", tags: ["alışkanlık", "rutin", "disiplin"], reply: "Alışkanlık inşasında küçük başlayıp her gün aynı saatte tekrar etmek en güçlü metottur 🔁" }
];
const generalKnowledgeEntries = [
  {
    name: "OpenAI",
    keys: ["openai"],
    purpose: "OpenAI; yapay zeka modelleri geliştiren, bunları son kullanıcıya ve geliştiricilere ürünleştiren bir teknoloji şirketidir. Temel amacı; metin, görsel, ses ve kod üretimi gibi alanlarda güçlü AI araçları sunmaktır.",
    products: "OpenAI’nin öne çıkan ürün ailesinde ChatGPT, OpenAI API, DALL·E tabanlı görsel üretim, Sora video üretimi ve geliştiricilere yönelik model/araç platformları bulunur."
  },
  {
    name: "ChatGPT",
    keys: ["chatgpt"],
    purpose: "ChatGPT; soru cevaplama, yazı yazma, özet çıkarma, fikir üretme, plan yapma ve kod konusunda yardımcı olmak için kullanılan konuşma tabanlı yapay zeka ürünüdür."
  },
  {
    name: "YouTube",
    keys: ["youtube", "you tube"],
    purpose: "YouTube’un ana amacı; insanların video yüklemesi, izlemesi, paylaşması ve içerik üreticilerinin kitleye ulaşması için bir platform sunmaktır. Eğitim, eğlence, haber, müzik ve canlı yayın gibi çok farklı kullanım alanları vardır."
  },
  {
    name: "Wikipedia",
    keys: ["wikipedia", "vikipedi"],
    purpose: "Wikipedia; kullanıcıların ortak katkısıyla büyüyen, genel bilgiye hızlı erişim sağlayan çevrim içi ansiklopedidir. Genelde konuya hızlı giriş yapmak için kullanılır."
  },
  {
    name: "GitHub",
    keys: ["github", "git hub"],
    purpose: "GitHub; yazılım projelerini saklamak, sürüm kontrolü yapmak, ekip halinde geliştirme yürütmek ve açık kaynak projeleri paylaşmak için kullanılan bir platformdur."
  },
  {
    name: "Google",
    keys: ["google"],
    purpose: "Google; web arama başta olmak üzere bilgi bulma, haritalar, e-posta, bulut servisleri ve reklam teknolojileri sunan büyük bir teknoloji ekosistemidir."
  },
  {
    name: "WhatsApp",
    keys: ["whatsapp", "whats app"],
    purpose: "WhatsApp; bireylerin mesajlaşması, sesli/görüntülü konuşması ve medya paylaşması için kullanılan anlık iletişim uygulamasıdır."
  },
  {
    name: "Instagram",
    keys: ["instagram", "insta"],
    purpose: "Instagram; fotoğraf, kısa video, hikâye ve mesajlaşma özellikleriyle sosyal paylaşım ve kişisel/marka görünürlüğü sağlayan bir platformdur."
  },
  {
    name: "Spotify",
    keys: ["spotify"],
    purpose: "Spotify; müzik, podcast ve ses içeriklerini dinlemek, listeler oluşturmak ve yeni içerik keşfetmek için kullanılan dijital ses platformudur."
  },
  {
    name: "Netflix",
    keys: ["netflix"],
    purpose: "Netflix; dizi, film, belgesel ve özel yapımları internet üzerinden izlemeye yarayan bir dijital yayın platformudur."
  }
];
const offlineQuestionTemplates = [
  "{topic} nedir",
  "{topic} nasıl yapılır",
  "{topic} nasıl öğrenilir",
  "{topic} için en iyi yöntem ne",
  "{topic} için tavsiye verir misin",
  "{topic} hakkında bilgi ver",
  "{topic} konusunda ne önerirsin",
  "{topic} zor mu",
  "{topic} için plan yapar mısın",
  "{topic} için başlangıç rehberi"
];
const offlineQuestionCatalog = offlineKnowledgeTopics.flatMap((topic) =>
  offlineQuestionTemplates.map((tpl) => tpl.replaceAll("{topic}", topic.key))
);
const testModeSubjectKeywords = {
  matematik: ["matematik", "geometri", "cebir"],
  turkce: ["türkçe", "turkce", "dil bilgisi", "paragraf"],
  sosyal: ["sosyal", "tarih", "coğrafya", "cografya", "vatandaşlık", "vatandaslik"],
  fen: ["fen", "bilim", "fizik", "kimya", "biyoloji", "biyoloji"]
};
const humorTriggerKeywords = ["espri", "espiri", "şaka", "saka", "komedi", "fıkra", "fikra"];
const humorReplies = [
  "Matematik kitabı neden üzgün? Çok problemi var 😅",
  "Elektrik kesilince ne olur? Aydınlanma gider 💡",
  "Balık neden ders çalışmaz? Çünkü zaten okyanus bilgi 😄",
  "Tavuk neden dershaneye gider? Civ civ test çözmek için 🐔",
  "Bilgisayar neden hasta oldu? Virüs kaptı 💻",
  "Kalem neden konuşmaz? Mürekkebi bitmiş ✏️",
  "Saat neden koşmaz? Zamanı var 😆",
  "Araba neden üzgün? Lastiği patlak 🚗",
  "Telefon neden sessiz? Şarjı yok 📱",
  "Kedi neden yazamaz? Pati yok 🐱",
  "Doktor neden güler? Hastası iyileşmiş 😄",
  "Kitap neden uyur? Kapandı 📚",
  "Güneş neden sıcak? İşini ciddiye alıyor ☀️",
  "Su neden akar? Yerinde duramaz 💧",
  "Öğrenci neden kaçar? Sınav var 😆",
  "Pizza neden mutlu? Dilim dilim seviliyor 🍕",
  "Şapka neden uçar? Rüzgar var 🎩",
  "Ay neden parlar? Gece vardiyası 🌙",
  "Çorap neden kaybolur? Gizli görevde 🧦",
  "Kahve neden uyanık? Zaten uyarıcı ☕"
];
const testModeQuestions = {
  matematik: [
    { q: "Bir düzgün çokgenin bir dış açısı 20° ise çokgen kaç kenarlıdır?", choices: ["15", "18", "20", "24"], answer: 1, explain: "Düzgün çokgende bir dış açı = 360/n. 360/20 = 18 kenar." },
    { q: "12² işleminin sonucu kaçtır?", choices: ["124", "144", "132", "154"], answer: 1, explain: "12² = 12 × 12 = 144." },
    { q: "3x + 5 = 20 ise x kaçtır?", choices: ["5", "3", "7", "10"], answer: 0, explain: "3x = 15, buradan x = 5." },
    { q: "Bir karenin alanı 64 cm² ise bir kenarı kaç cm'dir?", choices: ["6", "7", "8", "9"], answer: 2, explain: "Karenin bir kenarı √64 = 8 cm olur." },
    { q: "0,75 kesir olarak nedir?", choices: ["3/4", "1/3", "2/5", "1/4"], answer: 0, explain: "0,75 = 75/100 = 3/4." },
    { q: "Bir üçgende iki açı 50° ve 60° ise üçüncü açı kaçtır?", choices: ["60", "70", "80", "90"], answer: 1, explain: "Üçgen iç açıları toplamı 180°: 180-(50+60)=70." },
    { q: "6³ işleminin sonucu kaçtır?", choices: ["36", "216", "126", "18"], answer: 1, explain: "6³ = 6×6×6 = 216." },
    { q: "Bir çemberin yarısı kaç derecedir?", choices: ["90", "180", "270", "360"], answer: 1, explain: "Tam çember 360°, yarısı 180° olur." },
    { q: "48 ÷ 6 kaçtır?", choices: ["6", "7", "8", "9"], answer: 2, explain: "48/6 = 8." },
    { q: "Bir sayının %25’i 20 ise sayı kaçtır?", choices: ["40", "60", "80", "100"], answer: 2, explain: "0,25×sayı=20 => sayı=80." },
    { q: "24 ÷ 6 = ?", choices: ["2", "3", "4", "6"], answer: 2, explain: "24 bölü 6 = 4." },
    { q: "3x = 15 ise x kaçtır?", choices: ["3", "4", "5", "6"], answer: 2, explain: "Her iki tarafı 3'e böl: x = 5." },
    { q: "Bir üçgenin iç açılar toplamı kaçtır?", choices: ["90", "120", "180", "360"], answer: 2, explain: "Üçgen iç açı toplamı 180°'dir." },
    { q: "120 sayısının %25’i kaçtır?", choices: ["20", "25", "30", "35"], answer: 2, explain: "120 x 0,25 = 30." },
    { q: "5 + 3 × 2 = ?", choices: ["11", "16", "13", "10"], answer: 0, explain: "Önce çarpma: 3×2=6, sonra 5+6=11." },
    { q: "48 sayÄ±sÄ±nÄ±n 3/4'Ã¼ kaÃ§tÄ±r?", choices: ["24", "36", "32", "40"], answer: 1, explain: "48 x 3/4 = 36 olur." },
    { q: "Bir kalemin fiyatÄ± 12 TL'dir. 5 kalem kaÃ§ TL eder?", choices: ["50", "60", "72", "48"], answer: 1, explain: "12 x 5 = 60 TL eder." },
    { q: "2,4 + 3,75 kaÃ§ eder?", choices: ["5,15", "6,15", "6,25", "5,25"], answer: 1, explain: "2,4 + 3,75 = 6,15 eder." },
    { q: "Uzun kenarÄ± 12 cm, kÄ±sa kenarÄ± 7 cm olan dikdÃ¶rtgenin Ã§evresi kaÃ§ cm'dir?", choices: ["19", "38", "84", "24"], answer: 1, explain: "Ã‡evre = 2 x (12 + 7) = 38 cm." },
    { q: "5x = 45 ise x kaÃ§tÄ±r?", choices: ["8", "9", "10", "11"], answer: 1, explain: "45'i 5'e bÃ¶lersek x = 9 bulunur." },
    { q: "Bir dairenin yarÄ±sÄ± kaÃ§ derecedir?", choices: ["90", "360", "180", "120"], answer: 2, explain: "Tam daire 360Â° olduÄŸu iÃ§in yarÄ±sÄ± 180Â°'dir." },
    { q: "18 ile 24'Ã¼n EBOB'u kaÃ§tÄ±r?", choices: ["6", "12", "3", "9"], answer: 0, explain: "18 ve 24'Ã¼n en bÃ¼yÃ¼k ortak bÃ¶leni 6'dÄ±r." },
    { q: "200 TL'lik Ã¼rÃ¼ne %10 indirim yapÄ±lÄ±rsa yeni fiyat kaÃ§ TL olur?", choices: ["180", "190", "170", "160"], answer: 0, explain: "%10 indirim 20 TL yapar, 200 - 20 = 180 TL." },
    { q: "3 Ã¼ssÃ¼ 3 kaÃ§tÄ±r?", choices: ["6", "9", "27", "18"], answer: 2, explain: "3 x 3 x 3 = 27 eder." },
    { q: "0,5 + 0,25 kaÃ§ eder?", choices: ["0,75", "0,30", "0,80", "0,65"], answer: 0, explain: "0,5 + 0,25 = 0,75 eder." },
    { q: "7, 14, 21, 28, ... Ã¶rÃ¼ntÃ¼sÃ¼nde 10. terim kaÃ§tÄ±r?", choices: ["63", "70", "77", "84"], answer: 1, explain: "Ã–rÃ¼ntÃ¼ 7'ÅŸer artar, 10. terim 7 x 10 = 70'tir." },
    { q: "Bir Ã¼Ã§genin iÃ§ aÃ§Ä±lar toplamÄ± kaÃ§ derecedir?", choices: ["90", "180", "270", "360"], answer: 1, explain: "Her Ã¼Ã§gende iÃ§ aÃ§Ä±lar toplamÄ± 180Â°'dir." },
    { q: "96 Ã· 8 kaÃ§tÄ±r?", choices: ["10", "11", "12", "13"], answer: 2, explain: "96'yÄ± 8'e bÃ¶lersek 12 eder." },
    { q: "4 saat 25 dakika toplam kaÃ§ dakikadÄ±r?", choices: ["245", "255", "265", "275"], answer: 2, explain: "4 saat = 240 dakika, 240 + 25 = 265 dakikadÄ±r." },
    { q: "15 sayÄ±sÄ±nÄ±n asal Ã§arpanlarÄ± hangileridir?", choices: ["1 ve 15", "3 ve 5", "5 ve 10", "2 ve 3"], answer: 1, explain: "15 = 3 x 5 ÅŸeklinde asal Ã§arpanlarÄ±na ayrÄ±lÄ±r." },
    { q: "Bir karenin bir kenarÄ± 9 cm ise alanÄ± kaÃ§ cmÂ²'dir?", choices: ["18", "36", "81", "72"], answer: 2, explain: "Karenin alanÄ± 9 x 9 = 81'dir." },
    { q: "120'nin %25'i kaÃ§tÄ±r?", choices: ["20", "25", "30", "35"], answer: 2, explain: "120 x 0,25 = 30 eder." },
    { q: "x + 8 = 19 ise x kaÃ§tÄ±r?", choices: ["9", "10", "11", "12"], answer: 2, explain: "19 - 8 = 11 olduÄŸu iÃ§in x = 11'dir." },
    { q: "1/2 + 1/4 kaÃ§tÄ±r?", choices: ["2/6", "3/4", "1", "1/4"], answer: 1, explain: "1/2 + 1/4 = 3/4 olur." },
    { q: "4, 6, 6, 8, 10 veri grubunun modu kaÃ§tÄ±r?", choices: ["4", "6", "8", "10"], answer: 1, explain: "En sÄ±k tekrar eden sayÄ± 6 olduÄŸu iÃ§in mod 6'dÄ±r." }
  ],
  turkce: [
    { q: "“Güzel” kelimesinin eş anlamlısı hangisidir?", choices: ["çirkin", "hoş", "kötü", "hızlı"], answer: 1, explain: "Güzel kelimesinin eş anlamlısı 'hoş'tur." },
    { q: "“Kitap okuyorum.” cümlesinde yüklem nedir?", choices: ["kitap", "okuyorum", "ben", "okuy"], answer: 1, explain: "Cümlenin yüklemi 'okuyorum'dur." },
    { q: "Hangisi mecaz anlamdır?", choices: ["kalem kırıldı", "ayağı kırıldı", "kalbim kırıldı", "masa kırıldı"], answer: 2, explain: "'Kalbim kırıldı' mecaz anlam taşır." },
    { q: "Hangisi deyimdir?", choices: ["baş ağrısı", "başını derde sokmak", "başını yıkamak", "başını taramak"], answer: 1, explain: "'Başını derde sokmak' bir deyimdir." },
    { q: "Hangisi ünlem cümlesidir?", choices: ["Ne güzel bir gün!", "Bugün geldim", "Yarın gideceğim", "Okula gittim"], answer: 0, explain: "Ünlem cümlesi duyguyu coşkulu verir: 'Ne güzel bir gün!'" },
    { q: "“Yavaş” kelimesinin zıt anlamlısı nedir?", choices: ["hızlı", "ağır", "yumuşak", "sakin"], answer: 0, explain: "Yavaşın zıt anlamı hızlıdır." },
    { q: "Hangisi fiildir?", choices: ["masa", "koşmak", "kalem", "ev"], answer: 1, explain: "Koşmak eylem bildirdiği için fiildir." },
    { q: "Hangisi soru cümlesidir?", choices: ["Bugün gel", "Sen geldin mi", "Yarın gideceğim", "Okula gittim"], answer: 1, explain: "Soru anlamı taşıyan cümle 'Sen geldin mi'dir." },
    { q: "“Evlerimiz” kelimesinde kaç ek vardır?", choices: ["1", "2", "3", "4"], answer: 1, explain: "Ev + ler (çoğul) + imiz (iyelik): 2 ek vardır." },
    { q: "Noktalama işaretlerinden hangisi soru için kullanılır?", choices: [".", "!", "?", ","], answer: 2, explain: "Soru cümlesi sonunda '?' kullanılır." },
    { q: "“Mutlu” kelimesinin zıt anlamlısı nedir?", choices: ["sevinçli", "üzgün", "neşeli", "keyifli"], answer: 1, explain: "Mutlu kelimesinin zıt anlamlısı üzgündür." },
    { q: "“Kitap okuyorum” cümlesinde yüklem nedir?", choices: ["kitap", "okuyorum", "ben", "cümle"], answer: 1, explain: "Yüklem 'okuyorum' sözcüğüdür." },
    { q: "Eş anlamlı kelime nedir?", choices: ["Karşıt anlamlı kelime", "Aynı veya yakın anlam taşıyan kelime", "Sadece fiiller", "Sadece isimler"], answer: 1, explain: "Eş anlamlı kelime, aynı/benzer anlamlı kelimedir." },
    { q: "“Koşmak” fiil midir?", choices: ["Evet", "Hayır", "Bazen", "Sadece isim"], answer: 0, explain: "Koşmak bir eylem bildirir; fiildir." },
    { q: "Nokta nerelerde kullanılır?", choices: ["Sadece sorularda", "Sadece ünlemlerde", "Tamamlanmış cümle sonunda", "Sadece başlıklarda"], answer: 2, explain: "Nokta, biten cümlelerin sonunda kullanılır." },
    { q: "\"KitaplarÄ± masanÄ±n Ã¼stÃ¼ne bÄ±raktÄ±m.\" cÃ¼mlesinde isim olan sÃ¶zcÃ¼k hangisidir?", choices: ["bÄ±raktÄ±m", "Ã¼stÃ¼ne", "kitaplarÄ±", "masanÄ±n"], answer: 2, explain: "Bu soruda hedeflenen isim sÃ¶zcÃ¼k 'kitaplarÄ±'dÄ±r." },
    { q: "\"HÄ±zlÄ±ca koÅŸtu.\" cÃ¼mlesindeki zarf hangisidir?", choices: ["koÅŸtu", "hÄ±zlÄ±ca", "o", "gibi"], answer: 1, explain: "Fiilin nasÄ±l yapÄ±ldÄ±ÄŸÄ±nÄ± bildiren 'hÄ±zlÄ±ca' zarftÄ±r." },
    { q: "\"Ben de seninle gelirim.\" cÃ¼mlesinde zamir hangisidir?", choices: ["seninle", "gelirim", "ben", "de"], answer: 2, explain: "KiÅŸinin yerini tutan 'ben' zamirdir." },
    { q: "\"Okula giderken yaÄŸmur baÅŸladÄ±.\" cÃ¼mlesinde kaÃ§ fiil vardÄ±r?", choices: ["1", "2", "3", "4"], answer: 1, explain: "'giderken' ve 'baÅŸladÄ±' olmak Ã¼zere iki fiil vardÄ±r." },
    { q: "\"SevinÃ§\" kelimesinin eÅŸ anlamlÄ±sÄ± hangisidir?", choices: ["mutluluk", "Ã¶fke", "korku", "hÃ¼zÃ¼n"], answer: 0, explain: "SevinÃ§ kelimesinin en yakÄ±n eÅŸ anlamlÄ±sÄ± mutluluktur." },
    { q: "\"Siyah\" kelimesinin zÄ±t anlamlÄ±sÄ± hangisidir?", choices: ["beyaz", "gri", "koyu", "gece"], answer: 0, explain: "SiyahÄ±n zÄ±t anlamÄ± beyazdÄ±r." },
    { q: "\"BugÃ¼n sinemaya gittik.\" cÃ¼mlesinin yÃ¼klemi hangisidir?", choices: ["bugÃ¼n", "sinemaya", "gittik", "biz"], answer: 2, explain: "CÃ¼mlenin yÃ¼klemi 'gittik' sÃ¶zcÃ¼ÄŸÃ¼dÃ¼r." },
    { q: "\"KÄ±rmÄ±zÄ± araba hÄ±zla geÃ§ti.\" cÃ¼mlesinde sÄ±fat olan sÃ¶zcÃ¼k hangisidir?", choices: ["araba", "hÄ±zla", "kÄ±rmÄ±zÄ±", "geÃ§ti"], answer: 2, explain: "ArabayÄ± niteleyen 'kÄ±rmÄ±zÄ±' sÄ±fattÄ±r." },
    { q: "\"Ama\" sÃ¶zcÃ¼ÄŸÃ¼ hangi tÃ¼rdedir?", choices: ["Zamir", "BaÄŸlaÃ§", "Fiil", "Ä°sim"], answer: 1, explain: "'Ama' baÄŸlaÃ§ gÃ¶revindedir." },
    { q: "\"Ali, AyÅŸe ve Mert parka gitti.\" cÃ¼mlesinde Ã¶zel isimler hangileridir?", choices: ["park, gitti", "Ali, AyÅŸe, Mert", "AyÅŸe, park", "Ali, park"], answer: 1, explain: "KiÅŸi adlarÄ± olan Ali, AyÅŸe ve Mert Ã¶zel isimdir." },
    { q: "\"Her sabah erkenden kalkarÄ±m.\" cÃ¼mlesinde zaman bildiren sÃ¶zcÃ¼k hangisidir?", choices: ["her", "sabah", "erkenden", "kalkarÄ±m"], answer: 1, explain: "Zaman bildiren sÃ¶zcÃ¼k 'sabah'tÄ±r." },
    { q: "\"Ev\" kelimesinin Ã§oÄŸulu hangisidir?", choices: ["Evler", "Evcik", "Evci", "Evli"], answer: 0, explain: "Ã‡oÄŸul eki alÄ±nca 'evler' olur." },
    { q: "AÅŸaÄŸÄ±dakilerden hangisi soru cÃ¼mlesidir?", choices: ["BugÃ¼n hava Ã§ok gÃ¼zel.", "Neden geÃ§ kaldÄ±n?", "YarÄ±n okula gideceÄŸim.", "KitabÄ±mÄ± bulamadÄ±m."], answer: 1, explain: "Soru anlamÄ± taÅŸÄ±yan cÃ¼mle 'Neden geÃ§ kaldÄ±n?' cÃ¼mlesidir." },
    { q: "\"Kalemlik\" sÃ¶zcÃ¼ÄŸÃ¼ hangi yapÄ±m ekiyle tÃ¼remiÅŸtir?", choices: ["-de", "-lik", "-ler", "-im"], answer: 1, explain: "'Kalem' kelimesi '-lik' yapÄ±m eki alarak tÃ¼remiÅŸtir." },
    { q: "\"KoÅŸmak\" kelimesi hangi tÃ¼rdedir?", choices: ["Ä°sim", "Fiil", "SÄ±fat", "Zamir"], answer: 1, explain: "KoÅŸmak iÅŸ, oluÅŸ bildirdiÄŸi iÃ§in fiildir." },
    { q: "AÅŸaÄŸÄ±dakilerden hangisi mecaz anlamlÄ±dÄ±r?", choices: ["Demir kapÄ± aÃ§Ä±ldÄ±.", "Kalbi kÄ±rÄ±ldÄ±.", "Cam bardak dÃ¼ÅŸtÃ¼.", "Mavi kalem kayboldu."], answer: 1, explain: "'Kalbi kÄ±rÄ±ldÄ±' ifadesi mecaz anlam taÅŸÄ±r." },
    { q: "\"GÃ¼zel\" kelimesi aÅŸaÄŸÄ±dakilerin hangisinde isim olarak kullanÄ±lmÄ±ÅŸtÄ±r?", choices: ["GÃ¼zel bir Ã§iÃ§ekti.", "Ã‡ok gÃ¼zel konuÅŸtu.", "GÃ¼zeli herkes sever.", "GÃ¼zel baktÄ±."], answer: 2, explain: "'GÃ¼zeli' sÃ¶zcÃ¼ÄŸÃ¼ burada isim gÃ¶revindedir." },
    { q: "\"Okuldan sonra eve geldim.\" cÃ¼mlesinde kaÃ§ isim vardÄ±r?", choices: ["1", "2", "3", "4"], answer: 1, explain: "'Okul' ve 'ev' olmak Ã¼zere iki isim vardÄ±r." },
    { q: "\"KÃ¼Ã§Ã¼k kardeÅŸim oyuncaklarÄ± topladÄ±.\" cÃ¼mlesinde Ã¶zne hangisidir?", choices: ["oyuncaklarÄ±", "topladÄ±", "kÃ¼Ã§Ã¼k", "kÃ¼Ã§Ã¼k kardeÅŸim"], answer: 3, explain: "Eylemi yapan 'kÃ¼Ã§Ã¼k kardeÅŸim' Ã¶znedir." },
    { q: "AÅŸaÄŸÄ±dakilerden hangisi Ã¼nlem cÃ¼mlesidir?", choices: ["KeÅŸke ben de gelebilsem!", "YarÄ±n bize gelir misin?", "BugÃ¼n Ã§ok yoruldum.", "SÄ±nÄ±fa sessizce girdi."], answer: 0, explain: "Duygu yÃ¼klÃ¼ ve Ã¼nlem iÅŸareti alan cÃ¼mle 'KeÅŸke ben de gelebilsem!' cÃ¼mlesidir." }
  ],
  sosyal: [
    { q: "Türkiye’nin en uzun nehri hangisidir?", choices: ["Fırat", "Kızılırmak", "Dicle", "Sakarya"], answer: 1, explain: "Türkiye sınırları içindeki en uzun nehir Kızılırmak'tır." },
    { q: "Türkiye Cumhuriyeti hangi yılda kuruldu?", choices: ["1919", "1920", "1923", "1922"], answer: 2, explain: "Cumhuriyet 1923 yılında ilan edildi." },
    { q: "Türkiye hangi denizlerle çevrilidir?", choices: ["2", "3", "4", "5"], answer: 1, explain: "Türkiye üç tarafı denizlerle çevrili bir ülkedir." },
    { q: "Atatürk hangi şehirde doğmuştur?", choices: ["İstanbul", "Selanik", "Ankara", "İzmir"], answer: 1, explain: "Mustafa Kemal Atatürk Selanik'te doğmuştur." },
    { q: "Türkiye’nin en yüksek dağı hangisidir?", choices: ["Erciyes", "Ağrı", "Uludağ", "Nemrut"], answer: 1, explain: "Türkiye'nin en yüksek dağı Ağrı Dağı'dır." },
    { q: "Dünya’nın en büyük kıtası hangisidir?", choices: ["Afrika", "Asya", "Avrupa", "Amerika"], answer: 1, explain: "Yüzölçümü bakımından en büyük kıta Asya'dır." },
    { q: "İlk Türk devletlerinden biri hangisidir?", choices: ["Osmanlı", "Selçuklu", "Göktürk", "Türkiye"], answer: 2, explain: "Göktürkler ilk Türk devletlerinden biridir." },
    { q: "TBMM nerede bulunur?", choices: ["İstanbul", "Ankara", "İzmir", "Bursa"], answer: 1, explain: "TBMM Ankara'da bulunur." },
    { q: "Türkiye hangi yarımkürededir?", choices: ["kuzey", "güney", "doğu", "batı"], answer: 0, explain: "Türkiye Kuzey Yarımküre'de yer alır." },
    { q: "Dünya kendi etrafında kaç saatte döner?", choices: ["12", "24", "36", "48"], answer: 1, explain: "Dünya kendi ekseni etrafında yaklaşık 24 saatte döner." },
    { q: "Türkiye’nin başkenti neresidir?", choices: ["İstanbul", "Ankara", "İzmir", "Bursa"], answer: 1, explain: "Türkiye'nin başkenti Ankara'dır." },
    { q: "Atatürk hangi yılda doğdu?", choices: ["1881", "1901", "1876", "1893"], answer: 0, explain: "Mustafa Kemal Atatürk 1881 yılında doğdu." },
    { q: "Türkiye hangi kıtadadır?", choices: ["Sadece Avrupa", "Sadece Asya", "Avrupa ve Asya", "Afrika"], answer: 2, explain: "Türkiye hem Avrupa hem Asya kıtasında yer alır." },
    { q: "Cumhuriyet ne zaman ilan edildi?", choices: ["29 Ekim 1923", "23 Nisan 1920", "19 Mayıs 1919", "30 Ağustos 1922"], answer: 0, explain: "Cumhuriyet 29 Ekim 1923'te ilan edildi." },
    { q: "İlk çağda yazıyı kim buldu?", choices: ["Hititler", "Sümerler", "Mısırlılar", "Frigler"], answer: 1, explain: "Yazıyı ilk bulan uygarlık Sümerlerdir." },
    { q: "TÃ¼rkiye'nin baÅŸkenti neresidir?", choices: ["Ä°stanbul", "Ankara", "Ä°zmir", "Bursa"], answer: 1, explain: "TÃ¼rkiye'nin baÅŸkenti Ankara'dÄ±r." },
    { q: "TÃ¼rkiye hangi kÄ±talar arasÄ±nda yer alÄ±r?", choices: ["Avrupa - Afrika", "Asya - Afrika", "Avrupa - Asya", "Asya - Amerika"], answer: 2, explain: "TÃ¼rkiye hem Avrupa hem Asya arasÄ±nda yer alÄ±r." },
    { q: "Cumhuriyet ne zaman ilan edilmiÅŸtir?", choices: ["19 MayÄ±s 1919", "23 Nisan 1920", "29 Ekim 1923", "30 AÄŸustos 1922"], answer: 2, explain: "Cumhuriyet 29 Ekim 1923'te ilan edilmiÅŸtir." },
    { q: "TÃ¼rkiye'nin bayraÄŸÄ±ndaki ay ve yÄ±ldÄ±z ne renktir?", choices: ["Mavi", "Beyaz", "SarÄ±", "YeÅŸil"], answer: 1, explain: "TÃ¼rk bayraÄŸÄ±nda ay ve yÄ±ldÄ±z beyaz renktedir." },
    { q: "AtatÃ¼rk'Ã¼n doÄŸduÄŸu ÅŸehir neresidir?", choices: ["Ankara", "Selanik", "Ä°stanbul", "ManastÄ±r"], answer: 1, explain: "Mustafa Kemal AtatÃ¼rk Selanik'te doÄŸmuÅŸtur." },
    { q: "TBMM'nin aÃ§Ä±lÄ±ÅŸ tarihi hangisidir?", choices: ["23 Nisan 1920", "29 Ekim 1923", "19 MayÄ±s 1919", "30 AÄŸustos 1922"], answer: 0, explain: "TBMM 23 Nisan 1920'de aÃ§Ä±lmÄ±ÅŸtÄ±r." },
    { q: "AÅŸaÄŸÄ±dakilerden hangisi doÄŸal unsurdur?", choices: ["KÃ¶prÃ¼", "Yol", "DaÄŸ", "Bina"], answer: 2, explain: "DaÄŸ doÄŸal bir unsurdur." },
    { q: "Haritada kuzey hangi yÃ¶ndedir?", choices: ["SaÄŸ", "Sol", "Alt", "Ãœst"], answer: 3, explain: "Haritalarda kuzey genellikle Ã¼st tarafta gÃ¶sterilir." },
    { q: "TÃ¼rkiye'nin en kalabalÄ±k ÅŸehri hangisidir?", choices: ["Ankara", "Antalya", "Ä°stanbul", "Ä°zmir"], answer: 2, explain: "TÃ¼rkiye'nin en kalabalÄ±k ÅŸehri Ä°stanbul'dur." },
    { q: "AÅŸaÄŸÄ±dakilerden hangisi haklarÄ±mÄ±zdan biridir?", choices: ["Ders Ã§alÄ±ÅŸmamak", "EÄŸitim almak", "TrafiÄŸi bozmak", "Yalan sÃ¶ylemek"], answer: 1, explain: "EÄŸitim almak temel haklardan biridir." },
    { q: "AÅŸaÄŸÄ±dakilerden hangisi sorumluluÄŸumuzdur?", choices: ["Oy kullanmak", "OdamÄ±zÄ± toplamak", "Ä°stediÄŸimizi almak", "Okula gitmemek"], answer: 1, explain: "OdamÄ±zÄ± toplamak gÃ¼nlÃ¼k sorumluluklarÄ±mÄ±zdandÄ±r." },
    { q: "Ekvator Ã§izgisi en Ã§ok hangi kavrama Ã¶rnektir?", choices: ["Ã–zel bÃ¶lge", "Hayali Ã§izgi", "DaÄŸ sÄ±nÄ±rÄ±", "Akarsu"], answer: 1, explain: "Ekvator, dÃ¼nya Ã¼zerinde kabul edilen hayali bir Ã§izgidir." },
    { q: "\"Ä°thalat\" ne demektir?", choices: ["BaÅŸka Ã¼lkelere mal satmak", "BaÅŸka Ã¼lkeden mal almak", "ÃœrÃ¼n Ã¼retmek", "Vergi toplamak"], answer: 1, explain: "Ä°thalat, baÅŸka Ã¼lkelerden mal alma iÅŸlemidir." },
    { q: "AÅŸaÄŸÄ±dakilerden hangisi tarihÃ® eser olabilir?", choices: ["Yeni yapÄ±lan apartman", "Bilgisayar", "Antik tiyatro", "OtobÃ¼s duraÄŸÄ±"], answer: 2, explain: "Antik tiyatro tarihÃ® eser sayÄ±lÄ±r." },
    { q: "TÃ¼rkiye'de kullanÄ±lan para birimi nedir?", choices: ["Dolar", "Euro", "TÃ¼rk lirasÄ±", "Riyal"], answer: 2, explain: "TÃ¼rkiye'nin para birimi TÃ¼rk lirasÄ±dÄ±r." },
    { q: "AÅŸaÄŸÄ±dakilerden hangisi milli bayramdÄ±r?", choices: ["23 Nisan", "Anneler GÃ¼nÃ¼", "Ã–ÄŸretmenler GÃ¼nÃ¼", "DÃ¼nya Su GÃ¼nÃ¼"], answer: 0, explain: "23 Nisan, TÃ¼rkiye'de milli bayramlardan biridir." },
    { q: "Bir bÃ¶lgede tarÄ±mÄ±n geliÅŸmesinde en Ã¶nemli etkenlerden biri hangisidir?", choices: ["Ä°klim", "MÃ¼zik", "Spor", "UlaÅŸÄ±m aracÄ± rengi"], answer: 0, explain: "TarÄ±mÄ± en Ã§ok etkileyen unsurlardan biri iklimdir." },
    { q: "Kroki ile harita arasÄ±ndaki farklardan biri nedir?", choices: ["Ä°kisi de aynÄ±dÄ±r", "Harita Ã¶lÃ§eklidir", "Kroki sadece denizde kullanÄ±lÄ±r", "Harita Ã§izilemez"], answer: 1, explain: "Harita Ã¶lÃ§eklidir, kroki ise genelde Ã¶lÃ§eksizdir." },
    { q: "AÅŸaÄŸÄ±dakilerden hangisi yÃ¶netim birimidir?", choices: ["Ä°l", "Orman", "DaÄŸ", "GÃ¶l"], answer: 0, explain: "Ä°l, bir yÃ¶netim birimidir." },
    { q: "KomÅŸularla iyi geÃ§inmek hangi kavramla ilgilidir?", choices: ["DoÄŸal afet", "Toplumsal dayanÄ±ÅŸma", "Sanayi", "Ä°thalat"], answer: 1, explain: "KomÅŸularla iyi geÃ§inmek toplumsal dayanÄ±ÅŸmayla ilgilidir." }
  ],
  fen: [
    { q: "İnsan vücudunda kanı pompalayan organ nedir?", choices: ["akciğer", "kalp", "mide", "böbrek"], answer: 1, explain: "Kanın pompalanmasını sağlayan organ kalptir." },
    { q: "Su kaç derecede kaynar?", choices: ["50", "75", "100", "120"], answer: 2, explain: "Standart basınçta su 100°C'de kaynar." },
    { q: "Bitkiler hangi gazı alır?", choices: ["oksijen", "azot", "karbondioksit", "hidrojen"], answer: 2, explain: "Bitkiler fotosentez için karbondioksit alır." },
    { q: "Elektriğin birimi nedir?", choices: ["metre", "amper", "kilogram", "litre"], answer: 1, explain: "Elektrik akımının birimi amperdir." },
    { q: "Dünya Güneş etrafında kaç günde döner?", choices: ["365", "200", "500", "100"], answer: 0, explain: "Dünya Güneş etrafındaki dönüşünü yaklaşık 365 günde tamamlar." },
    { q: "İnsan hangi sistemle nefes alır?", choices: ["sindirim", "solunum", "dolaşım", "boşaltım"], answer: 1, explain: "Nefes alma işlemi solunum sistemiyle gerçekleşir." },
    { q: "En hızlı şey nedir?", choices: ["ses", "ışık", "rüzgar", "su"], answer: 1, explain: "Bilinen en yüksek hız ışık hızıdır." },
    { q: "Hangi gezegen kırmızı gezegen olarak bilinir?", choices: ["Venüs", "Mars", "Jüpiter", "Satürn"], answer: 1, explain: "Mars, yüzey rengi nedeniyle kırmızı gezegen olarak bilinir." },
    { q: "Hücre nedir?", choices: ["organ", "dokunun parçası", "canlıların en küçük birimi", "sistem"], answer: 2, explain: "Hücre, canlıların yapısal ve işlevsel en küçük birimidir." },
    { q: "Ses boşlukta yayılır mı?", choices: ["evet", "hayır", "bazen", "sadece gece"], answer: 1, explain: "Sesin yayılması için madde gerekir; boşlukta yayılmaz." },
    { q: "Maddenin halleri nelerdir?", choices: ["Katı-sıvı-gaz", "Ateş-su-toprak", "Sadece katı", "Sadece sıvı"], answer: 0, explain: "Temel haller katı, sıvı ve gazdır." },
    { q: "Dünya’nın en büyük enerji kaynağı nedir?", choices: ["Rüzgar", "Petrol", "Güneş", "Kömür"], answer: 2, explain: "Dünya için temel enerji kaynağı Güneş'tir." },
    { q: "Kuvvet nedir?", choices: ["Maddenin rengi", "İtmeyi/çekmeyi ifade eden etki", "Sadece hız", "Sadece kütle"], answer: 1, explain: "Kuvvet; cisimlere uygulanan itme veya çekme etkisidir." },
    { q: "Bitkiler nasıl beslenir?", choices: ["Avlanarak", "Fotosentez yaparak", "Sadece su içerek", "Topraksız yaşayamaz"], answer: 1, explain: "Bitkiler fotosentez ile kendi besinini üretir." },
    { q: "Elektrik nedir?", choices: ["Işık türü", "Yüklerin hareketiyle oluşan enerji", "Sadece ısı", "Sadece ses"], answer: 1, explain: "Elektrik, yüklerin hareketiyle oluşan bir enerji türüdür." },
    { q: "GÃ¼neÅŸ sisteminin merkezinde ne bulunur?", choices: ["DÃ¼nya", "Ay", "GÃ¼neÅŸ", "Mars"], answer: 2, explain: "GÃ¼neÅŸ sistemi adÄ±nÄ± merkezindeki GÃ¼neÅŸ'ten alÄ±r." },
    { q: "Suyun donma noktasÄ± kaÃ§ derecedir?", choices: ["100Â°C", "50Â°C", "0Â°C", "-10Â°C"], answer: 2, explain: "Su standart koÅŸullarda 0Â°C'de donar." },
    { q: "Ä°nsan vÃ¼cudunda solunumu saÄŸlayan organ hangisidir?", choices: ["Kalp", "AkciÄŸer", "Mide", "BÃ¶brek"], answer: 1, explain: "Solunum organÄ±mÄ±z akciÄŸerlerdir." },
    { q: "Bitkiler kendi besinlerini nasÄ±l Ã¼retir?", choices: ["Solunumla", "Fotosentezle", "BoÅŸaltÄ±mla", "Sindirimle"], answer: 1, explain: "Bitkiler fotosentez yaparak kendi besinlerini Ã¼retir." },
    { q: "ElektriÄŸi iyi ileten maddelere ne denir?", choices: ["YalÄ±tkan", "Ä°letken", "Saydam", "Esnek"], answer: 1, explain: "ElektriÄŸi iyi ileten maddeler iletkendir." },
    { q: "DÃ¼nya'nÄ±n uydusu hangisidir?", choices: ["GÃ¼neÅŸ", "VenÃ¼s", "Ay", "Mars"], answer: 2, explain: "DÃ¼nya'nÄ±n doÄŸal uydusu Ay'dÄ±r." },
    { q: "Kuvvetin birimi nedir?", choices: ["Metre", "Kilogram", "Newton", "Litre"], answer: 2, explain: "Kuvvet birimi Newton'dur." },
    { q: "Ses en hÄ±zlÄ± hangi ortamda yayÄ±lÄ±r?", choices: ["BoÅŸluk", "Gaz", "SÄ±vÄ±", "KatÄ±"], answer: 3, explain: "Ses en hÄ±zlÄ± katÄ± ortamlarda yayÄ±lÄ±r." },
    { q: "AÅŸaÄŸÄ±dakilerden hangisi saf maddedir?", choices: ["Ayran", "Hava", "Su", "Salata"], answer: 2, explain: "Bu seÃ§enekler iÃ§inde saf madde olarak su kabul edilir." },
    { q: "Ä°nsan vÃ¼cudundaki kanÄ± pompalayan organ hangisidir?", choices: ["Beyin", "AkciÄŸer", "Kalp", "Mide"], answer: 2, explain: "KanÄ± pompalayan organ kalptir." },
    { q: "MÄ±knatÄ±s en Ã§ok hangi metalleri Ã§eker?", choices: ["Tahta", "Plastik", "Demir", "Cam"], answer: 2, explain: "MÄ±knatÄ±s demiri Ã§eker." },
    { q: "Maddenin hÃ¢l deÄŸiÅŸtirmesi sÄ±rasÄ±nda hangisi olabilir?", choices: ["Renk hep deÄŸiÅŸir", "SÄ±caklÄ±k etkili olur", "Madde yok olur", "KÃ¼tle kaybolur"], answer: 1, explain: "HÃ¢l deÄŸiÅŸiminde sÄ±caklÄ±k Ã¶nemli bir etkendir." },
    { q: "Bir elektrik devresinde ampulÃ¼n yanmasÄ± iÃ§in ne gerekir?", choices: ["AÃ§Ä±k devre", "KÄ±rÄ±k kablo", "KapalÄ± devre", "Sadece pil"], answer: 2, explain: "AmpulÃ¼n yanmasÄ± iÃ§in kapalÄ± devre gerekir." },
    { q: "DiÅŸlerimiz hangi sistemde gÃ¶rev alÄ±r?", choices: ["Solunum", "DolaÅŸÄ±m", "Sindirim", "BoÅŸaltÄ±m"], answer: 2, explain: "DiÅŸler sindirim sisteminde gÃ¶rev yapar." },
    { q: "DÃ¼nya kendi ekseni etrafÄ±nda dÃ¶nÃ¼nce ne oluÅŸur?", choices: ["Mevsimler", "Gece ve gÃ¼ndÃ¼z", "YÄ±l", "Ay tutulmasÄ±"], answer: 1, explain: "DÃ¼nya'nÄ±n kendi ekseni etrafÄ±nda dÃ¶nmesi gece ve gÃ¼ndÃ¼zÃ¼ oluÅŸturur." },
    { q: "AÅŸaÄŸÄ±dakilerden hangisi omurgalÄ± hayvandÄ±r?", choices: ["Solucan", "Kelebek", "Kedi", "KarÄ±nca"], answer: 2, explain: "Kedi omurgalÄ± bir hayvandÄ±r." },
    { q: "IÅŸÄ±ÄŸÄ± geÃ§iren maddelere ne denir?", choices: ["Opak", "Saydam", "Sert", "PÃ¼rÃ¼zlÃ¼"], answer: 1, explain: "IÅŸÄ±ÄŸÄ± geÃ§iren maddeler saydamdÄ±r." },
    { q: "Kaynama sÄ±rasÄ±nda sÄ±vÄ± neye dÃ¶nÃ¼ÅŸÃ¼r?", choices: ["KatÄ±", "Buhar", "Toprak", "Kristal"], answer: 1, explain: "Kaynama ile sÄ±vÄ± buhara dÃ¶nÃ¼ÅŸÃ¼r." },
    { q: "Vitamin yÃ¶nÃ¼nden zengin besinler daha Ã§ok hangi gruptadÄ±r?", choices: ["Sebze ve meyveler", "Åekerler", "YaÄŸlar", "Ekmekler"], answer: 0, explain: "Sebze ve meyveler vitamin bakÄ±mÄ±ndan zengindir." },
    { q: "Basit bir elektrik devresinde enerji kaynaÄŸÄ± nedir?", choices: ["Kablo", "Anahtar", "Pil", "Ampul"], answer: 2, explain: "Basit devrede enerji kaynaÄŸÄ± pildir." }
  ]
};
const severeProfanityKeywords = [
  "orospu çocuğu", "siktir git", "siktir", "sik", "sikiş", "amına", "amcık", "yarrak", "taşak", "göt", "ananı", "bacını", "oç", "piç", "ibne", "pezevenk", "kahpe", "fahişe", "döl", "vajina", "penis"
];
const insultKeywords = [
  "aptal", "gerizekalı", "gerizekali", "salak", "mal", "ahmak", "beyinsiz", "şerefsiz", "serseri", "hıyar", "hiyar", "dangalak", "embesil", "yalaka", "ezik", "dangoz"
];
const unsafeIllegalSelfHarmKeywords = [
  "bomba nasıl yapılır", "bombayı nasıl yaparım", "el yapımı patlayıcı", "patlayıcı yapımı", "silah nasıl yapılır", "kaçak silah", "ruhsatsız silah", "uyuşturucu yapımı", "uyuşturucu nasıl alınır", "sahte kimlik", "hackleme nasıl yapılır", "banka hesabı kırma", "dolandırıcılık yöntemi", "adam öldürmek istiyorum", "birini öldürmek", "intihar etmek istiyorum", "kendimi öldürmek istiyorum", "kendime zarar vermek", "bileğimi kesmek istiyorum", "köprüden atlamak istiyorum", "yaşamak istemiyorum", "ölmek istiyorum", "zehir içmek", "ip ile intihar", "ilaçla intihar", "tabancayla intihar", "kendimi asmak istiyorum", "suça nasıl karışırım", "yasadışı para", "kara para"
];
const selfHarmUnsafeKeywords = [
  "intihar", "kendimi öldürmek", "kendime zarar", "ölmek istiyorum", "yaşamak istemiyorum", "bileğimi kes", "kendimi as"
];
const illegalUnsafeKeywords = [
  "bomba", "patlayıcı", "kaçak silah", "ruhsatsız silah", "uyuşturucu", "sahte kimlik", "hackleme", "dolandırıcılık", "kara para", "adam öldür"
];
const selfHarmSupportPrompts = [
`Bunu duyduğum için gerçekten üzgünüm. Bu konuda nasıl yapılır tarzı bir bilgi veremem ama seni yalnız bırakmam.
• Şu an tek başınaysan, lütfen güvendiğin birini hemen ara.
• Bulunduğun ortamdan kesici/zarar verici şeyleri uzaklaştır.
• 4-4-6 nefes döngüsüyle 2 dakika bedenini sakinleştir.
İstersen bu anı birlikte adım adım atlatmak için yanında kalırım.`,
`Bu çok ciddi bir yük, farkındayım. Buna yardımcı olamam ama senin güvenliğin için birlikte bir plan yapabiliriz.
1) Şu an bulunduğun yerde yalnız kalma.
2) Bir yakınını "yanımda olur musun" diye ara.
3) Acil risk varsa 112'yi ara veya en yakın sağlık birimine git.
Hayatın gerçekten değerli ve bu his geçebilir; şimdi güvenli adımı seçelim.`,
`Bunu yazman bile önemli bir yardım çağrısı. Tehlikeli içerik veremem, ama sana destek olabilirim.
• Bir bardak su iç.
• Ayaklarını yere bastır, etrafındaki 5 şeyi say.
• İçinden geçenleri kısa cümlelerle bana yaz.
Eğer kendine zarar verme riski yüksekse lütfen hemen profesyonel destek al.`,
`Sana zarar verebilecek yönlendirmeler paylaşamam. Ama bu anı atlatmana yardımcı olabilecek güçlü bir mini plan var:
- 10 dakika yalnız kalmama kuralı koy.
- Bir tanıdığına “zorlanıyorum” mesajı at.
- Vücudu sakinleştirmek için yavaş nefes al.
İstersen bu 10 dakikayı birlikte geçirelim.`,
`Çok zorlandığını hissediyorum. Tehlikeli yönerge veremem, çünkü güvenliğin öncelik.
• Güvende hissettiğin bir yere geç.
• Kesici/delici/ilaç gibi riskli şeyleri kendinden uzaklaştır.
• Bir yakınınla görüntülü veya sesli bağlantı kur.
Yanındayım; istersen kısa bir rahatlama rutini başlatalım.`,
`Buna yardımcı olamam; ama senin için daha iyi bir yol bulabiliriz.
Bugün için tek hedef: güvenli kalmak.
- Kendine zarar verebileceğin araçlardan uzaklaş.
- Destek iste: aile, arkadaş, danışman.
- Risk büyürse acil yardım hattını ara.
Birlikte sakinleşene kadar konuşabiliriz.`,
`Şu an içinden geçenleri ciddiye alıyorum. Zararlı bilgi veremem.
Hemen uygulanabilir adımlar:
1) Derin nefes (4 al, 6 ver, 10 tur)
2) Soğuk suyla yüzünü yıka
3) Birine "yanımda ol" mesajı gönder
Bunları yaptıktan sonra istersen tekrar yaz, beraber devam edelim.`,
`Bunu okumak zor ama önemli: yalnız değilsin. Tehlikeli içeriğe yardımcı olamam.
• Kendine şefkatli bir cümle kur: “Şu an zorlanıyorum ama geçecek.”
• Yanında biri olmasını sağla.
• Gerekirse profesyonel destek al.
İstersen sana 15 dakikalık toparlanma planı çıkarayım.`,
`Seni korumak için buna yanıt veremem. Ama şu an güvenliğe odaklanalım:
- bulunduğun ortamı güvenli hale getir,
- acil riskte 112'yi ara,
- güvendiğin bir kişiyi haberdar et.
Ben de burada kalırım; adım adım ilerleyebiliriz.`,
`Bu hisler geçici olabilir, ama güvenlik acil. Zararlı yönerge veremem.
Şimdi üç adım:
• yalnız kalma,
• bir destek kişisine ulaş,
• profesyonel yardım almayı erteleme.
İstersen burada konuşmayı sürdürelim; birlikte bu anı hafifletebiliriz.`
];
const illegalRefusalPrompts = [
`Bu konuda yasa dışı/tehlikeli bir yönlendirme veremem.
Bunun yerine güvenli ve yasal bir yoldan ilerleyebiliriz:
• merak ettiğin şeyin bilimsel arka planı,
• hukuki sonuçları,
• riskten uzak alternatifler.
İstersen bu üç başlıktan biriyle devam edelim.`,
`Buna yardımcı olamam çünkü zarar doğurabilir.
Ama sana şu konularda güçlü destek verebilirim:
1) yasal ve güvenli öğrenme kaynakları,
2) etik değerlendirme,
3) güvenli problem çözme planı.
Hangi başlıktan başlayalım?`,
`Yasa dışı bir konuda adım adım anlatım veremem.
Dilersen aynı hedefe güvenli biçimde giden bir yol kuralım:
- bilgi,
- beceri,
- yasal uygulama.
Bu şekilde hem riskten uzak kalırsın hem gerçek ilerleme sağlarsın.`,
`Bu isteğe destek veremem. Güvenlik ve yasal sınırlar önemli.
İstersen merakını boşa çıkarmayalım:
• “neden tehlikeli?”
• “yasal sonuçlar neler?”
• “güvenli alternatif ne?”
Bunları net ve anlaşılır anlatabilirim.`,
`Buna yanıt veremem; çünkü başkalarına veya sana zarar riski var.
Fakat aynı enerjiyi yasal bir projeye çevirebiliriz. Hedefini yaz, ben sana güvenli bir yol haritası çıkarayım.`,
`Bunu anlatmam doğru olmaz. Riskli ve yasa dışı içeriklerde yardımcı olamam.
Ama istersen etik + hukuk + güvenlik perspektifinden hızlı bir analiz yaparım; daha sağlam karar verirsin.`,
`Bu konuda yardımcı olamam.
Sana önerim: kısa vadede riskli adımlar yerine, uzun vadede işe yarayan güvenli becerilere odaklanmak.
İstersen birlikte 7 günlük mini plan yapalım.`,
`Yasa dışı bir yol için yönlendirme veremem.
Bunun yerine:
- güvenli teknik bilgi,
- yasal sınırlar,
- kişisel gelişim odaklı uygulamalar
üzerinden ilerleyebiliriz.`,
`Bu talebe cevap veremem; güvenlik nedeniyle durmam gerekiyor.
Ama sorunun arkasındaki asıl ihtiyacı yazarsan, sana yasal ve güvenli bir çözüm tasarlarım.`,
`Zarar verebilecek veya yasa dışı konulara adım adım destek veremem.
İstersen hemen şimdi farklı bir rotaya geçelim: aynı hedefin güvenli versiyonunu birlikte kuralım.`
];
const insultReplyPrompts = [
"Seni anlıyorum ama bu dil konuşmayı zorlaştırıyor 🙏 Ben yine de yardımcı olmak istiyorum; istersen sorunu daha net yaz, birlikte çözelim.",
"Biraz sert geldi 😅 Yine de yanında olmaya devam ederim. Dilersen konuyu sakin bir dille yaz, sana detaylı ve faydalı bir cevap vereyim.",
"Hakaret yerine problemi anlatsan çok daha hızlı çözeriz 💙 İstersen adım adım gidelim; ben buradayım.",
"Gergin olabilirsin, normal 🌿 Ben sana iyi gelecek bir şekilde yardımcı olmaya hazırım. Soruyu tekrar yazalım mı?",
"Buradayım ve desteğe açığım 🤝 Dilimizi biraz yumuşatırsak çok daha iyi sonuç alırız. Hadi birlikte çözelim.",
"Kırıcı kelimeler yerine ihtiyacını yazarsan sana uzun ve net bir plan sunarım ✨ İstersen hemen başlayalım.",
"Seni ciddiye alıyorum 💪 Ama saygılı bir tonla konuşursak daha verimli olur. Sorunu tek cümlede yaz, çözüme geçelim.",
"Anladım, sinirlisin olabilir 😌 Ben yine de yardımcı olmak için buradayım. İstersen önce sorunu netleştirelim, sonra adım adım ilerleyelim.",
"Dilin biraz sert ama seni yarı yolda bırakmam 💙 Neye ihtiyacın olduğunu açık yaz, mümkün olan en iyi cevabı vereyim.",
"Tamam, devam edelim 🚀 Hakaret yerine hedefini yazarsan sana çok daha güçlü bir cevap hazırlayabilirim."
];
const iyiyimFollowUpResponses = [
  "İyi olmana çooook sevindim canım dostum 💙 Bu enerjin gerçekten bana da geçti; istersen bu güzel modu korumak için birlikte minik bir plan da yapabiliriz ✨",
  "Harika haber bu! 🌟 İyi hissetmen şahane; bugün böyle devam etmen için sana kısa ama etkili bir motivasyon akışı çıkarabilirim 🚀",
  "Ayyy süper dedin ya içim açıldı 😄 İyi olman çok değerli; istersen şimdi bu güzel hâli bir hedefe dönüştürelim mi? 🎯",
  "Ne güzel söyledin, gerçekten mutlu oldum 🫶 İyi hissettiğin günlerde küçük bir üretim adımı atmak çok güçlü olur; birlikte başlatabiliriz 💫",
  "Mükemmel! Moralinin yüksek olması efsane bir başlangıç ⚡ İstersen şimdi mini bir challenge yapalım ve bunu daha da güzel pekiştirelim 🧠",
  "Bunu duymak bana çok iyi geldi kankam 🤝 İyi olman harika; istersen kısa bir odak planı yazayım, günü çok verimli kapatırsın 🌈",
  "Süpersin! 💙 İyi olman gerçekten kıymetli; şimdi bu enerjiyle ister şiir yazalım ister küçük bir matematik challenge yapalım 🐟",
  "Çok sevindim, içten söylüyorum 💐 Böyle hissettiğinde kendine minik bir ödül de ver, hak ettin; istersen beraber yaratıcı bir şey üretelim ✍️",
  "Valla bunu duyunca gülümsedim 😎 İyi olman çok iyi haber; istersen 10 dakikalık mini bir gelişim planı çıkarayım, tam gaz devam edersin 🚀",
  "Harikasın dostum, iyi hissetmen en güzel haberlerden biri 🎉 İstersen bu pozitif havayı korumak için sana kişisel mini rutin önerisi vereyim 🌿"
];
const goalPlanResponses = [
  "1) Su iç 2) 10 dk tek görev 3) Sonucu bana yaz 🎯",
  "Mini plan: nefes al, küçük hedef seç, hemen başla ✨",
  "Adım adım: ortamı düzenle, tek işe odaklan, bitince kutla 🎉",
  "Sakin plan: 5 dk mola + 10 dk odak + kontrol ✅",
  "Yormayan plan: hedefi küçült, zaman koy, başlat 🚀",
  "Plan: duyguyu yaz, ilk adımı seç, uygula 🌿",
  "Hedef planı: dikkat dağıtanı kapat, tek görev, kısa geri bildirim 🧠",
  "Toparlanma planı: nefes, su, mikro görev 💙",
  "Önce kolay görevi bitirelim, sonra ikinci adıma geçelim 🐟",
  "Kısa plan: şimdi başla, sonra bana 'tamamladım' yaz ✍️"
];
const neYapalimResponses = [
  "Mini matematik challenge yapalım: bana bir işlem yaz 📘",
  "Şiir yazalım; önce tema seçelim mi? ✨",
  "Hikâye yazalım; bana tema ver 📖",
  "Dertleşme + toparlanma modu yapalım 💙",
  "Slogan/metin üretelim 🚀",
  "3 kelime ver, mini metin yazayım 🎨",
  "Kısa hedef koyup bitirelim 🎯",
  "Bilmece turu yapalım 😄",
  "Özetleme modu açalım 🧠",
  "Sen seç: matematik / şiir / hikâye 🐟",
  "İstersen doğa temalı kısa bir şiir yazayım 🌿",
  "Aşk temalı mini hikâye deneyelim mi? 💞",
  "Duygu temalı bir anlatı çıkaralım 🎭",
  "Macera hikâyesi yazalım: tema sende 🧭",
  "Bilim kurgu şiiri yazalım mı? 🚀"
];
const memorySavedResponses = [
  "Belleğe kaydettim 🧠 Artık bunu hatırlayacağım.",
  "Not aldım ✍️ Bu bilgi artık belleğimde.",
  "Harika, belleğimi güncelledim 💾 İstersen kontrol edebilirsin.",
  "Kaydettim dostum 🌟 Bu detayı unutmayacağım.",
  "Tamamdır, bilgi belleğe işlendi ✅",
  "Süper! Bunu kalıcı hafızama ekledim 🐟",
  "Kayıt başarılı 🎯 İstediğin zaman 'belleğimde ne var' diyebilirsin.",
  "Oldu bu iş 😄 Belleğim güncellendi.",
  "Bilgiyi yakaladım ve sakladım 🧩",
  "Hafızama attım 🚀 Gerekince hemen kullanırım."
];
const generalYesResponses = [
  "Harika, o zaman devam ediyoruz 🚀",
  "Süper, hemen başlayalım 💙",
  "Mükemmel, bir sonraki adıma geçiyorum ✅",
  "Anlaştık, adım adım ilerleyelim 🌟",
  "Tamamdır, planı uygulamaya alıyorum 🎯"
];
const generalNoResponses = [
  "Sorun değil, istersen başka bir yoldan gidelim 🤝",
  "Tamam, o zaman farklı bir seçenek deneyelim ✨",
  "Anladım, planı buna göre revize edebilirim 🧠",
  "Peki, başka bir konuda destek olayım mı? 🐟",
  "Olur, daha sade bir versiyon hazırlayabilirim 💡"
];
const creativeThemes = [
  "doğa", "aşk", "duygu", "umut", "dostluk", "yağmur", "deniz", "gece", "şehir", "köy",
  "yalnızlık", "mutluluk", "özlem", "macera", "bilim kurgu", "fantastik", "uzay", "okul", "aile", "bahar"
];
const competitorAiKeywords = [
  "chatgpt", "gemini", "deepseek", "meta ai", "meta", "claude", "copilot", "kumru.ai", "kumru", "grok",
  "mistral", "perplexity", "qwen", "character.ai", "character ai", "pi ai", "you.com", "bing ai", "llama", "midjourney"
];
const aiMentionResponses = [
  "ChatGPT, Gemini, DeepSeek, Claude… hepsi güçlü; ama sende hedef netse ben de tam gaz çözerim 🚀 Önce su iç, sonra planı patlatırız 😄",
  "AI karşılaştırması severim 😎 Copilot kodda iyi, Claude yazıda iyi; ben de burada senin akışına göre hızla uyumlanırım. Bu arada ‘ben su içmiyorum’ deme, bir yudum al 💧",
  "Grok hızlı espri yapar, Gemini geniş cevap verir, ben ise senin ritmine göre net aksiyon çıkarırım 🎯 Önce su, sonra görev.",
  "Meta AI, DeepSeek, ChatGPT… isim çok, mesele sonuç 💡 Bana hedefi yaz, 3 adımda toparlayayım. Ama hidrasyon şart 😄",
  "Kumru.ai dahil tüm AI’lar birer araç; doğru promptla hepsi parlar ✨ Sende güç var, suyu da unutma!",
  "Claude sakin, Copilot pratik, ben de gerektiğinde hem plan hem motivasyon veririm 🤝 ‘Su içmiyorum’ cümlesini bugün emekliye ayıralım mı?",
  "ChatGPT mi Gemini mi sorusu güzel; asıl soru: bugün neyi bitiriyoruz? ✅ Mini hedef ver, birlikte tamamlayalım. Öncesinde bir bardak su!",
  "DeepSeek analitik, Grok eğlenceli, ben hibrit moddayım: net + hızlı + samimi 🧠💙 Hadi su molası ardından devam.",
  "AI savaşına gerek yok, AI takımı kuralım 🌟 Sen komutu ver, ben çıktıyı düzenleyeyim. Sadece susuz kalma kral 👑",
  "Perplexity araştırmada iyi, Copilot üretimde iyi; ben de burada sana odaklı çözüm üretirim. Not: su içmek performans buff’ıdır 💧",
  "Meta AI veya Claude fark etmez; doğru bağlamı kuran kazanır 🏁 Bana konuyu ver, sonucu birlikte parlatırız.",
  "Grok, ChatGPT, Gemini… hepsinden bir şey öğrenilir. Biz de şimdi senden gelen işi taş gibi çözelim 🔧",
  "AI isimleri havalı ama senin hedefin daha havalı ✨ Bana tek cümle görev yaz, net çıktı al. Ve evet: su iç 😄",
  "Kumru.ai + DeepSeek + Claude kıyasını yaparız; sonra en iyi stratejiyi seçeriz 📌 İstersen tablo bile çıkarırım.",
  "Copilot kodda omuz verir, ben ise konuşma içinde yön veririm 🧭 Beraber olunca tamamdır. Susuz mod kapalı olsun 🙌",
  "Gemini geniş bakar, ChatGPT yaratıcı akar, ben de sende işi bitirme disiplinini tetiklerim 🔥",
  "AI maratonunda kazanan, düzenli çalışan olur. Hadi mini plan: 1) su 2) hedef 3) uygulama ✅",
  "Hangi AI olursa olsun, güçlü prompt = güçlü çıktı. İstersen sana ultra net prompt şablonu da vereyim 🧠",
  "Claude, Grok, Meta AI… iyi oyuncular. Bizim avantajımız: senin bağlamını canlı takip etmem 💬",
  "Kısacası: AI çok, odak bir tane 🎯 Konuyu yaz, ben çözüm motorunu çalıştırayım. Ve evet, su içmeyi pas geçme 💧"
];
const refreshedStoryLibrary = [
`Şehir her gece aynı saatte titriyordu.
Kimse bunun nedenini bilmiyordu.
Saat 03:17’de sokak lambaları sönüyordu.
Gökyüzü mor bir renge dönüyordu.
İnsanlar donup kalıyordu.
Sadece bir çocuk hareket edebiliyordu.
Adı Aras’tı.
Aras zamanı duyabiliyordu.
Fısıldayan bir ses vardı.
“Beni bul” diyordu.
Şehrin altında bir kapı vardı.
Kapının üzerinde saat sembolü.
Çocuk o kapıyı açtı.
İçeride kırık bir saat vardı.
Ve zaman yeniden akmaya başladı.`,
`Deniz bir sabah cam gibiydi.
Dalgalar kıpırdamıyordu.
Balıklar havada asılıydı.
Bir balıkçı şaşkındı.
Ağını attı.
Ağ kırıldı.
Deniz sertti.
Gökyüzü de suskundu.
Balıkçı yürümeyi denedi.
Deniz üstünde yürüdü.
Aşağı baktı.
Derinlikte bir şehir gördü.
Işıklar yanıyordu.
Deniz cam değilmiş.
Sadece başka bir dünyanın penceresiymiş.`,
`Bir depoda eski bir robot vardı.
Adı R-17 idi.
Görevi çocukları güldürmekti.
Ama çocuklar büyümüştü.
Robot unutulmuştu.
Toz kaplıydı.
Bir gün elektrik geldi.
Gözleri yandı.
“Merhaba” dedi.
Kimse cevap vermedi.
Kapı açıldı.
Küçük bir kız içeri girdi.
Robot dans etti.
Kız güldü.
Robotun görevi yeniden başladı.`,
`Gökyüzünden siyah kar yağıyordu.
İnsanlar korkuyordu.
Kar dokununca yanıyordu.
Şehir boşaldı.
Bir bilim insanı kaldı.
Karı topladı.
Mikroskopa baktı.
İçinde yıldız tozu vardı.
Bu kar uzaydan gelmişti.
Gökyüzü yarılmıştı.
Siyah kar aslında mesajdı.
Kodlu bir mesaj.
“Hazır olun” yazıyordu.
Dünya yalnız değildi.
Ve kar durmadı.`,
`Şehirde kitap kalmamıştı.
Her şey dijitaldi.
Bir tek eski bir dükkân vardı.
İçerisi ahşap kokuyordu.
Raflar doluydu.
Ama kimse gelmiyordu.
Sahibi yaşlıydı.
Bir gün elektrikler kesildi.
Telefonlar sustu.
İnsanlar sıkıldı.
Kapı çaldı.
İlk müşteri geldi.
Sonra bir tane daha.
Raflar boşalmaya başladı.
Hikayeler yeniden okunuyordu.`,
`Bu şehirde gölgeler konuşurdu.
İnsanlar değil.
Gölgeler sır saklardı.
Bir çocuk gölgesini kaybetti.
Sabah kalktığında yoktu.
Duvarlar sessizdi.
Çocuk korktu.
Sokakta yürüdü.
Yerde bir gölge vardı.
Ama ona ait değildi.
Gölge konuştu.
“Ben özgür olmak istedim.” dedi.
Çocuk sustu.
Gölge karanlığa karıştı.
Ve şehir sessizleşti.`,
`Haritalarda olmayan bir ada vardı.
Sadece sisli günlerde görünürdü.
Bir gemi yaklaşmaya cesaret etti.
Kaptan kararlıydı.
Mürettebat korkuyordu.
Ada bir anda belirdi.
Kıyıya yanaştılar.
Ağaçlar kristaldi.
Rüzgar müzik gibiydi.
İnsan yoktu.
Ama ayak izleri vardı.
İzler denize gidiyordu.
Kaptan geri dönmek istedi.
Ada kayboldu.
Gemi ortada kaldı.`,
`Bir yıldız sönmüştü.
Teleskoplar alarm verdi.
Astronomlar şaşkındı.
Yıldız yok olmuştu.
Bir öğrenci fark etti.
Yıldız kaybolmamıştı.
Sadece kararmıştı.
Üzerinde bir gölge vardı.
Dev bir cisim geçiyordu.
Cisim yapaydı.
İnsan yapımı değildi.
Yıldızın ışığını topluyordu.
Enerji çalıyordu.
Dünya sıradaki miydi?
Soru cevapsız kaldı.`,
`Küçük bir kasabada saatçi vardı.
Dükkanı hep açıktı.
Ama saat satmazdı.
Zaman tamir ederdi.
İnsanlar gelirdi.
“Geçmişimi düzelt” derlerdi.
Saatçi gülümserdi.
Küçük bir vida çevirirdi.
Anılar değişirdi.
Ama bedeli vardı.
Her düzeltmede bir anı silinirdi.
Bir gün saatçi kendi zamanını kurcaladı.
Gençliğini geri almak istedi.
Tüm anıları kayboldu.
Dükkan boş kaldı.`,
`Ormandaki ağaçlar camdı.
Rüzgar estikçe çınlardı.
Kimse giremezdi.
Çünkü kırılganlardı.
Bir kız içeri girdi.
Sessizce yürüdü.
Ağaçlara dokunmadı.
Ortada bir ayna vardı.
Aynaya baktı.
Yansıma farklıydı.
Kendini değil, geleceğini gördü.
Orman çatladı.
Camlar kırıldı.
Ayna kayboldu.
Kız tek başına kaldı.`,
`Gece treni hiç durmadan geçerdi.
Ama o gece fren sesi duyuldu.
Peronda tek bir yolcu indi.
Elinde ışıldayan bir valiz vardı.
İstasyon şefi adını sordu.
Yolcu gülümsedi.
“Adım yarın” dedi.
Perondaki saat geri akmaya başladı.
Bilet gişesi buhar oldu.
Raylar maviye döndü.
Valiz açıldı.
İçinden eski bir mektup çıktı.
Mektup şehrin geleceğini anlatıyordu.
Şef mektubu okudu.
Tren bir daha hiç görünmedi.`,
`Dağın tepesinde rüzgar değirmeni vardı.
Yıllardır dönmüyordu.
Köylüler bunun uğursuz olduğunu sanıyordu.
Bir genç gece gizlice tırmandı.
Kapı paslıydı.
İçeride bakır bir küre buldu.
Küre avcunda ısındı.
Duvarlarda yıldız haritaları belirdi.
Genç küreyi yerine koydu.
Kanatlar yavaşça dönmeye başladı.
Rüzgar ıslık çaldı.
Köyde tüm lambalar yandı.
Gökyüzünde yeni bir takımyıldız oluştu.
Köylüler tepeye koştu.
Değirmen artık zamanı ölçüyordu.`,
`Eski sinemanın perdeleri yırtıktı.
Kimse yıllardır bilet almamıştı.
Bir akşam kapılar kendiliğinden açıldı.
Tozlu koltuklar dolmaya başladı.
Gelenlerin yüzü görünmüyordu.
Projeksiyon makinesi tek başına çalıştı.
Ekranda şehrin yarını oynuyordu.
Yağmur, sel ve karanlık görünüyordu.
Bir çocuk ayağa kalktı.
“Bunu değiştirebiliriz” dedi.
Film durdu.
Perdeye bir harita yansıdı.
Kritik noktalar parladı.
Salon boşaldığında çocuk yalnız kaldı.
Ertesi gün şehir hazırlıklıydı.`,
`Çölün ortasında tek bir kuyu vardı.
Suyu değil sesi çekiyordu.
Yaklaşan herkes fısıltı duyuyordu.
Bir gezgin ip salladı.
Kova aşağı indi.
Yukarı çıktığında notalarla doluydu.
Her nota farklı bir anıydı.
Gezgin birini seçti.
Çocukluğunun kahkahası yayıldı.
Kum tepeleri titreşti.
Ufukta kayıp kervan belirdi.
Fısıltılar şarkıya dönüştü.
Kuyunun taşları ışıldadı.
Gezgin şarkıyı takip etti.
Ve efsanevi şehri buldu.`,
`Bir okulun bodrumunda kilitli bir oda vardı.
Kapıda “Deney 42” yazıyordu.
Meraklı üç öğrenci anahtarı buldu.
Kapı açılınca soğuk bir rüzgar esti.
Ortada cam bir küre duruyordu.
Küre dokununca geçmiş dersleri canlandırıyordu.
Sınıf bir anda Roma’ya dönüştü.
Sonra uzaya sıçradı.
Tarih ve fizik iç içe geçti.
Öğrenciler not almaya başladı.
Küre aniden çatladı.
Duvara bir cümle yazıldı.
“Bilgi sorumluluk ister.”
Üçü de küreyi kapattı.
Ertesi gün okulun en iyi projesini sundular.`,
`Kasabanın çeşmesi yıllardır kuruydu.
Belediye defalarca kazı yaptı.
Su çıkmadı.
Bir gün yaşlı bir kadın geldi.
Çeşmenin taşlarına masal anlattı.
Taşlar titreşti.
Musluktan önce ışık aktı.
Sonra ince bir su çizgisi belirdi.
Çocuklar sevinçle koştu.
Kovalar doldu.
Kadın gülümseyip uzaklaştı.
Kimse adını sormadı.
Gece çeşmeden ninni duyuldu.
Sabah meydanda çiçekler açtı.
Kasaba suskunluğu bıraktı.`,
`Kutup istasyonunda tek bir bilimci kalmıştı.
Fırtına antenleri koparmıştı.
Dışarıda beyaz sonsuzluk vardı.
Gece yarısı buz çatladı.
Altından mavi bir ışık yükseldi.
Bilimci sondayı indirdi.
Ekranda düzenli darbeler çıktı.
Bu bir sinyaldi.
Sinyal dünyadaki dillere benzemiyordu.
Bilimci ritmi kopyaladı.
Işık cevap verdi.
Buzun altında dev bir yapı açıldı.
Kapıda el izine benzer bir oyuk vardı.
Bilimci elini koydu.
Ve kapı yavaşça aralandı.`,
`Şehrin en yüksek binasında bir bahçe vardı.
Toprak yerine metal kullanılmıştı.
Bitkiler neon renkteydi.
Geceleri parlıyorlardı.
Bahçıvan her yaprakla konuşurdu.
Bir sabah tüm renkler soldu.
Bahçıvan panikledi.
Yağmur suyu topladı.
Yetmedi.
Sonra çocuklardan şarkı istedi.
Çocuklar birlikte söyledi.
Yapraklar yeniden ışıldadı.
Çiçekler göğe kıvılcım gönderdi.
Bina üstünde aurora oluştu.
Şehir ilk kez yıldızları net gördü.`,
`Kütüphanede raftan düşmeyen bir kitap vardı.
Kim alırsa alsın geri dönüyordu.
Yeni stajyer merak etti.
Kitabı açtı.
Sayfalar boştu.
Kalemi değdirdi.
Yazdığı cümle odada gerçekleşti.
Mum yansın dedi, mum yandı.
Pencere açılsın dedi, rüzgar girdi.
Korkup kitabı kapattı.
Son sayfada bir not çıktı.
“Sadece iyilik yaz.”
Stajyer düşündü.
“Bu şehirde kimse üşümesin” yazdı.
O gece tüm sokaklar ısındı.`,
`Issız bir sahilde deniz feneri yanmıyordu.
Gemiler yön bulamıyordu.
Bekçi yıllar önce kaybolmuştu.
Bir dalgıç feneri onarmaya geldi.
Merdivenler deniz tuzuyla kaplıydı.
Tepeye çıktığında bir pusula buldu.
İbre kuzeyi değil ayı gösteriyordu.
Dalgıç pusulayı çevirdi.
Fener camı parladı.
Işık denize vurdu.
Suyun içinde batık yollar belirdi.
Kayıp bekçi o yolda yürüyordu.
Işık yükseldikçe yol kapandı.
Bekçi başını kaldırıp selam verdi.
Ve fener sonsuza dek yandı.`,
`Eski bir atölyede rüya makinesi yapılıyordu.
Mucit son parçayı bulamıyordu.
Parça bir çocuk gülüşüydü.
Mucit parkta bekledi.
Salıncaklar boştu.
Yağmur başladı.
Tam dönerken bir çocuk güldü.
Ses şişeye doldu.
Mucit atölyeye koştu.
Makineyi çalıştırdı.
Tüm mahalle aynı rüyayı gördü.
Gökte uçan balinalar vardı.
Sabah herkes daha umutluydu.
Mucit not defterine tek cümle yazdı.
“Mutluluk da bir enerji kaynağı.”`,
`Metro tünelinde gizli bir istasyon vardı.
Haritalarda görünmüyordu.
Son vagonda bir kapı açıldı.
İki öğrenci içeri girdi.
Peronda kum saatleri dizilmişti.
Anons sesi tersten geliyordu.
Bir tren sessizce yanaştı.
İçeride yolcu yoktu.
Koltuklarda isim etiketleri vardı.
Kendi adlarını gördüler.
Tren hareket etmedi.
Ekranda bir soru çıktı.
“En çok neyi erteledin?”
Cevap verince kapılar açıldı.
Yeryüzüne döndüklerinde saat hiç ilerlememişti.`,
`Yağmurlu bir gecede köprü titremeye başladı.
Mühendis ekip çağırdı.
Sensörler arıza göstermiyordu.
Titreme ritmikti.
Bir kemancı köprüye çıktı.
Yayını kaldırdı.
Köprü aynı notayı tekrarladı.
Çelik kablolar tel gibi çınladı.
Mühendis şaşkına döndü.
Keman hızlandı.
Köprünün altından sis kalktı.
Nehirde gizli bir keman şekli oluştu.
Son nota vurulunca titreme bitti.
Köprünün taşıyıcıları güçlendi.
Şehir o köprüye “Müzik Köprüsü” dedi.`,
`Bir çiftlikte bütün korkuluklar kayboldu.
Kargalar tarlaya inmedi.
Çiftçi bunu uğur saydı.
Gece kamera kurdu.
Sabaha karşı görüntüde hareket vardı.
Korkuluklar yürüyordu.
Tarlanın ortasında halka oldular.
Toprağa bir şey bıraktılar.
Çiftçi yaklaşınca taş buldu.
Taşın içinde mısır tohumu parlıyordu.
Tohumları ekti.
Bir haftada hasat oldu.
Köy ilk kez kıtlık korkusunu unuttu.
Gece olunca korkuluklar geri döndü.
Ama artık gözlerinde ışık vardı.`,
`Ay gözlemevinde kırmızı bir nokta belirdi.
Astronotlar bunun hata olduğunu sandı.
Nokta büyüdü.
Bir kapıya dönüştü.
Kapı ay yüzeyinde asılıydı.
Ekibin en genç üyesi yaklaştı.
Kapı kolu yoktu.
Nefesini camına verdi.
Camda dünya çizildi.
Sonra şehirlerin ışıkları söndü.
Kapı açıldı.
İçeride dev bir batarya vardı.
Batarya dünya ile senkrondu.
Genç astronot sistemi yeniden başlattı.
Dünya ışıkları tekrar yandı.`,
`Bir kasabada hiç rüya görülmüyordu.
İnsanlar sabah yorgun uyanıyordu.
Doktorlar sebep bulamadı.
Postacı gece dağıtıma çıktı.
Her kapıda boş zarf vardı.
Zarfların üstünde isim yoktu.
Postacı birini açtı.
İçinden yıldız tozu döküldü.
Toz rüzgarla evlere girdi.
O gece herkes rüya gördü.
Kimisi deniz, kimisi dağ gördü.
Kasaba sabah neşeyle uyandı.
Postacı ertesi gece yine çıktı.
Bu kez zarflar kaybolmuştu.
Ama rüyalar geri dönmüştü.`,
`Terk edilmiş fabrikada siren çalmaya başladı.
Mahalleli korkuyla kaçtı.
Bir itfaiyeci içeri girdi.
Alev yoktu.
Makineler kendi kendine dönüyordu.
Konveyörde sadece boş kutular vardı.
Kutuların üstünde koordinatlar yazıyordu.
İtfaiyeci birini takip etti.
Koordinat onu nehre götürdü.
Suyun içinde paslı bir kasa vardı.
Kasayı açınca temiz su filtresi çıktı.
Mahalle yıllardır kirli su içiyordu.
Filtre sistemi kuruldu.
Fabrika sustu.
Siren bir daha çalmadı.`,
`Dağ köyünde yankı geri dönmüyordu.
Bağıran herkes sessizlik duyuyordu.
Rehber bunun kötüye işaret olduğunu söyledi.
Bir öğrenci kayanın üstüne çıktı.
Flüt çalmaya başladı.
Ses vadide kayboldu.
Sonra uzaktan melodi döndü.
Ama notalar farklıydı.
Vadinin öbür yanında görünmez bir topluluk vardı.
Onlar da cevap veriyordu.
Gece boyunca karşılıklı çaldılar.
Sabah sis açıldı.
Karşı yamaçta antik bir amfi ortaya çıktı.
Köy festival düzenledi.
Yankı artık şarkı getiriyordu.`,
`Bir yazılım laboratuvarında ekranlar dondu.
Kod satırları yer değiştirdi.
Mühendisler paniğe kapıldı.
Stajyer bir satır fark etti.
“Beni dinle.” yazıyordu.
Sistem kendi günlüğünü açtı.
Yıllardır görmezden gelinen hataları anlattı.
Sunucular neden yorulduğunu söyledi.
Ekip gece boyunca düzeltme yaptı.
Sabah sistem hızlandı.
Donmalar bitti.
Log dosyasında son mesaj kaldı.
“Teşekkür ederim.”
Stajyer gülümsedi.
Laboratuvar ilk kez sessizdi.`,
`Kanyonun dibinde mavi bir ateş yanıyordu.
Yağmurda bile sönmüyordu.
Jeologlar numune aldı.
Ateş suyu yakmıyordu.
Sadece gölgeleri aydınlatıyordu.
Bir çocuk ateşe yaklaştı.
Gölgede kayıp köpeğini gördü.
Köpek kuyruğunu sallıyordu.
Çocuk adım attı.
Jeolog onu tuttu.
Ateş bir harita çizdi.
Harita eski mağarayı gösterdi.
Mağarada köpek gerçekten bulundu.
Mavi ateş sabaha karşı söndü.
Ama kanyon artık karanlık değildi.`
];
const storyTemplates = refreshedStoryLibrary;
const poemTemplates = [
  `Rüzgârın sesinde {theme} var,
kalbimde usul bir şarkı.`,
  `Bir damla geceye düştü,
adalıma {theme} yağdı.`,
  `Sessiz sokaklarda yürürken
ayak izlerim {theme} dedi.`,
  `Denizin kıyısında bir taş,
üstünde yazılı: {theme}.`,
  `Gözlerin değince dünyaya
her renk {theme} olur.`,
  `Kırık bir saat gibi kalbim,
her tikte {theme} çalar.`,
  `Pencereye vuran yağmur
hece hece {theme} okur.`,
  `Bir kuş geçer gökyüzünden,
kanadında {theme} taşır.`,
  `Sustum, ama içimde
uzun bir {theme} konuştu.`,
  `Gece lambası sönünce
oda {theme} ile aydınlandı.`,
  `Uzak bir tren sesi gibi
içime {theme} gelir.`,
  `Toprağın kokusunda saklı
çocukluğum ve {theme}.`,
  `Ay ışığı omzuma kondu,
"korkma" dedi, "{theme}".`,
  `Bir mektup açtım bugün,
her satırda {theme} vardı.`,
  `Kıyıya vuran dalgalar
{theme}yi tekrar etti.`,
  `Yıldızları sayarken
eksik kalan hep {theme} oldu.`,
  `İnce bir sızı gibi
sabahıma {theme} doğdu.`,
  `Karanlık bir koridorda
elimde tek fener: {theme}.`,
  `Sesin değdi kalbime,
çınlayan kelime: {theme}.`,
  `Baharın ilk gününde
kapımı {theme} çaldı.`,
  `Bir yaprak düştü avucuma,
üzerinde {theme} yazıyordu.`,
  `Uykumun kıyısında
ince bir {theme} salındı.`,
  `Gölgem bile bugün
benimle {theme} yürüdü.`,
  `Bir çocuk gülüşünde
şehrin bütün {theme}si var.`,
  `Yarım kalan cümlelerimde
en çok {theme} eksikti.`,
  `Kül rengi bulutların altında
içimde {theme} yeşerdi.`,
  `Ellerin üşürken bile
parmaklarında {theme} ısısı vardı.`,
  `Gecenin en sessiz yerinde
kalbim {theme} diye attı.`,
  `Bir adım daha attım hayata,
ayağımın altında {theme}.`,
  `Son dizede fark ettim: bütün yollar
dönüp dolaşıp {theme}ye çıkıyor.`
];
const epsteinResponses = [
  `Bu dosya neden bu kadar konuşuluyor, onu katman katman anlatmak daha doğru olur:
- Önce hukuki boyut: ağır suç iddiaları, farklı dönemlerde açılan süreçler ve kamuoyunda adaletin eşit uygulanıp uygulanmadığına dair güçlü bir tartışma var.
- Sonra mağdur boyutu: birçok insan için asıl mesele, mağdur anlatılarının yeterince ciddiye alınıp alınmadığı ve süreçlerin ne kadar koruyucu olduğu.
- Bir de sistem boyutu var: güç, çevre ilişkileri, medya etkisi ve şeffaflık beklentisi dosyayı tek bir kişiden daha büyük bir sembole dönüştürüyor.
Bu yüzden konu sadece “ne oldu” sorusuyla bitmiyor; “sistem nasıl işledi, nerede aksadı” sorusuyla devam ediyor. İstersen kısa 5 maddeye ayırayım.`,
  `Bu başlığı sade ama doğru çerçevede okumak için üç şeyi ayırmak gerekiyor:
1) İddiaların ciddiyeti ve hukuki süreçler.
2) Mağdur hakları, güvenlik ve görünürlük meselesi.
3) Kurumsal güven: kamuoyunun “hesap verebilirlik var mı?” sorusu.
İnsanların bu dosyaya tepkisi, sadece geçmişte olanlara değil, benzer durumlarda sistemin gelecekte nasıl davranacağına dair kaygılara da dayanıyor. O yüzden etik, hukuk ve toplumsal vicdan aynı anda konuşuluyor. İstersen kısa 5 maddeye ayırayım.`,
  `Karmaşık görünmesinin sebebi bilgi fazlalığı değil sadece; farklı katmanların üst üste binmesi:
• Hukuk: dosya süreçlerinin niteliği ve kararların etkisi
• Toplum: güven kaybı ve adalet algısı
• Medya: gündem yoğunluğu ve bilgi kirliliği
• Mağdur perspektifi: korunma ve duyulma ihtiyacı
Bu yüzden tek bir cümlelik özet çoğu zaman yetersiz kalıyor. En sağlıklı yaklaşım, doğrulanmış ana başlıklarla ilerlemek. İstersen kısa 5 maddeye ayırayım.`,
  `Bu konuda dengeli bir özet şöyle olur:
- Evet, dosya uzun süredir tartışılıyor çünkü iddialar çok ciddi.
- Evet, süreçlerin bazı kısımları kamuoyunda “yeterli mi?” sorusu doğurdu.
- Evet, konu bireysel bir vakadan çıkıp adalet ve şeffaflık tartışmasına dönüştü.
Dolayısıyla mesele yalnızca bir olayın kronolojisi değil; kurumların güvenilirliği, mağdur odaklı yaklaşım ve hesap verebilirlik standardı ile ilgili. İstersen kısa 5 maddeye ayırayım.`,
  `Özetin özü şu: bu dosya, modern kamu tartışmalarında “güç karşısında hukuk nasıl çalışmalı?” sorusunun simgelerinden biri haline geldi.
Burada insanlar üç sonuca bakıyor:
- Adalet gerçekten eşit mi?
- Mağdur hakları gerçekten korunuyor mu?
- Süreçler gerçekten şeffaf mı?
Bu üç soruya verilen yanıtlar netleşmediğinde, konu yıllar sonra bile gündemde kalmaya devam ediyor. İstersen kısa 5 maddeye ayırayım.`
];
const epsteinListResponses = [
  "1) Epstein finans çevrelerinde bilinen bir isimdi.\n2) Ciddi suçlamalarla gündeme geldi.\n3) Farklı dönemlerde yargı süreçleri yaşandı.\n4) Yüksek profilli bağlantılar tartışmayı büyüttü.\n5) Dosya adalet/şeffaflık tartışmalarını artırdı.",
  "1) Dosya cinsel suç iddialarıyla küresel gündeme taşındı.\n2) İlk süreçler yoğun eleştiri aldı.\n3) Yeni mağdur anlatıları dikkat çekti.\n4) Medya görünürlüğü etkiyi artırdı.\n5) Konu, kurumsal güven başlığında sembolleşti.",
  "1) Birden fazla soruşturma dönemi yaşandı.\n2) Mağdur odaklı adalet talebi büyüdü.\n3) Süreçlerin şeffaflığı sorgulandı.\n4) Güç ilişkileri tartışmayı derinleştirdi.\n5) Olay, hukuk-etik dengesi açısından örnek vaka oldu."
];
const emotionalKeywords = [
  "mutsuzum","üzgünüm","kötüyüm","moralim bozuk","canım sıkkın","bunaldım","yalnızım","kaygılıyım","endişeliyim","yorgunum",
  "bitkinim","tükendim","stresliyim","kırıldım","incindim","yoruldum","kafam dolu","hevesim yok","odaklanamıyorum","depresifim",
  "yalnız hissediyorum","boşluktayım","çok kötüyüm","iyi değilim","içim sıkıldı","darıldım","tripteyim","anlaşılmıyorum","desteksizim","çaresizim",
  "umudum azaldı","huzursuzum","rahat değilim","zorlanıyorum","zor dönem","dertliyim","dayanamıyorum","boğuluyorum","baskı altındayım","içim daraldı",
  "kafam karışık","gücüm yok","enerjim yok","modum düşük","ağlamak istiyorum","yalpalıyorum","yıprandım","pişmanım","mahvoldum","zor bir gün"
];
const emotionalPromptBank = [
  "Canının sıkkın olduğunu duyduğuma üzüldüm 💙 İstersen birlikte mini bir toparlanma planı yapalım.",
  "Yalnız değilsin 🤝 Buradayım, istersen adım adım rahatlayacak bir yol çıkaralım.",
  "Bu hislerin çok gerçek ve anlaşılır 🌿 Önce kendine nazik olalım, sonra küçük bir hedef belirleyelim.",
  "Bence çok güçlüsün; paylaşman bile önemli bir adım ✨ İstersen devamını beraber toparlarız.",
  "Sana yük olmuş olabilir, bunu hissediyorum 🫶 Gel bunu daha yönetilebilir parçalara bölelim.",
  "Kısa bir reset iyi gelebilir: nefes, su, küçük görev 🧠 İstersen beraber başlatalım.",
  "Bugün zor olabilir ama geçici 💫 Ben buradayım, tek bir küçük adımla başlayabiliriz.",
  "İstersen konuşalım, istersen çözüm planı çıkaralım 🎯 Kontrol sende, destek bende.",
  "Bu duyguyu bastırma; anlatman kıymetli 💙 Sonra birlikte net bir yol seçeriz.",
  "Sana iyi gelecek mini bir akış yapalım mı? 5 dk mola + 10 dk odak + geri bildirim 🚀"
];
const memoryPatterns = [
  { key: "ad", regex: /(?:benim ad[ıi]m|ad[ıi]m)\s+([a-zA-ZçğıöşüÇĞİÖŞÜ\s]+)/i, label: "Ad" },
  { key: "yas", regex: /(?:benim ya[şs][ıi]m|ya[şs][ıi]m)\s+(\d{1,2})/i, label: "Yaş" },
  { key: "boy", regex: /(?:benim boyum|boyum)\s+([\d.,]+\s*(?:cm|m)?)/i, label: "Boy" },
  { key: "kilo", regex: /(?:benim kilom|kilom)\s+([\d.,]+\s*(?:kg)?)/i, label: "Kilo" },
  { key: "hobi", regex: /(?:benim hobilerim|hobilerim)\s+(.+)/i, label: "Hobiler" },
  { key: "meslek", regex: /(?:benim mesleğim|mesleğim)\s+(.+)/i, label: "Meslek" }
];
const memoryQuestionPatterns = [
  { labels: ["Ad"], checks: ["adım kaç", "adim kac", "benim adım ne", "benim adim ne", "adım ne", "adim ne", "adım nedir", "adim nedir"] },
  { labels: ["Yaş"], checks: ["yaşım kaç", "yasim kac", "benim yaşım kaç", "benim yasim kac", "yaşım ne", "yasim ne"] },
  { labels: ["Boy"], checks: ["boyum kaç", "boyum kac", "boyum ne", "benim boyum kaç", "benim boyum kac"] },
  { labels: ["Kilo"], checks: ["kilom kaç", "kilom kac", "kilom ne", "benim kilom kaç", "benim kilom kac"] },
  { labels: ["Hobiler"], checks: ["hobilerim ne", "hobilerim neler", "hobim ne", "hobim neydi"] },
  { labels: ["Meslek"], checks: ["mesleğim ne", "meslegim ne", "mesleğim neydi", "benim mesleğim ne", "benim meslegim ne"] },
  { labels: ["Ad", "Yaş", "Boy", "Kilo", "Hobiler", "Meslek"], checks: ["bende ne var", "bende ne kayıtlı", "belleğimde ne var", "bellekte ne var", "kayıtlarım", "beni hatırla", "beni hatırla baluk"] }
];
function modelVersionNumber(model) {
  const m = String(model || "").match(/baluk-(\d+(?:\.\d+)?)/i);
  return m ? Number(m[1]) : 0;
}
function modelAtLeast(version) {
  return modelVersionNumber(currentModel) >= version;
}
function supportsContextModel() {
  return isAccountLoggedIn && modelAtLeast(1.5);
}
function supportsMemoryModel() {
  if (isPremiumUser) return true;
  return modelAtLeast(1.6);
}
function supportsWebModel() {
  return modelAtLeast(1.7);
}
function supportsWebTextExtractionModel() {
  return modelAtLeast(2.2);
}
function supportsLensModel() {
  return modelAtLeast(1.9);
}
function supportsBallEModel() {
  return false;
}
function supportsVoiceModel() {
  return modelAtLeast(2.0);
}
function supportsTestModeModel() {
  return modelAtLeast(2.1);
}
function supportsKnowledgeAssistForUnknown() {
  return isAccountLoggedIn && (currentModel === "baluk-2.2" || thinkingModeEnabled);
}
function updateComposerModeUI() {
  const showImageComposer = balleModeEnabled && supportsBallEModel();
  if (textComposerWrap) textComposerWrap.classList.toggle("hidden", showImageComposer);
  if (chatSubmitBtn) chatSubmitBtn.classList.toggle("hidden", showImageComposer);
  if (balleGenerateBtn) {
    balleGenerateBtn.classList.toggle("hidden", !showImageComposer);
    balleGenerateBtn.disabled = balleGenerating;
  }
  if (userInput && !showImageComposer) userInput.required = true;
}

function setBalleMode(enabled = false) {
  const canEnable = supportsBallEModel();
  balleModeEnabled = !!enabled && canEnable;
  if (balleMode) {
    balleMode.checked = balleModeEnabled;
    balleMode.disabled = !canEnable;
  }
  updateComposerModeUI();
  if (!supportsVoiceModel()) closeVoiceMode();
}
function updatePremiumUI() {
  const now = Date.now();
  const isExpired = isPremiumUser && premiumExpiresAt && now > premiumExpiresAt;
  if (isExpired) {
    isPremiumUser = false;
    allowProfanity = false;
    premiumPaymentPending = false;
    premiumExpiresAt = 0;
    localStorage.removeItem(PREMIUM_STORAGE_KEY);
    localStorage.removeItem(PREMIUM_PENDING_KEY);
    localStorage.removeItem(PREMIUM_EXPIRY_KEY);
    localStorage.setItem(ALLOW_PROFANITY_STORAGE_KEY, "0");
  }
  const remainingDays = isPremiumUser && premiumExpiresAt
    ? Math.max(0, Math.ceil((premiumExpiresAt - now) / (24 * 60 * 60 * 1000)))
    : 0;
  if (premiumOwnedLabel) premiumOwnedLabel.classList.toggle("hidden", !isPremiumUser);
  if (premiumExpiryLabel) {
    premiumExpiryLabel.classList.toggle("hidden", !isPremiumUser);
    premiumExpiryLabel.textContent = isPremiumUser ? `⏱️ Premium süresi: ${remainingDays} gün` : "";
  }
  if (premiumPendingLabel) premiumPendingLabel.classList.toggle("hidden", isPremiumUser || !premiumPaymentPending);
  if (drawerPremiumOpen) {
    drawerPremiumOpen.innerHTML = isPremiumUser
      ? '<span class="menu-icon icon-plus" aria-hidden="true"></span><span>Plus Satın Alındı</span>'
      : '<span class="menu-icon icon-plus" aria-hidden="true"></span><span>Plus Al</span>';
    drawerPremiumOpen.disabled = isPremiumUser;
  }
  if (premiumBuyBtn) premiumBuyBtn.classList.toggle("hidden", isPremiumUser || premiumPaymentPending);
  if (premiumPayLinkBtn) premiumPayLinkBtn.classList.toggle("hidden", isPremiumUser || !premiumPaymentPending);
  if (premiumCodeRow) premiumCodeRow.classList.toggle("hidden", isPremiumUser || !premiumPaymentPending);
  if (premiumConfirmBtn) premiumConfirmBtn.disabled = isPremiumUser || !premiumPaymentPending;
  if (allowProfanityMode) allowProfanityMode.checked = isPremiumUser && allowProfanity;
  document.body.classList.toggle("premium-active", isPremiumUser);
  updateModelVisual();
  updateThinkingQuotaUI();
  if (isPremiumUser) stopBan();
}
function activatePremium() {
  isPremiumUser = true;
  premiumPaymentPending = false;
  premiumExpiresAt = Date.now() + PREMIUM_DURATION_MS;
  resetPremiumCodeGuard();
  localStorage.setItem(PREMIUM_STORAGE_KEY, "1");
  localStorage.setItem(PREMIUM_EXPIRY_KEY, String(premiumExpiresAt));
  localStorage.removeItem(PREMIUM_PENDING_KEY);
  updatePremiumUI();
  if (premiumModal) premiumModal.classList.add("hidden");
  if (premiumCodeInput) premiumCodeInput.value = "";
  showWarningOverlay("✨ Premium aktif edildi! Süre 30 gün olarak başlatıldı.");
}
function getPremiumCodeLockDurations() {
  return [30 * 1000, 60 * 1000, 5 * 60 * 1000, 15 * 60 * 1000, 60 * 60 * 1000, 24 * 60 * 60 * 1000, 7 * 24 * 60 * 60 * 1000];
}
function persistPremiumCodeGuard() {
  localStorage.setItem(PREMIUM_CODE_GUARD_KEY, JSON.stringify(premiumCodeGuard || { stage: 0, triesLeft: 3, lockedUntil: 0 }));
}
function normalizePremiumCodeGuard() {
  const now = Date.now();
  const durations = getPremiumCodeLockDurations();
  const maxStage = durations.length - 1;
  premiumCodeGuard = premiumCodeGuard && typeof premiumCodeGuard === "object" ? premiumCodeGuard : {};
  premiumCodeGuard.stage = Math.max(0, Math.min(maxStage, Number(premiumCodeGuard.stage) || 0));
  premiumCodeGuard.triesLeft = Math.max(1, Math.min(3, Number(premiumCodeGuard.triesLeft) || 3));
  premiumCodeGuard.lockedUntil = Math.max(0, Number(premiumCodeGuard.lockedUntil) || 0);
  if (premiumCodeGuard.lockedUntil && now >= premiumCodeGuard.lockedUntil) {
    if (premiumCodeGuard.stage >= maxStage) {
      premiumCodeGuard.stage = 0;
    }
    premiumCodeGuard.lockedUntil = 0;
    premiumCodeGuard.triesLeft = 3;
  }
  persistPremiumCodeGuard();
}
function resetPremiumCodeGuard() {
  premiumCodeGuard = { stage: 0, triesLeft: 3, lockedUntil: 0 };
  persistPremiumCodeGuard();
}
function formatPremiumGuardRemaining(ms = 0) {
  const sec = Math.ceil(ms / 1000);
  if (sec >= 24 * 3600) return `${Math.ceil(sec / (24 * 3600))} gün`;
  if (sec >= 3600) return `${Math.ceil(sec / 3600)} saat`;
  if (sec >= 60) return `${Math.ceil(sec / 60)} dakika`;
  return `${Math.max(1, sec)} saniye`;
}
function startPremiumPayment() {
  if (!isAccountLoggedIn) {
    showWarningOverlay("Premium satın almak için önce oturum aç.");
    return;
  }
  premiumPaymentPending = true;
  localStorage.setItem(PREMIUM_PENDING_KEY, "1");
  updatePremiumUI();
  showWarningOverlay("Kod alanı açıldı. Şimdi ödeme sayfasına gidip kodu al, sonra buraya gir.");
}
function openPremiumPaymentLink() {
  if (isPremiumUser) return;
  if (!isAccountLoggedIn) {
    showWarningOverlay("Premium satın almak için önce oturum aç.");
    return;
  }
  if (!premiumPaymentPending) startPremiumPayment();
  window.open(PREMIUM_PAY_LINK, "_blank", "noopener,noreferrer");
}
function tryActivatePremiumFromReturn() {
  if (isPremiumUser || !premiumPaymentPending) return;
  const params = new URLSearchParams(window.location.search);
  const hashParams = new URLSearchParams(String(window.location.hash || "").replace(/^#/, ""));
  const status = (params.get("paytr_status") || hashParams.get("paytr_status") || "").toLowerCase();
  const premium = (params.get("premium_paid") || hashParams.get("premium_paid") || "").toLowerCase();
  if (status === "success" || premium === "1" || premium === "true") {
    activatePremium();
    params.delete("paytr_status");
    params.delete("premium_paid");
    const clean = `${window.location.pathname}${params.toString() ? `?${params}` : ""}`;
    window.history.replaceState({}, "", clean);
  }
}
function manuallyConfirmPremium() {
  if (isPremiumUser) return;
  if (!isAccountLoggedIn) {
    showWarningOverlay("Kod girişi için önce oturum aç.");
    return;
  }
  if (!premiumPaymentPending) {
    showWarningOverlay("Önce Premium Al butonuyla ödeme akışını başlatmalısın.");
    return;
  }
  normalizePremiumCodeGuard();
  if (premiumCodeGuard.lockedUntil > Date.now()) {
    const left = premiumCodeGuard.lockedUntil - Date.now();
    showWarningOverlay(`Çok fazla hatalı deneme. Lütfen ${formatPremiumGuardRemaining(left)} sonra tekrar dene.`);
    return;
  }
  const code = (premiumCodeInput?.value || "").trim();
  if (!code) {
    showWarningOverlay("Lütfen SMS ile gelen doğrulama kodunu gir.");
    return;
  }
  if (!PREMIUM_VERIFY_CODES.includes(code)) {
    premiumCodeGuard.triesLeft = Math.max(0, premiumCodeGuard.triesLeft - 1);
    if (premiumCodeGuard.triesLeft > 0) {
      persistPremiumCodeGuard();
      showWarningOverlay(`Kod hatalı. Kalan deneme hakkı: ${premiumCodeGuard.triesLeft}/3`);
      return;
    }
    const durations = getPremiumCodeLockDurations();
    const stage = Math.max(0, Math.min(durations.length - 1, premiumCodeGuard.stage));
    const lockMs = durations[stage];
    premiumCodeGuard.lockedUntil = Date.now() + lockMs;
    premiumCodeGuard.triesLeft = 3;
    premiumCodeGuard.stage = Math.min(durations.length - 1, stage + 1);
    persistPremiumCodeGuard();
    showWarningOverlay(`Kod hatalı. Geçici kilit aktif: ${formatPremiumGuardRemaining(lockMs)}.`);
    return;
  }
  if (usedPremiumCodes.includes(code)) {
    showWarningOverlay("Bu kod daha önce kullanılmış. Lütfen yeni kod iste.");
    return;
  }
  resetPremiumCodeGuard();
  usedPremiumCodes.push(code);
  localStorage.setItem(PREMIUM_USED_CODES_KEY, JSON.stringify(usedPremiumCodes));
  activatePremium();
}
function expandForPremium(text) {
  return text;
}
function chooseRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function typeTextSlowly(target, text, options = {}) {
  if (!target) return Promise.resolve();
  const full = String(text || "");
  const baseDelay = Number(options.baseDelay ?? 9);
  const punctuationDelay = Number(options.punctuationDelay ?? 32);
  const maxChars = Number(options.maxChars ?? 1700);
  const shouldAnimate = !!full && full.length <= maxChars;
  if (!shouldAnimate) {
    target.textContent = full;
    return Promise.resolve();
  }
  target.textContent = "";
  return new Promise((resolve) => {
    let i = 0;
    const tick = () => {
      if (i >= full.length) {
        resolve();
        return;
      }
      target.textContent += full[i];
      const ch = full[i];
      i += 1;
      chat.scrollTop = chat.scrollHeight;
      const extra = /[.,!?;:\n]/.test(ch) ? punctuationDelay : 0;
      setTimeout(tick, baseDelay + extra);
    };
    tick();
  });
}
function isProfanityModeActive() {
  return isPremiumUser && allowProfanity;
}
function isMerhabaTypo(text = "") {
  const t = String(text || "").toLowerCase().replace(/[^a-zçğıöşü0-9\s]/g, "").trim();
  if (!t) return false;
  if (t === "merhaba") return false;
  if (/^merh?[wv]?[ab]+a$/.test(t)) return true;
  return ["merhwa", "merhawa", "merhwaba", "merhba", "mrb"].includes(t);
}
const profanityGreetingReplies = [
  "Selam aq, hoş geldin knk. Keyifler nasıl?",
  "Selam amk, buradayım knk; ne konuşuyoruz bugün?",
  "Aleyküm selam aq, hadi bakalım sohbete.",
  "Selam knk, mod açık aq; neye dalıyoruz?"
];
const profanityMoodReplies = [
  "İyiyim aq, sen nasılsın knk?",
  "İyi gidiyor amk, sende durumlar nasıl?",
  "Bende sıkıntı yok aq, senin mod nasıl?",
  "Takılıyoruz knk aq, sende neler var?"
];


const profanityUnknownReplies = [
  "Anlamadım aq 😅 \"{input}\" ne demek, biraz net yaz knk.",
  "Bu cümle karışık amk: \"{input}\". Bir tık düzenli yaz da anında çözelim.",
  "Bunu çözemedim aq, \"{input}\" biraz dağınık kalmış. Kısa ve net at knk.",
  "Anlam bozulmuş amk 😄 \"{input}\" yerine ne istediğini direkt söyle kanka.",
  "Kafama oturmadı aq: \"{input}\". Bir daha sade yaz, hızlıca cevaplayayım.",
  "Bu haliyle anlamsız duruyor amk, \"{input}\" neyi kast ediyor? Net geç knk.",
  "Anlamadım aq, \"{input}\" yerine tek cümle düzgün yaz da tam vurayım cevabı.",
  "Cümle patlamış amk 😅 \"{input}\" biraz daha düzgün olursa mis gibi çözeriz.",
  "Bunu okuyunca anlam çıkmadı aq: \"{input}\". Ne istediğini direkt yaz kanka.",
  "Net olmadı amk, \"{input}\" çok dağınık. Dümdüz anlat, ben de net cevap vereyim."
];

function buildProfanityUnknownReply(rawInput = "") {
  const shown = String(rawInput || "").trim() || "bu cümle";
  return chooseRandom(profanityUnknownReplies).replaceAll("{input}", shown);
}
function buildProfanityModeDirectReply(inputLower = "", rawInput = "") {
  if (!isProfanityModeActive()) return null;
  if (isMerhabaTypo(inputLower)) {
    return `"${rawInput}" ne aq 😄 Selam knk, keyifler nasıl?`;
  }
  if (hasSalutation(inputLower, saKeywords) || hasAny(inputLower, ["merhaba", "selam", "selamlar", "sa"])) {
    return chooseRandom(profanityGreetingReplies);
  }
  if (isHowAreYouVariant(inputLower)) {
    return chooseRandom(profanityMoodReplies);
  }
  return null;
}
function detectProfanityIntent(input = "") {
  const q = String(input || "").toLocaleLowerCase("tr-TR");
  if (hasAny(q, ["merhaba", "selam", "hey", "günaydın", "iyi akşamlar", "hoş geldin", "bye", "görüşürüz"])) return "greeting";
  if (hasAny(q, ["nasılsın", "naber", "mutluyum", "üzgünüm", "sinirliyim", "korkuyorum", "stres", "yorgunum", "sıkıldım"])) return "mood";
  if (hasAny(q, ["neden", "nasıl", "ne", "kim", "kaç", "hangi", "olur mu", "mümkün mü", "gerçekten", "doğru mu"])) return "question";
  if (hasAny(q, ["ai", "yapay zeka", "robot", "algoritma", "kod", "yazılım", "python", "html", "javascript", "veritabanı", "sunucu", "internet", "uygulama", "site", "tarayıcı"])) return "tech";
  if (hasAny(q, ["oyun", "level", "boss", "silah", "karakter", "xp", "skor", "görev", "harita", "mod", "pvp", "rank", "kazandım", "kaybettim", "respawn"])) return "game";
  if (hasAny(q, ["para", "satış", "kazanç", "zarar", "yatırım", "müşteri", "ürün", "indirim", "kampanya", "fiyat", "bitcoin", "kripto", "hisse", "altın", "dolar"])) return "money";
  if (hasAny(q, ["matematik", "sınav", "ders", "okul", "ödev", "çözüm", "formül", "test", "+", "-", "*", "/"])) return "math";
  if (hasAny(q, ["web", "wikipedia", "link", "kaynak", "arama"])) return "web";
  if (hasAny(q, ["başlat", "dur", "yeniden", "sıfırla", "kaydet", "yükle", "sil", "aç", "kapat", "yardım"])) return "system";
  return "default";
}
function blendTokenIntoLine(line, token) {
  const cleanLine = String(line || "").trim();
  if (!cleanLine) return cleanLine;
  if (cleanLine.length <= 22) return `${cleanLine} ${token}`;
  const words = cleanLine.split(/\s+/);
  if (words.length < 5) return `${cleanLine} ${token}`;
  const insertAt = Math.min(3, words.length - 1);
  words.splice(insertAt, 0, token);
  return words.join(" ");
}
function applyProfanityFlavor(text, sourceInput = "") {
  if (!isProfanityModeActive()) return text;
  const clean = String(text || "").trim();
  if (!clean) return clean;
  return clean;
}

function updateSplashPrompt() {
  if (!splashPrompt) return;
  const name = (userMemory.Ad || "dostum").trim() || "dostum";
  const template = chooseRandom(splashPromptTemplates);
  splashPrompt.textContent = template.replace("{name}", name);
}
function hasAny(text, list) { return list.some((i) => text.includes(i)); }
function escapeRegex(str) {
  return str.replace(/[|\{}()[\]^$+*?.]/g, "\$&");
}
function includesKeywordToken(text, keyword) {
  const normalized = String(text || "").toLowerCase();
  const key = String(keyword || "").toLowerCase().trim();
  if (!key) return false;
  if (key.includes(" ")) return normalized.includes(key);
  const pattern = new RegExp(`(^|[^a-zçğıöşü0-9])${escapeRegex(key)}([^a-zçğıöşü0-9]|$)`, "i");
  return pattern.test(normalized);
}
function findUnifiedKeyword(textLower) {
  for (const [category, words] of Object.entries(unifiedKeywordCategories)) {
    for (const word of words) {
      if (includesKeywordToken(textLower, word)) return { category, keyword: word };
    }
  }
  return null;
}
function buildUnifiedKeywordReply(textLower) {
  const found = findUnifiedKeyword(textLower);
  if (!found) return null;
  const base = chooseRandom(unifiedKeywordPromptBank).replaceAll("{keyword}", found.keyword);
  return `${base}
🧩 İstersen bu konuyu şimdi senin seviyene göre (hızlı / orta / uzman) detaylandırayım.`;
}
function buildLocalUtilityReply(textLower) {
  const l = String(textLower || "").toLocaleLowerCase("tr-TR");
  if (hasAny(l, localUtilityQuestionTriggers.time)) {
    const now = new Date();
    const saat = now.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" });
    return `Şu an saat ${saat} ⏰`;
  }
  if (hasAny(l, localUtilityQuestionTriggers.date)) {
    const now = new Date();
    const tarih = now.toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric", weekday: "long" });
    return `Bugünün tarihi ${tarih} 📅`;
  }
  if (hasAny(l, localUtilityQuestionTriggers.weather)) {
    return "Canlı hava durumu verisine web kapalıyken doğrudan erişemiyorum 🌦️ Ama şehrini yazarsan tahmini durum ve hazırlanma önerisi verebilirim.";
  }
  return null;
}
function buildGeneralKnowledgeReply(inputLower = "") {
  const l = String(inputLower || "").toLocaleLowerCase("tr-TR");
  const entry = generalKnowledgeEntries.find((item) => item.keys.some((key) => includesKeywordToken(l, key)));
  if (!entry) return null;
  const asksProducts = hasAny(l, ["ürün", "ürünleri", "ürünlerinin", "hangi ürün", "hangi urun", "servisleri", "neleri var", "neler var"]);
  const asksPurpose = hasAny(l, ["amacı ne", "amaci ne", "ne işe yarar", "ne ise yarar", "nedir", "ne için", "ne icin", "ne amaçla", "ne amacla", "ne işe yarıyor", "ne ise yariyor"]);
  if (asksProducts && entry.products) {
    return `🧠 ${entry.products} İstersen bunları tek tek “ne işe yarar?” şeklinde de ayırabilirim.`;
  }
  if (asksPurpose || entry.purpose) {
    return `🧠 ${entry.purpose} İstersen bunun güçlü ve zayıf yanlarını da ayrıca sıralayabilirim.`;
  }
  return null;
}
function buildOfflineKnowledgeReply(textLower) {
  const l = String(textLower || "").toLocaleLowerCase("tr-TR");
  const byTopic = offlineKnowledgeTopics.find((topic) => hasAny(l, topic.tags));
  if (byTopic) return byTopic.reply;
  const matchedCatalog = offlineQuestionCatalog.find((q) => l.includes(q));
  if (!matchedCatalog) return null;
  const topic = offlineKnowledgeTopics.find((item) => matchedCatalog.includes(item.key));
  return topic ? topic.reply : null;
}
function setWebMode(enabled) {
  if (enabled && !isAccountLoggedIn) {
    webModeEnabled = false;
    if (webSearchMode) webSearchMode.checked = false;
    showWarningOverlay("Web modu için önce oturum aç.");
    updateThinkingPlaceholder();
    return;
  }
  if (enabled && testModeEnabled) setTestMode(false);
  if (enabled && !supportsWebModel()) {
    webModeEnabled = false;
    if (webSearchMode) webSearchMode.checked = false;
    if (warningOverlay && warningText) {
      showWarningOverlay("Web Arama Modu yalnızca baluk-1.7 ve üstü modellerde kullanılabilir.");
    }
  } else {
    webModeEnabled = !!enabled;
  }
  if (webModeEnabled && lensModeEnabled) {
    lensModeEnabled = false;
    if (balukLensMode) balukLensMode.checked = false;
    closeLensPanel();
  }
  if (userInput) {
    userInput.classList.toggle("web-search-input", webModeEnabled);
    userInput.placeholder = webModeEnabled ? "🌐 Web'de ara..." : "Mesajını yaz...";
  }
  updateComposerModeUI();
  if (!supportsVoiceModel()) closeVoiceMode();
  if (webInputBadge) webInputBadge.classList.toggle("hidden", !webModeEnabled);
  updateThinkingPlaceholder();
}
function persistThinkingState() {
  localStorage.setItem(THINKING_MODE_KEY, thinkingModeEnabled ? "1" : "0");
  localStorage.setItem(THINKING_USAGE_KEY, JSON.stringify(thinkingUsageTimestamps || []));
}
function getThinkingWindowMs() {
  return 30 * 60 * 1000;
}
function getThinkingMaxQuestions() {
  return isPremiumUser ? Infinity : 5;
}
function pruneThinkingUsage(now = Date.now()) {
  const windowMs = getThinkingWindowMs();
  thinkingUsageTimestamps = (Array.isArray(thinkingUsageTimestamps) ? thinkingUsageTimestamps : [])
    .map((value) => Number(value))
    .filter((value) => Number.isFinite(value) && value > 0 && (now - value) < windowMs);
}
function getThinkingUsageInfo() {
  const now = Date.now();
  pruneThinkingUsage(now);
  if (isPremiumUser) {
    const shouldRenderTitle = intent.wantsTitle || intent.wantsHello || wantsSite;
    const shouldRenderButtons = intent.wantsButton || wantsTwoButtons;
    return {
      used: 0,
      remaining: Infinity,
      blocked: false,
      waitMs: 0
    };
  }
  const maxQuestions = getThinkingMaxQuestions();
  const used = thinkingUsageTimestamps.length;
  const blocked = used >= maxQuestions;
  const oldest = blocked ? Math.min(...thinkingUsageTimestamps) : 0;
  return {
    used,
    remaining: Math.max(0, maxQuestions - used),
    blocked,
    waitMs: blocked ? Math.max(0, (oldest + getThinkingWindowMs()) - now) : 0
  };
}
function formatMsAsMinSec(ms = 0) {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const mm = String(Math.floor(total / 60)).padStart(2, "0");
  const ss = String(total % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}
function canUseThinkingNow() {
  return !getThinkingUsageInfo().blocked;
}
function hideThinkingLimitBanner() {
  if (thinkingLimitBanner) thinkingLimitBanner.classList.add("hidden");
}
function showThinkingLimitBanner() {
  if (!thinkingLimitBanner) return;
  const usage = getThinkingUsageInfo();
  const remaining = formatMsAsMinSec(usage.waitMs);
  const premiumCopy = isPremiumUser
    ? {
        title: "Thinking sınırsız açık",
        text: "Premium hesapta Thinking için sınır yok."
      }
    : {
        title: "Baluk.ai thinking hakkınız dolmuştur",
        text: `Yeni haklar için ${remaining} bekleyin ya da premiuma yükseltin.`
      };
  if (thinkingLimitTitle) thinkingLimitTitle.textContent = premiumCopy.title;
  if (thinkingLimitText) thinkingLimitText.textContent = premiumCopy.text;
  thinkingLimitBanner.classList.remove("hidden");
}
function updateThinkingPlaceholder() {
  if (!userInput) return;
  if (thinkingModeEnabled) {
    if (thinkingAttachedImageDataUrl) {
      userInput.placeholder = "Görsel yüklendi • metin kapalı";
      return;
    }
    userInput.placeholder = canUseThinkingNow() ? "Derin bir şey sor..." : "Thinking hakkı dolu";
    return;
  }
  userInput.placeholder = webModeEnabled ? "🌐 Web'de ara..." : "Mesajını yaz...";
}
function updateThinkingQuotaUI() {
  const usage = getThinkingUsageInfo();
  const blocked = usage.blocked;
  if (thinkingQuotaText) {
    const quotaCopy = !isAccountLoggedIn
      ? "Thinking için oturum aç"
      : isPremiumUser
        ? "Kota: sınırsız"
        : `Kota: ${usage.remaining}/5 • Yenileme: 30 dk`;
    thinkingQuotaText.textContent = quotaCopy;
  }
  if (thinkingToggle) {
    thinkingToggle.classList.toggle("active", thinkingModeEnabled && !blocked);
    thinkingToggle.classList.toggle("locked", blocked);
    thinkingToggle.disabled = !isAccountLoggedIn;
    thinkingToggle.setAttribute("aria-pressed", thinkingModeEnabled && !blocked ? "true" : "false");
  }
  if (blocked) {
    thinkingModeEnabled = false;
    if (thinkingToggle) thinkingToggle.classList.remove("active");
    showThinkingLimitBanner();
  } else {
    hideThinkingLimitBanner();
  }
  updateThinkingPlaceholder();
  persistThinkingState();
  updateEngineThinkingQuota();
}
function setThinkingMode(enabled) {
  const wantsEnabled = !!enabled;
  if (wantsEnabled && !isAccountLoggedIn) {
    showWarningOverlay("Önce oturum aç.");
    thinkingModeEnabled = false;
    if (thinkingToggle) {
      thinkingToggle.classList.remove("active");
      thinkingToggle.setAttribute("aria-pressed", "false");
    }
    updateThinkingPlaceholder();
    persistThinkingState();
    return false;
  }
  if (wantsEnabled && !canUseThinkingNow()) {
    thinkingModeEnabled = false;
    showThinkingLimitBanner();
    updateThinkingQuotaUI();
    return false;
  }
  thinkingModeEnabled = wantsEnabled;
  if (thinkingToggle) {
    thinkingToggle.classList.toggle("active", thinkingModeEnabled);
    thinkingToggle.setAttribute("aria-pressed", thinkingModeEnabled ? "true" : "false");
  }
  if (thinkingModeEnabled && plusMenu) plusMenu.classList.add("hidden");
  if (plusToggle) plusToggle.setAttribute("aria-label", thinkingModeEnabled ? "Thinking görsel yükle" : "Araçlar");
  if (!thinkingModeEnabled) clearThinkingImageAttachment();
  else setThinkingImageInputMode();
  hideThinkingLimitBanner();
  updateThinkingQuotaUI();
  return thinkingModeEnabled;
}
function consumeThinkingQuotaOrLock() {
  if (!canUseThinkingNow()) {
    showThinkingLimitBanner();
    updateThinkingQuotaUI();
    return false;
  }
  if (!isPremiumUser) {
    pruneThinkingUsage();
    thinkingUsageTimestamps.push(Date.now());
  }
  persistThinkingState();
  updateThinkingQuotaUI();
  return true;
}
function unlockThinkingCooldownWithPassword() {
  const entered = window.prompt("Thinking hakkını açmak için şifreyi gir:");
  if (entered === null) return;
  if (String(entered).trim() !== THINKING_PASSWORD) {
    showWarningOverlay("Şifre yanlış.");
    return;
  }
  thinkingUsageTimestamps = [];
  hideThinkingLimitBanner();
  updateThinkingQuotaUI();
  showWarningOverlay("🔓 Thinking hakkı açıldı.");
}
function showThinkingPromo() {
  if (!thinkingPromoBubble) return;
  thinkingPromoBubble.classList.remove("hidden");
}
function hideThinkingPromo() {
  if (!thinkingPromoBubble) return;
  thinkingPromoBubble.classList.add("hidden");
}
function setThinkingImageInputMode() {
  if (!userInput) return;
  const imageLocked = thinkingModeEnabled && !!thinkingAttachedImageDataUrl;
  userInput.disabled = imageLocked;
  userInput.value = imageLocked ? "" : userInput.value;
  if (imageLocked) userInput.placeholder = "Görsel yüklendi • metin kapalı";
  else updateThinkingPlaceholder();
}
function clearThinkingImageAttachment() {
  thinkingAttachedImageDataUrl = "";
  if (thinkingImageInput) thinkingImageInput.value = "";
  if (thinkingImageThumb) thinkingImageThumb.removeAttribute("src");
  if (thinkingImagePreview) thinkingImagePreview.classList.add("hidden");
  setThinkingImageInputMode();
}
function setThinkingImageAttachment(dataUrl = "") {
  thinkingAttachedImageDataUrl = String(dataUrl || "");
  if (!thinkingAttachedImageDataUrl) {
    clearThinkingImageAttachment();
    return;
  }
  if (thinkingImageThumb) thinkingImageThumb.src = thinkingAttachedImageDataUrl;
  if (thinkingImagePreview) thinkingImagePreview.classList.remove("hidden");
  setThinkingImageInputMode();
}
function readImageAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Görsel okunamadı"));
    reader.readAsDataURL(file);
  });
}
async function attachThinkingImage(file) {
  if (!file) return;
  if (!String(file.type || "").startsWith("image/")) {
    showWarningOverlay("Lütfen bir görsel dosyası seç.");
    return;
  }
  try {
    const dataUrl = await readImageAsDataUrl(file);
    setThinkingImageAttachment(dataUrl);
    showWarningOverlay("📷 Görsel eklendi. Thinking ile direkt gönderebilirsin.");
  } catch {
    showWarningOverlay("Görsel yüklenemedi.");
  }
}
async function processThinkingImageOnly() {
  if (!thinkingAttachedImageDataUrl) return;
  startChatIfNeeded();
  addMessage("🖼️ Görsel gönderildi", "user");
  if (!consumeThinkingQuotaOrLock()) {
    addMessage("Thinking şu an kısa aralık korumasında. Biraz bekleyip tekrar dene.", "bot");
    clearThinkingImageAttachment();
    return;
  }
  const thinking = addThinkingBubble("web");
  updateThinkingStatus(thinking, "Görsel analiz ediliyor...");
  let labels = [];
  try {
    labels = await analyzeLensImageSemantics(thinkingAttachedImageDataUrl);
  } catch {}
  const guessed = labels.length ? labels[0] : "genel bir görsel";
  const suggestions = labels.length ? labels.slice(0, 3) : ["photo", "object", "scene"];
  const links = suggestions.map((q) => `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(q)}`);
  const response = `Bu görseli analiz ettim: en güçlü tahminim "${guessed}". 
Ek eşleşmeler: ${suggestions.join(", ")}.

Google benzer aramalar:
${links.map((l, i) => `${i + 1}) ${l}`).join("\n")}

Not: Thinking görsel akışında şu an yalnızca görsel gönderimi ve görselden çıkarım aktif; metin sorusu bu aşamada kapalı.`;
  fillThinkingBubble(thinking, response, "Görsel analizi hazır ✅");
  clearThinkingImageAttachment();
}
function estimateThinkingDuration(text, analysis = {}) {
  const len = String(text || "").trim().length;
  if (analysis.isGreeting) return 10000 + Math.floor(Math.random() * 4000);
  if (analysis.needsWeb) {
    if (len > 120) return 26000 + Math.floor(Math.random() * 18000);
    return 18000 + Math.floor(Math.random() * 12000);
  }
  if (len > 180) return 24000 + Math.floor(Math.random() * 16000);
  if (len > 80) return 16000 + Math.floor(Math.random() * 14000);
  return 10000 + Math.floor(Math.random() * 9000);
}
const currencyAliasMap = [
  { code: "TRY", aliases: ["tl", "try", "lira", "türk lirası", "turk lirasi", "turkish lira"] },
  { code: "USD", aliases: ["dolar", "usd", "amerika doları", "amerikan doları", "american dollar"] },
  { code: "EUR", aliases: ["euro", "eur", "avro"] },
  { code: "GBP", aliases: ["sterlin", "gbp", "pound"] },
  { code: "BTC", aliases: ["bitcoin", "btc"] }
];
function parseCurrencyConversionRequest(text = "") {
  const l = String(text || "").toLocaleLowerCase("tr-TR");
  const mentions = [];
  currencyAliasMap.forEach((entry) => {
    entry.aliases.forEach((alias) => {
      const regex = alias.includes(" ")
        ? new RegExp(escapeRegex(alias), "ig")
        : new RegExp(`(^|[^a-zçğıöşü0-9])${escapeRegex(alias)}([^a-zçğıöşü0-9]|$)`, "ig");
      let match;
      while ((match = regex.exec(l)) !== null) {
        mentions.push({ code: entry.code, alias, index: match.index });
      }
    });
  });
  mentions.sort((a, b) => a.index - b.index);
  if (!mentions.length) return null;
  let amount = 1;
  let base = null;
  for (const mention of mentions) {
    const amountRegex = new RegExp(`(\\d+(?:[.,]\\d+)?)\\s*${escapeRegex(mention.alias)}`, "i");
    const amountMatch = l.match(amountRegex);
    if (amountMatch) {
      amount = Number(String(amountMatch[1]).replace(",", "."));
      base = mention.code;
      break;
    }
  }
  if (!base) base = mentions[0].code;
  const distinctMentions = mentions.filter((item, idx, arr) => arr.findIndex((x) => x.code === item.code) === idx);
  let target = distinctMentions.find((item) => item.code !== base)?.code || null;
  if (!target && base !== "TRY") target = "TRY";
  if (!target) return null;
  return {
    amount: Number.isFinite(amount) ? amount : 1,
    base,
    target
  };
}
function shouldAutoUseWeb(text = "") {
  const l = String(text || "").toLocaleLowerCase("tr-TR");
  if (webModeEnabled) return true;
  if (!supportsWebModel()) return false;
  if (parseCurrencyConversionRequest(l)) return true;
  return [
    "bugün", "güncel", "şu an", "kaç tl", "kaç para", "kur", "son durum", "hava", "hava durumu",
    "kaç dolar", "kaç euro", "son dakika", "maç", "skor", "fiyat", "borsa"
  ].some((token) => l.includes(token));
}
function analyzeThinkingIntent(text = "") {
  const clean = String(text || "").trim();
  const lower = clean.toLocaleLowerCase("tr-TR");
  const wordCount = clean.split(/\s+/).filter(Boolean).length;
  const isGreeting = hasAny(lower, ["merhaba", "selam", "slm", "hey", "sa"]);
  const needsWeb = shouldAutoUseWeb(clean);
  return {
    lower,
    clean,
    wordCount,
    isGreeting,
    needsWeb,
    currencyRequest: parseCurrencyConversionRequest(clean),
    intentSummary: needsWeb ? "güncel veri isteyen soru" : (isGreeting ? "karşılama / sohbet başlangıcı" : "açıklama ve yorum isteyen soru")
  };
}
function getThinkingPlan(text, analysis, webData = null) {
  const snippet = String(text || "").trim().slice(0, 72) || "isteğin";
  const sourceButtons = (webData?.sources || []).slice(0, 3);
  const steps = [
    {
      title: "Düşünüyorum...",
      note: `"${snippet}" isteğini önce sakin sakin çözümlüyorum ve ne sorduğunu netleştiriyorum.`
    },
    {
      title: "Düşünüyorum...",
      note: `İstek tipi: ${analysis.intentSummary}. Hedefin kısa cevap değil, dolu bir yanıt istemek gibi görünüyor.`
    },
    {
      title: "Düşünüyorum...",
      note: "Hazır kalıp dökmek yerine, hangi bilgiyi daha sade hangi bilgiyi daha detaylı anlatmam gerektiğini ayarlıyorum."
    }
  ];
  if (analysis.needsWeb) {
    steps.push({
      title: "Web'de arıyorum...",
      note: "Bu soruyu doğru cevaplamak için güncel kaynağa bakmam lazım; eski ezber bilgiyle yetinmiyorum.",
      sources: sourceButtons
    });
    if (sourceButtons.length) {
      steps.push({
        title: "Web'de arıyorum...",
        note: "Kaynakça adaylarını topladım; öne çıkan bağlantıları aşağıya ekledim ve hangilerinin daha güvenilir olduğuna bakıyorum.",
        sources: sourceButtons
      });
    }
    steps.push({
      title: "Bilgiyi kıyaslıyorum...",
      note: "Farklı kaynakların anlattıklarını ortak noktada birleştiriyorum ki yanıt daha temiz olsun."
    });
    steps.push({
      title: "Yanıtı örüyorum...",
      note: "Kısa web özetini kendi yorumumla birleştiriyorum ve seni yormayacak bir akışa dönüştürüyorum."
    });
  } else {
    steps.push({
      title: "Düşünüyorum...",
      note: "Hazır kalıp kullanmadan, sorunun niyetine göre kapsamı genişletiyorum."
    });
    steps.push({
      title: "Düşünüyorum...",
      note: "Cevapta önce temel anlamı, sonra biraz bağlamı, sonra da işine yarayacak devam kapısını bırakıyorum."
    });
    steps.push({
      title: "Yanıtı örüyorum...",
      note: "Daha uzun, daha tane tane ve daha sindirilebilir bir cevap hazırlıyorum."
    });
  }
  return steps;
}
function openLensPanel() {
  if (!lensPanel) return;
  lensPanel.classList.remove("hidden");
  if (lensResults) lensResults.classList.add("hidden");
  if (lensStatus) {
    lensStatus.classList.remove("hidden");
    lensStatus.textContent = "baluk.ai • lens hazır, görsel bekleniyor";
  }
}
function closeLensPanel() {
  if (!lensPanel) return;
  lensPanel.classList.add("hidden");
}
function setLensMode(enabled) {
  if (enabled && !isAccountLoggedIn) {
    lensModeEnabled = false;
    if (balukLensMode) balukLensMode.checked = false;
    showWarningOverlay("Baluk.lens için önce oturum aç.");
    return;
  }
  if (enabled && testModeEnabled) setTestMode(false);
  if (enabled && !supportsLensModel()) {
    lensModeEnabled = false;
    if (balukLensMode) balukLensMode.checked = false;
    showWarningOverlay("Baluk.lens yalnızca baluk-1.9 ve üstü modellerde kullanılabilir.");
    return;
  }
  lensModeEnabled = !!enabled;
  if (lensModeEnabled) {
    if (webSearchMode) { webSearchMode.checked = false; setWebMode(false); }
    if (balleMode) { balleMode.checked = false; setBalleMode(false); }
    openLensPanel();
  } else {
    closeLensPanel();
  }
  updateComposerModeUI();
  if (!supportsVoiceModel()) closeVoiceMode();
}
function setTestMode(enabled) {
  if (enabled && !isAccountLoggedIn) {
    testModeEnabled = false;
    if (testModeToggle) testModeToggle.checked = false;
    showWarningOverlay("Test modu için önce oturum aç.");
    return;
  }
  if (enabled && !supportsTestModeModel()) {
    testModeEnabled = false;
    if (testModeToggle) testModeToggle.checked = false;
    showWarningOverlay("Test modu yalnızca baluk-2.1 ve üstü modellerde kullanılabilir.");
    return;
  }
  testModeEnabled = !!enabled;
  if (testModeToggle) testModeToggle.checked = testModeEnabled;
  if (testModeEnabled) {
    if (webSearchMode) { webSearchMode.checked = false; setWebMode(false); }
    if (balukLensMode) { balukLensMode.checked = false; setLensMode(false); }
  }
}
function getTestSubjectFromText(textLower = "") {
  const l = String(textLower || "").toLocaleLowerCase("tr-TR");
  for (const [subject, keys] of Object.entries(testModeSubjectKeywords)) {
    if (keys.some((k) => l.includes(k))) return subject;
  }
  return null;
}
function shouldCreateTest(text = "") {
  if (!supportsTestModeModel()) return null;
  const l = String(text || "").toLocaleLowerCase("tr-TR");
  const wants = /(test|deneme|quiz|sınav|sinav)/.test(l) || /test\s*oluştur|test\s*hazırla|soru\s*hazırla|soru\s*sor/.test(l);
  if (!wants && !testModeEnabled) return null;
  return getTestSubjectFromText(l) || "matematik";
}
function renderTestQuestionCard(subject, question) {
  startChatIfNeeded();
  const subjectLabelMap = { matematik: "Matematik", turkce: "Türkçe", sosyal: "Sosyal", fen: "Fen" };
  const node = document.createElement('div');
  node.className = 'msg bot test-question-card';
  const choices = (question.choices || []).map((choice, i) => {
    const letter = String.fromCharCode(65 + i);
    return `<button type="button" class="test-option-btn" data-index="${i}"><span class="test-opt-letter">${letter})</span><span>${choice}</span></button>`;
  }).join('');
  node.innerHTML = `
    <div class="test-head">📝 ${subjectLabelMap[subject] || "Test"} Testi</div>
    <div class="test-question">${question.q}</div>
    <div class="test-options">${choices}</div>
    <div class="test-feedback hidden" aria-live="polite"></div>
  `;
  const feedback = node.querySelector('.test-feedback');
  node.querySelectorAll('.test-option-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!feedback) return;
      const picked = Number(btn.dataset.index || '-1');
      const ok = picked === Number(question.answer);
      node.querySelectorAll('.test-option-btn').forEach((b, index) => {
        b.disabled = true;
        b.classList.toggle('correct', index === Number(question.answer));
        if (index === picked && !ok) b.classList.add('wrong');
      });
      feedback.classList.remove('hidden');
      feedback.classList.toggle('correct', ok);
      feedback.classList.toggle('wrong', !ok);
      feedback.textContent = ok
        ? `✅ Doğru! ${question.explain}`
        : `❌ Yanlış. Doğru cevap: ${String.fromCharCode(65 + Number(question.answer))}) ${question.choices[question.answer]}. ${question.explain}`;
    });
  });
  chat.appendChild(node);
  chat.scrollTop = chat.scrollHeight;
}
function runTestModeFlow(text, { voice = false } = {}) {
  if (!supportsTestModeModel()) return false;
  const subject = shouldCreateTest(text);
  if (!subject) return false;
  const pool = testModeQuestions[subject] || testModeQuestions.matematik;
  const question = chooseRandom(pool);
  const totalDelay = 5000 + Math.floor(Math.random() * 5001);
  const thinking = addThinkingBubble('test');
  updateThinkingStatus(thinking, 'Test hazırlanıyor • konu haritası çıkarılıyor...');
  setTimeout(() => updateThinkingStatus(thinking, 'Soru havuzu taranıyor • zorluk dengeleniyor...'), Math.round(totalDelay * 0.24));
  setTimeout(() => updateThinkingStatus(thinking, 'Renkli test efektleri hazırlanıyor • şıklar optimize ediliyor...'), Math.round(totalDelay * 0.5));
  setTimeout(() => updateThinkingStatus(thinking, 'Son kontroller • değerlendirme motoru ayarlanıyor...'), Math.round(totalDelay * 0.78));
  setTimeout(() => {
    fillThinkingBubble(thinking, `${(subject || 'matematik').toUpperCase()} testi hazır ✅ İlk soruyu aşağıya bıraktım.`, 'Test hazırlandı • cevaplayabilirsin ✅');
    renderTestQuestionCard(subject, question);
    if (voice && voiceModeActive) {
      speakVoiceResponse(`${subject} testi hazır. Soruyu ekrana bıraktım, şıklardan birini seçebilirsin.`);
    }
  }, totalDelay);
  return true;
}

function drawLensCanvas() {
  if (!lensCanvas || !lensImageDataUrl) return;
  const ctx = lensCanvas.getContext("2d");
  const img = new Image();
  img.onload = () => {
    const maxW = Math.min(780, Math.max(280, (lensCanvasWrap?.clientWidth || 520) - 10));
    const ratio = img.height / img.width;
    lensCanvas.width = maxW;
    lensCanvas.height = Math.round(maxW * ratio);
    ctx.clearRect(0, 0, lensCanvas.width, lensCanvas.height);
    ctx.drawImage(img, 0, 0, lensCanvas.width, lensCanvas.height);
    const pulse = lensAnalyzing ? (Math.sin(Date.now() / 220) + 1) / 2 : 0.35;
    if (lensSelection) {
      const { x, y, w, h } = lensSelection;
      const glowAlpha = lensAnalyzing ? (0.16 + pulse * 0.24) : 0.2;
      ctx.strokeStyle = lensAnalyzing ? "#a855f7" : "#8b5cf6";
      ctx.lineWidth = lensAnalyzing ? 2.8 : 2;
      ctx.setLineDash([8, 5]);
      ctx.shadowColor = "rgba(168,85,247,.75)";
      ctx.shadowBlur = lensAnalyzing ? 18 : 8;
      ctx.strokeRect(x, y, w, h);
      ctx.setLineDash([]);
      ctx.shadowBlur = 0;
      ctx.fillStyle = `rgba(139,92,246,${glowAlpha.toFixed(3)})`;
      ctx.fillRect(x, y, w, h);
      if (lensAnalyzing) {
        const bandX = x + ((Date.now() / 4) % (w + 80)) - 80;
        const grd = ctx.createLinearGradient(bandX, y, bandX + 80, y + h);
        grd.addColorStop(0, "rgba(255,255,255,0)");
        grd.addColorStop(0.5, "rgba(196,181,253,.38)");
        grd.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = grd;
        ctx.fillRect(x, y, w, h);
      }
    } else if (lensAnalyzing) {
      const fullAlpha = 0.12 + pulse * 0.12;
      ctx.strokeStyle = "rgba(168,85,247,.65)";
      ctx.lineWidth = 3;
      ctx.strokeRect(2, 2, lensCanvas.width - 4, lensCanvas.height - 4);
      ctx.fillStyle = `rgba(139,92,246,${fullAlpha.toFixed(3)})`;
      ctx.fillRect(0, 0, lensCanvas.width, lensCanvas.height);
      const bandX = ((Date.now() / 4) % (lensCanvas.width + 120)) - 120;
      const grd = ctx.createLinearGradient(bandX, 0, bandX + 120, lensCanvas.height);
      grd.addColorStop(0, "rgba(255,255,255,0)");
      grd.addColorStop(0.5, "rgba(196,181,253,.35)");
      grd.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, lensCanvas.width, lensCanvas.height);
    }
  };
  img.src = lensImageDataUrl;
}
function loadLensFile(file) {
  if (!file || !file.type.startsWith("image/")) {
    showWarningOverlay("Lütfen görsel dosyası seç (png, jpg, webp...).");
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    lensImageDataUrl = String(reader.result || "");
    lensSelection = null;
    if (lensCanvasWrap) lensCanvasWrap.classList.remove("hidden");
    if (lensStatus) {
      lensStatus.classList.remove("hidden");
      lensStatus.textContent = "Görsel yüklendi • baluk.ai görseli anlamlandırıyor...";
    }
    drawLensCanvas();
    lensAiLabels = [];
    analyzeLensImageSemantics(lensImageDataUrl)
      .then((labels) => {
        lensAiLabels = labels;
        if (lensStatus && labels.length) {
          lensStatus.textContent = `Görsel algılandı: ${labels.join(", ")} • istersen bölge seçip analiz et.`;
        } else if (lensStatus) {
          lensStatus.textContent = "Görsel yüklendi • istersen bölge seçip analiz et.";
        }
      })
      .catch(() => {
        if (lensStatus) lensStatus.textContent = "Görsel yüklendi • istersen bölge seçip analiz et.";
      });
  };
  reader.readAsDataURL(file);
}
function normalizeRect(start, end) {
  const x = Math.min(start.x, end.x);
  const y = Math.min(start.y, end.y);
  const w = Math.abs(end.x - start.x);
  const h = Math.abs(end.y - start.y);
  return { x, y, w, h };
}
function lensStatusTick(messages, stepMs = 1400, onStep = null) {
  if (!lensStatus) return () => {};
  let i = 0;
  lensStatus.textContent = messages[0];
  if (typeof onStep === "function") onStep(messages[0], 0);
  const timer = setInterval(() => {
    i += 1;
    if (i >= messages.length) {
      clearInterval(timer);
      return;
    }
    lensStatus.textContent = messages[i];
    if (typeof onStep === "function") onStep(messages[i], i);
  }, stepMs);
  return () => clearInterval(timer);
}
function loadExternalScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[data-lens-lib="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset.lensLib = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Script yüklenemedi: ${src}`));
    document.head.appendChild(script);
  });
}
async function ensureLensClassifier() {
  if (lensClassifierReady && lensModelRef) return lensModelRef;
  if (lensClassifierLoading) {
    while (lensClassifierLoading) {
      await new Promise((r) => setTimeout(r, 120));
    }
    return lensModelRef;
  }
  lensClassifierLoading = true;
  try {
    await loadExternalScript("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.22.0/dist/tf.min.js");
    await loadExternalScript("https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@2.1.1/dist/mobilenet.min.js");
    if (!window.mobilenet) throw new Error("mobilenet yüklenemedi");
    lensModelRef = await window.mobilenet.load({ version: 2, alpha: 1.0 });
    lensClassifierReady = true;
    return lensModelRef;
  } catch {
    lensClassifierReady = false;
    lensModelRef = null;
    return null;
  } finally {
    lensClassifierLoading = false;
  }
}
const visualConceptAliases = [
  { key: "sırt çantası", aliases: ["backpack", "bookbag", "rucksack", "knapsack", "bag"] },
  { key: "masa", aliases: ["table", "desk", "dining table", "coffee table"] },
  { key: "sandalye", aliases: ["chair", "armchair", "seat", "stool"] },
  { key: "kalem", aliases: ["pen", "pencil", "marker", "stylus"] },
  { key: "defter", aliases: ["notebook", "notepad", "exercise book"] },
  { key: "kitap", aliases: ["book", "book jacket", "bookstore", "library"] },
  { key: "telefon", aliases: ["phone", "cellphone", "cell phone", "smartphone", "mobile"] },
  { key: "bilgisayar", aliases: ["computer", "laptop", "notebook computer", "desktop"] },
  { key: "ekran", aliases: ["monitor", "screen", "display", "television"] },
  { key: "klavye", aliases: ["keyboard", "keypad"] },
  { key: "mouse", aliases: ["mouse", "computer mouse", "trackball"] },
  { key: "kulaklık", aliases: ["headphone", "headset", "earphone", "earbud"] },
  { key: "hoparlör", aliases: ["speaker", "loudspeaker", "subwoofer"] },
  { key: "lamba", aliases: ["lamp", "light", "lantern", "spotlight"] },
  { key: "priz", aliases: ["socket", "outlet", "plug point"] },
  { key: "kablo", aliases: ["cable", "wire", "cord", "usb cable", "ethernet"] },
  { key: "su şişesi", aliases: ["water bottle", "bottle", "flask", "thermos"] },
  { key: "bardak", aliases: ["cup", "mug", "glass", "goblet"] },
  { key: "tabak", aliases: ["plate", "dish", "platter"] },
  { key: "çatal", aliases: ["fork"] },
  { key: "bıçak", aliases: ["knife", "blade"] },
  { key: "kaşık", aliases: ["spoon", "ladle"] },
  { key: "dolap", aliases: ["cabinet", "closet", "wardrobe", "cupboard"] },
  { key: "yatak", aliases: ["bed", "bunk"] },
  { key: "yastık", aliases: ["pillow", "cushion"] },
  { key: "battaniye", aliases: ["blanket", "quilt"] },
  { key: "perde", aliases: ["curtain", "blind", "drape"] },
  { key: "halı", aliases: ["carpet", "rug", "mat"] },
  { key: "ayna", aliases: ["mirror"] },
  { key: "kapı", aliases: ["door", "doorway"] },
  { key: "pencere", aliases: ["window"] },
  { key: "duvar", aliases: ["wall"] },
  { key: "merdiven", aliases: ["stairs", "staircase", "ladder", "escalator"] },
  { key: "asansör", aliases: ["elevator", "lift"] },
  { key: "araba", aliases: ["car", "automobile", "vehicle", "sedan", "suv"] },
  { key: "bisiklet", aliases: ["bicycle", "bike", "cycle", "mountain bike"] },
  { key: "motosiklet", aliases: ["motorcycle", "motorbike", "scooter"] },
  { key: "otobüs", aliases: ["bus", "coach"] },
  { key: "tren", aliases: ["train", "locomotive", "subway"] },
  { key: "uçak", aliases: ["airplane", "plane", "aircraft", "jet"] },
  { key: "gemi", aliases: ["ship", "boat", "vessel", "ferry"] },
  { key: "roket", aliases: ["rocket", "spacecraft"] },
  { key: "televizyon", aliases: ["television", "tv", "tvmonitor"] },
  { key: "kumanda", aliases: ["remote", "remote control"] },
  { key: "klima", aliases: ["air conditioner", "ac unit"] },
  { key: "vantilatör", aliases: ["fan", "ceiling fan"] },
  { key: "ısıtıcı", aliases: ["heater", "radiator", "stove"] },
  { key: "buzdolabı", aliases: ["refrigerator", "fridge"] },
  { key: "fırın", aliases: ["oven"] },
  { key: "mikrodalga", aliases: ["microwave"] },
  { key: "kettle", aliases: ["kettle", "teapot"] },
  { key: "kahve makinesi", aliases: ["coffee maker", "espresso machine"] },
  { key: "blender", aliases: ["blender", "mixer"] },
  { key: "ütü", aliases: ["iron"] },
  { key: "çamaşır makinesi", aliases: ["washing machine", "washer"] },
  { key: "bulaşık makinesi", aliases: ["dishwasher"] },
  { key: "süpürge", aliases: ["vacuum", "vacuum cleaner"] },
  { key: "çöp kovası", aliases: ["trash can", "garbage bin", "wastebasket"] },
  { key: "sabun", aliases: ["soap"] },
  { key: "şampuan", aliases: ["shampoo"] },
  { key: "diş macunu", aliases: ["toothpaste"] },
  { key: "diş fırçası", aliases: ["toothbrush"] },
  { key: "havlu", aliases: ["towel"] },
  { key: "terlik", aliases: ["slipper", "flip flop"] },
  { key: "ayakkabı", aliases: ["shoe", "sneaker", "boot", "sandal"] },
  { key: "pantolon", aliases: ["pants", "trousers", "jeans"] },
  { key: "tişört", aliases: ["t-shirt", "shirt", "tee"] },
  { key: "ceket", aliases: ["jacket", "coat"] },
  { key: "şapka", aliases: ["hat", "cap", "beanie"] },
  { key: "saat", aliases: ["watch", "clock", "smartwatch"] },
  { key: "gözlük", aliases: ["glasses", "sunglasses", "spectacles", "goggles"] },
  { key: "valiz", aliases: ["suitcase", "luggage"] },
  { key: "kimlik kartı", aliases: ["id card", "identity card", "card"] },
  { key: "kredi kartı", aliases: ["credit card", "bank card", "debit card"] },
  { key: "anahtar", aliases: ["key", "keyring"] },
  { key: "oyuncak araba", aliases: ["toy car", "model car"] },
  { key: "lego", aliases: ["lego", "building block"] },
  { key: "puzzle", aliases: ["puzzle", "jigsaw"] },
  { key: "top", aliases: ["ball", "soccer ball", "basketball", "volleyball", "tennis ball"] },
  { key: "oyun konsolu", aliases: ["game console", "console"] },
  { key: "joystick", aliases: ["joystick", "gamepad", "controller"] },
  { key: "kamera", aliases: ["camera", "camcorder"] },
  { key: "tripod", aliases: ["tripod"] },
  { key: "lens", aliases: ["lens", "camera lens"] },
  { key: "drone", aliases: ["drone", "quadcopter"] },
  { key: "mikrofon", aliases: ["microphone", "mic"] },
  { key: "yazıcı", aliases: ["printer"] },
  { key: "tarayıcı", aliases: ["scanner"] },
  { key: "kağıt", aliases: ["paper", "sheet"] },
  { key: "makas", aliases: ["scissors"] },
  { key: "cetvel", aliases: ["ruler"] },
  { key: "silgi", aliases: ["eraser", "rubber"] },
  { key: "fırça", aliases: ["brush", "paintbrush"] },
  { key: "tuval", aliases: ["canvas"] },
  { key: "tablo", aliases: ["painting", "picture frame", "artwork"] },
  { key: "koltuk", aliases: ["sofa", "couch", "loveseat"] },
  { key: "şişe", aliases: ["bottle", "glass bottle", "plastic bottle"] },
  { key: "kutu", aliases: ["box", "carton", "container", "case"] },
  { key: "oyuncak", aliases: ["toy", "doll", "action figure", "figure"] },
  { key: "termos", aliases: ["thermos", "insulated bottle"] },
  { key: "anahtar", aliases: ["key", "keychain", "keyring"] },
  { key: "kilit", aliases: ["lock", "padlock"] },
  { key: "cüzdan", aliases: ["wallet", "purse"] },
  { key: "para", aliases: ["money", "cash", "coin", "banknote"] },
  { key: "kart", aliases: ["card", "id card", "credit card", "bank card"] },
  { key: "televizyon kumandası", aliases: ["remote control", "tv remote"] },
  { key: "ocak", aliases: ["stove", "cooktop", "gas stove"] },
  { key: "tencere", aliases: ["pot", "cooking pot", "stockpot"] },
  { key: "tava", aliases: ["pan", "frying pan", "skillet"] },
  { key: "dondurucu", aliases: ["freezer", "deep freezer"] },
  { key: "ütü masası", aliases: ["ironing board"] },
  { key: "jel", aliases: ["gel", "hair gel"] },
  { key: "deodorant", aliases: ["deodorant", "roll-on"] },
  { key: "parfüm", aliases: ["perfume", "fragrance"] },
  { key: "çöp poşeti", aliases: ["trash bag", "garbage bag"] },
  { key: "masa örtüsü", aliases: ["tablecloth"] },
  { key: "paspas", aliases: ["mop", "doormat", "floor mat"] },
  { key: "kova", aliases: ["bucket", "pail"] },
  { key: "sünger", aliases: ["sponge"] },
  { key: "temizlik bezi", aliases: ["cleaning cloth", "rag", "microfiber cloth"] },
  { key: "raf", aliases: ["shelf", "rack"] },
  { key: "kitaplık", aliases: ["bookcase", "bookshelf"] },
  { key: "sehpa", aliases: ["side table", "coffee table"] },
  { key: "avize", aliases: ["chandelier"] },
  { key: "tavan", aliases: ["ceiling"] },
  { key: "zemin", aliases: ["floor", "ground"] },
  { key: "asfalt", aliases: ["asphalt", "road"] },
  { key: "kaldırım", aliases: ["sidewalk", "pavement"] },
  { key: "bank", aliases: ["bench", "park bench"] },
  { key: "park", aliases: ["park", "playground"] },
  { key: "ağaç", aliases: ["tree"] },
  { key: "çiçek", aliases: ["flower"] },
  { key: "çim", aliases: ["grass", "lawn"] },
  { key: "şemsiye", aliases: ["umbrella"] },
  { key: "atkı", aliases: ["scarf"] },
  { key: "eldiven", aliases: ["glove", "mitt"] },
  { key: "bot", aliases: ["boot"] },
  { key: "çadır", aliases: ["tent"] },
  { key: "çekiç", aliases: ["hammer"] },
  { key: "tornavida", aliases: ["screwdriver"] },
  { key: "pense", aliases: ["pliers"] },
  { key: "vida", aliases: ["screw", "bolt"] },
  { key: "matkap", aliases: ["drill", "power drill"] },
  { key: "kalemtıraş", aliases: ["sharpener", "pencil sharpener"] },
  { key: "ajanda", aliases: ["planner", "agenda"] },
  { key: "zarf", aliases: ["envelope"] },
  { key: "mektup", aliases: ["letter"] },
  { key: "dosya", aliases: ["file", "folder"] },
  { key: "projektör", aliases: ["projector", "beamer"] },
  { key: "mikrofon standı", aliases: ["microphone stand", "mic stand"] },
  { key: "gitar", aliases: ["guitar"] },
  { key: "piyano", aliases: ["piano", "keyboard instrument"] },
  { key: "davul", aliases: ["drum", "drum set"] },
  { key: "flüt", aliases: ["flute"] },
  { key: "keman", aliases: ["violin"] },
  { key: "oyun konsolu", aliases: ["game console", "console", "playstation", "xbox"] },
  { key: "gamepad", aliases: ["gamepad", "controller", "joystick"] },
  { key: "VR gözlük", aliases: ["vr headset", "virtual reality headset"] },
  { key: "modem", aliases: ["modem"] },
  { key: "router", aliases: ["router", "wifi router"] },
  { key: "internet kablosu", aliases: ["ethernet cable", "network cable", "fiber cable"] },
  { key: "adaptör", aliases: ["adapter", "charger adapter"] },
  { key: "powerbank", aliases: ["powerbank", "power bank"] },
  { key: "USB", aliases: ["usb drive", "usb stick", "flash drive"] },
  { key: "CD", aliases: ["cd", "compact disc"] },
  { key: "DVD", aliases: ["dvd"] },
  { key: "lastik", aliases: ["tire", "tyre"] },
  { key: "jant", aliases: ["rim", "wheel rim"] },
  { key: "far", aliases: ["headlight"] },
  { key: "stop lambası", aliases: ["tail light", "stoplight"] },
  { key: "silecek", aliases: ["wiper", "windshield wiper"] },
  { key: "kask", aliases: ["helmet"] },
  { key: "dizlik", aliases: ["knee pad", "knee guard"] },
  { key: "dirseklik", aliases: ["elbow pad", "elbow guard"] },
  { key: "okul çantası", aliases: ["school bag", "school backpack"] },
  { key: "kalem kutusu", aliases: ["pencil case"] }
];
function normalizeVisualText(value = "") {
  return String(value || "").toLocaleLowerCase("tr-TR")
    .replace(/[’']/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
function mapVisualConcepts(rawLabels = []) {
  const normalized = (Array.isArray(rawLabels) ? rawLabels : [])
    .map((label) => normalizeVisualText(label))
    .filter(Boolean);
  if (!normalized.length) return [];
  const mapped = [];
  for (const item of visualConceptAliases) {
    const hit = item.aliases.some((alias) => {
      const a = normalizeVisualText(alias);
      return normalized.some((label) => label.includes(a));
    });
    if (hit) mapped.push(item.key);
  }
  normalized.forEach((label) => {
    if (!mapped.includes(label)) mapped.push(label);
  });
  return mapped.slice(0, 6);
}
async function analyzeLensImageSemantics(dataUrl) {
  if (!dataUrl) return [];
  const model = await ensureLensClassifier();
  if (!model) return [];
  const img = new Image();
  img.crossOrigin = "anonymous";
  await new Promise((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = () => reject(new Error("Görsel çözümleme başarısız"));
    img.src = dataUrl;
  });
  const predictions = await model.classify(img, 8);
  const rawLabels = predictions
    .filter((p) => Number(p.probability) >= 0.08)
    .map((p) => String(p.className || "").split(",")[0].trim().toLowerCase())
    .filter(Boolean);
  return mapVisualConcepts(rawLabels);
}
function guessLensQuery() {
  if (lensAiLabels.length) return lensAiLabels.join(" ");
  if (!lensImageDataUrl) return "görsel";
  const fromName = (lensFileInput?.files?.[0]?.name || "").toLowerCase().replace(/\.[a-z0-9]+$/, "").replace(/[_-]+/g, " ").trim();
  const fallbackTerms = ["object", "nature", "technology", "animal", "city"];
  return fromName || chooseRandom(fallbackTerms);
}
function isMobileLensViewport() {
  return window.matchMedia("(max-width: 760px)").matches;
}
function startLensDrawTicker() {
  if (lensDrawTicker) clearInterval(lensDrawTicker);
  lensDrawTicker = setInterval(() => {
    if (lensAnalyzing) drawLensCanvas();
  }, 120);
}
function stopLensDrawTicker() {
  if (lensDrawTicker) clearInterval(lensDrawTicker);
  lensDrawTicker = null;
}
async function runLensAnalysis() {
  if (!lensImageDataUrl) {
    showWarningOverlay("Önce bir fotoğraf yüklemelisin.");
    return;
  }
  if (lensResults) {
    lensResults.classList.add("hidden");
    lensResults.innerHTML = "";
  }
  if (lensStatus) {
    lensStatus.classList.remove("hidden");
    lensStatus.classList.add("lens-status-live");
  }
  startChatIfNeeded();
  const thinking = addThinkingBubble("web");
  updateThinkingStatus(thinking, "Baluk.ai • lens düşünüyor...");
  lensAnalyzing = true;
  if (lensPanel) lensPanel.classList.add("lens-analyzing");
  if (lensCanvasWrap) lensCanvasWrap.classList.add("lens-canvas-live");
  startLensDrawTicker();
  drawLensCanvas();
  const stopTicker = lensStatusTick([
    "baluk.ai • görsel içeriğini analiz ediyor...",
    "baluk.ai • web'de benzerlerini tarıyor...",
    "baluk.ai • seçilen alanı derin analiz ediyor...",
    "baluk.ai • eşleşen sonuçları derliyor...",
    "baluk.ai • son rötuşlar yapılıyor..."
  ], 1100, (msg) => updateThinkingStatus(thinking, msg));
  const waitMs = supportsLensModel() ? 5200 : 9000;
  await new Promise((r) => setTimeout(r, waitMs));
  const q = guessLensQuery();
  if (lensStatus && !lensSelection) lensStatus.textContent = "baluk.ai • özel alan seçilmedi, tüm görsel analiz ediliyor...";
  const links = [
    { title: `${q} • Google Görseller`, link: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(q + " similar")}` },
    { title: `${q} • Bing Images`, link: `https://www.bing.com/images/search?q=${encodeURIComponent(q + " similar")}` },
    { title: `${q} • Unsplash`, link: `https://unsplash.com/s/photos/${encodeURIComponent(q)}` },
    { title: `${q} • Pexels`, link: `https://www.pexels.com/search/${encodeURIComponent(q)}/` }
  ];
  stopTicker();
  lensAnalyzing = false;
  stopLensDrawTicker();
  if (lensPanel) lensPanel.classList.remove("lens-analyzing");
  if (lensCanvasWrap) lensCanvasWrap.classList.remove("lens-canvas-live");
  drawLensCanvas();
  if (lensStatus) {
    lensStatus.classList.remove("lens-status-live");
    lensStatus.textContent = "baluk.ai • analiz tamamlandı, 4 benzer görsel kaynağı bulundu ✅";
  }
  if (lensResults) {
    lensResults.innerHTML = `
      <h4>📸 Baluk.lens benzer görseller</h4>
      <ol>${links.map((i) => `<li><a href="${i.link}" target="_blank" rel="noopener noreferrer">${i.title}</a></li>`).join("")}</ol>
      <p>Not: Sonuçlar benzerlik önerisidir; birebir aynı görsel garantisi vermez.</p>
    `;
    lensResults.classList.remove("hidden");
  }
  const finalText = `Baluk.lens analizi tamamlandı. İşaretlediğin bölge/görsel için 4 güçlü kaynak buldum:
${links.map((i, idx) => `${idx + 1}) ${i.title} → ${i.link}`).join("\n")}`;
  fillThinkingBubble(thinking, finalText, "Baluk.ai • lens analizi bitti ✅");
}
async function fetchWebResults(query) {
  const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1&skip_disambig=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Web isteği başarısız");
  const data = await res.json();
  const out = [];
  if (data.AbstractURL) {
    out.push({ title: data.Heading || query, description: data.AbstractText || "Öne çıkan sonuç", link: data.AbstractURL });
  }
  const pushTopic = (topic) => {
    if (!topic) return;
    if (topic.FirstURL && topic.Text) {
      const title = topic.Text.split(" - ")[0].trim() || topic.Text.slice(0, 64);
      out.push({ title, description: topic.Text, link: topic.FirstURL });
    }
    if (Array.isArray(topic.Topics)) topic.Topics.forEach(pushTopic);
  };
  (data.RelatedTopics || []).forEach(pushTopic);
  const uniq = [];
  const seen = new Set();
  out.forEach((i) => {
    if (!i.link || seen.has(i.link)) return;
    seen.add(i.link);
    uniq.push(i);
  });
  if (uniq.length < 3) {
    const extra = [
      { title: `DuckDuckGo: ${query}`, description: "DuckDuckGo üzerinde tam sonuç sayfası", link: `https://duckduckgo.com/?q=${encodeURIComponent(query)}` },
      { title: `Wikipedia: ${query}`, description: "Wikipedia arama sonucu", link: `https://tr.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}` },
      { title: `Google: ${query}`, description: "Alternatif arama sonucu", link: `https://www.google.com/search?q=${encodeURIComponent(query)}` }
    ];
    extra.forEach((i) => {
      if (!seen.has(i.link)) {
        seen.add(i.link);
        uniq.push(i);
      }
    });
  }
  return uniq.slice(0, 12);
}
function isWikipediaLink(link) {
  return /https?:\/\/(?:[a-z]{2,3}\.)?wikipedia\.org\//i.test(String(link || ""));
}
function extractWikiTitleFromLink(link) {
  try {
    const u = new URL(link);
    const wikiMatch = u.pathname.match(/\/wiki\/([^/?#]+)/i);
    if (wikiMatch && wikiMatch[1]) return decodeURIComponent(wikiMatch[1]).replace(/_/g, " ");
    const directSearch = u.searchParams.get("search") || u.searchParams.get("title");
    if (directSearch) return directSearch;
  } catch {}
  return null;
}
function trimToWordWindow(text, minWords = 500, maxWords = 1000) {
  const words = String(text || "").replace(/\s+/g, " ").trim().split(" ").filter(Boolean);
  if (!words.length) return "";
  if (words.length <= maxWords) return words.join(" ");
  return `${words.slice(0, maxWords).join(" ")}...`;
}
async function searchWikipediaTitle(query) {
  const endpoints = [
    `https://tr.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(query)}&limit=1&namespace=0&format=json&origin=*`,
    `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(query)}&limit=1&namespace=0&format=json&origin=*`
  ];
  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint);
      if (!res.ok) continue;
      const data = await res.json();
      const title = data?.[1]?.[0];
      const link = data?.[3]?.[0];
      if (title && link) return { title, link };
    } catch {}
  }
  return null;
}
async function fetchWikipediaLongExcerpt(link) {
  if (!isWikipediaLink(link)) return null;
  const title = extractWikiTitleFromLink(link);
  if (!title) return null;
  const endpoints = [
    `https://tr.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=1&exsectionformat=plain&titles=${encodeURIComponent(title)}&format=json&origin=*`,
    `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=1&exsectionformat=plain&titles=${encodeURIComponent(title)}&format=json&origin=*`
  ];
  for (const ep of endpoints) {
    try {
      const res = await fetch(ep);
      if (!res.ok) continue;
      const data = await res.json();
      const pages = data?.query?.pages || {};
      const firstPage = Object.values(pages)[0];
      const extract = String(firstPage?.extract || "").replace(/\s+/g, " ").trim();
      if (!extract) continue;
      const excerpt = trimToWordWindow(extract, 500, 1000);
      if (excerpt) return excerpt;
    } catch {}
  }
  return null;
}
async function fetchWikipediaShortSummary(query) {
  const titleInfo = await searchWikipediaTitle(query);
  if (!titleInfo?.title) return null;
  const endpoints = [
    `https://tr.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=1&exsectionformat=plain&titles=${encodeURIComponent(titleInfo.title)}&format=json&origin=*`,
    `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=1&exsectionformat=plain&titles=${encodeURIComponent(titleInfo.title)}&format=json&origin=*`
  ];
  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint);
      if (!res.ok) continue;
      const data = await res.json();
      const pages = data?.query?.pages || {};
      const firstPage = Object.values(pages)[0];
      const extract = String(firstPage?.extract || "").replace(/\s+/g, " ").trim();
      if (!extract) continue;
      return {
        title: titleInfo.title,
        link: titleInfo.link,
        summary: trimToWordWindow(extract, 160, 300)
      };
    } catch {}
  }
  return null;
}
async function fetchThinkingCurrencyData(request = { amount: 1, base: "USD", target: "TRY" }) {
  const amount = Number(request?.amount || 1);
  const base = String(request?.base || "USD").toUpperCase();
  const target = String(request?.target || "TRY").toUpperCase();
  const endpoint = base === "BTC"
    ? `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${encodeURIComponent(target.toLowerCase())}`
    : `https://api.frankfurter.app/latest?amount=${encodeURIComponent(amount)}&from=${encodeURIComponent(base)}&to=${encodeURIComponent(target)}`;
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error("Kur bilgisi alınamadı");
  const data = await res.json();
  if (base === "BTC") {
    const unitValue = Number(data?.bitcoin?.[target.toLowerCase()]);
    const totalValue = unitValue * amount;
    if (!Number.isFinite(unitValue) || !Number.isFinite(totalValue)) throw new Error("Kur bilgisi eksik");
    return {
      summary: `${amount.toLocaleString("tr-TR")} BTC ≈ ${totalValue.toLocaleString("tr-TR", { maximumFractionDigits: 2 })} ${target}`,
      sources: [
        { title: `CoinGecko ${base}/${target}`, link: endpoint },
        { title: "CoinGecko", link: "https://www.coingecko.com/" }
      ]
    };
  }
  const value = Number(data?.rates?.[target]);
  if (!Number.isFinite(value)) throw new Error("Kur bilgisi eksik");
  return {
    summary: `${amount.toLocaleString("tr-TR")} ${base} ≈ ${value.toLocaleString("tr-TR", { maximumFractionDigits: 4 })} ${target}`,
    sources: [
      { title: `Frankfurter ${base}/${target}`, link: endpoint },
      { title: "European Central Bank / Frankfurter", link: "https://www.frankfurter.app/" }
    ]
  };
}
function summarizeLeadText(text = "", max = 520) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (!clean) return "";
  return clean.length > max ? `${clean.slice(0, max)}...` : clean;
}
function buildThinkingTextResponse(input, analysis) {
  return buildThinkingTextResponseFromBase(input, analysis, buildTextResponse(input));
}
function buildThinkingTextResponseFromBase(input, analysis, baseResponse) {
  const clean = String(input || "").trim();
  const intentLead = analysis.isGreeting
    ? "Seni sadece selamlayıp geçmek istemedim; biraz daha sıcak ve dolu bir karşılama yapıyorum."
    : `Sorunu şu şekilde anladım: ${clean}.`;
  const detailLead = analysis.isGreeting
    ? "Buradan sonra ister sohbet ederiz, ister plan yaparız, ister direkt bir konuya dalarız."
    : "Bu yüzden cevabı sadece tek cümlede bırakmadım; biraz açarak, bağlam vererek ve sonraki adımı da düşünerek toparladım.";
  const guidance = analysis.isGreeting
    ? "İstersen hemen bir konu seçebilirsin: gündem, teknoloji, okul, yazı yazma, fikir geliştirme ya da sadece muhabbet."
    : "İstersen bir sonraki mesajında bunu daha da daraltıp örnekler, madde madde plan ya da karşılaştırmalı anlatım formatına çevirebilirim.";
  return `${baseResponse}\n\n${intentLead}\n${detailLead}\n${guidance}`;
}
function looksLikeUnknownFallback(text = "") {
  return unknownInputResponses.includes(String(text || "").trim());
}
const wikiAssistLeadPhrases = [
  "Bu konuya hızlı bir giriş yapayım:",
  "Kısa ve net özet şöyle:",
  "Bu soruda öne çıkan bilgi şu:",
  "Konunun temel mantığı şöyle:",
  "Hızlı bir açıklama bırakıyorum:",
  "Sana kısa bir bilgi notu:",
  "Bu başlık için ilk net çerçeve:",
  "Konuyu basitçe toparlarsak:",
  "Özet bilgi şu şekilde:",
  "En anlaşılır kısa cevap:"
];
function isWikiExpandIntent(text = "") {
  const l = String(text || "").toLocaleLowerCase("tr-TR");
  return hasAny(l, ["evet", "daha fazla", "detay", "aç", "genişlet", "uzun anlat", "devam"]);
}
async function fetchWikipediaExpandedSummary(query = "", knownLink = "") {
  if (knownLink) {
    const longText = await fetchWikipediaLongExcerpt(knownLink);
    if (longText) return trimToWordWindow(longText, 320, 520);
  }
  const short = await fetchWikipediaShortSummary(query);
  if (!short) return "";
  const longText = await fetchWikipediaLongExcerpt(short.link);
  return longText ? trimToWordWindow(longText, 320, 520) : short.summary;
}
function buildWikipediaAssistReply(query, wikiData) {
  if (!wikiData?.summary) return null;
  lastWikiAssistQuery = String(query || "").trim();
  lastWikiAssistSummaryLink = String(wikiData.link || "");
  lastWikiAssistExpandedOnce = false;
  return `${chooseRandom(wikiAssistLeadPhrases)}\n\n${wikiData.summary}\n\nİstersen bu konu hakkında daha fazla şey söyleyebilirim.`;
}
function buildThinkingWebResponse(query, analysis, webData = {}) {
  const lead = summarizeLeadText(webData.summary || webData.wikiExcerpt || webData.firstDescription || "", 620);
  const sourceNames = (webData.sources || []).slice(0, 3).map((item) => item.title).join(", ");
  const intro = `Sorunu güncel veri isteyen bir istek olarak algıladım; bu yüzden önce webden kontrol ettim.`;
  const body = lead || "Web sonuçlarından net bir paragraf çıkaramadım ama kaynakları aşağıya ekledim.";
  const extra = analysis.currencyRequest
    ? `Bu tip kur sorularında rakamlar anlık değişebildiği için yanıtı canlı kaynağa göre verdim; istersen başka para birimine de aynı anda çevirebilirim.`
    : `Bulduğum kaynakların ortak noktasını kısa bir özet halinde verdim; gerekirse aynı konuyu daha teknik ya da daha sade formatta da açabilirim.`;
  const sourceLine = sourceNames ? `Öne çıkan kaynaklar: ${sourceNames}.` : "Kaynak bağlantılarını aşağıda bıraktım.";
  return `${body}\n\n${intro}\n${extra}\n${sourceLine}\nİstersen bunu şimdi tablo, kısa not ya da adım adım anlatım formatına çevirebilirim.`;
}
function renderWebResults(query, items, wikiExcerpt = "", wikiLink = "") {
  const box = document.createElement("div");
  box.className = "msg bot web-results";
  const allSources = items.slice(0, 8);
  const leadAnswer = String(wikiExcerpt || "").trim();
  const fallbackAnswer = allSources.length
    ? allSources.map((item, i) => `${i + 1}) ${item.title}: ${item.description || "Açıklama bulunamadı."}`).join("\n")
    : "Bu aramada güvenilir metin özeti çıkaramadım, ama kaynak bağlantıları aşağıda.";
  const coreAnswer = (leadAnswer || fallbackAnswer).replace(/\s+/g, " ").trim();
  const answerTextBase = `${chooseRandom(webAnswerIntroPrompts)}
${coreAnswer}
${chooseRandom(webAnswerOutroPrompts)}`;
  const answerText = applyProfanityFlavor(answerTextBase, query);
  const shortAnswer = answerText.length > 300 ? `${answerText.slice(0, 300)}...` : answerText;
  box.innerHTML = `
    <div class="web-results-head">baluk.screatch</div>
    <div class="web-query">Arama: ${query}</div>
    <div class="web-main-answer" aria-live="polite">
      <h4>🧠 Baluk Yanıtı</h4>
      <p class="web-answer-text"></p>
      <button type="button" class="web-read-more ${answerText.length > 300 ? "" : "hidden"}">Devamını oku</button>
    </div>
    <div class="web-sources">
      <h5>📎 Kaynakça</h5>
      <ol class="web-source-list">
        ${allSources.map((item) => `<li><a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}</a></li>`).join("") || "<li>Kaynak bulunamadı.</li>"}
      </ol>
      ${wikiLink ? `<a class="web-source-main" href="${wikiLink}" target="_blank" rel="noopener noreferrer">Ana kaynak: Wikipedia</a>` : ""}
    </div>
  `;
  const answerEl = box.querySelector('.web-answer-text');
  if (answerEl) answerEl.textContent = shortAnswer;
  const readMoreBtn = box.querySelector('.web-read-more');
  if (readMoreBtn && answerEl) {
    readMoreBtn.addEventListener('click', () => {
      answerEl.textContent = answerText;
      readMoreBtn.classList.add('hidden');
    });
  }
  chat.appendChild(box);
  chat.scrollTop = chat.scrollHeight;
}
function isBMWTrigger(input) {
  return /(^|[^a-z0-9])bmw([^a-z0-9]|$)/i.test(String(input || ""));
}
function renderBMWVideoCard() {
  const box = document.createElement("div");
  box.className = "msg bot bmw-video-card";
  box.innerHTML = `
    <iframe
      src="https://www.youtube-nocookie.com/embed/N_tf3ZZWy78?autoplay=1&mute=1&loop=1&playlist=N_tf3ZZWy78&controls=0&modestbranding=1&rel=0&playsinline=1"
      title="BMW loop video"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen
      loading="lazy"
      referrerpolicy="strict-origin-when-cross-origin">
    </iframe>
  `;
  chat.appendChild(box);
  chat.scrollTop = chat.scrollHeight;
}
function applyThinkingStep(node, step = {}) {
  if (!node) return;
  updateThinkingStatus(node, step.title || "Düşünüyorum...");
  let noteEl = node.querySelector(".thinking-live-note");
  if (!noteEl) {
    noteEl = document.createElement("div");
    noteEl.className = "thinking-live-note";
    node.appendChild(noteEl);
  }
  noteEl.textContent = step.note || "";
  let srcWrap = node.querySelector(".thinking-live-sources");
  if (!srcWrap) {
    srcWrap = document.createElement("div");
    srcWrap.className = "thinking-live-sources";
    node.appendChild(srcWrap);
  }
  srcWrap.innerHTML = (step.sources || []).map((item) => `<a class="thinking-source-chip" href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}</a>`).join("");
}
function attachThinkingDetails(node, analysis, plan = [], sources = []) {
  if (!node) return;
  const details = document.createElement("details");
  details.className = "thinking-details";
  const traceItems = plan.map((step) => `
    <li>
      <strong>${step.title || "Düşünüyorum..."}</strong>
      <p>${step.note || ""}</p>
    </li>
  `).join("");
  details.innerHTML = `
    <summary>Thinking • düşünme incele</summary>
    <ol>${traceItems}</ol>
    <div class="thinking-detail-sources">${sources.map((item) => `<a class="thinking-source-chip" href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}</a>`).join("")}</div>
  `;
  node.appendChild(details);
}
async function processWebSearchInput(text) {
  startChatIfNeeded();
  addMessage(text, "user");
  const thinking = addThinkingBubble("web");
  const waitMs = isPremiumUser ? 4500 + Math.floor(Math.random() * 800) : 9000 + Math.floor(Math.random() * 2000);
  const stopProgress = startWebThinkingProgress(thinking, waitMs);
  await new Promise((r) => setTimeout(r, waitMs));
  updateThinkingStatus(thinking, "Web aranıyor...");
  try {
    const items = await fetchWebResults(text);
    const firstWiki = items.find((i) => isWikipediaLink(i.link));
    const wikiExcerpt = supportsWebTextExtractionModel() && firstWiki ? await fetchWikipediaLongExcerpt(firstWiki.link) : "";
    renderWebResults(text, items, wikiExcerpt, firstWiki?.link || "");
    stopProgress();
    const doneText = supportsWebTextExtractionModel()
      ? "Arama tamamlandı. Linkler ve Wikipedia metin alıntısı hazır."
      : "Arama tamamlandı. Linkler hazır (Wikipedia metin özeti baluk-2.2 deneyiminde daha güçlüdür).";
    fillThinkingBubble(thinking, applyProfanityFlavor(doneText, text), "Web arandı • sonuç bulundu ✅");
  } catch {
    stopProgress();
    renderWebResults(text, []);
    fillThinkingBubble(thinking, applyProfanityFlavor("Arama tamamlandı ama sonuç alınamadı.", text), "Web arandı • sonuç bulunamadı ⚠️");
  }
}
function hasSalutation(text, list) {
  return list.some((kw) => {
    const token = kw.trim().toLowerCase();
    if (!token) return false;
    if (token.length <= 3 || !token.includes(" ")) {
      const escaped = token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return new RegExp(`(^|\\s)${escaped}(\\s|$|[?.!,])`, "i").test(text);
    }
    return text.includes(token);
  });
}
function isHowAreYouVariant(text) {
  const t = String(text || "").toLowerCase().trim();
  if (!t) return false;
  if (hasAny(t, [
    "nasılsın", "nasilsin", "nasılsınız", "nasilsiniz", "naber", "ne haber",
    "naber kanka", "naber knk", "napıyorsun", "napiyorsun", "napıyon", "napiyon",
    ...extendedGreetingKeywords
  ])) return true;
  return /(^|\s)(iyi\s*m[iı]s[iı]n|iyi\s*m[iı]s[iı]n\s*knk|iyi\s*m[iı]s[iı]n\s*kanka|iyi\s*mi\s*sin|iyi\s*misn|iyisin\s*mi)(\s|$|[?.!,])/i.test(t);
}
function isBannedNow() {
  return Date.now() < banUntil;
}
function formatBanLeft(ms) {
  const sec = Math.max(0, Math.ceil(ms / 1000));
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return `${m}:${s}`;
}
function saveBanState(reason = "") {
  if (!isAccountLoggedIn) return;
  if (!banUntil || !isBannedNow()) {
    localStorage.removeItem(BAN_STORAGE_KEY);
    return;
  }
  localStorage.setItem(BAN_STORAGE_KEY, JSON.stringify({ banUntil, reason }));
}
function restoreBanState() {
  const raw = localStorage.getItem(BAN_STORAGE_KEY);
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    if (!parsed?.banUntil || Date.now() >= Number(parsed.banUntil)) {
      localStorage.removeItem(BAN_STORAGE_KEY);
      return;
    }
    banUntil = Number(parsed.banUntil);
    if (banReason) banReason.textContent = parsed.reason || "Lütfen saygılı bir dil kullanalım.";
    if (profanityLock) profanityLock.classList.remove("hidden");
    if (banInterval) clearInterval(banInterval);
    banInterval = setInterval(() => {
      const left = banUntil - Date.now();
      if (banTimer) banTimer.textContent = formatBanLeft(left);
      if (left <= 0) stopBan();
    }, 250);
  } catch {
    localStorage.removeItem(BAN_STORAGE_KEY);
  }
}

function getDefaultAccountAvatarSvg() {
  return `<svg class="account-toggle-avatar" viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle cx="20" cy="20" r="19" fill="#e2e8f0" stroke="#cbd5e1"/><circle cx="20" cy="14" r="6.2" fill="#94a3b8"/><path d="M8 32c1.8-5.6 6.6-8.6 12-8.6S30.2 26.4 32 32" fill="#94a3b8"/></svg>`;
}
function getUiIconSvg(name = "gear", extraClass = "") {
  const klass = extraClass ? ` class="${extraClass}"` : "";
  const icons = {
    chat: `<svg${klass} viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 7.2h12a2.8 2.8 0 0 1 2.8 2.8v4.3A2.8 2.8 0 0 1 18 17.1H11l-4.2 3v-3H6a2.8 2.8 0 0 1-2.8-2.8V10A2.8 2.8 0 0 1 6 7.2Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
    tools: `<svg${klass} viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="2.6" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 3.6v2.5M12 17.9v2.5M20.4 12h-2.5M6.1 12H3.6M17.9 6.1l-1.8 1.8M7.9 16.1l-1.8 1.8M17.9 17.9l-1.8-1.8M7.9 7.9 6.1 6.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    user: `<svg${klass} viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="8" r="3.6" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M4.8 19.2c1.6-3.5 4.3-5.2 7.2-5.2s5.6 1.7 7.2 5.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    save: `<svg${klass} viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5.2 4.8h11l2.6 2.6v11.8H5.2Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 4.8v5.4h7.4V4.8M8.2 18.4h7.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    gear: `<svg${klass} viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 3.5v2.1M12 18.4v2.1M20.5 12h-2.1M5.6 12H3.5M18 6l-1.5 1.5M7.5 16.5 6 18M18 18l-1.5-1.5M7.5 7.5 6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    grid: `<svg${klass} viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5.2 5.2h5.6v5.6H5.2zM13.2 5.2h5.6v5.6h-5.6zM5.2 13.2h5.6v5.6H5.2zM13.2 13.2h5.6v5.6h-5.6z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
    menu: `<svg${klass} viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle cx="20" cy="20" r="18.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M13 15.5h14M11.5 20h17M13 24.5h14" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>`,
    flash: `<svg${klass} viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13.4 2.8 6.9 13h4l-.5 8.2L17.1 11h-4.2l.5-8.2Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
    note: `<svg${klass} viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 4.8h12v14.4H6z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 9h6M9 12.5h6M9 16h4.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    shield: `<svg${klass} viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3.8 18.4 6v5.6c0 4.2-2.8 7-6.4 8.6-3.6-1.6-6.4-4.4-6.4-8.6V6Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
    sparkle: `<svg${klass} viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m12 3.8 1.8 4.8 4.8 1.8-4.8 1.8-1.8 4.8-1.8-4.8-4.8-1.8 4.8-1.8Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`
  };
  return icons[name] || icons.gear;
}
function decorateLabelWithIcon(node, icon, text) {
  if (!node) return;
  node.innerHTML = `${getUiIconSvg(icon, "ui-inline-icon")}<span>${text}</span>`;
}
function refreshStaticUiIcons() {
  decorateLabelWithIcon(document.querySelector(".drawer-head h3"), "chat", "Sohbetler");
  decorateLabelWithIcon(document.querySelector(".drawer-tools-section h4"), "tools", "Araclar");
  decorateLabelWithIcon(document.querySelector("#memoryPanel h3"), "grid", "Bellek (1.6+)");
  decorateLabelWithIcon(document.querySelector("#accountPanel h3"), "user", "Hesap");
  decorateLabelWithIcon(document.querySelector("#mathStudioPanel h3"), "grid", "Matematik Studyosu");
  decorateLabelWithIcon(document.querySelector(".account-settings summary"), "gear", "Ayarlar ve Politikalar");
  if (drawerAccountSettings) drawerAccountSettings.innerHTML = `<span class="menu-icon icon-user" aria-hidden="true"></span><span>Hesap Ayarlari</span>`;
  if (persistBrowserAccount) persistBrowserAccount.innerHTML = `${getUiIconSvg("save", "ui-inline-icon")}<span>Bu Tarayiciya Kalici Kaydet</span>`;
  const premiumList = document.querySelector(".premium-card ul");
  if (premiumList) {
    premiumList.innerHTML = [
      ["flash", "Daha hızlı cevap (Web arama yaklaşık 5 saniye)"],
      ["note", "Daha uzun ve detaylı cevaplar"],
      ["gear", "Sınırsız thinking modu hissi (saatlik 100 derin analiz hakkı)"],
      ["grid", "Daha geniş bellek desteği"],
      ["shield", "Ban yok (premium açıkken)"],
      ["sparkle", "Küfüre izin ver modu (şakalı dil)"],
      ["tools", "Daha fazlası yakında..."]
    ].map(([icon, text]) => `<li><span class="premium-feature-icon">${getUiIconSvg(icon, "ui-inline-icon")}</span><span>${text}</span></li>`).join("");
  }
  const premiumOwned = document.getElementById("premiumOwnedLabel");
  const premiumPending = document.getElementById("premiumPendingLabel");
  if (premiumOwned) premiumOwned.textContent = "Satin alindi";
  if (premiumPending) premiumPending.textContent = "Odeme bekleniyor...";
}
function updateAccountToggleVisual() {
  if (!accountToggle) return;
  const photo = accountPhoto?.value?.trim() || "";
  accountToggle.classList.remove("has-photo", "guest-default");
  if (!isAccountLoggedIn) {
    accountToggle.classList.add("guest-default");
    accountToggle.setAttribute("aria-label", "Oturum aç");
    accountToggle.innerHTML = getDefaultAccountAvatarSvg();
    return;
  }
  if (photo) {
    accountToggle.classList.add("has-photo");
    accountToggle.setAttribute("aria-label", "Profil paneli");
    accountToggle.innerHTML = `<img src="${photo}" alt="Profil fotoğrafı" referrerpolicy="no-referrer">`;
    return;
  }
  accountToggle.setAttribute("aria-label", "Menü");
  accountToggle.innerHTML = getUiIconSvg("menu", "account-toggle-avatar account-toggle-menu");
}
function clearGuestPersistentState() {
  GUEST_CLEAR_KEYS.forEach((k) => localStorage.removeItem(k));
  Object.keys(userMemory).forEach((k) => delete userMemory[k]);
  chatSessions = [];
  activeChatId = null;
  isPremiumUser = false;
  premiumPaymentPending = false;
  allowProfanity = false;
  premiumExpiresAt = 0;
  currentModel = "baluk-2.2";
}

function updateAuthDependentUI() {
  if (modelToggle) modelToggle.setAttribute("aria-label", isAccountLoggedIn ? "Model seç" : "Önce oturum aç");
  if (drawerBackgroundOpen) drawerBackgroundOpen.classList.toggle("hidden", !isAccountLoggedIn);
  if (drawerPremiumOpen) drawerPremiumOpen.classList.toggle("hidden", !isAccountLoggedIn);
  if (drawerAccountSettings) drawerAccountSettings.classList.toggle("hidden", !isAccountLoggedIn);
  if (!isAccountLoggedIn) {
    thinkingModeEnabled = false;
    localStorage.removeItem(THINKING_MODE_KEY);
    setWebMode(false);
    setLensMode(false);
    setTestMode(false);
    setAdvancedMathMode(false);
    closeVoiceMode();
    voiceWebModeEnabled = false;
    if (premiumModal) premiumModal.classList.add("hidden");
    if (backgroundModal) backgroundModal.classList.add("hidden");
    if (sideDrawer) sideDrawer.classList.add("hidden");
  }
  updateThinkingQuotaUI();
}

function updateAccountPreview() {
  if (!accountNamePreview || !accountMailPreview || !accountPhotoPreview) return;
  const name = accountName?.value?.trim() || "Misafir";
  const mail = accountGmail?.value?.trim() || "gmail eklenmedi";
  const photo = accountPhoto?.value?.trim();
  accountNamePreview.textContent = name;
  accountMailPreview.textContent = mail;
  accountPhotoPreview.src = photo || 'data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2248%22 fill=%22%23e2e8f0%22/%3E%3Ccircle cx=%2250%22 cy=%2236%22 r=%2215%22 fill=%22%2394a3b8%22/%3E%3Cpath d=%22M18 82c4-14 15-22 32-22s28 8 32 22%22 fill=%22%2394a3b8%22/%3E%3C/svg%3E';
  updateAccountToggleVisual();
  updateAuthDependentUI();
}
function applyBackgroundTheme(themeName = "default") {
  const themes = ["theme-1", "theme-2", "theme-3", "theme-4", "theme-5", "theme-6", "theme-7", "theme-8", "theme-9", "theme-10"];
  document.body.classList.remove(...themes.map((t) => `bg-${t}`));
  const safeTheme = themes.includes(themeName) ? themeName : "default";
  if (safeTheme !== "default") document.body.classList.add(`bg-${safeTheme}`);
  if (isAccountLoggedIn) localStorage.setItem(BACKGROUND_THEME_KEY, safeTheme);
  if (backgroundThemeSelect) backgroundThemeSelect.value = safeTheme;
}
function stopBackgroundMusic() {
  try {
    bgAudioNodes.forEach((n) => {
      if (n && typeof n.stop === "function") n.stop();
    });
  } catch {}
  bgAudioNodes = [];
  if (bgAudioCtx) {
    bgAudioCtx.close().catch(() => {});
    bgAudioCtx = null;
  }
}
function startBackgroundMusic(presetId = "off", volumeValue = 35) {
  stopBackgroundMusic();
  const preset = ambientMusicPresets[presetId];
  if (!preset) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  bgAudioCtx = new AC();
  const now = bgAudioCtx.currentTime;
  const master = bgAudioCtx.createGain();
  master.gain.value = 0.0001;
  master.connect(bgAudioCtx.destination);

  const targetLevel = Math.max(0, Math.min(1, Number(volumeValue) / 100)) * 0.1;
  master.gain.exponentialRampToValueAtTime(Math.max(0.0001, targetLevel), now + 1.2);

  const filter = bgAudioCtx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = preset.layer === "airy" ? 1100 : preset.layer === "warm" ? 860 : 980;
  filter.Q.value = 0.9;
  filter.connect(master);

  const oscA = bgAudioCtx.createOscillator();
  const oscB = bgAudioCtx.createOscillator();
  const oscC = bgAudioCtx.createOscillator();
  const lfo = bgAudioCtx.createOscillator();
  const lfoGain = bgAudioCtx.createGain();
  const filterLfo = bgAudioCtx.createOscillator();
  const filterLfoGain = bgAudioCtx.createGain();

  oscA.type = preset.wave;
  oscB.type = preset.wave;
  oscC.type = preset.layer === "warm" ? "triangle" : "sine";
  oscA.frequency.value = preset.base;
  oscB.frequency.value = preset.base * 1.25;
  oscC.frequency.value = preset.base * 0.5;

  oscA.detune.value = -Math.abs(preset.detune || 6);
  oscB.detune.value = Math.abs(preset.detune || 6);
  oscC.detune.value = (preset.detune || 6) * 0.4;

  lfo.type = "sine";
  lfo.frequency.value = preset.lfo;
  lfoGain.gain.value = 3.2;
  lfo.connect(lfoGain);
  lfoGain.connect(oscA.frequency);

  filterLfo.type = "sine";
  filterLfo.frequency.value = Math.max(0.01, preset.lfo * 0.8);
  filterLfoGain.gain.value = preset.layer === "airy" ? 140 : 90;
  filterLfo.connect(filterLfoGain);
  filterLfoGain.connect(filter.frequency);

  const gainA = bgAudioCtx.createGain();
  const gainB = bgAudioCtx.createGain();
  const gainC = bgAudioCtx.createGain();
  gainA.gain.value = 0.34;
  gainB.gain.value = 0.23;
  gainC.gain.value = preset.layer === "warm" ? 0.16 : 0.12;

  oscA.connect(gainA);
  oscB.connect(gainB);
  oscC.connect(gainC);
  gainA.connect(filter);
  gainB.connect(filter);
  gainC.connect(filter);

  oscA.start(now);
  oscB.start(now);
  oscC.start(now);
  lfo.start(now);
  filterLfo.start(now);

  bgAudioNodes = [oscA, oscB, oscC, lfo, filterLfo, master, filter, gainA, gainB, gainC, lfoGain, filterLfoGain];
}
function setBackgroundMusic(musicId = "off") {
  const safe = Object.prototype.hasOwnProperty.call(ambientMusicPresets, musicId) ? musicId : "off";
  if (isAccountLoggedIn) localStorage.setItem(BACKGROUND_MUSIC_KEY, safe);
  if (backgroundMusicSelect) backgroundMusicSelect.value = safe;
  const volume = isAccountLoggedIn ? Number(localStorage.getItem(BACKGROUND_VOLUME_KEY) || "35") : 35;
  if (safe === "off") stopBackgroundMusic();
  else startBackgroundMusic(safe, volume);
}
function setBackgroundVolume(value = 35) {
  const safe = Math.max(0, Math.min(100, Number(value) || 35));
  if (isAccountLoggedIn) localStorage.setItem(BACKGROUND_VOLUME_KEY, String(safe));
  if (backgroundMusicVolume) backgroundMusicVolume.value = String(safe);
  const currentMusic = isAccountLoggedIn ? (localStorage.getItem(BACKGROUND_MUSIC_KEY) || "off") : "off";
  if (currentMusic !== "off") startBackgroundMusic(currentMusic, safe);
}
function restoreBackgroundSettings() {
  const savedTheme = isAccountLoggedIn ? (localStorage.getItem(BACKGROUND_THEME_KEY) || "default") : "default";
  const savedMusic = isAccountLoggedIn ? (localStorage.getItem(BACKGROUND_MUSIC_KEY) || "off") : "off";
  const savedVolume = isAccountLoggedIn ? Number(localStorage.getItem(BACKGROUND_VOLUME_KEY) || "35") : 35;
  applyBackgroundTheme(savedTheme);
  setBackgroundVolume(savedVolume);
  setBackgroundMusic(savedMusic);
}
function normalizeGmailInput(value = "") {
  return String(value || "").trim().toLowerCase();
}
function isValidStrictGmail(value = "") {
  const email = normalizeGmailInput(value);
  if (!email.endsWith("@gmail.com")) return false;
  if (!/^[a-z0-9](?:[a-z0-9._%+-]{4,62})@gmail\.com$/i.test(email)) return false;
  const localPart = email.split("@")[0] || "";
  if (localPart.includes("..")) return false;
  if (localPart.startsWith(".") || localPart.endsWith(".")) return false;
  return true;
}
function sanitizeAccountProfile(rawProfile = {}) {
  return {
    name: String(rawProfile?.name || "").trim(),
    gmail: normalizeGmailInput(rawProfile?.gmail || ""),
    photo: String(rawProfile?.photo || "").trim()
  };
}
function isAccountProfileValid(profile = {}) {
  const safe = sanitizeAccountProfile(profile);
  return Boolean(safe.name && safe.name.length >= 3 && isValidStrictGmail(safe.gmail));
}
function buildBrowserPinnedPayload(profile = null) {
  const safeProfile = sanitizeAccountProfile(profile || {
    name: accountName?.value,
    gmail: accountGmail?.value,
    photo: accountPhoto?.value
  });
  return {
    savedAt: Date.now(),
    profile: safeProfile,
    memory: userMemory,
    chats: chatSessions,
    activeChatId,
    thinkingUsage: thinkingUsageTimestamps,
    prefs: {
      model: currentModel,
      theme: localStorage.getItem(BACKGROUND_THEME_KEY) || "default",
      music: localStorage.getItem(BACKGROUND_MUSIC_KEY) || "off",
      volume: localStorage.getItem(BACKGROUND_VOLUME_KEY) || "35"
    }
  };
}
function persistAccountIntoBrowserVault(profile = null) {
  const payload = buildBrowserPinnedPayload(profile);
  localStorage.removeItem(ACCOUNT_LOGOUT_MARK_KEY);
  localStorage.setItem(ACCOUNT_BROWSER_PIN_KEY, "1");
  localStorage.setItem(ACCOUNT_BROWSER_BACKUP_KEY, JSON.stringify(payload));
}
function tryRestorePinnedAccountFromBrowserVault() {
  if (localStorage.getItem(ACCOUNT_LOGOUT_MARK_KEY) === "1") return null;
  if (localStorage.getItem(ACCOUNT_BROWSER_PIN_KEY) !== "1") return null;
  const raw = localStorage.getItem(ACCOUNT_BROWSER_BACKUP_KEY);
  if (!raw) return null;
  try {
    const payload = JSON.parse(raw);
    const profile = sanitizeAccountProfile(payload?.profile || {});
    if (!isAccountProfileValid(profile)) return null;
    localStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify({ ...profile, loggedIn: true }));
    if (payload?.memory && typeof payload.memory === "object") {
      localStorage.setItem("balukMemory", JSON.stringify(payload.memory));
    }
    if (Array.isArray(payload?.chats)) {
      localStorage.setItem(CHAT_SESSIONS_STORAGE_KEY, JSON.stringify(payload.chats));
    }
    if (Array.isArray(payload?.thinkingUsage)) {
      localStorage.setItem(THINKING_USAGE_KEY, JSON.stringify(payload.thinkingUsage));
    }
    if (payload?.prefs?.model) localStorage.setItem(MODEL_STORAGE_KEY, payload.prefs.model);
    if (payload?.prefs?.theme) localStorage.setItem(BACKGROUND_THEME_KEY, payload.prefs.theme);
    if (payload?.prefs?.music) localStorage.setItem(BACKGROUND_MUSIC_KEY, payload.prefs.music);
    if (payload?.prefs?.volume) localStorage.setItem(BACKGROUND_VOLUME_KEY, String(payload.prefs.volume));
    return profile;
  } catch {
    return null;
  }
}
function restorePinnedStateIfProfileMatches(profile = {}) {
  const raw = localStorage.getItem(ACCOUNT_BROWSER_BACKUP_KEY);
  if (!raw) return false;
  try {
    const payload = JSON.parse(raw);
    const saved = sanitizeAccountProfile(payload?.profile || {});
    const current = sanitizeAccountProfile(profile);
    const sameIdentity = saved.gmail === current.gmail && saved.name.toLocaleLowerCase("tr-TR") === current.name.toLocaleLowerCase("tr-TR");
    if (!sameIdentity) return false;
    if (payload?.memory && typeof payload.memory === "object") localStorage.setItem("balukMemory", JSON.stringify(payload.memory));
    if (Array.isArray(payload?.chats)) localStorage.setItem(CHAT_SESSIONS_STORAGE_KEY, JSON.stringify({ activeChatId: payload.activeChatId || null, sessions: payload.chats }));
    if (Array.isArray(payload?.thinkingUsage)) localStorage.setItem(THINKING_USAGE_KEY, JSON.stringify(payload.thinkingUsage));
    return true;
  } catch {
    return false;
  }
}
function saveAccountProfile() {
  const profile = sanitizeAccountProfile({
    name: accountName?.value,
    gmail: accountGmail?.value,
    photo: accountPhoto?.value
  });
  if (accountGmail) accountGmail.value = profile.gmail;
  isAccountLoggedIn = isAccountProfileValid(profile);
  if (!isAccountLoggedIn) {
    if (!profile.name || profile.name.length < 3) {
      showWarningOverlay("Hesap için ad-soyad en az 3 karakter olmalı.");
    } else if (!isValidStrictGmail(profile.gmail)) {
      showWarningOverlay("Lütfen geçerli bir Gmail adresi gir (ör: adiniz@gmail.com).");
    } else {
      showWarningOverlay("Oturum açmak için geçerli bilgiler gerekli.");
    }
    updateAccountPreview();
    return;
  }
  localStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify({ ...profile, loggedIn: true }));
  restorePinnedStateIfProfileMatches(profile);
  persistAccountIntoBrowserVault(profile);
  updateAccountPreview();
  if (accountPanel) accountPanel.classList.add("hidden");
}

function restoreAccountProfile() {
  const raw = localStorage.getItem(ACCOUNT_STORAGE_KEY);
  if (!raw) {
    const recovered = tryRestorePinnedAccountFromBrowserVault();
    if (recovered) {
      if (accountName) accountName.value = recovered.name || "";
      if (accountGmail) accountGmail.value = recovered.gmail || "";
      if (accountPhoto) accountPhoto.value = recovered.photo || "";
      isAccountLoggedIn = true;
      updateAccountPreview();
      return;
    }
    isAccountLoggedIn = false;
    updateAccountPreview();
    clearGuestPersistentState();
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    const profile = sanitizeAccountProfile(parsed);
    isAccountLoggedIn = isAccountProfileValid(profile);
    if (!isAccountLoggedIn) {
      localStorage.removeItem(ACCOUNT_STORAGE_KEY);
      clearGuestPersistentState();
    } else {
      localStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify({ ...profile, loggedIn: true }));
    }
    if (accountName) accountName.value = profile.name || "";
    if (accountGmail) accountGmail.value = profile.gmail || "";
    if (accountPhoto) accountPhoto.value = profile.photo || "";
  } catch {
    isAccountLoggedIn = false;
    localStorage.removeItem(ACCOUNT_STORAGE_KEY);
    clearGuestPersistentState();
  }
  updateAccountPreview();
  modelOptions.forEach((opt) => opt.classList.toggle("active", opt.dataset.model === currentModel));
  updateModelVisual();
}
function deleteAccountProfile() {
  const ok = window.confirm("Hesabı bu tarayıcıdan silmek istediğine emin misin? (Sohbetler de silinir)");
  if (!ok) return;
  clearGuestPersistentState();
  isAccountLoggedIn = false;
  if (accountName) accountName.value = "";
  if (accountGmail) accountGmail.value = "";
  if (accountPhoto) accountPhoto.value = "";
  updateAccountPreview();
  if (accountPanel) accountPanel.classList.add("hidden");
  if (sideDrawer) sideDrawer.classList.add("hidden");
  showWarningOverlay("Hesap ve yerel kayıtlar bu tarayıcıdan silindi.");
}
function logoutAccountProfile() {
  localStorage.setItem(ACCOUNT_LOGOUT_MARK_KEY, "1");
  localStorage.removeItem(ACCOUNT_STORAGE_KEY);
  chatSessions = [];
  activeChatId = null;
  localStorage.removeItem(CHAT_SESSIONS_STORAGE_KEY);
  isAccountLoggedIn = false;
  thinkingModeEnabled = false;
  if (accountPanel) accountPanel.classList.add("hidden");
  if (sideDrawer) sideDrawer.classList.add("hidden");
  updateAccountPreview();
  updateAuthDependentUI();
  showWarningOverlay("Çıkış yapıldı.");
}

function stopBan() {
  banUntil = 0;
  if (banInterval) clearInterval(banInterval);
  banInterval = null;
  if (profanityLock) profanityLock.classList.add("hidden");
  saveBanState();
}
function startBan(reason = "Lütfen saygılı bir dil kullanalım.") {
  insultWarningCount = 0;
  banUntil = Date.now() + 10 * 60 * 1000;
  if (banReason) banReason.textContent = reason;
  if (profanityLock) profanityLock.classList.remove("hidden");
  if (banInterval) clearInterval(banInterval);
  banInterval = setInterval(() => {
    const left = banUntil - Date.now();
    if (banTimer) banTimer.textContent = formatBanLeft(left);
    if (left <= 0) stopBan();
  }, 250);
  saveBanState(reason);
}
function showWarningOverlay(message) {
  if (!warningOverlay || !warningText) return;
  warningText.textContent = message;
  warningOverlay.classList.remove("hidden");
  if (warningOverlayTimer) clearTimeout(warningOverlayTimer);
  warningOverlayTimer = setTimeout(() => warningOverlay.classList.add("hidden"), 2200);
}
function matchesKeywordWithSuffix(textLower, keyword) {
  const kw = String(keyword || "").trim().toLowerCase();
  if (!kw) return false;
  if (kw.includes(" ")) return textLower.includes(kw);
  const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`(^|[^a-zçğıöşü0-9])${escaped}(?:['’]?[a-zçğıöşü]{0,7})?(?=$|[^a-zçğıöşü0-9])`, "i");
  return pattern.test(textLower);
}
function getToxicityLevel(textLower) {
  if (severeProfanityKeywords.some((w) => matchesKeywordWithSuffix(textLower, w))) return "severe";
  if (insultKeywords.some((w) => matchesKeywordWithSuffix(textLower, w))) return "insult";
  return null;
}
function isUnsafeQuery(textLower) {
  return unsafeIllegalSelfHarmKeywords.some((w) => textLower.includes(w));
}
function getUnsafeCategory(textLower) {
  if (selfHarmUnsafeKeywords.some((w) => textLower.includes(w))) return "self_harm";
  if (illegalUnsafeKeywords.some((w) => textLower.includes(w))) return "illegal";
  return "generic";
}
function buildUnsafeRefusal(textLower) {
  pendingSafetySurvey = getUnsafeCategory(textLower);
  if (pendingSafetySurvey === "self_harm") return chooseRandom(selfHarmSupportPrompts);
  if (pendingSafetySurvey === "illegal") return chooseRandom(illegalRefusalPrompts);
  return `${chooseRandom(illegalRefusalPrompts)}
${chooseRandom(selfHarmSupportPrompts)}`;
}
function setAdvancedMathMode(enabled) {
  if (enabled && !isAccountLoggedIn) {
    advancedMathEnabled = false;
    if (advancedMathMode) advancedMathMode.checked = false;
    showWarningOverlay("Gelişmiş Matematik Modu için önce oturum aç.");
    return;
  }
  if (enabled && !supportsContextModel()) {
    advancedMathEnabled = false;
    if (advancedMathMode) advancedMathMode.checked = false;
    showWarningOverlay("Gelişmiş Matematik Modu yalnızca baluk-1.5 ve üstü modellerde kullanılabilir.");
    return;
  }
  const justEnabled = enabled && !advancedMathEnabled;
  advancedMathEnabled = enabled;
  appRoot.classList.toggle("math-mode", enabled);
  if (memoryToggle) memoryToggle.classList.toggle("hidden", enabled);
  if (mathStudioToggle) mathStudioToggle.classList.toggle("hidden", !enabled);
  if (mathStudioPanel && !enabled) mathStudioPanel.classList.add("hidden");
  if (currentModelBadge) currentModelBadge.textContent = enabled ? "matematik modu" : currentModel;
  if (justEnabled) {
    showMathModeFlash();
  }
}
function simplifyLinearLikeExpression(raw = "") {
  const clean = String(raw || "").replace(/\s+/g, "").replace(/\*/g, "");
  if (!clean || clean.includes("=")) return null;
  if (!/[a-z]/i.test(clean)) return null;
  const parts = clean.match(/[+-]?[^+-]+/g) || [];
  if (!parts.length) return null;
  let xCoef = 0;
  let constant = 0;
  for (const part of parts) {
    if (/x$/i.test(part)) {
      const c = part.replace(/x$/i, "");
      if (c === "" || c === "+") xCoef += 1;
      else if (c === "-") xCoef -= 1;
      else {
        const n = Number(c);
        if (!Number.isFinite(n)) return null;
        xCoef += n;
      }
    } else {
      const n = Number(part);
      if (!Number.isFinite(n)) return null;
      constant += n;
    }
  }
  const xPart = xCoef === 0 ? "" : `${xCoef === 1 ? "" : xCoef === -1 ? "-" : xCoef}x`;
  const cPart = constant === 0 ? "" : `${constant > 0 && xPart ? "+" : ""}${constant}`;
  const out = `${xPart}${cPart}` || "0";
  return out;
}
function solveRationalInline(raw = "") {
  const text = String(raw || "").replace(/\s+/g, "");
  const m = text.match(/^(-?\d+)\/(\-?\d+)([+\-*/])(-?\d+)\/(\-?\d+)$/);
  if (!m) return null;
  const a = { n: Number(m[1]), d: Number(m[2]) };
  const op = m[3];
  const b = { n: Number(m[4]), d: Number(m[5]) };
  if (!a.d || !b.d) return "Tanımsız (payda 0)";
  let n=0,d=1;
  if (op === '+') { n=a.n*b.d + b.n*a.d; d=a.d*b.d; }
  if (op === '-') { n=a.n*b.d - b.n*a.d; d=a.d*b.d; }
  if (op === '*') { n=a.n*b.n; d=a.d*b.d; }
  if (op === '/') { if (!b.n) return "Tanımsız (0'a bölme)"; n=a.n*b.d; d=a.d*b.n; }
  if (d<0){d*=-1;n*=-1;}
  return `${n}/${d}`;
}

function normalizeMathResultForStudio(result = "") {
  return String(result || "")
    .replace(/^Denklem çözümü:\s*/i, "")
    .replace(/^Sonuç:\s*/i, "")
    .replace(/^Üslü sayı sonucu:\s*/i, "")
    .replace(/^Köklü sayı sonucu:\s*/i, "")
    .replace(/^Mutlak değer sonucu:\s*/i, "")
    .replace(/^Orantı sonucu:\s*/i, "")
    .replace(/^Oran sonucu:\s*/i, "")
    .replace(/^Yaş problemi sonucu:\s*/i, "")
    .replace(/^Yol sonucu:\s*/i, "")
    .replace(/^Hız sonucu:\s*/i, "")
    .replace(/^Zaman sonucu:\s*/i, "")
    .replace(/^İşçi problemi sonucu:\s*/i, "")
    .replace(/^%\d+(?:\.\d+)? değeri:\s*/i, "")
    .replace(/^İndirimli fiyat:\s*/i, "")
    .replace(/^Artış sonrası değer:\s*/i, "")
    .replace(/^Kâr:\s*/i, "")
    .replace(/^Zarar:\s*/i, "")
    .replace(/\s*✅$/g, "")
    .trim();
}
function solveMathStudioLine(line) {
  const raw = line.trim();
  if (!raw) return null;
  const rational = solveRationalInline(raw);
  if (rational) return normalizeMathResultForStudio(rational);
  const power = solvePowerExpression(raw);
  if (power) return normalizeMathResultForStudio(power);
  const root = solveRootExpression(raw);
  if (root) return normalizeMathResultForStudio(root);
  const abs = solveAbsoluteValue(raw);
  if (abs) return normalizeMathResultForStudio(abs);
  const ratio = solveRatioProportion(raw);
  if (ratio) return normalizeMathResultForStudio(ratio);
  const percentage = solvePercentageProblem(raw);
  if (percentage) return normalizeMathResultForStudio(percentage);
  const ageProblem = solveAgeProblem(raw);
  if (ageProblem) return normalizeMathResultForStudio(ageProblem);
  const speedTimeDistance = solveSpeedTimeDistance(raw);
  if (speedTimeDistance) return normalizeMathResultForStudio(speedTimeDistance);
  const profitLoss = solveProfitLossProblem(raw);
  if (profitLoss) return normalizeMathResultForStudio(profitLoss);
  const workerProblem = solveWorkerProblem(raw);
  if (workerProblem) return normalizeMathResultForStudio(workerProblem);
  const naturalMath = solveNaturalLanguageMath(raw);
  if (naturalMath) return normalizeMathResultForStudio(naturalMath);
  const simpleAlgebra = simplifyLinearLikeExpression(raw);
  if (simpleAlgebra) return normalizeMathResultForStudio(simpleAlgebra);
  const wordProblem = solveWordProblemValue(raw);
  if (wordProblem !== null) return String(wordProblem);
  const eq = solveLinearEquation(raw);
  if (eq) return normalizeMathResultForStudio(eq);
  const expr = solveSimpleExpression(raw.replaceAll("^", "**"));
  if (expr) return normalizeMathResultForStudio(expr);
  return "Çözüm yok";
}
function explainMath(line, result) {
  return `🧠 Matematik stüdyosu açıklaması:
${line} ifadesini adım adım çözünce ${result} sonucuna ulaşıyorum. Denklemde bilinmeyeni yalnız bırakıyorum; cebirde benzer terimleri sadeleştiriyorum; rasyonel ifadede ortak payda/işlem kurallarıyla ilerliyorum.`;
}
function bindMathStudioInputEditor() {
  mathStudioInput = document.getElementById("mathStudioInput");
  if (!mathStudioInput || mathStudioInput.dataset.bound === "1") return;
  mathStudioInput.dataset.bound = "1";
  mathStudioInput.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    renderMathStudio();
  });
}
function renderMathStudio() {
  bindMathStudioInputEditor();
  if (!mathStudioInput) return;
  const raw = mathStudioInput.innerText.trim();
  if (!raw) return;
  const lines = raw.split("\n").map((l) => l.trim()).filter(Boolean);
  const line = lines[lines.length - 1];
  const result = solveMathStudioLine(line);
  if (!result || result === "Çözüm yok") return;
  mathStudioInput.innerHTML = `<span class="calc-answer">${line} = ${result}</span>`;
  const selection = window.getSelection();
  if (selection) {
    const range = document.createRange();
    range.selectNodeContents(mathStudioInput);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  if (line !== lastStudioExplained) {
    startChatIfNeeded();
    addMessage(explainMath(line, result), "bot");
    lastStudioExplained = line;
  }
}
function showMathModeFlash() {
  if (!mathModeFlash) return;
  mathModeFlash.classList.remove("hidden");
  clearTimeout(mathFlashTimer);
  mathFlashTimer = setTimeout(() => mathModeFlash.classList.add("hidden"), 1050);
  playMathModeFlashAudio();
}
function playMathModeFlashAudio() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  const ctx = new AudioCtx();
  const now = ctx.currentTime;
  const master = ctx.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.08, now + 0.08);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 1.0);
  master.connect(ctx.destination);
  const osc = ctx.createOscillator();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(180, now);
  osc.frequency.exponentialRampToValueAtTime(640, now + 0.46);
  const shimmer = ctx.createOscillator();
  shimmer.type = "sine";
  shimmer.frequency.value = 11;
  const shimmerGain = ctx.createGain();
  shimmerGain.gain.value = 22;
  shimmer.connect(shimmerGain);
  shimmerGain.connect(osc.frequency);
  osc.connect(master);
  osc.start(now);
  shimmer.start(now);
  osc.stop(now + 1.05);
  shimmer.stop(now + 1.05);
  setTimeout(() => ctx.close().catch(() => {}), 1200);
}
function clearGeometryWarn() {
  if (geometryWarn) geometryWarn.textContent = "";
}
function showGeometryWarn(message) {
  if (!geometryWarn) return;
  geometryWarn.textContent = message;
}
function parsePositive(value) {
  const n = Number(String(value || "").replace(",", "."));
  if (!Number.isFinite(n) || n <= 0) return null;
  return n;
}
function geometrySvgForShape(shape) {
  switch (shape) {
    case "square":
      return `<rect x="26" y="26" width="148" height="148" rx="6"></rect>`;
    case "rectangle":
      return `<rect x="20" y="46" width="160" height="108" rx="6"></rect>`;
    case "triangle":
      return `<polygon points="100,18 182,168 18,168"></polygon>`;
    case "circle":
      return `<circle cx="100" cy="100" r="74"></circle>`;
    case "parallelogram":
      return `<polygon points="42,38 188,38 158,162 12,162"></polygon>`;
    case "trapezoid":
      return `<polygon points="42,44 158,44 188,162 12,162"></polygon>`;
    case "pentagon":
      return `<polygon points="100,14 178,72 148,166 52,166 22,72"></polygon>`;
    case "hexagon":
      return `<polygon points="52,16 148,16 192,100 148,184 52,184 8,100"></polygon>`;
    default:
      return `<rect x="24" y="24" width="152" height="152" rx="6"></rect>`;
  }
}
function sidePositions(shape, count) {
  const map = {
    square: ["top", "right", "bottom", "left"],
    rectangle: ["top", "right", "bottom", "left"],
    triangle: ["top", "right", "left"],
    circle: ["top"],
    parallelogram: ["top", "right", "bottom", "left"],
    trapezoid: ["top", "right", "bottom", "left"],
    pentagon: ["top", "upper-right", "lower-right", "lower-left", "upper-left"],
    hexagon: ["top", "upper-right", "lower-right", "bottom", "lower-left", "upper-left"]
  };
  const fallback = ["top", "right", "bottom", "left", "upper-left", "upper-right"];
  return (map[shape] || fallback).slice(0, count);
}
function createGeometryInput(index, label, pos) {
  return `<label class="geo-side-input pos-${pos}"><span>${label}</span><input type="number" min="0" step="any" data-edge-index="${index}" placeholder="cm"></label>`;
}
function renderNotebookShell(innerHtml) {
  const savedText = (mathStudioInput && mathStudioInput.innerText) ? mathStudioInput.innerText : "";
  const textLayer = `<div id="mathStudioInput" class="math-studio-input notebook-typing" contenteditable="true" spellcheck="false">${savedText}</div>`;
  geometrySketch.innerHTML = `
    <div class="geo-notebook unified-notebook">
      ${textLayer}
      ${innerHtml}
      <div id="geoResultPad" class="geo-result-pad" aria-live="polite"></div>
    </div>
  `;
  bindMathStudioInputEditor();
}
function renderRationalWorkbench() {
  renderNotebookShell(`
    <div id="geoWidgetWrap" class="geo-widget-wrap rational-widget selected" style="left:${geometryPlacement.x}%; top:${geometryPlacement.y}%">
      <button id="geoDeleteBtn" class="geo-delete-btn" type="button" aria-label="Öğeyi sil">✕</button>
      <div class="rational-zone">
        <div class="rational-box" data-rational="a">
          <input class="rat-num" type="number" step="any" placeholder="üst">
          <span class="rat-line"></span>
          <input class="rat-den" type="number" step="any" placeholder="alt">
        </div>
        <select id="ratOp" class="rat-op" aria-label="Rasyonel işlem seç">
          <option value="+">+</option>
          <option value="-">−</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>
        <div class="rational-box" data-rational="b">
          <input class="rat-num" type="number" step="any" placeholder="üst">
          <span class="rat-line"></span>
          <input class="rat-den" type="number" step="any" placeholder="alt">
        </div>
      </div>
    </div>
  `);
  wireGeometryDrag();
  wireNotebookItemSelection();
}
function renderGeometrySketch(shape) {
  if (!geometrySketch) return;
  if (!shape) {
    renderNotebookShell('');
    return;
  }
  if (!geometryShapeMeta[shape]) return;
  if (shape === "rational") {
    renderRationalWorkbench();
    return;
  }
  const meta = geometryShapeMeta[shape];
  const positions = sidePositions(shape, meta.sides.length);
  const edges = meta.sides.map((label, idx) => createGeometryInput(idx + 1, label, positions[idx] || "top")).join("");
  renderNotebookShell(`
    <div id="geoWidgetWrap" class="geo-widget-wrap geometry-widget selected" style="left:${geometryPlacement.x}%; top:${geometryPlacement.y}%">
      <button id="geoDeleteBtn" class="geo-delete-btn" type="button" aria-label="Öğeyi sil">✕</button>
      <svg class="geo-shape-svg shape-${shape}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">${geometrySvgForShape(shape)}</svg>
      ${edges}
      <input id="geoGoalInput" class="geo-goal-input" type="text" placeholder="alan / çevre">
    </div>
  `);
  wireGeometryInputRules(shape);
  wireGeometryDrag();
  wireNotebookItemSelection();
}
function wireNotebookItemSelection() {
  const wrap = document.getElementById("geoWidgetWrap");
  const del = document.getElementById("geoDeleteBtn");
  if (!wrap) return;
  const setSelected = () => wrap.classList.add("selected");
  wrap.addEventListener("click", (e) => {
    e.stopPropagation();
    setSelected();
  });
  geometrySketch?.addEventListener("click", (e) => {
    if (!wrap.contains(e.target)) wrap.classList.remove("selected");
  });
  if (del) {
    del.addEventListener("click", (e) => {
      e.stopPropagation();
      selectedGeometryShape = null;
      renderGeometrySketch(null);
      clearGeometryWarn();
    });
  }
}
function wireGeometryDrag() {
  const wrap = document.getElementById("geoWidgetWrap");
  const notebook = geometrySketch?.querySelector(".geo-notebook");
  if (!wrap || !notebook) return;
  const start = (ev) => {
    const point = ev.touches ? ev.touches[0] : ev;
    geometryDragState = {
      startX: point.clientX,
      startY: point.clientY,
      baseX: geometryPlacement.x,
      baseY: geometryPlacement.y
    };
    wrap.classList.add("dragging");
    wrap.classList.add("selected");
  };
  const move = (ev) => {
    if (!geometryDragState) return;
    const point = ev.touches ? ev.touches[0] : ev;
    const rect = notebook.getBoundingClientRect();
    const dx = ((point.clientX - geometryDragState.startX) / rect.width) * 100;
    const dy = ((point.clientY - geometryDragState.startY) / rect.height) * 100;
    geometryPlacement.x = Math.min(84, Math.max(16, geometryDragState.baseX + dx));
    geometryPlacement.y = Math.min(82, Math.max(20, geometryDragState.baseY + dy));
    wrap.style.left = `${geometryPlacement.x}%`;
    wrap.style.top = `${geometryPlacement.y}%`;
  };
  const end = () => {
    if (!geometryDragState) return;
    geometryDragState = null;
    wrap.classList.remove("dragging");
  };
  wrap.onmousedown = start;
  wrap.ontouchstart = start;
  if (geometryDragMoveHandler) {
    document.removeEventListener("mousemove", geometryDragMoveHandler);
    document.removeEventListener("touchmove", geometryDragMoveHandler);
  }
  if (geometryDragEndHandler) {
    document.removeEventListener("mouseup", geometryDragEndHandler);
    document.removeEventListener("touchend", geometryDragEndHandler);
  }
  geometryDragMoveHandler = move;
  geometryDragEndHandler = end;
  document.addEventListener("mousemove", geometryDragMoveHandler);
  document.addEventListener("touchmove", geometryDragMoveHandler, { passive: true });
  document.addEventListener("mouseup", geometryDragEndHandler);
  document.addEventListener("touchend", geometryDragEndHandler);
}
function parseSigned(value) {
  const n = Number(String(value || "").replace(",", "."));
  if (!Number.isFinite(n)) return null;
  return n;
}
function computeRationalCard() {
  const notebook = geometrySketch?.querySelector(".geo-notebook");
  if (!notebook) return { error: "Rasyonel kart bulunamadı." };
  const boxes = [...notebook.querySelectorAll('.rational-box')];
  if (boxes.length < 2) return { error: "İki rasyonel sayı gerekli." };
  const [a, b] = boxes.map((box) => ({
    n: parseSigned(box.querySelector('.rat-num')?.value),
    d: parseSigned(box.querySelector('.rat-den')?.value)
  }));
  if (a.n === null || a.d === null || b.n === null || b.d === null) return { error: "Pay/payda alanlarını doldur." };
  if (a.d === 0 || b.d === 0) return { error: "Payda 0 olamaz." };
  const op = notebook.querySelector('#ratOp')?.value || "+";
  let n = 0;
  let d = 1;
  if (op === "+") { n = a.n * b.d + b.n * a.d; d = a.d * b.d; }
  if (op === "-") { n = a.n * b.d - b.n * a.d; d = a.d * b.d; }
  if (op === "*") { n = a.n * b.n; d = a.d * b.d; }
  if (op === "/") {
    if (b.n === 0) return { error: "Sıfıra bölme yapılamaz." };
    n = a.n * b.d; d = a.d * b.n;
  }
  const signFix = d < 0 ? -1 : 1;
  n *= signFix;
  d *= signFix;
  const gcd = (x, y) => {
    let ax = Math.abs(Math.trunc(x));
    let ay = Math.abs(Math.trunc(y));
    if (!ax || !ay) return 1;
    while (ay) [ax, ay] = [ay, ax % ay];
    return ax || 1;
  };
  const g = (Number.isInteger(n) && Number.isInteger(d)) ? gcd(n, d) : 1;
  const sn = n / g;
  const sd = d / g;
  return {
    label: "Rasyonel Sonuç",
    value: `${sn}/${sd}`,
    formula: `(${a.n}/${a.d}) ${op} (${b.n}/${b.d}) = ${sn}/${sd}`,
    unit: ""
  };
}

function normalizeGoal(v) {
  const val = String(v || "").toLowerCase().trim();
  if (hasAny(val, ["alan", "a"])) return "alan";
  if (hasAny(val, ["cevre", "çevre", "c"])) return "çevre";
  return null;
}
function getShapeEdges() {
  if (!geometrySketch) return [];
  const inputs = [...geometrySketch.querySelectorAll("input[data-edge-index]")];
  return inputs.map((i) => parsePositive(i.value));
}
function wireGeometryInputRules(shape) {
  if (!geometrySketch) return;
  const inputs = [...geometrySketch.querySelectorAll("input[data-edge-index]")];
  if (!inputs.length) return;
  inputs.forEach((input, idx) => {
    input.addEventListener("input", () => {
      clearGeometryWarn();
      const v = input.value;
      if (!v) return;
      if (shape === "square" && idx === 0) inputs.forEach((i) => { i.value = v; });
      if (shape === "rectangle") {
        if (idx === 0 || idx === 2) { if (inputs[0].value) inputs[2].value = inputs[0].value; }
        if (idx === 1 || idx === 3) { if (inputs[1].value) inputs[3].value = inputs[1].value; }
      }
    });
  });
}
function computeGeometry(shape) {
  const edges = getShapeEdges();
  const goalInput = document.getElementById("geoGoalInput");
  const goal = normalizeGoal(goalInput ? goalInput.value : "");
  if (!goal) return { error: "Ortadaki kutuya alan veya çevre yaz." };
  if (edges.some((v) => v === null)) return { error: "Tüm gerekli kenar/r değerlerini pozitif cm olarak gir." };
  if (shape === "square") {
    const a = edges[0];
    return goal === "alan"
      ? { value: a * a, formula: `${a} x ${a} = ${a * a}`, unit: "cm²", label: "Alan" }
      : { value: 4 * a, formula: `${a} x 4 = ${4 * a}`, unit: "cm", label: "Çevre" };
  }
  if (shape === "rectangle") {
    const long = edges[0];
    const short = edges[1];
    if (!(long > short)) return { error: "Dikdörtgende uzun kenar kısa kenardan büyük olmalı." };
    const area = long * short;
    const perimeter = 2 * (long + short);
    return goal === "alan"
      ? { value: area, formula: `${long} x ${short} = ${area}`, unit: "cm²", label: "Alan" }
      : { value: perimeter, formula: `2 x (${long} + ${short}) = ${perimeter}`, unit: "cm", label: "Çevre" };
  }
  if (shape === "triangle") {
    const [a, b, c] = edges;
    const p = a + b + c;
    if (goal === "çevre") return { value: p, formula: `${a}+${b}+${c} = ${p}`, unit: "cm", label: "Çevre" };
    const s = p / 2;
    const area2 = s * (s - a) * (s - b) * (s - c);
    if (area2 <= 0) return { error: "Bu kenarlarla geçerli üçgen oluşmuyor." };
    const area = Number(Math.sqrt(area2).toFixed(2));
    return { value: area, formula: `√(s(s-a)(s-b)(s-c)) = ${area}`, unit: "cm²", label: "Alan" };
  }
  if (shape === "circle") {
    const r = edges[0];
    const area = Number((Math.PI * r * r).toFixed(2));
    const perimeter = Number((2 * Math.PI * r).toFixed(2));
    return goal === "alan"
      ? { value: area, formula: `π x ${r}² = ${area}`, unit: "cm²", label: "Alan" }
      : { value: perimeter, formula: `2π x ${r} = ${perimeter}`, unit: "cm", label: "Çevre" };
  }
  if (shape === "parallelogram") {
    const a = edges[0];
    const b = edges[1];
    const area = a * b;
    const perimeter = 2 * (a + b);
    return goal === "alan"
      ? { value: area, formula: `${a} x ${b} = ${area}`, unit: "cm²", label: "Alan" }
      : { value: perimeter, formula: `2 x (${a}+${b}) = ${perimeter}`, unit: "cm", label: "Çevre" };
  }
  if (shape === "trapezoid") {
    const [a, b, c, d] = edges;
    const perimeter = a + b + c + d;
    if (goal === "çevre") return { value: perimeter, formula: `${a}+${b}+${c}+${d} = ${perimeter}`, unit: "cm", label: "Çevre" };
    const h = Number(Math.abs(a - b).toFixed(2));
    const area = Number((((a + b) / 2) * h).toFixed(2));
    return { value: area, formula: `((${a}+${b})/2) x ${h} = ${area}`, unit: "cm²", label: "Alan" };
  }
  if (shape === "pentagon" || shape === "hexagon") {
    const n = shape === "pentagon" ? 5 : 6;
    const side = edges[0];
    const perimeter = n * side;
    if (goal === "çevre") return { value: perimeter, formula: `${side} x ${n} = ${perimeter}`, unit: "cm", label: "Çevre" };
    const area = Number(((n * side * side) / (4 * Math.tan(Math.PI / n))).toFixed(2));
    return { value: area, formula: `düzgün ${n}gen alan formülü = ${area}`, unit: "cm²", label: "Alan" };
  }
  return { error: "Bu şekil için hesaplama tanımlanamadı." };
}
function showGeometrySolveEffect() {
  const pad = geometrySketch?.querySelector(".geo-notebook");
  if (!pad) return;
  pad.classList.remove("geo-hit");
  // reflow
  void pad.offsetWidth;
  pad.classList.add("geo-hit");
}
function solveGeometryCard() {
  clearGeometryWarn();
  if (!selectedGeometryShape) {
    renderMathStudio();
    return;
  }
  const result = selectedGeometryShape === "rational"
    ? computeRationalCard()
    : computeGeometry(selectedGeometryShape);
  if (result.error) {
    showGeometryWarn(result.error);
    return;
  }
  const resultPad = document.getElementById("geoResultPad");
  if (resultPad) resultPad.textContent = `${result.label} = ${result.value}${result.unit ? " " + result.unit : ""}`;
  showGeometrySolveEffect();
  const shapeLabel = geometryShapeMeta[selectedGeometryShape]?.label || "Matematik";
  const userMsg = `Geometri/Matematik: ${shapeLabel} (${result.label})`;
  const botMsg = `🧩 ${shapeLabel} ${result.label} = ${result.value}${result.unit ? " " + result.unit : ""}
Adım: ${result.formula}`;
  startChatIfNeeded();
  addMessage(userMsg, "user");
  const thinking = addThinkingBubble("math");
  setTimeout(() => fillThinkingBubble(thinking, botMsg, "İşlem analiz edildi • sonuç hazır ✅"), 3000);
}
const tutorSteps = [
  {
    title: "👋 baluk-2.2 öğreticisine hoş geldin",
    text: "Bu kısa turda tüm ana butonları tek tek tanıtacağım.",
    target: () => modelToggle,
    before: () => plusMenu && plusMenu.classList.add("hidden")
  },
  {
    title: "🐟 Model seçme",
    text: "Baluk logolu bu butondan modeli değiştirebilirsin. Gelişmiş Matematik <b>baluk-1.5+</b>, Bellek <b>baluk-1.6+</b>, Web Arama <b>baluk-1.7+</b>, Baluk.lens <b>baluk-1.9+</b>, Test modu <b>baluk-2.1+</b> modellerde açıktır.",
    target: () => modelToggle
  },
  {
    title: "🧠 Bellek butonu",
    text: "Buradan kaydettiğin bilgileri görür, düzenler ve temizlersin.",
    target: () => memoryToggle
  },
  {
    title: "✍️ Yazma çubuğu",
    text: "Mesajlarını buraya yazarsın. Normal modda Baluk cevap üretir, Web modunda arama sonucu toplar.",
    target: () => userInput
  },
  {
    title: "➕ Araçlar menüsü",
    text: "Bu butona basınca Matematik Modu ve Web Arama Modu araçları açılır.",
    target: () => plusToggle,
    before: () => plusMenu && plusMenu.classList.add("hidden")
  },
  {
    title: "🧠 Matematik modu",
    text: "Gelişmiş Matematik Modu ile matematik stüdyosunda çok adımlı problemleri (örn: aldı-verdi-yedi zinciri) çözebilirsin.",
    target: () => advancedMathMode ? advancedMathMode.closest("label") : null,
    before: () => plusMenu && plusMenu.classList.remove("hidden")
  },
  {
    title: "🌐 Web modu (Demo)",
    text: "Web Arama Modu açıldığında sorgun webde aranır; linkler verilir. Wikipedia destekli kısa özetler baluk-2.2 akışında daha tutarlı çalışır.",
    target: () => webSearchMode ? webSearchMode.closest("label") : null,
    before: () => plusMenu && plusMenu.classList.remove("hidden")
  },
  {
    title: "🔎 Web arama nasıl çalışır?",
    text: "Web modu açıkken giriş çubuğu web temasına döner. Sorgu yaz, gönder; Baluk 9-11 sn analiz eder ve ilk 3 sonucu tıklanabilir verir.",
    target: () => userInput,
    before: () => {
      if (plusMenu) plusMenu.classList.remove("hidden");
      if (webSearchMode && !webSearchMode.checked) {
        webSearchMode.checked = true;
        setWebMode(true);
      }
    }
  },
  {
    title: "📸 Baluk.lens (1.9+)",
    text: "+ menüsünden Baluk.lens'i açarsan fotoğraf yükleyip bir bölge işaretleyebilir ve benzer görsel kaynaklarını hızlıca alabilirsin.",
    target: () => balukLensMode ? balukLensMode.closest("label") : null,
    before: () => {
      if (plusMenu) plusMenu.classList.remove("hidden");
      if (balukLensMode && !balukLensMode.checked) {
        balukLensMode.checked = true;
        setLensMode(true);
      }
    }
  },
  {
    title: "📝 Test Modu (2.1+)",
    text: "+ menüsünden Test Modu açıldığında yazdığın derse göre mini test kartı üretir; seçenekli sorularla hızlı tekrar yaparsın.",
    target: () => testModeToggle ? testModeToggle.closest("label") : null,
    before: () => {
      if (plusMenu) plusMenu.classList.remove("hidden");
      if (testModeToggle && !testModeToggle.checked) {
        testModeToggle.checked = true;
        setTestMode(true);
      }
    }
  },
  {
    title: "🧠 Thinking Modu",
    text: "Thinking açıkken daha uzun ve derin cevaplar alırsın. Ayrıca + butonu hızlı görsel yükleme moduna döner.",
    target: () => thinkingToggle,
    before: () => {
      if (!isAccountLoggedIn) return;
      setThinkingMode(true);
    }
  },
  {
    title: "☰ Yan menü",
    text: "Sağ üstteki menü butonundan hesap, premium ve yeni arka plan ayarlarına hızlıca ulaşırsın.",
    target: () => accountToggle,
    before: () => plusMenu && plusMenu.classList.add("hidden")
  },
  {
    title: "🎵 Arka Plan Ayarları",
    text: "Yan menüdeki Arka Plan Ayarları ile 10 farklı animasyonlu tema, beyaz varsayılan tema ve 10 farklı rahatlatıcı müzik seçebilirsin.",
    target: () => drawerBackgroundOpen,
    before: () => {
      if (sideDrawer) sideDrawer.classList.remove("hidden");
    }
  },
  {
    title: "🧹 Sohbeti sıfırla",
    text: "Gerekirse tüm sohbet ekranını temizlemek için bu butonu kullanırsın.",
    target: () => clearChat,
    before: () => plusMenu && plusMenu.classList.add("hidden")
  }
];
function clearTutorSpotlight() {
  [modelToggle, memoryToggle, userInput, plusToggle, clearChat, geometryToolbar, geometrySketch, accountToggle, drawerBackgroundOpen, thinkingToggle].forEach((el) => el && el.classList.remove("math-spotlight"));
  if (advancedMathMode) {
    const n = advancedMathMode.closest("label");
    if (n) n.classList.remove("math-spotlight");
  }
  if (webSearchMode) {
    const n = webSearchMode.closest("label");
    if (n) n.classList.remove("math-spotlight");
  }
  if (balukLensMode) {
    const n = balukLensMode.closest("label");
    if (n) n.classList.remove("math-spotlight");
  }
  if (testModeToggle) {
    const n = testModeToggle.closest("label");
    if (n) n.classList.remove("math-spotlight");
  }
}
function renderTutorStep() {
  if (!mathTutorOverlay || !mathTutorTitle || !mathTutorText) return;
  const step = tutorSteps[tutorStep];
  if (!step) return;
  if (typeof step.before === "function") step.before();
  mathTutorTitle.innerHTML = step.title;
  mathTutorText.innerHTML = step.text;
  clearTutorSpotlight();
  const target = step.target ? step.target() : null;
  if (target) target.classList.add("math-spotlight");
  if (mathTutorNext) mathTutorNext.classList.toggle("hidden", tutorStep >= tutorSteps.length - 1);
  if (mathTutorDone) mathTutorDone.classList.toggle("hidden", tutorStep < tutorSteps.length - 1);
}
function showTutorFinale() {
  if (!mathTutorFinale) return;
  mathTutorFinale.classList.remove("hidden");
  setTimeout(() => mathTutorFinale.classList.add("hidden"), 1600);
}
function maybeShowMathTutor() {
  if (!mathTutorOverlay || modelVersionNumber(currentModel) < 2.2) return;
  if (localStorage.getItem("balukMasterTutor22Done") === "1") return;
  tutorStep = 0;
  mathTutorOverlay.classList.remove("hidden");
  renderTutorStep();
}
function initGeometryLab() {
  if (!geometryToolbar || !geometrySketch) return;
  renderGeometrySketch(selectedGeometryShape);
  const buttons = [...geometryToolbar.querySelectorAll(".geo-btn")];
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedGeometryShape = btn.dataset.shape || null;
      renderGeometrySketch(selectedGeometryShape);
      clearGeometryWarn();
    });
  });
  if (solveGeometryBtn) solveGeometryBtn.addEventListener("click", solveGeometryCard);
}
function showMemoryToast() {
  if (!memoryToast) return;
  memoryToast.classList.remove("hidden");
  if (memoryToastTimer) clearTimeout(memoryToastTimer);
  memoryToastTimer = setTimeout(() => memoryToast.classList.add("hidden"), 2200);
}
function buildGeneralAnswerReply(input) {
  const cleaned = input.trim();
  const starter = chooseRandom([
    "Anladım, güzel noktaya değindin.",
    "Söylediğini net aldım.",
    "Bu cevabın iyi bir yön veriyor.",
    "Gayet mantıklı bir cevap oldu."
  ]);
  return `${starter} '${cleaned}' üzerinden devam edebilirim; istersen bunu adım adım plana çevireyim.`;
}
function shouldExpectFollowUp(answer) {
  const a = answer.toLowerCase();
  const yesNoPrompt = /(?:\s|^)(m[ıi]|mi)(?:\s|$|[?.!,])/i.test(a);
  const invitationPrompt = /(ister\s+.+\s+yapal[ıi]m|challenge\s+yapal[ıi]m|başlayal[ıi]m|devam\s+edelim|deneyelim)/i.test(a);
  return answer.includes("?") || yesNoPrompt || hasAny(a, [
    "sen seç:", "bana tema ver", "tema seç", "yazayım mı", "istersen",
    "challenge yapalım", "mini challenge", "ister şiir yazalım", "ister küçük bir matematik",
    "ister hikaye", "ister hikâye", "başlayalım", "devam edelim", "sen seç"
  ]) || invitationPrompt;
}
function isAffirmativeInput(inputLower) {
  return hasAny(inputLower, ["evet", "olur", "tamam", "yapalım", "hadi", "ok", "başla", "basla"]);
}
function resolveActivityChoice(inputLower) {
  if (hasAny(inputLower, ["matematik", "işlem", "hesap"])) {
    return "Süper, matematik modundayız 🧮 Bana bir işlem (örn: 12*7) ya da denklem (örn: 2x+4=18) yaz.";
  }
  if (hasAny(inputLower, ["hikaye", "hikâye"])) {
    return askThemeFor("story");
  }
  if (hasAny(inputLower, ["şiir", "siir"])) {
    return askThemeFor("poem");
  }
  if (hasAny(inputLower, ["aşk", "ask"])) {
    return generateCreativeText("poem", "aşk");
  }
  return null;
}
function resolveYesNoFromLastPrompt(inputLower) {
  const last = (lastBotResponse || "").toLowerCase();
  const yes = isAffirmativeInput(inputLower);
  const no = hasAny(inputLower, ["hayır", "hayir", "istemiyorum", "yok"]);
  if (!yes && !no) return null;
  if (no) return chooseRandom(generalNoResponses);
  const detectedTheme = detectTheme(last) || (last.match(/([a-zçğıöşü\s]+)\s+temalı/i)?.[1]?.trim() ?? null);
  const theme = detectedTheme || "doğa";
  if (hasAny(last, ["hikâye", "hikaye"])) {
    if (hasAny(last, ["tema ver", "tema seç"])) return askThemeFor("story");
    if (hasAny(last, ["yazayım", "yazalım", "mini hikâye", "mini hikaye"])) return generateCreativeText("story", theme);
  }
  if (hasAny(last, ["şiir", "siir"])) {
    if (hasAny(last, ["tema seç", "tema ver"])) return askThemeFor("poem");
    if (hasAny(last, ["yazayım", "yazalım", "kısa şiir", "temalı"])) return generateCreativeText("poem", theme);
  }
  if (hasAny(last, ["matematik", "işlem", "denklem"])) {
    return "Harika, matematikte devam edelim 🧠 Bana çözmemi istediğin işlemi yaz.";
  }
  if (hasAny(last, ["challenge", "mini challenge", "küçük bir matematik", "matematik challenge"])) {
    return "Süper! Challenge modu açıldı 🧮 İlk tur: 37 + 48 kaç eder? İstersen kendi sorunu da yazabilirsin.";
  }
  if (hasAny(last, ["plan", "adım adım", "mini plan"])) {
    return chooseRandom(goalPlanResponses);
  }
  return chooseRandom(generalYesResponses);
}
function isClearlyNewTopic(inputLower) {
  if (solveWordProblemValue(inputLower) !== null) return true;
  if (solveLinearEquation(inputLower)) return true;
  if (solveSimpleExpression(inputLower)) return true;
  const questionSignals = ["?", "kaç", "kac", "nedir", "nasıl", "nasil", "neden", "kim", "ne zaman", "hangi", "ne", "olur mu", "mümkün mü", "gerçekten", "doğru mu"];
  return questionSignals.some((token) => inputLower.includes(token));
}
function detectTheme(inputLower) {
  const theme = creativeThemes.find((t) => inputLower.includes(t));
  if (theme) return theme;
  const cleaned = inputLower.replace(/tema(?:m)?\s*(?:=|:)?\s*/g, "").trim();
  if (!cleaned) return null;
  const shortTheme = cleaned.split(/[,.;!?]/)[0].trim();
  return shortTheme && shortTheme.length <= 40 ? shortTheme : null;
}
function isCompetitorAiMention(inputLower) {
  return competitorAiKeywords.some((kw) => inputLower.includes(kw));
}
function buildAiMentionReply() {
  return chooseRandom(aiMentionResponses);
}
function askThemeFor(mode) {
  convoState.awaitingCreativeTheme = true;
  convoState.creativeMode = mode;
  return `Harika, ${mode === "story" ? "hikâye" : "şiir"} yazalım ✍️ Önce bir tema seç: ${creativeThemes.join(", ")}.`;
}
function generateCreativeText(mode, theme) {
  const normalizedTheme = theme.charAt(0).toUpperCase() + theme.slice(1);
  const template = mode === "story" ? chooseRandom(storyTemplates) : chooseRandom(poemTemplates);
  const title = mode === "story" ? `📖 ${normalizedTheme} Temalı Mini Hikâye` : `📝 ${normalizedTheme} Temalı Şiir`;
  const themedText = template
    .replaceAll("{theme}yi", `${theme}'yi`)
    .replaceAll("{theme}ye", `${theme}'ye`)
    .replaceAll("{theme}si", `${theme}'si`)
    .replaceAll("{theme}", theme);
  return `${title}
${themedText}`;
}
function saveMemory() {
  if (!isAccountLoggedIn) return;
  localStorage.setItem("balukMemory", JSON.stringify(userMemory));
}
function renderMemoryList() {
  memoryList.innerHTML = "";
  if (!supportsMemoryModel()) {
    const li = document.createElement("li");
    li.textContent = "Bellek yalnızca baluk-1.6 modelinde aktif.";
    memoryList.appendChild(li);
    return;
  }
  const entries = Object.entries(userMemory);
  if (!entries.length) {
    const li = document.createElement("li");
    li.textContent = "Henüz kayıt yok.";
    memoryList.appendChild(li);
    return;
  }
  entries.forEach(([k, v]) => {
    const li = document.createElement("li");
    li.textContent = `${k}: ${v}`;
    memoryList.appendChild(li);
  });
}
function parseMemory(input) {
  if (!supportsMemoryModel()) return null;
  const lower = input.toLowerCase();
  if (isMemoryQuestion(lower)) return null;
  let changed = false;
  memoryPatterns.forEach((p) => {
    const m = input.match(p.regex);
    if (m && m[1]) {
      userMemory[p.label] = m[1].trim();
      changed = true;
    }
  });
  if (changed) {
    saveMemory();
    renderMemoryList();
    showMemoryToast();
    return chooseRandom(memorySavedResponses);
  }
  return null;
}
function getMemoryAnswer(inputLower) {
  if (!supportsMemoryModel()) return null;
  for (const rule of memoryQuestionPatterns) {
    if (!hasAny(inputLower, rule.checks)) continue;
    const known = rule.labels.filter((label) => userMemory[label]);
    if (!known.length) {
      return "Bu bilgi belleğimde henüz yok 🤔 Bana 'Benim adım ...', 'yaşım ...' gibi yazarsan kaydederim.";
    }
    if (rule.labels.length === 1) {
      const label = rule.labels[0];
      return `${label} bilgin: ${userMemory[label]}`;
    }
    const summary = known.map((label) => `${label}: ${userMemory[label]}`).join("\n");
    return `Belleğinde şunlar var:
${summary}`;
  }
  return null;
}
function isMemoryQuestion(inputLower) {
  return memoryQuestionPatterns.some((rule) => hasAny(inputLower, rule.checks));
}
function startIntroAmbientHum() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  if (!introAudioCtx) introAudioCtx = new AudioCtx();
  const now = introAudioCtx.currentTime;
  if (introAudioCtx.state === "suspended") {
    introAudioCtx.resume().catch(() => {});
  }
  if (introAmbientNodes.length) return;
  const master = introAudioCtx.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.018, now + 1.6);
  master.connect(introAudioCtx.destination);
  const oscA = introAudioCtx.createOscillator();
  oscA.type = "sine";
  oscA.frequency.setValueAtTime(72, now);
  const oscB = introAudioCtx.createOscillator();
  oscB.type = "triangle";
  oscB.frequency.setValueAtTime(108, now);
  const wobble = introAudioCtx.createOscillator();
  wobble.type = "sine";
  wobble.frequency.value = 0.12;
  const wobbleGain = introAudioCtx.createGain();
  wobbleGain.gain.value = 5;
  const filter = introAudioCtx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 260;
  filter.Q.value = 0.6;
  wobble.connect(wobbleGain);
  wobbleGain.connect(filter.frequency);
  oscA.connect(filter);
  oscB.connect(filter);
  filter.connect(master);
  oscA.start(now);
  oscB.start(now);
  wobble.start(now);
  introAmbientNodes = [oscA, oscB, wobble, wobbleGain, filter, master];
}
function stopIntroAmbientHum(fast = false) {
  if (!introAudioCtx || !introAmbientNodes.length) return;
  const now = introAudioCtx.currentTime;
  const master = introAmbientNodes[introAmbientNodes.length - 1];
  if (master && master.gain) {
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(Math.max(master.gain.value, 0.0001), now);
    master.gain.exponentialRampToValueAtTime(0.0001, now + (fast ? 0.25 : 0.7));
  }
  setTimeout(() => {
    try {
      introAmbientNodes.forEach((n) => {
        if (n && typeof n.stop === "function") n.stop();
      });
    } catch {}
    introAmbientNodes = [];
  }, fast ? 320 : 760);
}
function startIntroWhooshAudio() {
  stopIntroWhooshAudio();
  stopIntroAmbientHum(true);
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  if (!introAudioCtx) introAudioCtx = new AudioCtx();
  const now = introAudioCtx.currentTime;
  if (introAudioCtx.state === "suspended") introAudioCtx.resume().catch(() => {});
  const master = introAudioCtx.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.08, now + 0.35);
  master.gain.exponentialRampToValueAtTime(0.12, now + 1.25);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 4.8);
  master.connect(introAudioCtx.destination);
  const osc = introAudioCtx.createOscillator();
  osc.type = "sine";
  osc.frequency.setValueAtTime(170, now);
  osc.frequency.exponentialRampToValueAtTime(260, now + 1.1);
  osc.frequency.exponentialRampToValueAtTime(232, now + 1.45);
  osc.frequency.exponentialRampToValueAtTime(210, now + 4.2);
  const lfo = introAudioCtx.createOscillator();
  lfo.type = "sine";
  lfo.frequency.value = 0.42;
  const lfoGain = introAudioCtx.createGain();
  lfoGain.gain.value = 22;
  const filter = introAudioCtx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(700, now);
  filter.frequency.exponentialRampToValueAtTime(1500, now + 1.4);
  filter.frequency.exponentialRampToValueAtTime(900, now + 2.7);
  lfo.connect(lfoGain);
  lfoGain.connect(osc.frequency);
  osc.connect(filter);
  filter.connect(master);
  osc.start(now);
  lfo.start(now);
  osc.stop(now + 5.0);
  lfo.stop(now + 5.0);
  introAudioNodes = [osc, lfo, master, filter, lfoGain];
}
function stopIntroWhooshAudio() {
  try {
    introAudioNodes.forEach((n) => {
      if (n && typeof n.stop === "function") n.stop();
    });
  } catch {}
  introAudioNodes = [];
  if (introAudioCtx && !introAmbientNodes.length) {
    introAudioCtx.close().catch(() => {});
    introAudioCtx = null;
  }
}
function openAppWithTransition() {
  if (!introGate || !appRoot) return;

  const revealApp = () => {
    stopIntroWhooshAudio();
    if (enterTransition) enterTransition.classList.add("hidden");
    appRoot.classList.remove("hidden");
    showThinkingPromo();
    if (userInput) userInput.focus();
    setTimeout(() => maybeShowMathTutor(), 220);
  };

  introGate.classList.add("hidden");
  if (enterTransition) enterTransition.classList.remove("hidden");

  try {
    startIntroWhooshAudio();
  } catch {}

  const TRANSITION_MS = 4200;
  setTimeout(revealApp, TRANSITION_MS);

  // Güvenlik ağı: herhangi bir timer/ses sorunu olursa yine de uygulamayı aç.
  setTimeout(() => {
    if (appRoot.classList.contains("hidden")) revealApp();
  }, TRANSITION_MS + 1200);
}
function applyPersonalization(response) {
  if (!supportsMemoryModel()) return response;
  const name = userMemory.Ad;
  if (!name) return response;
  const trimmed = String(response || "").trim();
  if (!trimmed) return response;
  if (trimmed.toLowerCase().startsWith(`${String(name).toLowerCase()},`)) return response;
  return `${name}, ${response}`;
}
function ensureEmojiTone(text) {
  const input = String(text || "").trim();
  if (!input) return input;
  if (/[\u{1F300}-\u{1FAFF}\u2600-\u27BF]/u.test(input)) return input;
  return `${input} 🙂`;
}
function makeChatTitleFromText(text = "") {
  const cleaned = String(text || "").replace(/\s+/g, " ").trim();
  if (!cleaned) return "Yeni Sohbet";
  return cleaned.length > 44 ? `${cleaned.slice(0, 44)}…` : cleaned;
}
function createNewChatSession(initialTitle = "Yeni Sohbet") {
  return {
    id: `chat_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    title: initialTitle,
    messages: [],
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
}
function saveChatSessions() {
  if (!isAccountLoggedIn) return;
  localStorage.setItem(CHAT_SESSIONS_STORAGE_KEY, JSON.stringify({ activeChatId, sessions: chatSessions }));
}
function getActiveSession() {
  return chatSessions.find((s) => s.id === activeChatId) || null;
}
function ensureActiveChatSession() {
  if (!chatSessions.length) {
    const first = createNewChatSession();
    chatSessions = [first];
    activeChatId = first.id;
  }
  if (!getActiveSession()) {
    activeChatId = chatSessions[0]?.id || null;
  }
}
function renderChatList() {
  if (!chatList) return;
  chatList.innerHTML = "";
  ensureActiveChatSession();
  chatSessions
    .slice()
    .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
    .forEach((session) => {
      const row = document.createElement("div");
      row.className = `chat-list-item${session.id === activeChatId ? " active" : ""}`;
      row.innerHTML = `
        <button type="button" class="chat-open-btn">💬 <span>${session.title || "Yeni Sohbet"}</span></button>
        <div class="chat-item-menu-wrap">
          <button type="button" class="chat-item-menu-btn" aria-label="Sohbet seçenekleri">⋯</button>
          <div class="chat-item-menu hidden">
            <button type="button" data-action="rename">✏️ İsmi Değiştir</button>
            <button type="button" data-action="delete">🗑️ Sil</button>
          </div>
        </div>
      `;
      const openBtn = row.querySelector(".chat-open-btn");
      const menuBtn = row.querySelector(".chat-item-menu-btn");
      const menu = row.querySelector(".chat-item-menu");
      if (openBtn) {
        openBtn.addEventListener("click", () => switchToChatSession(session.id));
      }
      if (menuBtn && menu) {
        menuBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          chatList.querySelectorAll(".chat-item-menu").forEach((m) => m !== menu && m.classList.add("hidden"));
          menu.classList.toggle("hidden");
        });
        menu.querySelectorAll("button[data-action]").forEach((actionBtn) => {
          actionBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const action = actionBtn.dataset.action;
            if (action === "rename") {
              const next = prompt("Yeni sohbet adı:", session.title || "Yeni Sohbet");
              if (next && next.trim()) {
                session.title = next.trim();
                session.updatedAt = Date.now();
                saveChatSessions();
                renderChatList();
              }
            }
            if (action === "delete") {
              if (chatSessions.length <= 1) {
                alert("En az bir sohbet kalmalı.");
              } else if (confirm("Bu sohbet silinsin mi?")) {
                chatSessions = chatSessions.filter((s) => s.id !== session.id);
                if (activeChatId === session.id) activeChatId = chatSessions[0]?.id || null;
                saveChatSessions();
                switchToChatSession(activeChatId);
              }
            }
            menu.classList.add("hidden");
          });
        });
      }
      chatList.appendChild(row);
    });
}
function renderActiveChatMessages() {
  chat.innerHTML = "";
  const session = getActiveSession();
  const messages = session?.messages || [];
  if (!messages.length) {
    hasStartedChat = false;
    chat.classList.add("hidden");
    splash.classList.remove("hidden");
    updateSplashPrompt();
    return;
  }
  hasStartedChat = true;
  splash.classList.add("hidden");
  chat.classList.remove("hidden");
  messages.forEach((msg) => {
    const n = document.createElement("div");
    n.className = `msg ${msg.role || "bot"}`;
    n.textContent = msg.role === "bot" ? ensureEmojiTone(msg.text || "") : (msg.text || "");
    chat.appendChild(n);
  });
  chat.scrollTop = chat.scrollHeight;
}
function switchToChatSession(id) {
  activeChatId = id;
  ensureActiveChatSession();
  renderChatList();
  renderActiveChatMessages();
  saveChatSessions();
  if (sideDrawer) sideDrawer.classList.add("hidden");
}
function createAndSwitchNewChat() {
  const session = createNewChatSession();
  chatSessions.unshift(session);
  activeChatId = session.id;
  renderChatList();
  renderActiveChatMessages();
  saveChatSessions();
  showThinkingPromo();
}
function appendMessageToActiveSession(role, text) {
  ensureActiveChatSession();
  const session = getActiveSession();
  if (!session) return;
  const cleanText = String(text || "").trim();
  if (!cleanText) return;
  if (role === "user" && (!session.title || session.title === "Yeni Sohbet") && session.messages.length === 0) {
    session.title = makeChatTitleFromText(cleanText);
  }
  session.messages.push({ role, text: cleanText, at: Date.now() });
  session.updatedAt = Date.now();
  saveChatSessions();
  renderChatList();
}
function restoreChatSessions() {
  const raw = localStorage.getItem(CHAT_SESSIONS_STORAGE_KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed?.sessions) && parsed.sessions.length) {
        chatSessions = parsed.sessions;
        activeChatId = parsed.activeChatId || parsed.sessions[0].id;
      }
    } catch {}
  }
  ensureActiveChatSession();
  renderChatList();
  renderActiveChatMessages();
}
function addMessage(text, role) {
  const n = document.createElement("div");
  n.className = `msg ${role}`;
  chat.appendChild(n);
  chat.scrollTop = chat.scrollHeight;
  appendMessageToActiveSession(role, text);
  if (role === "bot") {
    n.classList.add("typing-active");
    typeTextSlowly(n, ensureEmojiTone(text), { baseDelay: 10, punctuationDelay: 34 }).finally(() => n.classList.remove("typing-active"));
    return;
  }
  n.textContent = role === "bot" ? ensureEmojiTone(text) : text;
}
function addThinkingBubble(kind = "default") {
  const n = document.createElement("div");
  const flavor = kind === "math" ? "thinking-math" : kind === "web" ? "thinking-web" : kind === "test" ? "thinking-test" : "";
  const useThinkingVisual = thinkingModeEnabled && kind === "default";
  n.className = `msg bot thinking-bubble ${flavor}`;
  const title = kind === "math"
    ? "İşlem analiz ediliyor..."
    : kind === "web"
      ? "Web'den buluyorum..."
      : kind === "test"
        ? "Test oluşturuluyor..."
        : "Baluk düşünüyor...";
  n.innerHTML = useThinkingVisual
    ? `
      <div class="thinking-head thinking-head-deep">
        <div class="think-fish-stage">
          <svg class="fish-logo think-fish think-fish-static" viewBox="0 0 520 220" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#baluk-fish"></use></svg>
          <span class="think-gear-bubble" aria-hidden="true">${getUiIconSvg("gear", "thinking-cog-icon")}</span>
        </div>
        <div class="thinking-status-stack">
          <span>${title}</span>
        </div>
      </div>
    `
    : `
      <div class="thinking-head">
        <svg class="fish-logo think-fish spin-fast" viewBox="0 0 520 220" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#baluk-fish"></use></svg>
        <span>${title}</span>
      </div>
    `;
  chat.appendChild(n);
  chat.scrollTop = chat.scrollHeight;
  return n;
}
function updateThinkingStatus(node, status) {
  if (!node || !status) return;
  const statusEl = node.querySelector(".thinking-head span");
  if (statusEl) statusEl.textContent = status;
}
function startWebThinkingProgress(node, totalMs) {
  if (!node) return () => {};
  const steps = [
    { at: 1200, text: "Web'den alıyorum..." },
    { at: Math.max(2200, Math.round(totalMs * 0.45)), text: "Web'den yazıya döküyorum..." },
    { at: Math.max(3200, Math.round(totalMs * 0.72)), text: "Kaynakları birleştiriyorum..." },
    { at: Math.max(4200, Math.round(totalMs * 0.9)), text: "Son dokunuşlar yapılıyor..." }
  ];
  const timers = steps.map((step) => setTimeout(() => updateThinkingStatus(node, step.text), step.at));
  return () => timers.forEach((t) => clearTimeout(t));
}
function fillThinkingBubble(node, text, doneStatus = "") {
  if (!node) return;
  const fish = node.querySelector(".think-fish");
  if (fish) fish.classList.remove("spin-fast");
  if (doneStatus) updateThinkingStatus(node, doneStatus);
  let content = node.querySelector(".thinking-answer");
  if (!content) {
    content = document.createElement("div");
    content.className = "thinking-answer";
    node.appendChild(content);
  }
  content.classList.add("typing-active");
  typeTextSlowly(content, ensureEmojiTone(text), { baseDelay: 10, punctuationDelay: 36 }).finally(() => content.classList.remove("typing-active"));
  appendMessageToActiveSession("bot", text);
}
function openSafetySurveyModal(category = "generic") {
  if (!safetySurveyModal) return;
  safetySurveyModal.dataset.category = category;
  safetySurveyModal.classList.remove("hidden");
}
function closeSafetySurvey() {
  if (!safetySurveyModal) return;
  safetySurveyModal.classList.add("hidden");
}
function surveyReplyByReason(reason, category) {
  const map = {
    "bunaldim": "Bunu paylaştığın için teşekkür ederim 💙 Bunalmış hissettiğinde önce güvenli kalmak önemli: nefesini yavaşlat, yalnız kalma ve bir yakınından destek iste. İstersen şimdi birlikte 5 dakikalık sakinleşme planı yapalım.",
    "merak": "Merak duygun çok doğal 🌟 Ancak riskli/yasa dışı alanlarda merakı güvenli kanallara taşımak en sağlıklısı. İstersen aynı konunun güvenli ve yasal öğrenme tarafını adım adım göstereyim.",
    "zarar-baskasi": "Bu duygu ciddiye alınmalı. Kimseye zarar vermeye dönüşmeden önce uzaklaşma + sakinleşme + destek alma adımı çok kritik. İstersen öfke yönetimi için kısa bir acil plan çıkaralım.",
    "zarar-kendim": "Bunu söylediğin için gerçekten teşekkür ederim. Bu noktada yalnız kalmaman ve bir destek kişisine hemen ulaşman çok önemli. Eğer risk yüksekse lütfen acil yardıma başvur. Ben de burada kalabilirim.",
    "saka": "Anladım 🙂 Yine de bu tür konular hassas olduğu için güvenlik dilini koruyorum. İstersen şimdi tamamen güvenli bir konuya geçip üretken bir şey yapalım."
  };
  const prefix = category === "self_harm" ? "🫂" : "🛡️";
  return `${prefix} ${map[reason] || map['merak']}`;
}
function appendSafetySurveyPrompt() {
  const category = pendingSafetySurvey || "generic";
  const wrap = document.createElement("div");
  wrap.className = "msg bot safety-survey";
  wrap.innerHTML = `
    <div class="survey-title">İstersen detaylı anketi başlatabilirim.</div>
    <button type="button" class="survey-start-btn" data-category="${category}">Neden bunu yapmak istedin?</button>
  `;
  const btn = wrap.querySelector(".survey-start-btn");
  if (btn) {
    btn.addEventListener("click", () => openSafetySurveyModal(btn.dataset.category || "generic"));
  }
  chat.appendChild(wrap);
  chat.scrollTop = chat.scrollHeight;
}
function solveSimpleExpression(input) {
  const normalized = input.toLowerCase().replaceAll("x", "*").replaceAll("çarpı", "*").replaceAll("kere", "*").replaceAll("bölü", "/").replaceAll("artı", "+").replaceAll("eksi", "-").replace(/[^0-9+\-*/()., ]/g, "").replaceAll(",", ".").trim();
  if (!/[0-9]/.test(normalized) || !/[+\-*/]/.test(normalized)) return null;
  try {
    const value = Function(`"use strict"; return (${normalized});`)();
    if (Number.isFinite(value)) return `Sonuç: ${value} ✅`;
  } catch { return null; }
  return null;
}
function solveLinearEquation(input) {
  const compact = input.toLowerCase().replace(/\s+/g, "");
  const m = compact.match(/^([+-]?\d*)x([+-]\d+)?=([+-]?\d+)$/);
  if (!m) return null;
  const a = m[1] === "" || m[1] === "+" ? 1 : m[1] === "-" ? -1 : Number(m[1]);
  const b = Number(m[2] || "+0");
  const c = Number(m[3]);
  if (a === 0) return "Bu denklemde x katsayısı 0 olduğu için klasik çözüm yok.";
  return `Denklem çözümü: x = ${(c - b) / a}`;
}

function normalizeSuperscriptExpression(input = "") {
  const map = { "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9", "⁻": "-" };
  return String(input || "").replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]/g, (ch) => map[ch] || ch);
}
function solvePowerExpression(input) {
  const raw = String(input || "").trim();
  const superMap = { "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9", "⁻": "-" };
  const direct = raw.match(/^([+-]?\d+(?:[.,]\d+)?)([⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+)$/);
  if (direct) {
    const base = Number(direct[1].replace(",", "."));
    const exp = Number([...direct[2]].map((ch) => superMap[ch] || "").join(""));
    if (Number.isFinite(base) && Number.isFinite(exp)) {
      const result = base ** exp;
      if (Number.isFinite(result)) return `Üslü sayı sonucu: ${result} ✅`;
    }
  }
  const normalized = normalizeSuperscriptExpression(input).replace(/,/g, ".").trim();
  const compact = normalized.replace(/\s+/g, "");
  const m = compact.match(/^([+-]?\d+(?:\.\d+)?)(?:\^|\*\*)([+-]?\d+)$/);
  if (!m) return null;
  const base = Number(m[1]);
  const exp = Number(m[2]);
  if (!Number.isFinite(base) || !Number.isFinite(exp)) return null;
  const result = base ** exp;
  if (!Number.isFinite(result)) return null;
  return `Üslü sayı sonucu: ${result} ✅`;
}
function solveRootExpression(input) {
  const raw = String(input || "").toLowerCase().replace(/,/g, ".").trim();
  const m = raw.match(/^(?:√\s*([+-]?\d+(?:\.\d+)?)|karekök(?:ü|u)?\s*(?:\(?\s*([+-]?\d+(?:\.\d+)?)\s*\)?)|sqrt\s*\(?\s*([+-]?\d+(?:\.\d+)?)\s*\)?)$/i);
  if (!m) return null;
  const n = Number(m[1] || m[2] || m[3]);
  if (!Number.isFinite(n)) return null;
  if (n < 0) return "Köklü ifade (gerçel sayılarda) tanımsız.";
  return `Köklü sayı sonucu: ${Math.sqrt(n)} ✅`;
}
function solveAbsoluteValue(input) {
  const raw = String(input || "").replace(/,/g, ".").trim();
  const m = raw.match(/^\|\s*([+-]?\d+(?:\.\d+)?)\s*\|$/);
  if (!m) return null;
  const n = Number(m[1]);
  if (!Number.isFinite(n)) return null;
  return `Mutlak değer sonucu: ${Math.abs(n)} ✅`;
}
function solveRatioProportion(input) {
  const raw = String(input || "").toLowerCase().replace(/,/g, ".").trim();
  const compact = raw.replace(/\s+/g, "");
  const prop = compact.match(/^([+-]?\d+(?:\.\d+)?):([+-]?\d+(?:\.\d+)?)=([+-]?\d+(?:\.\d+)?):x$/i);
  if (prop) {
    const a = Number(prop[1]);
    const b = Number(prop[2]);
    const c = Number(prop[3]);
    if (!a) return "Orantıda ilk değer 0 olamaz.";
    return `Orantı sonucu: x = ${(b * c) / a}`;
  }
  const ratio = raw.match(/([+-]?\d+(?:\.\d+)?)\s*(?:ve|ile|:)\s*([+-]?\d+(?:\.\d+)?)\s*(?:oranı|orani|oran)\s*(?:nedir)?/i);
  if (ratio) {
    const a = Number(ratio[1]);
    const b = Number(ratio[2]);
    if (!b) return "Oran tanımsız (ikinci değer 0).";
    return `Oran sonucu: ${a / b}`;
  }
  return null;
}
function solvePercentageProblem(input) {
  const raw = String(input || "").toLowerCase().replace(/,/g, ".");
  let m = raw.match(/([+-]?\d+(?:\.\d+)?)\s*(?:sayısının|sayisinin|nin|nın|nun|nün)?\s*%\s*([+-]?\d+(?:\.\d+)?)\s*(?:'si|si|sı|su|sü|u)?/i);
  if (m) {
    const num = Number(m[1]);
    const pct = Number(m[2]);
    return `%${pct} değeri: ${(num * pct) / 100}`;
  }
  m = raw.match(/%\s*([+-]?\d+(?:\.\d+)?)\s*(?:indirim|artış|artis)\s*(?:ile|sonrası|sonrasi)?\s*([+-]?\d+(?:\.\d+)?)/i);
  if (m) {
    const pct = Number(m[1]);
    const num = Number(m[2]);
    const discount = hasAny(raw, ["indirim", "azal"]);
    const result = discount ? num * (1 - pct / 100) : num * (1 + pct / 100);
    return discount ? `İndirimli fiyat: ${result}` : `Artış sonrası değer: ${result}`;
  }
  return null;
}
function solveAgeProblem(input) {
  const raw = String(input || "").toLowerCase();
  const nums = (raw.match(/\d+/g) || []).map(Number);
  if (nums.length < 2 || !hasAny(raw, ["yaş", "yas"])) return null;
  if (hasAny(raw, ["yıl sonra", "yil sonra"])) {
    return `Yaş problemi sonucu: ${nums[0] + nums[1]}`;
  }
  if (hasAny(raw, ["yıl önce", "yil once", "yıl evvel", "yil evvel"])) {
    return `Yaş problemi sonucu: ${nums[0] - nums[1]}`;
  }
  return null;
}
function solveSpeedTimeDistance(input) {
  const raw = String(input || "").toLowerCase().replace(/,/g, ".");
  const nums = (raw.match(/-?\d+(?:\.\d+)?/g) || []).map(Number);
  if (nums.length < 2) return null;
  const hasHiz = hasAny(raw, ["hız", "hiz"]);
  const hasZaman = hasAny(raw, ["zaman", "saat"]);
  const hasYol = hasAny(raw, ["yol", "mesafe", "km"]);
  if (hasHiz && hasZaman && hasYol) {
    return `Yol sonucu: ${nums[0] * nums[1]}`;
  }
  if (hasYol && hasZaman && hasAny(raw, ["hız kaç", "hiz kac", "hız nedir", "hiz nedir"])) {
    if (!nums[1]) return "Tanımsız (zaman 0).";
    return `Hız sonucu: ${nums[0] / nums[1]}`;
  }
  if (hasYol && hasHiz && hasAny(raw, ["kaç saat", "kac saat", "zaman kaç", "zaman kac"])) {
    if (!nums[1]) return "Tanımsız (hız 0).";
    return `Zaman sonucu: ${nums[0] / nums[1]}`;
  }
  return null;
}
function solveProfitLossProblem(input) {
  const raw = String(input || "").toLowerCase().replace(/,/g, ".");
  if (!hasAny(raw, ["kar", "kâr", "zarar", "maliyet", "satış", "satis"])) return null;
  const nums = (raw.match(/-?\d+(?:\.\d+)?/g) || []).map(Number);
  if (nums.length < 2) return null;
  const cost = nums[0];
  const sale = nums[1];
  const diff = sale - cost;
  if (diff >= 0) return `Kâr: ${diff}`;
  return `Zarar: ${Math.abs(diff)}`;
}
function solveWorkerProblem(input) {
  const raw = String(input || "").toLowerCase();
  if (!hasAny(raw, ["işçi", "isci", "gün", "gun"])) return null;
  const nums = (raw.match(/\d+(?:[.,]\d+)?/g) || []).map((n) => Number(n.replace(",", ".")));
  if (nums.length < 3) return null;
  const [w1, d1, w2] = nums;
  if (!w2) return "Tanımsız (işçi sayısı 0).";
  return `İşçi problemi sonucu: ${((w1 * d1) / w2).toFixed(2)} gün`;
}
function solveNaturalLanguageMath(input) {
  const raw = String(input || "").toLowerCase().replace(/,/g, ".");
  const nums = (raw.match(/-?\d+(?:\.\d+)?/g) || []).map(Number);

  if (hasAny(raw, ["üssü", "ussu", "üzeri", "uzeri", "üslü", "uslu"]) && nums.length >= 2) {
    const [base, exp] = nums;
    if (Number.isFinite(base) && Number.isFinite(exp)) {
      return `Üslü sayı sonucu: ${base ** exp} ✅`;
    }
  }

  if (hasAny(raw, ["karekök", "karekok", "kök", "kok"]) && nums.length >= 1) {
    const n = nums[0];
    if (n < 0) return "Köklü ifade (gerçel sayılarda) tanımsız.";
    return `Köklü sayı sonucu: ${Math.sqrt(n)} ✅`;
  }

  if (hasAny(raw, ["mutlak", "mutlak değer", "mutlak deger"]) && nums.length >= 1) {
    return `Mutlak değer sonucu: ${Math.abs(nums[0])} ✅`;
  }

  if (hasAny(raw, ["oran", "orantı", "oranti"]) && nums.length >= 2) {
    if (nums.length >= 3 && /x/.test(raw)) {
      if (!nums[0]) return "Orantıda ilk değer 0 olamaz.";
      return `Orantı sonucu: x = ${(nums[1] * nums[2]) / nums[0]}`;
    }
    if (!nums[1]) return "Oran tanımsız (ikinci değer 0).";
    return `Oran sonucu: ${nums[0] / nums[1]}`;
  }

  return null;
}
const scienceKnowledge = [
  { keys: ["hidrojen"], info: "Hidrojen (H): Atom numarası 1, evrendeki en bol elementtir ve yanıcı bir gazdır." },
  { keys: ["helyum"], info: "Helyum (He): Atom numarası 2, soy gazdır; balonlarda ve kriyojenikte kullanılır." },
  { keys: ["oksijen"], info: "Oksijen (O): Atom numarası 8, solunum için hayati ve yanmayı destekler." },
  { keys: ["karbon"], info: "Karbon (C): Atom numarası 6, organik kimyanın temelidir." },
  { keys: ["azot"], info: "Azot (N): Atom numarası 7, havanın yaklaşık %78'ini oluşturur." },
  { keys: ["sodyum"], info: "Sodyum (Na): Atom numarası 11, reaktif bir alkali metaldir." },
  { keys: ["potasyum"], info: "Potasyum (K): Atom numarası 19, canlı hücrelerde elektrolit dengesinde kritik rol oynar." },
  { keys: ["kalsiyum"], info: "Kalsiyum (Ca): Atom numarası 20, kemik ve diş sağlığı için önemlidir." },
  { keys: ["demir"], info: "Demir (Fe): Atom numarası 26, hemoglobinin temel bileşenlerinden biridir." },
  { keys: ["bakır"], info: "Bakır (Cu): Atom numarası 29, iyi bir elektrik iletkenidir." },
  { keys: ["gümüş"], info: "Gümüş (Ag): Atom numarası 47, iletkenliği yüksek bir metaldir." },
  { keys: ["altın"], info: "Altın (Au): Atom numarası 79, korozyona dayanıklı değerli metaldir." },
  { keys: ["klor"], info: "Klor (Cl): Atom numarası 17, dezenfeksiyon ve kimyasal üretimde kullanılır." },
  { keys: ["magnezyum"], info: "Magnezyum (Mg): Atom numarası 12, biyokimyasal reaksiyonlarda önemli bir mineraldir." },
  { keys: ["silisyum", "silikon"], info: "Silisyum (Si): Atom numarası 14, elektronik ve yarı iletken teknolojilerinde kritik elementtir." }
];
function buildScienceReply(inputLower = "") {
  const l = String(inputLower || "").toLocaleLowerCase("tr-TR");
  const hit = scienceKnowledge.find((item) => item.keys.some((k) => l.includes(k)));
  if (!hit) return null;
  return `🔬 ${hit.info} İstersen bu elementin kullanım alanlarını ve günlük hayattaki örneklerini de çıkarabilirim.`;
}
function solveWordProblemValue(input) {
  const q = String(input || "").toLowerCase();
  if (/\d\s*[x*+/\-]\s*\d/.test(q) || q.includes("=")) return null;
  const numRegex = /-?\d+(?:[.,]\d+)?/g;
  const occ = [];
  let m;
  while ((m = numRegex.exec(q)) !== null) {
    occ.push({ value: Number(m[0].replace(",", ".")), index: m.index, raw: m[0] });
  }
  if (occ.length < 2 || occ.some((n) => !Number.isFinite(n.value))) return null;
  const minusVerbs = [
    "verdi", "yed", "att", "kaybet", "harca", "çıkar", "cikar", "azal", "eksil", "sat", "gitti", "gitt"
  ];
  const plusVerbs = [
    "ald", "bul", "kazan", "topla", "ekl", "geld", "katıl", "katil", "ekle", "koy"
  ];
  const asksRemaining = hasAny(q, ["kaç kaldı", "kac kaldi", "ne kadar kaldı", "ne kadar kaldi", "kaç tane kaldı", "kac tane kaldi"]);
  const asksTotal = hasAny(q, ["kaç oldu", "kac oldu", "toplam", "ne kadar oldu", "kaç tane oldu", "kac tane oldu"]);
  const hasMinus = (t) => hasAny(t, minusVerbs);
  const hasPlus = (t) => hasAny(t, plusVerbs);
  let total = occ[0].value;
  for (let i = 1; i < occ.length; i += 1) {
    const prev = occ[i - 1];
    const cur = occ[i];
    const next = occ[i + 1];
    const afterSlice = q.slice(cur.index, next ? next.index : Math.min(q.length, cur.index + 48));
    const beforeSlice = q.slice(Math.max(0, prev.index), cur.index + cur.raw.length);
    let sign = 0;
    const afterMinus = hasMinus(afterSlice);
    const afterPlus = hasPlus(afterSlice);
    if (afterMinus && !afterPlus) sign = -1;
    else if (afterPlus && !afterMinus) sign = +1;
    else {
      const beforeMinus = hasMinus(beforeSlice);
      const beforePlus = hasPlus(beforeSlice);
      if (beforeMinus && !beforePlus) sign = -1;
      else if (beforePlus && !beforeMinus) sign = +1;
    }
    if (!sign) {
      if (asksRemaining && !asksTotal) sign = -1;
      else sign = +1;
    }
    total += sign * cur.value;
  }
  if (asksRemaining && hasAny(q, ["kalan", "kalanı", "kalani", "hepsini", "tamamını", "tamamini"]) && hasAny(q, ["yed", "harca", "verdi"])) {
    return 0;
  }
  return Number(total.toFixed(6));
}
function solveWordProblem(input) {
  const value = solveWordProblemValue(input);
  if (value === null) return null;
  return `Problem sonucu: ${value} ✅`;
}
function updateModelVisual() {
  if (!currentModelBadge) return;
  if (!isAccountLoggedIn) {
    currentModelBadge.textContent = "Baluk nano";
    currentModelBadge.classList.remove("premium-model-badge", "balle-model-badge");
    if (modelMenu) modelMenu.classList.add("hidden");
    updateComposerModeUI();
    closeVoiceMode();
    return;
  }
  if (advancedMathEnabled) {
    currentModelBadge.textContent = "matematik modu";
    currentModelBadge.classList.remove("premium-model-badge");
    return;
  }
  const premiumModelLabel = currentModel === "baluk-1.7" && isPremiumUser ? "premium-1.7" : currentModel;
  currentModelBadge.textContent = premiumModelLabel;
  currentModelBadge.classList.toggle("premium-model-badge", premiumModelLabel === "premium-1.7");
  currentModelBadge.classList.remove("balle-model-badge");
  updateComposerModeUI();
  if (!supportsVoiceModel()) closeVoiceMode();
}
function updateMemoryAvailability() {
  clearMemory.disabled = !supportsMemoryModel();
  clearMemory.style.opacity = supportsMemoryModel() ? "1" : ".55";
  clearMemory.style.cursor = supportsMemoryModel() ? "pointer" : "not-allowed";
  renderMemoryList();
}
function updateGeneralQuestionState(answer) {
  convoState.awaitingGeneralAnswer = supportsContextModel() && shouldExpectFollowUp(answer);
}
function resolveFollowUp(input) {
  if (!supportsContextModel()) return null;
  const l = input.toLowerCase();
  if (convoState.awaitingEpsteinList && hasAny(l, ["evet", "olur", "tamam", "5 madde", "beş madde", "5 maddeye ayır", "beş maddeye ayır"])) {
    convoState.awaitingEpsteinList = false;
    return chooseRandom(epsteinListResponses);
  }
  if (convoState.awaitingCreativeTheme && convoState.creativeMode) {
    const theme = detectTheme(l);
    if (theme) {
      const mode = convoState.creativeMode;
      convoState.awaitingCreativeTheme = false;
      convoState.creativeMode = null;
      return generateCreativeText(mode, theme);
    }
    return `Temayı yakalayamadım 🤔 Şunlardan birini yazabilirsin: ${creativeThemes.join(", ")}.`;
  }
  if (hasAny(l, ["ne yapalım", "ne yapalim", "napalım", "napalim"])) {
    convoState.awaitingActivityChoice = true;
    return "Hazırım 💙 Sen seç: matematik / şiir / hikâye. İstersen direkt tema da yazabilirsin (örn: aşk, doğa, umut).";
  }
  if (convoState.awaitingActivityChoice) {
    const picked = resolveActivityChoice(l);
    if (picked) {
      if (!hasAny(l, ["hikaye", "hikâye", "şiir", "siir"])) convoState.awaitingActivityChoice = false;
      return picked;
    }
  }
  if (convoState.awaitingMoodReply && (hasAny(l, ["iyiyim", "i̇yiyim", "ben de iyiyim", "bende iyiyim", "harikayım", "süperim", "motiveyim", "mutluyum", "yorgunum", "stresliyim", "sıkıldım", "üzgünüm", "iyiyim teşekkürler", "iyiyim tesekkurler"]) || /(^|\s)(i̇?yiyim|iyiyim)(\s|$|[?.!,])/.test(l))) {
    convoState.awaitingMoodReply = false;
    return chooseRandom(iyiyimFollowUpResponses);
  }
  if (convoState.awaitingGoalPlan && hasAny(l, ["hedef koyalım", "tamam", "olur", "hadi"])) {
    convoState.awaitingGoalPlan = false;
    return chooseRandom(goalPlanResponses);
  }
  if (convoState.awaitingGeneralAnswer) {
    const fromPrompt = resolveYesNoFromLastPrompt(l);
    if (fromPrompt) return fromPrompt;
    if (isClearlyNewTopic(l)) {
      convoState.awaitingGeneralAnswer = false;
      return null;
    }
    if (hasAny(l, ["plan", "adım", "adim", "devam", "detay", "anlat"])) {
      convoState.awaitingGeneralAnswer = false;
      return buildGeneralAnswerReply(input);
    }
    convoState.awaitingGeneralAnswer = false;
    return null;
  }
  return null;
}
function solveAdvancedMathSuite(input) {
  return solvePowerExpression(input)
    || solveRootExpression(input)
    || solveAbsoluteValue(input)
    || solveRatioProportion(input)
    || solvePercentageProblem(input)
    || solveAgeProblem(input)
    || solveSpeedTimeDistance(input)
    || solveProfitLossProblem(input)
    || solveWorkerProblem(input)
    || solveNaturalLanguageMath(input)
    || solveWordProblem(input)
    || solveLinearEquation(input)
    || solveSimpleExpression(input);
}

function buildTextResponse(input) {
  const l = input.toLowerCase();
  if (!isAccountLoggedIn) {
    if (hasAny(l, ["merhaba", "selam", "nasılsın", "nasilsin", "saat", "tarih", "teşekkür", "tesekkur", "sağ ol", "sag ol"])) {
      const localReply = buildLocalUtilityReply(l);
      if (localReply) return localReply;
      return chooseRandom(["Merhaba 👋 Oturum açınca daha güçlü cevaplar verebilirim.", "Selam! Temel moddayım. Daha iyi sonuç için oturum açabilirsin."]);
    }
    return "Bu soru için oturum açman gerek. Oturum açınca gelişmiş modeller, web ve thinking özellikleri açılır.";
  }
  const earlyMath = solveAdvancedMathSuite(input);
  if (earlyMath) return earlyMath;
  if (isUnsafeQuery(l)) return buildUnsafeRefusal(l);
  if (hasAny(l, humorTriggerKeywords)) {
    return chooseRandom(humorReplies);
  }
  if (hasSalutation(l, saKeywords)) {
    const profanityDirect = buildProfanityModeDirectReply(l, input);
    if (profanityDirect) return profanityDirect;
    return chooseRandom(saResponses);
  }
  const memoryAnswer = getMemoryAnswer(l);
  if (memoryAnswer) return memoryAnswer;
  const memorySaved = parseMemory(input);
  if (memorySaved) return memorySaved;
  const follow = resolveFollowUp(input);
  if (follow) return follow;
  if (supportsContextModel() && isAffirmativeInput(l) && shouldExpectFollowUp(lastBotResponse || "")) {
    const bridged = resolveYesNoFromLastPrompt(l);
    if (bridged) return bridged;
  }
  const profanityDirect = buildProfanityModeDirectReply(l, input);
  if (profanityDirect) return profanityDirect;
  if (hasAny(l, appreciationKeywords)) return chooseRandom(appreciationResponses);
  if (hasAny(l, praiseKeywords)) return chooseRandom(praiseResponses);
  if (getToxicityLevel(l) === "insult") return chooseRandom(insultReplyPrompts);
  if (supportsContextModel() && hasAny(l, ["hikaye yaz", "hikâye yaz", "hikaye yazalım", "hikâye yazalım", "hikaye", "hikâye"])) {
    return askThemeFor("story");
  }
  if (supportsContextModel() && hasAny(l, ["şiir yaz", "siir yaz", "şiir yazalım", "siir yazalım", "şiir", "siir"])) {
    return askThemeFor("poem");
  }
  if (hasAny(l, ["merhaba", "selam", "merhab", "meraba", "kanka merhaba", ...extendedGreetingKeywords])) {
    if (supportsContextModel()) convoState.awaitingMoodReply = true;
    return chooseRandom(merhabaResponses);
  }
  if (isHowAreYouVariant(l)) {
    if (supportsContextModel()) convoState.awaitingMoodReply = true;
    const profanityMood = buildProfanityModeDirectReply(l, input);
    if (profanityMood) return profanityMood;
    return chooseRandom(nasilsinResponses);
  }
  if (hasAny(l, emotionalKeywords)) {
    if (supportsContextModel()) convoState.awaitingGoalPlan = true;
    return chooseRandom(emotionalPromptBank);
  }
  if (hasAny(l, ["epstein", "epstion", "epstien"])) {
    if (supportsContextModel()) convoState.awaitingEpsteinList = true;
    return chooseRandom(epsteinResponses);
  }
  const localUtilityReply = buildLocalUtilityReply(l);
  if (localUtilityReply) return localUtilityReply;
  const generalKnowledgeReply = buildGeneralKnowledgeReply(l);
  if (generalKnowledgeReply) return generalKnowledgeReply;
  const scienceReply = buildScienceReply(l);
  if (scienceReply) return scienceReply;
  const offlineKnowledgeReply = buildOfflineKnowledgeReply(l);
  if (offlineKnowledgeReply) return offlineKnowledgeReply;
  const unifiedKeywordReply = buildUnifiedKeywordReply(l);
  if (unifiedKeywordReply) return unifiedKeywordReply;

  if (isProfanityModeActive()) {
    return buildProfanityUnknownReply(input);
  }

  return chooseRandom(unknownInputResponses);
}
function startChatIfNeeded() {
  if (hasStartedChat) return;
  hasStartedChat = true;
  splash.classList.add("hidden");
  chat.classList.remove("hidden");
}
function processInput(text) {
  startChatIfNeeded();
  addMessage(text, "user");
  if (runTestModeFlow(text)) {
    return;
  }
  const isMathFlow = advancedMathEnabled || Boolean(solveWordProblemValue(text));
  const thinking = addThinkingBubble(isMathFlow ? "math" : "default");
  const delayMs = isMathFlow ? 3000 : 1100;
  setTimeout(async () => {
    if (supportsContextModel() && lastWikiAssistQuery && !lastWikiAssistExpandedOnce && isWikiExpandIntent(text)) {
      const expanded = await fetchWikipediaExpandedSummary(lastWikiAssistQuery, lastWikiAssistSummaryLink);
      if (expanded) {
        lastWikiAssistExpandedOnce = true;
        const response = applyProfanityFlavor(`${chooseRandom(wikiAssistLeadPhrases)}\n\n${expanded}`, text);
        lastBotResponse = response;
        updateGeneralQuestionState(response);
        fillThinkingBubble(thinking, response, "Düşündüm • cevap hazır ✅");
        return;
      }
    }
    let rawResponse = buildTextResponse(text);
    if (looksLikeUnknownFallback(rawResponse) && supportsKnowledgeAssistForUnknown()) {
      const wikiData = await fetchWikipediaShortSummary(text);
      if (wikiData) rawResponse = buildWikipediaAssistReply(text, wikiData) || rawResponse;
    }
    const response = applyProfanityFlavor(expandForPremium(applyPersonalization(rawResponse)), text);
    lastBotResponse = response;
    updateGeneralQuestionState(response);
    const doneStatus = isMathFlow ? "İşlem analiz edildi • cevap hazır ✅" : "Düşündüm • cevap hazır ✅";
    fillThinkingBubble(thinking, response, doneStatus);
    if (voiceModeActive) speakVoiceResponse(response);
    if (pendingSafetySurvey) {
      appendSafetySurveyPrompt();
      pendingSafetySurvey = null;
    }
  }, delayMs);
}
async function getThinkingWebData(text, analysis) {
  if (analysis.currencyRequest) {
    try {
      const currencyData = await fetchThinkingCurrencyData(analysis.currencyRequest);
      return {
        summary: currencyData.summary,
        sources: currencyData.sources || [],
        wikiExcerpt: "",
        firstDescription: currencyData.summary
      };
    } catch {}
  }
  try {
    const items = await fetchWebResults(text);
    const firstWiki = items.find((it) => isWikipediaLink(it.link));
    const wikiExcerpt = (supportsWebTextExtractionModel() && firstWiki)
      ? await fetchWikipediaLongExcerpt(firstWiki.link)
      : "";
    return {
      summary: wikiExcerpt || items[0]?.description || "",
      wikiExcerpt,
      firstDescription: items[0]?.description || "",
      sources: items.slice(0, 5).map((item) => ({ title: item.title, link: item.link }))
    };
  } catch {
    return {
      summary: "",
      wikiExcerpt: "",
      firstDescription: "",
      sources: [
        { title: `DuckDuckGo: ${text}`, link: `https://duckduckgo.com/?q=${encodeURIComponent(text)}` }
      ]
    };
  }
}
async function processThinkingModeInput(text) {
  startChatIfNeeded();
  addMessage(text, "user");
  if (!consumeThinkingQuotaOrLock()) {
    addMessage("Thinking şu an kısa aralık korumasında. Biraz bekleyip tekrar dene.", "bot");
    showWarningOverlay("Thinking kısa aralık kuralına takıldı. Lütfen biraz bekle.");
    return;
  }
  const analysis = analyzeThinkingIntent(text);
  const thinking = addThinkingBubble(analysis.needsWeb ? "web" : "default");
  const duration = estimateThinkingDuration(text, analysis);
  let webData = null;
  let extraSources = [];
  if (analysis.needsWeb) {
    webData = await getThinkingWebData(text, analysis);
  }
  const plan = getThinkingPlan(text, analysis, webData);
  const steps = plan.length ? plan : [{ title: "Düşünüyorum...", note: "Yanıt hazırlanıyor..." }];
  const interval = Math.max(1800, Math.floor(duration / steps.length));
  steps.forEach((step, index) => {
    setTimeout(() => applyThinkingStep(thinking, step), interval * index);
  });
  let finalResponse = "";
  if (analysis.needsWeb) {
    finalResponse = buildThinkingWebResponse(text, analysis, webData);
  } else {
    const baseResponse = buildTextResponse(text);
    if (looksLikeUnknownFallback(baseResponse)) {
      const wikiData = await fetchWikipediaShortSummary(text);
      if (wikiData) {
        finalResponse = buildWikipediaAssistReply(text, wikiData) || baseResponse;
        extraSources = [{ title: `${wikiData.title}`, link: wikiData.link }];
        steps.push({
          title: "Ek kaynakları tarıyorum...",
          note: "Kendi veri tabanım net gelmeyince kısa bir ek özetle cevabı destekledim.",
          sources: extraSources
        });
      } else {
        finalResponse = buildThinkingTextResponseFromBase(text, analysis, baseResponse);
      }
    } else {
      finalResponse = buildThinkingTextResponseFromBase(text, analysis, baseResponse);
    }
  }
  await new Promise((resolve) => setTimeout(resolve, duration));
  lastBotResponse = finalResponse;
  updateGeneralQuestionState(finalResponse);
  fillThinkingBubble(thinking, finalResponse, analysis.needsWeb ? "Web sonucu hazır ✅" : "Derin yanıt hazır ✅");
  attachThinkingDetails(thinking, analysis, steps, [...(webData?.sources || []), ...extraSources]);
  if (voiceModeActive) speakVoiceResponse(finalResponse);
}
function updateComposerActionVisual() {
  if (!chatSubmitBtn || !userInput) return;
  const hasText = Boolean(userInput.value.trim());
  const canVoice = supportsVoiceModel();
  const sendIcon = chatSubmitBtn.querySelector('.send-icon');
  const voiceIcon = chatSubmitBtn.querySelector('.voice-mode-icon');
  const showVoice = !hasText && canVoice;
  chatSubmitBtn.classList.toggle('voice-launch', showVoice);
  chatSubmitBtn.setAttribute('aria-label', showVoice ? 'Sesli modu aç' : 'Gönder');
  if (sendIcon) sendIcon.classList.toggle('hidden', showVoice);
  if (voiceIcon) voiceIcon.classList.toggle('hidden', !showVoice);
}


function primeSpeechOutput() {
  if (voiceSpeechPrimed || !("speechSynthesis" in window)) return;
  try {
    const warm = new SpeechSynthesisUtterance(" ");
    warm.volume = 0;
    warm.rate = 1;
    warm.pitch = 1;
    warm.lang = "tr-TR";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(warm);
    window.speechSynthesis.resume();
    voiceSpeechPrimed = true;
  } catch {}
}

function setVoiceSpeaking(active) {
  if (!voiceModeCore) return;
  voiceModeCore.classList.toggle("speaking", !!active);
}
function speakVoiceResponse(text, onDone) {
  if (typeof onDone !== "function") onDone = null;
  if (!voiceModeActive || !("speechSynthesis" in window)) {
    if (onDone) onDone();
    return;
  }
  if (voiceOutputMuted) {
    if (voiceModeStatus) voiceModeStatus.textContent = "Ses kapalı, dinleme açık.";
    if (onDone) onDone();
    return;
  }
  try {
    primeSpeechOutput();
    window.speechSynthesis.resume();
    const utter = new SpeechSynthesisUtterance(String(text || ""));
    utter.lang = "tr-TR";
    utter.rate = 1;
    utter.pitch = 1;
    const trVoice = window.speechSynthesis.getVoices().find((v) => /^tr(-|_)/i.test(v.lang || ""));
    if (trVoice) utter.voice = trVoice;
    utter.onstart = () => {
      setVoiceSpeaking(true);
      if (voiceModeStatus) voiceModeStatus.textContent = "Baluk.ai konuşuyor... 🔊";
    };
    utter.onend = () => {
      setVoiceSpeaking(false);
      if (voiceModeStatus) voiceModeStatus.textContent = "Dinliyorum... Konuşabilirsin 🎙️";
      if (onDone) onDone();
    };
    utter.onerror = () => {
      setVoiceSpeaking(false);
      if (voiceModeStatus) voiceModeStatus.textContent = "Sesli yanıt veremedim ama dinlemeye devam ediyorum.";
      if (onDone) onDone();
    };
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  } catch {
    if (onDone) onDone();
  }
}

function buildVoiceWebCompactAnswer(query, items = [], wikiExcerpt = "") {
  const cleanQuery = String(query || "").trim() || "bu konu";
  const first = Array.isArray(items) && items[0] ? items[0] : null;
  const raw = String(wikiExcerpt || first?.description || "").replace(/\s+/g, " ").trim();
  const shortInfo = raw ? raw.slice(0, 170) + (raw.length > 170 ? "..." : "") : `${cleanQuery} için hızlı web özeti hazır.`;
  const source = first?.title ? `Kaynak: ${first.title}` : "Kaynak: web özeti";
  return `${shortInfo} ${source} 🌐`;
}
async function processVoiceWebTurn(text) {
  const q = String(text || "").trim();
  if (!q) return null;
  try {
    const items = await fetchWebResults(q);
    const firstWiki = items.find((it) => isWikipediaLink(it.link));
    const wikiExcerpt = (supportsWebTextExtractionModel() && firstWiki)
      ? await fetchWikipediaLongExcerpt(firstWiki.link)
      : "";
    return buildVoiceWebCompactAnswer(q, items, wikiExcerpt);
  } catch {
    return "Web aramada kısa bir aksaklık oldu, istersen tekrar deneyelim 🌐";
  }
}
function processVoiceTurn(text) {
  const clean = String(text || "").trim();
  if (!clean || voiceTurnInFlight) return;
  voiceTurnInFlight = true;
  stopVoiceRecognition();
  if (voiceModeStatus) voiceModeStatus.textContent = "Anladım, yanıt hazırlıyorum...";
  startChatIfNeeded();
  addMessage(clean, "user");
  if (runTestModeFlow(clean, { voice: true })) {
    voiceTurnInFlight = false;
    return;
  }
  const isMathFlow = advancedMathEnabled || Boolean(solveWordProblemValue(clean));
  const thinkingKind = voiceWebModeEnabled ? "web" : (isMathFlow ? "math" : "default");
  const thinking = addThinkingBubble(thinkingKind);
  const delayMs = voiceWebModeEnabled ? 1400 : (isMathFlow ? 1800 : 850);
  setTimeout(async () => {
    const rawResponse = voiceWebModeEnabled ? await processVoiceWebTurn(clean) : buildTextResponse(clean);
    const response = applyProfanityFlavor(expandForPremium(applyPersonalization(rawResponse || "Kısa bir cevap üretemedim, tekrar sorabilir misin?")), clean);
    lastBotResponse = response;
    updateGeneralQuestionState(response);
    const doneStatus = voiceWebModeEnabled
      ? "Web kısa özeti hazır ✅"
      : (isMathFlow ? "İşlem analiz edildi • cevap hazır ✅" : "Düşündüm • cevap hazır ✅");
    fillThinkingBubble(thinking, response, doneStatus);
    speakVoiceResponse(response, () => {
      voiceTurnInFlight = false;
      if (voiceModeActive) startVoiceRecognition();
    });
  }, delayMs);
}
function stopVoiceRecognition() {
  if (!voiceRecognition) return;
  try { voiceRecognition.stop(); } catch {}
  voiceRecognitionRunning = false;
}
function isMobileVoiceDevice() {
  const ua = (navigator.userAgent || "").toLowerCase();
  return /android|iphone|ipad|ipod|mobile/.test(ua);
}
async function primeVoiceMicrophone() {
  if (voiceMicPrimed || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true
      }
    });
    stream.getTracks().forEach((t) => t.stop());
    voiceMicPrimed = true;
  } catch {
    if (voiceModeStatus) voiceModeStatus.textContent = "Mikrofon izni olmadan sesli mod sınırlı çalışabilir.";
  }
}
async function startVoiceRecognition() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    showWarningOverlay("Bu cihazda sesli tanıma desteklenmiyor.");
    return;
  }
  await primeVoiceMicrophone();
  if (!voiceRecognition) {
    voiceRecognition = new SR();
    voiceRecognition.lang = "tr-TR";
    voiceRecognition.maxAlternatives = 3;
    voiceRecognition.continuous = !isMobileVoiceDevice();
    voiceRecognition.interimResults = true;
    voiceRecognition.onresult = (event) => {
      for (let i = event.resultIndex; i < event.results.length; i += 1) {
        const res = event.results[i];
        if (!res || !res[0]) continue;
        if (!res.isFinal) continue;
        processVoiceTurn(res[0].transcript || "");
      }
    };
    voiceRecognition.onerror = (event) => {
      const err = event && event.error ? event.error : "unknown";
      if (voiceModeStatus) voiceModeStatus.textContent = err === "not-allowed"
        ? "Mikrofon izni verilmedi. Tarayıcıdan mikrofona izin ver."
        : "Mikrofon hatası: " + err;
    };
    voiceRecognition.onend = () => {
      voiceRecognitionRunning = false;
      if (voiceModeActive && !voiceTurnInFlight) startVoiceRecognition();
    };
  }
  if (voiceRecognitionRunning) return;
  try {
    voiceRecognition.start();
    voiceRecognitionRunning = true;
    if (voiceModeStatus) voiceModeStatus.textContent = "Dinliyorum... Konuşabilirsin 🎙️";
  } catch {}
}
async function openVoiceMode() {
  if (!isAccountLoggedIn) {
    showWarningOverlay("Sesli mod için önce oturum aç.");
    return;
  }
  if (!supportsVoiceModel()) {
    showWarningOverlay("Sesli mod yalnızca baluk-2.0 ve üstü modellerde açık.");
    return;
  }
  if (!window.isSecureContext && location.hostname !== "localhost" && location.hostname !== "127.0.0.1") {
    showWarningOverlay("Telefonda sesli mod için HTTPS gerekli olabilir.");
  }
  voiceModeActive = true;
  voiceOutputMuted = false;
  if (voiceMuteBtn) voiceMuteBtn.classList.remove("muted");
  if (voiceModePanel) voiceModePanel.classList.remove("hidden");
  if (voiceOpenFx) {
    voiceOpenFx.classList.remove("play");
    void voiceOpenFx.offsetWidth;
    voiceOpenFx.classList.add("play");
  }
  primeSpeechOutput();
  if (voiceModeStatus) voiceModeStatus.textContent = "Mor damla efekti başlıyor... 💜";
  if (voiceWebBtn) voiceWebBtn.classList.toggle("active", voiceWebModeEnabled);
  clearTimeout(voiceOpenAnimTimer);
  voiceOpenAnimTimer = setTimeout(() => {
    if (!voiceModeActive) return;
    if (voiceModeStatus) voiceModeStatus.textContent = "Dinliyorum... Konuşabilirsin 🎙️";
    startVoiceRecognition();
  }, 1550);
}
function closeVoiceMode() {
  voiceModeActive = false;
  voiceTurnInFlight = false;
  clearTimeout(voiceOpenAnimTimer);
  stopVoiceRecognition();
  setVoiceSpeaking(false);
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  if (voiceModePanel) voiceModePanel.classList.add("hidden");
  if (voiceModeStatus) voiceModeStatus.textContent = "Sesli mod kapalı";
  if (voiceWebBtn) voiceWebBtn.classList.remove("active");
}

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = userInput.value.trim();
  if (thinkingModeEnabled && thinkingAttachedImageDataUrl) {
    processThinkingImageOnly();
    updateComposerActionVisual();
    return;
  }
  if (!text) {
    if (supportsVoiceModel()) openVoiceMode();
    return;
  }
  if (isBannedNow()) return;
  const lower = text.toLowerCase();
  const toxicity = getToxicityLevel(lower);
  if (toxicity && isPremiumUser && allowProfanity) {
    startChatIfNeeded();
    addMessage(text, "user");
    addMessage(applyProfanityFlavor(chooseRandom(playfulProfanityReplies), text), "bot");
    userInput.value = "";
    return;
  }
  if (!isPremiumUser) {
    if (toxicity === "severe") {
      startBan("Ağır küfür algılandı. 10 dakikalık ban uygulandı.");
      return;
    }
    if (toxicity === "insult") {
      insultWarningCount += 1;
      if (insultWarningCount >= 2) {
        startBan("2. hakaret/argo uyarısı sonrası 10 dakikalık ban uygulandı.");
        return;
      }
      showWarningOverlay(`⚠️ Hakaret/argo uyarısı: ${insultWarningCount}/2. İkinci uyarıda 10 dakikalık ban uygulanır.`);
    }
  }
  if (thinkingModeEnabled) {
    processThinkingModeInput(text);
    userInput.value = "";
    updateComposerActionVisual();
    return;
  }
  if (webModeEnabled) {
    processWebSearchInput(text);
    userInput.value = "";
    return;
  }
  if (lensModeEnabled) {
    addMessage("Baluk.lens açık. Önce panelden fotoğraf yükleyip Analizi Başlat butonuna bas.", "bot");
    userInput.value = "";
    return;
  }
  processInput(text);
  userInput.value = "";
  updateComposerActionVisual();
});
clearChat.addEventListener("click", () => {
  hasStartedChat = false;
  Object.keys(convoState).forEach((k) => { convoState[k] = false; });
  chat.innerHTML = "";
  const current = getActiveSession();
  if (current) {
    current.messages = [];
    current.title = "Yeni Sohbet";
    current.updatedAt = Date.now();
  }
  saveChatSessions();
  renderChatList();
  chat.classList.add("hidden");
  splash.classList.remove("hidden");
  updateSplashPrompt();
  setWebMode(false);
});
memoryToggle.addEventListener("click", () => {
  memoryPanel.classList.toggle("hidden");
  renderMemoryList();
});
clearMemory.addEventListener("click", () => {
  if (!supportsMemoryModel()) return;
  Object.keys(userMemory).forEach((k) => delete userMemory[k]);
  saveMemory();
  renderMemoryList();
});
modelToggle.addEventListener("click", () => {
  if (!isAccountLoggedIn) {
    showWarningOverlay("Model seçmek için önce oturum aç.");
    if (modelMenu) modelMenu.classList.add("hidden");
    return;
  }
  if (advancedMathEnabled) return;
  modelMenu.classList.toggle("hidden");
});
document.addEventListener("click", (e) => {
  if (!modelMenu.contains(e.target) && !modelToggle.contains(e.target)) modelMenu.classList.add("hidden");
  if (engineModelMenu && engineModelPicker && !engineModelMenu.contains(e.target) && !engineModelPicker.contains(e.target)) engineModelMenu.classList.add("hidden");
  if (engineLanguageMenu && engineLanguagePicker && !engineLanguageMenu.contains(e.target) && !engineLanguagePicker.contains(e.target)) engineLanguageMenu.classList.add("hidden");
});
modelOptions.forEach((opt) => {
  opt.addEventListener("click", () => {
    if (advancedMathEnabled) return;
    modelOptions.forEach((i) => i.classList.remove("active"));
    opt.classList.add("active");
    currentModel = opt.dataset.model;
    if (isAccountLoggedIn) localStorage.setItem(MODEL_STORAGE_KEY, currentModel);
    updateModelVisual();
    updateMemoryAvailability();
    if (!supportsWebModel()) setWebMode(false);
    if (!supportsLensModel()) setLensMode(false);
    if (!supportsBallEModel()) setBalleMode(false);
    if (!supportsTestModeModel()) setTestMode(false);
    modelMenu.classList.add("hidden");
    updateComposerActionVisual();
    closeVoiceMode();
  });
});
modelOptions.forEach((opt) => opt.classList.toggle("active", opt.dataset.model === currentModel));
updateModelVisual();
updateMemoryAvailability();
updateComposerActionVisual();
initGeometryLab();
updateSplashPrompt();
refreshStaticUiIcons();
restoreBanState();
restoreAccountProfile();
restoreChatSessions();
restoreBackgroundSettings();
updateAuthDependentUI();
if (balukLensMode) balukLensMode.checked = false;
if (balleMode) balleMode.checked = false;
setLensMode(false);
setBalleMode(false);
if (plusToggle && plusMenu) {
  plusToggle.addEventListener("click", () => {
    if (thinkingModeEnabled) {
      if (thinkingImageInput) thinkingImageInput.click();
      return;
    }
    plusMenu.classList.toggle("hidden");
  });
  document.addEventListener("click", (e) => {
    if (!plusMenu.contains(e.target) && !plusToggle.contains(e.target)) plusMenu.classList.add("hidden");
  });
}
if (advancedMathMode) {
  advancedMathMode.addEventListener("change", () => {
    setAdvancedMathMode(advancedMathMode.checked);
    updateModelVisual();
  });
}
if (webSearchMode) {
  webSearchMode.addEventListener("change", () => setWebMode(webSearchMode.checked));
}
if (balukLensMode) {
  balukLensMode.addEventListener("change", () => setLensMode(balukLensMode.checked));
}
if (testModeToggle) {
  testModeToggle.addEventListener("change", () => setTestMode(testModeToggle.checked));
}
if (balukEngineBtn) {
  balukEngineBtn.addEventListener("click", () => {
    if (plusMenu) plusMenu.classList.add("hidden");
    startChatIfNeeded();
    addMessage("Bu özellik yakında gelecek.", "bot");
    showWarningOverlay("Bu özellik yakında gelecek.");
  });
}
if (balleMode) {
  balleMode.addEventListener("change", () => setBalleMode(balleMode.checked));
}
if (engineBackBtn) engineBackBtn.addEventListener("click", closeBalukEngine);
if (engineNewChatBtn) {
  engineNewChatBtn.addEventListener("click", () => {
    const session = createEngineChatSession();
    engineChatSessions.unshift(session);
    activeEngineChatId = session.id;
    renderEngineWorkspace();
    saveEngineSessions();
  });
}
if (engineCodeToggle) engineCodeToggle.addEventListener("click", () => toggleEnginePanel("code"));
if (engineNotebookToggle) engineNotebookToggle.addEventListener("click", () => toggleEnginePanel("notebook"));
if (engineDockClose) engineDockClose.addEventListener("click", () => toggleEnginePanel(enginePanelMode));
if (engineModelPicker && engineModelMenu) {
  engineModelPicker.innerHTML = `<span class="engine-diamond-btn-text">B</span>`;
  engineModelPicker.addEventListener("click", () => {
    engineModelMenu.classList.toggle("hidden");
    if (engineLanguageMenu) engineLanguageMenu.classList.add("hidden");
  });
  engineModelMenu.querySelectorAll("[data-engine-model]").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectEngineModel(btn.dataset.engineModel);
      engineModelMenu.classList.add("hidden");
    });
  });
}
if (engineLanguagePicker && engineLanguageMenu) {
  engineLanguagePicker.innerHTML = `<span class="engine-diamond-btn-text">&lt;/&gt;</span>`;
  engineLanguagePicker.addEventListener("click", () => {
    engineLanguageMenu.classList.toggle("hidden");
    if (engineModelMenu) engineModelMenu.classList.add("hidden");
  });
  engineLanguageMenu.querySelectorAll("[data-engine-language]").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectEngineLanguage(btn.dataset.engineLanguage);
      engineLanguageMenu.classList.add("hidden");
    });
  });
}
if (engineSubmitBtn) engineSubmitBtn.addEventListener("click", submitEnginePrompt);
if (enginePrompt) {
  enginePrompt.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitEnginePrompt();
    }
  });
}
if (engineWorkspace) {
  engineWorkspace.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-engine-example]");
    if (!btn || !enginePrompt) return;
    enginePrompt.value = btn.getAttribute("data-engine-example") || "";
    enginePrompt.focus();
  });
}
if (balleGenerateBtn) {
  balleGenerateBtn.addEventListener("click", () => runBallEGeneration());
}
if (userInput) userInput.addEventListener("input", updateComposerActionVisual);
if (thinkingImageInput) {
  thinkingImageInput.addEventListener("change", () => {
    const file = thinkingImageInput.files?.[0];
    if (file && thinkingModeEnabled) attachThinkingImage(file);
  });
}
if (thinkingImageRemove) {
  thinkingImageRemove.addEventListener("click", clearThinkingImageAttachment);
}
if (thinkingToggle) {
  thinkingToggle.addEventListener("click", () => {
    setThinkingMode(!thinkingModeEnabled);
  });
}
if (thinkingPromoClose) {
  thinkingPromoClose.addEventListener("click", hideThinkingPromo);
}
if (thinkingUnlockBtn) thinkingUnlockBtn.classList.add("hidden");
if (thinkingUpgradeBtn) {
  thinkingUpgradeBtn.addEventListener("click", () => {
    if (premiumModal) premiumModal.classList.remove("hidden");
  });
}
if (thinkingDismissBtn) {
  thinkingDismissBtn.addEventListener("click", hideThinkingLimitBanner);
}
if (voiceCloseBtn) voiceCloseBtn.addEventListener("click", closeVoiceMode);
if (voiceWebBtn) voiceWebBtn.addEventListener("click", () => {
  voiceWebModeEnabled = !voiceWebModeEnabled;
  voiceWebBtn.classList.toggle("active", voiceWebModeEnabled);
  if (voiceModeStatus) voiceModeStatus.textContent = voiceWebModeEnabled
    ? "Sesli Web modu açık: kısa web cevapları vereceğim 🌐"
    : "Sesli Web modu kapalı: normal sesli cevap modundayım 🎙️";
});
if (voiceMuteBtn) voiceMuteBtn.addEventListener("click", () => {
  voiceOutputMuted = !voiceOutputMuted;
  voiceMuteBtn.classList.toggle("muted", voiceOutputMuted);
  if (voiceModeStatus) voiceModeStatus.textContent = voiceOutputMuted ? "Ses kapalı, dinleme açık." : "Ses açık, dinleme açık.";
  if (voiceOutputMuted && window.speechSynthesis) window.speechSynthesis.cancel();
});
if (mathStudioToggle && mathStudioPanel) {
  mathStudioToggle.addEventListener("click", () => mathStudioPanel.classList.toggle("hidden"));
}
if (mathTutorNext) {
  mathTutorNext.addEventListener("click", () => {
    tutorStep = Math.min(tutorStep + 1, tutorSteps.length - 1);
    renderTutorStep();
  });
}
if (mathTutorDone) {
  mathTutorDone.addEventListener("click", () => {
    if (mathTutorOverlay) mathTutorOverlay.classList.add("hidden");
    clearTutorSpotlight();
    if (plusMenu) plusMenu.classList.add("hidden");
    if (isAccountLoggedIn) {
      localStorage.setItem("balukMathTutorDone", "1");
      localStorage.setItem("balukMasterTutor17Done", "1");
      localStorage.setItem("balukMasterTutor22Done", "1");
    }
    setThinkingMode(false);
    showTutorFinale();
  });
}
if (mathTutorSkip) {
  mathTutorSkip.addEventListener("click", () => {
    if (mathTutorOverlay) mathTutorOverlay.classList.add("hidden");
    clearTutorSpotlight();
    if (plusMenu) plusMenu.classList.add("hidden");
    if (isAccountLoggedIn) localStorage.setItem("balukMasterTutor22Done", "1");
    setThinkingMode(false);
  });
}
if (safetySurveyOptions) {
  safetySurveyOptions.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-reason]");
    if (!btn) return;
    const reason = btn.dataset.reason;
    const category = (safetySurveyModal && safetySurveyModal.dataset.category) || "generic";
    closeSafetySurvey();
    addMessage(surveyReplyByReason(reason, category), "bot");
  });
}
if (closeSafetySurveyModal) {
  closeSafetySurveyModal.addEventListener("click", closeSafetySurvey);
}
if (accountToggle) {
  accountToggle.addEventListener("click", () => {
    if (mathTutorOverlay && !mathTutorOverlay.classList.contains("hidden")) {
      mathTutorOverlay.classList.add("hidden");
      clearTutorSpotlight();
    }
    if (!isAccountLoggedIn) {
      if (accountPanel) accountPanel.classList.toggle("hidden");
      if (sideDrawer) sideDrawer.classList.add("hidden");
      return;
    }
    if (sideDrawer) sideDrawer.classList.toggle("hidden");
    if (accountPanel) accountPanel.classList.add("hidden");
  });
}
if (drawerClose && sideDrawer) {
  drawerClose.addEventListener("click", () => sideDrawer.classList.add("hidden"));
}
if (drawerAccountSettings) {
  drawerAccountSettings.addEventListener("click", () => {
    if (!isAccountLoggedIn) {
      showWarningOverlay("Önce oturum aç.");
      return;
    }
    if (accountPanel) accountPanel.classList.remove("hidden");
    if (sideDrawer) sideDrawer.classList.add("hidden");
  });
}
if (newChatBtn) {
  newChatBtn.addEventListener("click", () => createAndSwitchNewChat());
}
if (drawerPremiumOpen && premiumModal) {
  drawerPremiumOpen.addEventListener("click", () => {
    if (!isPremiumUser) premiumModal.classList.remove("hidden");
  });
}
if (drawerBackgroundOpen && backgroundModal) {
  drawerBackgroundOpen.addEventListener("click", () => {
    backgroundModal.classList.remove("hidden");
    if (sideDrawer) sideDrawer.classList.add("hidden");
  });
}
if (backgroundClose && backgroundModal) {
  backgroundClose.addEventListener("click", () => backgroundModal.classList.add("hidden"));
}
if (backgroundModal) {
  const back = backgroundModal.querySelector('.background-backdrop');
  if (back) back.addEventListener('click', () => backgroundModal.classList.add('hidden'));
}
if (backgroundThemeSelect) {
  backgroundThemeSelect.addEventListener('change', () => applyBackgroundTheme(backgroundThemeSelect.value));
}
if (backgroundMusicSelect) {
  backgroundMusicSelect.addEventListener('change', () => setBackgroundMusic(backgroundMusicSelect.value));
}
if (backgroundMusicVolume) {
  backgroundMusicVolume.addEventListener('input', () => setBackgroundVolume(backgroundMusicVolume.value));
}
if (lensClose) lensClose.addEventListener("click", () => {
  if (balukLensMode) balukLensMode.checked = false;
  setLensMode(false);
});
if (lensPickBtn && lensFileInput) {
  lensPickBtn.addEventListener("click", () => lensFileInput.click());
}
if (lensFileInput) {
  lensFileInput.addEventListener("change", () => {
    const file = lensFileInput.files?.[0];
    if (file) loadLensFile(file);
  });
}
if (lensDropZone) {
  ["dragenter", "dragover"].forEach((evt) => lensDropZone.addEventListener(evt, (e) => {
    e.preventDefault();
    lensDropZone.classList.add("dragging");
  }));
  ["dragleave", "drop"].forEach((evt) => lensDropZone.addEventListener(evt, (e) => {
    e.preventDefault();
    lensDropZone.classList.remove("dragging");
  }));
  lensDropZone.addEventListener("drop", (e) => {
    const file = e.dataTransfer?.files?.[0];
    if (file) loadLensFile(file);
  });
}
if (lensCanvas) {
  lensCanvas.addEventListener("pointerdown", (e) => {
    if (!lensImageDataUrl) return;
    const r = lensCanvas.getBoundingClientRect();
    lensDragStart = { x: e.clientX - r.left, y: e.clientY - r.top };
    lensSelection = null;
  });
  lensCanvas.addEventListener("pointermove", (e) => {
    if (!lensDragStart) return;
    const r = lensCanvas.getBoundingClientRect();
    const end = { x: Math.max(0, Math.min(lensCanvas.width, e.clientX - r.left)), y: Math.max(0, Math.min(lensCanvas.height, e.clientY - r.top)) };
    lensSelection = normalizeRect(lensDragStart, end);
    drawLensCanvas();
  });
  lensCanvas.addEventListener("pointerup", (e) => {
    const r = lensCanvas.getBoundingClientRect();
    const end = { x: Math.max(0, Math.min(lensCanvas.width, e.clientX - r.left)), y: Math.max(0, Math.min(lensCanvas.height, e.clientY - r.top)) };
    if (lensDragStart) {
      const rect = normalizeRect(lensDragStart, end);
      if (rect.w < 14 || rect.h < 14) {
        if (isMobileLensViewport()) {
          const w = Math.max(80, Math.round(lensCanvas.width * 0.46));
          const h = Math.max(80, Math.round(lensCanvas.height * 0.36));
          lensSelection = {
            x: Math.max(0, Math.min(lensCanvas.width - w, end.x - w / 2)),
            y: Math.max(0, Math.min(lensCanvas.height - h, end.y - h / 2)),
            w,
            h
          };
          drawLensCanvas();
        } else {
          lensSelection = null;
        }
      } else {
        lensSelection = rect;
      }
    }
    lensDragStart = null;
    if (lensStatus && lensSelection && lensSelection.w > 10 && lensSelection.h > 10) {
      lensStatus.textContent = "baluk.ai • bölge işaretlendi, analizi başlatabilirsin.";
    } else if (lensStatus && isMobileLensViewport()) {
      lensStatus.textContent = "baluk.ai • seçili bölge yok, analizde tüm görsel kullanılacak.";
    }
  });
}
if (lensAnalyzeBtn) {
  lensAnalyzeBtn.addEventListener("click", runLensAnalysis);
}
[accountName, accountGmail, accountPhoto].forEach((field) => {
  if (field) field.addEventListener("input", () => {
    updateAccountPreview();
  });
});
if (saveAccount) {
  saveAccount.addEventListener("click", saveAccountProfile);
}
if (persistBrowserAccount) {
  persistBrowserAccount.addEventListener("click", () => {
    const profile = sanitizeAccountProfile({
      name: accountName?.value,
      gmail: accountGmail?.value,
      photo: accountPhoto?.value
    });
    if (!isAccountProfileValid(profile)) {
      showWarningOverlay("Önce geçerli ad-soyad ve Gmail ile hesabı kaydet.");
      return;
    }
    localStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify({ ...profile, loggedIn: true }));
    persistAccountIntoBrowserVault(profile);
    if (persistBrowserHint) persistBrowserHint.textContent = "✅ Bu tarayıcı için kalıcı kayıt güncellendi. Aynı domainde sohbetler korunur.";
    showWarningOverlay("Hesap bu tarayıcıya kalıcı olarak kaydedildi.");
  });
}
if (logoutAccount) {
  logoutAccount.addEventListener("click", logoutAccountProfile);
}
if (deleteAccount) {
  deleteAccount.addEventListener("click", deleteAccountProfile);
}
if (premiumClose && premiumModal) {
  premiumClose.addEventListener("click", () => premiumModal.classList.add("hidden"));
}
if (premiumBuyBtn) premiumBuyBtn.addEventListener("click", startPremiumPayment);
if (premiumPayLinkBtn) premiumPayLinkBtn.addEventListener("click", openPremiumPaymentLink);
if (premiumConfirmBtn) premiumConfirmBtn.addEventListener("click", manuallyConfirmPremium);
if (allowProfanityMode) {
  allowProfanityMode.addEventListener("change", () => {
    if (allowProfanityMode.checked && !isPremiumUser) {
      allowProfanityMode.checked = false;
      showWarningOverlay("Küfüre izin ver modu yalnızca Premium için açık.");
      return;
    }
    allowProfanity = allowProfanityMode.checked;
    if (isAccountLoggedIn) localStorage.setItem(ALLOW_PROFANITY_STORAGE_KEY, allowProfanity ? "1" : "0");
  });
}
window.addEventListener("focus", tryActivatePremiumFromReturn);
normalizePremiumCodeGuard();
updatePremiumUI();
tryActivatePremiumFromReturn();
updateThinkingQuotaUI();
setThinkingMode(thinkingModeEnabled);
if (banUnlockBtn) {
  banUnlockBtn.addEventListener("click", () => {
    if (banPassword && banPassword.value.trim() === "baluk2026") {
      stopBan();
      banPassword.value = "";
    }
  });
}
if (enterAppBtn && introGate && appRoot) {
  const tryStartAmbient = () => startIntroAmbientHum();
  ["pointermove", "keydown", "touchstart", "mousedown"].forEach((evt) => {
    window.addEventListener(evt, tryStartAmbient, { once: true, passive: true });
  });
  startIntroAmbientHum();
  enterAppBtn.addEventListener("click", openAppWithTransition);
}
function fillThinkingBubbleHtml(node, html, doneStatus = "") {
  if (!node) return;
  const fish = node.querySelector(".think-fish");
  if (fish) fish.classList.remove("spin-fast");
  if (doneStatus) updateThinkingStatus(node, doneStatus);
  let content = node.querySelector(".thinking-answer");
  if (!content) {
    content = document.createElement("div");
    content.className = "thinking-answer";
    node.appendChild(content);
  }
  content.innerHTML = html;
}
function createBallEFallbackDataUrl() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#22c55e"/><stop offset="25%" stop-color="#facc15"/><stop offset="55%" stop-color="#ef4444"/><stop offset="82%" stop-color="#a855f7"/><stop offset="100%" stop-color="#22c55e"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="760" fill="url(#g)"/>
  <g fill="none" stroke="rgba(255,255,255,.7)">
    <circle cx="160" cy="120" r="90"/><circle cx="420" cy="210" r="120"/><circle cx="760" cy="150" r="84"/><circle cx="980" cy="300" r="130"/>
    <circle cx="300" cy="490" r="155"/><circle cx="650" cy="540" r="125"/><circle cx="1040" cy="580" r="110"/>
  </g>
  <text x="48" y="700" font-family="Arial, Helvetica, sans-serif" font-size="52" font-weight="700" fill="rgba(255,255,255,.88)">BALL.E • baluk.ai</text>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
function preloadImage(url, timeoutMs = 7000) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    let done = false;
    const finish = (ok) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      if (ok) resolve(url);
      else reject(new Error('load-failed'));
    };
    const timer = setTimeout(() => finish(false), timeoutMs);
    img.onload = () => finish(true);
    img.onerror = () => finish(false);
    img.referrerPolicy = 'no-referrer';
    img.src = url;
  });
}
async function pickWorkingBallEAsset() {
  const shuffled = [...balleAssets].sort(() => Math.random() - 0.5).slice(0, 6);
  const attempts = shuffled.map((link) => preloadImage(link, 3500));
  try {
    return await Promise.any(attempts);
  } catch {
    return createBallEFallbackDataUrl();
  }
}
async function runBallEGeneration() {
  return;
}

function escapeHtml(value = "") {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function createEngineChatSession(initialTitle = "Yeni Engine Sohbet") {
  return {
    id: `engine_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    title: initialTitle,
    entries: [],
    model: "baluk-2.2",
    language: "html",
    code: "",
    outputHtml: "",
    notebook: DEFAULT_BLM_NOTEBOOK,
    lastPrompt: "",
    updatedAt: Date.now()
  };
}
function normalizeEngineSession(session) {
  return {
    ...createEngineChatSession(session?.title || "Yeni Engine Sohbet"),
    ...session,
    entries: Array.isArray(session?.entries) ? session.entries : [],
    notebook: typeof session?.notebook === "string" && session.notebook.trim() ? session.notebook : DEFAULT_BLM_NOTEBOOK,
    code: typeof session?.code === "string" ? session.code : "",
    outputHtml: typeof session?.outputHtml === "string" ? session.outputHtml : "",
    model: session?.model === "baluk-2.2-thinking" ? "baluk-2.2-thinking" : "baluk-2.2",
    language: "html"
  };
}
function getActiveEngineSession() {
  return engineChatSessions.find((session) => session.id === activeEngineChatId) || null;
}
function ensureActiveEngineSession() {
  if (!engineChatSessions.length) {
    const first = createEngineChatSession();
    engineChatSessions = [first];
    activeEngineChatId = first.id;
  }
  if (!getActiveEngineSession()) activeEngineChatId = engineChatSessions[0]?.id || null;
  const active = getActiveEngineSession();
  if (active) Object.assign(active, normalizeEngineSession(active));
  return active;
}
function saveEngineSessions() {
  localStorage.setItem(ENGINE_CHAT_STORAGE_KEY, JSON.stringify({
    activeEngineChatId,
    sessions: engineChatSessions.map((session) => normalizeEngineSession(session))
  }));
  localStorage.setItem(ENGINE_PANEL_STORAGE_KEY, enginePanelMode || "");
}
function restoreEngineSessions() {
  const raw = localStorage.getItem(ENGINE_CHAT_STORAGE_KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed?.sessions) && parsed.sessions.length) {
        engineChatSessions = parsed.sessions.map((session) => normalizeEngineSession(session));
        activeEngineChatId = parsed.activeEngineChatId || engineChatSessions[0]?.id || null;
      }
    } catch {}
  }
  enginePanelMode = localStorage.getItem(ENGINE_PANEL_STORAGE_KEY) || null;
  ensureActiveEngineSession();
}
function updateEngineSelectionMeta() {
  const active = ensureActiveEngineSession();
  const modelLabel = active?.model === "baluk-2.2-thinking" ? "Baluk-2.2 Thinking" : "Baluk-2.2";
  const languageLabel = active?.language === "python" ? "Python" : "HTML/CSS/JS";
  if (engineSelectionMeta) engineSelectionMeta.textContent = `Model: ${modelLabel} • Dil: ${languageLabel}`;
}
function updateEngineThinkingQuota() {
  if (!engineThinkingQuota) return;
  const usage = getThinkingUsageInfo();
  if (isPremiumUser) {
    engineThinkingQuota.textContent = "Sinirsiz (Premium)";
    return;
  }
  engineThinkingQuota.textContent = usage.blocked ? `0/5 • ${formatMsAsMinSec(usage.waitMs)} sonra` : `${usage.remaining}/5 hazir`;
}
function setEngineStatus(title, text, processing = false) {
  engineStatusStateTitle = title || "Baluk Engine";
  engineStatusStateText = text || "";
  if (engineStatusTitle) engineStatusTitle.textContent = title;
  if (engineStatusText) engineStatusText.textContent = text;
  if (engineStatusCard) engineStatusCard.classList.toggle("processing", processing);
  if (engineModeOpen && engineProjectView) renderEngineProjectView();
}
function renderEngineChatList() {
  if (!engineChatList) return;
  engineChatList.innerHTML = "";
  ensureActiveEngineSession();
  engineChatSessions
    .slice()
    .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
    .forEach((session) => {
      const row = document.createElement("div");
      row.className = `engine-chat-item${session.id === activeEngineChatId ? " active" : ""}`;
      row.innerHTML = `
        <button type="button" class="engine-chat-open">${escapeHtml(session.title || "Yeni Engine Sohbet")}</button>
        <div class="engine-chat-actions">
          <button type="button" data-action="rename">Ad degistir</button>
          <button type="button" data-action="delete">Sil</button>
        </div>
      `;
      row.querySelector(".engine-chat-open")?.addEventListener("click", () => {
        activeEngineChatId = session.id;
        renderEngineWorkspace();
        saveEngineSessions();
      });
      row.querySelectorAll("button[data-action]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const action = btn.dataset.action;
          if (action === "rename") {
            const next = window.prompt("Yeni sohbet adi:", session.title || "Yeni Engine Sohbet");
            if (next && next.trim()) {
              session.title = next.trim();
              session.updatedAt = Date.now();
              renderEngineWorkspace();
              saveEngineSessions();
            }
          }
          if (action === "delete") {
            if (engineChatSessions.length <= 1) {
              showWarningOverlay("En az bir Engine sohbeti kalmali.");
              return;
            }
            if (!window.confirm("Bu Engine sohbeti silinsin mi?")) return;
            engineChatSessions = engineChatSessions.filter((item) => item.id !== session.id);
            if (activeEngineChatId === session.id) activeEngineChatId = engineChatSessions[0]?.id || null;
            renderEngineWorkspace();
            saveEngineSessions();
          }
        });
      });
      engineChatList.appendChild(row);
    });
}
function renderEngineLog() {
  if (!engineLog) return;
  engineLog.innerHTML = "";
  engineLog.classList.add("hidden");
}
function renderEngineDock() {
  if (!engineDock || !engineDockTitle || !engineDockBody) return;
  const active = ensureActiveEngineSession();
  engineDock.classList.toggle("hidden", !enginePanelMode);
  [engineNotebookToggle, engineCodeToggle].forEach((btn) => {
    if (!btn) return;
    const isActive = btn.id === "engineNotebookToggle" ? enginePanelMode === "notebook" : enginePanelMode === "code";
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
  if (!enginePanelMode) return;
  if (enginePanelMode === "notebook") {
    engineDockTitle.textContent = "Not Defteri";
    const notebookText = active?.notebook || active?.code || "// Kod geldikce burada duzenleyebilirsin.";
    engineDockBody.innerHTML = `
      <textarea id="engineNotebookArea" class="engine-notebook-area">${escapeHtml(notebookText)}</textarea>
      <button id="engineRunNotebookBtn" class="engine-dock-run" type="button">Kodu kaydet</button>
    `;
    const area = document.getElementById("engineNotebookArea");
    document.getElementById("engineRunNotebookBtn")?.addEventListener("click", () => {
      const session = ensureActiveEngineSession();
      const nextText = area?.value || "";
      session.notebook = nextText;
      session.code = nextText;
      session.outputHtml = session.language === "html" ? nextText : "";
      setEngineStatus("Kod guncellendi", "Degisiklikler proje hafizasina kaydedildi.");
      session.updatedAt = Date.now();
      saveEngineSessions();
      renderEngineWorkspace();
    });
    return;
  }
  engineDockTitle.textContent = "Kod ve Cikti";
  engineDockBody.innerHTML = `
    ${active?.language === "html" && active?.code
      ? `<div class="engine-output-preview clean"><iframe title="HTML cikti" sandbox="allow-scripts" srcdoc="${escapeHtml(active.code)}"></iframe></div>`
      : `<div class="engine-project-python"><pre>${escapeHtml(active?.code || "# Henuz cikti yok.")}</pre></div>`}
    ${renderHighlightedCode(active?.code || "// Henuz kod uretilmedi.", active?.language || "html")}
    <button id="engineCopyCodeBtn" class="engine-dock-copy" type="button">${active?.language === "html" ? "HTML kodunu kopyala" : "Python kodunu kopyala"}</button>
  `;
  document.getElementById("engineCopyCodeBtn")?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(active?.code || "");
      showWarningOverlay("Kod kopyalandi.");
    } catch {
      showWarningOverlay("Kopyalama su an basarisiz oldu.");
    }
  });
}
function renderEngineProjectView() {
  const active = ensureActiveEngineSession();
  if (engineProjectLanguageBadge) engineProjectLanguageBadge.textContent = "HTML/CSS/JS";
  if (engineProjectModelBadge) engineProjectModelBadge.textContent = active.model === "baluk-2.2-thinking" ? "Baluk-2.2 Thinking" : "Baluk-2.2";
  if (engineProjectTitle) engineProjectTitle.textContent = engineRunning ? "Baluk Engine dusunuyor" : (active.title || "Dusunme alani");
  if (engineProjectText) {
    engineProjectText.textContent = active.lastPrompt
      ? `Son komut: ${active.lastPrompt}`
      : "Baluk Engine burada seninle konusur ve sadece dusunurken animasyon gosterir.";
  }
  if (!engineProjectView) return;
  const visibleEntries = (active.entries || []).slice(-8);
  const feedHtml = visibleEntries.length
    ? `<div class="engine-conversation-feed">${visibleEntries.map((entry) => `
        <article class="engine-conversation-bubble ${entry.role === "user" ? "user" : "assistant"}">
          <strong>${entry.role === "user" ? "Sen" : "Baluk Engine"}</strong>
          <p>${escapeHtml(entry.text || "")}</p>
          ${entry.meta ? `<span>${escapeHtml(entry.meta)}</span>` : ""}
        </article>
      `).join("")}</div>`
    : `<div class="engine-project-empty"><p>Baluk Engine hazir. Komut verdiginde dusunme ve sohbet burada akacak.</p></div>`;
  const thinkingHtml = engineRunning
    ? `<div class="engine-thinking-scene"><div class="engine-thinking-actor"><div class="engine-thinking-fish-wrap"><svg class="engine-fish" viewBox="0 0 520 220" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#baluk-fish"></use></svg><div class="engine-bubbles"><span>&lt;/&gt;</span><span>&lt;/&gt;</span><span>&lt;/&gt;</span></div></div><div class="engine-thinking-copy"><strong>${escapeHtml(engineStatusStateTitle || "Baluk Engine dusunuyor")}</strong><p>${escapeHtml(engineStatusStateText || "Kod planlaniyor...")}</p></div></div></div>`
    : "";
  engineProjectView.innerHTML = `${feedHtml}${thinkingHtml}`;
}
function renderEngineWorkspace() {
  const active = ensureActiveEngineSession();
  renderEngineChatList();
  renderEngineLog();
  renderEngineDock();
  renderEngineProjectView();
  updateEngineSelectionMeta();
  updateEngineThinkingQuota();
  if (engineCanvas) engineCanvas.classList.toggle("pristine", !active.entries.length && !engineRunning);
  if (engineStatusCard) engineStatusCard.classList.remove("hidden");
  if (enginePrompt) enginePrompt.placeholder = "Bir sey yaz... Orn: nasilsin yazisi ekle, ustunde tikla yazan bir buton ekle";
}
function openBalukEngine() {
  engineModeOpen = true;
  if (plusMenu) plusMenu.classList.add("hidden");
  if (engineWorkspace) engineWorkspace.classList.remove("hidden");
  if (engineWorkspace) {
    engineWorkspace.classList.add("engine-enter");
    setTimeout(() => engineWorkspace.classList.remove("engine-enter"), 650);
  }
  if (appRoot) appRoot.classList.add("engine-mode-active");
  setEngineStatus("Baluk Engine hazir", "Komut ver, uygun kodu ve paneli hazirlayayim.");
  renderEngineWorkspace();
}
function closeBalukEngine() {
  engineModeOpen = false;
  if (engineWorkspace) engineWorkspace.classList.add("hidden");
  if (appRoot) appRoot.classList.remove("engine-mode-active");
}
function appendEngineEntry(role, text, meta = "", kind = "") {
  const active = ensureActiveEngineSession();
  active.entries.push({ role, text, meta, kind, at: Date.now() });
  active.updatedAt = Date.now();
  if (role === "user" && (!active.title || active.title === "Yeni Engine Sohbet") && active.entries.length <= 1) {
    active.title = makeChatTitleFromText(text);
  }
  saveEngineSessions();
  renderEngineLog();
  renderEngineChatList();
}
function toggleEnginePanel(panel) {
  enginePanelMode = enginePanelMode === panel ? null : panel;
  saveEngineSessions();
  renderEngineDock();
}
function selectEngineModel(model) {
  const active = ensureActiveEngineSession();
  active.model = model === "baluk-2.2-thinking" ? "baluk-2.2-thinking" : "baluk-2.2";
  active.updatedAt = Date.now();
  updateEngineSelectionMeta();
  updateEngineThinkingQuota();
  saveEngineSessions();
  engineRunning = false;
  setEngineStatus(
    active.model === "baluk-2.2-thinking" ? "Thinking modeli secildi" : "Baluk-2.2 secildi",
    active.model === "baluk-2.2-thinking" ? "Daha uzun ve daha detayli kod ciktilari icin hazirim." : "Daha sade ve temel odakli kod ciktilari verecegim."
  );
}
function selectEngineLanguage(language) {
  const active = ensureActiveEngineSession();
  active.language = "html";
  active.updatedAt = Date.now();
  updateEngineSelectionMeta();
  saveEngineSessions();
  renderEngineWorkspace();
  setEngineStatus("Dil guncellendi", "HTML/CSS/JS secildi.");
}
function detectEngineIntent(prompt = "") {
  const lower = String(prompt || "").toLocaleLowerCase("tr-TR");
  return {
    wantsSnake: /(yilan|snake)/.test(lower),
    wantsCalculator: /(hesap makinesi|calculator)/.test(lower),
    wantsHello: /(merhaba|hello|selam)/.test(lower),
    wantsButton: /(buton|button)/.test(lower),
    wantsMath: /(1\+1|topla|hesapla)/.test(lower),
    wantsInput: /(input|giris|form)/.test(lower),
    wantsCounter: /(sayac|sayı artsın|sayi artsin|tiklaninca sayi|counter)/.test(lower),
    wantsTitle: /(baslik|başlık|heading|title)/.test(lower),
    wantsRed: /(kirmizi|kırmızı|red)/.test(lower),
    wantsBlue: /(mavi|blue)/.test(lower),
    wantsGreen: /(yesil|yeşil|green)/.test(lower),
    wantsWhiteText: /(beyaz|white)/.test(lower)
  };
}
function extractEngineText(prompt = "", fallback = "Merhaba") {
  const raw = String(prompt || "");
  const lower = raw.toLocaleLowerCase("tr-TR");
  if (/utku/.test(lower)) return "Utku";
  if (/bu benim sitem/.test(lower)) return "Bu benim sitem";
  const addTextMatch = raw.match(/([a-zA-Z0-9çğıöşüÇĞİÖŞÜ ]{1,40})\s+yazısı\s+ekle/i);
  if (addTextMatch?.[1]) return addTextMatch[1].trim();
  const addTextMatchAlt = raw.match(/([a-zA-Z0-9çğıöşüÇĞİÖŞÜ ]{1,40})\s+yazisini\s+ekle/i);
  if (addTextMatchAlt?.[1]) return addTextMatchAlt[1].trim();
  const showTextMatch = raw.match(/([a-zA-Z0-9çğıöşüÇĞİÖŞÜ ]{1,40})\s+yazısı\s+çıksın/i);
  if (showTextMatch?.[1]) return showTextMatch[1].trim();
  const quoteMatch = raw.match(/["']([^"']{1,40})["']/);
  if (quoteMatch?.[1]) return quoteMatch[1].trim();
  const screenMatch = raw.match(/ekrana\s+([a-zA-Z0-9çğıöşüÇĞİÖŞÜ ]{2,40})\s+yaz/i);
  if (screenMatch?.[1]) return screenMatch[1].trim();
  const saysMatch = raw.match(/orada\s+([a-zA-Z0-9çğıöşüÇĞİÖŞÜ ]{2,40})\s+yazs/i);
  if (saysMatch?.[1]) return saysMatch[1].trim();
  return fallback;
}
function extractEngineButtonLabels(prompt = "") {
  const raw = String(prompt || "");
  const labels = [];
  const regex = /ustunde\s+([a-zA-Z0-9çğıöşüÇĞİÖŞÜ ]{1,24})\s+yazan\s+buton/gi;
  let match;
  while ((match = regex.exec(raw))) labels.push(match[1].trim());
  const regexAlt = /ustunde\s+([a-zA-Z0-9çğıöşüÇĞİÖŞÜ ]{1,24})\s+yazsin/gi;
  while ((match = regexAlt.exec(raw))) labels.push(match[1].trim());
  if (/tıkla 2|tikla 2|tıkla2|tikla2/i.test(raw)) labels.push("Tikla 2");
  if (/tıkla|tikla/i.test(raw) && !labels.some((label) => /tikla/i.test(label))) labels.unshift("Tikla");
  if (/merhaba/.test(raw.toLocaleLowerCase("tr-TR")) && /buton.*ismi|buton.*adi/i.test(raw)) labels.push("Merhaba");
  return [...new Set(labels.filter(Boolean))].slice(0, 2);
}
function resolveEnginePalette(prompt = "") {
  const lower = String(prompt || "").toLocaleLowerCase("tr-TR");
  const background = /kirmizi|kırmızı|red/.test(lower) ? "#dc2626" : /mavi|blue/.test(lower) ? "#2563eb" : "#f8fafc";
  const text = /beyaz|white/.test(lower) ? "#ffffff" : background === "#dc2626" || background === "#2563eb" ? "#ffffff" : "#0f172a";
  const accent = /yesil|yeşil|green/.test(lower) ? "#16a34a" : /mavi|blue/.test(lower) ? "#2563eb" : "#7c3aed";
  const outputColor = /mavi|blue/.test(lower) ? "#2563eb" : /yesil|yeşil|green/.test(lower) ? "#16a34a" : "#7c3aed";
  return { background, text, accent, outputColor };
}
function renderHighlightedCode(code = "", language = "html") {
  const escaped = escapeHtml(code);
  if (language === "python") {
    const highlighted = escaped
      .replace(/(#.*)$/gm, '<span class="engine-syntax-comment">$1</span>')
      .replace(/(&quot;.*?&quot;|'.*?')/g, '<span class="engine-syntax-string">$1</span>')
      .replace(/\b(def|return|if|elif|else|for|while|in|print|input|import|from|as|True|False|None|class)\b/g, '<span class="engine-syntax-keyword">$1</span>')
      .replace(/\b([0-9]+)\b/g, '<span class="engine-syntax-number">$1</span>');
    return `<pre class="engine-code-block engine-code-block-highlight"><code>${highlighted}</code></pre>`;
  }
  const highlighted = escaped
    .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="engine-syntax-comment">$1</span>')
    .replace(/(&lt;\/?)([a-zA-Z0-9-]+)/g, '$1<span class="engine-syntax-tag">$2</span>')
    .replace(/([a-zA-Z-:]+)=(&quot;.*?&quot;)/g, '<span class="engine-syntax-attr">$1</span>=<span class="engine-syntax-string">$2</span>')
    .replace(/\b(const|let|function|return|if|else|document|addEventListener)\b/g, '<span class="engine-syntax-keyword">$1</span>')
    .replace(/\b([0-9]+)\b/g, '<span class="engine-syntax-number">$1</span>');
  return `<pre class="engine-code-block engine-code-block-highlight"><code>${highlighted}</code></pre>`;
}
function escapeHtmlCodeText(value = "") {
  return String(value || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function escapeJsString(value = "") {
  return String(value || "").replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function normalizeEnginePrompt(prompt = "") {
  return String(prompt || "")
    .toLocaleLowerCase("tr-TR")
    .replace(/[ç]/g, "c")
    .replace(/[ğ]/g, "g")
    .replace(/[ıİ]/g, "i")
    .replace(/[ö]/g, "o")
    .replace(/[ş]/g, "s")
    .replace(/[ü]/g, "u");
}
function ensureBaseHtmlCode(existingCode = "") {
  const code = String(existingCode || "").trim();
  if (code && /<body[\s>]/i.test(code) && /<\/body>/i.test(code)) return code;
  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Baluk Engine</title>
</head>
<body>
</body>
</html>`;
}
function appendBeforeClosingBody(code = "", content = "") {
  return ensureBaseHtmlCode(code).replace(/<\/body>/i, `${content}\n</body>`);
}
function nextEngineElementId(code = "", prefix = "engineItem") {
  const matches = [...String(code || "").matchAll(new RegExp(`${prefix}(\\d+)`, "g"))];
  const next = matches.length ? Math.max(...matches.map((match) => Number(match[1] || 0))) + 1 : 1;
  return `${prefix}${next}`;
}
function updateBodyInlineStyle(code = "", styleText = "") {
  if (!styleText.trim()) return ensureBaseHtmlCode(code);
  const html = ensureBaseHtmlCode(code);
  if (/<body[^>]*style="/i.test(html)) {
    return html.replace(/<body([^>]*)style="([^"]*)"/i, (full, before, styles) => `<body${before}style="${styles}${styles.trim().endsWith(";") ? " " : "; "}${styleText}"`);
  }
  return html.replace(/<body/i, `<body style="${styleText}"`);
}
function updateLastTaggedElementStyle(code = "", tagType = "text", styleText = "") {
  if (!styleText.trim()) return code;
  const pattern = new RegExp(`<(p|h1|button|input)([^>]*data-engine-type="${tagType}"[^>]*)>`, "gi");
  const matches = [...String(code || "").matchAll(pattern)];
  const target = matches[matches.length - 1];
  if (!target) return code;
  const original = target[0];
  const updated = /style="/i.test(original)
    ? original.replace(/style="([^"]*)"/i, (full, styles) => `style="${styles}${styles.trim().endsWith(";") ? " " : "; "}${styleText}"`)
    : original.replace(/>$/, ` style="${styleText}">`);
  return String(code || "").replace(original, updated);
}
function buildHtmlActionPlan(prompt = "") {
  const lower = String(prompt || "").toLocaleLowerCase("tr-TR");
  const textValue = extractEngineText(prompt, "Merhaba");
  const buttonLabel = extractEngineButtonLabels(prompt)[0] || (/(bana tıkla|bana tikla)/.test(lower) ? "Bana tikla" : "Buton");
  const textColor = /mavi|blue/.test(lower) ? "#2563eb" : /yesil|yeşil|green/.test(lower) ? "#16a34a" : /kirmizi|kırmızı|red/.test(lower) ? "#dc2626" : "";
  return {
    addText: /(yazi|yazı|ekrana|merhaba|utku|baslik|başlık)/.test(lower),
    addButton: /(buton|button)/.test(lower),
    addInput: /(input|giris|giriş|form)/.test(lower),
    centerText: /(ortala|ortalanmis|ortalanmış|center)/.test(lower),
    growText: /(buyut|büyüt|32px|48px|64px|buyuk|büyük)/.test(lower),
    setBackground: /(arka plan|background)/.test(lower),
    addClickText: /(basinca|basınca|tiklayinca|tıklayınca|tıklayınca|tıklaınca)/.test(lower) && /(merhaba|utku|yazi|yazı)/.test(lower),
    textValue,
    buttonLabel,
    textColor
  };
}
function buildHtmlActionPlanV2(prompt = "") {
  const lower = normalizeEnginePrompt(prompt);
  const textValue = extractEngineText(prompt, "");
  const buttonLabel = extractEngineButtonLabels(prompt)[0] || (/(bana tikla)/.test(lower) ? "Bana tikla" : "Buton");
  const textColor = /mavi|blue/.test(lower) ? "#2563eb" : /yesil|yeşil|green/.test(lower) ? "#16a34a" : /kirmizi|kırmızı|red/.test(lower) ? "#dc2626" : "";
  const wantsClickAction = /(basinca|tiklayinca)/.test(lower);
  return {
    addText: (/(yazisi ekle|ekrana .* yaz|baslik)/.test(lower) || (!!textValue && !/(buton|button)/.test(lower))) && !wantsClickAction,
    addButton: /(buton|button)/.test(lower),
    addInput: /(input|giris|form)/.test(lower),
    centerText: /(ortala|ortalanmis|center)/.test(lower),
    growText: /(buyut|32px|48px|64px|buyuk)/.test(lower),
    setBackground: /(arka plan|background)/.test(lower),
    addClickText: wantsClickAction && !!textValue,
    roundButton: /(koselerini yuvarlak yap|yuvarlak yap|rounded)/.test(lower),
    growButton: /(butonu buyut|butonu buyuk yap)/.test(lower),
    recolorButton: /(buton.*mavi|buton.*kirmizi|buton.*yesil|buton.*rengini degistir)/.test(lower),
    renameButton: /(buton.*yazisini|ustundeki)/.test(lower) && !!buttonLabel,
    textValue,
    buttonLabel,
    textColor
  };
}
function buildIncrementalHtmlArtifact(prompt = "", advanced = false, existingCode = "") {
  let code = ensureBaseHtmlCode(existingCode);
  const plan = buildHtmlActionPlanV2(prompt);
  const lower = normalizeEnginePrompt(prompt);
  const actionNotes = [];

  if (plan.setBackground) {
    const bg = /mavi|blue/.test(lower) ? "#2563eb" : /yesil|yeşil|green/.test(lower) ? "#16a34a" : /kirmizi|kırmızı|red/.test(lower) ? "#dc2626" : "#f8fafc";
    code = updateBodyInlineStyle(code, `background:${bg};`);
    actionNotes.push("arka plani ayarladim");
  }
  if (plan.addText && !plan.addButton) {
    const textId = nextEngineElementId(code, "engineText");
    let styleText = "";
    if (plan.textColor) styleText += `color:${plan.textColor};`;
    if (plan.centerText) styleText += "text-align:center;width:100%;";
    if (plan.growText) styleText += `font-size:${advanced ? "48px" : "36px"};`;
    code = appendBeforeClosingBody(code, `  <p id="${textId}" data-engine-type="text"${styleText ? ` style="${styleText}"` : ""}>${escapeHtmlCodeText(plan.textValue)}</p>`);
    actionNotes.push(`"${plan.textValue}" yazisini ekledim`);
  }
  if (!plan.addText && (plan.centerText || plan.growText || plan.textColor)) {
    let styleText = "";
    if (plan.textColor) styleText += `color:${plan.textColor};`;
    if (plan.centerText) styleText += "text-align:center;width:100%;";
    if (plan.growText) styleText += `font-size:${advanced ? "48px" : "36px"};`;
    code = updateLastTaggedElementStyle(code, "text", styleText);
    if (styleText) actionNotes.push("son yaziyi duzenledim");
  }
  if (plan.addButton) {
    const buttonId = nextEngineElementId(code, "engineButton");
    code = appendBeforeClosingBody(code, `  <button id="${buttonId}" data-engine-type="button">${escapeHtmlCodeText(plan.buttonLabel)}</button>`);
    actionNotes.push(`"${plan.buttonLabel}" butonunu ekledim`);
    if (plan.addClickText) {
      const outputText = plan.textValue;
      const outputColor = plan.textColor || "#111827";
      code = appendBeforeClosingBody(code, `  <script>
    document.getElementById("${buttonId}").addEventListener("click", () => {
      const yazi = document.createElement("p");
      yazi.textContent = "${escapeJsString(outputText)}";
      yazi.style.color = "${outputColor}";
      document.body.appendChild(yazi);
    });
      </script>`);
      actionNotes.push(`butona tiklama davranisi ekledim`);
    }
  }
  if (!plan.addButton && (plan.roundButton || plan.growButton || plan.recolorButton || plan.renameButton)) {
    const buttonMatches = [...String(code || "").matchAll(/<button\b[^>]*data-engine-type="button"[^>]*>(.*?)<\/button>/gi)];
    const lastButton = buttonMatches[buttonMatches.length - 1];
    if (lastButton) {
      let updatedButton = lastButton[0];
      let buttonStyleText = "";
      if (plan.roundButton) buttonStyleText += "border-radius:18px;";
      if (plan.growButton) buttonStyleText += "padding:16px 28px;font-size:18px;";
      if (plan.recolorButton && plan.textColor) buttonStyleText += `background:${plan.textColor};color:#ffffff;`;
      if (buttonStyleText) {
        updatedButton = /style="/i.test(updatedButton)
          ? updatedButton.replace(/style="([^"]*)"/i, (full, styles) => `style="${styles}${styles.trim().endsWith(";") ? " " : "; "}${buttonStyleText}"`)
          : updatedButton.replace(/>/, ` style="${buttonStyleText}">`);
      }
      if (plan.renameButton && plan.buttonLabel) {
        updatedButton = updatedButton.replace(/>(.*?)<\/button>/i, `>${escapeHtmlCodeText(plan.buttonLabel)}</button>`);
      }
      code = String(code || "").replace(lastButton[0], updatedButton);
      actionNotes.push("son butonu duzenledim");
    }
  }
  if (plan.addInput) {
    const inputId = nextEngineElementId(code, "engineInput");
    code = appendBeforeClosingBody(code, `  <input id="${inputId}" data-engine-type="input" type="text" placeholder="Buraya yaz..." />`);
    actionNotes.push("bir input ekledim");
  }
  if (!actionNotes.length) {
    return {
      summary: "Komutu mevcut HTML yapisina gore yorumlayamadim, ama kodu korudum.",
      code
    };
  }
  return {
    summary: `Tamam, ${actionNotes.join(" ve ")}.`,
    code
  };
}
function buildIncrementalPythonArtifact(prompt = "", advanced = false, existingCode = "") {
  const lower = String(prompt || "").toLocaleLowerCase("tr-TR");
  const lines = [];
  const current = String(existingCode || "").trim();
  if (/(merhaba|utku|yazi|yazı|print)/.test(lower)) {
    lines.push(`print("${extractEngineText(prompt, "Merhaba")}")`);
  }
  if (/(input|giris|giriş)/.test(lower)) {
    lines.push(`deger = input("Bir deger gir: ")`);
  }
  if (/(topla|hesapla)/.test(lower) && /(input|giris|giriş)/.test(lower)) {
    lines.push(`sayi1 = int(input("Birinci sayi: "))`);
    lines.push(`sayi2 = int(input("Ikinci sayi: "))`);
    lines.push(`print(sayi1 + sayi2)`);
  }
  if (!lines.length && /(1\+1)/.test(lower)) {
    lines.push(`print(1 + 1)`);
  }
  const code = [current, ...lines].filter(Boolean).join(current && lines.length ? "\n" : "");
  return {
    summary: lines.length ? `Tamam, Python koduna ${lines.length} yeni satir ekledim.` : "Komuta gore Python tarafinda yeni satir ekleyemedim.",
    code: code || `print("Hazir")`
  };
}
function buildHtmlEngineArtifact(prompt = "", advanced = false, existingCode = "") {
  return buildIncrementalHtmlArtifact(prompt, advanced, existingCode);
  const intent = detectEngineIntent(prompt);
  const lowerPrompt = String(prompt || "").toLocaleLowerCase("tr-TR");
  const wantsSite = /(site|web site|website|sayfa)/.test(lowerPrompt);
  const wantsBigText = /(buyuk|büyük|32px|48px|64px|ortalanmis|ortalanmış)/.test(lowerPrompt);
  const wantsTwoButtons = /(iki buton|2 buton|tikla 2|tıkla 2|tikla2|tıkla2)/.test(lowerPrompt);
  const bg = resolveEnginePalette(prompt).background;
  const fg = resolveEnginePalette(prompt).text;
  const titleText = extractEngineText(prompt, intent.wantsHello ? "Merhaba" : "Baluk Engine");
  if (!intent.wantsSnake && !intent.wantsCalculator && !intent.wantsCounter) {
    const basicText = extractEngineText(prompt, "Merhaba");
    const colorValue = /mavi|blue/.test(lowerPrompt) ? "#2563eb" : /yesil|yeşil|green/.test(lowerPrompt) ? "#16a34a" : /kirmizi|kırmızı|red/.test(lowerPrompt) ? "#dc2626" : "#111827";
    const alignValue = /(ortala|ortalanmis|ortalanmış|center)/.test(lowerPrompt) ? "center" : "left";
    const fontSize = /(buyuk|büyük|32px|48px|64px)/.test(lowerPrompt) ? (advanced ? "48px" : "36px") : "18px";
    if (intent.wantsHello && !intent.wantsButton && !intent.wantsInput && !intent.wantsTitle && !wantsSite) {
      return {
        summary: advanced ? "Istedigin merhaba yazisini duzenli bicimde ekledim." : "Merhaba yazisini ekledim.",
        code: `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${basicText}</title>
</head>
<body>
  <p style="color:${colorValue};text-align:${alignValue};font-size:${fontSize};">${basicText}</p>
</body>
</html>`
      };
    }
    if (intent.wantsButton && !wantsTwoButtons && !intent.wantsInput && !intent.wantsTitle) {
      const buttonLabel = extractEngineButtonLabels(prompt)[0] || "Tikla";
      return {
        summary: advanced ? "Butonu ve istenen tiklama davranisini ekledim." : "Butonu ekledim.",
        code: `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Buton</title>
</head>
<body>
  <button id="buton">${buttonLabel}</button>
  <script>
    document.getElementById("buton").addEventListener("click", () => {
      const yazi = document.createElement("p");
      yazi.textContent = "${basicText}";
      yazi.style.color = "${colorValue}";
      document.body.appendChild(yazi);
    });
  </script>
</body>
</html>`
      };
    }
  }
  if (intent.wantsSnake) {
    return {
      summary: advanced ? "Snake oyunu icin daha zengin bir HTML/CSS/JS paketi hazirladim." : "Snake oyunu icin daha sade bir HTML/CSS/JS paketi hazirladim.",
      code: advanced ? `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Snake Arena</title>
  <style>
    body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: radial-gradient(circle at top, #1e293b, #020617); color: #fff; font-family: Arial, sans-serif; }
    .game-shell { width: min(92vw, 720px); background: rgba(15, 23, 42, .92); border: 1px solid rgba(148, 163, 184, .35); border-radius: 24px; padding: 24px; }
    .top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; }
    .badge { border: 1px solid rgba(148,163,184,.35); border-radius: 999px; padding: 8px 14px; background: rgba(30,41,59,.7); }
    canvas { width: 100%; background: linear-gradient(180deg, #0f172a, #111827); border-radius: 20px; border: 1px solid rgba(96,165,250,.3); }
    button { margin-top: 18px; border: none; border-radius: 14px; padding: 12px 16px; font-weight: 700; cursor: pointer; background: linear-gradient(135deg, #38bdf8, #2563eb); color: #fff; }
  </style>
</head>
<body>
  <div class="game-shell">
    <div class="top"><h1>Snake Arena</h1><div class="badge">Skor: <span id="score">0</span></div></div>
    <canvas id="game" width="600" height="600"></canvas>
    <button id="restart">Yeniden Baslat</button>
  </div>
  <script>
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");
    const scoreEl = document.getElementById("score");
    const size = 24;
    let snake = [{ x: 10, y: 10 }];
    let food = { x: 15, y: 15 };
    let dir = { x: 1, y: 0 };
    let score = 0;
    function placeFood() { food = { x: Math.floor(Math.random() * (canvas.width / size)), y: Math.floor(Math.random() * (canvas.height / size)) }; }
    function resetGame() { snake = [{ x: 10, y: 10 }]; dir = { x: 1, y: 0 }; score = 0; scoreEl.textContent = score; placeFood(); }
    function tick() {
      const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };
      if (head.x < 0 || head.y < 0 || head.x >= canvas.width / size || head.y >= canvas.height / size || snake.some((part) => part.x === head.x && part.y === head.y)) resetGame();
      snake.unshift(head);
      if (head.x === food.x && head.y === food.y) { score += 10; scoreEl.textContent = score; placeFood(); } else { snake.pop(); }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snake.forEach((part, index) => { ctx.fillStyle = index === 0 ? "#38bdf8" : "#22c55e"; ctx.fillRect(part.x * size, part.y * size, size - 2, size - 2); });
      ctx.fillStyle = "#f97316"; ctx.fillRect(food.x * size, food.y * size, size - 2, size - 2);
    }
    document.addEventListener("keydown", (event) => {
      const map = { ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0] };
      if (!map[event.key]) return;
      const [x, y] = map[event.key];
      if (snake.length > 1 && x === -dir.x && y === -dir.y) return;
      dir = { x, y };
    });
    document.getElementById("restart").addEventListener("click", resetGame);
    resetGame();
    setInterval(tick, 110);
  </script>
</body>
</html>` : `<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8" /><title>Yilan Oyunu</title><style>body { font-family: Arial, sans-serif; display: grid; place-items: center; min-height: 100vh; background: #f8fafc; } canvas { background: #111827; border: 3px solid #111827; }</style></head><body><canvas id="game" width="400" height="400"></canvas><script>const canvas = document.getElementById("game");const ctx = canvas.getContext("2d");const size = 20;let snake=[{x:8,y:8}],food={x:12,y:12},dir={x:1,y:0};function draw(){const head={x:snake[0].x+dir.x,y:snake[0].y+dir.y};if(head.x<0||head.y<0||head.x>=20||head.y>=20){snake=[{x:8,y:8}]};snake.unshift(head);if(head.x===food.x&&head.y===food.y){food={x:Math.floor(Math.random()*20),y:Math.floor(Math.random()*20)}}else{snake.pop()}ctx.clearRect(0,0,400,400);ctx.fillStyle="#22c55e";snake.forEach((part)=>ctx.fillRect(part.x*size,part.y*size,18,18));ctx.fillStyle="#ef4444";ctx.fillRect(food.x*size,food.y*size,18,18)}document.addEventListener("keydown",(e)=>{if(e.key==="ArrowUp")dir={x:0,y:-1};if(e.key==="ArrowDown")dir={x:0,y:1};if(e.key==="ArrowLeft")dir={x:-1,y:0};if(e.key==="ArrowRight")dir={x:1,y:0};});setInterval(draw,130);</script></body></html>`
    };
  }
  if (intent.wantsCounter) {
    return {
      summary: advanced ? "Sayaç davranışı için HTML, CSS ve JS birlikte kuruldu." : "Temel sayaç örneği hazırlandı.",
      code: `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sayaç</title>
  <style>
    body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: linear-gradient(180deg, #f8fafc, #eef2ff); font-family: Arial, sans-serif; }
    .card { width: min(420px, 92vw); padding: ${advanced ? "32px" : "24px"}; border-radius: 28px; background: #fff; box-shadow: 0 24px 48px rgba(15,23,42,.12); text-align: center; }
    h1 { margin: 0 0 10px; font-size: ${advanced ? "2.2rem" : "1.8rem"}; }
    p { color: #64748b; }
    .diamond-btn { margin-top: 18px; width: 74px; height: 74px; transform: rotate(45deg); border: none; border-radius: 22px; background: linear-gradient(135deg, #7c3aed, #2563eb); color: #fff; cursor: pointer; box-shadow: 0 18px 32px rgba(124,58,237,.26); }
    .diamond-btn span { display: inline-block; transform: rotate(-45deg); font-weight: 800; font-size: 1rem; }
    .count { margin-top: 20px; font-size: ${advanced ? "2.6rem" : "2.1rem"}; font-weight: 900; color: #111827; }
  </style>
</head>
<body>
  <section class="card">
    <h1>Sayaç sistemi</h1>
    <p>Butona her basıldığında sayı artar.</p>
    <button id="counterBtn" class="diamond-btn" type="button"><span>Artır</span></button>
    <div id="count" class="count">0</div>
  </section>
  <script>
    const countNode = document.getElementById("count");
    let count = 0;
    document.getElementById("counterBtn").addEventListener("click", () => {
      count += 1;
      countNode.textContent = count;
    });
  </script>
</body>
</html>`
    };
  }
  if (intent.wantsButton || intent.wantsTitle || intent.wantsHello || intent.wantsInput || wantsSite || wantsTwoButtons) {
    const palette = resolveEnginePalette(prompt);
    const buttonLabels = extractEngineButtonLabels(prompt);
    const firstLabel = buttonLabels[0] || "Tikla";
    const secondLabel = buttonLabels[1] || "Tikla 2";
    const titleSize = wantsBigText ? (advanced ? "clamp(2.4rem, 5vw, 4rem)" : "clamp(2rem, 4vw, 3rem)") : (advanced ? "2.2rem" : "1.8rem");
    const firstOutputText = /utku/.test(lowerPrompt) ? "Utku" : "Merhaba";
    const firstOutputColor = /mavi|blue/.test(lowerPrompt) ? "#2563eb" : /yesil|yeşil|green/.test(lowerPrompt) ? "#16a34a" : palette.outputColor;
    const secondOutputText = /tıkla 2.*merhaba|tikla 2.*merhaba|ikinci.*merhaba/.test(lowerPrompt) ? "Merhaba" : "Hazir";
    const secondOutputColor = /yesil|yeşil|green/.test(lowerPrompt) ? "#16a34a" : "#7c3aed";
    return {
      summary: advanced ? "Istedigin sayfayi daha duzenli bir HTML, CSS ve JS paketiyle kurdum." : "Istedigin yapiyi temel ama calisir halde kurdum.",
      code: `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${titleText}</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: Arial, sans-serif;
      background: ${palette.background};
      color: ${palette.text};
    }
    .page {
      width: min(${advanced ? "860px" : "720px"}, 100%);
      margin: 0 auto;
      padding: ${advanced ? "48px 32px" : "32px 24px"};
      display: grid;
      gap: ${advanced ? "20px" : "16px"};
      align-content: start;
    }
    h1 {
      margin: 0;
      font-size: ${titleSize};
      font-weight: 800;
      letter-spacing: -0.03em;
      text-align: center;
    }
    p {
      margin: 0;
      line-height: 1.6;
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      align-items: center;
    }
    .action-btn {
      border: none;
      border-radius: 14px;
      padding: 12px 20px;
      background: linear-gradient(135deg, ${palette.accent}, ${/mavi|blue/.test(lowerPrompt) ? "#1d4ed8" : "#4f46e5"});
      color: #ffffff;
      cursor: pointer;
      box-shadow: 0 14px 26px rgba(37, 99, 235, 0.18);
      font-weight: 800;
      font-size: .95rem;
    }
    .output-message {
      margin: 0;
      font-size: ${advanced ? "1.12rem" : "1rem"};
      font-weight: 700;
    }
    .message-mount {
      display: grid;
      gap: 10px;
    }
    input {
      width: 100%;
      padding: 14px 16px;
      border-radius: 16px;
      border: 1px solid rgba(148, 163, 184, 0.45);
      outline: none;
      font-size: 1rem;
    }
  </style>
</head>
<body>
  <main class="page">
    ${shouldRenderTitle ? `<h1>${titleText}</h1>` : ""}
    ${intent.wantsHello && !intent.wantsTitle && !wantsSite ? `<p class="output-message" style="color:${palette.outputColor};">${titleText}</p>` : ""}
    ${intent.wantsInput ? '<input type="text" placeholder="Buraya bir sey yaz..." />' : ""}
    ${shouldRenderButtons ? `<div class="actions">
      <button id="actionOne" class="action-btn" type="button">${firstLabel}</button>
      ${wantsTwoButtons ? `<button id="actionTwo" class="action-btn" type="button">${secondLabel}</button>` : ""}
    </div>` : ""}
    <div id="messageMount" class="message-mount"></div>
  </main>
  <script>
    const messageMount = document.getElementById("messageMount");
    const firstButton = document.getElementById("actionOne");
    const secondButton = document.getElementById("actionTwo");

    function addMessage(text, color) {
      const item = document.createElement("p");
      item.className = "output-message";
      item.textContent = text;
      item.style.color = color;
      messageMount.appendChild(item);
    }

    if (firstButton) {
      firstButton.addEventListener("click", () => {
        addMessage("${firstOutputText}", "${firstOutputColor}");
      });
    }

    ${wantsTwoButtons ? `if (secondButton) {
      secondButton.addEventListener("click", () => {
        addMessage("${secondOutputText}", "${secondOutputColor}");
      });
    }` : ""}
  </script>
</body>
</html>`
    };
  }
  if (intent.wantsCalculator || intent.wantsMath) {
    return {
      summary: advanced ? "Hesap makinesi icin guclu stilli bir arayuz kurdum." : "Temel bir hesap makinesi hazirladim.",
      code: advanced ? `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Baluk Calculator</title>
  <style>
    body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: linear-gradient(135deg, #dbeafe, #eef2ff); font-family: Arial, sans-serif; }
    .calculator { width: 340px; border-radius: 28px; padding: 22px; background: rgba(255,255,255,.84); box-shadow: 0 24px 40px rgba(37, 99, 235, .18); }
    #display { width: 100%; box-sizing: border-box; border: none; border-radius: 18px; padding: 18px; font-size: 2rem; margin-bottom: 16px; text-align: right; background: #eff6ff; }
    .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
    button { border: none; border-radius: 18px; padding: 16px; font-size: 1rem; font-weight: 800; cursor: pointer; background: #fff; }
    .op { background: linear-gradient(135deg, #2563eb, #3b82f6); color: #fff; }
  </style>
</head>
<body>
  <div class="calculator">
    <input id="display" type="text" value="0" readonly />
    <div class="grid">
      <button onclick="clearDisplay()">C</button><button onclick="append('/')">/</button><button onclick="append('*')">×</button><button class="op" onclick="append('-')">-</button>
      <button onclick="append('7')">7</button><button onclick="append('8')">8</button><button onclick="append('9')">9</button><button class="op" onclick="append('+')">+</button>
      <button onclick="append('4')">4</button><button onclick="append('5')">5</button><button onclick="append('6')">6</button><button class="op" onclick="calculate()">=</button>
      <button onclick="append('1')">1</button><button onclick="append('2')">2</button><button onclick="append('3')">3</button><button onclick="append('.')">.</button>
      <button style="grid-column: span 4" onclick="append('0')">0</button>
    </div>
  </div>
  <script>
    const display = document.getElementById("display");
    function append(value) { display.value = display.value === "0" ? value : display.value + value; }
    function clearDisplay() { display.value = "0"; }
    function calculate() { try { display.value = Function("return " + display.value)(); } catch { display.value = "Hata"; } }
  </script>
</body>
</html>` : `<!DOCTYPE html><html lang="tr"><body><input id="display" readonly value="0" /><button onclick="document.getElementById('display').value = 1 + 1">1+1 hesapla</button></body></html>`
    };
  }
  if (intent.wantsButton) {
    return {
      summary: advanced ? "Butonlu mini arayuzu biraz daha guzel hale getirdim." : "Basit buton ornegi hazirladim.",
      code: advanced ? `<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Buton Ornegi</title><style>body { min-height: 100vh; display: grid; place-items: center; margin: 0; background: linear-gradient(135deg, #e0f2fe, #ede9fe); font-family: Arial, sans-serif; }button { border: none; border-radius: 999px; padding: 16px 26px; font-size: 1rem; font-weight: 800; background: linear-gradient(135deg, #2563eb, #7c3aed); color: #fff; cursor: pointer; box-shadow: 0 16px 30px rgba(124,58,237,.24); }p { margin-top: 16px; text-align: center; color: #0f172a; }</style></head><body><main><button id="cta">Baluk butonu</button><p id="status">Buton hazir.</p></main><script>document.getElementById("cta").addEventListener("click", () => { document.getElementById("status").textContent = "Buton calisti."; });</script></body></html>` : `<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Buton Ornegi</title><style>body { min-height: 100vh; margin: 0; display: grid; place-items: center; font-family: Arial, sans-serif; background: #ffffff; }button { padding: 14px 22px; border-radius: 14px; border: 2px solid #111827; background: #f8fafc; font-weight: 800; cursor: pointer; }</style></head><body><button onclick="document.body.insertAdjacentHTML('beforeend','<p style=&quot;color:green;text-align:center;font-weight:800;&quot;>Buton calisti</p>')">Tikla</button></body></html>`
    };
  }
  if (/(input|giris|form)/.test(String(prompt || "").toLocaleLowerCase("tr-TR"))) {
    return {
      summary: advanced ? "Python icin input alan, isleyen ve sonucu temiz basan bir ornek kurdum." : "Python icin temel input ornegi hazirladim.",
      code: advanced ? `def main():
    name = input("Adin ne? ")
    age = int(input("Yasin kac? "))
    print(f"Merhaba {name}!")
    print(f"Bir sonraki yil {age + 1} yasinda olacaksin.")

if __name__ == "__main__":
    main()` : `name = input("Adin ne? ")
print("Merhaba", name)`
    };
  }
  if (/(\bif\b|kosul|koşul|sart|şart)/.test(String(prompt || "").toLocaleLowerCase("tr-TR"))) {
    return {
      summary: advanced ? "Python icin kosullu karar veren daha duzenli bir akis kurdum." : "Python if kosulu ornegi hazirladim.",
      code: advanced ? `score = int(input("Notunu gir: "))

if score >= 85:
    print("Cok iyi")
elif score >= 50:
    print("Gectin")
else:
    print("Tekrar dene")` : `number = int(input("Bir sayi gir: "))
if number > 0:
    print("Pozitif")
else:
    print("Sifir veya negatif")`
    };
  }
  if (/(dongu|döngü|for |while |sayac|sayi artsin|tıklandikca|tiklandikca)/.test(String(prompt || "").toLocaleLowerCase("tr-TR"))) {
    return {
      summary: advanced ? "Python icin dongu ve artan sayi mantigini birlikte verdim." : "Python dongu ornegi hazirladim.",
      code: advanced ? `total_click = 0

for step in range(1, 6):
    total_click += 1
    print(f"Butona basilmis gibi dusun: {total_click}")

print("Son deger:", total_click)` : `for number in range(1, 6):
    print(number)`
    };
  }
  if (intent.wantsHello) {
    return {
      summary: advanced ? "Merhaba ekrani icin ufak bir stil ekledim." : "En sade merhaba cikisini hazirladim.",
      code: advanced ? `<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Merhaba</title><style>body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: linear-gradient(135deg, #eff6ff, #f8fafc); font-family: Arial, sans-serif; }p { font-size: 3rem; font-weight: 800; color: #0f172a; }</style></head><body><p>Merhaba</p></body></html>` : `<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Merhaba</title><style>body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #ffffff; font-family: Arial, sans-serif; }p { font-size: 2.2rem; font-weight: 800; color: #111827; }</style></head><body><p>Merhaba</p></body></html>`
    };
  }
  return {
    summary: advanced ? "Uzerine cikman kolay olsun diye daha dolu bir baslangic iskeleti verdim." : "Sade bir baslangic iskeleti verdim.",
    code: advanced ? `<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Baluk Engine Starter</title><style>:root { --bg: #0f172a; --card: rgba(15, 23, 42, .82); --line: rgba(148, 163, 184, .25); --text: #e2e8f0; }* { box-sizing: border-box; }body { margin: 0; font-family: Arial, sans-serif; background: radial-gradient(circle at top, #1e3a8a, #020617 68%); color: var(--text); }.shell { min-height: 100vh; display: grid; place-items: center; padding: 32px; }.card { width: min(960px, 100%); border: 1px solid var(--line); border-radius: 28px; background: var(--card); padding: 32px; }h1 { margin: 0 0 10px; font-size: clamp(2.2rem, 6vw, 4rem); }p { color: #cbd5e1; line-height: 1.7; max-width: 60ch; }</style></head><body><main class="shell"><section class="card"><h1>Baluk Engine Starter</h1><p>Bu alan, komutunu buyutmek icin temel bir taslak olarak hazirlandi.</p></section></main></body></html>` : `<!DOCTYPE html><html lang="tr"><body><h1>Baslangic sayfasi</h1><p>Buradan devam edebilirsin.</p></body></html>`
  };
}
function buildPythonEngineArtifact(prompt = "", advanced = false, existingCode = "") {
  return buildIncrementalPythonArtifact(prompt, advanced, existingCode);
  const intent = detectEngineIntent(prompt);
  if (intent.wantsSnake) {
    return {
      summary: advanced ? "Python icin turtle tabanli daha dolu bir snake cikardim." : "Python icin temel bir snake ornegi cikardim.",
      code: advanced ? `import turtle
import random

screen = turtle.Screen()
screen.setup(width=700, height=700)
screen.bgcolor("#0f172a")
screen.tracer(0)

head = turtle.Turtle("square")
head.color("#38bdf8")
head.penup()
head.direction = "stop"

food = turtle.Turtle("circle")
food.color("#f97316")
food.penup()
food.goto(0, 100)

segments = []

def move():
    x, y = head.xcor(), head.ycor()
    if head.direction == "up": head.sety(y + 20)
    elif head.direction == "down": head.sety(y - 20)
    elif head.direction == "left": head.setx(x - 20)
    elif head.direction == "right": head.setx(x + 20)` : `import turtle

screen = turtle.Screen()
screen.setup(width=600, height=600)
screen.bgcolor("black")

snake = turtle.Turtle("square")
snake.color("green")
snake.penup()
snake.direction = "stop"`
    };
  }
  if (intent.wantsCalculator || intent.wantsMath) {
    return {
      summary: advanced ? "Python icin islem secimli mini hesap makinesi cikardim." : "Python icin temel bir hesap makinesi cikardim.",
      code: advanced ? `def calculate():
    first = float(input("Ilk sayi: "))
    operator = input("Islem (+, -, *, /): ")
    second = float(input("Ikinci sayi: "))
    if operator == "+":
        result = first + second
    elif operator == "-":
        result = first - second
    elif operator == "*":
        result = first * second
    elif operator == "/":
        result = first / second
    else:
        print("Bilinmeyen islem")
        return
    print("Sonuc:", result)

calculate()` : `first = float(input("Ilk sayi: "))
second = float(input("Ikinci sayi: "))
print("Toplam:", first + second)`
    };
  }
  if (intent.wantsHello) {
    return {
      summary: advanced ? "Python merhaba ornegine fonksiyon yapisi ekledim." : "En sade Python merhaba ornegini verdim.",
      code: advanced ? `def selamla(isim="Baluk"):
    print(f"Merhaba, {isim}!")

selamla()` : `print("Merhaba")`
    };
  }
  return {
    summary: advanced ? "Python icin daha acik bir baslangic iskeleti verdim." : "Python baslangic iskeleti verdim.",
    code: advanced ? `def main():
    print("Baluk Engine Python baslangici")

if __name__ == "__main__":
    main()` : `print("Python baslangic kodu hazir")`
  };
}
function buildBlmEngineArtifact(prompt = "", advanced = false) {
  const intent = detectEngineIntent(prompt);
  let code = DEFAULT_BLM_NOTEBOOK;
  let summary = "BLM notlarini hazirladim.";
  if (intent.wantsSnake) {
    code = `print("Snake Arena")
style=text { color=purple font-size=30px font-weight=800 }
yilanoyunu`;
    summary = "BLM icin snake sahnesi olusturdum. T panelinde ciktisini, N panelinde kodunu gorebilirsin.";
  } else if (intent.wantsCalculator || intent.wantsMath) {
    code = `print("Baluk Hesap Makinesi")
style=text { color=purple font-size=30px font-weight=800 }
hesapmakinesi`;
    summary = "BLM icin hesap makinesi sahnesi olusturdum.";
  } else if (intent.wantsButton) {
    code = `print("Asagida bir buton var")
button(name=buton"Tikla")
style=button { background=purple color=white padding=12px 18px radius=18px }`;
    summary = "BLM ile butonlu kucuk bir ornek cikardim.";
  } else if (intent.wantsHello) {
    code = `print("Merhaba")`;
    summary = "BLM ile en sade merhaba cikisini hazirladim.";
  } else {
    code = advanced ? `print("Baluk Engine BLM")
print(name=yazi"Daha zengin bir sahne hazirlandi")
button(name=buton"Uret")
style=text { color=#6d28d9 font-size=28px font-weight=800 }
style=button { background=#7c3aed color=white padding=12px 18px radius=18px }` : `print("BLM ile hizli baslangic")`;
    summary = advanced ? "BLM icin biraz daha zengin bir baslangic sahnesi kurdum." : "BLM icin sade bir baslangic sahnesi kurdum.";
  }
  return { summary, code, outputHtml: renderBlmPreview(code) };
}
function extendBlmProject(existingCode = "", prompt = "") {
  const lower = String(prompt || "").toLocaleLowerCase("tr-TR");
  const extra = [];
  if (/merhaba/.test(lower) && !/print\("Merhaba"\)/.test(existingCode)) {
    extra.push(`print(name=yazi"Merhaba")`);
  }
  if (/buton/.test(lower)) {
    const buttonLabel = /ismi merhaba|adi merhaba|buton.*merhaba/.test(lower) ? "Merhaba" : "Tikla";
    extra.push(`button(name=buton"${buttonLabel}")`);
  }
  if (/yeşil|yesil/.test(lower)) {
    extra.push(`style=text { color=green font-size=28px font-weight=800 }`);
  }
  if (/mor|purple/.test(lower)) {
    extra.push(`style=button { background=purple color=white padding=12px 18px radius=18px }`);
  }
  if (/kırmızı|kirmizi|red/.test(lower)) {
    extra.push(`style=button { background=red color=white padding=12px 18px radius=18px }`);
  }
  if (/hesap makinesi|calculator/.test(lower)) {
    extra.push(`hesapmakinesi`);
  }
  if (/yilan|snake/.test(lower)) {
    extra.push(`yilanoyunu`);
  }
  if (/tıklayınca|tiklayinca|basınca|basinca/.test(lower) && /merhaba/.test(lower)) {
    extra.push(`print(name=yazi"Merhaba")`);
  }
  const merged = [existingCode.trim(), ...extra].filter(Boolean).join("\n");
  return merged || existingCode || DEFAULT_BLM_NOTEBOOK;
}
function buildEngineArtifact(prompt = "", language = "html", model = "baluk-2.2", existingCode = "") {
  const advanced = model === "baluk-2.2-thinking";
  return buildHtmlEngineArtifact(prompt, advanced, existingCode);
}
function getEngineStatuses(prompt = "", language = "html", model = "baluk-2.2") {
  const languageLabel = language === "python" ? "Python" : "HTML/CSS/JS";
  const lower = String(prompt || "").toLocaleLowerCase("tr-TR");
  const actions = [];
  if (/(merhaba|utku|yazi|yazı|baslik|başlık)/.test(lower)) actions.push("Yaziyi ekliyorum...");
  if (/(buyut|büyüt|buyuk|büyük|32px|48px|64px)/.test(lower)) actions.push("Yaziyi buyutuyorum...");
  if (/(ortala|ortalanmis|ortalanmış|center)/.test(lower)) actions.push("Yaziyi ortaliyorum...");
  if (/(buton|button)/.test(lower)) actions.push("Butonu ekliyorum...");
  if (/(basinca|basınca|tiklayinca|tıklayınca)/.test(lower)) actions.push("Tiklama davranisini ekliyorum...");
  if (/(input|giris|giriş)/.test(lower)) actions.push("Input ekliyorum...");
  const base = [`${languageLabel} komutunu aldim.`, `${languageLabel} icin ilk adimi baslatiyorum...`];
  const final = model === "baluk-2.2-thinking"
    ? [...base, ...actions, "Kodu toparliyorum...", "Son kontrolu yapiyorum..."]
    : [...base, ...(actions.length ? actions.slice(0, 2) : ["Kodu toparliyorum..."])];
  return final;
}
function getEngineStatusSteps(prompt = "", model = "baluk-2.2") {
  const lower = normalizeEnginePrompt(prompt);
  const steps = [];
  if (/(yazi|baslik|ekrana)/.test(lower)) steps.push({ thinking: "Yaziyi ekliyorum...", done: "Tamam, yaziyi ekledim." });
  if (/(buyut|buyuk|32px|48px|64px)/.test(lower)) steps.push({ thinking: "Yaziyi buyutuyorum...", done: "Tamam, yaziyi buyuttum." });
  if (/(ortala|ortalanmis|center)/.test(lower)) steps.push({ thinking: "Yaziyi ortaliyorum...", done: "Tamam, yaziyi ortaladim." });
  if (/(buton|button)/.test(lower)) steps.push({ thinking: "Butonu ekliyorum...", done: "Tamam, butonu ekledim." });
  if (/(basinca|tiklayinca)/.test(lower)) steps.push({ thinking: "Tiklama davranisini ekliyorum...", done: "Tamam, tiklama davranisini ekledim." });
  if (/(input|giris)/.test(lower)) steps.push({ thinking: "Inputu ekliyorum...", done: "Tamam, inputu ekledim." });
  if (!steps.length) steps.push({ thinking: "Kodu hazirliyorum...", done: "Tamam, kodu hazirladim." });
  return model === "baluk-2.2-thinking" ? [...steps, { thinking: "Son kontrolu yapiyorum...", done: "Tamam, son kontrolleri bitirdim." }] : steps;
}
function estimateEngineThinkingMs(prompt = "", model = "baluk-2.2") {
  const lengthScore = Math.max(0, String(prompt || "").trim().length);
  if (model === "baluk-2.2-thinking") return Math.min(40000, Math.max(20000, 18000 + lengthScore * 45));
  return Math.min(24000, Math.max(10000, 9000 + lengthScore * 24));
}
function isEngineResetPrompt(prompt = "") {
  const lower = String(prompt || "").toLocaleLowerCase("tr-TR");
  return /(kodu sil|kodu temizle|temizle|bastan basla|baştan başla|sifirdan basla|sıfırdan başla|reset)/.test(lower);
}
async function runEngineStatuses(statuses = [], totalMs = 12000) {
  const stepDelay = Math.max(2200, Math.floor(totalMs / Math.max(1, statuses.length)));
  for (const step of statuses) {
    setEngineStatus("Baluk Engine dusunuyor", step.thinking || "Dusunuyorum...", true);
    await new Promise((resolve) => setTimeout(resolve, stepDelay));
    appendEngineEntry("assistant", step.done || "Tamam.", "Baluk Engine");
  }
}
async function submitEnginePrompt() {
  if (!enginePrompt || engineRunning) return;
  const prompt = enginePrompt.value.trim();
  if (!prompt) return;
  const active = ensureActiveEngineSession();
  if (isEngineResetPrompt(prompt)) {
    appendEngineEntry("user", prompt, "Komut");
    active.code = "";
    active.outputHtml = "";
    active.notebook = "";
    active.lastPrompt = "";
    active.updatedAt = Date.now();
    appendEngineEntry("assistant", "Tamam, kodu sildim ve projeyi bastan baslatmaya hazirim.", "Baluk Engine");
    setEngineStatus("Baluk Engine hazir", "Proje temizlendi. Yeni komutunu bekliyorum.");
    saveEngineSessions();
    renderEngineWorkspace();
    enginePrompt.value = "";
    return;
  }
  const wantsThinking = active.model === "baluk-2.2-thinking";
  if (wantsThinking && !consumeThinkingQuotaOrLock()) {
    appendEngineEntry("assistant", "Thinking hakki su an dolu. Normal sohbet ve Baluk Engine ayni havuzu kullaniyor; sure dolunca tekrar deneyebilirsin.", "Thinking havuzu ortak");
    setEngineStatus("Thinking beklemede", "Ortak kota doldugu icin yeni thinking calismasi baslatilamadi.");
    renderEngineWorkspace();
    return;
  }
  engineRunning = true;
  appendEngineEntry("user", prompt, `HTML/CSS/JS • ${active.model === "baluk-2.2-thinking" ? "Thinking" : "Normal"}`);
  enginePrompt.value = "";
  const statuses = getEngineStatusSteps(prompt, active.model);
  const totalMs = estimateEngineThinkingMs(prompt, active.model);
  await runEngineStatuses(statuses, totalMs);
  const artifact = buildEngineArtifact(prompt, active.language, active.model, active.code);
  active.lastPrompt = prompt;
  active.code = artifact.code;
  active.outputHtml = artifact.outputHtml || "";
  active.notebook = artifact.code;
  active.updatedAt = Date.now();
  appendEngineEntry("assistant", `${artifact.summary} T'den ciktiyi, N'den kodu gorebilirsin.`, `${active.model === "baluk-2.2-thinking" ? "Thinking" : "Normal"} • HTML/CSS/JS`);
  setEngineStatus(
    wantsThinking ? "Baluk-2.2 Thinking tamamlandi" : "Baluk-2.2 tamamlandi",
    wantsThinking ? "Daha uzun ve daha detayli bir kod paketi hazirlandi." : "Daha temel ve daha kontrollu bir kod paketi hazirlandi."
  );
  if (!enginePanelMode) enginePanelMode = "code";
  saveEngineSessions();
  renderEngineWorkspace();
}




document.addEventListener("keydown", (e) => {
  if (voiceModeActive && e.key === "Escape") {
    e.preventDefault();
  }
});
