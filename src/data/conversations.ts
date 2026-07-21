export interface Conversations {
  id: number;
  title: string;
  date: string;
}

export const conversations: Conversations[] = [
  {
    id: 1,
    title: "Build Authentication API",
    date: "Today",
  },
  {
    id: 2,
    title: "Create Vue Components",
    date: "Today",
  },
  {
    id: 3,
    title: "Responsive Tailwind Dashboard",
    date: "Yesterday",
  },
  {
    id: 4,
    title: "Optimize PostgreSQL Queries",
    date: "Yesterday",
  },
  {
    id: 5,
    title: "Design REST API Endpoints",
    date: "2 days ago",
  },
  {
    id: 6,
    title: "JWT Authentication Guide",
    date: "2 days ago",
  },
  {
    id: 7,
    title: "Docker Compose Configuration",
    date: "Last Week",
  },
  {
    id: 8,
    title: "Vue Router Navigation",
    date: "Last Week",
  },
];
