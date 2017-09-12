
export interface Post {
  author: number;
  categories: number[];
  comment_status: string;
  content: {
    protected: boolean;
    rendered: string;
  };
  date: string;
  date_gmt: string;
  excerpt: {
    protected: boolean;
    rendered: string;
  };
  featured_image_src: [string, string];
  featured_media: number;
  format: string;
  guid: { rendered: string; };
  id: number;
  link: string;
  meta: string[];
  modified: string;
  modified_gmt: string;
  ping_status: string;
  slug: string;
  status: string;
  sticky: boolean;
  tags: string[];
  template: string;
  title: { rendered: string; };
  type: string;
  _embedded: any;
}