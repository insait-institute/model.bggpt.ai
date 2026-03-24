export type Lang = 'en' | 'bg';

export const nav = {
  en: {
    links: ['Blog', 'About the Models'],
    cta: 'Contact Us',
  },
  bg: {
    links: ['Блог', 'Повече за моделите'],
    cta: 'Свържете се',
  },
};

export const footer = {
  en: {
    resources: 'Resources',
    research: 'Research',
    blog: 'Blog',
    news: 'News',
    huggingFaceModels: 'HuggingFace Models',
    apiAccess: 'API Access',
    insait: 'INSAIT',
    aboutInsait: 'About INSAIT',
    contact: 'Contact',
    footNote:
      '&copy; <a class="text-primary underline" href="https://insait.ai">INSAIT</a> 2026. All rights reserved.<br />Synergy Tower, 111P Tsarigradsko Shose Blvd, 1784 Sofia, Bulgaria',
  },
  bg: {
    resources: 'Ресурси',
    research: 'Изследвания',
    blog: 'Блог',
    news: 'Новини',
    huggingFaceModels: 'HuggingFace модели',
    apiAccess: 'API достъп',
    insait: 'INSAIT',
    aboutInsait: 'За INSAIT',
    contact: 'Контакт',
    footNote:
      '&copy; <a class="text-primary underline" href="https://insait.ai">INSAIT</a> 2026. Всички права запазени.<br />Synergy Tower, бул. Цариградско шосе 111Р, 1784 София, България',
  },
};

export const hero = {
  en: {
    title: 'State-of-the-art AI for<br /><span class="text-primary">Bulgarian Language</span>',
    subtitle:
      'BgGPT 3.0 — a new generation of open, multimodal AI models for Bulgarian. Faster, smarter, and with longer context — built by INSAIT for Bulgarian citizens, institutions, and organizations. Read more about the BgGPT 3.0 models in <a href="/blog" class="text-primary underline">our blog</a>.',
    cta: 'Get API Access',
    ctaSecondary: 'Download from HuggingFace',
  },
  bg: {
    title: 'Водещ изкуствен интелект за<br /><span class="text-primary">български език</span>',
    subtitle:
      '<strong>BgGPT 3.0</strong> — ново поколение отворени, мултимодални AI модели за български. По-бързи, по-интелигентни и с по-голям контекст — създадени от INSAIT за българските граждани и институции. Повече за BgGPT 3.0 моделите прочетете в <a href="/blog" class="text-primary underline">блога тук</a>.',
    cta: 'Получи API достъп',
    ctaSecondary: 'Изтегли от HuggingFace',
  },
};

export const apiAccess = {
  en: {
    title: 'Access BgGPT Models',
    subtitle: 'Get started with the latest BgGPT 3.0 models — available via API or direct download on HuggingFace.',
    ctaApi: 'Get API Access',
    ctaHuggingFace: 'Download on HuggingFace',
  },
  bg: {
    title: 'Достъп до BgGPT модели',
    subtitle:
      'Започнете с най-новите BgGPT 3.0 модели — достъпни чрез API или за директно изтегляне от HuggingFace.',
    ctaApi: 'API достъп',
    ctaHuggingFace: 'Изтегляне от HuggingFace',
  },
};

// Client-side translations map for nav and UI elements with data-i18n attributes
export const clientTranslations: Record<string, Record<string, string>> = {
  en: {
    ...nav.en.links.reduce((acc, text, i) => ({ ...acc, [`nav.${i}`]: text }), {}),
    'nav.cta': nav.en.cta,
  },
  bg: {
    ...nav.bg.links.reduce((acc, text, i) => ({ ...acc, [`nav.${i}`]: text }), {}),
    'nav.cta': nav.bg.cta,
  },
};
