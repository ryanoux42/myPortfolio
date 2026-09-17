export interface BlogPostMeta {
   slug: string;
   title: string;
   description: string;
   date: Date;
   cover: string;
   tags: string[];
   favorite: boolean;
   readingTime: number;
}

export interface BlogPost {
   meta: BlogPostMeta;
   content: string;
}
