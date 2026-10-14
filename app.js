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
  route("community", "app", "V1.1", "社区", "Community", "Momcozy APP → 社区", "Momcozy App → Community", "承接评论、成果分享与受控内容生态。", "Hosts comments, sharing, and moderated content."),
  route("mine", "app", "V1.0", "我的", "Me", "Momcozy APP → 我的", "Momcozy App → Me", "管理 Momcozy APP 全部个人、家庭与设备资产。", "Manages personal, household, and device assets across the Momcozy App."),

  route("icecream", "device", "V1.0", "冰淇淋机详情", "Ice cream maker", "设备 → 冰淇淋机卡片 → 详情", "Devices → Ice cream maker card → Detail", "聚焦当前任务、杯子状态、制作历史入口和推荐食谱；其他个人资产进入设备内“我的”。", "Focuses on current tasks, cup status, direct access to making history, and recommended recipes; other personal assets live in the device-level My space."),
  route("icecream-mine", "device", "V1.0", "冰淇淋机个人空间", "Ice cream maker · My", "设备 → 冰淇淋机详情 → 我的", "Devices → Ice cream maker → My", "仅聚合 IM01 相关的杯子、制作历史、食谱资产、成员与订单。", "Contains only cups, making history, recipe assets, members, and orders related to IM01."),
  route("tasks", "device", "V1.0", "全部当前任务", "Current tasks", "冰淇淋机详情 → 当前制作任务", "Ice cream maker → Current tasks", "按下一步动作排列所有活动批次。", "Orders active batches by the next required action."),
  route("task-detail", "device", "V1.0", "制作任务详情", "Task detail", "当前任务 → 制作批次", "Current tasks → Batch", "展示批次快照、时间与用户记录状态。", "Shows the batch snapshot, timing, and user-recorded state."),
  route("cups", "device", "V1.0", "我的杯子", "My cups", "冰淇淋机详情 → 我的杯子", "Ice cream maker → My cups", "三个实体杯的数字映射与占用情况。", "Digital mapping and availability for three physical cups."),
  route("cup-detail", "device", "V1.0", "杯子详情", "Cup detail", "我的杯子 → CUP 1", "My cups → CUP 1", "当前批次、余量与历史记录。", "Current batch, leftovers, and cup history."),

  route("recipes", "recipe", "V1.0", "食谱中心", "Recipe center", "冰淇淋机详情 → 食谱中心", "Ice cream maker → Recipe center", "食谱、场景专题与分类入口。", "Recipes, collections, and categories."),
  route("recipe-results", "recipe", "V1.0", "食谱结果", "Recipe results", "食谱中心 → 分类/搜索结果", "Recipe center → Results", "可按成员、过敏原、程序与份量筛选。", "Filter by member, allergen, program, and portion."),
  route("recipe-search", "recipe", "V1.0", "搜索食谱", "Search recipes", "食谱中心 → 搜索", "Recipe center → Search", "支持按食谱名称与食材搜索。", "Search by recipe name or ingredient."),
  route("recipe-filter", "recipe", "V1.0", "食谱筛选", "Recipe filters", "食谱结果 → 筛选", "Recipe results → Filters", "集中设置成员与饮食安全条件。", "Sets household and dietary safety conditions."),
  route("recipe-detail", "recipe", "V1.0", "食谱详情", "Recipe detail", "食谱列表 → 食谱详情", "Recipe list → Recipe detail", "食材换算、适用性、步骤和本机程序指导。", "Ingredient scaling, suitability, steps, and on-device program guidance."),
  route("favorites", "recipe", "V1.0", "我的收藏", "Favorites", "我的 → 收藏", "Me → Favorites", "集中查看已收藏食谱。", "View saved recipes in one place."),
  route("recent", "recipe", "V1.0", "最近查看", "Recently viewed", "我的 → 最近查看", "Me → Recently viewed", "快速回到近期查看过的食谱。", "Quickly return to recently viewed recipes."),

  route("make-recipe", "making", "V1.0", "开始制作", "Start making", "制作流程 → 选择并确认", "Making flow → Choose and confirm", "在一个页面内确认食谱、成员、份量、杯子与食材用量。", "Confirms the recipe, member, portion, cup, and ingredients on one screen."),
  route("freeze-confirm", "making", "V1.0", "备料与冷冻", "Prep & freeze", "制作流程 → 备料、装杯与入冻", "Making flow → Prep, fill, and freeze", "在一个页面内完成核心备料提示、入冻记录与倒计时。", "Combines essential prep guidance, freezer-time recording, and the countdown on one screen."),
  route("freeze-countdown", "device", "V1.0", "批次状态", "Batch status", "制作任务 → 冷冻中或预计可制作", "Making task → Freezing or estimated ready", "作为活动任务状态页查看预计倒计时和下一步。", "Shows the countdown and next action as an active task status."),
  route("machine-program", "making", "V1.0", "本机制作与完成", "Make & finish", "制作流程 → 本机制作与完成", "Making flow → Make and finish", "在同一页面完成本机指引、结果记录和余量保存。", "Combines on-machine guidance, result logging, and leftovers on one screen."),
  route("remaining", "record", "V1.0", "待完成批次", "Pending completion", "活动任务 → 补充结果与余量", "Active task → Add result and leftovers", "用于从活动任务中补充尚未完成的结果或余量记录。", "Adds missing result or leftover details from an active task."),

  route("records", "record", "V1.0", "制作记录", "Making records", "冰淇淋机详情/我的 → 制作记录", "Ice cream maker/Me → Records", "按时间、食谱、成员与杯子查看历史。", "History by time, recipe, member, and cup."),
  route("record-detail", "record", "V1.0", "制作记录详情", "Record detail", "制作记录 → 历史批次", "Records → Historical batch", "保留食谱版本和制作快照。", "Keeps the recipe version and batch snapshot."),

  route("support", "support", "V1.0", "使用帮助", "Help center", "冰淇淋机详情 → 使用帮助", "Ice cream maker → Help", "教程、清洁、错误帮助与售后入口。", "Tutorials, cleaning, issue help, and support."),
  route("parts", "support", "V1.0", "部件识别", "Parts guide", "使用帮助 → 部件识别", "Help → Parts", "识别主机、杯盖、刀轴和配件。", "Identifies the unit, lids, paddle, and accessories."),
  route("install", "support", "V1.0", "安装教程", "Assembly tutorial", "使用帮助 → 安装教程", "Help → Assembly", "装刀、放杯、锁盖与机头到位。", "Paddle, cup, lid, and head assembly."),
  route("programs", "support", "V1.0", "程序说明", "Program guide", "使用帮助 → 基础操作", "Help → Basic operation", "说明 8 个主程序、份量与暂停。", "Explains eight programs, portions, and pause."),
  route("cleaning", "support", "V1.0", "清洁与维护", "Cleaning & care", "使用帮助 → 清洁维护", "Help → Cleaning", "自清洁、手洗、洗碗机与交叉污染提醒。", "Self-clean, hand wash, dishwasher, and cross-contact guidance."),
  route("faq", "support", "V1.0", "问题与错误帮助", "Issue & error help", "使用帮助 → FAQ/错误码", "Help → FAQ/error codes", "由用户主动选择错误码或问题现象。", "The user selects an error code or symptom."),
  route("risk", "support", "V1.0", "停止使用提示", "Stop-use guidance", "使用帮助 → 高风险情况", "Help → High-risk situations", "异常过热、异味或部件损伤时停止使用。", "Stop using the product for overheating, odor, or damage."),
  route("contact", "support", "V1.0", "客服与售后", "Support & service", "使用帮助/我的 → 客服", "Help/Me → Support", "问题类型、型号信息与人工支持。", "Issue type, model information, and human support."),

  route("comments", "community", "V1.1", "食谱评论", "Recipe comments", "社区/食谱详情 → 评论", "Community/Recipe detail → Comments", "评分、评论、点赞、举报与官方回复。", "Ratings, comments, likes, reports, and official replies."),
  route("share-result", "community", "V1.1", "分享制作成果", "Share result", "制作完成 → 分享", "Completed batch → Share", "生成可编辑的成果卡片。", "Creates an editable result card."),
  route("private-recipe", "community", "V1.5", "私有食谱", "Private recipe", "社区/我的 → 私有食谱", "Community/Me → Private recipe", "从历史批次创建个人版本。", "Creates a private version from a previous batch."),
  route("recipe-submit", "community", "V1.5", "原创食谱投稿", "Submit a recipe", "社区 → 食谱投稿", "Community → Submit recipe", "结构化填写并进入平台审核。", "Structured submission for platform review."),
  route("submit-status", "community", "V1.5", "投稿审核状态", "Submission status", "原创食谱 → 审核进度", "Submitted recipe → Review status", "展示审核、试做验证与发布节点。", "Shows review, test-kitchen validation, and publishing."),

  route("accessories", "accessory", "V1.1", "配件与服务", "Accessories", "冰淇淋机详情 → 配件与服务", "Ice cream maker → Accessories", "杯子、杯盖、标签与清洁配件。", "Cups, lids, labels, and cleaning accessories."),
  route("accessory-detail", "accessory", "V1.1", "配件详情", "Accessory detail", "配件列表 → 商品详情", "Accessories → Product detail", "适配机型、安装方法与注意事项。", "Compatibility, installation, and care notes."),
  route("orders", "accessory", "V1.1", "配件订单", "Accessory orders", "我的 → 配件订单", "Me → Accessory orders", "查询订单、物流与售后。", "Order, delivery, and after-sales status."),
  route("order-detail", "accessory", "V1.1", "订单详情", "Order detail", "配件订单 → 订单详情", "Orders → Order detail", "物流节点、商品信息与售后入口。", "Delivery timeline, items, and service entry."),

  route("members", "mine", "V1.0", "家庭成员", "Household members", "我的 → 家庭成员", "Me → Household members", "制作成员与饮食安全偏好。", "Household profiles and dietary safety preferences."),
  route("member-detail", "mine", "V1.0", "成员饮食偏好", "Member preferences", "家庭成员 → 成员详情", "Household members → Profile", "年龄阶段、偏好、饮食限制与过敏原。", "Life stage, preferences, restrictions, and allergens."),

  route("page-map", "delivery", "说明", "页面地图", "Page map", "交付范围与版本边界", "Delivery scope and version boundary", "全部页面与功能框架节点的对应关系。", "Mapping between every screen and the functional framework."),
];

function route(id, group, version, zh, en, nodeZh, nodeEn, noteZh, noteEn) {
  return { id, group, version, zh, en, nodeZh, nodeEn, noteZh, noteEn };
}

const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
const state = {
  route: window.location.hash.slice(1) || "devices",
  lang: saved.lang === "en" ? "en" : "zh",
  theme: saved.theme === "dark" ? "dark" : "light",
  version: "all",
  search: "",
  portion: saved.portion || "250",
  cup: saved.cup || "cup-1",
  member: saved.member || "mia",
  favorite: saved.favorite ?? true,
  rating: saved.rating || 5,
  prepSteps: new Set(saved.prepSteps || [0, 1]),
  taskStatus: saved.taskStatus || "complete",
  remaining: saved.remaining || "100",
  errorCode: saved.errorCode || "E03",
  returnRoute: saved.returnRoute || "",
  filters: new Set(saved.filters || ["mia", "no-nuts"]),
};

const app = document.querySelector("#app");
const catalogNav = document.querySelector("#catalog-nav");
const pageSearch = document.querySelector("#page-search");
const versionFilter = document.querySelector("#version-filter");
const FREEZE_COUNTDOWN_DURATION = 10;
let freezeCountdownSeconds = FREEZE_COUNTDOWN_DURATION;
let freezeCountdownTimer = null;
let freezeFlowMode = "prep";
let renderedRoute = null;

function formatFreezeCountdown(seconds) {
  return `00:${String(seconds).padStart(2, "0")}`;
}

function stopFreezeCountdown() {
  clearInterval(freezeCountdownTimer);
  freezeCountdownTimer = null;
}

function isFreezeCountdownActive() {
  return state.route === "freeze-countdown" || (state.route === "freeze-confirm" && freezeFlowMode === "countdown");
}

function updateFreezeCountdownUi() {
  const formattedTime = formatFreezeCountdown(freezeCountdownSeconds);
  app.querySelectorAll("[data-freeze-countdown]").forEach((element) => {
    element.textContent = formattedTime;
  });
  const actionButton = app.querySelector("[data-freeze-countdown-action]");
  if (actionButton) actionButton.textContent = T(`${freezeCountdownSeconds} 秒后自动进入`, `Continue automatically in ${freezeCountdownSeconds}s`);
  const progress = app.querySelector("[data-freeze-countdown-progress]");
  if (progress) progress.style.width = `${90 + ((FREEZE_COUNTDOWN_DURATION - freezeCountdownSeconds) / FREEZE_COUNTDOWN_DURATION) * 10}%`;
}

function startFreezeCountdown() {
  if (freezeCountdownTimer || !isFreezeCountdownActive()) return;
  updateFreezeCountdownUi();
  freezeCountdownTimer = setInterval(() => {
    if (!isFreezeCountdownActive()) {
      stopFreezeCountdown();
      return;
    }
    freezeCountdownSeconds = Math.max(0, freezeCountdownSeconds - 1);
    updateFreezeCountdownUi();
    if (freezeCountdownSeconds === 0) {
      stopFreezeCountdown();
      navigate("machine-program");
    }
  }, 1000);
}
const toast = document.querySelector("#toast");
let toastTimer;

function T(zh, en) {
  return state.lang === "zh" ? zh : en;
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      lang: state.lang,
      theme: state.theme,
      portion: state.portion,
      cup: state.cup,
      member: state.member,
      favorite: state.favorite,
      rating: state.rating,
      prepSteps: [...state.prepSteps],
      taskStatus: state.taskStatus,
      remaining: state.remaining,
      errorCode: state.errorCode,
      returnRoute: state.returnRoute,
      filters: [...state.filters],
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
  return state.returnRoute && state.returnRoute !== state.route ? state.returnRoute : fallback;
}

function button(zh, en, target, variant = "primary", full = false, attrs = "") {
  return `<button type="button" class="button ${variant}${full ? " full" : ""}" ${target ? `data-route="${target}"` : ""} ${attrs}>${T(zh, en)}</button>`;
}

function deviceCurrentBatchPreview() {
  return `<div class="figma-device-preview">
    <div class="figma-device-preview-copy">
      <p>${T("当前制作", "Current batch")}</p>
      <h4>${T("草莓酸奶冰淇淋", "Strawberry yogurt")}</h4>
      <div class="figma-device-cup-list">
        <span><i></i><b>CUP 1</b>${T("冷冻中", "Freezing")}</span>
        <span class="leftovers"><i></i><b>CUP 2</b>${T("芒果椰乳 · 有余量", "Mango coconut · Leftovers")}</span>
      </div>
    </div>
    ${machineArt()}
    <div class="figma-device-preview-footer">
      <div><span>${T("预计剩余", "Est. remaining")}</span><strong>06:24</strong></div>
      <div><span>${T("杯子使用", "Cups in use")}</span><strong>2 / 3</strong></div>
      <small>${T("根据入冻时间预计", "Estimated from freezer time")}</small>
    </div>
  </div>`;
}

function sectionHeading(zh, en, actionZh = "", actionEn = "", target = "") {
  return `<div class="section-heading"><h3>${T(zh, en)}</h3>${actionZh ? `<button type="button" ${target ? `data-route="${target}"` : ""}>${T(actionZh, actionEn)}</button>` : ""}</div>`;
}

function pageIntro(eyebrowZh, eyebrowEn, titleZh, titleEn, descZh, descEn) {
  return `<div class="page-intro"><p class="eyebrow">${T(eyebrowZh, eyebrowEn)}</p><h2>${T(titleZh, titleEn)}</h2><p>${T(descZh, descEn)}</p></div>`;
}

function mobilePage({ titleZh, titleEn, captionZh = "", captionEn = "", back = "", activeTab = "", body = "", right = "", hideHeader = false }) {
  const topLevel = Boolean(activeTab);
  return `
    <section class="mobile-page${topLevel ? " has-tabbar" : ""}">
      ${hideHeader ? "" : `<header class="mobile-header">
        ${back ? `<button class="icon-button" type="button" data-route="${back}" aria-label="${T("返回", "Back")}">‹</button>` : `<span></span>`}
        <h1>${T(titleZh, titleEn)}${captionZh ? `<span class="header-caption">${T(captionZh, captionEn)}</span>` : ""}</h1>
        ${right || "<span></span>"}
      </header>`}
      <div class="mobile-scroll">${body}</div>
      ${topLevel ? tabbar(activeTab) : ""}
    </section>`;
}

function tabbar(active) {
  const items = [
    ["home", "首页", "Home"],
    ["devices", "设备", "Devices"],
    ["community", "社区", "Community"],
    ["mine", "我的", "Me"],
  ];
  return `<nav class="tabbar" aria-label="${T("一级导航", "Primary navigation")}">${items
    .map(
      ([id, zh, en]) => `<button type="button" class="${active === id ? "is-active" : ""}" data-route="${id}"><span class="tabbar-icon ${id}" aria-hidden="true"></span><span>${T(zh, en)}</span></button>`,
    )
    .join("")}</nav>`;
}

function taskCard({ titleZh, titleEn, descZh, descEn, statusZh, statusEn, tone, timeZh, timeEn, cup = "CUP 1", target = "task-detail", source = "estimated" }) {
  return `<article class="card task-card" data-route-card="${target}" tabindex="0">
    <div class="task-top"><div><h3>${T(titleZh, titleEn)}</h3><p>${T(descZh, descEn)}</p></div>${statusPill(statusZh, statusEn, tone)}</div>
    <div class="task-meta">
      <div class="meta-item"><span>${T("杯子", "Cup")}</span><strong>${cup}</strong></div>
      <div class="meta-item"><span>${T("下一时间点", "Next time")}</span><strong>${T(timeZh, timeEn)}</strong></div>
    </div>
    ${sourceNote(source)}
  </article>`;
}

function cupCard({ id, title, color, stateZh, stateEn, detailZh, detailEn, countdown = "" }) {
  return `<article class="card cup-card" style="--cup-color:${color}" data-route-card="cup-detail" data-cup="${id}" tabindex="0">
    <div class="cup-dot"></div><h3>${title}</h3><p class="cup-state">${T(stateZh, stateEn)}</p><p>${T(detailZh, detailEn)}</p>
    ${countdown ? `<div class="cup-countdown"><span>${T("预计剩余", "Est. remaining")}</span><strong>${countdown}</strong></div>` : ""}
  </article>`;
}

function recipeCard({ flavor = "berry", titleZh, titleEn, metaZh, metaEn, tags = [], target = "recipe-detail" }) {
  return `<article class="card recipe-card" data-route-card="${target}" tabindex="0">
    <div class="recipe-art ${flavor}" aria-hidden="true"></div>
    <div class="recipe-card-copy"><h3>${T(titleZh, titleEn)}</h3><p>${T(metaZh, metaEn)}</p><div class="recipe-meta">${tags
      .map(([zh, en]) => `<span class="mini-badge">${T(zh, en)}</span>`)
      .join("")}</div></div>
  </article>`;
}

function listRow(titleZh, titleEn, descZh, descEn, target = "", trailing = "›", attrs = "") {
  return `<div class="list-row" ${target ? `data-route-card="${target}" tabindex="0"` : ""} ${attrs}><div><h3>${T(titleZh, titleEn)}</h3>${descZh ? `<p>${T(descZh, descEn)}</p>` : ""}</div><span class="chevron">${trailing}</span></div>`;
}

function stepper(current, total = 4) {
  return `<div class="stepper" aria-label="${T("制作步骤", "Making steps")}">${Array.from({ length: total }, (_, index) => {
    const number = index + 1;
    return `${index ? `<span class="stepper-line ${number <= current ? "is-complete" : ""}"></span>` : ""}<span class="stepper-item ${number < current ? "is-complete" : number === current ? "is-active" : ""}">${number}</span>`;
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

function renderDevices() {
  return mobilePage({
    titleZh: "设备",
    titleEn: "Devices",
    activeTab: "devices",
    hideHeader: true,
    body: `
      <div class="figma-device-layout">
        <div class="figma-device-topnav">
          <h2>${T("我的设备", "My Device")}</h2>
          <button class="figma-device-add" type="button" aria-label="${T("添加设备", "Add device")}" data-action="show-toast" data-message-zh="添加设备入口已打开" data-message-en="Add device entry opened">+</button>
        </div>
        <article class="figma-device-card" data-route-card="icecream" tabindex="0">
          <div class="figma-device-card-head">
            <div class="figma-device-thumb">${machineArt()}</div>
            <div class="figma-device-name">
              <h3>${T("冰淇淋机 IM01", "Ice Cream Maker IM01")}</h3>
              <p><i></i>${T("2 个杯子使用中", "2 cups in use")}</p>
            </div>
            <span class="figma-device-chevron">›</span>
          </div>
          ${deviceCurrentBatchPreview()}
        </article>
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

function renderIcecream() {
  return mobilePage({
    titleZh: "冰淇淋机",
    titleEn: "Ice cream maker",
    back: "devices",
    right: `<div class="header-actions">
      <button class="icon-button textual" type="button" data-route="icecream-mine">${T("我的", "Me")}</button>
      <button class="icon-button textual" type="button" data-route="support">${T("帮助", "Help")}</button>
      </div>`,
    body: `
      <article class="icecream-detail-card">
        ${deviceCurrentBatchPreview()}
        <div class="icecream-detail-actions">${button("开始制作", "Start making", "make-recipe", "primary", true)}</div>
      </article>
      <div class="section-block">
        <div class="section-heading">
          <h3>${T("我的杯子", "My cups")}</h3>
          <div class="section-heading-actions">
            <button type="button" data-route="records">${T("制作历史", "Making history")}</button>
            <button type="button" data-route="cups">${T("管理", "Manage")}</button>
          </div>
        </div>
        <div class="cup-grid">
          ${cupCard({ id: "cup-1", title: "CUP 1", color: "#4c9872", stateZh: "冷冻中", stateEn: "Freezing", detailZh: "草莓酸奶", detailEn: "Strawberry yogurt", countdown: "06:24" })}
          ${cupCard({ id: "cup-2", title: "CUP 2", color: "#d39a65", stateZh: "有余量", stateEn: "Leftovers", detailZh: "芒果椰乳", detailEn: "Mango coconut" })}
          ${cupCard({ id: "cup-3", title: "CUP 3", color: "#9b83bd", stateZh: "空闲", stateEn: "Available", detailZh: "可以使用", detailEn: "Ready to use" })}
        </div>
      </div>
      <div class="section-block">${sectionHeading("推荐食谱", "Recommended recipes", "全部食谱", "All recipes", "recipes")}
        <div class="recipe-grid">
          ${recipeCard({ flavor: "berry", titleZh: "草莓酸奶冰淇淋", titleEn: "Strawberry yogurt", metaZh: "新手首做 · 至少预冻 24 小时", metaEn: "First try · Freeze at least 24h" })}
          ${recipeCard({ flavor: "avocado", titleZh: "牛油果香蕉冰淇淋", titleEn: "Avocado banana", metaZh: "宝宝阶段 · 低添加糖", metaEn: "Baby-friendly · Low added sugar", tags: [["适合 Mia", "Fits Mia"]] })}
        </div>
      </div>`,
  });
}

function renderIcecreamMine() {
  return mobilePage({
    titleZh: "我的",
    titleEn: "My",
    captionZh: "冰淇淋机 · IM01",
    captionEn: "Ice cream maker · IM01",
    back: "icecream",
    body: `
      ${pageIntro("设备个人空间", "Device personal space", "只管理这台冰淇淋机的内容", "Everything related to this ice cream maker", "这里不进入 Momcozy APP 一级“我的”，仅聚合 IM01 相关资产。", "This is not the app-level Me tab. It contains only assets related to IM01.")}
      <div class="card card-pad" style="display:flex;align-items:center;gap:12px">
        <span class="notice-token">IM</span><div><h2 style="margin:0;font-size:17px">${T("Lucky 的冰淇淋机", "Lucky's ice cream maker")}</h2><p style="margin:4px 0 0;color:var(--muted-foreground);font-size:10px">${T("3 个实体杯 · 32 个历史批次", "3 physical cups · 32 historical batches")}</p></div>
      </div>
      <div class="section-block">${sectionHeading("杯子与制作", "Cups & making")}
        <div class="card card-pad stack compact">
          ${listRow("我的杯子", "My cups", "3 个实体杯 · 1 个冷冻中", "3 physical cups · 1 freezing", "cups")}
          ${listRow("制作记录", "Making records", "32 个已结束的历史批次", "32 completed historical batches", "records")}
        </div>
      </div>
      <div class="section-block">${sectionHeading("食谱与家庭", "Recipes & household")}
        <div class="card card-pad stack compact">
          ${listRow("我的收藏", "Favorites", "8 个食谱", "8 recipes", "favorites")}
          ${listRow("最近查看", "Recently viewed", "最近浏览的 6 个食谱", "6 recently viewed recipes", "recent")}
          ${listRow("我的私有食谱", "Private recipes", "2 个仅自己可见的版本", "2 private versions", "private-recipe")}
          ${listRow("家庭成员", "Household members", "3 位成员的偏好与过敏原", "Preferences and allergens for 3 members", "members")}
        </div>
      </div>
      <div class="section-block">${sectionHeading("配件与订单", "Accessories & orders")}
        <div class="card card-pad stack compact">
          ${listRow("配件与服务", "Accessories", "适配 IM01 的杯子、杯盖与清洁配件", "Cups, lids, and cleaning tools for IM01", "accessories")}
          ${listRow("配件订单", "Accessory orders", "1 个订单配送中", "1 order in delivery", "orders")}
        </div>
      </div>`,
  });
}

function renderTasks() {
  return mobilePage({
    titleZh: "当前制作任务",
    titleEn: "Current tasks",
    back: "icecream",
    right: `<button class="icon-button textual" type="button" data-route="make-recipe">${T("新建", "New")}</button>`,
    body: `
      ${pageIntro("按下一步排序", "Ordered by next action", "三件需要留意的事", "Three things need attention", "时间来自你的记录，不代表机器实时状态。", "Timing comes from your records, not live device status.")}
      <div class="stack">
        ${taskCard({ titleZh: "草莓酸奶冰淇淋", titleEn: "Strawberry yogurt ice cream", descZh: "Mia · 250 mL", descEn: "Mia · 250 mL", statusZh: "即将可制作", statusEn: "Ready soon", tone: "warning", timeZh: "今天 20:00", timeEn: "Today 8:00 PM" })}
        ${taskCard({ titleZh: "芒果椰乳雪葩", titleEn: "Mango coconut sorbet", descZh: "家庭分享 · 500 mL", descEn: "Family sharing · 500 mL", statusZh: "待记录余量", statusEn: "Log leftovers", tone: "success", timeZh: "现在", timeEn: "Now", cup: "CUP 2", target: "remaining", source: "recorded" })}
        ${taskCard({ titleZh: "香蕉燕麦冰淇淋", titleEn: "Banana oat ice cream", descZh: "Noah · 100 mL", descEn: "Noah · 100 mL", statusZh: "待结束批次", statusEn: "Finish batch", tone: "info", timeZh: "现在", timeEn: "Now", cup: "CUP 3", target: "remaining", source: "recorded" })}
      </div>
      <div class="alert info section-block"><strong>${T("状态说明", "About task status")}</strong>${T("你可以修正入冻时间或手工状态。APP 不会自动读取机器运行状态。", "You can correct the freezer time or manually update status. The app does not read live machine operation.")}</div>`,
  });
}

function renderTaskDetail() {
  return mobilePage({
    titleZh: "制作任务",
    titleEn: "Making task",
    captionZh: "CUP 1",
    captionEn: "CUP 1",
    back: "tasks",
    body: `
      <article class="card card-pad">
        <div class="task-top"><div><p class="eyebrow" style="color:var(--colors-brands-family-700)">${T("草莓酸奶冰淇淋", "Strawberry yogurt ice cream")}</p><h2 style="margin:6px 0 0;font-family:var(--font-brand);font-size:25px;font-weight:400">${T("预计今天 20:00 可制作", "Estimated ready today at 8:00 PM")}</h2></div>${statusPill("冷冻中", "Freezing", "info")}</div>
        <div class="progress-track" style="margin-top:18px"><div class="progress-fill" style="width:72%"></div></div>
        ${sourceNote()}
      </article>
      <div class="section-block">${sectionHeading("批次信息", "Batch details")}
        <div class="metadata-grid">
          <div class="meta-item"><span>${T("食用成员", "Member")}</span><strong>Mia</strong></div>
          <div class="meta-item"><span>${T("制作份量", "Portion")}</span><strong>250 mL</strong></div>
          <div class="meta-item"><span>${T("实际入冻", "Freezer time")}</span><strong>9 ${T("月", "Sep")} 9 · 02:00</strong></div>
          <div class="meta-item"><span>${T("推荐程序", "Program")}</span><strong>ICE CREAM</strong></div>
        </div>
      </div>
      <div class="section-block">${sectionHeading("制作进度", "Progress")}
        <div class="timeline">
          <div class="timeline-row"><h3>${T("配方与成员已确认", "Recipe and member confirmed")}</h3><p>${T("今天 01:35 · 已保存食谱版本快照", "Today 1:35 AM · Recipe version snapshot saved")}</p></div>
          <div class="timeline-row"><h3>${T("已完成备料并装杯", "Preparation and filling completed")}</h3><p>${T("今天 01:52 · CUP 1", "Today 1:52 AM · CUP 1")}</p></div>
          <div class="timeline-row"><h3>${T("已记录入冻", "Freezer time recorded")}</h3><p>${T("至少冷冻 24 小时，再前往机器本体制作", "Freeze for at least 24 hours before continuing at the machine")}</p></div>
          <div class="timeline-row"><h3>${T("等待预计可制作时间", "Waiting for estimated ready time")}</h3><p>${T("到时后请前往机器本体操作", "When ready, continue at the machine")}</p></div>
        </div>
      </div>
      <div class="sticky-actions"><div class="button-row">${button("修改入冻记录", "Edit freezer record", "freeze-confirm", "secondary", true)}${button("查看批次状态", "View batch status", "freeze-countdown", "primary", true)}</div></div>`,
  });
}

function renderCups() {
  return mobilePage({
    titleZh: "我的杯子",
    titleEn: "My cups",
    back: contextualBack("icecream"),
    body: `
      ${pageIntro("3 个实体杯", "3 physical cups", "为每个杯子保留清晰记录", "Keep each cup clearly tracked", "杯子编号和颜色需要与实体标签一致。", "Cup number and color should match the physical label.")}
      <div class="stack">
        ${choiceCard({ id: "cup-1", selected: state.cup === "cup-1", titleZh: "CUP 1 · 森林绿", titleEn: "CUP 1 · Forest green", descZh: "冷冻中 · 草莓酸奶 · Mia", descEn: "Freezing · Strawberry yogurt · Mia", action: "select-cup" })}
        ${choiceCard({ id: "cup-2", selected: state.cup === "cup-2", titleZh: "CUP 2 · 蜂蜜棕", titleEn: "CUP 2 · Honey brown", descZh: "有余量 · 芒果椰乳 · 家庭分享", descEn: "Leftovers · Mango coconut · Family", action: "select-cup" })}
        ${choiceCard({ id: "cup-3", selected: state.cup === "cup-3", titleZh: "CUP 3 · 雾紫", titleEn: "CUP 3 · Mist purple", descZh: "空闲 · 可以创建新批次", descEn: "Available · Ready for a new batch", action: "select-cup" })}
      </div>
      <div class="section-block">${sectionHeading("杯子规则", "Cup rules")}
        <div class="card card-pad stack compact">
          ${listRow("一个杯子只有一个活动批次", "One active batch per cup", "防止新任务覆盖正在进行的记录", "Prevents a new task from overwriting an active record", "", "")}
          ${listRow("实体标签必须对应", "Physical label must match", "装杯和去机器制作前都需要核对", "Check before filling and making", "", "")}
          ${listRow("清洁完成后释放", "Release after cleaning", "释放后杯子才能用于新批次", "The cup becomes available for a new batch", "", "")}
        </div>
      </div>
      <div class="sticky-actions">${button("查看所选杯子", "View selected cup", "cup-detail", "primary", true)}</div>`,
  });
}

function renderCupDetail() {
  const cupTitle = state.cup === "cup-2" ? "CUP 2" : state.cup === "cup-3" ? "CUP 3" : "CUP 1";
  return mobilePage({
    titleZh: cupTitle,
    titleEn: cupTitle,
    captionZh: state.cup === "cup-1" ? "森林绿" : state.cup === "cup-2" ? "蜂蜜棕" : "雾紫",
    captionEn: state.cup === "cup-1" ? "Forest green" : state.cup === "cup-2" ? "Honey brown" : "Mist purple",
    back: "cups",
    body: `
      <article class="card card-pad">
        <div class="row-between"><div><p class="eyebrow" style="color:var(--colors-brands-family-700)">${T("当前批次", "Current batch")}</p><h2 style="margin:6px 0 0;font-family:var(--font-brand);font-size:24px;font-weight:400">${state.cup === "cup-3" ? T("杯子空闲", "Cup available") : T("草莓酸奶冰淇淋", "Strawberry yogurt ice cream")}</h2></div>${statusPill(state.cup === "cup-3" ? "空闲" : "冷冻中", state.cup === "cup-3" ? "Available" : "Freezing", state.cup === "cup-3" ? "success" : "info")}</div>
        ${state.cup === "cup-3" ? `<p style="margin:14px 0 0;color:var(--muted-foreground);font-size:10px">${T("可以使用这个杯子创建新的制作批次。", "This cup can be used for a new making batch.")}</p>` : `<div class="metadata-grid"><div class="meta-item"><span>${T("成员", "Member")}</span><strong>Mia</strong></div><div class="meta-item"><span>${T("份量", "Portion")}</span><strong>250 mL</strong></div><div class="meta-item"><span>${T("入冻时间", "Freezer time")}</span><strong>02:00</strong></div><div class="meta-item"><span>${T("预计可制作", "Estimated ready")}</span><strong>20:00</strong></div></div>${sourceNote()}`}
      </article>
      <div class="section-block">${sectionHeading("杯子历史", "Cup history")}
        <div class="card card-pad">
          ${listRow("9 月 7 日 · 芒果椰乳雪葩", "Sep 7 · Mango coconut sorbet", "500 mL · 已食用完", "500 mL · Finished", "record-detail")}
          ${listRow("9 月 3 日 · 牛油果香蕉", "Sep 3 · Avocado banana", "250 mL · Mia", "250 mL · Mia", "record-detail")}
          ${listRow("8 月 30 日 · 原味酸奶", "Aug 30 · Plain yogurt", "250 mL · 家庭分享", "250 mL · Family", "record-detail")}
        </div>
      </div>
      <div class="sticky-actions">${state.cup === "cup-3" ? button("用这个杯子开始制作", "Start with this cup", "make-recipe", "primary", true) : `<div class="button-row">${button("查看任务", "View task", "task-detail", "secondary", true)}${button("修改记录", "Edit record", "freeze-confirm", "primary", true)}</div>`}</div>`,
  });
}

function renderRecipes() {
  return mobilePage({
    titleZh: "食谱中心",
    titleEn: "Recipe center",
    back: "icecream",
    right: `<button class="icon-button textual" type="button" data-route="favorites">${T("收藏", "Saved")}</button>`,
    body: `
      <div class="search-box" data-route-card="recipe-search" tabindex="0"><span>${T("搜索食谱或食材", "Search recipes or ingredients")}</span></div>
      <div class="chip-row"><button class="chip is-selected">${T("推荐", "For you")}</button><button class="chip" data-route="recipe-results">${T("新手首做", "First try")}</button><button class="chip" data-route="recipe-results">${T("宝宝阶段", "Baby")}</button><button class="chip" data-route="recipe-results">${T("妈妈低糖", "Low sugar")}</button><button class="chip" data-route="recipe-results">${T("家庭分享", "Family")}</button></div>
      <div class="section-block">${sectionHeading("今天推荐", "Today's picks", "筛选", "Filter", "recipe-filter")}
        <article class="hero-card" data-route-card="recipe-detail" tabindex="0" style="min-height:190px;background:linear-gradient(145deg,#4f2331,#8c4158 64%,#48202c)">
          <div class="hero-copy"><p class="eyebrow">${T("新手首做", "First try")}</p><h2>${T("草莓酸奶冰淇淋", "Strawberry yogurt ice cream")}</h2><p>${T("准备 15 分钟 · 至少预冻 24 小时", "15 min prep · Freeze at least 24h")}</p>${button("查看食谱", "View recipe", "recipe-detail", "primary")}</div>
          <div class="recipe-art berry" style="position:absolute;right:14px;bottom:12px;width:128px;height:154px;border-radius:60px 60px 22px 22px"></div>
        </article>
      </div>
      <div class="section-block">${sectionHeading("适合 Mia", "Fits Mia", "查看全部", "View all", "recipe-results")}
        <div class="recipe-grid">
          ${recipeCard({ flavor: "avocado", titleZh: "牛油果香蕉", titleEn: "Avocado banana", metaZh: "低添加糖 · 无坚果", metaEn: "Low added sugar · Nut-free", tags: [["宝宝阶段", "Baby"]] })}
          ${recipeCard({ flavor: "mango", titleZh: "芒果椰乳", titleEn: "Mango coconut", metaZh: "无乳制品 · 500 mL", metaEn: "Dairy-free · 500 mL", tags: [["家庭分享", "Family"]] })}
        </div>
      </div>
      <div class="section-block">${sectionHeading("按场景浏览", "Browse by occasion")}
        <div class="quick-grid">
          <article class="card quick-card" data-route-card="recipe-results" tabindex="0"><span class="quick-label">15 MIN</span><h3>${T("快速备料", "Quick prep")}</h3><p>${T("准备步骤更少", "Fewer prep steps")}</p></article>
          <article class="card quick-card" data-route-card="recipe-results" tabindex="0"><span class="quick-label">LOW</span><h3>${T("低添加糖", "Low added sugar")}</h3><p>${T("清爽口味选择", "Lighter flavor choices")}</p></article>
          <article class="card quick-card" data-route-card="recipe-results" tabindex="0"><span class="quick-label">BABY</span><h3>${T("宝宝阶段", "Baby-friendly")}</h3><p>${T("按年龄阶段提示", "Life-stage guidance")}</p></article>
          <article class="card quick-card" data-route-card="recipe-results" tabindex="0"><span class="quick-label">FAMILY</span><h3>${T("家庭分享", "Family sharing")}</h3><p>${T("250–500 mL", "250–500 mL")}</p></article>
        </div>
      </div>`,
  });
}

function renderRecipeResults() {
  return mobilePage({
    titleZh: "食谱结果",
    titleEn: "Recipe results",
    captionZh: "18 个食谱",
    captionEn: "18 recipes",
    back: "recipes",
    right: `<button class="icon-button textual" type="button" data-route="recipe-filter">${T("筛选", "Filter")}</button>`,
    body: `
      <div class="search-box" data-route-card="recipe-search" tabindex="0"><span>${T("草莓、香蕉、酸奶…", "Strawberry, banana, yogurt…")}</span></div>
      <div class="chip-row"><button class="chip is-selected">${T("适合 Mia", "Fits Mia")}</button><button class="chip is-selected">${T("无坚果", "Nut-free")}</button><button class="chip">${T("250 mL", "250 mL")}</button><button class="chip">ICE CREAM</button></div>
      <div class="section-block"><div class="recipe-grid">
        ${recipeCard({ flavor: "berry", titleZh: "草莓酸奶", titleEn: "Strawberry yogurt", metaZh: "15 分钟准备", metaEn: "15 min prep", tags: [["4.9", "4.9"]] })}
        ${recipeCard({ flavor: "avocado", titleZh: "牛油果香蕉", titleEn: "Avocado banana", metaZh: "宝宝阶段", metaEn: "Baby-friendly", tags: [["无坚果", "Nut-free"]] })}
        ${recipeCard({ flavor: "yogurt", titleZh: "蓝莓希腊酸奶", titleEn: "Blueberry Greek yogurt", metaZh: "高蛋白", metaEn: "High protein", tags: [["250 mL", "250 mL"]] })}
        ${recipeCard({ flavor: "mango", titleZh: "芒果椰乳雪葩", titleEn: "Mango coconut sorbet", metaZh: "无乳制品", metaEn: "Dairy-free", tags: [["500 mL", "500 mL"]] })}
        ${recipeCard({ flavor: "cocoa", titleZh: "香蕉可可燕麦", titleEn: "Banana cocoa oat", metaZh: "社区验证", metaEn: "Community tested", tags: [["低糖", "Low sugar"]], target: "comments" })}
        ${recipeCard({ flavor: "yogurt", titleZh: "香草牛奶冰淇淋", titleEn: "Vanilla milk ice cream", metaZh: "家庭分享", metaEn: "Family sharing", tags: [["经典", "Classic"]] })}
      </div></div>`,
  });
}

function renderRecipeSearch() {
  return mobilePage({
    titleZh: "搜索食谱",
    titleEn: "Search recipes",
    back: "recipes",
    body: `
      <label class="search-box"><input id="recipe-query" value="${T("草莓", "strawberry")}" aria-label="${T("搜索食谱或食材", "Search recipes or ingredients")}" /><button class="text-button" type="button" data-route="recipe-results">${T("搜索", "Search")}</button></label>
      <div class="section-block">${sectionHeading("最近搜索", "Recent searches")}
        <div class="chip-row" style="margin-left:0;margin-right:0;padding:0"><button class="chip">${T("草莓", "Strawberry")}</button><button class="chip">${T("无乳制品", "Dairy-free")}</button><button class="chip">${T("宝宝香蕉", "Baby banana")}</button></div>
      </div>
      <div class="section-block">${sectionHeading("按食材发现", "Discover by ingredient")}
        <div class="card card-pad">
          ${listRow("香蕉", "Banana", "12 个食谱 · 宝宝阶段常用", "12 recipes · Common for baby-friendly recipes", "recipe-results")}
          ${listRow("酸奶", "Yogurt", "9 个食谱 · 高蛋白选择", "9 recipes · High-protein options", "recipe-results")}
          ${listRow("芒果", "Mango", "8 个食谱 · 应季推荐", "8 recipes · Seasonal picks", "recipe-results")}
          ${listRow("椰乳", "Coconut milk", "6 个食谱 · 无乳制品", "6 recipes · Dairy-free", "recipe-results")}
        </div>
      </div>
      <div class="section-block">${sectionHeading("热门搜索", "Popular searches")}
        <div class="recipe-grid">
          ${recipeCard({ flavor: "berry", titleZh: "草莓系列", titleEn: "Strawberry collection", metaZh: "8 个食谱", metaEn: "8 recipes", tags: [["应季", "Seasonal"]], target: "recipe-results" })}
          ${recipeCard({ flavor: "cocoa", titleZh: "低糖可可", titleEn: "Low-sugar cocoa", metaZh: "5 个食谱", metaEn: "5 recipes", tags: [["妈妈低糖", "Low sugar"]], target: "recipe-results" })}
        </div>
      </div>`,
  });
}

function renderRecipeFilter() {
  const chip = (id, zh, en) => `<button type="button" class="chip ${state.filters.has(id) ? "is-selected" : ""}" data-action="toggle-filter" data-value="${id}">${T(zh, en)}</button>`;
  return mobilePage({
    titleZh: "筛选",
    titleEn: "Filters",
    back: "recipe-results",
    right: `<button class="icon-button textual" type="button" data-action="reset-filters">${T("重置", "Reset")}</button>`,
    body: `
      <div class="section-block" style="margin-top:4px">${sectionHeading("食用成员", "Household member")}<div class="chip-row" style="margin-left:0;margin-right:0;padding:0">${chip("mia", "Mia · 18 个月", "Mia · 18 months")}${chip("hui", "Lucky", "Lucky")}${chip("family", "家庭分享", "Family")}</div></div>
      <div class="section-block">${sectionHeading("过敏原排除", "Exclude allergens")}<div class="chip-row" style="margin-left:0;margin-right:0;padding:0">${chip("no-nuts", "坚果", "Nuts")}${chip("no-dairy", "乳制品", "Dairy")}${chip("no-egg", "鸡蛋", "Egg")}${chip("no-soy", "大豆", "Soy")}</div></div>
      <div class="section-block">${sectionHeading("饮食偏好", "Dietary preferences")}<div class="chip-row" style="margin-left:0;margin-right:0;padding:0">${chip("low-sugar", "低添加糖", "Low added sugar")}${chip("high-protein", "高蛋白", "High protein")}${chip("vegan", "植物基", "Plant-based")}</div></div>
      <div class="section-block">${sectionHeading("机器程序", "Machine program")}<div class="chip-row" style="margin-left:0;margin-right:0;padding:0">${chip("ice-cream", "ICE CREAM", "ICE CREAM")}${chip("sorbet", "SORBET", "SORBET")}${chip("lite", "LITE ICE CREAM", "LITE ICE CREAM")}</div></div>
      <div class="section-block">${sectionHeading("制作份量", "Portion")}<div class="portion-selector"><button type="button">50</button><button type="button">100</button><button type="button" class="is-selected">250</button><button type="button">500</button></div></div>
      <div class="alert warning section-block"><strong>${T("安全筛选只提供辅助", "Safety filters are supportive only")}</strong>${T("开始制作前仍需逐项核对食材包装和成员过敏原。", "Before making, always re-check ingredient packaging and member allergens.")}</div>
      <div class="sticky-actions">${button("查看 18 个食谱", "View 18 recipes", "recipe-results", "primary", true)}</div>`,
  });
}

function getRecipeIngredients(portion) {
  return {
    50: [["草莓", "Strawberries", "35 g"], ["原味酸奶", "Plain yogurt", "25 g"], ["香蕉", "Banana", "15 g"]],
    100: [["草莓", "Strawberries", "70 g"], ["原味酸奶", "Plain yogurt", "50 g"], ["香蕉", "Banana", "30 g"]],
    250: [["草莓", "Strawberries", "175 g"], ["原味酸奶", "Plain yogurt", "125 g"], ["香蕉", "Banana", "75 g"]],
    500: [["草莓", "Strawberries", "350 g"], ["原味酸奶", "Plain yogurt", "250 g"], ["香蕉", "Banana", "150 g"]],
  }[portion];
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
  if (ingredientList) ingredientList.innerHTML = recipeIngredientRows(getRecipeIngredients(state.portion));
}

function recipeSafetyCard() {
  return `<section class="recipe-safety-card is-warning section-block" aria-labelledby="recipe-safety-title">
    <div class="recipe-safety-heading">
      <h3 id="recipe-safety-title">${T("过敏原", "Allergens")}</h3>
    </div>
    <div class="recipe-allergen-list">
      <div class="recipe-allergen-row"><strong>Mia</strong>${statusPill("花生", "Peanut", "warning")}</div>
      <div class="recipe-allergen-row"><strong>Lucky</strong>${statusPill("无", "None", "success")}</div>
    </div>
    <div class="recipe-safety-body" aria-live="polite">
      <div class="recipe-safety-conclusion"><span aria-hidden="true">!</span><p>${T("当前配方未含花生，请核对原料包装。", "This recipe has no peanut ingredient. Check ingredient labels.")}</p></div>
    </div>
  </section>`;
}

function renderRecipeDetail() {
  const ingredients = getRecipeIngredients(state.portion);
  return mobilePage({
    titleZh: "食谱详情",
    titleEn: "Recipe detail",
    back: "recipes",
    right: `<button class="icon-button textual" type="button" data-action="toggle-favorite">${state.favorite ? T("已收藏", "Saved") : T("收藏", "Save")}</button>`,
    body: `
      <img class="recipe-detail-image" src="./assets/recipes/strawberry-yogurt-ice-cream.jpg" alt="${T("草莓酸奶冰淇淋与新鲜草莓", "Strawberry yogurt ice cream with fresh strawberries")}" loading="eager" decoding="async" />
      ${pageIntro("食谱 · v2.3", "Recipe · v2.3", "草莓酸奶冰淇淋", "Strawberry yogurt ice cream", "酸甜清爽，适合第一次使用冰淇淋机。", "Bright and creamy, designed for a first-time batch.")}
      <div class="recipe-meta" style="margin-top:-6px"><span class="mini-badge">${T("含乳制品", "Contains dairy")}</span><span class="mini-badge">ICE CREAM</span></div>
      ${recipeSafetyCard()}
      <div class="section-block">${sectionHeading("制作份量", "Portion")}
        <div class="portion-selector">${["50", "100", "250", "500"].map((value) => `<button type="button" class="${state.portion === value ? "is-selected" : ""}" data-action="select-portion" data-value="${value}" aria-pressed="${state.portion === value}">${value}</button>`).join("")}</div>
      </div>
      <div class="section-block">${sectionHeading("食材", "Ingredients")}
        <div class="card card-pad" data-recipe-ingredients>${recipeIngredientRows(ingredients)}</div>
      </div>
      <div class="section-block">${sectionHeading("时间与程序", "Timing & program")}
        <div class="metrics-grid"><div class="metric-item"><span>${T("准备", "Prep")}</span><strong>15 min</strong></div><div class="metric-item"><span>${T("预冻", "Freeze")}</span><strong>24 h</strong></div><div class="metric-item"><span>${T("本机程序", "Program")}</span><strong>ICE CREAM</strong></div></div>
      </div>
      <div class="section-block">${sectionHeading("步骤", "Steps")}
        <div class="timeline"><div class="timeline-row"><h3>${T("处理草莓", "Prepare strawberries")}</h3><p>${T("洗净去蒂，切成均匀小块。", "Wash, hull, and cut into even pieces.")}</p></div><div class="timeline-row"><h3>${T("混合食材", "Blend ingredients")}</h3><p>${T("将草莓、酸奶和香蕉混合至顺滑。", "Blend strawberries, yogurt, and banana until smooth.")}</p></div><div class="timeline-row"><h3>${T("装杯并预冻", "Fill and pre-freeze")}</h3><p>${T("不超过 MAX FILL 线，密封后水平放入冷冻室。", "Stay below MAX FILL, seal, and freeze on a level surface.")}</p></div></div>
      </div>
      <div class="alert info"><strong>${T("营养信息为估算", "Nutrition is an estimate")}</strong>${T("实际数值会随品牌、替换食材与份量变化。", "Actual values vary by brand, substitutions, and portion.")}</div>
      <div class="sticky-actions">${button("使用这个食谱", "Use this recipe", "make-recipe", "primary", true)}</div>`,
  });
}

function renderFavorites() {
  return mobilePage({
    titleZh: "我的收藏",
    titleEn: "Favorites",
    captionZh: "8 个食谱",
    captionEn: "8 recipes",
    back: contextualBack("mine"),
    body: `<div class="recipe-grid" style="margin-top:8px">
      ${recipeCard({ flavor: "berry", titleZh: "草莓酸奶", titleEn: "Strawberry yogurt", metaZh: "新手首做", metaEn: "First try", tags: [["已收藏", "Saved"]] })}
      ${recipeCard({ flavor: "avocado", titleZh: "牛油果香蕉", titleEn: "Avocado banana", metaZh: "宝宝阶段", metaEn: "Baby-friendly", tags: [["适合 Mia", "Fits Mia"]] })}
      ${recipeCard({ flavor: "cocoa", titleZh: "燕麦可可", titleEn: "Oat cocoa", metaZh: "社区 · 4.8 分", metaEn: "Community · 4.8", tags: [["低糖", "Low sugar"]], target: "comments" })}
      ${recipeCard({ flavor: "mango", titleZh: "芒果椰乳", titleEn: "Mango coconut", metaZh: "无乳制品", metaEn: "Dairy-free", tags: [["500 mL", "500 mL"]] })}
    </div>`,
  });
}

function renderRecent() {
  return mobilePage({
    titleZh: "最近查看",
    titleEn: "Recently viewed",
    back: contextualBack("mine"),
    body: `
      <p style="margin:4px 0 12px;color:var(--muted-foreground);font-size:10px">${T("按最近浏览时间排序", "Ordered by most recently viewed")}</p>
      <div class="card card-pad">
        ${listRow("草莓酸奶冰淇淋", "Strawberry yogurt ice cream", "今天 18:32", "Today 6:32 PM", "recipe-detail")}
        ${listRow("牛油果香蕉冰淇淋", "Avocado banana ice cream", "今天 12:10 · 适合 Mia", "Today 12:10 PM · Fits Mia", "recipe-detail")}
        ${listRow("芒果椰乳雪葩", "Mango coconut sorbet", "昨天 20:15 · 无乳制品", "Yesterday 8:15 PM · Dairy-free", "recipe-detail")}
        ${listRow("燕麦可可冰淇淋", "Oat cocoa ice cream", "9 月 7 日 · 社区食谱", "Sep 7 · Community recipe", "comments")}
        ${listRow("原味希腊酸奶", "Plain Greek yogurt", "9 月 6 日 · 高蛋白", "Sep 6 · High protein", "recipe-detail")}
      </div>`,
  });
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
          ${recipeCard({ flavor: "avocado", titleZh: "牛油果香蕉", titleEn: "Avocado banana", metaZh: "适合 Mia", metaEn: "Fits Mia", tags: [["宝宝阶段", "Baby"]] })}
          ${recipeCard({ flavor: "yogurt", titleZh: "蓝莓希腊酸奶", titleEn: "Blueberry Greek yogurt", metaZh: "高蛋白", metaEn: "High protein", tags: [["250 mL", "250 mL"]] })}
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
        ${memberChoice("hui", "L", "Lucky", "Lucky", "偏好低添加糖 · 无已知过敏原", "Prefers low added sugar · No known allergens")}
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
        ${cupOption("cup-1", "CUP 1 · 森林绿", "CUP 1 · Forest green", "草莓酸奶冷冻中，不能覆盖", "Strawberry yogurt is freezing and cannot be overwritten", true)}
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
          ${listRow("CUP 3 · 雾紫", "CUP 3 · Mist purple", "草莓酸奶 · 250 mL", "Strawberry yogurt · 250 mL", "cup-detail")}
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

function renderRemaining() {
  const options = [["0", "空杯", "Empty"], ["50", "约 50 mL", "About 50 mL"], ["100", "约 100 mL", "About 100 mL"], ["custom", "自定义", "Custom"]];
  return mobilePage({
    titleZh: "记录余量",
    titleEn: "Log leftovers",
    captionZh: "CUP 3",
    captionEn: "CUP 3",
    back: "eat-record",
    body: `
      ${pageIntro("食用与余量", "Serving & leftovers", "杯子里还剩多少？", "How much is left?", "选择最接近的余量；之后仍可在杯子详情中修正。", "Choose the closest amount; you can correct it later in cup details.")}
      <div class="stack">${options.map(([id, zh, en]) => `<button type="button" class="card choice-card ${state.remaining === id ? "is-selected" : ""}" data-action="remaining" data-value="${id}" style="width:100%;text-align:left;color:inherit"><span class="radio-indicator"></span><div><h3>${T(zh, en)}</h3><p>${id === "0" ? T("下一步进入清洁并释放杯子", "Next: clean and release the cup") : id === "custom" ? T("手动输入剩余量", "Enter a custom amount") : T("保留在 CUP 3 中", "Keep it in CUP 3")}</p></div>${state.remaining === id ? statusPill("已选择", "Selected", "success") : ""}</button>`).join("")}</div>
      ${state.remaining === "custom" ? `<div class="field section-block"><label>${T("自定义余量", "Custom amount")}</label><input value="80 mL" /></div>` : ""}
      <div class="alert warning section-block"><strong>${T("剩余食物请安全储存", "Store leftovers safely")}</strong>${T("尽快密封并冷藏或冷冻；如果出现异味、变色或储存时间不明确，请勿继续食用。", "Seal and refrigerate or freeze promptly. Do not eat if odor, color, or storage time is uncertain.")}</div>
      <div class="sticky-actions">${button(state.remaining === "0" ? "去清洁并释放杯子" : "保存余量", state.remaining === "0" ? "Clean and release cup" : "Save leftovers", state.remaining === "0" ? "clean-release" : "cup-detail", "primary", true)}</div>`,
  });
}

function renderCleanRelease() {
  return mobilePage({
    titleZh: "清洁与释放杯子",
    titleEn: "Clean & release cup",
    captionZh: "CUP 3",
    captionEn: "CUP 3",
    back: "remaining",
    body: `
      ${pageIntro("制作收尾", "Finish the batch", "完成清洁后再释放杯子", "Release the cup after cleaning", "食品接触部件需要拆卸、清洗并完全晾干。", "Disassemble, wash, and fully dry all food-contact parts.")}
      <div class="timeline">
        <div class="timeline-row"><h3>${T("拆卸食品接触部件", "Disassemble food-contact parts")}</h3><p>${T("取下杯盖、搅拌杯盖、刀轴和搅拌刀。", "Remove the storage lid, processing lid, spindle, and paddle.")}</p></div>
        <div class="timeline-row"><h3>${T("选择清洁方式", "Choose a cleaning method")}</h3><p>${T("可查看自清洁、手洗或洗碗机适用说明。", "Review self-clean, hand-wash, or dishwasher guidance.")}</p></div>
        <div class="timeline-row"><h3>${T("处理过敏原交叉接触", "Manage allergen cross-contact")}</h3><p>${T("为过敏成员制作前，按建议彻底清洁接触面。", "Before making for an allergic member, thoroughly clean contact surfaces.")}</p></div>
        <div class="timeline-row"><h3>${T("完全晾干并收纳", "Dry completely and store")}</h3><p>${T("确认无残留水分后再组装或收纳。", "Reassemble or store only after all parts are dry.")}</p></div>
      </div>
      <div class="button-row section-block">${button("查看详细清洁教程", "View cleaning guide", "cleaning", "secondary", true)}${button("联系支持", "Contact support", "contact", "ghost", true)}</div>
      <div class="alert success section-block"><strong>${T("释放杯子会结束活动批次", "Releasing the cup ends the active batch")}</strong>${T("历史记录会保留，CUP 3 将恢复为空闲状态。", "History remains available and CUP 3 returns to available.")}</div>
      <div class="sticky-actions">${button("已清洁，释放 CUP 3", "Cleaned, release CUP 3", "cups", "primary", true, `data-action="release-cup"`)}</div>`,
  });
}

function renderMvpChooseRecipe() {
  const ratio = Number(state.portion) / 250;
  const ingredients = [
    ["草莓", "Strawberries", `${Math.round(175 * ratio)} g`],
    ["原味酸奶", "Plain yogurt", `${Math.round(125 * ratio)} g`],
    ["香蕉", "Banana", `${Math.round(75 * ratio)} g`],
  ];
  const allergenProfile = state.member === "mia"
    ? { zh: "Mia · 花生过敏", en: "Mia · Peanut allergy", statusZh: "需核对", statusEn: "Review", tone: "warning", noteZh: "当前配方不含花生，但酸奶及其他原料可能存在交叉接触，请核对包装标签。", noteEn: "The recipe contains no peanut ingredient, but yogurt and other ingredients may have cross-contact warnings. Check package labels." }
    : state.member === "hui"
      ? { zh: "Lucky · 无已知过敏原", en: "Lucky · No known allergens", statusZh: "已匹配", statusEn: "Matched", tone: "success", noteZh: "食谱含乳制品，请仍以实际食材包装和个人饮食情况为准。", noteEn: "The recipe contains dairy. Always confirm against package labels and personal dietary needs." }
      : { zh: "家庭分享 · 多位成员", en: "Family sharing · Multiple members", statusZh: "逐一核对", statusEn: "Review all", tone: "warning", noteZh: "食谱含乳制品，制作前需要逐一核对每位食用成员的过敏原和饮食限制。", noteEn: "The recipe contains dairy. Review allergens and dietary restrictions for every person before making." };
  return mobilePage({
    titleZh: "开始制作",
    titleEn: "Start making",
    captionZh: "步骤 1/3",
    captionEn: "Step 1/3",
    back: "icecream",
    body: `
      ${stepper(1, 3)}
      ${pageIntro("第 1 步", "Step 1", "选择并确认本次制作", "Choose and confirm this batch", "食谱、成员、份量和杯子集中在一个页面确认。", "Confirm the recipe, member, portion, and cup on one screen.")}
      <div class="section-block">${sectionHeading("食谱", "Recipe", "更换", "Change", "recipe-search")}
        <article class="card choice-card is-selected"><span class="radio-indicator"></span><div><h3>${T("草莓酸奶冰淇淋", "Strawberry yogurt ice cream")}</h3><p>${T("新手首做", "First-time friendly")}</p></div>${statusPill("已选择", "Selected", "success")}</article>
      </div>
      <div class="section-block">${sectionHeading("本次制作", "This batch")}
        <div class="card card-pad">
          <p class="eyebrow" style="color:var(--colors-brands-family-700);margin-bottom:8px">${T("食用成员", "Member")}</p>
          <div class="chip-row" style="margin:0;padding:0 0 14px">
            <button class="chip ${state.member === "mia" ? "is-selected" : ""}" data-action="select-member" data-value="mia">Mia</button>
            <button class="chip ${state.member === "hui" ? "is-selected" : ""}" data-action="select-member" data-value="hui">Lucky</button>
            <button class="chip ${state.member === "family" ? "is-selected" : ""}" data-action="select-member" data-value="family">${T("家庭分享", "Family")}</button>
          </div>
          <p class="eyebrow" style="color:var(--colors-brands-family-700);margin-bottom:8px">${T("制作份量", "Portion")}</p>
          <div class="portion-selector">${["50", "100", "250", "500"].map((value) => `<button type="button" class="${state.portion === value ? "is-selected" : ""}" data-action="select-portion" data-value="${value}">${value}</button>`).join("")}</div>
          <div class="task-meta"><div class="meta-item"><span>${T("使用杯子", "Cup")}</span><strong>${T("CUP 3 · 雾紫", "CUP 3 · Mist purple")}</strong></div><div class="meta-item"><span>${T("杯子状态", "Status")}</span><strong>${T("空闲可用", "Available")}</strong></div></div>
        </div>
      </div>
      <div class="section-block">${sectionHeading("过敏原核对", "Allergen review")}
        <div class="card card-pad stack compact">
          ${listRow("食谱含有", "Recipe contains", "乳制品", "Dairy", "", statusPill("已识别", "Identified", "info"))}
          ${listRow("成员档案", "Member profile", allergenProfile.zh, allergenProfile.en, "", statusPill(allergenProfile.statusZh, allergenProfile.statusEn, allergenProfile.tone))}
        </div>
        <div class="alert ${allergenProfile.tone === "success" ? "info" : "warning"}" style="margin-top:10px"><strong>${T("核对结论", "Review result")}</strong>${T(allergenProfile.noteZh, allergenProfile.noteEn)}</div>
      </div>
      <div class="section-block">${sectionHeading("食材用量", "Ingredients")}
        <div class="card card-pad">${ingredients.map(([zh, en, amount]) => `<div class="ingredient-row"><span>${T(zh, en)}</span><span>${amount}</span></div>`).join("")}</div>
      </div>
      <div class="sticky-actions">${button("确认并进入第 2 步", "Confirm and continue to Step 2", "freeze-confirm", "primary", true)}</div>`,
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
  const isCountdown = freezeFlowMode === "countdown";
  const countdown = formatFreezeCountdown(freezeCountdownSeconds);
  const countdownPanel = isCountdown
    ? `<article class="card card-pad section-block">
        <div class="row-between"><div><p class="eyebrow" style="color:var(--colors-brands-family-700)">${T("冷冻倒计时", "Freezing countdown")}</p><h2 data-freeze-countdown style="margin:6px 0 0;font-family:var(--font-brand);font-size:36px;font-weight:400">${countdown}</h2></div>${statusPill("即将完成", "Nearly ready", "info")}</div>
        <div class="progress-track freeze-progress"><div class="progress-fill" data-freeze-countdown-progress style="width:90%"></div></div>
        <div class="freeze-progress-meta"><span>${T("倒计时结束后自动进入第 3 步", "Step 3 opens automatically when finished")}</span><strong>${T("本机制作", "Make on machine")}</strong></div>
      </article>`
    : "";
  const freezeAction = isCountdown
    ? `<div class="sticky-actions">${button(`${freezeCountdownSeconds} 秒后自动进入`, `Continue automatically in ${freezeCountdownSeconds}s`, "", "primary", true, "data-freeze-countdown-action disabled aria-disabled=\"true\"")}</div>`
    : `<div class="sticky-actions">${button("已入冻，开始倒计时", "Frozen, start countdown", "", "primary", true, `data-action="start-freeze-countdown"`)}</div>`;
  return mobilePage({
    titleZh: "备料与冷冻",
    titleEn: "Prep & freeze",
    captionZh: "步骤 2/3",
    captionEn: "Step 2/3",
    back: "make-recipe",
    body: `
      ${stepper(2, 3)}
      ${pageIntro("第 2 步", "Step 2", "完成备料并记录入冻", "Prep and record freezing", "页面只提示影响制作结果的核心信息，不要求逐项打卡。", "Only the information that affects the result is shown; no item-by-item check-in is required.")}
      <article class="card card-pad">
        <div class="row-between"><div><p class="eyebrow" style="color:var(--colors-brands-family-700)">CUP 3 · 250 mL</p><h3 style="margin:5px 0 0">${T("混合食材 → 装杯 → 水平入冻", "Mix → fill → freeze level")}</h3></div>${statusPill("核心动作", "Essentials", "info")}</div>
        <p style="margin:12px 0 0;color:var(--muted-foreground);font-size:10px;line-height:16px">${T("食材混合均匀，杯内不超过 MAX FILL 线；密封后保持水平放入冰箱。", "Mix evenly, stay below MAX FILL, seal the cup, and place it level in the freezer.")}</p>
      </article>
      <div class="section-block">${sectionHeading("记录入冻时间", "Record freezer time")}
        <div class="card card-pad"><div class="field"><label>${T("9 月 22 日", "September 22")}</label><input type="time" value="16:05" /></div><div class="task-meta"><div class="meta-item"><span>${T("最低冷冻", "Minimum freeze")}</span><strong>${T("至少 24 小时", "At least 24h")}</strong></div><div class="meta-item"><span>${T("预计可制作", "Estimated ready")}</span><strong>${T("明天 16:05", "Tomorrow 4:05 PM")}</strong></div></div>${sourceNote("recorded")}</div>
      </div>
      ${countdownPanel}
      ${freezeAction}`,
  });
}

function renderFreezeCountdownContent(showEditAction) {
  const countdown = formatFreezeCountdown(freezeCountdownSeconds);
  const countdownButton = button(`${freezeCountdownSeconds} 秒后自动进入`, `Continue automatically in ${freezeCountdownSeconds}s`, "", "primary", true, "data-freeze-countdown-action disabled aria-disabled=\"true\"");
  const actions = showEditAction ? `<div class="button-row">${button("修改入冻记录", "Edit freezer record", "freeze-confirm", "secondary", true)}${countdownButton}</div>` : countdownButton;
  return `
    ${stepper(2, 3)}
    ${pageIntro("冷冻完成确认", "Freezing confirmation", "10 秒后进入本机制作", "On-machine making starts in 10 seconds", "最低冷冻时长已满足，倒计时结束后自动进入下一步。", "The minimum freezing time has been met. The next step opens automatically when the countdown ends.")}
    <article class="card card-pad">
      <div class="row-between"><div><p class="eyebrow" style="color:var(--colors-brands-family-700)">${T("进入下一步倒计时", "Next step starts in")}</p><h2 data-freeze-countdown style="margin:6px 0 0;font-family:var(--font-brand);font-size:42px;font-weight:400">${countdown}</h2></div>${statusPill("CUP 3", "CUP 3", "info")}</div>
      <div class="progress-track freeze-progress"><div class="progress-fill" data-freeze-countdown-progress style="width:90%"></div></div>
      <div class="freeze-progress-meta"><span>${T("草莓酸奶 · 250 mL", "Strawberry yogurt · 250 mL")}</span><strong>${T("已满足 24 小时", "24h completed")}</strong></div>
    </article>
    <div class="alert warning section-block"><strong>${T("请确认食材已完全冻实", "Confirm the mixture is fully frozen")}</strong>${T("倒计时结束后将直接进入本机安装和程序指引。", "The assembly and program guide opens automatically after the countdown.")}</div>
    <div class="sticky-actions"><p class="action-note">${T("无需再次点击，完成后自动进入第 3 步", "No extra tap needed; Step 3 opens automatically")}</p>${actions}</div>`;
}

function renderMvpBatchStatus() {
  return mobilePage({
    titleZh: "批次状态",
    titleEn: "Batch status",
    captionZh: "CUP 3 · 草莓酸奶",
    captionEn: "CUP 3 · Strawberry yogurt",
    back: "icecream",
    body: renderFreezeCountdownContent(true),
  });
}

function renderMachineResultFields() {
  const resultOption = (id, zh, en) => `<button type="button" class="chip ${state.taskStatus === id ? "is-selected" : ""}" data-action="task-status" data-value="${id}">${T(zh, en)}</button>`;
  const remainingOption = (id, zh, en) => `<button type="button" class="${state.remaining === id ? "is-selected" : ""}" data-action="remaining" data-value="${id}">${T(zh, en)}</button>`;
  const isEmpty = state.remaining === "0";
  return `
    <div class="section-block">${sectionHeading("制作结果", "Result")}
      <div class="chip-row" style="margin:0;padding:0">${resultOption("complete", "已完成", "Completed")}${resultOption("incomplete", "未完成", "Not completed")}${resultOption("cancelled", "已取消", "Cancelled")}</div>
    </div>
    <div class="section-block">${sectionHeading("杯中余量", "Leftovers")}
      <div class="portion-selector">${remainingOption("0", "空杯", "Empty")}${remainingOption("50", "约 50 mL", "About 50 mL")}${remainingOption("100", "约 100 mL", "About 100 mL")}${remainingOption("custom", "自定义", "Custom")}</div>
      ${state.remaining === "custom" ? `<div class="field" style="margin-top:10px"><label>${T("自定义余量", "Custom amount")}</label><input value="80 mL" /></div>` : ""}
    </div>
    ${isEmpty ? `<div class="alert success section-block"><strong>${T("清洁后释放 CUP 3", "Release CUP 3 after cleaning")}</strong>${T("确认接触部件已清洗并晾干，再结束批次。", "Wash and dry all contact parts before finishing.")}</div>` : `<div class="alert info section-block"><strong>${T("CUP 3 将继续占用", "CUP 3 remains in use")}</strong>${T("余量会保存在杯子详情中。", "The leftover amount will be saved in cup details.")}</div>`}
    <div class="sticky-actions">${button(isEmpty ? "结束并释放 CUP 3" : "保存并结束制作", isEmpty ? "Finish and release CUP 3" : "Save and finish", "icecream", "primary", true)}</div>`;
}

function renderMachineFinishContent() {
  return `
    ${stepper(3, 3)}
    ${pageIntro("完成制作", "Finish making", "记录结果并结束批次", "Log the result and finish", "只保留制作结果和杯中余量两个必要信息。", "Only the result and leftovers are required.")}
    ${renderMachineResultFields()}`;
}

function renderMvpMachineGuide() {
  return mobilePage({
    titleZh: "本机制作与完成",
    titleEn: "Make & finish",
    captionZh: "步骤 3/3",
    captionEn: "Step 3/3",
    back: "freeze-confirm",
    body: `
      ${stepper(3, 3)}
      ${pageIntro("第 3 步", "Step 3", "完成本机制作并记录结果", "Make on the machine and log the result", "本机操作、制作结果和杯中余量集中在一个页面完成。", "Complete the on-machine actions, result, and leftovers on one screen.")}
      <div class="card card-pad stack compact">
        ${listRow("1. 取出并核对 CUP 3", "1. Take and verify CUP 3", "杯体保持水平，移除储存杯盖", "Keep the cup level and remove the storage lid", "", statusPill("人工核对", "Manual check", "info"))}
        ${listRow("2. 安装杯盖、刀轴与搅拌刀", "2. Fit lid, spindle, and paddle", "按机器说明锁定到位", "Lock each part as shown on the machine", "", "")}
        ${listRow("3. 在面板选择程序并启动", "3. Select the program and start", "ICE CREAM · 250 mL", "ICE CREAM · 250 mL", "", statusPill("本机启动", "Start locally", "success"))}
      </div>
      <div class="alert warning section-block"><strong>${T("APP 不能远程启动", "The app cannot start the machine remotely")}</strong>${T("请在确认安装正确后，在机器本体按键启动。", "After confirming assembly, start the program using the controls on the machine.")}</div>
      <div class="divider-label">${T("制作完成后", "After making")}</div>
      ${renderMachineResultFields()}`,
  });
}

function renderMvpFinishBatch() {
  return mobilePage({
    titleZh: "完成与释放",
    titleEn: "Finish batch",
    captionZh: "步骤 3/3",
    captionEn: "Step 3/3",
    back: "machine-program",
    body: renderMachineFinishContent(),
  });
}

function renderRecords() {
  return mobilePage({
    titleZh: "制作记录",
    titleEn: "Making records",
    back: contextualBack("icecream-mine"),
    right: `<button class="icon-button textual" type="button" data-action="show-toast" data-message-zh="筛选条件已打开" data-message-en="Filters opened">${T("筛选", "Filter")}</button>`,
    body: `
      <div class="chip-row" style="margin-top:4px"><button class="chip is-selected">${T("全部", "All")}</button><button class="chip">Mia</button><button class="chip">CUP 1</button><button class="chip">${T("已完成", "Completed")}</button></div>
      <div class="divider-label">${T("今天", "Today")}</div>
      <div class="stack">
        <article class="card order-card" data-route-card="record-detail" tabindex="0"><div class="order-head"><div><h3>${T("草莓酸奶冰淇淋", "Strawberry yogurt ice cream")}</h3><p>${T("CUP 3 · Mia · 250 mL", "CUP 3 · Mia · 250 mL")}</p></div>${statusPill("已完成", "Completed", "success")}</div><div class="task-meta"><div class="meta-item"><span>${T("制作", "Made")}</span><strong>20:22</strong></div><div class="meta-item"><span>${T("余量", "Left")}</span><strong>100 mL</strong></div></div></article>
      </div>
      <div class="divider-label">${T("本周", "This week")}</div>
      <div class="stack">
        <article class="card order-card" data-route-card="record-detail" tabindex="0"><div class="order-head"><div><h3>${T("芒果椰乳雪葩", "Mango coconut sorbet")}</h3><p>${T("9 月 7 日 · CUP 2 · 家庭分享", "Sep 7 · CUP 2 · Family")}</p></div>${statusPill("已食用完", "Finished", "success")}</div><div class="task-meta"><div class="meta-item"><span>${T("份量", "Portion")}</span><strong>500 mL</strong></div><div class="meta-item"><span>${T("程序", "Program")}</span><strong>SORBET</strong></div></div></article>
        <article class="card order-card" data-route-card="record-detail" tabindex="0"><div class="order-head"><div><h3>${T("牛油果香蕉冰淇淋", "Avocado banana ice cream")}</h3><p>${T("9 月 3 日 · CUP 1 · Mia", "Sep 3 · CUP 1 · Mia")}</p></div>${statusPill("已完成", "Completed", "success")}</div><div class="task-meta"><div class="meta-item"><span>${T("份量", "Portion")}</span><strong>250 mL</strong></div><div class="meta-item"><span>${T("程序", "Program")}</span><strong>ICE CREAM</strong></div></div></article>
      </div>
      <div class="divider-label">${T("更早", "Earlier")}</div>
      <div class="card card-pad">
        ${listRow("蓝莓希腊酸奶", "Blueberry Greek yogurt", "8 月 29 日 · 已完成 · 250 mL", "Aug 29 · Completed · 250 mL", "record-detail")}
        ${listRow("香蕉可可燕麦", "Banana cocoa oat", "8 月 24 日 · 已取消 · 250 mL", "Aug 24 · Cancelled · 250 mL", "record-detail")}
      </div>`,
  });
}

function renderRecordDetail() {
  return mobilePage({
    titleZh: "制作记录详情",
    titleEn: "Record detail",
    captionZh: "2026 年 9 月 7 日",
    captionEn: "September 7, 2026",
    back: "records",
    body: `
      <div class="recipe-art mango" style="height:180px;border-radius:24px"></div>
      ${pageIntro("历史批次 · 已锁定快照", "Historical batch · Snapshot locked", "芒果椰乳雪葩", "Mango coconut sorbet", "食谱后续更新不会改变本次历史记录。", "Later recipe updates do not change this historical record.")}
      <div class="metrics-grid"><div class="metric-item"><span>${T("杯子", "Cup")}</span><strong>CUP 2</strong></div><div class="metric-item"><span>${T("成员", "Members")}</span><strong>${T("家庭", "Family")}</strong></div><div class="metric-item"><span>${T("份量", "Portion")}</span><strong>500 mL</strong></div></div>
      <div class="section-block">${sectionHeading("时间记录", "Timing")}
        <div class="timeline"><div class="timeline-row"><h3>${T("实际入冻", "Recorded freezer time")}</h3><p>2026-09-06 · 17:40</p></div><div class="timeline-row"><h3>${T("最早可制作", "Earliest ready")}</h3><p>2026-09-07 · 17:40</p></div><div class="timeline-row"><h3>${T("用户确认完成", "User confirmed completion")}</h3><p>2026-09-07 · 18:08</p></div><div class="timeline-row"><h3>${T("记录食用完", "Marked finished")}</h3><p>2026-09-07 · 18:40</p></div></div>
      </div>
      <div class="section-block">${sectionHeading("食材快照", "Ingredient snapshot")}
        <div class="card card-pad"><div class="ingredient-row"><span>${T("芒果", "Mango")}</span><span>340 g</span></div><div class="ingredient-row"><span>${T("椰乳", "Coconut milk")}</span><span>260 g</span></div><div class="ingredient-row"><span>${T("青柠汁", "Lime juice")}</span><span>12 g</span></div></div>
      </div>
      <div class="section-block">${sectionHeading("程序与食用", "Program & servings")}
        <div class="card card-pad stack compact">${listRow("推荐程序", "Recommended program", "SORBET", "SORBET", "", "")}${listRow("用户记录结果", "User-recorded result", "已完成", "Completed", "", statusPill("你记录的状态", "Recorded by you", "info"))}${listRow("食用成员", "Members served", "Lucky、Mia、Noah", "Lucky, Mia, Noah", "", "")}${listRow("最终余量", "Final leftovers", "0 mL · 已食用完", "0 mL · Finished", "", "")}</div>
      </div>
      <div class="sticky-actions">${button("按此批次再做一次", "Make this batch again", "make-recipe", "primary", true)}</div>`,
  });
}

function renderSupport() {
  return mobilePage({
    titleZh: "使用帮助",
    titleEn: "Help center",
    captionZh: "冰淇淋机 IM01",
    captionEn: "Ice cream maker IM01",
    back: "icecream",
    body: `
      ${pageIntro("操作与服务", "Guidance & support", "需要哪方面的帮助？", "How can we help?", "先查看可执行步骤；涉及损伤、冒烟或异常过热时请立即停止使用。", "Start with actionable guidance. Stop using the product immediately for damage, smoke, or overheating.")}
      <div class="support-grid">
        <article class="card support-card" data-route-card="parts" tabindex="0"><span class="quick-label">01</span><h3>${T("部件识别", "Parts guide")}</h3><p>${T("认识杯盖、刀轴和搅拌刀", "Identify lids, spindle, and paddle")}</p></article>
        <article class="card support-card" data-route-card="install" tabindex="0"><span class="quick-label">02</span><h3>${T("安装教程", "Assembly")}</h3><p>${T("装刀、放杯、锁盖和机头", "Paddle, cup, lid, and head")}</p></article>
        <article class="card support-card" data-route-card="programs" tabindex="0"><span class="quick-label">03</span><h3>${T("程序说明", "Programs")}</h3><p>${T("8 个程序与份量选择", "Eight programs and portions")}</p></article>
        <article class="card support-card" data-route-card="cleaning" tabindex="0"><span class="quick-label">04</span><h3>${T("清洁维护", "Cleaning")}</h3><p>${T("自清洁、手洗与洗碗机", "Self-clean, hand wash, dishwasher")}</p></article>
        <article class="card support-card" data-route-card="faq" tabindex="0"><span class="quick-label">05</span><h3>${T("问题与错误", "Issues & errors")}</h3><p>${T("选择错误码或问题现象", "Choose an error code or symptom")}</p></article>
        <article class="card support-card" data-route-card="risk" tabindex="0"><span class="quick-label">STOP</span><h3>${T("停止使用提示", "Stop-use guide")}</h3><p>${T("异常情况与安全处理", "Safety response for abnormal conditions")}</p></article>
      </div>
      <div class="section-block">${sectionHeading("常见问题", "Popular questions", "查看更多", "View more", "faq")}
        <div class="card card-pad stack compact">${listRow("为什么程序无法启动？", "Why won't the program start?", "检查杯盖、外碗和机头是否到位", "Check the lid, outer bowl, and machine head", "faq")}${listRow("什么时候使用 RE-SPIN？", "When should I use RE-SPIN?", "查看程序说明并根据实际成品主动决定", "Review the guide and decide based on the actual result", "programs")}${listRow("如何避免过敏原交叉接触？", "How do I reduce allergen cross-contact?", "查看彻底清洁建议", "Review thorough-cleaning guidance", "cleaning")}</div>
      </div>
      <div class="sticky-actions">${button("联系人工客服", "Contact support", "contact", "secondary", true)}</div>`,
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

function renderCleaning() {
  return mobilePage({
    titleZh: "清洁与维护",
    titleEn: "Cleaning & care",
    back: "support",
    body: `
      ${pageIntro("每次使用后", "After every use", "彻底清洁食品接触部件", "Clean every food-contact part", "先断电并拆卸部件，再选择适合的清洁方式。", "Unplug and disassemble first, then choose the appropriate cleaning method.")}
      <div class="quick-grid">
        <article class="card quick-card" data-action="show-toast" data-message-zh="已打开自清洁步骤" data-message-en="Self-clean steps opened" tabindex="0"><span class="quick-label">AUTO</span><h3>${T("自清洁", "Self-clean")}</h3><p>${T("按说明加入清水并运行指定程序", "Add water and run the specified cycle")}</p></article>
        <article class="card quick-card" data-action="show-toast" data-message-zh="已打开手洗步骤" data-message-en="Hand-wash steps opened" tabindex="0"><span class="quick-label">HAND</span><h3>${T("手洗", "Hand wash")}</h3><p>${T("温水、中性清洁剂、软海绵", "Warm water, mild soap, soft sponge")}</p></article>
        <article class="card quick-card" data-action="show-toast" data-message-zh="已打开洗碗机说明" data-message-en="Dishwasher guide opened" tabindex="0"><span class="quick-label">DW</span><h3>${T("洗碗机", "Dishwasher")}</h3><p>${T("仅放入说明书允许的部件", "Only load approved parts")}</p></article>
        <article class="card quick-card" data-action="show-toast" data-message-zh="已打开主机擦拭说明" data-message-en="Main-unit care opened" tabindex="0"><span class="quick-label">UNIT</span><h3>${T("主机擦拭", "Main unit")}</h3><p>${T("断电后用微湿软布擦拭", "Unplug and wipe with a damp soft cloth")}</p></article>
      </div>
      <div class="section-block">${sectionHeading("过敏原交叉接触", "Allergen cross-contact")}
        <div class="alert warning"><strong>${T("给过敏成员制作前需要加强清洁", "Use enhanced cleaning before making for an allergic member")}</strong>${T("拆卸搅拌刀、刀轴、杯盖与杯体，清除缝隙残留，并使用独立清洁工具或杯子（如家庭已有此规则）。", "Disassemble the paddle, spindle, lids, and cup, remove residue from crevices, and use dedicated tools or cups if your household follows that practice.")}</div>
      </div>
      <div class="section-block">${sectionHeading("晾干与收纳", "Drying & storage")}
        <div class="card card-pad stack compact">${listRow("完全晾干", "Dry completely", "避免带水组装或密闭收纳", "Do not reassemble or seal while wet", "", "01")}${listRow("检查磨损", "Inspect wear", "查看刀轴、杯体、密封圈和杯盖", "Check the spindle, cup, seal, and lids", "", "02")}${listRow("分开放置", "Store separately", "避免搅拌刀在杯内松动碰撞", "Avoid loose paddle contact inside the cup", "", "03")}</div>
      </div>
      <div class="sticky-actions">${button("清洁完成，返回杯子", "Cleaning complete, return to cups", "cups", "primary", true)}</div>`,
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
    captionZh: "草莓酸奶 · 186 条",
    captionEn: "Strawberry yogurt · 186",
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
        <article class="card order-card" data-route-card="recipe-detail" tabindex="0"><div class="order-head"><div><h3>${T("Mia 的低甜草莓酸奶", "Mia's less-sweet strawberry yogurt")}</h3><p>${T("源自官方 v2.3 · 香蕉调整为 60 g", "From official v2.3 · Banana adjusted to 60 g")}</p></div>${statusPill("私有", "Private", "info")}</div><div class="recipe-meta"><span class="mini-badge">250 mL</span><span class="mini-badge">Mia</span><span class="mini-badge">${T("复做 3 次", "Made 3 times")}</span></div></article>
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
  return mobilePage({
    titleZh: "配件与服务",
    titleEn: "Accessories",
    captionZh: "V1.1",
    captionEn: "V1.1",
    back: contextualBack("icecream-mine"),
    right: `<button class="icon-button textual" type="button" data-route="orders">${T("订单", "Orders")}</button>`,
    body: `
      ${pageIntro("适配 IM01", "For IM01", "让多个口味更容易安排", "Make multiple flavors easier to manage", "配件页面强调适配、使用与服务信息，不替代核心设备体验。", "Accessory pages focus on compatibility, use, and service without replacing the core device experience.")}
      <div class="search-box"><span>${T("搜索杯子、杯盖或清洁配件", "Search cups, lids, or cleaning tools")}</span></div>
      <div class="chip-row"><button class="chip is-selected">${T("全部", "All")}</button><button class="chip">${T("搅拌杯", "Cups")}</button><button class="chip">${T("杯盖", "Lids")}</button><button class="chip">${T("标签", "Labels")}</button><button class="chip">${T("清洁", "Cleaning")}</button></div>
      <div class="section-block">${sectionHeading("常用配件", "Popular accessories")}
        <div class="accessory-grid">
          <article class="card accessory-card" data-route-card="accessory-detail" tabindex="0"><div class="accessory-art"></div><div class="accessory-card-copy"><h3>${T("IM01 额外搅拌杯", "IM01 extra pint cup")}</h3><p>${T("适配 IM01 · 含密封杯盖", "For IM01 · Storage lid included")}</p><div class="recipe-meta"><span class="mini-badge">${T("多口味", "More flavors")}</span></div></div></article>
          <article class="card accessory-card" data-route-card="accessory-detail" tabindex="0"><div class="accessory-art lid"></div><div class="accessory-card-copy"><h3>${T("密封杯盖 2 件装", "Storage lids · 2 pack")}</h3><p>${T("适配 IM01 搅拌杯", "Fits IM01 pint cups")}</p><div class="recipe-meta"><span class="mini-badge">${T("储存", "Storage")}</span></div></div></article>
          <article class="card accessory-card" data-route-card="accessory-detail" tabindex="0"><div class="accessory-art clean"></div><div class="accessory-card-copy"><h3>${T("细节清洁刷", "Detail cleaning brush")}</h3><p>${T("用于杯盖和缝隙清洁", "For lid and crevice cleaning")}</p><div class="recipe-meta"><span class="mini-badge">${T("清洁", "Cleaning")}</span></div></div></article>
          <article class="card accessory-card" data-route-card="accessory-detail" tabindex="0"><div class="accessory-art" style="--colors-family-soft-strong:#eadff0"></div><div class="accessory-card-copy"><h3>${T("杯子彩色标签", "Cup color labels")}</h3><p>${T("6 色 · 实体杯识别", "6 colors · Physical cup ID")}</p><div class="recipe-meta"><span class="mini-badge">${T("家庭管理", "Household")}</span></div></div></article>
        </div>
      </div>
      <div class="alert info section-block"><strong>${T("购买方式确认", "Purchase method")}</strong>${T("结算可能在 APP 内完成，或跳转 Momcozy 商城；以正式商业方案为准。", "Checkout may happen in the app or redirect to the Momcozy store, depending on the final commerce plan.")}</div>`,
  });
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
  return mobilePage({
    titleZh: "家庭成员",
    titleEn: "Household members",
    back: "icecream",
    body: `
      ${pageIntro("制作成员档案", "Making profiles", "让食谱提示更贴近家人", "Make recipe guidance fit your household", "只收集制作所需的年龄阶段、偏好、饮食限制与过敏原。", "Collect only the life stage, preferences, dietary restrictions, and allergens needed for making guidance.")}
      <div class="stack">
        <article class="card choice-card" data-route-card="member-detail" tabindex="0"><span class="member-avatar">M</span><div><h3>Mia · 18 ${T("个月", "months")}</h3><p>${T("花生过敏 · 低甜度 · 宝宝阶段", "Peanut allergy · Low sweetness · Baby-friendly")}</p></div><span class="chevron">›</span></article>
        <article class="card choice-card" data-route-card="member-detail" tabindex="0"><span class="member-avatar">L</span><div><h3>Lucky</h3><p>${T("低添加糖 · 喜欢酸奶和水果", "Low added sugar · Likes yogurt and fruit")}</p></div><span class="chevron">›</span></article>
        <article class="card choice-card" data-route-card="member-detail" tabindex="0"><span class="member-avatar">N</span><div><h3>Noah</h3><p>${T("无已知过敏原 · 喜欢可可", "No known allergens · Likes cocoa")}</p></div><span class="chevron">›</span></article>
      </div>
      <div class="alert info section-block"><strong>${T("数据最小化", "Data minimization")}</strong>${T("不要求填写与食谱适配无关的健康信息；成员删除后历史记录匿名保留。", "Health information unrelated to recipe fit is not requested; historical records remain anonymized after member deletion.")}</div>
      <div class="sticky-actions">${button("添加家庭成员", "Add household member", "member-detail", "secondary", true, `data-action="show-toast" data-message-zh="新成员表单已打开" data-message-en="New member form opened"`)}</div>`,
  });
}

function renderMemberDetail() {
  return mobilePage({
    titleZh: "成员饮食偏好",
    titleEn: "Member preferences",
    captionZh: "Mia · 18 个月",
    captionEn: "Mia · 18 months",
    back: "members",
    body: `
      <div class="card card-pad" style="display:flex;align-items:center;gap:12px"><span class="member-avatar" style="width:54px;height:54px">M</span><div><h2 style="margin:0;font-family:var(--font-brand);font-size:24px;font-weight:400">Mia</h2><p style="margin:4px 0 0;color:var(--muted-foreground);font-size:10px">${T("宝宝阶段 · 18 个月", "Baby stage · 18 months")}</p></div></div>
      <div class="section-block">${sectionHeading("年龄阶段", "Life stage")}
        <div class="portion-selector"><button>${T("0–6 月", "0–6 mo")}</button><button>${T("6–12 月", "6–12 mo")}</button><button class="is-selected">${T("12–24 月", "12–24 mo")}</button><button>2+</button></div>
      </div>
      <div class="section-block">${sectionHeading("过敏原", "Allergens")}
        <div class="chip-row" style="margin-left:0;margin-right:0;padding:0"><button class="chip is-selected">${T("花生", "Peanut")}</button><button class="chip">${T("乳制品", "Dairy")}</button><button class="chip">${T("鸡蛋", "Egg")}</button><button class="chip">${T("大豆", "Soy")}</button></div>
      </div>
      <div class="section-block">${sectionHeading("饮食与口味", "Diet & taste")}
        <div class="chip-row" style="margin-left:0;margin-right:0;padding:0"><button class="chip is-selected">${T("低甜度", "Low sweetness")}</button><button class="chip is-selected">${T("水果", "Fruit")}</button><button class="chip is-selected">${T("酸奶", "Yogurt")}</button><button class="chip">${T("可可", "Cocoa")}</button></div>
      </div>
      <div class="section-block">${sectionHeading("不喜欢的食材", "Disliked ingredients")}
        <div class="field"><input value="${T("薄荷", "Mint")}" /></div>
      </div>
      <div class="alert warning section-block"><strong>${T("成员档案不能替代专业判断", "Profiles do not replace professional advice")}</strong>${T("给婴幼儿添加新食材或处理严重过敏时，请遵循医生建议并核对产品包装。", "For new infant foods or severe allergies, follow clinical advice and check product packaging.")}</div>
      <div class="sticky-actions">${button("保存成员偏好", "Save preferences", "members", "primary", true, `data-action="show-toast" data-message-zh="成员偏好已保存" data-message-en="Member preferences saved"`)}</div>`,
  });
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
  community: renderCommunity,
  mine: renderMine,
  icecream: renderIcecream,
  "icecream-mine": renderIcecreamMine,
  tasks: renderTasks,
  "task-detail": renderTaskDetail,
  cups: renderCups,
  "cup-detail": renderCupDetail,
  recipes: renderRecipes,
  "recipe-results": renderRecipeResults,
  "recipe-search": renderRecipeSearch,
  "recipe-filter": renderRecipeFilter,
  "recipe-detail": renderRecipeDetail,
  favorites: renderFavorites,
  recent: renderRecent,
  "make-recipe": renderMvpChooseRecipe,
  "freeze-confirm": renderMvpPrepFreeze,
  "freeze-countdown": renderMvpBatchStatus,
  "machine-program": renderMvpMachineGuide,
  remaining: renderMvpFinishBatch,
  records: renderRecords,
  "record-detail": renderRecordDetail,
  support: renderSupport,
  parts: renderParts,
  install: renderInstall,
  programs: renderPrograms,
  cleaning: renderCleaning,
  faq: renderFaq,
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
  members: renderMembers,
  "member-detail": renderMemberDetail,
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
  if (!renderers[state.route]) state.route = "devices";
  const routeChanged = renderedRoute !== state.route;
  if (routeChanged) {
    stopFreezeCountdown();
    if (state.route === "freeze-confirm") freezeFlowMode = "prep";
    if (state.route === "freeze-countdown") freezeFlowMode = "countdown";
    if (["freeze-confirm", "freeze-countdown"].includes(state.route)) freezeCountdownSeconds = FREEZE_COUNTDOWN_DURATION;
  }
  renderControls();
  renderCatalog();
  renderRouteMeta();
  app.innerHTML = renderers[state.route]();
  app.querySelector(".mobile-scroll")?.scrollTo(0, 0);
  renderedRoute = state.route;
  if (isFreezeCountdownActive()) startFreezeCountdown();
}

function navigate(target) {
  if (!renderers[target]) return;
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

function activateElement(element) {
  const routeTarget = element.closest("[data-route]")?.dataset.route;
  if (routeTarget) {
    if (routeTarget !== state.route && ["cups", "records", "favorites", "recent", "private-recipe", "members", "accessories", "orders"].includes(routeTarget)) state.returnRoute = state.route;
    navigate(routeTarget);
    return;
  }
  const routeCard = element.closest("[data-route-card]");
  if (routeCard) {
    if (routeCard.dataset.cup) state.cup = routeCard.dataset.cup;
    if (routeCard.dataset.routeCard !== state.route && ["cups", "records", "favorites", "recent", "private-recipe", "members", "accessories", "orders"].includes(routeCard.dataset.routeCard)) state.returnRoute = state.route;
    saveState();
    navigate(routeCard.dataset.routeCard);
    return;
  }
  const actionElement = element.closest("[data-action]");
  if (!actionElement) return;
  const { action, value } = actionElement.dataset;
  if (action === "version") state.version = value;
  if (action === "select-portion") {
    state.portion = value;
    if (state.route === "recipe-detail") {
      saveState();
      updateRecipeDetailPortion();
      return;
    }
  }
  if (action === "select-cup") state.cup = value;
  if (action === "select-member") state.member = value;
  if (action === "start-freeze-countdown") {
    freezeFlowMode = "countdown";
    freezeCountdownSeconds = FREEZE_COUNTDOWN_DURATION;
  }
  if (action === "toggle-favorite") {
    state.favorite = !state.favorite;
    showToast(state.favorite ? "已收藏食谱" : "已取消收藏", state.favorite ? "Recipe saved" : "Recipe removed from favorites");
  }
  if (action === "toggle-prep") {
    const index = Number(value);
    if (state.prepSteps.has(index)) state.prepSteps.delete(index);
    else state.prepSteps.add(index);
  }
  if (action === "task-status") state.taskStatus = value;
  if (action === "remaining") state.remaining = value;
  if (action === "error-code") state.errorCode = value;
  if (action === "rating") state.rating = Number(value);
  if (action === "toggle-filter") {
    if (state.filters.has(value)) state.filters.delete(value);
    else state.filters.add(value);
  }
  if (action === "reset-filters") state.filters.clear();
  if (action === "release-cup") showToast("CUP 3 已释放，可用于新批次", "CUP 3 is available for a new batch");
  if (action === "show-toast") showToast(actionElement.dataset.messageZh || "操作已完成", actionElement.dataset.messageEn || "Action completed");
  saveState();
  render();
}

document.addEventListener("click", (event) => activateElement(event.target));
document.addEventListener("keydown", (event) => {
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
  if (renderers[target]) state.route = target;
  render();
});

render();
