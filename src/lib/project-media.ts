export type ProjectMedia =
  | {
      type: 'image';
      src: string;
      alt: string;
    }
  | {
      type: 'video';
      src: string;
      title: string;
      poster?: string;
      captions?: {
        src: string;
        lang: string;
        label: string;
      };
    };

export type ProjectSection = {
  title: string;
  description: string;
  media?: ProjectMedia;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectDetailData = {
  name: string;
  category: string;
  summary: string;
  overview: string;
  context: string;
  role: string;
  media: ProjectMedia;
  tools: string[];
  sections: ProjectSection[];
  links: ProjectLink[];
};
