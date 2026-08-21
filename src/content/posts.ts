import { SummerAtNationGraph } from "./SummerAtNationGraph";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  cover: string;
  Content: () => React.ReactNode;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "summer-at-nationgraph",
    title: "A Summer at NationGraph",
    date: "2026-08-19",
    readingTime: "6 min read",
    excerpt:
      "Most internships hand you a lane. NationGraph handed me a blank page. What I built, what changed, and what I'd pass on to the next intern.",
    cover: `${import.meta.env.BASE_URL}blog/nationgraph/interns-lunch.jpg`,
    Content: SummerAtNationGraph,
  },
];
