const app = document.querySelector("#reports-app");
const DEFAULT_AUDIO_SRC = "assets/audio/elevenlabs-testji.mp3";

const categories = [
  { id: "All", label: "All", icon: "library", color: "gold" },
  { id: "June 2026", label: "June 2026", icon: "clock", color: "blue" },
  { id: "Marriage", label: "Marriage", icon: "home", color: "pink" },
  { id: "Love", label: "Love", icon: "heart", color: "coral" },
  { id: "Career", label: "Career", icon: "briefcase", color: "blue" },
  { id: "Wealth", label: "Wealth", icon: "coins", color: "yellow" },
  { id: "Education", label: "Education", icon: "graduation", color: "green" },
];

const curationPicks = [
  {
    label: "Rashi read",
    title: "Scorpio x Love x June",
    caption: "cheap read/listen",
    icon: "heart",
    open: "relationship-improve-june",
    color: "coral",
  },
  {
    label: "Transit",
    title: "Leo June transits",
    caption: "monthly audio",
    icon: "sun",
    open: "leo-june-transits",
    color: "yellow",
  },
  {
    label: "Deep match",
    title: "Kundli match",
    caption: "premium report",
    icon: "home",
    open: "kundli-match",
    color: "green",
  },
];

const stories = [
  {
    id: "june-introduce",
    category: "June 2026",
    related: ["Love", "Marriage", "Family"],
    scope: "Personalized forecast",
    type: "June 2026 · Marriage",
    badge: "Featured",
    title: "How are marriage prospects looking in June?",
    subtitle: "A week-by-week read on movement, meetings, and the people who matter.",
    chatQuestion: "June me meri marriage prospects kaise dikh rahe hain - koi serious movement hoga?",
    chatShort: "\"How are marriage prospects looking in June?\"",
    price: 199,
    oldPrice: 349,
    rating: "4.88",
    reads: "38.2k",
    pages: 6,
    minutes: 9,
    axis: "Scorpio x Marriage x June",
    formatLabel: "6 parts · read/listen",
    trailer: "Talking trailer · 58 sec",
    parts: ["June map", "Meetings", "People", "Remedies"],
    freePages: 2,
    personalized: true,
    audio: true,
    video: "assets/talking-june-forecast.mp4",
    cover: "familyOrbit",
    coverLabel: "June 2026 · Marriage",
    color: "pink",
    madeFor: "Ananya",
    source: "uses your chart and the marriage questions you asked 9 times on 18 May",
    forecast: "June 2026 · This month's forecast",
    forecastCopy: "A talking read built from the questions you've been asking lately.",
    filters: ["From chats", "Timeline", "Family", "Audio", "Personalized"],
    detailTitle: "June 2026",
    insideTitle: "Questions you'll find answered",
    questions: [
      "Will a new match come up in June?",
      "Which week brings real movement - and which to wait through?",
      "How will families on both sides respond?",
      "Koi introduction ya rishta conversation pakka hoga?",
      "What should I avoid saying when things start moving?",
    ],
    inside: [
      ["June map", "Where the month opens, pauses, and moves.", "p.1"],
      ["Meetings", "Introductions, family nudges, and serious talks.", "p.2"],
      ["People", "Who supports it first, who needs time.", "p.4"],
      ["Remedies", "What to say, what to avoid, what to wear.", "p.6"],
    ],
    reader: {
      kicker: "II · THE MONTH AHEAD",
      headline: "June is the first month in a year where the door is genuinely open.",
      paragraphs: [
        "Ananya, this is not a vague maybe. Jupiter, the planet that turns marriages into decisions, moves toward your 7th house on 4 June. Venus brightens by mid-month. Together they create a window you have not had since 2024.",
        "Think of June as three weeks of slow movement and one week where things actually click into place. A name comes up, a meeting is arranged, and an existing conversation finally turns serious.",
        "In the next pages we cover the exact week, who is likely to initiate, how both families respond, and the small remedy that keeps the conversation warm instead of pressured.",
      ],
      window: "Mon 15 -> Sun 21 June",
      peak: "Sat 20",
      format: "An introduction",
      strength: 5,
    },
    unlockNote: "full report + remedies",
  },
  {
    id: "ritu-reply",
    category: "Love",
    related: ["June 2026"],
    scope: "Personalized read",
    type: "222 chat theme · Reply",
    badge: "Hot chat loop",
    title: "Will they reply, or is it over?",
    subtitle: "For silence, false hope, reunion, and when to stop checking.",
    chatQuestion: "One week ho gaya, no reply. Kya woh message karegi ya false hope hai?",
    chatShort: "\"One week ho gaya, no reply. Kya sab end ho gaya?\"",
    price: 599,
    oldPrice: 999,
    rating: "4.86",
    reads: "44k",
    pages: 6,
    minutes: 9,
    axis: "Scorpio x Love x No-reply loop",
    formatLabel: "6 sections · read/listen",
    trailer: "Audio trailer · 45 sec",
    parts: ["Reply", "Why silent", "Window", "Boundary"],
    freePages: 1,
    personalized: true,
    audio: true,
    cover: "messageMoon",
    coverLabel: "No reply loop",
    coverImage: "assets/cards/will-they-reply.png",
    color: "coral",
    madeFor: "Ananya",
    source: "uses your chat tone and 222 similar love-reunion questions",
    forecast: "Love · Reply anxiety",
    forecastCopy: "Built from repeated no-reply, delete-message, and closure chats.",
    filters: ["From chats", "Reunion", "Audio", "Personalized"],
    detailTitle: "Love",
    insideTitle: "Questions you'll find answered",
    questions: [
      "Kya woh message karegi?",
      "False hope rakh raha hoon?",
      "Delete kar du ya wait karu?",
      "May end se pehle reply ayega?",
    ],
    inside: [
      ["Reply", "Whether contact resumes.", "p.1"],
      ["Why silent", "Avoidance, ego, or closure.", "p.2"],
      ["Window", "The next real contact period.", "p.4"],
      ["Boundary", "When to stop checking.", "p.6"],
    ],
    reader: {
      kicker: "I · THE SILENCE",
      headline: "No reply does not always mean no feeling. But it does mean pause.",
      paragraphs: [
        "The chat has the same pulse again and again: one week, no reply, should I delete the message, is it all over? The chart shows feeling, but also resistance to a clean conversation.",
        "Contact can return, but it returns slowly and indirectly. A direct chase makes the silence heavier.",
        "The healthiest move is not to erase hope. It is to give hope a deadline.",
      ],
      window: "Next 18 -> 32 days",
      peak: "Day 24",
      format: "Indirect message",
      strength: 4,
    },
    unlockNote: "reply window + closure plan",
  },
  {
    id: "shaadi-window",
    category: "Marriage",
    related: ["June 2026"],
    scope: "Personalized report",
    type: "406 chat theme · Shaadi",
    badge: "Most saved",
    title: "Meri shaadi kab tak hogi?",
    subtitle: "A month-wise marriage window and what finally opens it.",
    chatQuestion: "Meri shaadi kab tak hogi?",
    chatShort: "\"Meri shaadi kab tak hogi?\"",
    price: 499,
    oldPrice: 899,
    rating: "4.80",
    reads: "38k",
    pages: 5,
    minutes: 8,
    axis: "Scorpio x Marriage x Year",
    formatLabel: "5 sections · read/listen",
    trailer: "Explainer trailer · 50 sec",
    parts: ["When", "Why late", "Who", "Remedy"],
    freePages: 2,
    personalized: true,
    audio: true,
    cover: "weddingWindow",
    coverLabel: "Shaadi window",
    coverImage: "assets/cards/shaadi-window.png",
    color: "pink",
    madeFor: "Ananya",
    source: "built from your chart plus 406 similar marriage chats",
    forecast: "Marriage · Timing",
    forecastCopy: "For timing, family, partner nature, and delay patterns.",
    filters: ["From chats", "Timeline", "Partner", "Personalized"],
    detailTitle: "Marriage",
    insideTitle: "Questions you'll find answered",
    questions: [
      "Meri shaadi kab tak hogi?",
      "Future spouse ka nature kaisa hoga?",
      "Family approval milega?",
      "Delay ka real reason kya hai?",
    ],
    inside: [
      ["When", "The exact marriage window.", "p.1"],
      ["Why late", "What kept things stuck.", "p.2"],
      ["Who", "Partner nature, family, profession.", "p.3"],
      ["Remedy", "What to do without overthinking.", "p.5"],
    ],
    reader: {
      kicker: "II · THE WINDOW",
      headline: "Why shaadi felt delayed and why the window starts opening.",
      paragraphs: [
        "Ananya, you have been carrying a quiet kind of pressure since late 2023. It is not in your head. Saturn entered your 7th house and asked you to wait.",
        "In November, Jupiter moves into a cleaner angle for marriage and brings support from family conversations that were previously stuck.",
        "Venus becomes gentle at the same time. The two do not make marriage automatic, but they do make it likely if you stop reopening the old doubt loop.",
      ],
      window: "Nov 2026 -> Feb 2027",
      peak: "21 Dec",
      format: "Family-led",
      strength: 4,
    },
    unlockNote: "spouse traits + remedies",
  },
  {
    id: "career-gap",
    category: "Career",
    related: [],
    scope: "Personalized career read",
    type: "213 chat theme · Career",
    badge: "Practical",
    title: "HR round, career gap, salary?",
    subtitle: "What to say, when offers improve, and whether the gap blocks you.",
    chatQuestion: "HR round me career gap aur salary point out hua. Offer milega?",
    chatShort: "\"HR pointed out my career gap and expected salary.\"",
    price: 399,
    oldPrice: 699,
    rating: "4.74",
    reads: "21k",
    pages: 7,
    minutes: 9,
    axis: "Birth chart x Career x Jun-Aug",
    formatLabel: "7 sections · read/listen",
    trailer: "HR script trailer · 42 sec",
    parts: ["HR", "Gap", "Offer", "Script"],
    freePages: 2,
    personalized: true,
    audio: true,
    cover: "interview",
    coverLabel: "Interview room",
    coverImage: "assets/cards/hr-career-gap.png",
    color: "blue",
    madeFor: "Ananya",
    source: "built from HR, gap, salary, and job-switch chats",
    forecast: "Career · Interview",
    forecastCopy: "For offer timing, salary friction, and interview confidence.",
    filters: ["From chats", "Timeline", "Audio", "Personalized"],
    detailTitle: "Career",
    insideTitle: "Questions you'll find answered",
    questions: [
      "Will I clear this interview?",
      "Career gap kitna matter karega?",
      "Salary expectation kam karu?",
      "Next offer window kab hai?",
    ],
    inside: [
      ["HR", "What the round was testing.", "p.1"],
      ["Gap", "How much it matters.", "p.2"],
      ["Offer", "When interviews turn serious.", "p.4"],
      ["Script", "The answer to keep ready.", "p.7"],
    ],
    reader: {
      kicker: "III · THE ROUND",
      headline: "The career gap is not the full problem. The story around it is.",
      paragraphs: [
        "Your chat describes a familiar moment: two rounds went well, then HR pointed to the gap and salary expectation. This is not a rejection signal by itself.",
        "The chart shows a temporary mismatch between effort and visible reward. That changes when Mercury stops creating back-and-forth communication.",
        "Do not overexplain old gaps. Keep the story short, concrete, and anchored in what you can do next.",
      ],
      window: "Jun 2026 -> Aug 2026",
      peak: "17 Jul",
      format: "Second discussion",
      strength: 4,
    },
    unlockNote: "offer timing + HR script",
  },
  {
    id: "cash-flow",
    category: "Wealth",
    related: [],
    scope: "Quick paid",
    type: "47 chat theme · Money",
    badge: "Quick answer",
    title: "Cash flow kab stable hoga?",
    subtitle: "Income timing, business start, and what reduces money pressure.",
    chatQuestion: "June ke baad mera cash flow kab stable hoga?",
    chatShort: "\"Cash flow kab stable hoga?\"",
    price: 79,
    oldPrice: 149,
    rating: "4.62",
    reads: "17k",
    pages: 4,
    minutes: 6,
    axis: "Rashi x Wealth x 90 days",
    formatLabel: "4 sections · listen fast",
    trailer: "Money preview · 35 sec",
    parts: ["Pattern", "Month", "Action", "Remedy"],
    freePages: 1,
    personalized: false,
    audio: true,
    cover: "cashRiver",
    coverLabel: "Cash flow",
    coverImage: "assets/cards/cash-flow.png",
    color: "yellow",
    madeFor: "",
    source: "built from cash-flow, business, and income chats",
    forecast: "Wealth · Cash flow",
    forecastCopy: "For income stability, expense leaks, and business start.",
    filters: ["From chats", "Timeline", "Audio"],
    detailTitle: "Wealth",
    insideTitle: "Questions you'll find answered",
    questions: [
      "Cash flow kab stable hoga?",
      "Business start karu ya wait?",
      "Paise ka source kab banega?",
    ],
    inside: [
      ["Pattern", "Why money feels uneven.", "p.1"],
      ["Month", "The next stable stretch.", "p.2"],
      ["Action", "What to reduce first.", "p.3"],
      ["Remedy", "Simple weekly practice.", "p.4"],
    ],
    reader: {
      kicker: "I · THE LEAK",
      headline: "Money starts settling when one recurring leak is closed.",
      paragraphs: [
        "This is not a low-effort money period. It is a scattered-effort period.",
        "The chart asks you to reduce one expense, one unfinished payment, and one emotional decision around lending.",
        "Once that is done, the income line becomes easier to read.",
      ],
      window: "Jul 2026 -> Sep 2026",
      peak: "4 Aug",
      format: "Slow stability",
      strength: 3,
    },
    unlockNote: "cash window + remedy",
  },
  {
    id: "relationship-improve-june",
    category: "Love",
    related: ["June 2026"],
    scope: "Rashi topic read",
    type: "Scorpio · Love · June",
    badge: "Cheap read",
    title: "Will this relationship improve in June?",
    subtitle: "The week tension softens, the line not to cross, and what to say first.",
    chatQuestion: "June me relationship better hoga ya same fights rahenge?",
    chatShort: "\"Will this relationship improve in June?\"",
    price: 149,
    oldPrice: 249,
    rating: "4.78",
    reads: "31k",
    pages: 5,
    minutes: 7,
    axis: "Scorpio x Relationship x June",
    formatLabel: "5 parts · read/listen",
    trailer: "Mood trailer · 40 sec",
    parts: ["Softening", "Trigger", "Talk", "Do not force"],
    freePages: 2,
    personalized: false,
    audio: true,
    cover: "messageMoon",
    coverLabel: "June love reset",
    coverImage: "assets/cards/relationship-improve-june.png",
    color: "coral",
    madeFor: "",
    source: "built from Scorpio love questions and June transit patterns",
    forecast: "Love · June reset",
    forecastCopy: "For fights, distance, repair, and the first softer week.",
    filters: ["Rashi", "Timeline", "Audio", "Cheap"],
    detailTitle: "Love",
    insideTitle: "Questions you'll find answered",
    questions: [
      "Will the relationship improve in June?",
      "Kaunsi week me baat normal hogi?",
      "What should I stop doing?",
      "Is this repair or just temporary peace?",
    ],
    inside: [
      ["Softening", "When their tone becomes easier.", "p.1"],
      ["Trigger", "What keeps repeating.", "p.2"],
      ["Talk", "The message that lands cleanly.", "p.3"],
      ["Care", "One daily act that helps.", "p.5"],
    ],
    reader: {
      kicker: "I · THE REPAIR",
      headline: "June does not fix everything. It gives one clean opening.",
      paragraphs: [
        "The first half of June still carries ego and small misunderstandings. The shift begins when Venus starts supporting warmer language instead of defensive replies.",
        "A softer conversation is likely, but it needs a low-pressure entry. Do not ask for the whole future in the first calm moment.",
        "The practical remedy is simple: say one specific nice thing every day for seven days. It changes the temperature without making the relationship feel managed.",
      ],
      window: "11 Jun -> 24 Jun",
      peak: "18 Jun",
      format: "Repair talk",
      strength: 4,
    },
    unlockNote: "repair window + daily practice",
  },
  {
    id: "leo-june-transits",
    category: "June 2026",
    related: ["Career", "Wealth", "Love"],
    scope: "Rashi transit read",
    type: "Leo · June transits",
    badge: "Transit guide",
    title: "Leo June transits: work, money, love",
    subtitle: "A clean monthly map for what moves first and where to stay patient.",
    chatQuestion: "Leo rashi ke liye June transits ka effect kya hoga?",
    chatShort: "\"Leo June transits ka overall effect?\"",
    price: 99,
    oldPrice: 199,
    rating: "4.69",
    reads: "27k",
    pages: 6,
    minutes: 8,
    axis: "Leo x June transits",
    formatLabel: "Monthly read · listen",
    trailer: "Transit trailer · 52 sec",
    parts: ["Work", "Money", "Love", "Remedy"],
    freePages: 2,
    personalized: false,
    audio: true,
    cover: "transitWheel",
    coverLabel: "Leo transit map",
    coverImage: "assets/cards/leo-june-transits.png",
    color: "yellow",
    madeFor: "",
    source: "built from Leo rashi transit patterns for June",
    forecast: "Rashi · June transits",
    forecastCopy: "For work, money, love, energy, and remedies.",
    filters: ["Rashi", "Transit", "Monthly", "Audio"],
    detailTitle: "June 2026",
    insideTitle: "Questions you'll find answered",
    questions: [
      "Leo rashi ke liye June kaisa rahega?",
      "Career ya money me pehle movement aayega?",
      "Love life me patience kaha chahiye?",
      "Which remedy should I do this month?",
    ],
    inside: [
      ["Work", "Where recognition returns.", "p.1"],
      ["Money", "A cautious but improving flow.", "p.2"],
      ["Love", "Where pride softens.", "p.4"],
      ["Remedy", "A short Sunday practice.", "p.6"],
    ],
    reader: {
      kicker: "I · THE TRANSIT MAP",
      headline: "June rewards Leo when pride turns into steadiness.",
      paragraphs: [
        "This month does not ask you to become quiet. It asks you to become clearer. Work improves first, then money catches up more slowly.",
        "In love, the transit is less about chasing reassurance and more about letting the other person come forward without testing them.",
        "The remedy is short and practical: offer water to the Sun on Sundays and finish one pending work commitment before starting a new one.",
      ],
      window: "4 Jun -> 28 Jun",
      peak: "16 Jun",
      format: "Monthly map",
      strength: 4,
    },
    unlockNote: "full transit map + remedies",
  },
  {
    id: "kundli-match",
    category: "Marriage",
    related: ["Love"],
    scope: "Deep personalized match",
    type: "Kundli match · 2 charts",
    badge: "Deep read",
    title: "Are we actually compatible long term?",
    subtitle: "Kundli match, emotional fit, family friction, and what needs care.",
    chatQuestion: "Kundli match acha hai kya? Long term compatibility kaisi rahegi?",
    chatShort: "\"Kundli match aur long-term compatibility?\"",
    price: 899,
    oldPrice: 1499,
    rating: "4.92",
    reads: "19k",
    pages: 18,
    minutes: 28,
    axis: "Kundli match x Love x Marriage",
    formatLabel: "18 sections · deep audio",
    trailer: "Compatibility trailer · 75 sec",
    parts: ["Guna", "Emotional fit", "Family", "Care plan"],
    freePages: 2,
    personalized: true,
    audio: true,
    cover: "matchGrid",
    coverLabel: "2-chart match",
    coverImage: "assets/cards/kundli-compatibility.png",
    color: "green",
    madeFor: "Ananya",
    source: "uses both charts, chat patterns, and compatibility scoring",
    forecast: "Marriage · Kundli match",
    forecastCopy: "For guna, emotion, family, conflict, and remedies.",
    filters: ["Kundli", "Partner", "Audio", "Personalized"],
    detailTitle: "Kundli Match",
    insideTitle: "Questions you'll find answered",
    questions: [
      "Are we compatible long term?",
      "Where will we fight most?",
      "Family acceptance strong hai kya?",
      "Which remedy protects the relationship?",
    ],
    inside: [
      ["Guna", "Where the match is strong.", "p.1"],
      ["Emotion", "How both people handle stress.", "p.5"],
      ["Family", "Approval and pressure points.", "p.10"],
      ["Care plan", "Spiritual and practical remedies.", "p.16"],
    ],
    reader: {
      kicker: "IV · THE MATCH",
      headline: "Compatibility is strong where values align, fragile where silence builds.",
      paragraphs: [
        "The match has real warmth, but it cannot run only on attraction. The charts show emotional loyalty with a habit of delaying hard conversations.",
        "Family pressure is manageable if both people present the same story. Mixed signals create more damage than actual disagreement.",
        "The remedy is split in two: a Friday Venus practice for softness, and one practical rule for the relationship: no important conversations after midnight.",
      ],
      window: "Aug 2026 -> Jan 2027",
      peak: "9 Oct",
      format: "Family discussion",
      strength: 5,
    },
    unlockNote: "full match + care plan",
  },
];

const params = new URLSearchParams(window.location.search);
const initialStory = stories.find((story) => story.id === params.get("story")) || stories[0];

const state = {
  screen: params.get("screen") || "home",
  selectedCategory:
    params.get("category") ||
    (params.get("screen") && params.get("screen") !== "home" ? initialStory.category : "All"),
  selectedStoryId: initialStory.id,
  categoryFilter: "All",
  readerMode: "Read",
  payChoice: "one-time",
  videoPaused: new Set(),
  videoSoundOn: new Set(),
  narratingStoryId: "",
  toast: "",
};

let toastTimer = null;
let currentUtterance = null;

render();

app.addEventListener("click", (event) => {
  const category = event.target.closest("[data-category]");
  const filter = event.target.closest("[data-filter]");
  const openStory = event.target.closest("[data-open]");
  const readStory = event.target.closest("[data-read]");
  const listenStory = event.target.closest("[data-listen]");
  const payChoice = event.target.closest("[data-pay-choice]");
  const videoToggle = event.target.closest("[data-video-toggle]");
  const videoSound = event.target.closest("[data-video-sound]");
  const action = event.target.closest("[data-action]");

  if (videoSound) {
    toggleStorySound(videoSound.dataset.videoSound);
    return;
  }

  if (videoToggle) {
    toggleStoryVideo(videoToggle.dataset.videoToggle);
    return;
  }

  if (payChoice) {
    state.payChoice = payChoice.dataset.payChoice;
    render();
    return;
  }

  if (readStory) {
    openReader(readStory.dataset.read, "Read");
    return;
  }

  if (listenStory) {
    openReader(listenStory.dataset.listen, "Listen");
    return;
  }

  if (openStory) {
    state.selectedStoryId = openStory.dataset.open;
    state.screen = "detail";
    render();
    return;
  }

  if (category) {
    state.selectedCategory = category.dataset.category;
    state.categoryFilter = "All";
    state.screen = state.selectedCategory === "All" ? "home" : "category";
    render();
    return;
  }

  if (filter) {
    state.categoryFilter = filter.dataset.filter;
    render();
    return;
  }

  if (action) handleAction(action.dataset.action);
});

function handleAction(action) {
  let playAudioAfterRender = false;

  if (action === "home") {
    state.screen = "home";
    state.selectedCategory = "All";
    stopNarration(false);
  }

  if (action === "back") {
    if (state.screen === "unlock") state.screen = "reader";
    else if (state.screen === "reader") state.screen = "detail";
    else if (state.screen === "detail") state.screen = "category";
    else state.screen = "home";
    if (state.screen !== "reader" && state.screen !== "unlock") stopNarration(false);
  }

  if (action === "search") showToast("Search will cover chats, months, topics, and rashi.");
  if (action === "bookmark") showToast("Saved to your library.");
  if (action === "wallet") showToast("Wallet balance: ₹340");
  if (action === "mode-read") {
    state.readerMode = "Read";
    stopNarration(false);
  }
  if (action === "mode-listen") {
    state.readerMode = "Listen";
    startNarration(getSelectedStory(), false);
    playAudioAfterRender = true;
  }
  if (action === "audio-toggle") {
    if (state.narratingStoryId === getSelectedStory().id) stopNarration(false);
    else {
      startNarration(getSelectedStory(), false);
      playAudioAfterRender = true;
    }
  }
  if (action === "unlock") state.screen = "unlock";
  if (action === "close-unlock") state.screen = "reader";
  if (action === "pay") showToast(`Payment started: ${formatPrice(getSelectedStory().price)}`);
  if (action === "menu") showToast("More options");

  render();
  if (playAudioAfterRender) playCurrentAudio(getSelectedStory());
}

function openReader(storyId, mode) {
  state.selectedStoryId = storyId;
  state.readerMode = mode;
  state.screen = "reader";
  if (mode === "Listen") startNarration(getSelectedStory(), false);
  else stopNarration(false);
  render();
  if (mode === "Listen") playCurrentAudio(getSelectedStory());
}

function toggleStoryVideo(storyId) {
  if (state.videoPaused.has(storyId)) {
    state.videoPaused.delete(storyId);
  } else {
    state.videoPaused.add(storyId);
  }

  render();
}

function toggleStorySound(storyId) {
  if (state.videoSoundOn.has(storyId)) {
    state.videoSoundOn.delete(storyId);
  } else {
    state.videoSoundOn.add(storyId);
    state.videoPaused.delete(storyId);
  }

  render();
  const video = app
    .querySelector(`[data-video-sound="${storyId}"]`)
    ?.closest(".talking-card")
    ?.querySelector("video");

  if (video && state.videoSoundOn.has(storyId)) {
    video.muted = false;
    video.play().catch(() => showToast("Tap Sound again to start audio."));
  }
}

function startNarration(story, shouldRender = true) {
  state.narratingStoryId = story.id;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (shouldRender) {
    render();
    playCurrentAudio(story);
  }
}

function playCurrentAudio(story) {
  const audio = app.querySelector(`[data-story-audio="${story.id}"]`);

  if (audio) {
    audio.onended = () => {
      if (state.narratingStoryId === story.id) {
        state.narratingStoryId = "";
        render();
      }
    };
    audio.play().catch(() => showToast("Tap play to start audio."));
    return;
  }

  startSpeechFallback(story);
}

function startSpeechFallback(story) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    showToast("Audio is not supported in this browser.");
    return;
  }

  window.speechSynthesis.cancel();
  const text = [
    story.title,
    story.reader.headline,
    ...story.reader.paragraphs,
    `Window: ${story.reader.window}. Peak: ${story.reader.peak}.`,
  ].join(". ");
  currentUtterance = new SpeechSynthesisUtterance(text);
  currentUtterance.lang = "en-IN";
  currentUtterance.rate = 0.92;
  currentUtterance.pitch = 1;
  currentUtterance.onend = () => {
    if (state.narratingStoryId === story.id) {
      state.narratingStoryId = "";
      render();
    }
  };
  currentUtterance.onerror = () => {
    if (state.narratingStoryId === story.id) {
      state.narratingStoryId = "";
      render();
    }
  };
  window.speechSynthesis.speak(currentUtterance);
}

function stopNarration(shouldRender = true) {
  const audio = app.querySelector(".story-audio");
  if (audio) audio.pause();
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  currentUtterance = null;
  state.narratingStoryId = "";
  if (shouldRender) render();
}

function showToast(message) {
  state.toast = message;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    state.toast = "";
    render();
  }, 1800);
}

function render() {
  const hideBottomNav = ["detail", "reader", "unlock"].includes(state.screen);
  app.innerHTML = `
    <section class="app-screen screen-${state.screen}">
      ${renderStatusBar()}
      ${renderScreen()}
      ${hideBottomNav ? "" : renderBottomNav()}
      ${state.toast ? `<div class="toast" role="status">${escapeHtml(state.toast)}</div>` : ""}
    </section>
  `;
}

function renderScreen() {
  if (state.screen === "category") return renderCategoryScreen();
  if (state.screen === "detail") return renderDetailScreen();
  if (state.screen === "reader") return renderReaderScreen(false);
  if (state.screen === "unlock") return renderUnlockScreen();
  return renderHomeScreen();
}

function renderStatusBar() {
  return `
    <div class="status-bar" aria-label="Status bar">
      <span>9:41</span>
      <span class="dynamic-island" aria-hidden="true"></span>
      <span class="status-icons" aria-hidden="true">
        <span class="signal-icon"></span>
        <span class="wifi-icon"></span>
        <span class="battery-icon"></span>
      </span>
    </div>
  `;
}

function renderHomeScreen() {
  const spotlight = stories[0];
  const secondary = stories.slice(1, 8);

  return `
    <main class="content-scroll home-screen">
      ${renderHomeHeader()}
      ${renderCategoryRail()}
      ${renderChatCallout(spotlight)}
      ${renderForecastStrip(spotlight)}
      <section class="story-feed" aria-label="Personalized reads">
        ${renderLargeStoryCard(spotlight)}
      </section>
      ${renderCurationRail()}
      <section class="shelf-section" aria-labelledby="chat-topics-heading">
        <div class="section-title">
          <div>
            <span>From chat patterns</span>
            <h2 id="chat-topics-heading">What people keep asking</h2>
          </div>
          <button type="button" data-category="Love">View</button>
        </div>
        <div class="mini-shelf">
          ${secondary.map(renderMiniStoryCard).join("")}
        </div>
      </section>
    </main>
  `;
}

function renderCurationRail() {
  return `
    <section class="curation-rail" aria-label="Curated report paths">
      ${curationPicks
        .map(
          (pick) => `
            <button class="curation-card tone-${pick.color}" type="button" data-open="${pick.open}">
              <span>${renderIcon(pick.icon)}</span>
              <small>${escapeHtml(pick.label)}</small>
              <strong>${escapeHtml(pick.title)}</strong>
              <em>${escapeHtml(pick.caption)}</em>
            </button>
          `
        )
        .join("")}
    </section>
  `;
}

function renderHomeHeader() {
  return `
    <header class="home-header">
      <h1><span>Hi</span>Astro</h1>
      <button class="wallet-pill" type="button" data-action="wallet" aria-label="Wallet balance">
        ${renderIcon("wallet")}
        <b>₹340.00</b>
        <span>+</span>
      </button>
    </header>
  `;
}

function renderChatCallout(story) {
  return `
    <button class="chat-callout" type="button" data-open="${story.id}">
      <span>${renderIcon("message")}</span>
      <strong>From your chat · 18 May</strong>
      <small>${escapeHtml(story.chatShort)}</small>
      <i>${renderIcon("chevronRight")}</i>
    </button>
  `;
}

function renderForecastStrip(story) {
  return `
    <button class="forecast-strip" type="button" data-open="${story.id}">
      <span>${renderIcon("calendar")}</span>
      <div>
        <strong>${escapeHtml(story.forecast)}</strong>
        <small>${escapeHtml(story.forecastCopy)}</small>
      </div>
      <i>${renderIcon("spark")}</i>
    </button>
  `;
}

function renderCategoryScreen() {
  const category = categories.find((item) => item.id === state.selectedCategory) || categories[1];
  const visibleStories = getFilteredStories();
  const lead = visibleStories[0] || stories[0];

  return `
    <main class="content-scroll category-screen">
      ${renderHomeHeader()}
      ${renderCategoryRail()}
      ${renderChatCallout(lead)}
      ${renderForecastStrip(lead)}
      <section class="story-feed" aria-label="${escapeHtml(category.label)} stories">
        ${visibleStories.map(renderLargeStoryCard).join("")}
      </section>
    </main>
  `;
}

function renderDetailScreen() {
  const story = getSelectedStory();

  return `
    <main class="content-scroll detail-screen">
      ${renderTopNav(story.detailTitle || story.category, "bookmark")}
      <section class="detail-hero">
        ${renderStoryVisual(story, "large")}
        <h2>${escapeHtml(story.title)}</h2>
        <p>${escapeHtml(story.subtitle)}</p>
        <div class="meta-pill-row">
          ${renderMetaPill("star", story.rating)}
          <span>${escapeHtml(story.reads)} read</span>
          <span>${story.pages} pages</span>
        </div>
      </section>
      <section class="made-for-panel">
        <span>${renderIcon("spark")}</span>
        <p><strong>${story.personalized ? `Made for ${escapeHtml(story.madeFor)}` : escapeHtml(story.scope)}</strong> — ${escapeHtml(story.source)}.</p>
      </section>
      ${renderPartsPanel(story)}
      <section class="questions-panel">
        <span>${escapeHtml(story.insideTitle)}</span>
        ${story.questions.map((question, index) => renderQuestionRow(question, index)).join("")}
      </section>
      <section class="detail-actions">
        <button class="secondary-action" type="button" data-read="${story.id}">
          ${renderIcon("message")}
          <span>${story.freePages} pages</span>
          <strong>Preview</strong>
        </button>
        <button class="primary-action" type="button" data-listen="${story.id}">
          ${renderIcon("headphones")}
          <span>${story.minutes} min</span>
          <strong>Listen ${formatPrice(story.price)}</strong>
        </button>
      </section>
    </main>
  `;
}

function renderReaderScreen(dimmed) {
  const story = getSelectedStory();
  const lockedPages = Math.max(story.pages - story.freePages, 0);

  return `
    <main class="reader-screen ${dimmed ? "is-dimmed" : ""}">
      <header class="reader-nav">
        <button class="round-button" type="button" data-action="back" aria-label="Back">
          ${renderIcon("chevronLeft")}
        </button>
        <div>
          <h1>${escapeHtml(story.title)}</h1>
          <span>Page 2 of ${story.pages}</span>
        </div>
        <button class="round-button" type="button" data-action="menu" aria-label="More options">
          ${renderIcon("more")}
        </button>
      </header>
      <div class="reader-progress" aria-hidden="true">
        ${Array.from({ length: story.pages }, (_, index) => `<span class="${index < story.freePages ? "is-read" : ""}"></span>`).join("")}
      </div>
      <section class="mode-switch" aria-label="Reader mode">
        <button class="${state.readerMode === "Read" ? "is-active" : ""}" type="button" data-action="mode-read">
          ${renderIcon("bookOpen")}
          Read
        </button>
        <button class="${state.readerMode === "Listen" ? "is-active" : ""}" type="button" data-action="mode-listen">
          ${renderIcon("headphones")}
          Listen
        </button>
      </section>
      ${state.readerMode === "Listen" ? renderAudioPlayer(story) : ""}
      <article class="reader-article">
        <span>${escapeHtml(story.reader.kicker)}</span>
        <h2>${escapeHtml(story.reader.headline)}</h2>
        <p>${escapeHtml(story.reader.paragraphs[0])}</p>
        <aside class="window-card">
          <span>${story.id === "june-introduce" ? "The week" : "Your window"}</span>
          <strong>${escapeHtml(story.reader.window)}</strong>
          <small>Most likely: <b>${escapeHtml(story.reader.peak)}</b> · Format: <em>${escapeHtml(story.reader.format)}</em></small>
        </aside>
        <p>${escapeHtml(story.reader.paragraphs[1])}</p>
        <div class="locked-copy">
          <p>${escapeHtml(story.reader.paragraphs[2])}</p>
        </div>
      </article>
      ${dimmed ? "" : `
        <section class="paywall-panel">
          <div>
            <span>${renderIcon("lock")}</span>
            <div>
              <strong>${lockedPages} more ${lockedPages === 1 ? "page" : "pages"} to go</strong>
              <small>Remedies, exact dates, what to avoid.</small>
            </div>
          </div>
          <button type="button" data-action="unlock">Unlock for ${formatPrice(story.price)} ${renderIcon("arrowRight")}</button>
          <p>Or use ₹340 wallet · Or upgrade to Premium</p>
        </section>
      `}
    </main>
  `;
}

function renderUnlockScreen() {
  const story = getSelectedStory();
  return `
    ${renderReaderScreen(true)}
    <div class="unlock-backdrop" data-action="close-unlock"></div>
    <section class="unlock-sheet" role="dialog" aria-modal="true" aria-label="Unlock report">
      <button class="sheet-close" type="button" data-action="close-unlock" aria-label="Close">${renderIcon("close")}</button>
      <span class="sheet-handle"></span>
      <h2>Unlock the full report<br />"${escapeHtml(story.title)}"</h2>
      <article class="unlock-book">
        ${renderCover(story, "unlock")}
        <div>
          <strong>${escapeHtml(story.title)}</strong>
          <small>${story.pages} pages · stays in your library</small>
          <span>${renderStars(1)} ${story.rating} · ${story.reads} read</span>
        </div>
      </article>
      <div class="pay-options">
        ${renderPayOption("one-time", formatPrice(story.price), "One-time", "Save 43%")}
        ${renderPayOption("wallet", "Wallet", "₹340 left", "Pays ₹199")}
      </div>
      <button class="premium-option" type="button" data-pay-choice="premium">
        <strong>Premium</strong>
        <span>₹299/mo</span>
        <small>3 short + 1 long</small>
      </button>
      <div class="unlock-success">
        <strong>You unlock: ${escapeHtml(story.unlockNote)} 🎉</strong>
        <span>${story.pages - story.freePages} more pages · stays forever in library</span>
      </div>
      <p class="refund-note">Refundable for 7 days · ${escapeHtml(story.reads)} have read this</p>
      <button class="pay-button" type="button" data-action="pay">
        Proceed to pay ${formatPrice(story.price)} ${renderIcon("arrowRight")}
      </button>
    </section>
  `;
}

function renderPayOption(id, title, subtitle, badge) {
  const selected = state.payChoice === id;
  return `
    <button class="pay-option ${selected ? "is-selected" : ""}" type="button" data-pay-choice="${id}">
      ${selected ? `<i>${renderIcon("check")}</i>` : ""}
      <strong>${escapeHtml(title)}</strong>
      <span>${escapeHtml(subtitle)}</span>
      <small>${escapeHtml(badge)}</small>
    </button>
  `;
}

function renderPartsPanel(story) {
  return `
    <section class="parts-panel">
      <div class="parts-heading">
        <span>${renderIcon("bookOpen")}</span>
        <strong>${escapeHtml(story.formatLabel || `${story.pages} parts · read/listen`)}</strong>
        <small>${escapeHtml(story.trailer || `${story.minutes} min audio`)}</small>
      </div>
      ${story.inside
        .map(
          ([title, description, page]) => `
            <div class="part-row">
              <div>
                <strong>${escapeHtml(title)}</strong>
                <span>${escapeHtml(description)}</span>
              </div>
              <small>${escapeHtml(page)}</small>
              <em>${renderIcon("bookOpen")}${renderIcon("headphones")}</em>
            </div>
          `
        )
        .join("")}
    </section>
  `;
}

function renderTopNav(title, rightAction) {
  const rightIcon = rightAction === "search" ? "search" : "bookmark";
  return `
    <header class="top-nav">
      <button class="round-button" type="button" data-action="back" aria-label="Back">
        ${renderIcon("chevronLeft")}
      </button>
      <h1>${escapeHtml(title)}</h1>
      <button class="round-button" type="button" data-action="${rightAction}" aria-label="${escapeHtml(rightAction)}">
        ${renderIcon(rightIcon)}
      </button>
    </header>
  `;
}

function renderCategoryRail() {
  return `
    <nav class="category-rail" aria-label="Topics">
      ${categories
        .map((category) => {
          const isActive = state.selectedCategory === category.id;
          return `
            <button
              class="category-chip tone-${category.color} ${isActive ? "is-active" : ""}"
              type="button"
              data-category="${category.id}"
              aria-pressed="${isActive}"
            >
              <span>${renderIcon(category.icon)}</span>
              <b>${escapeHtml(category.label)}</b>
            </button>
          `;
        })
        .join("")}
    </nav>
  `;
}

function renderLargeStoryCard(story) {
  const hasVideo = Boolean(story.video);

  return `
    <article class="large-story-card tone-${story.color} ${hasVideo ? "has-video" : ""}">
      <button class="story-hit-area" type="button" data-open="${story.id}" aria-label="${escapeHtml(story.title)}"></button>
      ${hasVideo ? "" : `
        <div class="card-topline">
          ${renderMetaPill("star", `${story.rating} (${story.reads})`)}
          <span>${escapeHtml(story.type)}</span>
          <b>${story.personalized ? "Made for you" : story.badge}</b>
        </div>
      `}
      ${renderStoryVisual(story, "wide")}
      <div class="large-story-body">
        <div class="story-axis">
          ${renderIcon("spark")}
          <span>${escapeHtml(story.axis || story.type)}</span>
        </div>
        <h2>${escapeHtml(story.title)}</h2>
        <div class="large-story-meta">
          <strong>${escapeHtml(story.title)}</strong>
          <span>${escapeHtml(story.category)} · ${story.pages} p · ${story.minutes}m</span>
        </div>
        <p>${escapeHtml(story.subtitle)}</p>
        <div class="story-format-row">
          <span>${renderIcon("bookOpen")}${escapeHtml(story.formatLabel || `${story.pages} parts`)}</span>
          <span>${renderIcon("headphones")}${escapeHtml(story.trailer || `${story.minutes} min audio`)}</span>
        </div>
        ${renderPartPills(story)}
        <div class="card-actions">
          <button class="secondary-action" type="button" data-read="${story.id}">
            ${renderIcon("message")}
            <span>${story.freePages} pages</span>
            <strong>Preview</strong>
          </button>
          <button class="primary-action" type="button" data-read="${story.id}">
            ${renderIcon("bookOpen")}
            <span>${story.pages} pages</span>
            <strong>Read ${formatPrice(story.price)}</strong>
          </button>
          ${story.audio ? `
            <button class="listen-action" type="button" data-listen="${story.id}">
              ${renderIcon("headphones")}
              <span>${story.minutes} min</span>
              <strong>Listen</strong>
            </button>
          ` : ""}
        </div>
      </div>
    </article>
  `;
}

function renderPartPills(story) {
  const parts = story.parts || story.inside.map(([title]) => title);

  return `
    <div class="part-pill-row" aria-label="Report sections">
      ${parts
        .slice(0, 4)
        .map((part) => `<span>${escapeHtml(part)}</span>`)
        .join("")}
    </div>
  `;
}

function renderStoryVisual(story, size) {
  if (story.video && (size === "wide" || size === "large")) {
    return renderTalkingVideo(story, size);
  }

  return renderCover(story, size);
}

function renderTalkingVideo(story, size) {
  const isPaused = state.videoPaused.has(story.id);
  const soundOn = state.videoSoundOn.has(story.id);
  const actionLabel = isPaused ? "Play" : "Stop";
  const soundLabel = soundOn ? "Mute" : "Sound";
  const topline =
    size === "wide"
      ? `
        ${renderMetaPill("star", `${story.rating} (${story.reads})`)}
        <span>${escapeHtml(story.type)}</span>
        <b>${story.personalized ? "Made for you" : story.badge}</b>
      `
      : `
        <span>${escapeHtml(story.coverLabel)}</span>
        <b>${escapeHtml(story.badge || story.scope)}</b>
      `;

  return `
    <div class="talking-card media-${size} ${isPaused ? "is-paused" : "is-playing"}">
      <video src="${escapeHtml(story.video)}" ${isPaused ? "" : "autoplay"} ${soundOn ? "" : "muted"} loop playsinline preload="metadata"></video>
      <div class="talking-scrim" aria-hidden="true"></div>
      <div class="talking-topline">${topline}</div>
      <button
        class="video-toggle"
        type="button"
        data-video-toggle="${story.id}"
        aria-label="${actionLabel} talking forecast"
      >
        ${renderIcon(isPaused ? "play" : "pause")}
        <span>${actionLabel}</span>
      </button>
      <button
        class="sound-toggle"
        type="button"
        data-video-sound="${story.id}"
        aria-label="${soundLabel} talking video"
      >
        ${renderIcon("headphones")}
        <span>${soundLabel}</span>
      </button>
      <h3>${escapeHtml(story.title)}</h3>
    </div>
  `;
}

function renderMiniStoryCard(story) {
  return `
    <article class="mini-story-card tone-${story.color}">
      <button class="story-hit-area" type="button" data-open="${story.id}" aria-label="${escapeHtml(story.title)}"></button>
      ${renderCover(story, "mini")}
      <div class="mini-story-meta">
        <span>${escapeHtml(story.axis || story.type)}</span>
        <b>${formatPrice(story.price)}</b>
      </div>
      <h3>${escapeHtml(story.title)}</h3>
      <p>${escapeHtml(story.formatLabel || `${story.pages} pages`)} · ${story.reads} read</p>
      <div class="mini-story-footer">
        <span>${renderIcon("bookOpen")}Read</span>
        <span>${renderIcon("headphones")}Listen</span>
      </div>
    </article>
  `;
}

function renderCover(story, size) {
  if (story.coverImage) {
    return `
      <div class="cover-art cover-${size} image-cover tone-${story.color}" aria-hidden="true">
        <img
          src="${escapeHtml(story.coverImage)}"
          alt=""
          loading="${size === "wide" || size === "large" ? "eager" : "lazy"}"
        />
        <em>${escapeHtml(story.coverLabel)}</em>
        ${story.badge ? `<strong>${escapeHtml(story.badge)}</strong>` : ""}
      </div>
    `;
  }

  return `
    <div class="cover-art cover-${size} motif-${story.cover} tone-${story.color}" aria-hidden="true">
      <span></span>
      <i></i>
      <b></b>
      <em>${escapeHtml(story.coverLabel)}</em>
      ${story.badge ? `<strong>${escapeHtml(story.badge)}</strong>` : ""}
    </div>
  `;
}

function renderQuestionRow(question, index) {
  return `
    <div class="question-row">
      <span>${index + 1}</span>
      <strong>"${escapeHtml(question)}"</strong>
    </div>
  `;
}

function renderAudioPlayer(story) {
  const isPlaying = state.narratingStoryId === story.id;

  return `
    <section class="audio-player ${isPlaying ? "is-playing" : "is-paused"}">
      <button type="button" data-action="audio-toggle" aria-label="${isPlaying ? "Pause audio" : "Play audio"}">
        ${renderIcon(isPlaying ? "pause" : "play")}
      </button>
      <div>
        <strong>${escapeHtml(story.title)}</strong>
        <span><i style="width:${isPlaying ? "42%" : "8%"}"></i></span>
        <small>${isPlaying ? "Playing" : "Paused"} · ${story.minutes}:00 narrated preview · Hinglish tone</small>
        <audio
          class="story-audio"
          data-story-audio="${story.id}"
          src="${escapeHtml(getAudioSrc(story))}"
          controls
          ${isPlaying ? "autoplay" : ""}
        ></audio>
      </div>
    </section>
  `;
}

function getAudioSrc(story) {
  return story.audioSrc || DEFAULT_AUDIO_SRC;
}

function renderMetaPill(icon, text) {
  return `
    <small class="meta-pill">
      ${renderIcon(icon)}
      ${escapeHtml(text)}
    </small>
  `;
}

function renderBottomNav() {
  const items = [
    ["Astrologer", "spark"],
    ["Chats", "message"],
    ["My Day", "sun"],
    ["Profile", "profile"],
  ];

  return `
    <nav class="bottom-nav" aria-label="Primary">
      <div class="bottom-nav-items">
        ${items
          .map(([label, icon], index) => `
            <button class="nav-item ${index === 0 ? "is-active" : ""}" type="button" data-action="${index === 0 ? "home" : "menu"}">
              ${renderIcon(icon)}
              <span>${escapeHtml(label)}</span>
            </button>
          `)
          .join("")}
      </div>
      <div class="home-indicator" aria-hidden="true"></div>
    </nav>
  `;
}

function getFilteredStories() {
  if (state.selectedCategory === "All") return stories;
  return stories.filter(
    (story) => story.category === state.selectedCategory || story.related.includes(state.selectedCategory)
  );
}

function getSelectedStory() {
  return stories.find((story) => story.id === state.selectedStoryId) || stories[0];
}

function formatPrice(price) {
  return price === 0 ? "Free" : `₹${price}`;
}

function renderStars(count) {
  return "★★★★★".slice(0, count) + "☆☆☆☆☆".slice(0, Math.max(0, 5 - count));
}

function renderIcon(name) {
  const icons = {
    arrowRight: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>`,
    bookmark: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 4.8a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16l-5.5-3.4-5.5 3.4Z" /></svg>`,
    bookOpen: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H20v16H7.5A3.5 3.5 0 0 0 4 21.5Z" /><path d="M4 5.5v16M8 6h8M8 9h6" /></svg>`,
    briefcase: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7V5.8A2.8 2.8 0 0 1 11.8 3h.4A2.8 2.8 0 0 1 15 5.8V7" /><path d="M4 8.5h16v9.8a2.2 2.2 0 0 1-2.2 2.2H6.2A2.2 2.2 0 0 1 4 18.3Z" /><path d="M4 12.5h16M10 12.5v1.2h4v-1.2" /></svg>`,
    calendar: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v3M17 3v3M4.5 8h15M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" /></svg>`,
    check: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.2 4.2L19 7" /></svg>`,
    chevronLeft: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>`,
    chevronRight: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>`,
    clock: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" /><path d="M12 7v5l3 2" /></svg>`,
    close: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>`,
    coins: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 8.5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5S15.8 6 13 6 8 7.1 8 8.5Z" /><path d="M8 8.5v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4" /><path d="M6 11c-1.2.5-2 1.2-2 2.1 0 1.4 2.2 2.5 5 2.5M4 13.1v3.8c0 1.4 2.2 2.5 5 2.5 1.6 0 3-.4 3.9-1" /></svg>`,
    graduation: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 9 9-4 9 4-9 4Z" /><path d="M7 11.2v4.2c1.5 1.3 3.2 2 5 2s3.5-.7 5-2v-4.2" /><path d="M21 9v5" /></svg>`,
    headphones: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><path d="M4 14h3v6H5.5A1.5 1.5 0 0 1 4 18.5ZM20 14h-3v6h1.5a1.5 1.5 0 0 0 1.5-1.5Z" /></svg>`,
    heart: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 5.8a5.3 5.3 0 0 0-7.5 0l-.7.7-.7-.7a5.3 5.3 0 0 0-7.5 7.5l.7.7L12 21.5l7.5-7.5.7-.7a5.3 5.3 0 0 0 0-7.5Z" /></svg>`,
    home: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3.5 11 8.5-7.2L20.5 11" /><path d="M5.8 9.6v10h12.4v-10M9.5 19.6v-5h5v5" /></svg>`,
    library: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2Z" /><path d="M8 8h7M8 11h7M8 14h4" /></svg>`,
    lock: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10V8a5 5 0 0 1 10 0v2" /><path d="M6 10h12v10H6Z" /></svg>`,
    message: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 6.8A6.8 6.8 0 0 1 11.3 3h1.4a6.8 6.8 0 0 1 6.8 6.8v.5a6.8 6.8 0 0 1-6.8 6.8H10l-4.3 3v-4.2a6.8 6.8 0 0 1-1.2-9.1Z" /><path d="M8.2 9h7.6M8.2 12h5.6" /></svg>`,
    more: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12h.01M18 12h.01M6 12h.01" /></svg>`,
    pause: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14" /></svg>`,
    play: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10-6.5Z" /></svg>`,
    profile: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12.2a4.3 4.3 0 1 0 0-8.6 4.3 4.3 0 0 0 0 8.6Z" /><path d="M4.8 20.4a7.2 7.2 0 0 1 14.4 0" /></svg>`,
    search: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15ZM16 16l5 5" /></svg>`,
    spark: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5 13.6 8l4.9 1.5-4.9 1.5L12 15.5 10.4 11 5.5 9.5 10.4 8Z" /><path d="m18 15 .8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8Z" /></svg>`,
    star: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6-5.4-2.8-5.4 2.8 1-6-4.4-4.3 6.1-.9Z" /></svg>`,
    sun: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v2.2M5.6 5.6 7.1 7.1M3 12h2.2M18.8 12H21M16.9 7.1l1.5-1.5M12 18.8V21M5.6 18.4l1.5-1.5M16.9 16.9l1.5 1.5" /><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /></svg>`,
    wallet: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v4H6.5A2.5 2.5 0 0 1 4 6.5v11A2.5 2.5 0 0 0 6.5 20H20V9H6.5" /><path d="M16.2 14.5h.1" /></svg>`,
  };

  return icons[name] || "";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
