import { nav, footer } from './i18n/translations';

const hrefs = [
  '/blog',
  '/research',
  'https://huggingface.co/collections/INSAIT-Institute/bggpt-gemma-3-685a5c099b4f0c4977f46488',
];

export const headerData = {
  links: nav.en.links.map((text, i) => ({
    text,
    href: hrefs[i],
    i18nKey: `nav.${i}`,
  })),
  actions: [{ text: nav.en.cta, href: 'mailto:bggpt@insait.ai', i18nKey: 'nav.cta' }],
};

const huggingFaceHref =
  'https://huggingface.co/collections/INSAIT-Institute/bggpt-gemma-3-685a5c099b4f0c4977f46488';

export const footerDataEn = {
  links: [
    {
      title: footer.en.resources,
      links: [
        { text: footer.en.research, href: '/research' },
        { text: footer.en.blog, href: '/blog' },
        { text: footer.en.huggingFaceModels, href: huggingFaceHref },
      ],
    },
    {
      title: footer.en.insait,
      links: [
        { text: footer.en.aboutInsait, href: 'https://insait.ai' },
        { text: footer.en.contact, href: 'mailto:bggpt@insait.ai' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'simple-icons:linkedin', href: 'https://www.linkedin.com/company/insaitinstitute' },
    { ariaLabel: 'Facebook', icon: 'simple-icons:facebook', href: 'https://www.facebook.com/INSAIT.institute/' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/INSAITinstitute' },
    { ariaLabel: 'HuggingFace', icon: 'custom:huggingface', href: 'https://huggingface.co/INSAIT-Institute' },
  ],
  footNote: footer.en.footNote,
};

export const footerDataBg = {
  links: [
    {
      title: footer.bg.resources,
      links: [
        { text: footer.bg.research, href: '/research' },
        { text: footer.bg.blog, href: '/blog' },
        { text: footer.bg.huggingFaceModels, href: huggingFaceHref },
      ],
    },
    {
      title: footer.bg.insait,
      links: [
        { text: footer.bg.aboutInsait, href: 'https://insait.ai' },
        { text: footer.bg.contact, href: 'mailto:bggpt@insait.ai' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'simple-icons:linkedin', href: 'https://www.linkedin.com/company/insaitinstitute' },
    { ariaLabel: 'Facebook', icon: 'simple-icons:facebook', href: 'https://www.facebook.com/INSAIT.institute/' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/INSAITinstitute' },
    { ariaLabel: 'HuggingFace', icon: 'custom:huggingface', href: 'https://huggingface.co/INSAIT-Institute' },
  ],
  footNote: footer.bg.footNote,
};
