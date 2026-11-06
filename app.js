const STORAGE_KEY = "momcozy-im01-prototype";

const groups = {
  app: ["APP 一级入口", "App entry"],
  device: ["设备与杯子", "Device & cups"],
  recipe: ["食谱中心", "Recipes"],
  making: ["制作闭环", "Making flow"],
  record: ["制作记录", "Records"],
  support: ["使用与支持", "Help & support"],
  community: ["社区内容", "Community"],
  accessory: ["配件与订单", "Accessories"],
  mine: ["我的相关资产", "My assets"],
  delivery: ["交付说明", "Delivery"],
};

const routes = [
  route("home", "app", "APP", "首页", "Home", "Momcozy APP → 首页", "Momcozy App → Home", "综合任务提醒与内容入口。", "Cross-product reminders and content entry."),
  route("devices", "app", "APP", "设备", "Devices", "Momcozy APP → 设备", "Momcozy App → Devices", "冰淇淋机的唯一核心入口。", "The primary entry to the ice cream maker."),
  route("devices-empty", "device", "V1.0", "设备空态预览", "Empty devices preview", "设备 → 尚未添加设备", "Devices → No devices yet", "仅预览空态，不修改已有设备和制作记录。", "Preview the empty state without changing saved devices or batches."),
  route("device-product", "device", "V1.0", "了解设备", "Explore device", "设备推荐 / 设备分类 → 产品介绍", "Recommendations / Catalog → Product introduction", "查看产品介绍并返回选择设备。", "Explore a product and return to device selection."),
  route("add-device", "device", "V1.0", "添加设备", "Add device", "设备 → 添加 IM01", "Devices → Add IM01", "手动添加设备入口，无需配网或绑定。", "Add the device entry manually, without pairing or binding."),
  route("add-icecream", "device", "V1.0", "添加冰淇淋机", "Add ice cream maker", "添加设备 → IM01 → 功能介绍", "Add device → IM01 → Introduction", "了解食谱、制作记录和杯子管理，再确认添加。", "Explore recipes, batch logs, and cup management before adding."),
  route("community", "app", "V1.1", "社区", "Community", "Momcozy APP → 社区", "Momcozy App → Community", "承接评论、成果分享与受控内容生态。", "Hosts comments, sharing, and moderated content."),
  route("mine", "app", "V1.0", "我的", "Me", "Momcozy APP → 我的", "Momcozy App → Me", "管理 Momcozy APP 全部个人、家庭与设备资产。", "Manages personal, household, and device assets across the Momcozy App."),

  route("icecream", "device", "V1.0", "冰淇淋机详情", "Ice cream maker", "设备 → 冰淇淋机卡片 → 详情", "Devices → Ice cream maker card → Detail", "按推荐食谱、制作历史和杯子管理组织详情页。", "Organizes the detail page by recommended recipes, making history, and cup management."),
  route("icecream-mine", "device", "V1.0", "冰淇淋机个人空间", "Ice cream maker · My", "设备 → 冰淇淋机详情 → 我的", "Devices → Ice cream maker → My", "仅聚合 IM01 相关的杯子、制作历史、食谱资产与配件订单。", "Contains only cups, making history, recipe assets, and accessory orders related to IM01."),
  route("tasks", "device", "V1.0", "全部当前任务", "Current tasks", "冰淇淋机详情 → 当前制作任务", "Ice cream maker → Current tasks", "按下一步动作排列所有活动批次。", "Orders active batches by the next required action."),
  route("cups", "device", "V1.0", "我的杯子", "My cups", "冰淇淋机详情 → 杯子管理", "Ice cream maker → Cup management", "杯子的基础增删查改与制作历史入口。", "Basic cup management and access to cup history."),
  route("cup-timer", "device", "V1.0", "手动计时", "Manual timer", "冰淇淋机详情 → 我的杯子 → 手动计时", "Ice cream maker → My cups → Manual timer", "为指定杯子单独计时，不改变制作批次状态。", "Times a selected cup independently without changing its making status."),
  route("cup-detail", "device", "V1.0", "杯子详情", "Cup detail", "杯子管理 → CUP 1", "Cup management → CUP 1", "查看杯子基础资料与该杯制作历史。", "Shows basic cup details and making history for that cup."),
  route("cup-edit", "device", "V1.0", "编辑杯子", "Edit cup", "杯子管理 → 编辑杯子资料", "Cup management → Edit cup details", "仅编辑杯子名称、识别颜色与使用备注。", "Edits only the cup name, identification color, and usage note."),

  route("recipes", "recipe", "V1.0", "食谱中心", "Recipe center", "冰淇淋机详情 → 食谱中心", "Ice cream maker → Recipe center", "食谱、场景专题与分类入口。", "Recipes, collections, and categories."),
  route("recipe-results", "recipe", "V1.0", "食谱结果", "Recipe results", "食谱中心 → 分类/搜索结果", "Recipe center → Results", "按名称、食材、饮食偏好与机器程序查找食谱。", "Find recipes by name, ingredient, dietary preference, and machine program."),
  route("recipe-search", "recipe", "V1.0", "搜索食谱", "Search recipes", "食谱中心 → 搜索", "Recipe center → Search", "支持按食谱名称与食材搜索。", "Search by recipe name or ingredient."),
  route("recipe-filter", "recipe", "V1.0", "食谱筛选", "Recipe filters", "食谱结果 → 筛选", "Recipe results → Filters", "设置饮食偏好与机器程序条件。", "Sets dietary preference and machine program filters."),
  route("recipe-detail", "recipe", "V1.0", "食谱详情", "Recipe detail", "食谱列表 → 食谱详情", "Recipe list → Recipe detail", "食材换算、适用性、步骤和本机程序指导。", "Ingredient scaling, suitability, steps, and on-device program guidance."),
  route("favorites", "recipe", "V1.0", "我的收藏", "Favorites", "我的 → 收藏", "Me → Favorites", "集中查看已收藏食谱。", "View saved recipes in one place."),
  route("recent", "recipe", "V1.0", "最近查看", "Recently viewed", "我的 → 最近查看", "Me → Recently viewed", "快速回到近期查看过的食谱。", "Quickly return to recently viewed recipes."),

  route("make-recipe", "making", "V1.0", "选择食谱", "Choose recipe", "制作流程 → 选择食谱", "Making flow → Choose recipe", "选择食谱并查看潜在过敏原提示。", "Choose a recipe and review its potential allergen notice."),
  route("make-portion", "making", "V1.0", "确认份量与杯子", "Confirm portion & cup", "制作流程 → 确认份量与杯子", "Making flow → Confirm portion & cup", "选择份量后立即查看食材用量，再确认使用杯子。", "Choose a portion, review scaled ingredients, and confirm the cup."),
  route("freeze-confirm", "making", "V1.0", "准备食材并冷冻", "Prepare & freeze ingredients", "制作流程 → 准备食材并冷冻", "Making flow → Prepare & freeze ingredients", "在一个页面内完成核心备料提示、入冻记录与倒计时。", "Combines essential prep guidance, freezer-time recording, and the countdown on one screen."),
  route("freeze-countdown", "device", "V1.0", "批次状态", "Batch status", "制作任务 → 冷冻中或预计可制作", "Making task → Freezing or estimated ready", "作为活动任务状态页查看预计倒计时和下一步。", "Shows the countdown and next action as an active task status."),
  route("machine-program", "making", "V1.0", "上机操作指引", "Machine operation guide", "冷冻完成 → 上机操作指引", "Freezing complete → Machine operation guide", "查看本机操作步骤后结束引导，不要求登记制作结果或余量。", "Shows on-machine steps without asking for a result or leftovers."),

  route("records", "record", "V1.0", "制作记录", "Making records", "冰淇淋机详情/我的 → 制作记录", "Ice cream maker/Me → Records", "按时间、食谱与杯子查看历史，兼容旧记录字段。", "History by time, recipe, and cup, with legacy record compatibility."),
  route("record-detail", "record", "V1.0", "制作记录详情", "Record detail", "制作记录 → 历史批次", "Records → Historical batch", "保留食谱版本和制作快照。", "Keeps the recipe version and batch snapshot."),

  route("support", "support", "V1.0", "设备助手", "Device assistant", "冰淇淋机详情 → 设备助手", "Ice cream maker → Device assistant", "常见使用问题、操作指引与人工客服。", "Common questions, operating guides, and support."),
  route("support-guide", "support", "V1.0", "设备使用指引", "Device guide", "设备助手 → 步骤指引", "Device assistant → Step guide", "操作示意、如何操作与注意事项。", "Illustration, how-to instructions, and precautions."),
  route("support-ai", "support", "V1.0", "CozyAI", "CozyAI", "设备助手 → Ask CozyAI", "Device assistant → Ask CozyAI", "设备问答交互演示。", "Device Q&A interaction demo."),
  route("parts", "support", "V1.0", "部件识别", "Parts guide", "使用帮助 → 部件识别", "Help → Parts", "识别主机、杯盖、刀轴和配件。", "Identifies the unit, lids, paddle, and accessories."),
  route("install", "support", "V1.0", "安装教程", "Assembly tutorial", "使用帮助 → 安装教程", "Help → Assembly", "装刀、放杯、锁盖与机头到位。", "Paddle, cup, lid, and head assembly."),
  route("programs", "support", "V1.0", "程序说明", "Program guide", "使用帮助 → 基础操作", "Help → Basic operation", "说明 8 个主程序、份量与暂停。", "Explains eight programs, portions, and pause."),
  route("faq", "support", "V1.0", "问题与错误帮助", "Issue & error help", "使用帮助 → FAQ/错误码", "Help → FAQ/error codes", "由用户主动选择错误码或问题现象。", "The user selects an error code or symptom."),
  route("risk", "support", "V1.0", "停止使用提示", "Stop-use guidance", "使用帮助 → 高风险情况", "Help → High-risk situations", "异常过热、异味或部件损伤时停止使用。", "Stop using the product for overheating, odor, or damage."),
  route("contact", "support", "V1.0", "客服与售后", "Support & service", "使用帮助/我的 → 客服", "Help/Me → Support", "问题类型、型号信息与人工支持。", "Issue type, model information, and human support."),

  route("comments", "community", "V1.1", "食谱评论", "Recipe comments", "社区/食谱详情 → 评论", "Community/Recipe detail → Comments", "评分、评论、点赞、举报与官方回复。", "Ratings, comments, likes, reports, and official replies."),
  route("share-result", "community", "V1.1", "分享制作成果", "Share result", "制作完成 → 分享", "Completed batch → Share", "生成可编辑的成果卡片。", "Creates an editable result card."),
  route("private-recipe", "community", "V1.5", "私有食谱", "Private recipe", "社区/我的 → 私有食谱", "Community/Me → Private recipe", "从历史批次创建个人版本。", "Creates a private version from a previous batch."),
  route("recipe-submit", "community", "V1.5", "原创食谱投稿", "Submit a recipe", "社区 → 食谱投稿", "Community → Submit recipe", "结构化填写并进入平台审核。", "Structured submission for platform review."),
  route("submit-status", "community", "V1.5", "投稿审核状态", "Submission status", "原创食谱 → 审核进度", "Submitted recipe → Review status", "展示审核、试做验证与发布节点。", "Shows review, test-kitchen validation, and publishing."),

  route("accessories", "accessory", "V1.0", "配件购买", "Shop accessories", "冰淇淋机详情 → 配件购买", "Ice cream maker → Shop accessories", "跳转 Momcozy 独立站查找配件。", "Find accessories on the Momcozy website."),
  route("accessory-detail", "accessory", "V1.1", "配件详情", "Accessory detail", "配件列表 → 商品详情", "Accessories → Product detail", "适配机型、安装方法与注意事项。", "Compatibility, installation, and care notes."),
  route("orders", "accessory", "V1.1", "配件订单", "Accessory orders", "我的 → 配件订单", "Me → Accessory orders", "查询订单、物流与售后。", "Order, delivery, and after-sales status."),
  route("order-detail", "accessory", "V1.1", "订单详情", "Order detail", "配件订单 → 订单详情", "Orders → Order detail", "物流节点、商品信息与售后入口。", "Delivery timeline, items, and service entry."),


  route("page-map", "delivery", "说明", "页面地图", "Page map", "交付范围与版本边界", "Delivery scope and version boundary", "全部页面与功能框架节点的对应关系。", "Mapping between every screen and the functional framework."),
];

function route(id, group, version, zh, en, nodeZh, nodeEn, noteZh, noteEn) {
  return { id, group, version, zh, en, nodeZh, nodeEn, noteZh, noteEn };
}

const CUP_COLOR_OPTIONS = [
  { value: "#4c9872", zh: "森林绿", en: "Forest green" },
  { value: "#d39a65", zh: "蜂蜜棕", en: "Honey brown" },
  { value: "#9b83bd", zh: "雾紫", en: "Mist purple" },
  { value: "#5d82ae", zh: "湖水蓝", en: "Lake blue" },
  { value: "#d95b63", zh: "珊瑚红", en: "Coral red" },
  { value: "#eb923f", zh: "暖橙", en: "Warm orange" },
  { value: "#dfbd42", zh: "柠檬黄", en: "Lemon yellow" },
  { value: "#49a7ae", zh: "青蓝", en: "Teal" },
  { value: "#dc8eae", zh: "樱花粉", en: "Blossom pink" },
  { value: "#8c929d", zh: "岩石灰", en: "Stone gray" },
];

const CUP_DEFINITIONS = {
  "cup-1": { cupId: "CUP 1", color: "#4c9872", count: "12", noteZh: "Mia 常用杯", noteEn: "Usually used for Mia" },
  "cup-2": { cupId: "CUP 2", color: "#d39a65", count: "9", noteZh: "家庭分享常用杯", noteEn: "Usually used for family sharing" },
  "cup-3": { cupId: "CUP 3", color: "#9b83bd", count: "11", noteZh: "备用杯", noteEn: "Spare cup" },
};

const CUP_STATUS_META = {
  available: { zh: "空闲", en: "Available", tone: "success" },
  preparing: { zh: "备料中", en: "Preparing", tone: "info" },
  freezing: { zh: "冷冻中", en: "Freezing", tone: "info" },
  ready: { zh: "预计可制作", en: "Estimated ready", tone: "success" },
  "awaiting-result": { zh: "可查看指引", en: "Guide available", tone: "info" },
  "awaiting-leftovers": { zh: "旧批次", en: "Previous batch", tone: "info" },
  leftovers: { zh: "旧批次", en: "Previous batch", tone: "info" },
};

const BATCH_RECIPE_SUGGESTIONS = [
  { zh: "草莓酸奶冰淇淋", en: "Strawberry yogurt ice cream", metaZh: "草莓 · 酸奶 · 250 mL", metaEn: "Strawberry · Yogurt · 250 mL", keywords: "草莓 酸奶 乳制品 strawberry yogurt dairy" },
  { zh: "蓝莓希腊酸奶冰淇淋", en: "Blueberry Greek yogurt ice cream", metaZh: "蓝莓 · 高蛋白 · 250 mL", metaEn: "Blueberry · High protein · 250 mL", keywords: "蓝莓 希腊酸奶 高蛋白 blueberry greek yogurt protein" },
  { zh: "芒果椰乳雪葩", en: "Mango coconut sorbet", metaZh: "芒果 · 椰乳 · 无乳制品", metaEn: "Mango · Coconut milk · Dairy-free", keywords: "芒果 椰乳 无乳制品 mango coconut dairy-free" },
  { zh: "牛油果香蕉冰淇淋", en: "Avocado banana ice cream", metaZh: "牛油果 · 香蕉 · 低添加糖", metaEn: "Avocado · Banana · Low added sugar", keywords: "牛油果 香蕉 宝宝 低糖 avocado banana baby low sugar" },
  { zh: "香蕉可可燕麦冰淇淋", en: "Banana cocoa oat ice cream", metaZh: "香蕉 · 可可 · 燕麦", metaEn: "Banana · Cocoa · Oat", keywords: "香蕉 可可 燕麦 无乳 banana cocoa oat" },
  { zh: "香草牛奶冰淇淋", en: "Vanilla milk ice cream", metaZh: "香草 · 牛奶 · 家庭分享", metaEn: "Vanilla · Milk · Family sharing", keywords: "香草 牛奶 经典 家庭 vanilla milk classic family" },
];

const DEFAULT_CUP_RUNTIME = {
  "cup-1": {
    status: "freezing",
    recipeZh: "草莓酸奶冰淇淋",
    recipeEn: "Strawberry yogurt ice cream",
    member: "Mia",
    portion: "250",
    remaining: "",
    leftoverExpiry: "",
    completedAt: "",
    freezeRemaining: "06:24",
    result: "",
  },
  "cup-2": {
    status: "available",
    recipeZh: "",
    recipeEn: "",
    member: "",
    portion: "",
    remaining: "",
    leftoverExpiry: "",
    completedAt: "",
    freezeRemaining: "",
    result: "",
  },
  "cup-3": {
    status: "available",
    recipeZh: "",
    recipeEn: "",
    member: "",
    portion: "",
    remaining: "",
    leftoverExpiry: "",
    completedAt: "",
    freezeRemaining: "",
    result: "",
  },
};

function createCupRuntime(savedRuntime = {}) {
  savedRuntime = savedRuntime || {};
  return Object.fromEntries(Object.keys(CUP_DEFINITIONS).map((id) => {
    const defaults = DEFAULT_CUP_RUNTIME[id] || {...DEFAULT_CUP_RUNTIME["cup-3"]};
    const runtime = { ...defaults, ...(savedRuntime[id] || {}) };
    if (runtime.recipeZh && !Number.isInteger(runtime.recipeIndex)) {
      runtime.recipeIndex = Math.max(0, BATCH_RECIPE_SUGGESTIONS.findIndex((recipe) => recipe.zh === runtime.recipeZh));
      runtime.program = runtime.program || RECIPE_DETAILS[runtime.recipeIndex].program;
      runtime.ingredients = runtime.ingredients || RECIPE_DETAILS[runtime.recipeIndex].ingredients.map(([zh, en, grams]) => [zh, en, `${Math.round(grams * Number(runtime.portion || 250) / 250 * 10) / 10} g`]);
    }
    return [id, runtime.status === "cleaning" ? { ...runtime, status: "available", recipeZh: "", recipeEn: "", remaining: "", freezeEndsAt: null } : runtime];
  }));
}

const initialRoute = window.location.hash.slice(1);
if (initialRoute === "remaining") window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#cup-detail`);
const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
if (saved.cupDefinitions && Object.keys(saved.cupDefinitions).length) {
  Object.keys(CUP_DEFINITIONS).forEach((id) => delete CUP_DEFINITIONS[id]);
  Object.assign(CUP_DEFINITIONS, saved.cupDefinitions);
}
const state = {
  route: window.location.hash.slice(1) || "devices",
  lang: saved.lang === "en" ? "en" : "zh",
  theme: saved.theme === "dark" ? "dark" : "light",
  version: "all",
  search: "",
  batchRecipeIndex: Number.isInteger(saved.batchRecipeIndex) && BATCH_RECIPE_SUGGESTIONS[saved.batchRecipeIndex] ? saved.batchRecipeIndex : 0,
  flowBatchId: typeof saved.flowBatchId === "string" ? saved.flowBatchId : "",
  detailRecipeIndex: saved.batchRecipeIndex || 0,
  recipeQuery: "",
  recipeSearchDraft: "",
  recipeSearchOrigin: "recipes",
  batchSearchOpen: false,
  batchSearchResults: false,
  recipeHistoryEditing: false,
  recipeOrigin: "recipes",
  lastCompletedRecipeIndex: saved.lastCompletedRecipeIndex ?? null,
  recipeSearchHistory: saved.recipeSearchHistory || [],
  records: saved.records || [],
  recordId: "",
  recordStep: 1,
  deviceAdded: saved.deviceAdded ?? Boolean(saved.cupRuntime),
  customRemaining: saved.customRemaining || "",
  memberId: "mia",
  memberProfiles: saved.memberProfiles || [
    {id: "mia", name: "Mia", allergens: ["peanut"], preference: "", age: "12–24"},
    {id: "hui", name: "Lucky", allergens: ["peanut"], preference: "", age: "2+"},
    {id: "noah", name: "Noah", allergens: [], preference: "", age: "2+"},
  ],
  portion: saved.portion || "250",
  cup: CUP_DEFINITIONS[saved.cup] ? saved.cup : Object.keys(CUP_DEFINITIONS)[0],
  timerCup: CUP_DEFINITIONS[saved.timerCup] ? saved.timerCup : Object.keys(CUP_DEFINITIONS)[0],
  cupTimers: saved.cupTimers && typeof saved.cupTimers === "object" && !Array.isArray(saved.cupTimers) ? saved.cupTimers : {},
  member: saved.member || "mia",
  selectedMemberIds: Array.isArray(saved.selectedMemberIds) ? saved.selectedMemberIds : [saved.member || "mia"],
  favorite: saved.favorite ?? true,
  favoriteRecipes: saved.favoriteRecipes || (saved.favorite === false ? [] : [0]),
  recentRecipes: saved.recentRecipes || [],
  rating: saved.rating || 5,
  prepSteps: new Set(saved.prepSteps || [0, 1]),
  taskStatus: saved.taskStatus || "complete",
  remaining: saved.remaining || "100",
  expiryPreset: saved.expiryPreset || "48",
  leftoverExpiry: saved.leftoverExpiry || expiryFromNow(48),
  errorCode: saved.errorCode || "E03",
  returnRoute: saved.returnRoute || "",
  filters: new Set((saved.filters || []).filter((filter) => ["low-sugar", "high-protein", "vegan", "ice-cream", "sorbet", "lite"].includes(filter))),
  cupProfiles: saved.cupProfiles || {},
  cupRuntime: createCupRuntime(saved.cupRuntime),
};

const app = document.querySelector("#app");
const catalogNav = document.querySelector("#catalog-nav");
const pageSearch = document.querySelector("#page-search");
const versionFilter = document.querySelector("#version-filter");
const toast = document.querySelector("#toast");
let toastTimer;
let pendingBatchReplacement = null;
let replacementTrigger = null;
let timerCupToReveal = null;
state.selectedMemberIds = state.selectedMemberIds.includes("family")
  ? state.memberProfiles.map((member) => member.id)
  : [...new Set(state.selectedMemberIds)].filter((id) => state.memberProfiles.some((member) => member.id === id));

let lastRenderedRoute = null;
let navigationTrail = [];
let navigationCurrent = null;
let navigationRestoring = false;
try {
  const navigation = JSON.parse(sessionStorage.getItem(`${STORAGE_KEY}-navigation`) || "null");
  if (navigation?.current?.route === state.route && Array.isArray(navigation.trail)) {
    navigationTrail = navigation.trail;
    navigationCurrent = navigation.current;
  }
} catch {}


function formatDateTimeInput(date) {
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function expiryFromNow(hours) {
  return formatDateTimeInput(new Date(Date.now() + hours * 60 * 60 * 1000));
}

function expiryFromCompletedAt(completedAt, hours = 48) {
  const completedDate = new Date(completedAt);
  const startTime = Number.isNaN(completedDate.getTime()) ? Date.now() : completedDate.getTime();
  return formatDateTimeInput(new Date(startTime + hours * 60 * 60 * 1000));
}





function T(zh, en) {
  return state.lang === "zh" ? zh : en;
}

function formatExpiry(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return T("未设置", "Not set");
  return new Intl.DateTimeFormat(state.lang === "zh" ? "zh-CN" : "en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      lang: state.lang,
      theme: state.theme,
      portion: state.portion,
      batchRecipeIndex: state.batchRecipeIndex,
      flowBatchId: state.flowBatchId,
      lastCompletedRecipeIndex: state.lastCompletedRecipeIndex,
      recipeSearchHistory: state.recipeSearchHistory,
      records: state.records,
      deviceAdded: state.deviceAdded,
      customRemaining: state.customRemaining,
      memberProfiles: state.memberProfiles,
      cupDefinitions: CUP_DEFINITIONS,
      cup: state.cup,
      timerCup: state.timerCup,
      cupTimers: state.cupTimers,
      member: state.member,
      selectedMemberIds: state.selectedMemberIds,
      favorite: state.favorite,
      favoriteRecipes: state.favoriteRecipes,
      recentRecipes: state.recentRecipes,
      rating: state.rating,
      prepSteps: [...state.prepSteps],
      taskStatus: state.taskStatus,
      remaining: state.remaining,
      expiryPreset: state.expiryPreset,
      leftoverExpiry: state.leftoverExpiry,
      errorCode: state.errorCode,
      returnRoute: state.returnRoute,
      filters: [...state.filters],
      cupProfiles: state.cupProfiles,
      cupRuntime: state.cupRuntime,
    }),
  );
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getCupProfile(id) {
  const definition = CUP_DEFINITIONS[id] || Object.values(CUP_DEFINITIONS)[0];
  const savedProfile = state.cupProfiles[id] || {};
  const runtime = getCupRuntime(id);
  const status = CUP_STATUS_META[runtime.status] || CUP_STATUS_META.available;
  const color = savedProfile.color || definition.color;
  const colorOption = CUP_COLOR_OPTIONS.find((option) => option.value === color) || CUP_COLOR_OPTIONS[0];
  return {
    ...definition,
    ...savedProfile,
    color,
    name: savedProfile.name || definition.cupId,
    count: String(state.records.filter((record) => record.cupId === id).length),
    note: Object.hasOwn(savedProfile, "note") ? savedProfile.note : T(definition.noteZh, definition.noteEn),
    colorLabelZh: colorOption.zh,
    colorLabelEn: colorOption.en,
    stateZh: status.zh,
    stateEn: status.en,
    tone: status.tone,
    runtime,
  };
}

function getCupRuntime(id = state.cup) {
  return state.cupRuntime[id] || Object.values(state.cupRuntime)[0];
}

function updateCupRuntime(id, patch) {
  if (patch.status === "freezing" && !patch.freezeEndsAt) {
    const [hours, minutes] = (patch.freezeRemaining || "24:00").split(":").map(Number);
    patch = { ...patch, freezeEndsAt: Date.now() + (hours * 60 + minutes) * 60000 };
  } else if (patch.status && patch.status !== "freezing") {
    patch = { ...patch, freezeEndsAt: null };
  }
  state.cupRuntime = { ...state.cupRuntime, [id]: { ...getCupRuntime(id), ...patch } };
}

function formatCupFreezeRemaining(runtime, now = Date.now()) {
  if (runtime.freezeDemo) {
    const totalSeconds = Math.max(0, Math.ceil((runtime.freezeEndsAt - now) / 1000));
    return [Math.floor(totalSeconds / 60), totalSeconds % 60].map((value) => String(value).padStart(2, "0")).join(":");
  }
  const totalMinutes = Math.max(0, Math.ceil((runtime.freezeEndsAt - now) / 60000));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return [hours, minutes].map((value) => String(value).padStart(2, "0")).join(":");
}

function refreshCupFreezeCountdowns() {
  const now = Date.now();
  let changed = false;
  const scrollTop = app.querySelector(".mobile-scroll")?.scrollTop;
  for (const [id, runtime] of Object.entries(state.cupRuntime)) {
    if (runtime.status !== "freezing") continue;
    if (!Number.isFinite(runtime.freezeEndsAt)) {
      updateCupRuntime(id, { status: "freezing", freezeRemaining: runtime.freezeRemaining || "24:00" });
      changed = true;
    }
    if (getCupRuntime(id).freezeEndsAt <= now) {
      updateCupRuntime(id, { status: "ready", freezeRemaining: "" });
      changed = true;
    }
    app.querySelectorAll(`[data-cup-freeze-countdown="${id}"]`).forEach((element) => {
      element.textContent = formatCupFreezeRemaining(getCupRuntime(id), now);
    });
  }
  if (changed) {
    saveState();
    render();
    if (state.route === "freeze-confirm" && scrollTop !== undefined) app.querySelector(".mobile-scroll")?.scrollTo(0, scrollTop);
  }
}

function getManualTimer(id) {
  const timer = state.cupTimers[id];
  return timer && Number.isFinite(timer.startedAt) && Number.isFinite(timer.endsAt) && Number.isFinite(timer.durationMinutes) ? timer : null;
}

function formatManualTimer(timer, now = Date.now()) {
  const seconds = Math.max(0, Math.ceil((timer.endsAt - now) / 1000));
  return [Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60]
    .map((value) => String(value).padStart(2, "0")).join(":");
}

function refreshManualTimers() {
  const now = Date.now();
  let changed = false;
  for (const [id, timer] of Object.entries(state.cupTimers)) {
    if (!CUP_DEFINITIONS[id] || !getManualTimer(id)) continue;
    if (!timer.completedAt && timer.endsAt <= now) {
      timer.completedAt = now;
      changed = true;
    }
    app.querySelectorAll(`[data-manual-timer="${id}"]`).forEach((element) => {
      element.textContent = timer.completedAt ? T("已结束", "Finished") : formatManualTimer(timer, now);
    });
  }
  if (changed) {
    saveState();
    render();
    showToast("手动计时结束，请检查杯中食材", "Timer finished. Check the cup contents.");
  }
}

function resetCupRuntime(id) {
  updateCupRuntime(id, {
    status: "available",
    recipeZh: "",
    recipeEn: "",
    member: "",
    memberSnapshots: [],
    portion: "",
    remaining: "",
    leftoverExpiry: "",
    completedAt: "",
    freezeRemaining: "",
    result: "",
    batchId: "",
    frozenAt: "",
    endedAt: "",
    servedAt: "",
    ingredients: [],
    program: "",
  });
}

function cupStatus(id = state.cup) {
  return CUP_STATUS_META[getCupRuntime(id).status] || CUP_STATUS_META.available;
}

function cupTarget(id = state.cup) {
  const status = getCupRuntime(id).status;
  if (status === "available") return "make-recipe";
  if (status === "preparing") return "freeze-confirm";
  if (status === "freezing") return "freeze-confirm";
  if (status === "ready" || status === "awaiting-result") return "freeze-confirm";
  if (status === "awaiting-leftovers" || status === "leftovers") return "cup-detail";
  return "cup-detail";
}

function cupAction(id = state.cup) {
  const status = getCupRuntime(id).status;
  const actions = {
    available: ["开始制作", "Start making"],
    preparing: ["继续备料", "Continue prep"],
    freezing: ["查看任务", "View task"],
    ready: ["查看上机指引", "View machine guide"],
    "awaiting-result": ["查看上机指引", "View machine guide"],
    "awaiting-leftovers": ["查看杯子", "View cup"],
    leftovers: ["查看杯子", "View cup"],
  };
  return actions[status] || actions.available;
}

function selectedMemberName() {
  return selectedMembers().map((member) => member.name).join("、");
}

function selectedMembers() {
  return state.memberProfiles.filter((member) => state.selectedMemberIds.includes(member.id));
}

function showMakingTutorialByDefault() {
  return state.records.filter((record) => ["complete", "guidance-viewed"].includes(record.result)).length < 3;
}

function saveRecipeSearch() {
  const query = state.recipeQuery.trim();
  if (query) state.recipeSearchHistory = [query, ...state.recipeSearchHistory.filter((item) => item !== query)].slice(0, 8);
  saveState();
}

function recordBatch(cupId) {
  const runtime = getCupRuntime(cupId);
  const id = runtime.batchId || `${cupId}-${runtime.completedAt || Date.now()}`;
  if (!runtime.batchId) updateCupRuntime(cupId, {batchId: id});
  const existing = state.records.find((record) => record.id === id);
  const recordedAt = existing?.recordedAt || formatDateTimeInput(new Date());
  const snapshot = JSON.parse(JSON.stringify({...getCupRuntime(cupId), recordedAt, id, cupId, cupName: existing?.cupName || getCupProfile(cupId).name}));
  state.records = [snapshot, ...state.records.filter((record) => record.id !== id)];
}

function renderAddDevice() {
  const productCard = (model, image) => `<button type="button" class="device-catalog-card" data-action="explore-device" data-value="${image}" aria-label="${T("了解", "Explore")} ${model}"><img src="./assets/figma/device-catalog/${image}.png" alt="" /><span>${model}</span></button>`;
  return mobilePage({
    titleZh: "添加设备", titleEn: "Add device", back: "devices",
    pageClass: "add-device-catalog-page",
    body: `<div class="nearby-device-card"><strong>${T("附近设备", "Nearby Devices")}</strong><p>${T("暂无附近可连接的设备", "No nearby devices available")}</p></div>
      <section class="device-catalog-section"><h2>${T("吸奶器", "Breast Pump")}</h2><div class="device-catalog-grid">${productCard("Q1", "q1")}${productCard("M5", "m5")}${productCard("M6", "m6")}${productCard("M6", "m6")}${productCard("M9 Pro", "m9-pro")}</div></section>
      <section class="device-catalog-section"><h2>${T("健身球", "Exercise Ball")}</h2><div class="device-catalog-grid">${productCard("MeggO", "meggo")}</div></section>
      <section class="device-catalog-section"><h2>${T("冰淇淋机", "Ice Cream Maker")}</h2><div class="device-catalog-grid"><button type="button" class="device-catalog-card" data-route="add-icecream" aria-label="${T("了解冰淇淋机 IM01", "Explore ice cream maker IM01")}"><div class="device-catalog-machine">${machineArt()}</div><span>IM01</span></button></div></section>`,
  });
}

function renderAddIcecream() {
  return mobilePage({
    titleZh: "添加设备", titleEn: "Add device", back: "add-device",
    body: `${pageIntro("选择你的设备", "Choose your device", "冰淇淋机 IM01", "Ice cream maker IM01", "添加后即可查食谱、记录制作和管理杯子。", "Add it to find recipes, log batches, and manage cups.")}
      <div class="device-visual-card">${machineArt()}</div>
      <div class="section-block">${sectionHeading("添加后，你可以", "What you can do")}<div class="card card-pad">
        ${listRow("找到喜欢的食谱", "Discover recipes", "查看食材、热量与过敏原，按制作份量换算用量。", "Review ingredients, calories, and allergens; scale quantities to your portion.", "", "")}
        ${listRow("跟着步骤轻松制作", "Follow the making steps", "从备料、冷冻到上机操作，随时查看指引。", "Follow prep, freezing, and on-machine guidance whenever needed.", "", "")}
        ${listRow("管理每一杯冰淇淋", "Manage every cup", "查看杯子当前任务和已有制作记录。", "View each cup's current task and saved history.", "", "")}
      </div></div>
      <div class="alert info section-block"><strong>${T("无需配网或蓝牙连接", "No Wi-Fi or Bluetooth pairing")}</strong>${T("添加后即可使用食谱与记录功能，机器操作请在机身面板完成。", "Use recipes and logs after adding. Operate the machine using its control panel.")}</div>
      <div class="sticky-actions">${state.deviceAdded ? button("添加完成", "Added", "devices", "primary", true) : button("添加到我的设备", "Add to my devices", "", "primary", true, 'data-action="add-device"')}</div>`,
  });
}

function cupMemberLabel(runtime) {
  return runtime.member === "家庭分享" ? T("家庭分享", "Family") : runtime.member;
}

function cupRecipeLabel(runtime) {
  if (!runtime.recipeZh || runtime.status === "available") return { zh: "可以使用", en: "Ready to use" };
  return {
    zh: runtime.recipeZh,
    en: runtime.recipeEn,
  };
}

function cupStatusDetail(id) {
  const runtime = getCupRuntime(id);
  if (runtime.status === "freezing") return { zh: `冷冻中 · 还需 ${runtime.freezeRemaining || "06:24"}`, en: `Freezing · ${runtime.freezeRemaining || "06:24"} left` };
  if (runtime.status === "ready") return { zh: "已满足至少 24 小时", en: "At least 24h completed" };
  if (runtime.status === "awaiting-result") return { zh: "可查看上机指引", en: "Machine guide available" };
  if (["awaiting-leftovers", "leftovers"].includes(runtime.status)) return { zh: "旧批次记录已保留", en: "Previous batch retained" };
  if (runtime.status === "preparing") return { zh: "批次已创建 · 等待记录入冻", en: "Batch created · Freezer time pending" };
  return { zh: "可以创建新的制作批次", en: "Ready for a new batch" };
}

function cupCardFromRuntime(id) {
  const cup = getCupProfile(id);
  const runtime = cup.runtime;
  const recipe = cupRecipeLabel(runtime);
  const action = cupAction(id);
  const countdown = runtime.status === "freezing" ? formatCupFreezeRemaining(runtime) : "";
  return cupCard({
    id,
    title: cup.name,
    color: cup.color,
    stateZh: cup.stateZh,
    stateEn: cup.stateEn,
    detailZh: recipe.zh,
    detailEn: recipe.en,
    countdown,
    countdownLabelZh: "冷冻倒计时",
    countdownLabelEn: "Freeze countdown",
    target: cupTarget(id),
    actionZh: action[0],
    actionEn: action[1],
  });
}

function machineArt() {
  return `
    <div class="machine-art" aria-label="${T("冰淇淋机产品示意", "Ice cream maker illustration")}">
      <span class="machine-body"></span>
      <span class="machine-top"></span>
      <span class="machine-screen"></span>
      <span class="machine-cup"></span>
      <span class="machine-model-label">IM01</span>
    </div>`;
}

function sourceNote(kind = "estimated") {
  return `<div class="source-note">${kind === "recorded" ? T("你记录的状态", "Status recorded by you") : T("根据入冻时间预计", "Estimated from freezer time")}</div>`;
}

function statusPill(zh, en, tone = "success") {
  return `<span class="status-pill ${tone}">${T(zh, en)}</span>`;
}

function contextualBack(fallback) {
  return navigationTrail.at(-1)?.route || fallback;
}

function button(zh, en, target, variant = "primary", full = false, attrs = "") {
  return `<button type="button" class="button ${variant}${full ? " full" : ""}" ${target ? `data-route="${target}"` : ""} ${attrs}>${T(zh, en)}</button>`;
}

function deviceCurrentBatchPreview({ focused = false } = {}) {
  const cups = Object.keys(CUP_DEFINITIONS).map((id) => ({ id, profile: getCupProfile(id), runtime: getCupRuntime(id) }));
  const activeCups = cups.filter(({ runtime }) => runtime.status !== "available");
  const availableCups = cups.filter(({ runtime }) => runtime.status === "available");
  if (focused) {
    return `<div class="figma-device-preview is-focused is-overview">
      <div class="figma-device-preview-copy">
        <div class="current-batch-summary">
          <div><span>${T("杯子使用", "Cups in use")}</span><strong>${activeCups.length} / ${cups.length}</strong></div>
          <div><span>${T("空闲杯子", "Available cup")}</span><strong>${availableCups.map(({ profile }) => profile.cupId).join("、") || T("暂无", "None")}</strong></div>
        </div>
        <div class="current-batch-list">
          ${activeCups.map(({ id, profile, runtime }) => {
            const detail = cupStatusDetail(id);
            return `<button type="button" class="current-batch-row ${["awaiting-result", "awaiting-leftovers", "cleaning"].includes(runtime.status) ? "is-pending" : ""}" data-route-card="${cupTarget(id)}" data-cup="${id}">
              <span class="current-batch-cup">${profile.cupId}</span>
              <span class="current-batch-copy"><strong>${T(runtime.recipeZh, runtime.recipeEn)}</strong><small>${T(detail.zh, detail.en)}</small></span>
              <span class="current-batch-chevron">›</span>
            </button>`;
          }).join("")}
        </div>
      </div>
      ${machineArt()}
      <small class="current-batch-source">${T("状态来自用户记录", "Status comes from user records")}</small>
    </div>`;
  }
  return `<div class="figma-device-preview is-device-summary">
    <div class="figma-device-preview-copy">
      <div class="device-cup-overview-head">
        <strong>${T("杯子状态", "Cup status")}</strong>
        <span>${T(`使用中 ${activeCups.length} / ${cups.length}`, `${activeCups.length} / ${cups.length} in use`)}</span>
      </div>
      <div class="device-cup-overview-list">
        ${cups.map(({ id, profile, runtime }) => {
          const status = CUP_STATUS_META[runtime.status] || CUP_STATUS_META.available;
          const available = runtime.status === "available";
          return `<div class="device-cup-overview-row is-${status.tone}">
            <span class="device-cup-overview-id"><i></i>${profile.cupId}</span>
            <strong>${available ? T(status.zh, status.en) : escapeHtml(T(runtime.recipeZh, runtime.recipeEn))}</strong>
            ${available ? "" : `<small>${runtime.status === "freezing" ? `${T("冷冻中（倒计时：", "Freezing (Time left: ")}<span data-cup-freeze-countdown="${id}">${formatCupFreezeRemaining(runtime)}</span>${T("）", ")")}` : T(status.zh, status.en)}</small>`}
          </div>`;
        }).join("")}
      </div>
    </div>
  </div>`;
}

function deviceVisualHero() {
  return `<article class="device-visual-card" aria-label="${T("冰淇淋机 IM01 设备图片", "Ice cream maker IM01 device image")}">
    <div class="device-visual-copy"><span>IM01</span><h2>${T("冰淇淋机", "Ice cream maker")}</h2></div>
    <button class="device-visual-action" type="button" data-action="new-batch">${T("新增制作", "New batch")}</button>
    ${machineArt()}
  </article>`;
}

function sectionHeading(zh, en, actionZh = "", actionEn = "", target = "") {
  return `<div class="section-heading"><h3>${T(zh, en)}</h3>${actionZh ? `<button type="button" ${target ? `data-route="${target}"` : ""}>${T(actionZh, actionEn)}</button>` : ""}</div>`;
}

function pageIntro(eyebrowZh, eyebrowEn, titleZh, titleEn, descZh, descEn) {
  return `<div class="page-intro"><p class="eyebrow">${T(eyebrowZh, eyebrowEn)}</p><h2>${T(titleZh, titleEn)}</h2><p>${T(descZh, descEn)}</p></div>`;
}

function mobilePage({ titleZh, titleEn, captionZh = "", captionEn = "", back = "", activeTab = "", body = "", footerActions = "", footerClass = "", right = "", hideHeader = false, pageClass = "" }) {
  const topLevel = Boolean(activeTab);
  return `
    <section class="mobile-page${topLevel ? " has-tabbar" : ""}${pageClass ? ` ${pageClass}` : ""}">
      ${hideHeader ? "" : `<header class="mobile-header">
        ${back ? `<button class="icon-button" type="button" data-action="navigate-back" data-fallback="${back}" aria-label="${T("返回", "Back")}">‹</button>` : `<span></span>`}
        <h1>${T(titleZh, titleEn)}${captionZh ? `<span class="header-caption">${T(captionZh, captionEn)}</span>` : ""}</h1>
        ${right || "<span></span>"}
      </header>`}
      <div class="mobile-scroll">${body}</div>
      ${footerActions ? `<div class="mobile-footer${footerClass ? ` ${footerClass}` : ""}">${footerActions}</div>` : ""}
      ${topLevel ? tabbar(activeTab, pageClass === "devices-empty-page") : ""}
    </section>`;
}

function tabbar(active, figmaEmpty = false) {
  const emptyIcons = {
    home: '<path d="m3 10 9-8 9 8v11h-7v-6h-4v6H3z" fill="currentColor"/>',
    devices: '<path d="m12 2 9 5v10l-9 5-9-5V7z" fill="currentColor"/><path d="m7 8 5 3 5-3m-5 3v6" stroke="#fff" stroke-width="1.4" fill="none"/>',
    community: '<circle cx="12" cy="12" r="8" fill="currentColor"/><ellipse cx="12" cy="12" rx="13" ry="4" transform="rotate(-40 12 12)" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="21" cy="3" r="1.5" fill="currentColor"/>',
    mine: '<circle cx="12" cy="6" r="5" fill="currentColor"/><path d="M3 22v-4a9 7 0 0 1 18 0v4z" fill="currentColor"/>',
  };
  const items = [
    ["home", "首页", "Home"],
    ["devices", "设备", "Devices"],
    ["community", "社区", "Community"],
    ["mine", "我的", "Me"],
  ];
  return `<nav class="tabbar" aria-label="${T("一级导航", "Primary navigation")}">${items
    .map(
      ([id, zh, en]) => `<button type="button" class="${active === id ? "is-active" : ""}" data-route="${id}"><span class="tabbar-icon ${id}" aria-hidden="true">${figmaEmpty ? `<svg viewBox="0 0 24 24">${emptyIcons[id]}</svg>` : ""}</span><span>${T(zh, figmaEmpty && id === "devices" ? "Device" : en)}</span></button>`,
    )
    .join("")}</nav>`;
}

function taskCard({ titleZh, titleEn, descZh, descEn, statusZh, statusEn, tone, timeZh, timeEn, cup = "CUP 1", cupId = "cup-1", target = "task-detail", source = "estimated" }) {
  return `<article class="card task-card" data-route-card="${target}" data-cup="${cupId}" tabindex="0">
    <div class="task-top"><div><h3>${T(titleZh, titleEn)}</h3><p>${T(descZh, descEn)}</p></div>${statusPill(statusZh, statusEn, tone)}</div>
    <div class="task-meta">
      <div class="meta-item"><span>${T("杯子", "Cup")}</span><strong>${cup}</strong></div>
      <div class="meta-item"><span>${T("下一时间点", "Next time")}</span><strong>${T(timeZh, timeEn)}</strong></div>
    </div>
    ${sourceNote(source)}
  </article>`;
}

function cupCard({ id, title, color, stateZh, stateEn, detailZh, detailEn, countdown = "", countdownLabelZh = "预计剩余", countdownLabelEn = "Est. remaining", countdownSubtle = false, target = "cup-detail", actionZh = "", actionEn = "" }) {
  const cupStatus = getCupRuntime(id).status;
  const freezing = cupStatus === "freezing";
  const manualTimer = getManualTimer(id);
  const timerFinished = manualTimer && (manualTimer.completedAt || manualTimer.endsAt <= Date.now());
  return `<article class="card cup-card" style="--cup-color:${color}" data-route-card="${manualTimer ? "cup-timer" : target}" data-cup="${id}" ${manualTimer ? `data-timer-cup="${id}"` : ""} tabindex="0">
    <div class="cup-card-header"><div class="cup-dot"></div><h3>${escapeHtml(title)}</h3>${!manualTimer && cupStatus !== "available" ? `<p class="cup-recipe-name">${escapeHtml(T(detailZh, detailEn))}</p>` : ""}</div>
    <div class="cup-status-row"><p class="cup-state">${manualTimer ? T(timerFinished ? "计时结束" : "计时中", timerFinished ? "Timer finished" : "Timer running") : T(stateZh, stateEn)}</p>${!manualTimer && freezing && countdown ? `<span class="cup-time">${T("倒计时：", "Time left: ")}<strong class="cup-time" aria-label="${T(countdownLabelZh, countdownLabelEn)}" data-cup-freeze-countdown="${id}">${countdown}</strong></span>` : ""}</div>
    ${!manualTimer && countdown && !freezing ? `<div class="cup-countdown ${countdownSubtle ? "is-subtle" : ""}"><span>${T(countdownLabelZh, countdownLabelEn)}</span><strong>${countdown}</strong></div>` : ""}
    ${manualTimer ? `<div class="cup-countdown cup-manual-countdown"><span>${T("手动计时 · 剩余", "Manual timer · remaining")}</span><strong data-manual-timer="${id}">${timerFinished ? T("已结束", "Finished") : formatManualTimer(manualTimer)}</strong></div>` : ""}
    ${manualTimer || actionZh ? `<div class="cup-card-action">${manualTimer ? T("查看计时", "View timer") : T(actionZh, actionEn)} <span>›</span></div>` : ""}
  </article>`;
}

function manageCupRow({ id, title, color, labelZh, labelEn, stateZh, stateEn, tone, historyZh, historyEn }) {
  return `<article class="card manage-cup-row" style="--cup-color:${color}">
    <button type="button" class="manage-cup-main" data-route-card="cup-detail" data-cup="${id}">
      <span class="manage-cup-swatch"></span>
      <span class="manage-cup-copy"><strong>${escapeHtml(title)}</strong><small>${T(labelZh, labelEn)} · ${T(historyZh, historyEn)}</small></span>
      ${statusPill(stateZh, stateEn, tone)}
      <span class="chevron">›</span>
    </button>
    <div class="manage-cup-actions">
      <button type="button" data-action="edit-cup" data-cup-id="${id}">${T("编辑", "Edit")}</button>
      <button type="button" data-action="delete-cup" data-cup-id="${id}">${T("删除", "Delete")}</button>
    </div>
  </article>`;
}

function recipePhoto(recipe) {
  const photos = [
    "strawberry-yogurt-ice-cream.jpg",
    "blueberry-greek-yogurt-ice-cream.jpg",
    "mango-coconut-sorbet.jpg",
    "avocado-banana-ice-cream.jpg",
    "banana-cocoa-oat-ice-cream.jpg",
    "vanilla-milk-ice-cream.jpg",
  ];
  return photos[recipe.index] ? `./assets/recipes/${photos[recipe.index]}` : "";
}

function recipePrimaryTag(recipe) {
  const labels = {
    "low-sugar": ["低添加糖", "Low added sugar"],
    "high-protein": ["高蛋白", "High protein"],
    vegan: ["植物基", "Plant based"],
    family: ["家庭分享", "Family sharing"],
  };
  return labels[recipe.tags[0]] || [recipe.program, recipe.program];
}

function recipeCard({ flavor = "berry", titleZh, titleEn, metaZh, metaEn, target = "recipe-detail", recipeIndex }) {
  const index = recipeIndex ?? Math.max(0, BATCH_RECIPE_SUGGESTIONS.findIndex((recipe) => recipe.zh.includes(titleZh)));
  const recipe = getRecipe(index);
  const photo = recipePhoto(recipe);
  const [tagZh, tagEn] = recipePrimaryTag(recipe);
  return `<article class="card recipe-card" data-route-card="${target}" data-recipe-index="${index}" tabindex="0">
    ${photo ? `<img class="recipe-card-image" src="${photo}" alt="${escapeHtml(T(titleZh, titleEn))}" />` : `<div class="recipe-art ${flavor}" role="img" aria-label="${escapeHtml(T(titleZh, titleEn))}"></div>`}
    <div class="recipe-card-copy"><h3>${T(titleZh, titleEn)}</h3><p>${T(metaZh, metaEn)}</p><div class="recipe-meta"><span class="mini-badge">${T(tagZh, tagEn)}</span></div><p>${T(`约 ${getRecipeCalories(100, index)} kcal / 100 mL`, `Approx. ${getRecipeCalories(100, index)} kcal / 100 mL`)}</p></div>
  </article>`;
}

function listRow(titleZh, titleEn, descZh, descEn, target = "", trailing = "›", attrs = "", leading = "") {
  return `<div class="list-row${leading ? " has-thumbnail" : ""}" ${target ? `data-route-card="${target}" tabindex="0"` : ""} ${attrs}>${leading}<div class="list-row-copy"><h3>${escapeHtml(T(titleZh, titleEn))}</h3>${descZh ? `<p>${escapeHtml(T(descZh, descEn))}</p>` : ""}</div><span class="chevron">${trailing}</span></div>`;
}

function stepper(current, total = 4, historyNavigation = false, flowNavigation = false) {
  return `<div class="stepper" aria-label="${T("制作步骤", "Making steps")}">${Array.from({ length: total }, (_, index) => {
    const number = index + 1;
    const classes = `stepper-item ${number < current ? "is-complete" : number === current ? "is-active" : ""}`;
    const accessible = `aria-label="${T(`查看第 ${number} 步`, `View step ${number}`)}" ${number === current ? 'aria-current="step"' : ""}`;
    const canNavigate = flowNavigation && (number <= current || number === current + 1 && (current < 3 || ["ready", "awaiting-result"].includes(getCupRuntime().status)));
    const item = historyNavigation
      ? `<button type="button" class="${classes}" data-action="record-step" data-value="${number}" ${accessible}>${number}</button>`
      : flowNavigation
        ? `<button type="button" class="${classes}" data-value="${number}" ${canNavigate ? 'data-action="flow-step"' : `disabled title="${T(number === 4 ? "冷冻完成后可查看上机操作" : "请先完成前一步", number === 4 ? "Available when freezing is complete" : "Complete the previous step first")}"`} ${accessible}>${number}</button>`
        : `<span class="${classes}">${number}</span>`;
    return `${index ? `<span class="stepper-line ${number <= current ? "is-complete" : ""}"></span>` : ""}${item}`;
  }).join("")}</div>`;
}

function choiceCard({ id, selected, avatar = "", titleZh, titleEn, descZh, descEn, mode = "radio", action = "select-choice" }) {
  return `<article class="card choice-card ${selected ? "is-selected" : ""}" data-action="${action}" data-value="${id}" tabindex="0">
    ${avatar ? `<span class="member-avatar">${avatar}</span>` : `<span class="${mode === "check" ? "check-indicator" : "radio-indicator"}"></span>`}
    <div><h3>${T(titleZh, titleEn)}</h3><p>${T(descZh, descEn)}</p></div>
    ${selected ? statusPill("已选择", "Selected", "success") : ""}
  </article>`;
}

function summaryRows(rows) {
  return `<div class="card card-pad">${rows.map(([a, b, c, d]) => listRow(a, b, "", "", "", T(c, d))).join("")}</div>`;
}

function renderHome() {
  return mobilePage({
    titleZh: "首页",
    titleEn: "Home",
    activeTab: "home",
    hideHeader: true,
    body: `
      <div class="figma-home-layout">
        <img class="figma-home-bg" src="./assets/figma/homeBg.png" alt="" aria-hidden="true" />
        <div class="figma-home-toolbar">
          <button class="figma-home-icon-button" type="button" aria-label="${T("日历", "Calendar")}" data-action="show-toast" data-message-zh="日历已打开" data-message-en="Calendar opened"><span class="figma-calendar-icon"></span></button>
          <button class="figma-home-account" type="button" data-route="mine"><img src="./assets/figma/avatar.png" alt="" /><strong>${T("Clare 和 Bonnie", "Clare and Bonnie")}</strong><span>⌄</span></button>
          <button class="figma-home-icon-button" type="button" aria-label="${T("通知", "Notifications")}" data-action="show-toast" data-message-zh="暂无新通知" data-message-en="No new notifications"><span class="figma-bell-icon"></span></button>
        </div>
        <div class="figma-home-hero">
          <div class="figma-home-date"><span>‹</span><strong>${T("9 月 10 日 - 9 月 16 日", "Sep 10 - Sep 16")}</strong><span>›</span></div>
          <h2>${T("产后第 1 周", "Postpartum\n1 Week")}</h2>
        </div>
        <article class="figma-home-tip-card">
          <div class="figma-home-tabs"><span class="figma-mom-token">♥</span><button class="is-active">${T("妈妈", "MOM")}</button><button>${T("宝宝", "BABY")}</button><button>${T("泌乳", "LACTATION")}</button></div>
          <div class="figma-home-tips">
            <p>· ${T("留意宝宝皮肤黄疸，按需喂养很重要。", "Pay attention to baby's skin jaundice, and on-demand feeding is key.")}</p>
            <p>· ${T("科学调养身体，在恢复中也照顾好自己。", "Nurture your body with science-backed care, for a healthy recovery and a happier you.")}</p>
            <small>${T("算法估算，仅供参考", "Algorithm estimation, for reference only")}</small>
          </div>
        </article>
        <article class="figma-daily-card">
          <div class="figma-section-title"><h3>${T("每日记录", "Daily Log")}</h3><span>›</span></div>
          <div class="figma-daily-scroll">
            <button class="figma-daily-item pumping"><span>◉</span><strong>${T("吸奶", "Pumping")}</strong><small>1h 30m ${T("前", "ago")}</small></button>
            <button class="figma-daily-item feeding"><span>◇</span><strong>${T("喂养", "Feeding")}</strong><small>1h 30m ${T("前", "ago")}</small></button>
            <button class="figma-daily-item sleep"><span>☾</span><strong>${T("睡眠", "Sleep")}</strong><small>2h 48m ${T("前", "ago")}</small></button>
            <button class="figma-daily-item diaper"><span>＋</span><strong>${T("换尿布", "Diaper")}</strong><small>3h ${T("前", "ago")}</small></button>
          </div>
        </article>
      </div>`,
  });
}

// Figma 1094:27064. Product photography is the only raster content.
const DEVICE_PRODUCTS = {
  monitor: { model: "Smart Baby Monitor BM08", zh: "智能婴儿监护器 BM08", en: "Smart Baby Monitor BM08", copyZh: "日夜守护，安心看见宝宝。", copyEn: "See every moment. Even in the dark.", photo: "device-empty/monitor.jpg", tone: "monitor" },
  warmer: { model: "Portable Milk Warmer T31", zh: "便携温奶器 T31", en: "Portable Milk Warmer T31", copyZh: "随时随地，温暖随行。", copyEn: "Warm feeding, always on the go.", photo: "device-empty/warmer.jpg", tone: "warmer" },
  massager: { model: "W1 Comfort Pro", zh: "W1 Comfort Pro 按摩器", en: "W1 Comfort Pro", copyZh: "温暖按摩，舒适相伴。", copyEn: "Warm-massage comfort for a natural flow.", photo: "device-empty/massager.jpg", tone: "massager" },
  q1: { model: "Q1", zh: "吸奶器 Q1", en: "Breast Pump Q1", photo: "device-catalog/q1.png" },
  m5: { model: "M5", zh: "吸奶器 M5", en: "Breast Pump M5", photo: "device-catalog/m5.png" },
  m6: { model: "M6", zh: "吸奶器 M6", en: "Breast Pump M6", photo: "device-catalog/m6.png" },
  "m9-pro": { model: "M9 Pro", zh: "吸奶器 M9 Pro", en: "Breast Pump M9 Pro", photo: "device-catalog/m9-pro.png" },
  meggo: { model: "MeggO", zh: "健身球 MeggO", en: "Exercise Ball MeggO", photo: "device-catalog/meggo.png" },
};
let exploredDevice = "monitor";

function renderDeviceProduct() {
  const product = DEVICE_PRODUCTS[exploredDevice] || DEVICE_PRODUCTS.monitor;
  return mobilePage({ titleZh: "了解设备", titleEn: "Explore device", back: "add-device", pageClass: "device-product-page",
    body: `<div class="product-detail-photo"><img src="./assets/figma/${product.photo}" alt="${escapeHtml(T(product.zh, product.en))}" /></div>
      <div class="page-intro"><h2>${T(product.zh, product.en)}</h2>${product.copyZh ? `<p>${T(product.copyZh, product.copyEn)}</p>` : ""}</div>
      <p class="readable-copy">${T("请根据机身型号选择设备，并按产品说明使用。", "Choose the model shown on your device and follow its product instructions.")}</p>
      <div class="sticky-actions">${button("选择其他设备", "Choose another device", "add-device", "primary", true)}</div>` });
}

function renderDevicesEmpty() {
  const promo = (id) => {
    const product = DEVICE_PRODUCTS[id];
    return `<button type="button" class="device-promo-card ${product.tone}" data-action="explore-device" data-value="${id}" aria-label="${T("了解", "Explore")} ${escapeHtml(T(product.zh, product.en))}"><img src="./assets/figma/${product.photo}" alt="" draggable="false" /><span class="device-promo-copy"><span>${product.model}</span><strong>${T(product.copyZh, product.copyEn)}</strong></span></button>`;
  };
  return mobilePage({ titleZh: "设备", titleEn: "Devices", activeTab: "devices", hideHeader: true, pageClass: "devices-empty-page",
    body: `<div class="device-empty-system" aria-hidden="true"><span>9:41</span><svg viewBox="0 0 77 15" fill="currentColor"><rect x="0" y="10" width="3" height="4" rx=".8"/><rect x="5" y="7" width="3" height="7" rx=".8"/><rect x="10" y="4" width="3" height="10" rx=".8"/><rect x="15" y="1" width="3" height="13" rx=".8"/><path d="M24 5a13 13 0 0 1 17 0l-2 2a10 10 0 0 0-13 0zm4 4a7 7 0 0 1 9 0l-2 2a4 4 0 0 0-5 0zm3 3a2 2 0 0 1 3 0l-1.5 2z"/><rect x="51" y="2" width="23" height="11" rx="3" fill="none" stroke="currentColor" stroke-width=".7"/><rect x="53" y="4" width="19" height="7" rx="1.5"/><path d="M75 5v5c3 0 3-5 0-5"/></svg></div><div class="device-empty-content"><div class="device-empty-intro">
      <svg class="device-empty-icon" viewBox="0 0 36 40" fill="none" aria-hidden="true"><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11h5a4 4 0 0 1 4 4l-3 19a4 4 0 0 1-4 3h-8a4 4 0 0 1-4-4l3-16"/><path d="M15 1C9 2 4 7 3 13M16 6c-4 1-7 4-8 8M17 11c-2 0-3 2-4 4M16 32h3"/></g></svg>
      <h1>${T("连接所需设备<br />贴心陪伴每一刻", "Connect everything<br />what mom’s need")}</h1>
      <button type="button" class="device-empty-add" data-route="add-device">${T("添加设备", "Add Device")}</button>
      </div><div class="device-promo-track" role="region" tabindex="0" aria-label="${T("产品推荐，左右滑动查看更多", "Recommended products. Scroll left or right to explore")}">${promo("warmer")}${promo("monitor")}${promo("massager")}</div></div>` });
}

function renderDevices() {
  if (!state.deviceAdded) return renderDevicesEmpty();
  const cups = Object.keys(CUP_DEFINITIONS).map((id) => getCupRuntime(id));
  const activeCupCount = cups.filter(({ status }) => status !== "available").length;
  return mobilePage({
    titleZh: "设备",
    titleEn: "Devices",
    activeTab: "devices",
    hideHeader: true,
    body: `
      <div class="figma-device-layout">
        <div class="figma-device-topnav">
          <h2>${T("我的设备", "My Device")}</h2>
          <button class="figma-device-add" type="button" aria-label="${T("添加设备", "Add device")}" data-route="add-device">+</button>
        </div>
        ${state.deviceAdded ? `<article class="figma-device-card" data-route-card="icecream" tabindex="0">
          <div class="figma-device-card-head">
            <div class="figma-device-thumb">${machineArt()}</div>
            <div class="figma-device-name">
              <h3>${T("冰淇淋机 IM01", "Ice Cream Maker IM01")}</h3>
              <p><i></i>${T(`共 ${cups.length} 个杯子 · ${activeCupCount} 个使用中`, `${cups.length} cups · ${activeCupCount} in use`)}</p>
            </div>
            <span class="figma-device-chevron">›</span>
          </div>
          ${deviceCurrentBatchPreview()}
        </article>` : `<div class="empty-state card"><h3>${T("添加你的第一台设备", "Add your first device")}</h3><p>${T("选择 IM01，无需连接机器即可使用食谱与制作记录。", "Choose IM01 to use recipes and batch logs without connecting to the machine.")}</p>${button("添加设备", "Add device", "add-device", "primary", true)}</div>`}
      </div>`,
  });
}

function renderCommunity() {
  return mobilePage({
    titleZh: "社区",
    titleEn: "Community",
    activeTab: "community",
    hideHeader: true,
    body: `
      <div class="figma-community-layout">
        <div class="figma-community-header">
          <div class="figma-community-tabs"><button class="is-active">${T("为你推荐", "For You")}</button><button>${T("Momcozy 精选", "Momcozy Reads")}</button></div>
          <button class="figma-community-notice" type="button" aria-label="${T("通知", "Notifications")}" data-action="show-toast" data-message-zh="你有 2 条社区通知" data-message-en="You have 2 community notifications"><span class="figma-bell-icon"></span><i>2</i></button>
          <button class="figma-community-avatar" type="button" data-route="mine"><img src="./assets/figma/avatar.png" alt="" /><i>2</i></button>
        </div>
        <img class="figma-community-banner" src="./assets/figma/communityBanner.png" alt="${T("母亲节社区专题", "Mother's Day community campaign")}" />
        <section class="figma-community-section">
          <div class="figma-section-title"><h3>${T("热门话题", "Trending Topics")}</h3><span>›</span></div>
          <div class="figma-topic-row"><button># ChooseYouToo <b>NEW</b></button><button># MoreThanIKnow</button><button># ${T("增加母乳量", "IncreaseBreastmilk")}</button><button># PumpingRoutines</button></div>
        </section>
        <section class="figma-community-section">
          <div class="figma-section-title"><h3>${T("精选内容", "Featured")}</h3><span>›</span></div>
          <div class="figma-featured-scroll">
            <article class="figma-featured-card" data-route-card="comments" tabindex="0">
              <div class="figma-featured-author"><span class="figma-momcozy-mark">m</span><span>Momcozy Daily</span><b>›</b></div>
              <h4>${T("选择你自己，也不止于此 🎬", "Behind Choose You, Too 🎬")}</h4>
              <p>${T("这个母亲节，我们想表达一些不同的内容：不需要成为超级英雄，只需要真实地做自己。", "This Mother's Day, we wanted to say something different. No superhero speeches. Just real.")}</p>
              <div class="figma-featured-meta"><span class="figma-mini-avatars"><img src="./assets/figma/avatar.png" alt="" /><img src="./assets/figma/avatar.png" alt="" /><img src="./assets/figma/avatar.png" alt="" /></span><span>27 min</span><span>1.2k+</span></div>
              <button type="button" data-route="share-result">${T("发布", "Post")}</button>
            </article>
            <article class="figma-featured-card secondary" data-route-card="comments" tabindex="0">
              <div class="figma-featured-author"><img src="./assets/figma/avatar.png" alt="" /><span>Alexis</span></div>
              <h4>#MoreThanIKnew</h4>
              <p>${T("成为妈妈以后，我发现很多以前不知道的自己。", "Motherhood showed me parts of myself I had never known.")}</p>
              <div class="figma-featured-meta"><span>18 min</span><span>860+</span></div>
            </article>
          </div>
        </section>
        <article class="figma-community-feed" data-route-card="comments" tabindex="0">
          <div><img src="./assets/figma/avatar.png" alt="" /><span><strong>${T("安安妈妈", "Anan's mom")}</strong><small>${T("今天 16:20", "Today 4:20 PM")}</small></span></div>
          <p>${T("今天的照护节奏终于慢下来，也给自己留了一点时间。", "The care routine finally slowed down today, and I saved a little time for myself.")}</p>
        </article>
      </div>`,
  });
}

function renderMine() {
  return mobilePage({
    titleZh: "我的",
    titleEn: "Me",
    activeTab: "mine",
    hideHeader: true,
    body: `
      <div class="figma-mine-layout">
        <div class="figma-mine-profile">
          <img src="./assets/figma/avatar.png" alt="" />
          <div><h2>Clara Wang</h2><p>q243840766@gmail.com</p><span>${T("备孕中", "Trying to Conceive")} ›</span></div>
        </div>
        <article class="figma-points-card">
          <div class="figma-points-level"><strong>${T("新手", "BEGINNER")}</strong><span>Lv1</span><i></i><span>Lv2</span></div>
          <div class="figma-points-main"><strong>9,109 <span>★</span></strong><button type="button" data-action="show-toast" data-message-zh="权益页面已打开" data-message-en="My Perks opened">${T("我的权益", "My Perks")}</button></div>
          <p>3 ${T("积分将在本月到期", "will expire this month")}</p>
        </article>
        <div class="figma-mine-actions">
          <button type="button" data-action="show-toast" data-message-zh="积分商城已打开" data-message-en="Points Mall opened"><span>♙</span><strong>${T("积分商城", "Points Mall")}</strong></button>
          <button type="button" data-action="show-toast" data-message-zh="签到成功，获得 CozyCoins" data-message-en="Checked in and earned CozyCoins"><span>✓</span><strong>${T("签到获取 CozyCoins", "Check in to get CozyCoins")}</strong></button>
        </div>
        <div class="figma-mine-menu">
          <button type="button" data-action="show-toast" data-message-zh="个人资料已打开" data-message-en="My Profile opened"><span>♙</span><strong>${T("我的资料", "My Profile")}</strong><i></i><b>›</b></button>
          <button type="button" data-action="show-toast" data-message-zh="宝宝档案已打开" data-message-en="My Baby opened"><span>♧</span><strong>${T("我的宝宝", "My Baby")}</strong><i></i><b>›</b></button>
          <button type="button" data-action="show-toast" data-message-zh="Momcozy 商城已打开" data-message-en="Momcozy Shop opened"><span>▱</span><strong>Momcozy ${T("商城", "Shop")}</strong><b>›</b></button>
          <button type="button" data-action="show-toast" data-message-zh="课程中心已打开" data-message-en="Course Library opened"><span>▣</span><strong>${T("课程中心", "Course Library")}</strong><b>›</b></button>
          <hr />
          <button type="button" data-action="show-toast" data-message-zh="帮助中心已打开" data-message-en="Help Center opened"><span>?</span><strong>${T("帮助中心", "Help Center")}</strong><b>›</b></button>
        </div>
      </div>`,
  });
}

function recordMakingTime(record) {
  const value = [record.completedAt, record.endedAt, record.recordedAt, record.createdAt, record.frozenAt]
    .find((item) => item && Number.isFinite(new Date(item).getTime()));
  // Legacy demo records without any timestamp use a stable sample date.
  return new Date(value || "2026-10-23T20:22");
}

function recordMakingMeta(record) {
  const date = recordMakingTime(record);
  const pad = (value) => String(value).padStart(2, "0");
  const time = `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())}`;
  const cup = record.cupId.toUpperCase().replace("-", " ");
  const label = record.result === "guidance-viewed" ? ["查看指引：", "Guide viewed: "] : record.result ? ["制作时间：", "Made: "] : ["留档时间：", "Saved: "];
  return `${cup} · ${T(...label)}${time}`;
}

function recordThumbnail(record) {
  const recipe = getRecipe(record.recipeIndex ?? BATCH_RECIPE_SUGGESTIONS.findIndex((item) => item.zh === record.recipeZh));
  const photo = recipePhoto(recipe);
  return photo
    ? `<img class="history-thumbnail" src="${photo}" alt="${escapeHtml(T(record.recipeZh, record.recipeEn))}" />`
    : `<div class="history-thumbnail recipe-art ${recipe.flavor}" role="img" aria-label="${escapeHtml(T(record.recipeZh, record.recipeEn))}"></div>`;
}

function recordResultStatus(record) {
  if (record.result === "guidance-viewed") return ["已查看操作指引", "Guide viewed", "info"];
  if (record.result === "cancelled") return ["已取消", "Cancelled", "warning"];
  if (record.result === "incomplete") return ["未完成", "Not completed", "warning"];
  if (record.result === "complete") return record.servedAt ? ["已食用完", "Finished", "success"] : ["制作完成", "Made", "success"];
  return ["已保留批次", "Batch saved", "info"];
}

function recordListCard(record) {
  return `<article class="card card-pad record-list-card" data-route-card="record-detail" data-record-id="${record.id}" tabindex="0">
    <div class="list-row has-thumbnail">${recordThumbnail(record)}
      <div class="list-row-copy"><h3>${escapeHtml(T(record.recipeZh, record.recipeEn))}</h3><p>${escapeHtml(recordMakingMeta(record))}</p><div class="record-list-result">${statusPill(...recordResultStatus(record))}</div></div>
      <span class="chevron">›</span>
    </div>
  </article>`;
}

function renderIcecream() {
  return mobilePage({
    pageClass: "icecream-overview",
    titleZh: "冰淇淋机",
    titleEn: "Ice cream maker",
    back: "devices",
    right: `<div class="header-actions">
      <button class="icon-button textual" type="button" data-route="icecream-mine">${T("我的", "Me")}</button>
      <button class="icon-button textual" type="button" data-route="support">${T("帮助", "Help")}</button>
      </div>`,
    body: `
      ${deviceVisualHero()}
      <div class="section-block">${sectionHeading("推荐食谱", "Recommended recipes", "全部食谱", "All recipes", "recipes")}
        <div class="recipe-grid">
          ${recipeCard({ flavor: "berry", titleZh: "草莓酸奶冰淇淋", titleEn: "Strawberry yogurt ice cream", metaZh: "新手首做 · 至少预冻 24 小时", metaEn: "First try · Freeze at least 24h" })}
          ${recipeCard({ flavor: "avocado", titleZh: "牛油果香蕉冰淇淋", titleEn: "Avocado banana", metaZh: "宝宝阶段 · 低添加糖", metaEn: "Baby-friendly · Low added sugar" })}
        </div>
      </div>
      <div class="section-block">${sectionHeading("制作历史", "Making history", "查看更多", "View more", "records")}
        <div class="card card-pad stack compact">
          ${state.records.length ? state.records.slice(0, 2).map((record) => listRow(record.recipeZh, record.recipeEn, recordMakingMeta(record), recordMakingMeta(record), "record-detail", "›", `data-record-id="${record.id}"`, recordThumbnail(record))).join("") : `<p class="result-summary">${T("结束上机引导后，可在这里回看食谱与杯子信息。", "After finishing the machine guide, revisit the recipe and cup here.")}</p>`}
        </div>
      </div>
      <div class="section-block">
        <div class="section-heading">
          <h3>${T("我的杯子", "My cups")}</h3>
          <div class="section-heading-actions">
            <button type="button" data-route="cup-timer">${T("手动计时", "Timer")}</button>
            <button type="button" data-route="cups">${T("管理", "Manage")}</button>
          </div>
        </div>
        <div class="cup-carousel">
          <div class="cup-grid" id="overview-cups">
            ${Object.keys(CUP_DEFINITIONS).map((id) => cupCardFromRuntime(id)).join("")}
          </div>
          <button class="cup-carousel-arrow is-previous" type="button" data-cup-direction="-1" aria-label="${T("上一个杯子", "Previous cup")}" aria-controls="overview-cups" disabled><span aria-hidden="true">‹</span></button>
          <button class="cup-carousel-arrow is-next" type="button" data-cup-direction="1" aria-label="${T("下一个杯子", "Next cup")}" aria-controls="overview-cups"><span aria-hidden="true">›</span></button>
        </div>
      </div>`,
  });
}

function renderIcecreamMine() {
  const activeCount = Object.keys(CUP_DEFINITIONS).filter((id) => getCupRuntime(id).status !== "available").length;
  return mobilePage({
    titleZh: "我的",
    titleEn: "My",
    captionZh: "冰淇淋机 · IM01",
    captionEn: "Ice cream maker · IM01",
    back: "icecream",
    body: `
      <div class="card card-pad" style="display:flex;align-items:center;gap:12px">
        <span class="notice-token">IM</span><div><h2 style="margin:0;font-size:17px">${T("我的冰淇淋机", "My ice cream maker")}</h2><p style="margin:4px 0 0;color:var(--muted-foreground);font-size:12px">${T(`${Object.keys(CUP_DEFINITIONS).length} 个实体杯 · ${state.records.length} 条制作记录`, `${Object.keys(CUP_DEFINITIONS).length} cups · ${state.records.length} making records`)}</p></div>
      </div>
      <div class="section-block">${sectionHeading("杯子与制作", "Cups & making")}
        <div class="card card-pad stack compact">
          ${listRow("我的杯子", "My cups", `${Object.keys(CUP_DEFINITIONS).length} 个实体杯 · ${activeCount} 个使用中`, `${Object.keys(CUP_DEFINITIONS).length} cups · ${activeCount} in use`, "cups")}
          ${listRow("制作记录", "Making records", `${state.records.length} 条记录`, `${state.records.length} records`, "records")}
        </div>
      </div>
      <div class="section-block">${sectionHeading("我的食谱", "My recipes")}
        <div class="card card-pad stack compact">
          ${listRow("我的收藏", "Favorites", `${state.favoriteRecipes.length} 个食谱`, `${state.favoriteRecipes.length} recipes`, "favorites")}
          ${listRow("最近查看", "Recently viewed", `${state.recentRecipes.length} 个食谱`, `${state.recentRecipes.length} recipes`, "recent")}
        </div>
      </div>
      <div class="section-block">${sectionHeading("配件与订单", "Accessories & orders")}
        <div class="card card-pad stack compact">
          ${listRow("配件购买", "Shop accessories", "前往 Momcozy 独立站查找配件", "Find accessories on the Momcozy website", "accessories")}
          ${listRow("配件订单", "Accessory orders", "1 个订单配送中", "1 order in delivery", "orders")}
        </div>
      </div>`,
  });
}

function renderTasks() {
  const activeCups = Object.keys(CUP_DEFINITIONS).filter((id) => getCupRuntime(id).status !== "available");
  const urgency = {ready: 0, "awaiting-result": 1, preparing: 2, freezing: 3, "awaiting-leftovers": 4, leftovers: 5};
  activeCups.sort((first, second) => urgency[getCupRuntime(first).status] - urgency[getCupRuntime(second).status]);
  const taskItems = activeCups.map((id) => {
    const cup = getCupProfile(id);
    const runtime = cup.runtime;
    const status = cupStatus(id);
    const nextTime = runtime.status === "freezing"
      ? ["预计还需 " + formatCupFreezeRemaining(runtime), "About " + formatCupFreezeRemaining(runtime) + " left"]
      : ["按需查看", "View anytime"];
    return taskCard({
      titleZh: runtime.recipeZh,
      titleEn: runtime.recipeEn,
      descZh: `${runtime.portion || "--"} mL`,
      descEn: `${runtime.portion || "--"} mL`,
      statusZh: status.zh,
      statusEn: status.en,
      tone: status.tone,
      timeZh: nextTime[0],
      timeEn: nextTime[1],
      cup: cup.cupId,
      cupId: id,
      target: cupTarget(id),
      source: ["freezing", "ready"].includes(runtime.status) ? "estimated" : "recorded",
    });
  }).join("");
  return mobilePage({
    titleZh: "当前制作任务",
    titleEn: "Current tasks",
    back: "icecream",
    right: `<button class="icon-button textual" type="button" data-route="make-recipe">${T("新建", "New")}</button>`,
    body: `
      ${pageIntro("按下一步排序", "Ordered by next action", `${activeCups.length} 个活动批次`, `${activeCups.length} active batches`, "时间来自你的记录，不代表机器实时状态。", "Timing comes from your records, not live device status.")}
      <div class="stack">${taskItems || `<div class="empty-state card"><h3>${T("暂无活动批次", "No active batches")}</h3><p>${T("空闲杯子可以开始新的制作。", "Use an available cup to start a new batch.")}</p></div>`}</div>
      <div class="alert info section-block"><strong>${T("状态说明", "About task status")}</strong>${T("冷冻时间仅供参考；上机操作在机器本体完成，APP 不读取机器运行状态。", "Freeze time is an estimate. Use the machine controls to process the batch; the app does not read machine status.")}</div>`,
  });
}

function renderTaskDetail() {
  return renderers[cupTarget()]();
}

function renderCups() {
  const cups = Object.entries(CUP_DEFINITIONS).map(([id]) => [id, getCupProfile(id)]);
  return mobilePage({
    titleZh: "杯子管理",
    titleEn: "Cup management",
    back: contextualBack("icecream"),
    right: `<button class="icon-button textual" type="button" data-action="add-cup">${T("添加", "Add")}</button>`,
    body: `
      ${pageIntro(`${cups.length} 个实体杯`, `${cups.length} physical cups`, "管理杯子资料与制作历史", "Manage cup details and history", "查看、编辑或删除杯子；进入杯子后可查看对应制作记录。", "View, edit, or delete cups, and open each cup's making history.")}
      <div class="stack">
        ${cups.map(([id, cup]) => manageCupRow({ id, title: cup.name, color: cup.color, labelZh: `${cup.cupId === cup.name ? "" : `${cup.cupId} · `}${cup.colorLabelZh}`, labelEn: `${cup.cupId === cup.name ? "" : `${cup.cupId} · `}${cup.colorLabelEn}`, stateZh: cup.stateZh, stateEn: cup.stateEn, tone: cup.tone, historyZh: `${cup.count} 条记录`, historyEn: `${cup.count} records` })).join("")}
      </div>`,
  });
}

function renderCupTimer() {
  const selectedId = CUP_DEFINITIONS[state.timerCup] ? state.timerCup : Object.keys(CUP_DEFINITIONS)[0];
  const timer = getManualTimer(selectedId);
  const finished = timer && (timer.completedAt || timer.endsAt <= Date.now());
  const duration = timer?.durationMinutes || 24 * 60;
  const cups = Object.keys(CUP_DEFINITIONS).map((id) => {
    const cup = getCupProfile(id);
    const cupTimer = getManualTimer(id);
    const timerLabel = cupTimer ? cupTimer.completedAt || cupTimer.endsAt <= Date.now() ? T("已结束", "Finished") : T("计时中", "Running") : T(cup.colorLabelZh, cup.colorLabelEn);
    return `<button type="button" class="${id === selectedId ? "is-selected" : ""}" data-action="select-timer-cup" data-value="${id}" aria-pressed="${id === selectedId}"><span class="cup-selector-dot" style="--cup-color:${cup.color}"></span><strong>${escapeHtml(cup.name)}</strong><small>${timerLabel}</small></button>`;
  }).join("");
  return mobilePage({
    titleZh: "手动计时", titleEn: "Manual timer", back: "icecream", pageClass: "cup-timer-page",
    body: `${pageIntro("我的杯子", "My cups", "为杯子单独计时", "Time a cup separately", "默认 24 小时，可按实际需要修改；计时不改变制作任务。", "Starts at 24 hours and can be adjusted without changing the making task.")}
      <div class="section-block">${sectionHeading("选择杯子", "Choose cup")}<div class="cup-selector timer-cup-selector">${cups}</div></div>
      ${timer ? `<div class="timer-status section-block"><span>${T(finished ? "计时结束" : "剩余时间", finished ? "Timer finished" : "Time remaining")}</span><strong data-manual-timer="${selectedId}">${finished ? T("已结束", "Finished") : formatManualTimer(timer)}</strong><small>${T(`开始于 ${formatExpiry(new Date(timer.startedAt))}`, `Started ${formatExpiry(new Date(timer.startedAt))}`)}</small>${finished ? `<p>${T("请检查杯中食材是否达到食谱要求。", "Check whether the cup contents meet the recipe requirements.")}</p>` : ""}</div>` : ""}
      <div class="section-block">${sectionHeading("计时时长", "Timer duration")}<div class="timer-duration-fields" role="group" aria-label="${T("计时时长，小时和分钟", "Timer duration, hours and minutes")}"><div class="field"><label for="timer-hours">${T("小时", "Hours")}</label><input id="timer-hours" type="number" inputmode="numeric" min="0" max="168" step="1" value="${Math.floor(duration / 60)}" /></div><span class="timer-duration-separator" aria-hidden="true">:</span><div class="field"><label for="timer-minutes">${T("分钟", "Minutes")}</label><input id="timer-minutes" type="number" inputmode="numeric" min="0" max="59" step="1" value="${String(duration % 60).padStart(2, "0")}" /></div></div></div>
      <div class="alert info section-block"><strong>${T("计时仅供提醒", "Timer is a reminder")}</strong>${T("计时结束不代表食材已冻实，也不会自动推进制作状态。请按食谱要求并检查实际食材。", "A finished timer does not mean the mixture is fully frozen or advance the making status. Follow the recipe and check the contents.")}</div>
      ${timer ? `<button type="button" class="timer-clear" data-action="clear-manual-timer">${T("结束并清除计时", "End and clear timer")}</button>` : ""}
      <div class="sticky-actions">${timer && !finished ? `<div class="button-row">${button("重新开始", "Restart", "", "secondary", true, 'data-action="restart-manual-timer"')}${button("完成", "Done", "", "primary", true, 'data-action="save-manual-timer"')}</div>` : button("完成", "Done", "", "primary", true, 'data-action="finish-manual-timer"')}</div>`,
  });
}

function renderCupDetail() {
  const cup = getCupProfile(state.cup);
  const runtime = cup.runtime;
  const status = cupStatus(state.cup);
  const caption = cup.name === cup.cupId ? T(cup.colorLabelZh, cup.colorLabelEn) : `${cup.cupId} · ${T(cup.colorLabelZh, cup.colorLabelEn)}`;
  const currentTask = ["available", "awaiting-leftovers", "leftovers"].includes(runtime.status) ? "" : listRow(runtime.recipeZh, runtime.recipeEn, `${T(status.zh, status.en)} · ${runtime.portion || "--"} mL`, `${T(status.zh, status.en)} · ${runtime.portion || "--"} mL`, cupTarget(state.cup), statusPill(status.zh, status.en, status.tone), `data-cup="${state.cup}"`);
  return mobilePage({
    pageClass: "icecream-overview cup-detail-page",
    titleZh: cup.name,
    titleEn: cup.name,
    captionZh: caption,
    captionEn: caption,
    back: "cups",
    body: `
      <article class="card cup-profile-card" style="--cup-color:${cup.color}">
        <span class="manage-cup-swatch"></span>
        <div><p class="eyebrow">${T("杯子资料", "Cup details")}</p><h2>${escapeHtml(cup.name)}</h2><p>${T(cup.colorLabelZh, cup.colorLabelEn)}${cup.note ? ` · ${escapeHtml(cup.note)}` : ""}</p></div>
        ${statusPill(cup.stateZh, cup.stateEn, cup.tone)}
      </article>
      <div class="metadata-grid"><div class="meta-item"><span>${T("杯子编号", "Cup ID")}</span><strong>${cup.cupId}</strong></div><div class="meta-item"><span>${T("制作记录", "Making records")}</span><strong>${cup.count}</strong></div></div>
      ${["awaiting-leftovers", "leftovers"].includes(runtime.status) ? `<div class="alert info section-block"><strong>${T("旧批次资料已保留", "Previous batch retained")}</strong>${T("可以查看已有制作记录；新流程不再要求登记制作结果或余量。", "Existing records remain available. The new flow does not ask for a making result or leftovers.")}</div>` : ""}
      ${currentTask ? `<div class="section-block">${sectionHeading("当前任务", "Current task")}<div class="card card-pad">${currentTask}</div></div>` : ""}
      <div class="section-block">${sectionHeading("制作历史", "Making history")}
        <div class="stack">${state.records.filter((record) => record.cupId === state.cup).map(recordListCard).join("") || `<div class="card card-pad"><p class="result-summary">${T("该杯暂无已保存记录", "No saved records for this cup")}</p></div>`}</div>
      </div>
      <div class="sticky-actions"><div class="button-row">
        ${button("编辑杯子资料", "Edit cup details", "", "secondary", true, `data-action="edit-cup" data-cup-id="${state.cup}"`)}
        ${button("删除杯子", "Delete cup", "", "ghost", true, `data-action="delete-cup" data-cup-id="${state.cup}"`)}
      </div></div>`,
  });
}

function renderCupEdit() {
  const cup = getCupProfile(state.cup);
  return mobilePage({
    titleZh: "编辑杯子",
    titleEn: "Edit cup",
    captionZh: cup.cupId,
    captionEn: cup.cupId,
    back: "cups",
    body: `
      <article class="card cup-edit-summary" style="--cup-color:${cup.color}">
        <span class="manage-cup-swatch"></span>
        <div><span>${T("杯子编号", "Cup ID")}</span><strong>${cup.cupId}</strong><small>${T("系统编号不可修改", "System ID cannot be changed")}</small></div>
      </article>
      <div class="section-block">${sectionHeading("基础资料", "Basic details")}
        <div class="card card-pad form-grid">
          <div class="field"><label for="cup-edit-name">${T("杯子名称", "Cup name")}</label><input id="cup-edit-name" maxlength="12" value="${escapeHtml(cup.name)}" /></div>
          <div class="field"><label for="cup-edit-note">${T("使用备注", "Usage note")}</label><textarea id="cup-edit-note" maxlength="40" placeholder="${T("例如：Mia 常用杯", "For example: Usually used for Mia")}">${escapeHtml(cup.note)}</textarea></div>
        </div>
      </div>
      <div class="section-block">${sectionHeading("识别颜色", "Identification color")}
        <div class="cup-color-options">
          ${CUP_COLOR_OPTIONS.map((option) => `<label class="cup-color-option" style="--option-color:${option.value}"><input type="radio" name="cup-color" value="${option.value}" ${option.value === cup.color ? "checked" : ""} /><span></span><strong>${T(option.zh, option.en)}</strong></label>`).join("")}
        </div>
      </div>
      <div class="alert info section-block"><strong>${T("可编辑范围", "Editable details")}</strong>${T("这里只修改杯子名称、识别颜色和备注。当前状态及制作历史由制作任务生成，不能在这里修改。", "Only the cup name, identification color, and note can be edited here. Current status and making history come from making tasks and cannot be changed here.")}</div>
      <div class="sticky-actions">${button("保存修改", "Save changes", "", "primary", true, `data-action="save-cup"`)}</div>`,
  });
}

const RECIPE_CATEGORIES = [
  ["all", "全部食谱", "All recipes"],
  ["low-sugar", "低添加糖", "Low added sugar"],
  ["high-protein", "高蛋白", "High protein"],
  ["sorbet", "雪葩", "Sorbet"],
];

function recipeCategoryTabs() {
  return `<div class="filter-options section-block" role="group" aria-label="${T("食谱分类", "Recipe categories")}">${RECIPE_CATEGORIES.map(([id, zh, en]) => {
    const selected = id === "all" ? !state.filters.size : state.filters.has(id);
    return `<button type="button" class="chip ${selected ? "is-selected" : ""}" aria-pressed="${selected}" data-action="recipe-category" data-value="${id}">${T(zh, en)}</button>`;
  }).join("")}</div>`;
}

function renderRecipes() {
  return mobilePage({titleZh: "食谱中心", titleEn: "Recipe center", back: "icecream", pageClass: "recipe-center-page", body: `<div class="search-box" data-route-card="recipe-search" tabindex="0"><span>${T("搜索食谱、食材或口味", "Search recipes, ingredients, or flavors")}</span></div>${recipeCategoryTabs()}<div class="section-block" aria-live="polite">${recipeResultCards(matchingRecipes("", state.filters))}</div>`});
}

function renderRecipeResults() {
  const recipes = matchingRecipes();
  return mobilePage({
    titleZh: "食谱结果", titleEn: "Recipe results", back: "recipes", pageClass: "recipe-center-page",
    captionZh: `${recipes.length} 个食谱`, captionEn: `${recipes.length} recipes`,
    body: `<div class="search-box" data-route-card="recipe-search" tabindex="0"><span>${escapeHtml(state.recipeQuery) || T("搜索食谱、食材或口味", "Search recipes, ingredients, or flavors")}</span></div>
      ${recipeCategoryTabs()}
      <p class="result-summary" aria-live="polite">${T(`找到 ${recipes.length} 个食谱`, `${recipes.length} recipes found`)}</p>${recipeResultCards(recipes)}`,
  });
}

function recipeSearchDiscovery() {
  return `<div class="section-block"><h3 class="recipe-search-section-title">${T("按食材发现", "Discover by ingredient")}</h3><div class="chip-row search-history">${[["草莓", "strawberry"], ["香蕉", "banana"], ["酸奶", "yogurt"], ["芒果", "mango"], ["椰乳", "coconut"]].map(([zh, en]) => `<button class="chip" data-action="search-term" data-value="${T(zh, en)}">${T(zh, en)}</button>`).join("")}</div></div>`;
}

function highlightRecipeSearch(text, query) {
  const position = text.toLowerCase().indexOf(query.toLowerCase());
  if (position < 0) return escapeHtml(text);
  return `${escapeHtml(text.slice(0, position))}<mark>${escapeHtml(text.slice(position, position + query.length))}</mark>${escapeHtml(text.slice(position + query.length))}`;
}

function recipeSearchContent() {
  const query = state.recipeSearchDraft.trim();
  if (state.route === "make-recipe" && state.batchSearchResults && query) {
    const matches = matchingRecipes(query, new Set());
    return `<p class="result-summary" role="status">${T(`找到 ${matches.length} 个食谱`, `${matches.length} recipes found`)}</p>${matches.length ? matches.map((recipe) => `<div class="batch-recipe-suggestion"><button type="button" class="batch-recipe-choice" data-batch-recipe="${recipe.index}"><strong>${escapeHtml(T(recipe.zh, recipe.en))}</strong><small>${escapeHtml(T(recipe.metaZh, recipe.metaEn))}</small><span class="selection-hint">${T("选择此食谱", "Choose recipe")}</span></button><button type="button" class="recipe-detail-link" data-batch-recipe-detail="${recipe.index}">${T("预览详情", "Preview")}</button></div>`).join("") : `<p class="result-summary">${T("未找到相关食谱，试试其他食材或口味", "No matching recipes. Try another ingredient or flavor.")}</p>${recipeSearchDiscovery()}`}`;
  }
  if (!query) {
    const editing = state.recipeHistoryEditing;
    return `<div class="recipe-search-section-heading"><h3 class="recipe-search-section-title">${T("历史搜索", "Recent searches")}</h3>${state.recipeSearchHistory.length ? `<div class="recipe-history-tools">${editing ? `<button type="button" data-action="clear-search-history">${T("清空全部", "Clear all")}</button>` : ""}<button type="button" data-action="edit-search-history" aria-label="${T(editing ? "完成历史管理" : "管理历史搜索", editing ? "Finish editing history" : "Manage search history")}">${editing ? T("完成", "Done") : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7"/></svg>`}</button></div>` : ""}</div><div class="chip-row search-history">${state.recipeSearchHistory.length ? state.recipeSearchHistory.map((term) => `<button type="button" class="chip recipe-history-chip" data-action="${editing ? "delete-search-history" : "search-term"}" data-value="${escapeHtml(term)}" ${editing ? `aria-label="${escapeHtml(T(`删除历史搜索：${term}`, `Delete recent search: ${term}`))}"` : ""}><span>${escapeHtml(term)}</span>${editing ? '<span aria-hidden="true">×</span>' : ""}</button>`).join("") : `<p class="result-summary">${T("还没有搜索记录", "No recent searches")}</p>`}</div>${recipeSearchDiscovery()}`;
  }
  const recipes = matchingRecipes(query, new Set());
  const ingredients = [...new Set(recipes.flatMap((recipe) => recipe.ingredients.map(([zh, en]) => T(zh, en))))].filter((ingredient) => ingredient.toLowerCase().includes(query.toLowerCase())).slice(0, 4);
  const suggestions = [...ingredients.map((term) => [term, T("食材", "Ingredient")]), ...recipes.map((recipe) => [T(recipe.zh, recipe.en), T("食谱", "Recipe")])].slice(0, 8);
  return `<p class="result-summary" role="status">${suggestions.length ? T("选择搜索建议，查看相关食谱", "Choose a suggestion to see matching recipes") : T("未找到相关食谱，试试其他食材或口味", "No matching recipes. Try another ingredient or flavor.")}</p><div class="recipe-search-suggestions">${suggestions.map(([term, kind]) => `<button type="button" class="recipe-search-suggestion" data-action="search-term" data-value="${escapeHtml(term)}"><span class="recipe-search-icon" aria-hidden="true"></span><span class="recipe-suggestion-name">${highlightRecipeSearch(term, query)}</span><small>${kind}</small><span aria-hidden="true">↗</span></button>`).join("")}</div>${suggestions.length ? "" : recipeSearchDiscovery()}`;
}

function updateRecipeSearchContent() {
  const content = app.querySelector("#recipe-live-results");
  if (content) {
    content.innerHTML = recipeSearchContent();
    if (state.route === "make-recipe") content.hidden = !state.batchSearchOpen;
  }
  const clear = app.querySelector('[data-action="clear-recipe-search"]');
  if (clear) clear.hidden = !state.recipeSearchDraft;
}

function submitRecipeSearch(query) {
  const term = query.trim();
  if (!term) return;
  state.recipeQuery = term;
  state.recipeSearchDraft = term;
  state.recipeHistoryEditing = false;
  saveRecipeSearch();
  if (state.route === "make-recipe") {
    state.batchSearchOpen = true;
    state.batchSearchResults = true;
    const input = app.querySelector("#recipe-query");
    if (input) input.value = term;
    updateRecipeSearchContent();
    return;
  }
  navigate("recipe-results");
}

function renderRecipeSearch() {
  return mobilePage({
    titleZh: "搜索食谱", titleEn: "Search recipes", back: "recipes",
    body: `<form class="recipe-search-page-bar" id="recipe-search-form" role="search"><div class="recipe-search-input"><span class="recipe-search-icon" aria-hidden="true"></span><input id="recipe-query" type="search" enterkeyhint="search" autocomplete="off" value="${escapeHtml(state.recipeSearchDraft)}" placeholder="${T("搜索食谱、食材或口味", "Recipes, ingredients, flavors")}" aria-label="${T("搜索食谱或食材", "Search recipes or ingredients")}" aria-controls="recipe-live-results" /><button type="button" class="recipe-search-clear" data-action="clear-recipe-search" aria-label="${T("清空搜索", "Clear search")}" ${state.recipeSearchDraft ? "" : "hidden"}>×</button></div><button class="recipe-search-action" type="submit">${T("搜索", "Search")}</button></form>
      <div id="recipe-live-results" class="section-block">${recipeSearchContent()}</div>`,
  });
}

function renderRecipeFilter() {
  const chip = (id, zh, en) => `<button type="button" class="chip ${state.filters.has(id) ? "is-selected" : ""}" aria-pressed="${state.filters.has(id)}" data-action="toggle-filter" data-value="${id}">${T(zh, en)}</button>`;
  return mobilePage({
    titleZh: "筛选食谱", titleEn: "Filter recipes", back: "recipe-results",
    right: `<button class="icon-button textual" data-action="reset-filters">${T("重置", "Reset")}</button>`,
    body: `<p class="result-summary">${T("不同类别同时满足，同类程序可多选。", "Combine categories; select any matching program.")}</p>
      <div class="section-block">${sectionHeading("饮食偏好", "Dietary preferences")}<div class="filter-options">${chip("low-sugar", "低添加糖", "Low added sugar")}${chip("high-protein", "高蛋白", "High protein")}${chip("vegan", "植物基", "Plant-based")}</div></div>
      <div class="section-block">${sectionHeading("机器程序", "Machine program")}<div class="filter-options">${chip("ice-cream", "ICE CREAM", "ICE CREAM")}${chip("sorbet", "SORBET", "SORBET")}${chip("lite", "LITE ICE CREAM", "LITE ICE CREAM")}</div></div>
      <div class="alert info section-block"><strong>${T("份量可在选定食谱后调整", "Adjust portions after choosing a recipe")}</strong>${T("每个示例食谱均支持 50 / 100 / 250 / 500 mL，无需用份量排除食谱。", "All demo recipes support 50 / 100 / 250 / 500 mL.")}</div>
      <p class="result-summary">${T("筛选依据示例配方，制作前仍需核对包装和交叉接触信息。", "Filters use demo ingredients. Check labels and cross-contact before making.")}</p>
      <div class="sticky-actions">${button(`查看 ${matchingRecipes().length} 个食谱`, `View ${matchingRecipes().length} recipes`, "recipe-results", "primary", true)}</div>`,
  });
}

function getRecipe(index = state.detailRecipeIndex) {
  const safeIndex = BATCH_RECIPE_SUGGESTIONS[index] ? Number(index) : 0;
  return { ...BATCH_RECIPE_SUGGESTIONS[safeIndex], ...RECIPE_DETAILS[safeIndex], index: safeIndex };
}

function matchingRecipes(query = state.recipeQuery, filters = state.filters) {
  const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return BATCH_RECIPE_SUGGESTIONS.map((_, index) => getRecipe(index)).filter((recipe) => {
    const text = `${recipe.zh} ${recipe.en} ${recipe.keywords} ${recipe.metaZh} ${recipe.metaEn} ${recipe.ingredients.map(([zh, en]) => `${zh} ${en}`).join(" ")}`.toLowerCase();
    if (!tokens.every((token) => text.includes(token))) return false;
    const programs = [...filters].filter((filter) => ["ice-cream", "sorbet", "lite"].includes(filter));
    if (programs.length && !programs.some((filter) => recipe.program === { "ice-cream": "ICE CREAM", sorbet: "SORBET", lite: "LITE ICE CREAM" }[filter])) return false;
    return [...filters].every((filter) => {
      if (["low-sugar", "high-protein", "vegan"].includes(filter)) return recipe.tags.includes(filter);
      return true;
    });
  });
}

function recipeResultCards(recipes) {
  return recipes.length ? `<div class="recipe-grid">${recipes.map((recipe) => recipeCard({ flavor: recipe.flavor, titleZh: recipe.zh, titleEn: recipe.en, metaZh: recipe.metaZh, metaEn: recipe.metaEn, recipeIndex: recipe.index })).join("")}</div>` : `<div class="empty-state card"><h3>${T("没有找到匹配的食谱", "No matching recipes")}</h3><p>${T("试试其他关键词，或减少筛选条件。", "Try another keyword or fewer filters.")}</p>${button("重置筛选", "Reset filters", "", "secondary", false, 'data-action="reset-filters"')}</div>`;
}

function recipeAllergenLabel(recipe) {
  const labels = { dairy: ["乳制品", "Dairy"], oats: ["燕麦", "Oats"], nuts: ["坚果", "Nuts"], egg: ["鸡蛋", "Egg"], soy: ["大豆", "Soy"] };
  return recipe.allergens.length ? recipe.allergens.map((allergen) => T(...labels[allergen])).join(" · ") : T("配方未列常见过敏原，请核对包装", "No common allergens listed; check labels");
}

function getRecipeIngredients(portion, index = state.detailRecipeIndex) {
  return getRecipe(index).ingredients.map(([zh, en, grams]) => [zh, en, `${Math.round(grams * Number(portion) / 250 * 10) / 10} g`]);
}

function getRecipeCalories(portion, index = state.detailRecipeIndex) {
  const total = getRecipe(index).ingredients.reduce((calories, [ingredientZh, , grams]) => calories + grams * INGREDIENT_KCAL_PER_100G[ingredientZh] / 100, 0);
  return Math.round(total * Number(portion) / 250);
}

function recipeCalorieContent(portion, index) {
  return `<div class="ingredient-row"><span>${T(`本次总热量 · ${portion} mL`, `Total calories · ${portion} mL`)}</span><strong>${T("约", "Approx.")} ${getRecipeCalories(portion, index)} kcal</strong></div>`;
}

function recipeCalorieSection(index) {
  return `<div class="section-block">${sectionHeading("热量估算", "Estimated calories")}<div class="card card-pad" data-recipe-calories aria-live="polite">${recipeCalorieContent(state.portion, index)}</div><p class="result-summary">${T("按配方用量与常见食材热量估算，实际因品牌及配方调整而异；多人分食时按实际食用量计算。", "Estimated from recipe quantities and typical ingredient calories. Brands and recipe changes affect actual values; shared servings depend on the amount eaten.")}</p></div>`;
}

function recipeIngredientRows(ingredients) {
  return ingredients.map(([zh, en, amount]) => `<div class="ingredient-row"><span>${T(zh, en)}</span><span>${amount}</span></div>`).join("");
}

function updateRecipeDetailPortion() {
  app.querySelectorAll('[data-action="select-portion"]').forEach((buttonElement) => {
    const selected = buttonElement.dataset.value === state.portion;
    buttonElement.classList.toggle("is-selected", selected);
    buttonElement.setAttribute("aria-pressed", String(selected));
  });
  const ingredientList = app.querySelector("[data-recipe-ingredients]");
  if (ingredientList) ingredientList.innerHTML = recipeIngredientRows(getRecipeIngredients(state.portion, state.route === "make-portion" ? state.batchRecipeIndex : state.detailRecipeIndex));
  const calorieCard = app.querySelector("[data-recipe-calories]");
  if (calorieCard) calorieCard.innerHTML = recipeCalorieContent(state.portion, state.route === "make-portion" ? state.batchRecipeIndex : state.detailRecipeIndex);
}

function recipeSafetyCard() {
  return `<section class="recipe-safety-card is-warning section-block"><h3>${T("潜在过敏原提示", "Potential allergen notice")}</h3><p class="readable-copy">${T("本配方列出的过敏原：", "Listed recipe allergens: ")}${recipeAllergenLabel(getRecipe())}</p><p class="readable-copy">${T("信息仅用于风险提示。制作前请核对实际食材包装、品牌配方及交叉接触信息。", "This information is a risk notice only. Check actual ingredient labels, brand recipes, and cross-contact information before preparing.")}</p></section>`;
}

function renderRecipeDetail() {
  const recipe = getRecipe();
  const choosingForBatch = state.recipeOrigin === "make-recipe" || (state.recipeOrigin === "recipe-results" && state.recipeSearchOrigin === "make-recipe");
  return mobilePage({
    titleZh: "食谱详情", titleEn: "Recipe detail", back: state.recipeOrigin || "recipes",
    right: `<button class="icon-button textual" data-action="toggle-favorite">${state.favoriteRecipes.includes(recipe.index) ? T("已收藏", "Saved") : T("收藏", "Save")}</button>`,
    body: `${recipePhoto(recipe) ? `<img class="recipe-detail-image" src="${recipePhoto(recipe)}" alt="${escapeHtml(T(recipe.zh, recipe.en))}" />` : `<div class="recipe-art ${recipe.flavor} recipe-detail-image" role="img" aria-label="${T(recipe.zh, recipe.en)}"></div>`}
      ${pageIntro("食谱", "Recipe", recipe.zh, recipe.en, recipe.metaZh, recipe.metaEn)}
      <div class="recipe-meta"><span class="mini-badge">${recipeAllergenLabel(recipe)}</span><span class="mini-badge">${recipe.program}</span></div>
      ${recipeSafetyCard()}
      <div class="section-block">${sectionHeading("制作份量 · mL", "Portion · mL")}<div class="portion-selector">${["50", "100", "250", "500"].map((value) => `<button class="${state.portion === value ? "is-selected" : ""}" data-action="select-portion" data-value="${value}" aria-pressed="${state.portion === value}">${value}</button>`).join("")}</div></div>
      <div class="section-block">${sectionHeading("食材用量", "Ingredients")}<div class="card card-pad" data-recipe-ingredients>${recipeIngredientRows(getRecipeIngredients(state.portion))}</div><p class="result-summary">${T("配方与换算为交互演示数据，以正式食谱和杯体 MAX FILL 线为准。", "Demo ingredient amounts; follow the published recipe and MAX FILL line.")}</p></div>
      ${recipeCalorieSection(recipe.index)}
      <div class="section-block">${sectionHeading("时间与程序", "Timing & program")}<div class="metrics-grid"><div class="metric-item"><span>${T("准备", "Prep")}</span><strong>15 min</strong></div><div class="metric-item"><span>${T("至少冷冻", "Minimum freeze")}</span><strong>24 h</strong></div><div class="metric-item"><span>${T("机器程序", "Program")}</span><strong>${recipe.program}</strong></div></div></div>
      <div class="section-block">${sectionHeading("制作步骤", "Steps")}<div class="timeline"><div class="timeline-row"><h3>${T("准备食材", "Prepare ingredients")}</h3><p>${T("按上方用量准备食材，水果洗净去皮去核。", "Measure the ingredients above; wash, peel, and pit fruit as needed.")}</p></div><div class="timeline-row"><h3>${T("混合并装杯", "Blend and fill")}</h3><p>${T("混合均匀，装杯不超过 MAX FILL 线。", "Blend evenly and fill below the MAX FILL line.")}</p></div><div class="timeline-row"><h3>${T("冷冻后上机制作", "Freeze, then process")}</h3><p>${T("密封水平冷冻至少 24 小时，确认冻实后在机器面板选择推荐程序。", "Seal and freeze level for at least 24 hours. Confirm fully frozen, then select the recommended program on the machine.")}</p></div></div></div>
      <div class="sticky-actions">${button(choosingForBatch ? "选择此食谱并返回" : "使用这个食谱", choosingForBatch ? "Choose recipe and return" : "Use this recipe", "", "primary", true, 'data-action="use-recipe"')}</div>`,
  });
}

function renderFavorites() {
  return mobilePage({titleZh: "我的收藏", titleEn: "Favorites", back: contextualBack("icecream-mine"), body: state.favoriteRecipes.length ? recipeResultCards(state.favoriteRecipes.map((index) => getRecipe(index))) : `<div class="empty-state card">${T("还没有收藏，去食谱详情收藏喜欢的口味吧。", "No favorites yet. Save a recipe from its detail page.")}</div>`});
}

function renderRecent() {
  return mobilePage({titleZh: "最近查看", titleEn: "Recently viewed", back: contextualBack("icecream-mine"), body: state.recentRecipes.length ? recipeResultCards(state.recentRecipes.map((index) => getRecipe(index))) : `<div class="empty-state card">${T("还没有浏览记录，先去看看食谱吧。", "No recently viewed recipes. Explore the recipe center.")}</div>`});
}

function renderMakeRecipe() {
  return mobilePage({
    titleZh: "选择食谱",
    titleEn: "Choose recipe",
    captionZh: "步骤 1/4",
    captionEn: "Step 1/4",
    back: "icecream",
    body: `
      ${stepper(1)}
      ${pageIntro("创建制作批次", "Create a batch", "今天想做什么？", "What would you like to make?", "选择一个食谱后，APP 会保存当前食谱版本快照。", "After you choose a recipe, the app saves the current recipe version snapshot.")}
      <div class="search-box" data-route-card="recipe-search" tabindex="0"><span>${T("搜索食谱或食材", "Search recipes or ingredients")}</span></div>
      <div class="section-block">${sectionHeading("最近制作", "Recently made")}
        <div class="stack">
          ${choiceCard({ id: "strawberry", selected: true, titleZh: "草莓酸奶冰淇淋", titleEn: "Strawberry yogurt ice cream", descZh: "上次：9 月 7 日 · 250 mL", descEn: "Last made Sep 7 · 250 mL" })}
          ${choiceCard({ id: "mango", selected: false, titleZh: "芒果椰乳雪葩", titleEn: "Mango coconut sorbet", descZh: "上次：9 月 3 日 · 500 mL", descEn: "Last made Sep 3 · 500 mL" })}
        </div>
      </div>
      <div class="section-block">${sectionHeading("推荐食谱", "Recommended recipes", "全部食谱", "All recipes", "recipes")}
        <div class="recipe-grid">
          ${recipeCard({ flavor: "avocado", titleZh: "牛油果香蕉", titleEn: "Avocado banana", metaZh: "宝宝阶段 · 低添加糖", metaEn: "Baby-friendly · Low added sugar" })}
          ${recipeCard({ flavor: "yogurt", titleZh: "蓝莓希腊酸奶", titleEn: "Blueberry Greek yogurt", metaZh: "高蛋白", metaEn: "High protein" })}
        </div>
      </div>
      <div class="sticky-actions">${button("下一步：选择成员", "Next: choose member", "make-member", "primary", true)}</div>`,
  });
}

function renderMakeMember() {
  const memberChoice = (id, avatar, titleZh, titleEn, descZh, descEn) => choiceCard({ id, avatar, selected: state.member === id, titleZh, titleEn, descZh, descEn, action: "select-member" });
  return mobilePage({
    titleZh: "选择食用成员",
    titleEn: "Choose who will eat it",
    captionZh: "步骤 2/4",
    captionEn: "Step 2/4",
    back: "make-recipe",
    body: `
      ${stepper(2)}
      ${pageIntro("成员适配", "Member fit", "这杯准备给谁？", "Who is this batch for?", "成员信息用于提示过敏原、饮食限制和份量建议。", "Member profiles help surface allergens, dietary restrictions, and portion guidance.")}
      <div class="stack">
        ${memberChoice("mia", "M", "Mia · 18 个月", "Mia · 18 months", "花生过敏 · 偏好低甜度", "Peanut allergy · Prefers low sweetness")}
        ${memberChoice("hui", "L", "Lucky", "Lucky", "花生过敏 · 偏好低添加糖", "Peanut allergy · Prefers low added sugar")}
        ${memberChoice("family", "3", "家庭分享", "Family sharing", "3 位成员 · 需要逐一核对", "3 members · Review each profile")}
      </div>
      <div class="alert warning section-block"><strong>${T("检测到成员档案中的过敏原", "Allergen found in member profile")}</strong>${T("Mia：花生过敏。当前食谱无花生配料，但请检查酸奶包装上的交叉接触信息。", "Mia: peanut allergy. The current recipe has no peanut ingredient, but check the yogurt package for cross-contact information.")}</div>
      <div class="section-block">${sectionHeading("食谱适配结果", "Recipe fit")}
        <div class="card card-pad stack compact">
          ${listRow("年龄阶段", "Life stage", "食谱适用于 12 个月以上", "Recipe is suitable for 12+ months", "", statusPill("适用", "Suitable", "success"))}
          ${listRow("花生", "Peanut", "配方未包含；仍需检查包装", "Not in recipe; check packaging", "", statusPill("需核对", "Review", "warning"))}
          ${listRow("甜度偏好", "Sweetness preference", "可不添加额外糖", "No added sugar needed", "", statusPill("匹配", "Matches", "success"))}
        </div>
      </div>
      <div class="sticky-actions">${button("已核对，继续", "Reviewed, continue", "make-recipe", "primary", true)}</div>`,
  });
}

function renderMakePortion() {
  const ratio = Number(state.portion) / 250;
  const rows = [
    ["草莓", "Strawberries", `${Math.round(175 * ratio)} g`],
    ["原味酸奶", "Plain yogurt", `${Math.round(125 * ratio)} g`],
    ["香蕉", "Banana", `${Math.round(75 * ratio)} g`],
  ];
  return mobilePage({
    titleZh: "份量与食材",
    titleEn: "Portion & ingredients",
    captionZh: "步骤 3/4",
    captionEn: "Step 3/4",
    back: "make-member",
    body: `
      ${stepper(3)}
      ${pageIntro("按杯量换算", "Scaled to cup volume", "选择制作份量", "Choose a portion", "食材用量会随份量同步换算，并保存到本次批次快照。", "Ingredient amounts scale with the portion and are saved in this batch snapshot.")}
      <div class="portion-selector">${["50", "100", "250", "500"].map((value) => `<button type="button" class="${state.portion === value ? "is-selected" : ""}" data-action="select-portion" data-value="${value}">${value}</button>`).join("")}</div>
      <div class="section-block">${sectionHeading("换算后的食材", "Scaled ingredients")}
        <div class="card card-pad">${rows.map(([zh, en, amount]) => `<div class="ingredient-row"><span>${T(zh, en)}</span><span>${amount}</span></div>`).join("")}</div>
      </div>
      <div class="section-block">${sectionHeading("替换与安全确认", "Substitution & safety")}
        <div class="card card-pad stack compact">
          ${listRow("原味酸奶", "Plain yogurt", "保留原配方", "Keep original ingredient", "", T("未替换", "No change"))}
          ${listRow("香蕉", "Banana", "用于自然甜味与质地", "Adds natural sweetness and texture", "", T("保留", "Keep"))}
          ${listRow("额外糖", "Added sugar", "根据 Mia 偏好不添加", "Omitted for Mia's preference", "", T("不添加", "Omit"))}
        </div>
      </div>
      <div class="alert info"><strong>${T("程序与份量是操作指引", "Program and portion are operating guidance")}</strong>${T("稍后请在机器面板选择对应程序与份量，并在机器本体启动。", "Later, choose the matching program and portion on the machine and start it physically.")}</div>
      <div class="sticky-actions">${button("下一步：选择杯子", "Next: choose cup", "make-cup", "primary", true)}</div>`,
  });
}

function renderMakeCup() {
  const cupOption = (id, titleZh, titleEn, descZh, descEn, disabled = false) => `<article class="card choice-card ${state.cup === id ? "is-selected" : ""}" ${disabled ? "aria-disabled=\"true\"" : `data-action="select-cup" data-value="${id}" tabindex="0"`} style="${disabled ? "opacity:.52" : ""}"><span class="radio-indicator"></span><div><h3>${T(titleZh, titleEn)}</h3><p>${T(descZh, descEn)}</p></div>${disabled ? statusPill("使用中", "In use", "info") : state.cup === id ? statusPill("已选择", "Selected", "success") : ""}</article>`;
  return mobilePage({
    titleZh: "选择杯子",
    titleEn: "Choose cup",
    captionZh: "步骤 4/4",
    captionEn: "Step 4/4",
    back: "make-recipe",
    body: `
      ${stepper(4)}
      ${pageIntro("实体杯对应", "Physical cup match", "选择一个空闲杯子", "Choose an available cup", "请按编号和颜色拿取同一个实体杯。", "Use the physical cup with the same number and color.")}
      <div class="stack">
        ${cupOption("cup-1", "CUP 1 · 森林绿", "CUP 1 · Forest green", "草莓酸奶冰淇淋冷冻中，不能覆盖", "Strawberry yogurt ice cream is freezing and cannot be overwritten", true)}
        ${cupOption("cup-2", "CUP 2 · 蜂蜜棕", "CUP 2 · Honey brown", "有余量，清空并清洁后可使用", "Has leftovers; empty and clean before reuse", true)}
        ${cupOption("cup-3", "CUP 3 · 雾紫", "CUP 3 · Mist purple", "空闲 · 适合本次 250 mL 批次", "Available · Fits this 250 mL batch")}
      </div>
      <div class="alert success section-block"><strong>${T("请拿取 CUP 3", "Use CUP 3")}</strong>${T("装杯前再次核对杯子底部编号和雾紫色标签。", "Before filling, re-check the number and mist-purple label on the cup.")}</div>
      <div class="sticky-actions">${button("创建批次并开始备料", "Create batch and start prep", "prep", "primary", true)}</div>`,
  });
}

function renderPrep() {
  const steps = [
    ["称量 175 g 草莓", "Weigh 175 g strawberries", "洗净、去蒂后称量", "Wash and hull before weighing"],
    ["加入 125 g 原味酸奶", "Add 125 g plain yogurt", "检查包装上的过敏原信息", "Check the package allergen label"],
    ["加入 75 g 香蕉", "Add 75 g banana", "切成小块，便于混合", "Cut into small pieces for blending"],
    ["混合至顺滑", "Blend until smooth", "不要加入大块或坚硬配料", "Do not add large or hard pieces"],
  ];
  return mobilePage({
    titleZh: "备料清单",
    titleEn: "Prep checklist",
    captionZh: "CUP 3 · 250 mL",
    captionEn: "CUP 3 · 250 mL",
    back: "make-cup",
    body: `
      ${pageIntro("草莓酸奶冰淇淋", "Strawberry yogurt ice cream", "按顺序完成备料", "Prepare in order", "每完成一步即可勾选，方便中途离开后继续。", "Check off each step so you can resume after a pause.")}
      <div class="progress-track"><div class="progress-fill" style="width:${(state.prepSteps.size / steps.length) * 100}%"></div></div>
      <p style="margin:7px 0 14px;color:var(--muted-foreground);font-size:9px">${T(`已完成 ${state.prepSteps.size}/${steps.length}`, `${state.prepSteps.size}/${steps.length} completed`)}</p>
      <div class="stack">${steps.map(([titleZh, titleEn, descZh, descEn], index) => `<article class="card choice-card ${state.prepSteps.has(index) ? "is-complete" : ""}" data-action="toggle-prep" data-value="${index}" tabindex="0"><span class="check-indicator"></span><div><h3>${T(titleZh, titleEn)}</h3><p>${T(descZh, descEn)}</p></div><span class="mini-badge">${String(index + 1).padStart(2, "0")}</span></article>`).join("")}</div>
      <div class="alert warning section-block"><strong>${T("食材安全检查", "Ingredient safety check")}</strong>${T("使用未开封或储存状态良好的食材；给宝宝食用时遵循家庭医生建议。", "Use unopened or properly stored ingredients; follow your clinician's advice for baby feeding.")}</div>
      <div class="sticky-actions">${button("继续装杯", "Continue to filling", "fill-cup", state.prepSteps.size === steps.length ? "primary" : "secondary", true)}</div>`,
  });
}

function renderFillCup() {
  return mobilePage({
    titleZh: "装杯检查",
    titleEn: "Fill the cup",
    captionZh: "CUP 3 · 雾紫",
    captionEn: "CUP 3 · Mist purple",
    back: "prep",
    body: `
      <div class="card card-pad" style="text-align:center;padding-top:24px">
        <div style="position:relative;width:128px;height:170px;margin:0 auto 18px;border:6px solid var(--colors-grays-200);border-radius:22px 22px 42px 42px;background:linear-gradient(180deg,var(--card),#e6c5cf 72%)">
          <div style="position:absolute;left:-6px;right:-6px;top:48px;border-top:2px dashed var(--status-warning)"></div>
          <span style="position:absolute;right:-54px;top:39px;color:var(--status-warning);font-size:9px">MAX FILL</span>
          <div style="position:absolute;left:-11px;right:-11px;top:-17px;height:26px;border-radius:14px;background:#a69ea2"></div>
        </div>
        <h2 style="margin:0;font-family:var(--font-brand);font-size:24px;font-weight:400">${T("不要超过 MAX FILL 线", "Stay below the MAX FILL line")}</h2>
        <p style="margin:7px 0 0;color:var(--muted-foreground);font-size:10px;line-height:16px">${T("留出膨胀空间，擦净杯口后盖紧密封杯盖。", "Leave expansion room, wipe the rim, and secure the storage lid.")}</p>
      </div>
      <div class="section-block">${sectionHeading("完成前核对", "Final checks")}
        <div class="card card-pad stack compact">
          ${listRow("实体杯", "Physical cup", "CUP 3 · 雾紫色标签", "CUP 3 · Mist-purple label", "", statusPill("已核对", "Checked", "success"))}
          ${listRow("装杯高度", "Fill level", "混合液低于 MAX FILL", "Mixture is below MAX FILL", "", statusPill("已核对", "Checked", "success"))}
          ${listRow("杯盖密封", "Storage lid", "杯口干净，杯盖已盖紧", "Rim is clean and lid is secured", "", statusPill("已核对", "Checked", "success"))}
        </div>
      </div>
      <div class="sticky-actions">${button("确认装杯完成", "Confirm filling complete", "freeze-confirm", "primary", true)}</div>`,
  });
}

function renderFreezeConfirm() {
  return mobilePage({
    titleZh: "确认入冻",
    titleEn: "Confirm freezing",
    back: "fill-cup",
    body: `
      ${pageIntro("预冻管理", "Pre-freeze tracking", "杯子什么时候放入冷冻室？", "When did the cup go into the freezer?", "请记录实际时间，APP 将据此推算预计可制作时间。", "Record the actual time so the app can estimate when the batch may be ready.")}
      <div class="form-grid">
        <div class="field"><label>${T("日期", "Date")}</label><input value="2026-09-09" aria-label="${T("入冻日期", "Freezer date")}" /></div>
        <div class="field"><label>${T("时间", "Time")}</label><input value="19:10" aria-label="${T("入冻时间", "Freezer time")}" /></div>
        <div class="field"><label>${T("冷冻室位置（可选）", "Freezer location (optional)")}</label><select><option>${T("主冷冻室 · 中层", "Main freezer · Middle shelf")}</option><option>${T("主冷冻室 · 下层", "Main freezer · Lower shelf")}</option></select></div>
      </div>
      <article class="card time-hero section-block"><p>${T("预计可制作时间", "Estimated ready time")}</p><div class="time-value">19:10</div><p>${T("明天 · 至少预冻 24 小时", "Tomorrow · Freeze at least 24 hours")}</p>${sourceNote()}</article>
      <div class="alert info section-block"><strong>${T("提醒会同步到 Momcozy APP", "Reminder will appear in the Momcozy App")}</strong>${T("到时提醒只依据你记录的时间，不表示机器或冷冻室已检测完成。", "The reminder uses your recorded time only; it does not mean the machine or freezer detected completion.")}</div>
      <div class="sticky-actions">${button("开始计时", "Start timer", "freeze-countdown", "primary", true)}</div>`,
  });
}

function renderFreezeCountdown() {
  return mobilePage({
    titleZh: "冷冻中",
    titleEn: "Freezing",
    captionZh: "CUP 3",
    captionEn: "CUP 3",
    back: "task-detail",
    body: `
      <article class="card time-hero" style="padding-top:32px;padding-bottom:28px">
        ${statusPill("冷冻中", "Freezing", "info")}
        <div class="time-value">17:42:18</div>
        <p>${T("距离预计可制作时间", "Until estimated ready time")}</p>
        <div class="progress-track" style="margin:20px 12px 0"><div class="progress-fill" style="width:8%"></div></div>
        ${sourceNote()}
      </article>
      <div class="section-block">${sectionHeading("本次批次", "This batch")}
        <div class="card card-pad stack compact">
          ${listRow("草莓酸奶冰淇淋", "Strawberry yogurt ice cream", "Mia · 250 mL", "Mia · 250 mL", "recipe-detail")}
          ${listRow("实际入冻", "Recorded freezer time", "今天 19:10", "Today 7:10 PM", "", T("可修改", "Editable"))}
          ${listRow("最早可制作", "Earliest ready", "明天 19:10", "Tomorrow 7:10 PM", "", T("至少 24 小时", "At least 24 hours"))}
        </div>
      </div>
      <div class="section-block">${sectionHeading("预冻建议", "Freezing tips")}
        <div class="alert info"><strong>${T("保持杯子水平放置", "Keep the cup level")}</strong>${T("避免放在冷冻室门侧；不要在冷冻过程中反复打开杯盖。", "Avoid the freezer door area and do not repeatedly open the lid during freezing.")}</div>
      </div>
      <div class="sticky-actions"><div class="button-row">${button("修改时间", "Edit time", "freeze-confirm", "secondary", true)}${button("查看预计完成", "View ready state", "freeze-ready", "primary", true)}</div></div>`,
  });
}

function renderFreezeReady() {
  return mobilePage({
    titleZh: "预计可制作",
    titleEn: "Estimated ready",
    captionZh: "CUP 3",
    captionEn: "CUP 3",
    back: "tasks",
    body: `
      <div class="empty-state card" style="min-height:330px;margin-top:6px"><div class="empty-art"></div><span class="status-pill success">${T("预计已完成预冻", "Estimated pre-freeze complete")}</span><h3 style="margin-top:12px">${T("可以去机器制作了", "Ready to continue at the machine")}</h3><p>${T("请从冷冻室取出 CUP 3，并在机器本体完成安装、程序选择和启动。", "Take CUP 3 from the freezer, then complete assembly, program selection, and start on the machine.")}</p>${sourceNote()}</div>
      <div class="alert warning section-block"><strong>${T("请以实际冻结状态为准", "Check the actual frozen state")}</strong>${T("这是根据入冻时间推算的提醒。如果食材仍未完全冻实，请继续冷冻。", "This reminder is estimated from time. If the mixture is not fully frozen, keep freezing.")}</div>
      <div class="section-block">${sectionHeading("准备带到机器旁", "Bring to the machine")}
        <div class="card card-pad stack compact">
          ${listRow("CUP 3 · 雾紫", "CUP 3 · Mist purple", "草莓酸奶冰淇淋 · 250 mL", "Strawberry yogurt ice cream · 250 mL", "cup-detail")}
          ${listRow("推荐程序", "Recommended program", "ICE CREAM", "ICE CREAM", "programs")}
          ${listRow("机器份量", "Machine portion", "250 mL", "250 mL", "programs")}
        </div>
      </div>
      <div class="sticky-actions">${button("开始安装检查", "Start assembly check", "machine-precheck", "primary", true)}</div>`,
  });
}

function renderMachinePrecheck() {
  const checks = [
    ["杯体与杯底无裂纹", "Cup and base have no cracks"],
    ["搅拌刀已正确装入刀轴", "Paddle is correctly attached to the spindle"],
    ["搅拌杯盖已锁紧", "Processing lid is locked"],
    ["杯子已放入外碗并到位", "Cup is seated in the outer bowl"],
    ["机头已向下锁定", "Machine head is locked down"],
  ];
  return mobilePage({
    titleZh: "安装检查",
    titleEn: "Assembly check",
    captionZh: "在机器旁完成",
    captionEn: "Complete at the machine",
    back: "freeze-ready",
    body: `
      ${pageIntro("启动前人工检查", "Manual pre-start check", "确保每个部件安装到位", "Make sure every part is secure", "APP 只提供操作指引，最终请以机器说明书和实际安装为准。", "The app provides guidance; always follow the product manual and physical assembly.")}
      <div class="stack">${checks.map(([zh, en], index) => `<article class="card choice-card ${index < 4 ? "is-complete" : ""}"><span class="check-indicator"></span><div><h3>${T(zh, en)}</h3><p>${index === 4 ? T("请到机器旁完成最后确认", "Complete the final check at the machine") : T("已由你确认", "Confirmed by you")}</p></div><span class="mini-badge">${index + 1}/5</span></article>`).join("")}</div>
      <div class="alert danger section-block"><strong>${T("发现损伤时不要继续", "Do not continue if parts are damaged")}</strong>${T("刀轴、杯体或塑料部件出现裂纹、变形或碎屑时，请停止使用并联系客服。", "Stop using the product and contact support if the spindle, cup, or plastic parts are cracked, deformed, or shedding fragments.")}</div>
      <div class="sticky-actions">${button("全部已检查，查看程序", "All checked, view program", "machine-program", "primary", true)}</div>`,
  });
}

function renderMachineProgram() {
  return mobilePage({
    titleZh: "程序与份量指引",
    titleEn: "Program & portion guide",
    captionZh: "在机器本体操作",
    captionEn: "Use the machine controls",
    back: "machine-precheck",
    body: `
      <article class="hero-card" style="min-height:220px">
        <div class="hero-copy"><p class="eyebrow">${T("机器面板", "Machine panel")}</p><h2>ICE CREAM</h2><p>${T("份量选择：250 mL", "Portion: 250 mL")}</p></div>${machineArt()}
      </article>
      <div class="section-block">${sectionHeading("请在机器上完成", "Complete on the machine")}
        <div class="timeline">
          <div class="timeline-row"><h3>${T("选择 ICE CREAM", "Choose ICE CREAM")}</h3><p>${T("确认面板上的程序图标和名称。", "Confirm the program label and icon on the panel.")}</p></div>
          <div class="timeline-row"><h3>${T("选择 250 mL", "Choose 250 mL")}</h3><p>${T("与本次食谱份量保持一致。", "Match the portion used for this recipe.")}</p></div>
          <div class="timeline-row"><h3>${T("按机器启动键", "Press start on the machine")}</h3><p>${T("启动需要在设备本体完成，APP 不提供远程启动。", "Starting happens on the product itself; the app does not offer remote start.")}</p></div>
        </div>
      </div>
      <div class="alert info"><strong>${T("制作过程中可离开此页面", "You may leave this page during processing")}</strong>${T("当前版本不会显示机器实时进度。制作结束后，请回来手动确认结果。", "This release does not show live machine progress. Return afterward to confirm the result manually.")}</div>
      <div class="alert warning section-block"><strong>${T("RE-SPIN / MIX-IN 由你主动决定", "RE-SPIN / MIX-IN are your choice")}</strong>${T("APP 不判断成品质地，也不会自动推荐额外程序。需要时请查看程序说明并自行选择。", "The app does not judge texture or automatically recommend another program. Review the program guide and decide yourself if needed.")}</div>
      <div class="sticky-actions">${button("我已在机器上启动", "I started it on the machine", "complete", "primary", true)}</div>`,
  });
}

function renderComplete() {
  const option = (id, zh, en, descZh, descEn, tone) => `<button type="button" class="card choice-card ${state.taskStatus === id ? "is-selected" : ""}" data-action="task-status" data-value="${id}" style="width:100%;text-align:left;color:inherit"><span class="radio-indicator"></span><div><h3>${T(zh, en)}</h3><p>${T(descZh, descEn)}</p></div>${state.taskStatus === id ? statusPill("已选择", "Selected", tone) : ""}</button>`;
  return mobilePage({
    titleZh: "确认制作结果",
    titleEn: "Confirm result",
    captionZh: "由你手动记录",
    captionEn: "Recorded by you",
    back: "machine-program",
    body: `
      ${pageIntro("制作结束", "After processing", "机器上的制作完成了吗？", "Did the machine finish this batch?", "请选择实际结果，APP 不会自动读取机器状态。", "Choose what actually happened. The app does not read the machine status automatically.")}
      <div class="stack">
        ${option("complete", "已完成制作", "Completed", "成品已从机器取出", "The finished dessert was removed from the machine", "success")}
        ${option("incomplete", "未完成", "Not completed", "机器未能完成或中途停止", "The machine did not finish or stopped", "warning")}
        ${option("cancelled", "取消本次制作", "Cancel batch", "不再继续本次批次", "Do not continue this batch", "danger")}
      </div>
      ${sourceNote("recorded")}
      <div class="section-block">${sectionHeading("成品口感", "Texture")}
        <div class="alert info"><strong>${T("仅记录你的感受", "Record your own observation")}</strong>${T("APP 不会根据照片或设备数据判断质地，也不会自动推荐 RE-SPIN 或 MIX-IN。", "The app does not judge texture from photos or device data and will not automatically recommend RE-SPIN or MIX-IN.")}</div>
      </div>
      <div class="sticky-actions">${button(state.taskStatus === "complete" ? "继续记录食用" : "保存结果", state.taskStatus === "complete" ? "Continue to serving log" : "Save result", state.taskStatus === "complete" ? "eat-record" : "records", "primary", true)}</div>`,
  });
}

function renderEatRecord() {
  return mobilePage({
    titleZh: "记录食用",
    titleEn: "Log servings",
    captionZh: "CUP 3 · 250 mL",
    captionEn: "CUP 3 · 250 mL",
    back: "complete",
    body: `
      ${pageIntro("支持多人分食", "Shared servings", "谁吃了这杯冰淇淋？", "Who shared this batch?", "记录用于家庭历史和复做参考，不作为营养或医疗建议。", "This log supports household history and remaking; it is not nutritional or medical advice.")}
      <div class="stack">
        <article class="card card-pad"><div class="row-between"><div style="display:flex;align-items:center;gap:10px"><span class="member-avatar">M</span><div><h3 style="margin:0;font-size:12px">Mia</h3><p style="margin:3px 0 0;color:var(--muted-foreground);font-size:9px">${T("小份 · 约 50 mL", "Small serving · about 50 mL")}</p></div></div>${statusPill("已记录", "Logged", "success")}</div><input type="range" min="0" max="100" value="50" style="width:100%;margin-top:15px;accent-color:var(--colors-family-fill)" /></article>
        <article class="card card-pad"><div class="row-between"><div style="display:flex;align-items:center;gap:10px"><span class="member-avatar">L</span><div><h3 style="margin:0;font-size:12px">Lucky</h3><p style="margin:3px 0 0;color:var(--muted-foreground);font-size:9px">${T("标准份 · 约 100 mL", "Regular serving · about 100 mL")}</p></div></div>${statusPill("已记录", "Logged", "success")}</div><input type="range" min="0" max="150" value="100" style="width:100%;margin-top:15px;accent-color:var(--colors-family-fill)" /></article>
      </div>
      <div class="section-block">${sectionHeading("本次合计", "Batch total")}
        <div class="metrics-grid"><div class="metric-item"><span>${T("制作", "Made")}</span><strong>250 mL</strong></div><div class="metric-item"><span>${T("已食用", "Served")}</span><strong>150 mL</strong></div><div class="metric-item"><span>${T("待确认", "To confirm")}</span><strong>100 mL</strong></div></div>
      </div>
      <div class="sticky-actions">${button("继续记录余量", "Continue to leftovers", "remaining", "primary", true)}</div>`,
  });
}

function renderMvpChooseRecipe() {
  const recipe = getRecipe(state.batchRecipeIndex);
  return mobilePage({
    titleZh: "制作冰淇淋",
    titleEn: "Make ice cream",
    pageClass: "make-flow-page make-recipe-page",
    back: "icecream",
    footerActions: button("下一步", "Next", "make-portion", "primary", true),
    body: `
      ${stepper(1, 4, false, true)}
      <div class="page-intro"><div class="make-step-heading"><p class="eyebrow">${T("第 1 步", "Step 1")}</p><h2>${T("选择食谱", "Choose recipe")}</h2></div><p>${T("选择本次制作的食谱，并查看潜在过敏原提示。", "Choose a recipe for this batch and review its potential allergen notice.")}</p></div>
      <div class="section-block">${sectionHeading("选择食谱", "Choose a recipe")}
        <div class="search-box batch-recipe-search" role="button" aria-label="${escapeHtml(T(`已选食谱：${recipe.zh}，点击更换`, `Selected recipe: ${recipe.en}. Search to change`))}" data-route-card="recipe-search" tabindex="0"><span>${escapeHtml(T(recipe.zh, recipe.en))}</span></div>
      </div>
      <div class="section-block">${sectionHeading("潜在过敏原", "Potential allergens")}
        <section class="make-allergen-notice" aria-label="${T("制作前过敏原提醒", "Allergen reminder before preparing")}">
          <div class="make-allergen-notice-heading"><span class="make-allergen-notice-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m10.3 4-7.8 13.5A2 2 0 0 0 4.2 20h15.6a2 2 0 0 0 1.7-2.5L13.7 4a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4m0 3h.01"/></svg></span><span>${T("制作前请留意", "Before you prepare")}</span></div>
          <div class="make-allergen-notice-tags">${recipe.allergens.length ? recipeAllergenLabel(recipe).split(" · ").map((label) => `<span>${escapeHtml(label)}</span>`).join("") : `<p>${T("配方未列出常见过敏原", "No common allergens listed in this recipe")}</p>`}</div>
          <p class="make-allergen-notice-copy">${T("请核对实际食材包装、品牌配方及交叉接触信息。", "Check actual ingredient labels, brand recipes, and cross-contact information.")}</p>
          <p class="make-allergen-notice-footnote">${T("仅作风险提示，不代表食谱适合所有人。", "A risk notice only; this does not mean the recipe is suitable for everyone.")}</p>
        </section>
      </div>`,
  });
}

function renderMakePortion() {
  const recipe = getRecipe(state.batchRecipeIndex);
  const selectedCup = getCupProfile(state.cup);
  const cupOptions = Object.keys(CUP_DEFINITIONS).map((id) => {
    const cup = getCupProfile(id);
    return `<button type="button" class="${state.cup === id ? "is-selected" : ""}" data-action="select-cup" data-value="${id}" aria-pressed="${state.cup === id}"><span class="cup-selector-dot" style="--cup-color:${cup.color}"></span><strong>${cup.cupId}</strong><small>${T(cup.colorLabelZh, cup.colorLabelEn)} · ${T(cup.stateZh, cup.stateEn)}</small></button>`;
  }).join("");
  return mobilePage({
    titleZh: "制作冰淇淋", titleEn: "Make ice cream", back: "make-recipe", pageClass: "make-flow-page",
    footerActions: `${button("上一步", "Previous", "make-recipe", "secondary")}${button("下一步", "Next", "freeze-confirm", "primary", false, 'data-transition="create-batch"')}`,
    footerClass: "flow-actions",
    body: `${stepper(2, 4, false, true)}
      <div class="page-intro"><div class="make-step-heading"><p class="eyebrow">${T("第 2 步", "Step 2")}</p><h2>${T("确认份量与杯子", "Confirm portion & cup")}</h2></div><p>${escapeHtml(T(recipe.zh, recipe.en))}</p></div>
      <div class="section-block">${sectionHeading("制作份量（ml）", "Portion (ml)")}<div class="portion-selector">${["50", "100", "250", "500"].map((value) => `<button type="button" class="${state.portion === value ? "is-selected" : ""}" data-action="select-portion" data-value="${value}" aria-pressed="${state.portion === value}">${value}</button>`).join("")}</div></div>
      <div class="section-block">${sectionHeading("食材用量", "Ingredients")}<div class="card card-pad" data-recipe-ingredients aria-live="polite">${recipeIngredientRows(getRecipeIngredients(state.portion, state.batchRecipeIndex))}</div></div>
      ${recipeCalorieSection(recipe.index)}
      <div class="section-block">${sectionHeading("使用杯子", "Cup")}<div class="card card-pad"><div class="cup-selector">${cupOptions}</div><p class="selection-note">${T(`已选择 ${selectedCup.cupId}。APP 状态仅供参考，请以手中的实体杯为准；确认后会更新该杯的当前任务。`, `${selectedCup.cupId} selected. App status is for reference only; use the physical cup in hand. Confirming updates this cup's current task.`)}</p></div></div>`,
  });
}

function renderMvpBatchPlan() {
  const ratio = Number(state.portion) / 250;
  const memberName = state.member === "mia" ? "Mia" : state.member === "hui" ? "Lucky" : T("家庭分享", "Family sharing");
  const ingredients = [
    ["草莓", "Strawberries", `${Math.round(175 * ratio)} g`],
    ["原味酸奶", "Plain yogurt", `${Math.round(125 * ratio)} g`],
    ["香蕉", "Banana", `${Math.round(75 * ratio)} g`],
  ];
  return mobilePage({
    titleZh: "确认制作信息",
    titleEn: "Confirm batch",
    captionZh: "步骤 1/3",
    captionEn: "Step 1/3",
    back: "make-recipe",
    body: `
      ${stepper(1, 3)}
      ${pageIntro("创建批次", "Create batch", "一次确认必要信息", "Confirm the essentials", "MVP 只保留成员、份量、杯子和食材用量四项。", "The MVP keeps only the member, portion, cup, and ingredient amounts.")}
      <div class="section-block">${sectionHeading("食用成员", "Member")}
        <div class="chip-row" style="margin:0;padding:0">
          <button class="chip ${state.member === "mia" ? "is-selected" : ""}" data-action="select-member" data-value="mia">Mia</button>
          <button class="chip ${state.member === "hui" ? "is-selected" : ""}" data-action="select-member" data-value="hui">Lucky</button>
          <button class="chip ${state.member === "family" ? "is-selected" : ""}" data-action="select-member" data-value="family">${T("家庭分享", "Family")}</button>
        </div>
      </div>
      <div class="section-block">${sectionHeading("制作份量", "Portion")}
        <div class="portion-selector">${["50", "100", "250", "500"].map((value) => `<button type="button" class="${state.portion === value ? "is-selected" : ""}" data-action="select-portion" data-value="${value}">${value}</button>`).join("")}</div>
      </div>
      <div class="section-block">${sectionHeading("批次确认", "Batch summary")}
        <div class="card card-pad stack compact">
          ${listRow("食谱", "Recipe", "草莓酸奶冰淇淋", "Strawberry yogurt ice cream", "", "")}
          ${listRow("成员", "Member", memberName, memberName, "", state.member === "mia" ? statusPill("核对过敏原", "Review allergen", "warning") : statusPill("已确认", "Confirmed", "success"))}
          ${listRow("杯子", "Cup", "CUP 3 · 雾紫 · 空闲", "CUP 3 · Mist purple · Available", "", statusPill("可使用", "Available", "success"))}
        </div>
      </div>
      <div class="section-block">${sectionHeading("食材用量", "Ingredients")}
        <div class="card card-pad">${ingredients.map(([zh, en, amount]) => `<div class="ingredient-row"><span>${T(zh, en)}</span><span>${amount}</span></div>`).join("")}</div>
      </div>
      ${state.member === "mia" ? `<div class="alert warning"><strong>${T("Mia 档案记录花生过敏", "Mia's profile lists a peanut allergy")}</strong>${T("当前配方不含花生，但仍需核对食材包装的交叉接触信息。", "The recipe contains no peanut ingredient, but packaging cross-contact information must still be checked.")}</div>` : ""}
      <div class="sticky-actions">${button("确认并开始备料", "Confirm and start prep", "freeze-confirm", "primary", true)}</div>`,
  });
}

function renderMvpPrepFreeze() {
  const cup = getCupProfile(state.cup);
  const runtime = cup.runtime;
  const frozen = ["freezing", "ready", "awaiting-result"].includes(runtime.status);
  const ready = ["ready", "awaiting-result"].includes(runtime.status);
  const frozenAt = runtime.frozenAt || formatDateTimeInput(new Date());
  const tutorialOpen = !ready && showMakingTutorialByDefault();
  return mobilePage({
    titleZh: "准备食材并冷冻", titleEn: "Prepare & freeze ingredients", captionZh: ready ? "步骤 3–4/4" : "步骤 3/4", captionEn: ready ? "Steps 3–4/4" : "Step 3/4", back: "icecream",
    pageClass: "make-flow-page",
    footerActions: frozen
      ? `${ready ? button("完成制作", "Finish making", "", "primary", true, 'data-action="finish-guidance" data-freeze-default-action') : button("返回详情页", "Back to details", "icecream", "primary", true, 'data-freeze-default-action')}<div data-freeze-time-save hidden>${button("保存入冻时间", "Save freezer time", "", "primary", true, 'data-action="start-freeze-countdown"')}</div>`
      : `${button("上一步", "Previous", "", "secondary", false, 'data-action="flow-step" data-value="2"')}${button("开始倒计时", "Start countdown", "", "primary", false, 'data-action="start-freeze-countdown"')}`,
    footerClass: frozen ? "" : "flow-actions",
    body: `${stepper(ready ? 4 : 3, 4, false, true)}<div class="page-intro"><div class="make-step-heading"><p class="eyebrow">${T("第 3 步", "Step 3")}</p><h2>${T("准备食材并冷冻", "Prepare & freeze ingredients")}</h2></div><p>${T(runtime.recipeZh || "混合食材、装杯并水平冷冻。", runtime.recipeEn || "Mix, fill, and freeze level.")}</p></div>
      <details class="tutorial-disclosure" ${tutorialOpen ? "open" : ""}>
        <summary><span>${T("备料与冷冻教程", "Prep & freezing tutorial")}</span><small>${T(tutorialOpen ? "前 3 次制作默认展开" : "按需展开步骤", tutorialOpen ? "Expanded for the first 3 batches" : "Expand when needed")}</small><span class="tutorial-toggle"><b class="tutorial-expand">${T("展开", "Expand")}</b><b class="tutorial-collapse">${T("收起", "Collapse")}</b></span></summary>
        <div class="card machine-guide-card prep-guide-card" style="--guide-cup-color:${cup.color}">
        <div class="prep-guide-summary row-between"><strong>${cup.cupId} · ${runtime.portion || state.portion} mL</strong>${statusPill(cup.stateZh, cup.stateEn, cup.tone)}</div>
        <article class="machine-guide-step">
          <div class="machine-guide-visual prep-guide-visual" aria-hidden="true"><span class="machine-guide-number">1</span><svg viewBox="0 0 74 68" fill="none"><path d="M20 32h38c-1 16-8 23-19 23S22 48 20 32Z" fill="var(--colors-family-soft-strong)" stroke="var(--colors-brands-family-700)" stroke-width="1.5"/><path d="m48 15-10 24M29 22l3 4m17-2 3-3M23 17l3 2" stroke="var(--colors-brands-family-700)" stroke-width="3" stroke-linecap="round"/><path d="M27 42c7 5 17 5 24 0" stroke="var(--colors-brands-family-400)" stroke-width="1.5" stroke-linecap="round"/></svg></div>
          <div class="machine-guide-copy"><h3>${T("混合食材", "Blend ingredients")}</h3><p>${T("按食材用量准备，将所有食材混合均匀", "Measure the ingredients and blend until evenly mixed")}</p></div>
        </article>
        <article class="machine-guide-step">
          <div class="machine-guide-visual prep-guide-visual" aria-hidden="true"><span class="machine-guide-number">2</span><span class="guide-cup-body"><span>${cup.cupId.replace("CUP ", "")}</span></span><span class="prep-fill-line"></span><span class="prep-fill-label">MAX</span></div>
          <div class="machine-guide-copy"><h3>${T(`装入 ${cup.cupId}`, `Fill ${cup.cupId}`)}</h3><p>${T("倒入混合食材，勿超过杯体 MAX FILL 线", "Pour in the mixture without exceeding the MAX FILL line")}</p></div>
        </article>
        <article class="machine-guide-step">
          <div class="machine-guide-visual prep-guide-visual" aria-hidden="true"><span class="machine-guide-number">3</span><span class="guide-cup-lid"></span><span class="guide-cup-body"><span>${cup.cupId.replace("CUP ", "")}</span></span><svg class="prep-snowflake" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M3.34 7l17.32 10M3.34 17 20.66 7M8 4l4 4 4-4M8 20l4-4 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div class="machine-guide-copy"><h3>${T("盖好杯盖，水平入冻", "Seal and freeze level")}</h3><p>${T("盖好储存杯盖，水平冷冻至少 24 小时", "Secure the storage lid and freeze level for at least 24 hours")}</p></div>
        </article>
        </div>
        <button type="button" class="tutorial-guide-link" data-action="open-support-guide" data-value="7">${T("查看完整设备教程", "View full device guide")}</button>
      </details>
      <div class="section-block">${sectionHeading("记录入冻时间", "Record freezer time")}<div class="card card-pad"><div class="field"><label for="freeze-start">${T("实际放入冷冻室的时间", "When the cup entered the freezer")}</label><input id="freeze-start" type="datetime-local" value="${frozenAt}" max="${formatDateTimeInput(new Date())}" /></div><p class="readable-copy">${T("至少冷冻 24 小时，之后仍需确认食材完全冻实。", "Freeze for at least 24 hours, then confirm the mixture is fully frozen.")}</p></div></div>
      ${frozen ? renderFreezeCountdownContent(false) : ""}
      ${ready ? `<section id="machine-guide-inline" class="section-block inline-machine-guide">${renderMachineGuideContent(cup, true)}</section>` : ""}`,
  });
}

function renderFreezeCountdownContent(showEditAction) {
  const runtime = getCupRuntime();
  const ready = ["ready", "awaiting-result"].includes(runtime.status);
  return `<article class="card card-pad section-block"><p class="eyebrow">${T("冷冻倒计时", "Freeze countdown")}</p><h2 class="freeze-clock" data-cup-freeze-countdown="${state.cup}">${ready ? "00:00" : Number.isFinite(runtime.freezeEndsAt) ? formatCupFreezeRemaining(runtime) : "00:10"}</h2><p class="readable-copy">${T(ready ? "冷冻完成，可以开始上机制作。" : "冷冻中，倒计时结束后可以开始上机制作", ready ? "Freezing complete. You can start processing on the machine." : "Freezing. You can start processing on the machine when the countdown ends.")}</p>${!runtime.freezeDemo && !ready ? button("开始倒计时", "Start countdown", "", "secondary", true, 'data-action="demo-freeze-countdown"') : ""}</article>
    ${ready && showEditAction ? button("查看上机操作", "View machine steps", "freeze-confirm", "primary", true) : ""}
    ${showEditAction ? button("修改入冻时间", "Edit freezer time", "freeze-confirm", "secondary", true) : ""}`;
}

function renderMvpBatchStatus() {
  const cup = getCupProfile(state.cup);
  return mobilePage({titleZh: "批次状态", titleEn: "Batch status", captionZh: cup.cupId, captionEn: cup.cupId, back: "icecream", body: `${pageIntro("冷冻记录", "Freezer record", cup.runtime.recipeZh || "本次制作", cup.runtime.recipeEn || "Current batch", "时间仅供参考，以实际冻实情况为准。", "Timing is an estimate. Check the actual frozen mixture.")}${renderFreezeCountdownContent(true)}<div class="sticky-actions">${button("返回冰淇淋机详情", "Back to ice cream maker", "icecream", "secondary", true)}</div>`});
}

function renderMachineGuideContent(cup, inline = false) {
  const tutorialOpen = inline || showMakingTutorialByDefault();
  return `
      <div class="page-intro"><div class="make-step-heading"><p class="eyebrow">${T("第 4 步", "Step 4")}</p><h2>${T("在机器上完成制作", "Make it on the machine")}</h2></div><p>${T("查看操作步骤后，在机器本体完成制作；无需返回 APP 登记结果。", "Review the steps and use the machine controls. No result logging in the app is needed.")}</p></div>
      <details class="tutorial-disclosure" ${tutorialOpen ? "open" : ""}>
        <summary><span>${T("上机操作教程", "Machine operation tutorial")}</span><small>${T(inline ? "上机步骤已展开" : tutorialOpen ? "前 3 次制作默认展开" : "按需展开步骤", inline ? "Machine steps expanded" : tutorialOpen ? "Expanded for the first 3 batches" : "Expand when needed")}</small><span class="tutorial-toggle"><b class="tutorial-expand">${T("展开", "Expand")}</b><b class="tutorial-collapse">${T("收起", "Collapse")}</b></span></summary>
        <div class="card machine-guide-card">
        <article class="machine-guide-step">
          <div class="machine-guide-visual guide-cup-visual" style="--guide-cup-color:${cup.color}" aria-hidden="true">
            <span class="machine-guide-number">1</span>
            <span class="guide-cup-lid"></span>
            <span class="guide-cup-body"><span>${cup.cupId.replace("CUP ", "")}</span></span>
            <span class="guide-check-mark">✓</span>
          </div>
          <div class="machine-guide-copy">
            <h3>${T(`取出并核对 ${cup.cupId}`, `Take and verify ${cup.cupId}`)}</h3>
            <p>${T("杯体保持水平，移除储存杯盖", "Keep the cup level and remove the storage lid")}</p>
            ${statusPill("人工核对", "Manual check", "info")}
          </div>
        </article>
        <article class="machine-guide-step">
          <div class="machine-guide-visual guide-assembly-visual" aria-hidden="true">
            <span class="machine-guide-number">2</span>
            <span class="guide-assembly-lid"></span>
            <span class="guide-assembly-spindle"></span>
            <span class="guide-assembly-paddle"></span>
            <span class="guide-motion-arrow">↓</span>
          </div>
          <div class="machine-guide-copy">
            <h3>${T("安装杯盖、刀轴与搅拌刀", "Fit lid, spindle, and paddle")}</h3>
            <p>${T("按机器说明依次装入，并确认锁定到位", "Fit each part in order and confirm it is locked")}</p>
          </div>
        </article>
        <article class="machine-guide-step">
          <div class="machine-guide-visual guide-panel-visual" aria-hidden="true">
            <span class="machine-guide-number">3</span>
            <span class="guide-panel-screen"><b>ICE<br />CREAM</b><i></i></span>
            <span class="guide-start-mark">▶</span>
          </div>
          <div class="machine-guide-copy">
            <h3>${T("在面板选择程序并启动", "Select the program and start")}</h3>
            <p>${cup.runtime.program || getRecipe(cup.runtime.recipeIndex ?? state.batchRecipeIndex).program} · ${cup.runtime.portion || state.portion} mL</p>
            ${statusPill("机器按键启动", "Press machine button", "success")}
          </div>
        </article>
        </div>
        <button type="button" class="tutorial-guide-link" data-action="open-support-guide" data-value="7">${T("查看完整设备教程", "View full device guide")}</button>
      </details>
      <div class="alert warning section-block"><strong>${T("APP 不能远程启动", "The app cannot start the machine remotely")}</strong>${T("请在确认安装正确后，在机器本体按键启动。", "After confirming assembly, start the program using the controls on the machine.")}</div>`;
}

function renderMvpMachineGuide() {
  const cup = getCupProfile(state.cup);
  const canEndGuidance = ["ready", "awaiting-result"].includes(cup.runtime.status);
  return mobilePage({
    titleZh: "上机操作指引",
    titleEn: "Machine operation guide",
    captionZh: "步骤 4/4",
    captionEn: "Step 4/4",
    back: "icecream",
    pageClass: "make-flow-page",
    footerActions: canEndGuidance ? button("完成制作", "Finish making", "", "primary", true, 'data-action="finish-guidance"') : button("返回详情页", "Back to details", "icecream", "primary", true),
    body: `${stepper(4, 4, false, true)}${renderMachineGuideContent(cup)}`,
  });
}

function scrollToInlineMachineGuide() {
  const scroll = app.querySelector(".mobile-scroll");
  const guide = app.querySelector("#machine-guide-inline");
  if (!scroll || !guide) return;
  const top = guide.getBoundingClientRect().top - scroll.getBoundingClientRect().top + scroll.scrollTop - 10;
  scroll.scrollTo({ top, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
}

function renderRecords() {
  return mobilePage({
    pageClass: "icecream-overview records-page",
    titleZh: "制作记录", titleEn: "Making records", back: "icecream",
    body: `<p class="result-summary">${T("保留已查看的操作指引与旧制作记录，不推断机器完成状态。", "Keep viewed guides and older making records without inferring machine completion.")}</p>
      <div class="stack">${state.records.length ? state.records.map(recordListCard).join("") : `<div class="card empty-state"><h3>${T("还没有制作记录", "No making records yet")}</h3><p>${T("结束上机引导后，可在这里回看食谱与杯子信息。", "After finishing the guide, revisit the recipe and cup details here.")}</p></div>`}</div>`,
  });
}

function renderRecordDetail() {
  const record = state.records.find((item) => item.id === state.recordId) || state.records[0];
  if (!record) return mobilePage({titleZh: "制作记录", titleEn: "Making records", back: "records", body: `<div class="empty-state card">${T("暂无制作记录", "No making records")}</div>`});
  const current = state.recordStep || 1;
  const stages = [["选择食谱", "Choose recipe"], ["确认份量与杯子", "Confirm portion & cup"], ["准备食材并冷冻", "Prepare & freeze ingredients"], [record.result === "guidance-viewed" ? "上机操作指引" : "上机制作与历史结果", record.result === "guidance-viewed" ? "Machine operation guide" : "Machine use & legacy result"]];
  const [titleZh, titleEn] = stages[current - 1];
  const resultZh = {complete: "已完成", incomplete: "未完成", cancelled: "已取消"}[record.result] || "已保存";
  const resultEn = {complete: "Completed", incomplete: "Not completed", cancelled: "Cancelled"}[record.result] || "Saved";
  const ingredients = `<div class="section-block">${sectionHeading("食材用量", "Ingredients")}<div class="card card-pad">${recipeIngredientRows(record.ingredients || getRecipeIngredients(record.portion, record.recipeIndex))}</div></div>`;
  const content = current === 1 ? `
    <div class="section-block">${sectionHeading("食谱", "Recipe")}<div class="card card-pad">${listRow(record.recipeZh, record.recipeEn, recordMakingMeta(record), recordMakingMeta(record), "", "", "", recordThumbnail(record))}</div></div>
    ${record.member ? `<div class="section-block">${sectionHeading("历史成员记录", "Historical member record")}<div class="card card-pad record-batch-summary">${listRow("食用成员", "Member", record.member, record.member === "家庭分享" ? "Family" : record.member, "", "")}</div></div>` : ""}` : current === 2 ? `
    <div class="section-block">${sectionHeading("制作份量", "Portion")}<div class="card card-pad">${listRow("制作份量", "Portion", `${record.portion} mL`, `${record.portion} mL`, "", "")}</div></div>
    ${ingredients}
    <div class="section-block">${sectionHeading("使用杯子", "Cup")}<div class="card card-pad">${listRow("使用杯子", "Cup", record.cupName || record.cupId, record.cupName || record.cupId, "", "")}</div></div>` : current === 3 ? `
    <article class="card card-pad"><h3>${T("混合食材 → 装杯 → 水平入冻", "Mix → fill → freeze level")}</h3><p class="readable-copy">${T(record.recipeZh, record.recipeEn)}</p></article>
    ${ingredients}<div class="section-block">${sectionHeading("记录入冻时间", "Record freezer time")}<div class="card card-pad">${listRow("实际放入冷冻室的时间", "When the cup entered the freezer", record.frozenAt ? formatExpiry(record.frozenAt) : "旧批次未保存入冻时间", record.frozenAt ? formatExpiry(record.frozenAt) : "Freezer time unavailable for this legacy batch", "", "")}<p class="readable-copy">${T("至少冷冻 24 小时，之后仍需确认食材完全冻实。", "Freeze for at least 24 hours, then confirm the mixture is fully frozen.")}</p></div></div>` : `
    <div class="section-block">${sectionHeading("本机程序", "Machine program")}<div class="card card-pad">${listRow("程序", "Program", record.program || getRecipe(record.recipeIndex).program, record.program || getRecipe(record.recipeIndex).program, "", "")}</div></div>
    ${record.result === "guidance-viewed"
      ? `<div class="alert info section-block"><strong>${T("已查看操作指引", "Machine guide viewed")}</strong>${T("仅记录查看指引，不代表机器已启动或成品已完成。", "This records guide viewing only, not that the machine started or the dessert was made.")}</div>`
      : `<div class="section-block">${sectionHeading("历史批次信息", "Legacy batch details")}<div class="card card-pad">${listRow("保存状态", "Saved status", resultZh, resultEn, "", "")}${listRow("留档日期", "Saved date", formatExpiry(recordMakingTime(record)), formatExpiry(recordMakingTime(record)), "", "")}${record.remaining ? listRow("历史余量", "Historical remaining", `${record.remaining} mL`, `${record.remaining} mL`, "", "") : ""}</div></div>`}`;
  return mobilePage({
    pageClass: "icecream-overview record-flow",
    titleZh: current === 1 ? "制作冰淇淋" : titleZh, titleEn: current === 1 ? "Make ice cream" : titleEn,
    captionZh: current === 1 ? "" : `步骤 ${current}/4`, captionEn: current === 1 ? "" : `Step ${current}/4`, back: "records",
    body: `${stepper(current, 4, true)}
      <div class="page-intro"><div class="make-step-heading"><p class="eyebrow">${T(`第 ${current} 步`, `Step ${current}`)}</p><h2>${T(titleZh, titleEn)}</h2></div><p>${T("查看本次制作时保存的信息。", "Review the information saved for this batch.")}</p></div>${content}
      <div class="sticky-actions">${current < 4 ? button("下一步", "Next", "", "primary", true, `data-action="record-step" data-value="${current + 1}"`) : `${button("按此食谱再做一次", "Make this recipe again", "", "primary", true, `data-action="remake-record" data-value="${record.id}"`)}${button("返回制作记录", "Back to records", "", "secondary", true, 'data-action="navigate-back" data-fallback="records" data-exit-record="true"')}`}</div>`,
  });
}

const SUPPORT_GUIDES = [
    ["parts", "开箱与检查", "Unbox & inspect", "确认主机、杯子与配件齐全", "Check the unit, cups, and accessories", "M4 7l8-4 8 4v10l-8 4-8-4V7Zm0 0 8 4 8-4M12 11v10"],
    ["parts", "认识机器部件", "Know the parts", "了解杯盖、刀轴与搅拌刀", "Identify the lid, spindle, and paddle", "M5 4h14v5H5zM12 9v8M7 17h10v4H7z"],
    ["recipe-detail", "准备食材", "Prepare ingredients", "按食谱和份量准备混合食材", "Measure and blend your recipe ingredients", "M4 10h16c-1 7-4 10-8 10S5 17 4 10Zm11-7-4 11"],
    ["programs", "装杯与冷冻", "Fill & freeze", "低于 MAX FILL 线，水平冷冻至少 24 小时", "Stay below MAX FILL; freeze level for at least 24h", "M6 5h12l-1 16H7L6 5Zm-1-2h14M7 10h10M12 12v6M9 15h6"],
    ["install", "安装与锁定", "Assemble & lock", "按顺序安装，确认所有部件到位", "Fit each part and confirm it is locked", "M5 8h14v13H5zM8 8V5a4 4 0 0 1 8 0v3M9 15l2 2 4-4"],
    ["programs", "首次制作", "First batch", "选择对应程序，在机器面板启动", "Choose a program and start on the machine", "M4 3h16v18H4zM8 7h8M9 12l6 3-6 3v-6Z"],
    ["faq", "常见问题与排查", "Questions & troubleshooting", "根据遇到的现象查找解决方法", "Find guidance for the issue you see", "M9 8a3 3 0 1 1 5 2c-2 1-2 2-2 3M12 17h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"],
    ["install", "查看完整使用指引", "Continue with full guide", "查看安装、操作与设备说明", "View assembly, operation, and device details", "M12 5c-3-2-6-2-9-1v15c3-1 6-1 9 1 3-2 6-2 9-1V4c-3-1-6-1-9 1Zm0 0v15"],
  ];
let supportGuideIndex = 0;
let supportAiOrigin = "support";
const supportMessages = [];

const SUPPORT_GUIDE_CONTENT = [
  ["核对主机、搅拌杯、储存杯盖、搅拌杯盖、刀轴与搅拌刀，检查外观与包装内配件。", "Check the unit, pint cup, storage lid, processing lid, spindle, and paddle for completeness and visible damage.", "发现缺件或损伤时不要使用，请准备订单和购买凭证联系客服。", "Do not use missing or damaged parts. Have your order and proof of purchase ready for support."],
  ["对照示意认识主机、杯体、储存杯盖、搅拌杯盖、刀轴与搅拌刀，安装前逐一核对。", "Identify the unit, cup, storage lid, processing lid, spindle, and paddle before assembly.", "储存杯盖用于冷冻与储存，制作时使用对应的搅拌杯盖；请勿混用。", "Use the storage lid for freezing and storage and the processing lid for making. Do not interchange them."],
  ["选择食谱与制作份量，按页面换算后的用量准备食材，并将食材混合均匀。", "Choose a recipe and portion, measure the calculated ingredients, and blend evenly.", "制作前核对页面提示的潜在过敏原、实际食材包装与交叉接触信息。", "Check the potential allergen notice, actual ingredient labels, and cross-contact information before preparing."],
  ["将混合食材倒入杯中，不超过 MAX FILL 线；盖好储存杯盖，水平放入冷冻室至少 24 小时。", "Fill below MAX FILL, secure the storage lid, and freeze level for at least 24 hours.", "达到预计冷冻时长后仍需人工确认完全冻实；倾斜冷冻的混合物请按说明书处理。", "Confirm the mixture is fully frozen even after the estimated time. Follow the manual for mixtures frozen at an angle."],
  ["检查部件清洁完好，将搅拌刀和刀轴安装到搅拌杯盖，装入冷冻杯，锁紧杯盖后装入主机。", "Check the parts, fit the paddle and spindle to the processing lid, insert the frozen cup, lock the lid, and fit the assembly to the unit.", "确认所有部件安装到位后再启动。安装时保持机器停止，勿接触运动部件。", "Confirm all parts are seated before starting. Keep the unit stopped during assembly and avoid moving parts."],
  ["按食谱选择机器程序与对应份量，确认安装正确后在实体机器面板按键启动。", "Select the recipe program and portion and start using the machine's physical controls after verifying assembly.", "App 不远程启动或读取机器进度；制作结束后观察实际成品，再记录制作结果。", "The app does not remotely start or read progress. Inspect the actual batch and then log the result."],
  ["机器无法启动时，先停止操作并核对杯盖、外碗与机头是否安装到位，再按说明书排查。", "If the unit will not start, stop and check the lid, outer bowl, and head against the manual.", "如有冒烟、异味、异常过热或部件损伤，请停止使用、断电并联系售后。", "For smoke, unusual odor, overheating, or damaged parts, stop use, unplug, and contact support."],
];

function renderSupport() {
  const guides = SUPPORT_GUIDES;
  return mobilePage({
    titleZh: "设备助手", titleEn: "Device assistant", back: "icecream",
    pageClass: "support-directory-page",
    body: `<section class="support-directory-intro"><p>${T("轻松使用你的", "Get the most from")}</p><h2>${T("冰淇淋机 IM01", "Ice cream maker IM01")}</h2></section>
      <nav class="support-directory-list" aria-label="${T("设备使用指引", "Device guides")}">${guides.map(([target, zh, en, descZh, descEn, path], index) => `<button type="button" class="support-directory-item" data-action="open-support-guide" data-value="${index}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${path}"/></svg><span><strong>${T(zh, en)}</strong><small>${T(descZh, descEn)}</small></span><span class="chevron" aria-hidden="true">›</span></button>`).join("")}</nav>
      <div class="sticky-actions support-directory-contact">${button("✧ Ask CozyAI", "✧ Ask CozyAI", "", "secondary", true, 'data-action="open-support-ai"')}</div>`,
  });
}

function renderSupportGuide() {
  const guide = SUPPORT_GUIDES[supportGuideIndex];
  const fullGuide = supportGuideIndex === SUPPORT_GUIDES.length - 1;
  const content = fullGuide ? SUPPORT_GUIDE_CONTENT : [SUPPORT_GUIDE_CONTENT[supportGuideIndex]];
  return mobilePage({
    titleZh: "冰淇淋机 IM01", titleEn: "Ice cream maker IM01", back: "support", pageClass: "support-guide-page",
    right: `<button type="button" class="icon-button support-ai-icon" data-action="open-support-ai" aria-label="Ask CozyAI"><img src="./assets/figma/cozy-ai-mascot.png" alt=""/></button>`,
    body: `<div class="support-guide-heading"><p>${fullGuide ? T("使用指引", "User guide") : T(`第 ${supportGuideIndex + 1} 步`, `Step ${supportGuideIndex + 1}`)}</p><h2>${T(guide[1], guide[2])}</h2></div>
      <div class="support-guide-hero">${machineArt()}<span class="support-media-sound" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4Zm12-1c3 2 3 6 0 8m3-11c5 4 5 10 0 14"/></svg></span><span class="support-media-expand" aria-hidden="true">⛶</span><span class="support-media-play" aria-hidden="true">▶</span><span class="support-media-caption">${T("操作视频 · 待提供素材", "How-to video · Asset pending")}</span></div>
      <article class="card support-guide-content"><p class="support-guide-description">${T(guide[3], guide[4])}</p>${content.map(([howZh, howEn, watchZh, watchEn], index) => `${fullGuide ? `<h3>${T(SUPPORT_GUIDES[index][1], SUPPORT_GUIDES[index][2])}</h3>` : ""}<details open><summary><span class="support-detail-symbol" aria-hidden="true">?</span>${T("如何操作", "How to do it")}<span class="support-detail-chevron" aria-hidden="true">⌃</span></summary><div class="support-guide-illustration">${machineArt()}</div><p>${T(howZh, howEn)}</p></details><details open><summary><span class="support-detail-symbol" aria-hidden="true">!</span>${T("注意事项", "What to watch out for")}<span class="support-detail-chevron" aria-hidden="true">⌃</span></summary><p>${T(watchZh, watchEn)}</p></details>`).join("")}</article>`,
  });
}

function sendSupportQuestion(suggestedQuestion = "") {
  const question = suggestedQuestion || app.querySelector("#support-question")?.value.trim();
  if (!question) return;
  const topic = /冻|freez|24/i.test(question) ? 3 : /安装|assemble|lid|杯盖/i.test(question) ? 4 : /程序|program|启动/i.test(question) ? 5 : /过敏|食材|ingredient|allerg/i.test(question) ? 2 : 6;
  supportMessages.push({ question: question.slice(0, 500), topic });
  render();
  app.querySelector(".mobile-scroll")?.scrollTo(0, app.querySelector(".mobile-scroll").scrollHeight);
}

function renderSupportAI() {
  return mobilePage({
    titleZh: "CozyAI", titleEn: "CozyAI", back: supportAiOrigin, pageClass: `support-ai-page${supportMessages.length ? " has-messages" : ""}`,
    body: `<div class="support-ai-welcome"><img src="./assets/figma/cozy-ai-mascot.png" alt="CozyAI"/><h2>${T("关于你的 Momcozy IM01，<br/>有什么可以帮你？", "How can I help with your<br/>Momcozy IM01 ?")}</h2></div>
      <div class="support-chat-messages" aria-live="polite">${supportMessages.map(({question, topic}) => `<p class="support-chat-question">${escapeHtml(question)}</p><div class="support-chat-answer"><strong>✧ CozyAI</strong><p>${T(SUPPORT_GUIDE_CONTENT[topic][0], SUPPORT_GUIDE_CONTENT[topic][1])}</p><p>${T(SUPPORT_GUIDE_CONTENT[topic][2], SUPPORT_GUIDE_CONTENT[topic][3])}</p><button type="button" class="chip" data-action="open-support-guide" data-value="${topic}">${T("查看操作指引", "View guide")} ›</button></div>`).join("")}</div>
      ${supportMessages.length ? "" : `<div class="support-ai-suggestions">${[["如何确认食材已经完全冻实？", "How do I know the mixture is fully frozen?"], ["如果冰淇淋口感不够顺滑，应该怎么处理？", "What if the ice cream doesn't feel smooth enough?"], ["机器无法启动。", "The machine won't start."]].map(([zh, en]) => `<button type="button" data-action="support-suggestion" data-value="${escapeHtml(T(zh, en))}">${T(zh, en)}</button>`).join("")}</div>`}
      <div class="sticky-actions support-ai-bottom"><div class="support-chat-composer"><button type="button" class="support-chat-add" data-action="support-input-focus" aria-label="${T("添加问题", "Add a question")}">＋</button><label for="support-question">${T("输入你的问题", "Ask a question")}</label><input id="support-question" type="text" maxlength="500" placeholder="${T("询问关于你的 Momcozy IM01", "Ask about your Momcozy IM01")}"/><button type="button" class="support-chat-send" data-action="send-support-question" aria-label="${T("发送", "Send")}">↑</button></div><p class="support-ai-disclaimer">${T("AI 生成内容，不构成专业建议", "AI-generated, not professional advice")}</p></div>`,
  });
}

function renderParts() {
  return mobilePage({
    titleZh: "部件识别",
    titleEn: "Parts guide",
    back: "support",
    body: `
      <div class="part-diagram">${machineArt()}<span class="part-label one">${T("主机与机头", "Main unit & head")}</span><span class="part-label two">${T("搅拌杯盖", "Processing lid")}</span><span class="part-label three">${T("搅拌杯", "Pint cup")}</span><span class="part-label four">${T("刀轴与搅拌刀", "Spindle & paddle")}</span></div>
      <div class="card card-pad stack compact">
        ${listRow("主机", "Main unit", "包含面板、机头和驱动结构", "Includes panel, head, and drive system", "", "01")}
        ${listRow("搅拌杯与密封杯盖", "Pint cup & storage lid", "用于装料、预冻和储存", "For filling, pre-freezing, and storage", "", "02")}
        ${listRow("搅拌杯盖", "Processing lid", "制作时固定杯体与刀轴", "Secures the cup and spindle during processing", "", "03")}
        ${listRow("刀轴与搅拌刀", "Spindle & paddle", "制作前检查有无损伤和残留", "Inspect for damage and residue before use", "", "04")}
        ${listRow("清洁配件", "Cleaning accessories", "仅按说明书指定用途使用", "Use only as described in the manual", "", "05")}
      </div>
      <div class="alert danger section-block"><strong>${T("损伤部件不要继续使用", "Do not use damaged parts")}</strong>${T("如果发现裂纹、缺口、金属或塑料碎屑，请停止使用并联系售后。", "Stop using the product and contact service if you find cracks, chips, or metal/plastic fragments.")}</div>`,
  });
}

function renderInstall() {
  return mobilePage({
    titleZh: "安装教程",
    titleEn: "Assembly tutorial",
    back: "support",
    body: `
      ${pageIntro("开始前", "Before starting", "按 5 步完成安装", "Assemble in five steps", "每一步都需要在机器本体旁人工确认。", "Confirm every step manually beside the machine.")}
      <div class="timeline">
        <div class="timeline-row"><h3>01 · ${T("检查刀轴与搅拌刀", "Inspect spindle and paddle")}</h3><p>${T("确认清洁、干燥、无裂纹或变形。", "Confirm they are clean, dry, and free from cracks or deformation.")}</p></div>
        <div class="timeline-row"><h3>02 · ${T("将搅拌刀装入杯盖", "Fit the paddle into the lid")}</h3><p>${T("确认刀轴卡入指定位置。", "Make sure the spindle seats in the intended position.")}</p></div>
        <div class="timeline-row"><h3>03 · ${T("把冷冻杯放入外碗", "Place the frozen cup in the outer bowl")}</h3><p>${T("杯底平稳，编号和颜色与 APP 记录一致。", "Keep it level and match the number and color shown in the app.")}</p></div>
        <div class="timeline-row"><h3>04 · ${T("锁紧搅拌杯盖", "Lock the processing lid")}</h3><p>${T("沿标识方向旋转至完全到位。", "Rotate in the marked direction until fully locked.")}</p></div>
        <div class="timeline-row"><h3>05 · ${T("推入主机并锁定机头", "Insert the bowl and lock the head")}</h3><p>${T("确认结构到位后再选择程序。", "Confirm the assembly is secure before selecting a program.")}</p></div>
      </div>
      <div class="button-row">${button("查看部件名称", "Review parts", "parts", "secondary", true)}${button("进入程序指引", "Go to program guide", "programs", "primary", true)}</div>`,
  });
}

function renderPrograms() {
  const programs = [
    ["ICE CREAM", "经典奶基或酸奶基配方", "Classic dairy or yogurt-based recipes"],
    ["LITE ICE CREAM", "低糖或轻盈配方，按食谱使用", "Lighter recipes; use when specified"],
    ["SORBET", "水果为主的雪葩配方", "Fruit-forward sorbet recipes"],
    ["GELATO", "更浓郁细腻的意式配方", "Denser gelato-style recipes"],
    ["FROZEN YOGURT", "酸奶为主的冷冻甜品", "Yogurt-forward frozen desserts"],
    ["MILKSHAKE", "无需长时间预冻的奶昔类", "Milkshake recipes without long pre-freeze"],
    ["RE-SPIN", "仅在用户观察后主动选择再次搅拌", "Optional reprocessing chosen after your own observation"],
    ["MIX-IN", "完成基础制作后主动加入小颗粒配料", "Optional small mix-ins after the base program"],
  ];
  return mobilePage({
    titleZh: "程序说明",
    titleEn: "Program guide",
    back: "support",
    body: `
      ${pageIntro("机器面板", "Machine panel", "按食谱选择对应程序", "Choose the program shown in the recipe", "APP 只提供指导；程序选择和启动均在机器本体完成。", "The app provides guidance; choose and start the program on the machine.")}
      <div class="program-list">${programs.map(([name, zh, en]) => `<article class="card program-card"><strong>${name}</strong><span>${T(zh, en)}</span></article>`).join("")}</div>
      <div class="section-block">${sectionHeading("份量选择", "Portion buttons")}
        <div class="portion-selector"><button>50</button><button>100</button><button class="is-selected">250</button><button>500</button></div><p style="margin:8px 2px 0;color:var(--muted-foreground);font-size:9px;line-height:14px">${T("选择与食谱详情中记录的制作份量一致的按钮。", "Choose the same portion recorded in the recipe details.")}</p>
      </div>
      <div class="alert warning section-block"><strong>${T("不自动推荐 RE-SPIN / MIX-IN", "No automatic RE-SPIN / MIX-IN recommendation")}</strong>${T("请先观察实际成品，再根据说明书和个人需要主动选择。", "Observe the actual result first, then decide based on the manual and your needs.")}</div>`,
  });
}


function renderFaq() {
  const options = ["E01", "E02", "E03", "E04"];
  return mobilePage({
    titleZh: "问题与错误帮助",
    titleEn: "Issue & error help",
    back: "support",
    body: `
      ${pageIntro("由你选择机器显示", "Select what the machine shows", "机器面板显示了什么？", "What is shown on the machine panel?", "当前版本不会自动读取错误码，请按机器实际显示选择。", "This release does not read error codes automatically; choose what is actually shown.")}
      <div class="portion-selector">${options.map((code) => `<button type="button" class="${state.errorCode === code ? "is-selected" : ""}" data-action="error-code" data-value="${code}">${code}</button>`).join("")}</div>
      <article class="card card-pad section-block">
        <div class="row-between"><div><p class="eyebrow" style="color:var(--colors-brands-family-700)">${T("你选择的错误码", "Selected error code")}</p><h2 style="margin:6px 0 0;font-family:var(--font-brand);font-size:25px;font-weight:400">${state.errorCode}</h2></div>${statusPill("人工选择", "Selected by you", "info")}</div>
        <div class="section-block" style="margin-top:16px"><h3 style="margin:0;font-size:12px">${T("可能原因", "Possible cause")}</h3><p style="margin:5px 0 0;color:var(--muted-foreground);font-size:10px;line-height:16px">${T("外碗、杯盖或机头可能没有完全到位，安全结构尚未锁定。", "The outer bowl, lid, or machine head may not be fully seated and locked.")}</p></div>
      </article>
      <div class="section-block">${sectionHeading("处理步骤", "What to do")}
        <div class="timeline"><div class="timeline-row"><h3>${T("停止当前操作并关闭机器", "Stop and turn off the machine")}</h3><p>${T("等待运动部件完全停止。", "Wait for all moving parts to stop.")}</p></div><div class="timeline-row"><h3>${T("取出并重新安装", "Remove and reassemble")}</h3><p>${T("按安装教程重新检查杯盖、外碗和机头。", "Use the assembly tutorial to re-check the lid, outer bowl, and head.")}</p></div><div class="timeline-row"><h3>${T("再次尝试一次", "Try once more")}</h3><p>${T("如果错误持续，请停止使用并联系客服。", "If the error continues, stop using the product and contact support.")}</p></div></div>
      </div>
      <div class="button-row">${button("查看安装教程", "Assembly tutorial", "install", "secondary", true)}${button("联系客服", "Contact support", "contact", "primary", true)}</div>`,
  });
}

function renderRisk() {
  return mobilePage({
    titleZh: "停止使用提示",
    titleEn: "Stop-use guidance",
    back: "support",
    body: `
      <div class="alert danger" style="margin-top:6px;padding:18px"><strong style="font-size:14px">${T("出现以下情况，请立即停止使用", "Stop using the product immediately in these situations")}</strong>${T("关闭机器并断开电源，不要再次启动或自行拆修主机。", "Turn off and unplug the machine. Do not restart it or open the main unit yourself.")}</div>
      <div class="section-block">${sectionHeading("高风险情况", "High-risk situations")}
        <div class="card card-pad stack compact">
          ${listRow("冒烟或明显异味", "Smoke or strong odor", "立即断电并远离设备", "Unplug immediately and move away", "", statusPill("停止使用", "Stop use", "danger"))}
          ${listRow("异常过热", "Abnormal overheating", "不要触碰高温区域", "Do not touch hot surfaces", "", statusPill("停止使用", "Stop use", "danger"))}
          ${listRow("刀轴或搅拌刀损伤", "Spindle or paddle damage", "不要继续运行任何程序", "Do not run another program", "", statusPill("停止使用", "Stop use", "danger"))}
          ${listRow("金属或塑料碎屑", "Metal or plastic fragments", "丢弃受影响食物并保留部件", "Discard affected food and keep the part", "", statusPill("停止使用", "Stop use", "danger"))}
          ${listRow("主机进水或跌落", "Water ingress or drop", "断电后联系售后评估", "Unplug and contact service for assessment", "", statusPill("停止使用", "Stop use", "danger"))}
        </div>
      </div>
      <div class="section-block">${sectionHeading("联系客服前准备", "Before contacting support")}
        <div class="card card-pad stack compact">${listRow("产品型号", "Model", "IM01", "IM01", "", "")}${listRow("购买凭证", "Proof of purchase", "订单号或发票", "Order number or receipt", "", "")}${listRow("问题照片", "Issue photos", "仅在确保安全后拍摄", "Take only when safe", "", "")}${listRow("发生时间与经过", "Time and sequence", "记录实际情况，不重新通电复现", "Record what happened; do not power on to reproduce", "", "")}</div>
      </div>
      <div class="sticky-actions">${button("联系人工客服", "Contact support", "contact", "danger", true)}</div>`,
  });
}

function renderContact() {
  return mobilePage({
    titleZh: "客服与售后",
    titleEn: "Support & service",
    back: "support",
    body: `
      ${pageIntro("冰淇淋机 IM01", "Ice cream maker IM01", "告诉我们遇到了什么问题", "Tell us what happened", "选择问题类型后，我们会带上型号和必要记录进入支持流程。", "Choose an issue type and the support flow will include the model and relevant records.")}
      <div class="quick-grid">
        <article class="card quick-card" tabindex="0"><span class="quick-label">USE</span><h3>${T("使用咨询", "How-to question")}</h3><p>${T("安装、程序、食谱或清洁", "Assembly, programs, recipes, cleaning")}</p></article>
        <article class="card quick-card" tabindex="0"><span class="quick-label">ERR</span><h3>${T("错误与故障", "Error or fault")}</h3><p>${T("错误码、无法启动或异常", "Error codes, no start, abnormal behavior")}</p></article>
        <article class="card quick-card" tabindex="0"><span class="quick-label">PART</span><h3>${T("部件与配件", "Parts & accessories")}</h3><p>${T("损坏、缺失或适配问题", "Damage, missing parts, compatibility")}</p></article>
        <article class="card quick-card" tabindex="0"><span class="quick-label">ORDER</span><h3>${T("订单与售后", "Order & service")}</h3><p>${T("物流、退换和保修", "Delivery, returns, warranty")}</p></article>
      </div>
      <div class="section-block">${sectionHeading("自动带入的信息", "Information included")}
        <div class="card card-pad stack compact">${listRow("产品", "Product", "冰淇淋机 IM01", "Ice cream maker IM01", "", "")}${listRow("最近制作记录", "Recent making record", "仅在你确认后分享", "Shared only after your confirmation", "", T("未授权", "Not shared"))}${listRow("设备日志", "Device logs", "V1.0 不连接设备，无自动日志", "V1.0 is not connected; no automatic logs", "", T("无", "None"))}</div>
      </div>
      <div class="alert info section-block"><strong>${T("隐私提示", "Privacy note")}</strong>${T("发送前可查看并移除食谱、成员或照片信息。", "Review and remove recipe, member, or photo information before sending.")}</div>
      <div class="sticky-actions"><div class="button-row">${button("查看 FAQ", "View FAQ", "faq", "secondary", true)}${button("开始在线咨询", "Start chat support", "", "primary", true, `data-action="show-toast" data-message-zh="已创建客服咨询草稿" data-message-en="Support draft created"`)}</div></div>`,
  });
}

function renderComments() {
  return mobilePage({
    titleZh: "食谱评论",
    titleEn: "Recipe comments",
    captionZh: "草莓酸奶冰淇淋 · 186 条",
    captionEn: "Strawberry yogurt ice cream · 186",
    back: "community",
    right: `<button class="icon-button textual" type="button" data-action="show-toast" data-message-zh="评论排序已打开" data-message-en="Comment sorting opened">${T("排序", "Sort")}</button>`,
    body: `
      <article class="card card-pad"><div class="row-between"><div><h3 style="margin:0;font-size:12px">${T("食谱评分", "Recipe rating")}</h3><p style="margin:4px 0 0;color:var(--muted-foreground);font-size:9px">4.9 · 124 ${T("人评分", "ratings")}</p></div><strong style="font-family:var(--font-brand);font-size:30px;font-weight:400">4.9</strong></div><div class="progress-track" style="margin-top:12px"><div class="progress-fill" style="width:92%"></div></div></article>
      <div class="section-block">${sectionHeading("写下你的体验", "Share your experience")}
        <div class="card card-pad"><div class="rating">${[1, 2, 3, 4, 5].map((value) => `<button type="button" class="${value <= state.rating ? "is-selected" : ""}" data-action="rating" data-value="${value}">${value}</button>`).join("")}</div><textarea aria-label="${T("评论内容", "Comment")}" placeholder="${T("口感、配方调整或制作心得…", "Texture, adjustments, or making notes…")}" style="width:100%;min-height:70px;margin-top:10px;padding:10px;border:.5px solid var(--border);border-radius:12px;color:var(--foreground);background:var(--background)"></textarea>${button("发布评论", "Post comment", "", "primary", true, `style="margin-top:10px" data-action="show-toast" data-message-zh="评论已提交审核" data-message-en="Comment submitted for review"`)}</div>
      </div>
      <div class="section-block">${sectionHeading("最有帮助", "Most helpful")}
        <div class="stack">
          <article class="card comment-card"><div class="comment-head"><div><h3>${T("安安妈妈", "Anan's mom")}</h3><p>${T("5 分 · 2 天前", "5/5 · 2 days ago")}</p></div>${statusPill("已购买", "Verified", "success")}</div><p style="margin-top:10px;color:var(--foreground);font-size:10px;line-height:16px">${T("按 250 mL 做很顺滑。我把香蕉减少到 60 g，甜度更适合宝宝。", "The 250 mL batch was smooth. I reduced banana to 60 g for a less-sweet baby-friendly result.")}</p><div class="recipe-meta"><button class="chip" data-action="show-toast" data-message-zh="已点赞" data-message-en="Liked">${T("有帮助 36", "Helpful 36")}</button><button class="chip" data-action="show-toast" data-message-zh="举报入口已打开" data-message-en="Report options opened">${T("举报", "Report")}</button></div></article>
          <article class="card comment-card"><div class="comment-head"><div><h3>${T("Momcozy 官方", "Momcozy official")}</h3><p>${T("官方回复 · 昨天", "Official reply · Yesterday")}</p></div>${statusPill("官方", "Official", "info")}</div><p style="margin-top:10px;color:var(--foreground);font-size:10px;line-height:16px">${T("感谢分享。减少香蕉会降低自然甜度，也可能稍微改变稠度，请确保混合液仍低于 MAX FILL 线。", "Thanks for sharing. Less banana reduces natural sweetness and may slightly change consistency; keep the mixture below MAX FILL.")}</p></article>
        </div>
      </div>`,
  });
}

function renderShareResult() {
  return mobilePage({
    titleZh: "分享制作成果",
    titleEn: "Share your result",
    back: "remaining",
    body: `
      ${pageIntro("发布到社区", "Share to community", "把这次制作整理成一张成果卡", "Turn this batch into a result card", "发布前可以编辑文字，并选择是否显示成员与份量。", "Edit the text and choose whether to show the member and portion before posting.")}
      <article class="card" style="overflow:hidden"><div class="recipe-art berry" style="height:210px"></div><div class="card-pad"><p class="eyebrow" style="color:var(--colors-brands-family-700)">MADE WITH IM01</p><h2 style="margin:6px 0 0;font-family:var(--font-brand);font-size:25px;font-weight:400">${T("草莓酸奶冰淇淋", "Strawberry yogurt ice cream")}</h2><p style="margin:7px 0 0;color:var(--muted-foreground);font-size:10px;line-height:16px">${T("第一次就做出了细腻口感，250 mL 很适合两个人分享。", "Smooth on the first try, and 250 mL was perfect for sharing.")}</p><div class="recipe-meta"><span class="mini-badge">250 mL</span><span class="mini-badge">ICE CREAM</span><span class="mini-badge">${T("已隐藏成员", "Member hidden")}</span></div></div></article>
      <div class="form-grid section-block"><div class="field"><label>${T("分享文字", "Caption")}</label><textarea>${T("第一次就做出了细腻口感，250 mL 很适合两个人分享。", "Smooth on the first try, and 250 mL was perfect for sharing.")}</textarea></div></div>
      <div class="card card-pad section-block stack compact">${listRow("显示制作份量", "Show portion", "250 mL", "250 mL", "", T("显示", "On"))}${listRow("显示食用成员", "Show member", "保护家庭成员隐私", "Protect household privacy", "", T("隐藏", "Off"))}${listRow("允许评论", "Allow comments", "发布后可随时关闭", "Can be disabled later", "", T("允许", "On"))}</div>
      <div class="sticky-actions">${button("发布到社区", "Post to community", "community", "primary", true, `data-action="show-toast" data-message-zh="成果已发布到社区" data-message-en="Result posted to community"`)}</div>`,
  });
}

function renderPrivateRecipe() {
  return mobilePage({
    titleZh: "私有食谱",
    titleEn: "Private recipes",
    captionZh: "V1.5 · 仅自己可见",
    captionEn: "V1.5 · Private",
    back: contextualBack("mine"),
    right: `<button class="icon-button textual" type="button" data-route="recipe-submit">${T("投稿", "Submit")}</button>`,
    body: `
      ${pageIntro("个人配方", "Personal recipes", "保留最适合你家的版本", "Keep the version that works for your household", "可以复制官方食谱、从历史批次生成，或创建自己的调整。", "Copy an official recipe, create one from a previous batch, or save your own adjustments.")}
      <div class="stack">
        <article class="card order-card" data-route-card="recipe-detail" tabindex="0"><div class="order-head"><div><h3>${T("Mia 的低甜草莓酸奶冰淇淋", "Mia's less-sweet strawberry yogurt ice cream")}</h3><p>${T("源自官方 v2.3 · 香蕉调整为 60 g", "From official v2.3 · Banana adjusted to 60 g")}</p></div>${statusPill("私有", "Private", "info")}</div><div class="recipe-meta"><span class="mini-badge">250 mL</span><span class="mini-badge">Mia</span><span class="mini-badge">${T("复做 3 次", "Made 3 times")}</span></div></article>
        <article class="card order-card" data-route-card="recipe-detail" tabindex="0"><div class="order-head"><div><h3>${T("周末芒果椰乳", "Weekend mango coconut")}</h3><p>${T("源自 9 月 7 日历史批次", "Created from the Sep 7 batch")}</p></div>${statusPill("私有", "Private", "info")}</div><div class="recipe-meta"><span class="mini-badge">500 mL</span><span class="mini-badge">${T("家庭", "Family")}</span></div></article>
      </div>
      <div class="section-block">${sectionHeading("创建方式", "Create a recipe")}
        <div class="quick-grid"><article class="card quick-card" data-route-card="records" tabindex="0"><span class="quick-label">HISTORY</span><h3>${T("从历史批次创建", "From a batch")}</h3><p>${T("保留真实做过的用量", "Keep amounts you actually used")}</p></article><article class="card quick-card" data-route-card="recipes" tabindex="0"><span class="quick-label">COPY</span><h3>${T("复制官方食谱", "Copy official recipe")}</h3><p>${T("在副本中进行个人调整", "Make changes in your own copy")}</p></article></div>
      </div>`,
  });
}

function renderRecipeSubmit() {
  return mobilePage({
    titleZh: "原创食谱投稿",
    titleEn: "Submit a recipe",
    captionZh: "V1.5",
    captionEn: "V1.5",
    back: "community",
    body: `
      ${pageIntro("社区内容生态", "Community content", "提交一个可复现的原创食谱", "Submit a reproducible original recipe", "平台会进行结构审核与试做验证，审核通过后才会公开。", "The platform reviews the structure and validates it in a test kitchen before publishing.")}
      <div class="form-grid">
        <div class="field"><label>${T("食谱名称", "Recipe name")}</label><input value="${T("燕麦香蕉可可冰淇淋", "Oat banana cocoa ice cream")}" /></div>
        <div class="field"><label>${T("食谱介绍", "Description")}</label><textarea>${T("不额外加糖，用熟香蕉提供自然甜味。", "No added sugar; ripe banana provides natural sweetness.")}</textarea></div>
        <div class="field"><label>${T("适用程序", "Program")}</label><select><option>ICE CREAM</option><option>LITE ICE CREAM</option><option>SORBET</option></select></div>
        <div class="field"><label>${T("基础份量", "Base portion")}</label><select><option>250 mL</option><option>100 mL</option><option>500 mL</option></select></div>
      </div>
      <div class="section-block">${sectionHeading("结构完整度", "Submission completeness")}
        <div class="card card-pad stack compact">${listRow("食材与精确用量", "Ingredients and exact amounts", "4 项已填写", "4 items completed", "", statusPill("完成", "Complete", "success"))}${listRow("备料与制作步骤", "Prep and making steps", "5 步已填写", "5 steps completed", "", statusPill("完成", "Complete", "success"))}${listRow("过敏原与适用人群", "Allergens and suitability", "含燕麦、可可来源说明", "Oat and cocoa source notes included", "", statusPill("需复核", "Review", "warning"))}${listRow("成品图片", "Result photos", "2 张已添加", "2 photos added", "", statusPill("完成", "Complete", "success"))}</div>
      </div>
      <div class="alert info section-block"><strong>${T("投稿不等于立即公开", "Submission is not immediate publication")}</strong>${T("平台会检查食品安全、步骤可复现性、程序匹配和图片真实性。", "The platform reviews food safety, reproducibility, program fit, and image authenticity.")}</div>
      <div class="sticky-actions">${button("提交审核", "Submit for review", "submit-status", "primary", true)}</div>`,
  });
}

function renderSubmitStatus() {
  return mobilePage({
    titleZh: "投稿审核状态",
    titleEn: "Submission status",
    back: "recipe-submit",
    body: `
      <article class="card card-pad"><div class="row-between"><div><p class="eyebrow" style="color:var(--colors-brands-family-700)">${T("燕麦香蕉可可冰淇淋", "Oat banana cocoa ice cream")}</p><h2 style="margin:6px 0 0;font-family:var(--font-brand);font-size:25px;font-weight:400">${T("正在结构审核", "Structure review in progress")}</h2></div>${statusPill("审核中", "In review", "info")}</div><p style="margin:12px 0 0;color:var(--muted-foreground);font-size:10px;line-height:16px">${T("预计 2–3 个工作日完成首轮审核。", "The first review is estimated to take 2–3 business days.")}</p></article>
      <div class="section-block">${sectionHeading("审核流程", "Review process")}
        <div class="timeline"><div class="timeline-row"><h3>${T("已提交", "Submitted")}</h3><p>${T("今天 20:36 · 内容已锁定为投稿版本", "Today 8:36 PM · Submission version locked")}</p></div><div class="timeline-row"><h3>${T("结构与安全审核", "Structure & safety review")}</h3><p>${T("检查用量、过敏原、适用人群与步骤完整性。", "Reviewing amounts, allergens, suitability, and step completeness.")}</p></div><div class="timeline-row"><h3>${T("试做验证", "Test-kitchen validation")}</h3><p>${T("待结构审核通过后安排。", "Scheduled after structure approval.")}</p></div><div class="timeline-row"><h3>${T("发布或修改", "Publish or revise")}</h3><p>${T("通过后标注为社区验证食谱；如需修改会说明原因。", "Approved recipes are labeled community-tested; requested changes include reasons.")}</p></div></div>
      </div>
      <div class="alert info"><strong>${T("你仍可保留私有版本", "Your private version remains available")}</strong>${T("投稿副本和个人私有食谱相互独立，审核修改不会覆盖家庭使用版本。", "The submitted copy is separate from your private household version.")}</div>`,
  });
}

function renderAccessories() {
  return mobilePage({titleZh: "配件购买", titleEn: "Shop accessories", back: contextualBack("icecream-mine"), body: `${pageIntro("Momcozy", "Momcozy", "寻找适合的配件", "Find the right accessories", "前往 Momcozy 独立站查找 IM01 杯子、杯盖等配件。", "Find IM01 cups, lids, and other accessories on the Momcozy website.")}<div class="accessory-art" style="height:180px;border-radius:24px"></div><div class="card card-pad section-block"><h3>${T("在官网确认适配型号", "Check compatibility on the website")}</h3><p class="readable-copy">${T("购买、支付及订单查询在独立站完成。", "Purchases, payment, and order tracking take place on the website.")}</p></div><div class="sticky-actions"><a class="button primary full" href="https://momcozy.com/search?q=IM01&type=product" target="_blank" rel="noopener noreferrer">${T("前往 Momcozy 官网 ↗", "Visit Momcozy website ↗")}</a></div>`});
}

function renderAccessoryDetail() {
  return mobilePage({
    titleZh: "配件详情",
    titleEn: "Accessory detail",
    back: "accessories",
    body: `
      <div class="accessory-art" style="height:230px;border-radius:24px"></div>
      ${pageIntro("官方配件", "Official accessory", "IM01 额外搅拌杯", "IM01 extra pint cup", "多准备一个杯子，可同时安排不同口味或不同成员的批次。", "An extra cup helps schedule different flavors or household members.")}
      <div class="recipe-meta" style="margin-top:-5px"><span class="mini-badge">${T("适配 IM01", "Fits IM01")}</span><span class="mini-badge">${T("含密封杯盖", "Storage lid included")}</span><span class="mini-badge">${T("食品接触材质", "Food-contact material")}</span></div>
      <div class="section-block">${sectionHeading("使用场景", "Use cases")}
        <div class="card card-pad stack compact">${listRow("多个口味并行预冻", "Pre-freeze multiple flavors", "每个杯子仍需单独建立制作批次", "Each cup still needs its own batch record", "", "01")}${listRow("过敏原分杯管理", "Separate cups for allergen management", "不能替代彻底清洁与食品安全判断", "Does not replace thorough cleaning or safety judgment", "", "02")}${listRow("剩余食物储存", "Leftover storage", "使用密封杯盖并遵循安全储存建议", "Use the storage lid and follow safe-storage guidance", "", "03")}</div>
      </div>
      <div class="section-block">${sectionHeading("安装与维护", "Setup & care")}
        <div class="alert warning"><strong>${T("首次使用前清洗", "Wash before first use")}</strong>${T("检查杯体无裂纹、变形或异味。不要使用不适配 IM01 的杯体或杯盖。", "Check for cracks, deformation, or odor. Do not use cups or lids that are not compatible with IM01.")}</div>
      </div>
      <div class="sticky-actions"><div class="button-row">${button("查看订单", "View orders", "orders", "secondary", true)}${button("选择购买方式", "Choose purchase option", "orders", "primary", true, `data-action="show-toast" data-message-zh="购买方式选择已打开" data-message-en="Purchase options opened"`)}</div></div>`,
  });
}

function renderOrders() {
  return mobilePage({
    titleZh: "配件订单",
    titleEn: "Accessory orders",
    back: contextualBack("mine"),
    body: `
      <div class="chip-row" style="margin-top:4px"><button class="chip is-selected">${T("全部", "All")}</button><button class="chip">${T("配送中", "In delivery")}</button><button class="chip">${T("已完成", "Completed")}</button><button class="chip">${T("售后", "Service")}</button></div>
      <div class="section-block stack">
        <article class="card order-card" data-route-card="order-detail" tabindex="0"><div class="order-head"><div><h3>${T("IM01 额外搅拌杯 × 2", "IM01 extra pint cup × 2")}</h3><p>${T("订单 MC202609080126", "Order MC202609080126")}</p></div>${statusPill("配送中", "In delivery", "info")}</div><div class="task-meta"><div class="meta-item"><span>${T("最新物流", "Latest update")}</span><strong>${T("已到达深圳转运中心", "Arrived at Shenzhen hub")}</strong></div><div class="meta-item"><span>${T("预计送达", "Estimated delivery")}</span><strong>${T("9 月 10 日", "Sep 10")}</strong></div></div></article>
        <article class="card order-card" data-route-card="order-detail" tabindex="0"><div class="order-head"><div><h3>${T("密封杯盖 2 件装", "Storage lids · 2 pack")}</h3><p>${T("订单 MC202608180072", "Order MC202608180072")}</p></div>${statusPill("已完成", "Completed", "success")}</div><p>${T("8 月 21 日已签收", "Delivered Aug 21")}</p></article>
      </div>`,
  });
}

function renderOrderDetail() {
  return mobilePage({
    titleZh: "订单详情",
    titleEn: "Order detail",
    captionZh: "MC202609080126",
    captionEn: "MC202609080126",
    back: "orders",
    body: `
      <article class="card card-pad"><div class="row-between"><div><p class="eyebrow" style="color:var(--colors-brands-family-700)">${T("配送中", "In delivery")}</p><h2 style="margin:6px 0 0;font-family:var(--font-brand);font-size:25px;font-weight:400">${T("预计 9 月 10 日送达", "Estimated delivery September 10")}</h2></div>${statusPill("运输中", "In transit", "info")}</div></article>
      <div class="section-block">${sectionHeading("物流进度", "Delivery tracking")}
        <div class="timeline"><div class="timeline-row"><h3>${T("已到达深圳转运中心", "Arrived at Shenzhen hub")}</h3><p>${T("今天 15:42", "Today 3:42 PM")}</p></div><div class="timeline-row"><h3>${T("运输中", "In transit")}</h3><p>${T("今天 05:20 · 东莞", "Today 5:20 AM · Dongguan")}</p></div><div class="timeline-row"><h3>${T("商家已发货", "Shipped")}</h3><p>${T("9 月 8 日 18:08", "Sep 8 · 6:08 PM")}</p></div></div>
      </div>
      <div class="section-block">${sectionHeading("商品信息", "Items")}
        <div class="card card-pad"><div style="display:grid;grid-template-columns:72px 1fr;gap:12px"><div class="accessory-art" style="height:76px;border-radius:12px"></div><div><h3 style="margin:4px 0 0;font-size:12px">${T("IM01 额外搅拌杯", "IM01 extra pint cup")}</h3><p style="margin:4px 0 0;color:var(--muted-foreground);font-size:9px">${T("含密封杯盖 · 数量 2", "Storage lid included · Qty 2")}</p></div></div></div>
      </div>
      <div class="section-block">${sectionHeading("订单服务", "Order service")}
        <div class="button-row">${button("联系物流", "Contact carrier", "", "secondary", true, `data-action="show-toast" data-message-zh="物流联系入口已打开" data-message-en="Carrier contact opened"`)}${button("申请售后", "Request service", "contact", "ghost", true)}</div>
      </div>`,
  });
}

function renderMembers() {
  return mobilePage({titleZh: "家庭成员", titleEn: "Household members", back: "icecream-mine", body: `<p class="readable-copy">${T("管理食用成员与过敏原，用于制作前逐人核对。", "Manage household members and allergens for pre-batch review.")}</p><div class="stack">${state.memberProfiles.map((member) => `<article class="card choice-card" data-route-card="member-detail" data-member-id="${member.id}" tabindex="0"><span class="member-avatar">${escapeHtml(member.name.slice(0, 1))}</span><div><h3>${escapeHtml(member.name)}</h3><p>${T(`已记录 ${member.allergens.length} 项过敏原`, `${member.allergens.length} allergens recorded`)}</p></div><span class="chevron">›</span></article>`).join("")}</div><div class="sticky-actions">${button("添加家庭成员", "Add household member", "", "secondary", true, 'data-action="add-member"')}</div>`});
}

function renderMemberDetail() {
  const member = state.memberProfiles.find((profile) => profile.id === state.memberId) || {name: "", age: "2+", allergens: [], preference: ""};
  return mobilePage({titleZh: "成员饮食偏好", titleEn: "Member preferences", back: "members", body: `<div class="card card-pad form-grid"><div class="field"><label for="member-name">${T("姓名", "Name")}</label><input id="member-name" value="${escapeHtml(member.name)}" maxlength="24" /></div><div class="field"><label for="member-age">${T("年龄阶段", "Life stage")}</label><select id="member-age">${["0–6", "6–12", "12–24", "2+"].map((age) => `<option value="${age}" ${member.age === age ? "selected" : ""}>${age === "2+" ? T("2 岁以上", "2+ years") : age + T(" 个月", " months")}</option>`).join("")}</select></div></div><div class="section-block">${sectionHeading("已知过敏原", "Known allergens")}<div class="filter-options">${[["peanut", "花生", "Peanut"], ["dairy", "乳制品", "Dairy"], ["egg", "鸡蛋", "Egg"], ["soy", "大豆", "Soy"], ["oats", "燕麦", "Oats"]].map(([id, zh, en]) => `<label class="chip"><input type="checkbox" name="member-allergen" value="${id}" ${member.allergens.includes(id) ? "checked" : ""} /> ${T(zh, en)}</label>`).join("")}</div></div><div class="field section-block"><label for="member-preference">${T("饮食与口味偏好", "Diet and taste preferences")}</label><input id="member-preference" maxlength="120" value="${escapeHtml(member.preference)}" /></div><p class="readable-copy">${T("未勾选不代表确认无过敏风险，制作前仍需核对实际食材和包装。", "Unchecked items do not confirm an absence of allergy risk. Check actual ingredients and labels.")}</p><div class="sticky-actions">${button("保存成员偏好", "Save preferences", "", "primary", true, 'data-action="save-member"')}</div>`});
}

function renderPageMap() {
  const grouped = Object.keys(groups).map((group) => [group, routes.filter((item) => item.group === group)]).filter(([, items]) => items.length);
  return mobilePage({
    titleZh: "页面地图",
    titleEn: "Page map",
    back: "devices",
    body: `
      ${pageIntro("交付说明", "Delivery map", `${routes.length} 个页面与状态`, `${routes.length} screens and states`, "每项均对应功能框架节点；设置入口和设置页面全部排除。", "Every item maps to the functional framework; settings entry and settings screens are excluded.")}
      <div class="alert info"><strong>${T("版本边界", "Version boundary")}</strong>${T("V1.0–V1.5 页面均不连接设备；V2.0 的连接、实时状态、日志与 OTA 未作为当前页面能力设计。", "V1.0–V1.5 screens are not connected to the device. V2.0 connectivity, live status, logs, and OTA are not designed as current capabilities.")}</div>
      <div class="section-block">${grouped.map(([group, items]) => `<section class="map-section"><h3>${T(...groups[group])}</h3><div class="card card-pad">${items.map((item) => `<div class="map-item" data-route-card="${item.id}" tabindex="0"><span>${String(routes.indexOf(item) + 1).padStart(2, "0")}</span><strong>${T(item.zh, item.en)}</strong><span class="mini-badge">${item.version}</span></div>`).join("")}</div></section>`).join("")}</div>`,
  });
}

const renderers = {
  home: renderHome,
  devices: renderDevices,
  "devices-empty": renderDevicesEmpty,
  "device-product": renderDeviceProduct,
  "add-device": renderAddDevice,
  "add-icecream": renderAddIcecream,
  community: renderCommunity,
  mine: renderMine,
  icecream: renderIcecream,
  "icecream-mine": renderIcecreamMine,
  tasks: renderTasks,
  "task-detail": renderTaskDetail,
  cups: renderCups,
  "cup-timer": renderCupTimer,
  "cup-detail": renderCupDetail,
  "cup-edit": renderCupEdit,
  recipes: renderRecipes,
  "recipe-results": renderRecipeResults,
  "recipe-search": renderRecipeSearch,
  "recipe-filter": renderRecipeFilter,
  "recipe-detail": renderRecipeDetail,
  favorites: renderFavorites,
  recent: renderRecent,
  "make-recipe": renderMvpChooseRecipe,
  "make-portion": renderMakePortion,
  "freeze-confirm": renderMvpPrepFreeze,
  "freeze-countdown": renderMvpBatchStatus,
  "machine-program": renderMvpMachineGuide,
  records: renderRecords,
  "record-detail": renderRecordDetail,
  support: renderSupport,
  "support-guide": renderSupportGuide,
  "support-ai": renderSupportAI,
  parts: () => { supportGuideIndex = 1; return renderSupportGuide(); },
  install: () => { supportGuideIndex = 4; return renderSupportGuide(); },
  programs: () => { supportGuideIndex = 5; return renderSupportGuide(); },
  faq: () => { supportGuideIndex = 6; return renderSupportGuide(); },
  risk: renderRisk,
  contact: renderContact,
  comments: renderComments,
  "share-result": renderShareResult,
  "private-recipe": renderPrivateRecipe,
  "recipe-submit": renderRecipeSubmit,
  "submit-status": renderSubmitStatus,
  accessories: renderAccessories,
  "accessory-detail": renderAccessoryDetail,
  orders: renderOrders,
  "order-detail": renderOrderDetail,
  "page-map": renderPageMap,
};

function currentRoute() {
  return routes.find((item) => item.id === state.route) || routes.find((item) => item.id === "devices");
}

function renderCatalog() {
  const versions = [["all", "全部", "All"], ["APP", "APP", "APP"], ["V1.0", "V1.0", "V1.0"], ["V1.1", "V1.1", "V1.1"], ["V1.5", "V1.5", "V1.5"]];
  versionFilter.innerHTML = versions.map(([value, zh, en]) => `<button type="button" class="filter-chip ${state.version === value ? "is-active" : ""}" data-action="version" data-value="${value}">${T(zh, en)}</button>`).join("");

  const query = state.search.trim().toLowerCase();
  catalogNav.innerHTML = Object.entries(groups).map(([group, label]) => {
    const items = routes.filter((item) => item.group === group).filter((item) => state.version === "all" || item.version === state.version).filter((item) => !query || `${item.zh} ${item.en} ${item.nodeZh} ${item.nodeEn}`.toLowerCase().includes(query));
    if (!items.length) return "";
    return `<section class="catalog-group"><div class="catalog-group-title"><span>${T(...label)}</span><span>${items.length}</span></div>${items.map((item) => `<button type="button" class="catalog-link ${item.id === state.route ? "is-active" : ""}" data-route="${item.id}"><span class="catalog-index">${String(routes.indexOf(item) + 1).padStart(2, "0")}</span><strong>${T(item.zh, item.en)}</strong><small>${item.version}</small></button>`).join("")}</section>`;
  }).join("");
}

function renderRouteMeta() {
  const item = currentRoute();
  document.querySelector("#route-group").textContent = T(...groups[item.group]);
  document.querySelector("#route-title").textContent = T(item.zh, item.en);
  document.querySelector("#route-node").textContent = T(item.nodeZh, item.nodeEn);
  document.querySelector("#route-version").textContent = item.version;
  document.querySelector("#route-index").textContent = `${String(routes.indexOf(item) + 1).padStart(2, "0")} / ${String(routes.length).padStart(2, "0")}`;
  document.querySelector("#route-note").textContent = T(item.noteZh, item.noteEn);
  document.title = `${T(item.zh, item.en)} · Momcozy IM01`;
  renderLogicPanel();
}

function renderLogicPanel() {
  const panel = document.querySelector("#logic-panel");
  const item = currentRoute();
  const cupStates = [
    ["空闲", "Available", "可创建新批次", "A new batch can be created"],
    ["备料中", "Preparing", "已确认食谱、份量和杯子，尚未入冻", "Recipe, portion, and cup confirmed; not frozen yet"],
    ["冷冻中", "Freezing", "用户确认入冻后开始 24 小时倒计时", "A 24-hour countdown starts after the user confirms freezing"],
    ["预计可制作", "Estimated ready", "倒计时结束，可进入机器操作", "Countdown finished; machine operation can begin"],
    ["旧批次", "Legacy batch", "旧版制作与余量状态只读保留", "Older result and leftover states remain readable"],
  ];
  const cupTransitions = [
    ["新增制作并点击下一步：空闲 → 备料中", "Start a batch and tap Next: Available → Preparing"],
    ["确认已入冻：备料中 → 冷冻中 → 预计可制作", "Confirm freezing: Preparing → Freezing → Estimated ready"],
    ["查看上机指引：预计可制作状态不变", "View machine guide: Estimated ready remains unchanged"],
    ["结束引导：只保存查看记录并释放 APP 内的任务占位", "Finish guide: save only a guide-viewed record and release the app task"],
  ];
  const detailedLogic = {
    icecream: [
      ["杯子状态", "CUP STATES", cupStates.map(([zh, en, detailZh, detailEn]) => [`${zh}：${detailZh}`, `${en}: ${detailEn}`])],
      ["状态流转", "STATE TRANSITIONS", cupTransitions],
      ["核心规则", "CORE RULES", [["每个杯子同一时间只保留一个活动批次，历史记录独立保留。", "Each cup has one active batch at a time; history remains separate."], ["状态来自用户操作和时间推算，不代表机器实时状态。", "States come from user actions and time estimates, not live machine data."]]],
    ],
    cups: [
      ["管理对象", "MANAGED OBJECTS", [["管理 CUP 1–3 的名称、识别颜色和备注。", "Manage the name, identification color, and note for CUP 1–3."], ["列表同时读取每个杯子的当前批次状态与下一步动作。", "The list also reads each cup's active batch state and next action."]]],
      ["杯子状态", "CUP STATES", cupStates.map(([zh, en, detailZh, detailEn]) => [`${zh}：${detailZh}`, `${en}: ${detailEn}`])],
      ["限制", "LIMITS", [["杯子资料页不能直接修改制作状态、余量或历史。", "Cup profile editing cannot directly change batch state, leftovers, or history."]]],
    ],
    "cup-timer": [
      ["计时规则", "TIMER RULES", [["每个杯子可单独计时，默认 24 小时，可修改为 1 分钟到 168 小时。", "Each cup has an independent timer, defaulting to 24 hours and adjustable from 1 minute to 168 hours."], ["点击完成后返回来源页；对应杯子只显示手动计时，不显示食谱名称。", "Done returns to the previous page; the selected cup shows the manual timer without a recipe name."], ["修改时长沿用原开始时间；重新开始则从现在起计时。", "Editing duration keeps the original start time; restarting begins now."]]],
      ["状态边界", "STATUS BOUNDARY", [["计时结束仅提醒检查实际食材，不更改杯子制作状态。", "Finishing the timer only prompts a physical check and never changes the cup's making status."]]],
    ],
    "cup-detail": [
      ["信息来源", "DATA SOURCES", [["基础资料来自杯子档案；当前状态来自 cupRuntime；历史记录按 cupId 关联。", "Profile data comes from the cup record, current state from cupRuntime, and history is linked by cupId."]]],
      ["动作规则", "ACTION RULES", [["当前状态决定入口：继续备料、查看倒计时或上机指引；旧记录只读保留。", "Current state opens prep, countdown, or machine guidance; legacy records remain read-only."], ["已有任务的杯子如需新建制作，先确认替换，原批次记录保留。", "Starting a new batch on an occupied cup requires confirmation; its old record remains."]]],
    ],
    "cup-edit": [
      ["允许修改", "EDITABLE", [["杯子名称、识别颜色、使用备注。", "Cup name, identification color, and usage note."]]],
      ["禁止修改", "NOT EDITABLE", [["当前制作状态、活动批次、制作历史、余量和建议食用期限。", "Current making state, active batch, history, leftovers, and suggested use-by time."]]],
    ],
    tasks: [
      ["排序逻辑", "SORTING", [["预计可制作的杯子优先，其次是备料与冷冻中的杯子。", "Estimated-ready cups appear first, followed by preparing and freezing cups."], ["旧批次状态保留，但不再提示补录结果或余量。", "Older batch states remain without prompting result or leftover entry."]]],
      ["任务来源", "TASK SOURCE", [["每个非空闲杯子的 cupRuntime 对应一个活动任务。", "Each non-available cupRuntime corresponds to one active task."]]],
    ],
    "task-detail": [
      ["批次快照", "BATCH SNAPSHOT", [["固定展示当前批次的食谱、份量、杯子和创建时间。", "Shows the current batch's recipe, portion, cup, and creation time."], ["下一步动作由杯子当前状态决定。", "The cup's current state determines the next action."]]],
      ["数据边界", "DATA BOUNDARY", [["时间和状态均为用户记录或推算，不读取机器日志。", "Timing and status are user-recorded or estimated; machine logs are not read."]]],
    ],
    "make-recipe": [
      ["选择食谱", "CHOOSE RECIPE", [["搜索入口与食谱中心一致，点击进入搜索页，查看详情后选择食谱并返回。", "Search works like the recipe center: open search, view details, then choose a recipe and return."], ["页面只提示食谱列出的潜在过敏原，不记录成员档案，也不判断是否适合个人。", "The page only shows listed potential allergens; it does not store member profiles or judge personal suitability."]]],
    ],
    "make-portion": [
      ["创建批次", "CREATE BATCH", [["选择份量后立即更新下方食材用量，再确认实体杯。", "Changing portion immediately updates ingredient amounts below; then confirm the physical cup."], ["点击下一步后写入当前杯子的批次快照，并将状态改为备料中。", "Next writes the batch snapshot to the selected cup and changes its state to Preparing."]]],
      ["选择规则", "SELECTION RULES", [["APP 杯子状态只作参考，不强制阻止用户选择手中的实体杯。", "The app's cup state is reference only and does not block selection of the physical cup in hand."], ["份量决定食材用量和热量换算。", "Portion controls ingredient and calorie scaling."]]],
    ],
    "freeze-confirm": [
      ["状态流转", "STATE TRANSITION", [["进入页面时杯子保持备料中；点击“已入冻”后改为冷冻中。", "The cup remains Preparing on entry and changes to Freezing after confirming it is in the freezer."], ["启动 10 秒演示倒计时；实际冷冻仍需至少 24 小时，不读取机器或冰箱实时数据。", "Starts a 10-second demo countdown; actual freezing still requires at least 24 hours. No live machine or freezer data is read."]]],
      ["记录范围", "RECORDING SCOPE", [["保存实际入冻日期与时间，可补录或修改；倒计时在刷新后恢复，结束仅变为预计可制作。", "Save or edit the actual freezer date and time. The countdown survives refresh and ends at Estimated ready."], ["倒计时结束后收起备料教程，并在倒计时下方直接展开上机步骤；用户仍需人工确认实际冻实。", "When the countdown ends, collapse prep and show machine steps below it; the user still checks that the mixture is fully frozen."]]],
    ],
    "freeze-countdown": [
      ["倒计时逻辑", "COUNTDOWN LOGIC", [["根据用户确认的入冻时间推算剩余时间。", "Remaining time is estimated from the user-confirmed freeze time."], ["倒计时结束后状态从冷冻中变为预计可制作。", "When the countdown ends, state changes from Freezing to Estimated ready."]]],
      ["限制", "LIMITS", [["倒计时不是冰箱温度或杯体状态检测，用户仍需确认实际冷冻情况。", "The countdown does not detect freezer temperature or cup condition; the user must verify actual freezing."]]],
    ],
    "machine-program": [
      ["开始条件", "START CONDITION", [["杯子达到预计可制作后，用户取出并人工核对 CUP 编号。", "After the cup is estimated ready, the user removes it and manually checks the CUP number."], ["用户在实体机器安装部件、选择程序并按键启动，APP 不启动机器。", "The user assembles parts, selects the program, and presses the physical machine button; the app does not start it."]]],
      ["引导结束", "GUIDE EXIT", [["查看教程不会推断机器已完成；结束引导仅归档查看记录并释放任务占位。", "Viewing the guide does not imply machine completion; finishing it only archives a guide-viewed record and releases the task."], ["不再要求选择已完成、未完成、取消或填写余量。", "No completed, incomplete, cancelled, or leftovers form is required."]]],
    ],
  };
  const simpleLogic = {
    "devices-empty": [["按 Figma 1094:27064 还原设备空态；预览入口不修改本地业务数据。", "Recreates Figma 1094:27064 without changing saved business data."], ["添加按钮进入设备分类；推荐卡片可横向滚动、键盘切换，并打开产品介绍；底部导航可点击。", "Add opens the catalog; scroll or use arrow keys to explore product cards and open introductions. Bottom navigation is interactive."]],
    "device-product": [["查看所选设备的产品介绍，返回保留来源页面。", "Explore the selected product and return to its originating page."], ["IM01 使用独立介绍与确认添加流程，其他设备不模拟绑定成功。", "IM01 has a separate introduction and add flow; other devices do not simulate successful pairing."]],
    "add-device": [["点击 IM01 卡片进入功能介绍页，点击卡片本身不添加设备。", "The IM01 card opens its introduction without adding the device."], ["保留原有设备分类，新增冰淇淋机入口。", "Preserve existing device categories and add the ice cream maker entry."]],
    "add-icecream": [["展示食谱、制作记录和杯子管理功能，确认添加后进入设备列表。", "Introduce recipes, batch logs, and cup management; confirmation adds the device and opens the device list."], ["已添加时查看现有设备；不配网、不绑定，不读取机器状态。", "Already-added devices reuse the existing entry. No pairing, binding, or machine-state reading."]],
    home: [["聚合跨设备提醒、最近任务和内容入口；点击卡片后进入对应业务页面。", "Aggregates cross-device reminders, recent tasks, and content entries; cards open the related flow."], ["首页不直接修改 IM01 杯子或批次状态。", "Home does not directly change IM01 cup or batch state."]],
    devices: [["添加 IM01 后，设备卡读取已保存杯子的记录，汇总杯子数量和状态。", "After adding IM01, the card summarizes saved cups and their states."], ["点击 IM01 卡片进入设备详情；非联网设备不展示在线、连接或实时进度。", "The IM01 card opens device detail; the offline device shows no online, connection, or live-progress state."]],
    community: [["承接食谱评论、制作成果和原创投稿，内容由用户主动发布。", "Hosts recipe comments, making results, and original submissions initiated by users."], ["评论可点赞、举报和官方回复；投稿需经过审核后公开。", "Comments support likes, reports, and official replies; submissions require review before publication."]],
    mine: [["聚合 Momcozy 全局个人资料、家庭成员、设备资产和服务入口。", "Aggregates global Momcozy profile, household, device assets, and service entries."], ["IM01 专属资产进入冰淇淋机个人空间管理，避免与全局资产混用。", "IM01-specific assets are managed in the ice cream maker space rather than mixed with global assets."]],
    "icecream-mine": [["只聚合 IM01 的杯子、制作记录、收藏、最近查看和配件订单。", "Aggregates only IM01 cups, records, favorites, recents, and accessory orders."], ["所有入口复用对应业务页，不在个人空间内复制编辑逻辑。", "Entries reuse their business screens instead of duplicating editing logic here."]],
    recipes: [["按推荐、专题和分类组织食谱，最终都进入统一食谱详情。", "Organizes recipes by recommendations, collections, and categories, all leading to one detail model."], ["搜索、筛选、收藏和最近查看是不同入口，共用同一食谱数据。", "Search, filters, favorites, and recents are separate entries over the same recipe data."]],
    "recipe-results": [["搜索词匹配名称、食材或标签，再叠加饮食偏好与程序筛选；数量按实际结果显示。", "Match names, ingredients, or tags, then filter dietary preferences and programs; counts reflect actual matches."], ["点击食谱进入对应详情，不改变当前制作选择。", "Opening a result shows that recipe without changing the batch selection."]],
    "recipe-search": [["空输入展示历史搜索与食材建议；输入时实时联想，点击建议或提交后展示食谱结果。", "Shows recent searches and ingredients when empty, live suggestions while typing, and results after selection or submission."], ["历史按最近使用去重，最多 8 条，支持逐条删除和清空全部；输入过程不记录，也不改变制作选择。", "Keeps up to 8 unique recent searches with individual deletion and clear all; typing does not save history or change the making selection."]],
    "recipe-filter": [["筛选饮食偏好和机器程序；不同类别取交集，同类程序取并集。份量在选择食谱后调整。", "Filter dietary preferences and machine programs. Combine categories and match any selected program; adjust portions after choosing."], ["潜在过敏原只在食谱详情和制作页提示，不作为筛选条件。", "Potential allergens are shown in recipe details and making pages, not used as filters."]],
    "recipe-detail": [["份量切换同步换算食材用量；详情固定展示潜在过敏原、步骤、冷冻时间和机器程序。", "Changing portion recalculates ingredients; detail shows potential allergens, steps, freeze time, and machine program."], ["点击开始制作后把当前食谱带入第 1 步，再确认份量和杯子。", "Start making carries the recipe into Step 1, followed by portion and cup confirmation."], ["过敏原提示不能替代包装标签和交叉接触核对。", "Allergen guidance does not replace label and cross-contact checks."]],
    favorites: [["只展示用户主动收藏的食谱；取消收藏后从列表移除。", "Shows only user-saved recipes; removing a favorite removes it from the list."], ["收藏不创建制作批次，开始制作仍需进入确认页。", "Saving a recipe does not create a batch; making still begins from confirmation."]],
    recent: [["按最近打开食谱详情的时间倒序排列。", "Orders recipes by most recent detail-page view."], ["最近查看用于快速返回，不等于收藏或制作记录。", "Recents provide quick return and are neither favorites nor making records."]],
    records: [["展示已结束引导的参考记录与旧制作记录，按时间倒序排列。", "Shows finished guide references and older making records in reverse chronological order."], ["旧结果与余量只读保留，不再要求新用户登记。", "Older results and leftovers remain readable, with no new logging required."]],
    "record-detail": [["新记录仅保存食谱、份量、杯子与指引查看时间，不推断机器结果。", "New records keep the recipe, portion, cup, and guide-viewed time without inferring a machine result."], ["旧记录详情只读；后续食谱或杯子资料变化不回写旧记录。", "Older details remain read-only; later recipe or cup edits do not rewrite them."]],
    support: [["目录条目进入统一步骤详情，展示操作示意、如何操作与注意事项。", "Directory items open a shared step-detail layout with illustrations, instructions, and precautions."], ["目录底部与详情右上角可进入 Ask CozyAI；当前为本地问答演示。", "Ask CozyAI is available at the bottom of the directory and top right of each guide; Q&A is a local demo."]],
    "support-guide": [["步骤详情的两项说明可独立展开或收起；返回后回到帮助目录。", "The two detail sections expand independently; Back returns to the help directory."], ["右上角 Ask CozyAI 打开设备问答演示，不启动或控制机器。", "Ask CozyAI opens the device Q&A demo without starting or controlling the machine."]],
    "support-ai": [["支持输入问题和查看相关操作指引，使用本地示例回答，未接入外部 AI 服务。", "Accepts questions and links to relevant guides using local example answers; no external AI service is connected."], ["问答不读取或修改当前制作任务与历史记录。", "Q&A does not read or modify active batches or historical records."]],
    parts: [["用名称和示意位置区分主机、杯盖、刀轴、搅拌刀和杯子。", "Distinguishes the unit, lids, spindle, paddle, and cup by name and illustrated position."], ["部件识别只提供认知，不代表安装已经正确完成。", "Part identification provides recognition, not confirmation of correct assembly."]],
    install: [["按装刀、放杯、锁盖和安装机头的顺序展示，每步强调到位检查。", "Shows paddle, cup, lid, and head assembly in order, with a fit check at each step."], ["安装由用户在实体机器完成，APP 不检测锁定状态。", "Assembly is completed physically; the app does not detect lock state."]],
    programs: [["解释 8 个程序的适用食材、份量选择、运行方式和暂停规则。", "Explains suitable ingredients, portions, operation, and pause behavior for eight programs."], ["用户必须在机器面板选择程序并按键启动。", "The user must select the program and start it on the machine panel."]],
    cleaning: [["区分自清洁、手洗和洗碗机适用部件，并提示拆卸和完全晾干。", "Distinguishes self-clean, hand wash, and dishwasher-safe parts, including disassembly and drying."], ["为过敏成员制作前需处理食品接触面的交叉接触风险。", "Food-contact surfaces require cross-contact handling before making for an allergic member."]],
    faq: [["用户先选择错误码或问题现象，再展示可能原因和逐步处理方式。", "The user selects an error code or symptom before seeing causes and step-by-step handling."], ["无法解决或涉及安全风险时转入停止使用与售后流程。", "Unresolved or safety-related issues route to stop-use and service flows."]],
    risk: [["覆盖冒烟、异常过热、异味、漏液和部件损坏等高风险情况。", "Covers smoke, abnormal heat, odor, leakage, and damaged parts."], ["核心动作是立即停止操作、断电并联系售后，不提供继续运行建议。", "The required action is to stop, power off, and contact service, never continue operating."]],
    contact: [["收集问题类型、机型和必要描述后进入人工支持。", "Collects issue type, model, and necessary description before human support."], ["不自动上传机器日志，因为 IM01 不联网且没有远程诊断数据。", "No machine logs are uploaded because IM01 is offline and has no remote diagnostics."]],
    comments: [["评论对象绑定具体食谱，包含评分、文字、点赞、举报和官方回复。", "Comments attach to a specific recipe and include rating, text, likes, reports, and official replies."], ["举报进入平台治理流程，不直接删除其他用户内容。", "Reports enter moderation and do not directly delete another user's content."]],
    "share-result": [["从已完成批次带入食谱、成品和制作信息，用户可编辑后分享。", "Carries recipe, result, and making information from a completed batch for user editing before sharing."], ["分享不会修改原制作记录或杯子状态。", "Sharing does not change the original record or cup state."]],
    "private-recipe": [["从历史批次复制食谱快照，允许用户调整为仅自己可见的个人版本。", "Copies a historical recipe snapshot into an editable private version."], ["私有食谱与平台公开食谱分开保存，不自动进入投稿。", "Private recipes remain separate from public recipes and are not automatically submitted."]],
    "recipe-submit": [["结构化填写名称、食材、步骤、程序、份量和安全信息后提交审核。", "Submits structured name, ingredients, steps, program, portion, and safety information for review."], ["提交后内容不可直接公开，需经过平台审核和试做验证。", "Submission is not immediately public and requires review and test-kitchen validation."]],
    "submit-status": [["按已提交、审核中、需修改、试做验证和已发布展示进度。", "Shows submitted, under review, revision needed, test validation, and published stages."], ["审核反馈只影响投稿版本，不改动用户原私有食谱。", "Review feedback affects the submission version, not the user's original private recipe."]],
    accessories: [["V1.0 通过独立站搜索入口查找 IM01 配件，商品适配和库存以官网为准。", "V1.0 links to the website search for IM01 accessories; check compatibility and availability there."], ["购买、支付与订单查询在独立站完成，App 不创建订单。", "Purchases, payments, and orders stay on the website; the app does not create an order."]],
    "accessory-detail": [["展示适配机型、规格、包含物、安装方式和使用注意事项。", "Shows compatible models, specifications, package contents, installation, and care notes."], ["购买入口创建配件订单，与制作批次数据独立。", "Purchase creates an accessory order independent of making-batch data."]],
    orders: [["按订单状态查看待发货、配送中、已完成和售后订单。", "Shows pending shipment, in delivery, completed, and service orders by status."], ["订单状态来自交易与物流系统，不来自 IM01 设备。", "Order status comes from commerce and logistics systems, not the IM01 device."]],
    "order-detail": [["聚合商品、数量、支付、物流节点、预计送达和售后入口。", "Aggregates items, quantity, payment, tracking events, estimated delivery, and service entry."], ["物流更新不改变杯子档案，收到配件后由用户自行管理。", "Delivery updates do not change cup profiles; users manage accessories after receipt."]],
    "page-map": [["按页面组列出全部路由、版本和入口关系，用于核对交付范围。", "Lists all routes, versions, and entry relationships by group to verify delivery scope."], ["页面地图只描述原型结构，不代表所有版本能力已经上线。", "The map describes prototype structure and does not mean every version is released."]],
  };
  const rules = {
    app: ["一级页面负责聚合入口与提醒，不承载 IM01 的具体制作操作。", "Top-level screens aggregate entries and reminders rather than detailed IM01 making actions."],
    device: ["所有杯子与任务状态统一读取用户记录；状态决定下一步入口，APP 信息仅供参考。", "Cup and task states come from user records. State determines the next action, and app information is reference only."],
    recipe: ["食谱内容支持查找与筛选；过敏原仅作提示，仍需用户核对包装与交叉接触风险。", "Recipes support discovery and filters; allergen information is a notice only, and users must still verify labels and cross-contact risks."],
    making: ["记录入冻时间后查看机器操作；APP 不要求登记机器结果或余量，也不读取实时进度。", "After recording freezer time, view machine guidance. The app asks for no machine result or leftovers and reads no live progress."],
    record: ["新记录仅保存指引查看快照；旧结果与余量记录继续只读保留。", "New records keep guide-viewing snapshots only; older results and leftovers remain read-only."],
    support: ["帮助内容用于识别、安装、操作和排查；出现异常过热、异味或损伤时必须停止使用并联系售后。", "Help covers identification, assembly, operation, and troubleshooting; overheating, odor, or damage requires stopping use and contacting support."],
    community: ["分享与投稿基于用户主动操作，内容需经过举报、审核和平台治理机制。", "Sharing and submissions are user-initiated and governed through reporting, review, and moderation."],
    accessory: ["配件信息以 IM01 适配关系为核心，订单页只展示购买、物流与售后状态。", "Accessory information centers on IM01 compatibility, while order screens cover purchase, delivery, and service status."],
    mine: ["当前 1.0 不展示家庭成员档案；旧本地数据不删除，也不参与新制作流程。", "The current 1.0 does not show household profiles; older local data is retained but not used in new making flows."],
    delivery: ["页面地图用于核对页面范围、入口关系和版本边界，不代表新增产品能力。", "The page map verifies screen scope, entry relationships, and version boundaries without adding product capabilities."],
  };
  panel.hidden = false;
  const detailedSections = detailedLogic[item.id] || (simpleLogic[item.id] ? [["核心机制", "CORE MECHANISM", simpleLogic[item.id]]] : null);
  if (detailedSections) {
    panel.innerHTML = `
      <div class="logic-panel-header"><h3>${T("页面核心逻辑", "Core page logic")}</h3></div>
      <div class="logic-detail-list">${detailedSections.map(([titleZh, titleEn, bullets]) => `<section class="logic-section"><span>${T(titleZh, titleEn)}</span><ul>${bullets.map(([zh, en]) => `<li>${T(zh, en)}</li>`).join("")}</ul></section>`).join("")}</div>`;
    return;
  }
  panel.innerHTML = `
    <div class="logic-panel-header">
      <h3>${T("页面核心逻辑", "Core page logic")}</h3>
    </div>
    <section class="logic-section">
      <span>${T("核心目标", "CORE GOAL")}</span>
      <p>${T(item.noteZh, item.noteEn)}</p>
    </section>
    <section class="logic-section">
      <span>${T("核心内容", "KEY CONTENT")}</span>
      <ul><li>${T(item.noteZh, item.noteEn)}</li></ul>
    </section>
    <section class="logic-section logic-rule">
      <span>${T("关键规则", "KEY RULE")}</span>
      <p>${T(...rules[item.group])}</p>
    </section>`;
}

function renderControls() {
  const themeToggle = document.querySelector("#theme-toggle");
  const languageToggle = document.querySelector("#language-toggle");
  themeToggle.textContent = state.theme === "light" ? T("深色", "Dark") : T("浅色", "Light");
  themeToggle.setAttribute("aria-label", T("切换深浅色模式", "Toggle color mode"));
  themeToggle.title = T("切换深浅色模式", "Toggle color mode");
  languageToggle.textContent = state.lang === "zh" ? "EN" : "中";
  languageToggle.setAttribute("aria-label", state.lang === "zh" ? "Switch to English" : "切换为中文");
  languageToggle.title = state.lang === "zh" ? "Switch to English" : "切换为中文";
  pageSearch.placeholder = T("输入页面或功能", "Search screens or features");
  pageSearch.parentElement.querySelector("span").textContent = T("页面搜索", "Screen search");
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.documentElement.classList.toggle("dark", state.theme === "dark");
}

function render() {
  pendingBatchReplacement = null;
  replacementTrigger = null;
  if (state.route === "task-detail") state.route = cupTarget();
  if (!renderers[state.route]) state.route = "devices";
  const returningToBatch = lastRenderedRoute === "make-recipe"
    || lastRenderedRoute === "make-portion"
    || lastRenderedRoute === "freeze-confirm"
    || (lastRenderedRoute === "recipe-detail" && (state.recipeOrigin === "make-recipe" || state.recipeSearchOrigin === "make-recipe"))
    || (navigationRestoring && navigationCurrent?.route === "make-recipe");
  if (state.route === "make-recipe" && !returningToBatch && !navigationRestoring) {
    state.cup = Object.keys(CUP_DEFINITIONS).find((id) => getCupRuntime(id).status === "available") || state.cup;
  }
  lastRenderedRoute = state.route;
  renderControls();
  renderCatalog();
  renderRouteMeta();
  app.innerHTML = renderers[state.route]();
  const promoTrack = app.querySelector(".device-promo-track");
  if (promoTrack) {
    promoTrack.scrollLeft = 196;
    promoTrack.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      promoTrack.scrollBy({ left: event.key === "ArrowRight" ? 196 : -196, behavior: "smooth" });
    });
  }
  const cupTrack = app.querySelector("#overview-cups");
  if (cupTrack) {
    const updateCupArrows = () => {
      if (!cupTrack.isConnected) return;
      const previous = app.querySelector('[data-cup-direction="-1"]');
      const next = app.querySelector('[data-cup-direction="1"]');
      if (!previous || !next) return;
      previous.disabled = cupTrack.scrollLeft <= 2;
      next.disabled = cupTrack.scrollLeft >= cupTrack.scrollWidth - cupTrack.clientWidth - 2;
    };
    cupTrack.addEventListener("scroll", updateCupArrows, {passive: true});
    requestAnimationFrame(updateCupArrows);
  }
  renderLogicPanel();
  app.querySelector(".mobile-scroll")?.scrollTo(0, 0);
  if (navigationRestoring) app.querySelector(".mobile-scroll")?.scrollTo(0, navigationCurrent?.scrollTop || 0);
  if (timerCupToReveal && cupTrack) {
    const card = [...cupTrack.querySelectorAll(".cup-card")].find((item) => item.dataset.cup === timerCupToReveal);
    const scroll = app.querySelector(".mobile-scroll");
    if (card && scroll) {
      cupTrack.scrollLeft += card.getBoundingClientRect().left - cupTrack.getBoundingClientRect().left - 8;
      scroll.scrollTop += card.getBoundingClientRect().top - scroll.getBoundingClientRect().top - 16;
    }
  }
  timerCupToReveal = null;
  navigationRestoring = false;
  navigationCurrent = navigationFrame();
  saveNavigation();
}

function navigationFrame() {
  return {
    route: state.route,
    cup: state.cup,
    recordId: state.recordId,
    recordStep: state.recordStep,
    detailRecipeIndex: state.detailRecipeIndex,
    recipeOrigin: state.recipeOrigin,
    recipeSearchOrigin: state.recipeSearchOrigin,
    supportGuideIndex,
    scrollTop: app.querySelector(".mobile-scroll")?.scrollTop || 0,
  };
}

function saveNavigation() {
  try {
    sessionStorage.setItem(`${STORAGE_KEY}-navigation`, JSON.stringify({ current: navigationCurrent, trail: navigationTrail }));
  } catch {}
}

function returnToPrevious(fallback) {
  const previous = navigationTrail.pop();
  if (!previous || !renderers[previous.route]) {
    navigationTrail = [];
    navigationCurrent = null;
    navigate(fallback);
    return;
  }
  for (const key of ["cup", "recordId", "recordStep", "detailRecipeIndex", "recipeOrigin", "recipeSearchOrigin"]) {
    if (previous[key] !== undefined && (key !== "cup" || CUP_DEFINITIONS[previous.cup])) state[key] = previous[key];
  }
  supportGuideIndex = previous.supportGuideIndex ?? 0;
  navigationCurrent = previous;
  navigationRestoring = true;
  state.route = previous.route;
  saveState();
  if (window.location.hash.slice(1) !== state.route) window.location.hash = state.route;
  else render();
}

function navigate(target) {
  if (target === "task-detail") target = cupTarget();
  if (!renderers[target]) return;
  if (target === "recipe-search" && target !== state.route) {
    if (state.route !== "recipe-results") state.recipeSearchOrigin = state.route;
    state.recipeSearchDraft = state.route === "make-recipe" ? "" : state.recipeQuery;
    state.recipeHistoryEditing = false;
  }
  if (target === "recipes") state.recipeSearchOrigin = "recipes";
  if (target !== state.route) {
    const previousIndex = target === "support-guide" ? -1 : navigationTrail.findLastIndex((entry) => entry.route === target);
    if (["home", "devices", "community", "mine"].includes(target)) navigationTrail = [];
    else if (previousIndex >= 0) navigationTrail = navigationTrail.slice(0, previousIndex);
    else if (target === "icecream") {
      navigationTrail = navigationCurrent?.route === "devices" ? [navigationCurrent] : [];
    }
    else if (navigationCurrent) {
      navigationTrail.push({ ...navigationCurrent, scrollTop: app.querySelector(".mobile-scroll")?.scrollTop || 0 });
      navigationTrail = navigationTrail.slice(-40);
    }
  }
  if (target === "recipe-detail") {
    state.recentRecipes = [state.detailRecipeIndex, ...state.recentRecipes.filter((index) => index !== state.detailRecipeIndex)].slice(0, 12);
    saveState();
  }
  state.route = target;
  if (window.location.hash.slice(1) !== target) window.location.hash = target;
  else render();
}

function showToast(zh, en) {
  clearTimeout(toastTimer);
  toast.textContent = T(zh, en);
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function showBatchReplacementDialog(routeTarget) {
  const cup = getCupProfile(state.cup);
  replacementTrigger = document.activeElement;
  pendingBatchReplacement = { routeTarget, cupId: state.cup, batchId: cup.runtime.batchId };
  app.insertAdjacentHTML("beforeend", `<div class="batch-dialog-backdrop" data-action="cancel-batch-replacement">
    <section class="batch-dialog" role="alertdialog" aria-modal="true" aria-labelledby="batch-dialog-title" aria-describedby="batch-dialog-description">
      <div class="batch-dialog-mark" aria-hidden="true">!</div>
      <h2 id="batch-dialog-title">${T("替换当前杯的制作任务？", "Replace this cup's current batch?")}</h2>
      <p id="batch-dialog-description">${T(`${cup.cupId} 已有制作记录。请先确认手中的实体杯可以使用；替换后，原批次会保存到历史记录。`, `${cup.cupId} already has a batch. Check that the physical cup is ready to use. The previous batch will be saved to history.`)}</p>
      <div class="batch-dialog-actions">
        ${button("取消", "Cancel", "", "secondary", false, 'data-action="cancel-batch-replacement"')}
        ${button("确认替换", "Replace batch", "", "primary", false, 'data-action="confirm-batch-replacement"')}
      </div>
    </section>
  </div>`);
  app.querySelector('.batch-dialog [data-action="cancel-batch-replacement"]').focus();
}

function closeBatchReplacementDialog() {
  app.querySelector(".batch-dialog-backdrop")?.remove();
  pendingBatchReplacement = null;
  if (replacementTrigger?.isConnected) replacementTrigger.focus();
  replacementTrigger = null;
}

function commitBatchTransition(routeTarget, replaceExisting = false) {
  if (replaceExisting) recordBatch(state.cup);
  const batchId = crypto.randomUUID();
  updateCupRuntime(state.cup, {
    status: "preparing",
    recipeZh: getRecipe(state.batchRecipeIndex).zh,
    recipeEn: getRecipe(state.batchRecipeIndex).en,
    recipeIndex: state.batchRecipeIndex,
    ingredients: getRecipeIngredients(state.portion, state.batchRecipeIndex),
    program: getRecipe(state.batchRecipeIndex).program,
    batchId,
    createdAt: formatDateTimeInput(new Date()),
    endedAt: "",
    servedAt: "",
    frozenAt: "",
    member: "",
    memberSnapshots: [],
    portion: state.portion,
    remaining: "",
    leftoverExpiry: "",
    completedAt: "",
    freezeRemaining: "",
    result: "",
  });
  state.remaining = "100";
  state.flowBatchId = batchId;
  state.expiryPreset = "48";
  state.leftoverExpiry = expiryFromNow(48);
  state.taskStatus = "complete";
  saveState();
  navigate(routeTarget);
}

function updateBatchRecipeSuggestions(input) {
  const suggestions = app.querySelector("#batch-recipe-suggestions");
  if (!suggestions) return;
  const query = input.value.trim().toLowerCase();
  const matches = matchingRecipes(query, new Set());
  suggestions.innerHTML = matches.length
    ? `<p class="suggestion-heading">${T(`找到 ${matches.length} 个食谱`, `${matches.length} recipes found`)}</p>` + matches.map((recipe) => `<div class="batch-recipe-suggestion"><button type="button" class="batch-recipe-choice" data-batch-recipe="${recipe.index}"><strong>${T(recipe.zh, recipe.en)}</strong><small>${T(recipe.metaZh, recipe.metaEn)}</small><span class="selection-hint">${T("选择此食谱", "Choose recipe")}</span></button><button type="button" class="recipe-detail-link" data-batch-recipe-detail="${recipe.index}">${T("预览详情", "Preview")}</button></div>`).join("")
    : `<div class="batch-recipe-empty"><strong>${T("没有匹配的食谱", "No matching recipes")}</strong><span>${T("试试输入食材、口味或食谱名称", "Try an ingredient, flavor, or recipe name")}</span></div>`;
  suggestions.hidden = false;
  input.setAttribute("aria-expanded", "true");
}

function closeBatchRecipeSuggestions() {
  const input = app.querySelector("#batch-recipe-query");
  const suggestions = app.querySelector("#batch-recipe-suggestions");
  if (suggestions) suggestions.hidden = true;
  if (input) {
    input.setAttribute("aria-expanded", "false");
    const recipe = getRecipe(state.batchRecipeIndex);
    input.value = T(recipe.zh, recipe.en);
  }
}

function activateElement(element) {
  const batchDialog = app.querySelector(".batch-dialog-backdrop");
  if (batchDialog) {
    const dialogAction = element.closest("[data-action]");
    if (dialogAction?.dataset.action === "cancel-batch-replacement" || element === batchDialog) {
      closeBatchReplacementDialog();
    } else if (dialogAction?.dataset.action === "confirm-batch-replacement" && pendingBatchReplacement) {
      const { routeTarget, cupId, batchId } = pendingBatchReplacement;
      if (state.route !== "make-portion" || state.cup !== cupId || getCupRuntime(cupId).batchId !== batchId) {
        closeBatchReplacementDialog();
        showToast("杯子状态已变化，请重新确认", "Cup status changed. Please review again.");
        return;
      }
      pendingBatchReplacement = null;
      replacementTrigger = null;
      commitBatchTransition(routeTarget, true);
    }
    return;
  }
  const cupArrow = element.closest("[data-cup-direction]");
  if (cupArrow) {
    const promoTrack = app.querySelector(".device-promo-track");
  if (promoTrack) {
    promoTrack.scrollLeft = 196;
    promoTrack.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      promoTrack.scrollBy({ left: event.key === "ArrowRight" ? 196 : -196, behavior: "smooth" });
    });
  }
  const cupTrack = app.querySelector("#overview-cups");
    const card = cupTrack?.querySelector(".cup-card");
    if (card) cupTrack.scrollBy({left: Number(cupArrow.dataset.cupDirection) * (card.getBoundingClientRect().width + parseFloat(getComputedStyle(cupTrack).columnGap)), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"});
    return;
  }
  const backElement = element.closest('[data-action="navigate-back"]');
  if (backElement) {
    if (state.route === "record-detail" && state.recordStep > 1 && !backElement.dataset.exitRecord) {
      state.recordStep -= 1;
      render();
    } else returnToPrevious(backElement.dataset.fallback || "icecream");
    return;
  }
  const routeElement = element.closest("[data-route]");
  const routeTarget = routeElement?.dataset.route;
  if (routeTarget) {
    if (routeElement.closest("#catalog-nav")) {
      navigationTrail = [];
      navigationCurrent = null;
    }
    if (routeTarget === "make-recipe" && !["make-recipe", "make-portion", "freeze-confirm", "machine-program"].includes(state.route)) state.flowBatchId = "";
    if (routeElement.dataset.recordId) { state.recordId = routeElement.dataset.recordId; state.recordStep = 1; }
    if (state.route === "recipe-detail" && routeTarget === "make-recipe") state.batchRecipeIndex = state.detailRecipeIndex;
    if (routeTarget === "recipe-detail") {
      state.detailRecipeIndex = Number(routeElement.dataset.recipeIndex || 0);
      state.recipeOrigin = state.route;
    }
    if (routeElement.dataset.cup) state.cup = routeElement.dataset.cup;
    if (routeElement.dataset.transition === "create-batch") {
      const runtime = getCupRuntime();
      const revisitingBatch = Boolean(state.flowBatchId && runtime.batchId === state.flowBatchId
        && runtime.recipeIndex === state.batchRecipeIndex && String(runtime.portion) === String(state.portion));
      if (revisitingBatch) {
        saveState();
        navigate(routeTarget);
        return;
      }
      if (runtime.status !== "available") {
        showBatchReplacementDialog(routeTarget);
        return;
      }
      commitBatchTransition(routeTarget);
      return;
    }
    saveState();
    navigate(routeTarget);
    return;
  }
  const routeCard = element.closest("[data-route-card]");
  if (routeCard) {
    if (routeCard.dataset.memberId) state.memberId = routeCard.dataset.memberId;
    if (routeCard.dataset.routeCard === "recipe-detail") {
      state.detailRecipeIndex = Number(routeCard.dataset.recipeIndex || 0);
      state.recipeOrigin = state.route;
    }
    if (routeCard.dataset.recordId) { state.recordId = routeCard.dataset.recordId; state.recordStep = 1; }
    if (routeCard.dataset.cup) state.cup = routeCard.dataset.cup;
    if (routeCard.dataset.timerCup) state.timerCup = routeCard.dataset.timerCup;
    saveState();
    navigate(routeCard.dataset.routeCard);
    return;
  }
  const actionElement = element.closest("[data-action]");
  if (!actionElement) return;
  const { action, value } = actionElement.dataset;
  if (action === "explore-device") {
    if (!Object.hasOwn(DEVICE_PRODUCTS, value)) return;
    exploredDevice = value;
    navigate("device-product");
    return;
  }
  if (action === "open-support-guide") {
    supportGuideIndex = Math.max(0, Math.min(SUPPORT_GUIDES.length - 1, Number(value) || 0));
    navigate("support-guide");
    return;
  }
  if (action === "open-support-ai") {
    supportAiOrigin = state.route;
    navigate("support-ai");
    return;
  }
  if (action === "send-support-question") {
    sendSupportQuestion();
    return;
  }
  if (action === "support-suggestion") {
    sendSupportQuestion(value);
    return;
  }
  if (action === "support-input-focus") {
    app.querySelector("#support-question")?.focus();
    return;
  }
  if (action === "record-step") {
    state.recordStep = Math.max(1, Math.min(4, Number(value) || 1));
    render();
    return;
  }
  if (action === "flow-step") {
    const targetStep = Number(value);
    const routes = ["make-recipe", "make-portion", "freeze-confirm", "machine-program"];
    const currentStep = routes.indexOf(state.route) + 1;
    if (!currentStep || targetStep < 1 || targetStep > 4 || targetStep > currentStep + 1) return;
    if (targetStep === currentStep) {
      if (targetStep === 3 && ["ready", "awaiting-result"].includes(getCupRuntime().status)) {
        app.querySelector(".mobile-scroll")?.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      }
      return;
    }
    if (targetStep === 3 && currentStep === 2) {
      app.querySelector('[data-transition="create-batch"]')?.click();
      return;
    }
    if (targetStep === 4) {
      if (currentStep !== 3 || !["ready", "awaiting-result"].includes(getCupRuntime().status)) return;
      scrollToInlineMachineGuide();
      return;
    }
    if (targetStep < currentStep) {
      const runtime = getCupRuntime();
      if (runtime.batchId) {
        state.flowBatchId = runtime.batchId;
        state.batchRecipeIndex = runtime.recipeIndex ?? state.batchRecipeIndex;
        state.portion = String(runtime.portion || state.portion);
        saveState();
      }
    }
    navigate(routes[targetStep - 1]);
    return;
  }
  if (action === "recipe-category") {
    if (!RECIPE_CATEGORIES.some(([id]) => id === value)) return;
    // Category buttons are single-select. Search results retain their keyword.
    if (state.route === "recipes") state.recipeQuery = "";
    state.filters = new Set(value === "all" ? [] : [value]);
    saveState();
    render();
    return;
  }
  if (action === "select-timer-cup") {
    if (!CUP_DEFINITIONS[value]) return;
    state.timerCup = value;
    saveState();
    render();
    return;
  }
  if (action === "restart-manual-timer" || action === "save-manual-timer" || action === "finish-manual-timer") {
    const hoursValue = app.querySelector("#timer-hours")?.value;
    const minutesValue = app.querySelector("#timer-minutes")?.value;
    const hours = Number(hoursValue);
    const minutes = Number(minutesValue);
    const durationMinutes = hours * 60 + minutes;
    if (hoursValue === "" || minutesValue === "" || !Number.isInteger(hours) || !Number.isInteger(minutes)
      || hours < 0 || minutes < 0 || minutes > 59 || durationMinutes < 1 || durationMinutes > 168 * 60) {
      showToast("请输入 1 分钟至 168 小时的有效时长", "Enter a duration from 1 minute to 168 hours");
      return;
    }
    const existing = getManualTimer(state.timerCup);
    const now = Date.now();
    const startedAt = action === "save-manual-timer" && existing && !existing.completedAt ? existing.startedAt : now;
    const endsAt = startedAt + durationMinutes * 60000;
    if (endsAt <= now) {
      showToast("新时长须大于已计时长，或选择重新开始", "Choose a longer duration or restart the timer");
      return;
    }
    state.cupTimers[state.timerCup] = { startedAt, endsAt, durationMinutes };
    saveState();
    if (action !== "restart-manual-timer") {
      timerCupToReveal = state.timerCup;
      returnToPrevious("icecream");
    } else {
      render();
      showToast("手动计时已重新开始", "Manual timer restarted");
    }
    return;
  }
  if (action === "clear-manual-timer") {
    if (!window.confirm(T("结束并清除这个杯子的手动计时？制作记录不会改变。", "End and clear this cup's manual timer? Making records will not change."))) return;
    delete state.cupTimers[state.timerCup];
    saveState();
    render();
    return;
  }
  if (action === "add-cup") {
    const number = Math.max(...Object.values(CUP_DEFINITIONS).map((cup) => Number(cup.cupId.replace("CUP ", ""))), ...state.records.map((record) => Number(record.cupId.replace("cup-", "")) || 0)) + 1;
    const id = `cup-${number}`;
    CUP_DEFINITIONS[id] = {cupId: `CUP ${number}`, color: CUP_COLOR_OPTIONS[(number - 1) % CUP_COLOR_OPTIONS.length].value, count: "0", noteZh: "", noteEn: ""};
    state.cupRuntime[id] = {...DEFAULT_CUP_RUNTIME["cup-3"]};
    state.cup = id;
    saveState();
    navigate("cup-edit");
    return;
  }
  if (action === "delete-cup") {
    const id = actionElement.dataset.cupId;
    if (Object.keys(CUP_DEFINITIONS).length === 1) {
      showToast("请至少保留一个杯子", "Keep at least one cup");
      return;
    }
    if (!window.confirm(T("删除该杯子的资料？历史记录将保留。", "Delete this cup profile? Its history will be kept."))) return;
    if (getCupRuntime(id).status !== "available") recordBatch(id);
    delete CUP_DEFINITIONS[id];
    delete state.cupProfiles[id];
    delete state.cupRuntime[id];
    delete state.cupTimers[id];
    state.cup = Object.keys(CUP_DEFINITIONS)[0];
    if (state.timerCup === id) state.timerCup = state.cup;
    saveState();
    navigate("cups");
    return;
  }
  if (action === "add-member") {
    state.memberId = "";
    navigate("member-detail");
    return;
  }
  if (action === "save-member") {
    const name = app.querySelector("#member-name").value.trim();
    if (!name) { showToast("请输入成员姓名", "Enter a member name"); return; }
    const profile = {id: state.memberId || crypto.randomUUID(), name, age: app.querySelector("#member-age").value, preference: app.querySelector("#member-preference").value.trim(), allergens: [...app.querySelectorAll('input[name="member-allergen"]:checked')].map((input) => input.value)};
    state.memberProfiles = [...state.memberProfiles.filter((member) => member.id !== profile.id), profile];
    saveState();
    navigate("members");
    return;
  }
  if (action === "new-batch") {
    state.cup = Object.keys(CUP_DEFINITIONS).find((id) => getCupRuntime(id).status === "available") || state.cup;
    if (state.lastCompletedRecipeIndex !== null) state.batchRecipeIndex = state.lastCompletedRecipeIndex;
    saveState();
    navigate("make-recipe");
    return;
  }
  if (action === "remake-record") {
    const record = state.records.find((item) => item.id === value);
    if (!record) return;
    state.batchRecipeIndex = record.recipeIndex ?? 0;
    state.portion = record.portion;
    state.cup = Object.keys(CUP_DEFINITIONS).find((id) => getCupRuntime(id).status === "available") || state.cup;
    saveState();
    navigate("make-recipe");
    return;
  }
  if (action === "use-recipe") {
    state.batchRecipeIndex = state.detailRecipeIndex;
    state.batchSearchOpen = false;
    state.batchSearchResults = false;
    saveState();
    navigate("make-recipe");
    return;
  }
  if (action === "clear-batch-search") {
    const input = app.querySelector("#batch-recipe-query");
    input.value = "";
    input.focus();
    updateBatchRecipeSuggestions(input);
    return;
  }
  if (action === "search-term") {
    submitRecipeSearch(value);
    return;
  }
  if (action === "clear-recipe-search") {
    state.recipeSearchDraft = "";
    state.batchSearchResults = false;
    const input = app.querySelector("#recipe-query");
    input.value = "";
    input.focus();
    updateRecipeSearchContent();
    return;
  }
  if (action === "edit-search-history") {
    state.recipeHistoryEditing = !state.recipeHistoryEditing;
    updateRecipeSearchContent();
    return;
  }
  if (action === "delete-search-history" || action === "clear-search-history") {
    state.recipeSearchHistory = action === "clear-search-history" ? [] : state.recipeSearchHistory.filter((term) => term !== value);
    if (!state.recipeSearchHistory.length) state.recipeHistoryEditing = false;
    saveState();
    updateRecipeSearchContent();
    return;
  }
  if (action === "add-device") {
    state.deviceAdded = true;
    saveState();
    showToast("IM01 已添加到我的设备", "IM01 added to My devices");
    navigate("devices");
    return;
  }
  if (action === "confirm-frozen") {
    if (getCupRuntime().status !== "ready" && getCupRuntime().status !== "awaiting-result") return;
    navigate("freeze-confirm");
    requestAnimationFrame(scrollToInlineMachineGuide);
    return;
  }
  if (action === "finish-guidance") {
    if (!["ready", "awaiting-result"].includes(getCupRuntime().status)) return;
    const viewedAt = formatDateTimeInput(new Date());
    updateCupRuntime(state.cup, {result: "guidance-viewed", guideViewedAt: viewedAt, endedAt: viewedAt});
    recordBatch(state.cup);
    resetCupRuntime(state.cup);
    saveState();
    navigate("icecream");
    return;
  }
  if (action === "edit-cup") {
    state.cup = actionElement.dataset.cupId || state.cup;
    saveState();
    navigate("cup-edit");
    return;
  }
  if (action === "save-cup") {
    const cup = getCupProfile(state.cup);
    const name = app.querySelector("#cup-edit-name")?.value.trim() || cup.cupId;
    const note = app.querySelector("#cup-edit-note")?.value.trim() || "";
    const color = app.querySelector('input[name="cup-color"]:checked')?.value || cup.color;
    state.cupProfiles = { ...state.cupProfiles, [state.cup]: { name, note, color } };
    saveState();
    showToast("杯子资料已保存", "Cup details saved");
    returnToPrevious("cups");
    return;
  }
  if (action === "version") state.version = value;
  if (action === "select-portion") {
    state.portion = value;
    if (state.route === "recipe-detail" || state.route === "make-portion") {
      saveState();
      updateRecipeDetailPortion();
      return;
    }
  }
  if (action === "select-cup") state.cup = value;
  if (action === "select-member") {
    if (value === "family") {
      state.selectedMemberIds = selectedMembers().length === state.memberProfiles.length
        ? [] : state.memberProfiles.map((member) => member.id);
    } else if (state.memberProfiles.some((member) => member.id === value)) {
      state.selectedMemberIds = state.selectedMemberIds.includes(value)
        ? state.selectedMemberIds.filter((id) => id !== value) : [...state.selectedMemberIds, value];
    }
    state.member = state.selectedMemberIds.length === state.memberProfiles.length && state.memberProfiles.length
      ? "family" : state.selectedMemberIds[0] || "";
  }
  if (action === "start-freeze-countdown") {
    const value = app.querySelector("#freeze-start")?.value;
    const startedAt = new Date(value).getTime();
    if (!Number.isFinite(startedAt) || startedAt > Date.now()) {
      showToast("请选择有效且不晚于当前的入冻时间", "Choose a valid freezer time no later than now");
      return;
    }
    const freezeEndsAt = Date.now() + 10000;
    updateCupRuntime(state.cup, { status: "freezing", frozenAt: value, freezeEndsAt, freezeDemo: true, freezeRemaining: "" });
  }
  if (action === "demo-freeze-countdown") {
    updateCupRuntime(state.cup, { status: "freezing", freezeEndsAt: Date.now() + 10000, freezeDemo: true, freezeRemaining: "" });
  }
  if (action === "toggle-favorite") {
    const index = state.detailRecipeIndex;
    state.favorite = !state.favoriteRecipes.includes(index);
    state.favoriteRecipes = state.favorite ? [...state.favoriteRecipes, index] : state.favoriteRecipes.filter((savedIndex) => savedIndex !== index);
    showToast(state.favorite ? "已收藏食谱" : "已取消收藏", state.favorite ? "Recipe saved" : "Recipe removed from favorites");
  }
  if (action === "toggle-prep") {
    const index = Number(value);
    if (state.prepSteps.has(index)) state.prepSteps.delete(index);
    else state.prepSteps.add(index);
  }
  if (action === "error-code") state.errorCode = value;
  if (action === "rating") state.rating = Number(value);
  if (action === "toggle-filter") {
    if (state.filters.has(value)) state.filters.delete(value);
    else state.filters.add(value);
  }
  if (action === "reset-filters") state.filters.clear();
  if (action === "show-toast") showToast(actionElement.dataset.messageZh || "操作已完成", actionElement.dataset.messageEn || "Action completed");
  saveState();
  render();
}

document.addEventListener("click", (event) => {
  const choice = event.target.closest("[data-batch-recipe], [data-batch-recipe-detail]");
  if (!choice) return;
  event.preventDefault();
  event.stopPropagation();
  const isDetail = choice.hasAttribute("data-batch-recipe-detail");
  const index = Number(isDetail ? choice.dataset.batchRecipeDetail : choice.dataset.batchRecipe);
  const recipe = getRecipe(index);
  if (isDetail) {
    state.detailRecipeIndex = index;
    state.recipeOrigin = "make-recipe";
    navigate("recipe-detail");
    return;
  }
  state.batchRecipeIndex = index;
  state.batchSearchOpen = false;
  state.batchSearchResults = false;
  const input = app.querySelector("#batch-recipe-query");
  if (input) input.value = T(recipe.zh, recipe.en);
  closeBatchRecipeSuggestions();
  saveState();
  render();
}, true);
document.addEventListener("click", (event) => activateElement(event.target));
document.addEventListener("focusin", (event) => {
  if (event.target.matches("#recipe-query") && state.route === "make-recipe" && !state.batchSearchOpen) {
    state.batchSearchOpen = true;
    state.batchSearchResults = false;
    state.recipeSearchDraft = event.target.value;
    updateRecipeSearchContent();
  }
  if (event.target.matches("#batch-recipe-query")) {
    event.target.select();
    updateBatchRecipeSuggestions(event.target);
  }
});
document.addEventListener("input", (event) => {
  if (event.target.matches("#freeze-start")) {
    const saveAction = app.querySelector("[data-freeze-time-save]");
    if (saveAction) {
      const changed = event.target.value !== getCupRuntime().frozenAt;
      saveAction.hidden = !changed;
      app.querySelector("[data-freeze-default-action]").hidden = changed;
    }
  }
  if (event.target.matches("#batch-recipe-query")) updateBatchRecipeSuggestions(event.target);
  if (event.target.matches("#recipe-query")) {
    state.recipeSearchDraft = event.target.value;
    if (state.route === "make-recipe") {
      state.batchSearchOpen = true;
      state.batchSearchResults = false;
    }
    if (!event.isComposing) updateRecipeSearchContent();
  }
});
document.addEventListener("compositionend", (event) => {
  if (!event.target.matches("#recipe-query")) return;
  state.recipeSearchDraft = event.target.value;
  if (state.route === "make-recipe") state.batchSearchResults = false;
  updateRecipeSearchContent();
});
document.addEventListener("submit", (event) => {
  if (event.target.id !== "recipe-search-form") return;
  event.preventDefault();
  if (state.route === "make-recipe" && !state.recipeSearchDraft.trim()) {
    state.batchSearchOpen = true;
    updateRecipeSearchContent();
    app.querySelector("#recipe-query")?.focus();
    return;
  }
  submitRecipeSearch(state.recipeSearchDraft);
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".recipe-search-combobox")) closeBatchRecipeSuggestions();
});
document.addEventListener("keydown", (event) => {
  const batchDialog = app.querySelector(".batch-dialog");
  if (batchDialog) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeBatchReplacementDialog();
    } else if (event.key === "Tab") {
      const buttons = [...batchDialog.querySelectorAll("button")];
      const next = event.shiftKey ? buttons.at(-1) : buttons[0];
      if (!batchDialog.contains(document.activeElement) || event.shiftKey && document.activeElement === buttons[0] || !event.shiftKey && document.activeElement === buttons.at(-1)) {
        event.preventDefault();
        next.focus();
      }
    }
    return;
  }
  if (event.key === "Enter" && !event.isComposing && event.target.matches("#support-question")) {
    event.preventDefault();
    sendSupportQuestion();
    return;
  }
  if (event.key === "Escape" && event.target.closest(".recipe-search-combobox")) {
    closeBatchRecipeSuggestions();
    return;
  }
  if (event.key === "ArrowDown" && event.target.matches("#batch-recipe-query")) {
    event.preventDefault();
    updateBatchRecipeSuggestions(event.target);
    app.querySelector("[data-batch-recipe]")?.focus();
    return;
  }
  if (["ArrowDown", "ArrowUp"].includes(event.key) && event.target.matches("[data-batch-recipe]")) {
    event.preventDefault();
    const options = [...app.querySelectorAll("[data-batch-recipe]")];
    const index = options.indexOf(event.target);
    options[(index + (event.key === "ArrowDown" ? 1 : -1) + options.length) % options.length]?.focus();
    return;
  }
  if (event.key === "Enter" && event.target.matches("#batch-recipe-query")) {
    event.preventDefault();
    updateBatchRecipeSuggestions(event.target);
    app.querySelector("[data-batch-recipe]")?.focus();
    return;
  }
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-route-card], [data-action][tabindex]")) {
    event.preventDefault();
    activateElement(event.target);
  }
});

pageSearch.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderCatalog();
});

document.querySelector("#theme-toggle").addEventListener("click", () => {
  state.theme = state.theme === "light" ? "dark" : "light";
  saveState();
  render();
});

document.querySelector("#language-toggle").addEventListener("click", () => {
  state.lang = state.lang === "zh" ? "en" : "zh";
  saveState();
  render();
});

window.addEventListener("hashchange", () => {
  const target = window.location.hash.slice(1);
  if (target === "remaining") {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#cup-detail`);
    navigate("cup-detail");
    return;
  }
  if (renderers[target] && target !== state.route) {
    const previousIndex = navigationTrail.findLastIndex((entry) => entry.route === target);
    if (previousIndex >= 0) {
      navigationTrail = navigationTrail.slice(0, previousIndex + 1);
      returnToPrevious("icecream");
      return;
    }
    navigate(target);
    return;
  }
  render();
});

if (navigationCurrent?.route === state.route) {
  for (const key of ["cup", "recordId", "recordStep", "detailRecipeIndex", "recipeOrigin", "recipeSearchOrigin"]) {
    if (navigationCurrent[key] !== undefined && (key !== "cup" || CUP_DEFINITIONS[navigationCurrent.cup])) state[key] = navigationCurrent[key];
  }
  supportGuideIndex = navigationCurrent.supportGuideIndex ?? 0;
  navigationRestoring = true;
}
refreshCupFreezeCountdowns();
render();
setInterval(() => {
  refreshCupFreezeCountdowns();
  refreshManualTimers();
}, 1000);
