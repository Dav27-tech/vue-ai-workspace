export interface Tool {
  id: number;
  name: string;
  company: string;
  category: string;
  status: string;
  color: string;
  buttonText: string;
}

export const tools: Tool[] = [
  {
    id: 1,
    name: "ChatGPT",
    company: "OpenAI",
    category: "AI Assistant",
    status: "Online",
    color: "bg-green-500",
    buttonText: "Open",
  },
  {
    id: 2,
    name: "Claude",
    company: "Anthropic",
    category: "AI Assistant",
    status: "Online",
    color: "bg-green-500",
    buttonText: "Open",
  },
  {
    id: 3,
    name: "Gemini",
    company: "Google",
    category: "AI Assistant",
    status: "Online",
    color: "bg-green-500",
    buttonText: "Open",
  },
  {
    id: 4,
    name: "GitHub Copilot",
    company: "GitHub",
    category: "Code Assistant",
    status: "Online",
    color: "bg-green-500",
    buttonText: "Open",
  },
  {
    id: 5,
    name: "Perplexity",
    company: "Perplexity AI",
    category: "Research",
    status: "Online",
    color: "bg-green-500",
    buttonText: "Open",
  },
  {
    id: 6,
    name: "Midjourney",
    company: "Midjourney",
    category: "Image Generation",
    status: "Offline",
    color: "bg-red-500",
    buttonText: "Unavailable",
  },
  {
    id: 7,
    name: "Notion AI",
    company: "Notion",
    category: "Productivity",
    status: "Online",
    color: "bg-green-500",
    buttonText: "Open",
  },
  {
    id: 8,
    name: "Cursor",
    company: "Anysphere",
    category: "Code Editor",
    status: "Online",
    color: "bg-green-500",
    buttonText: "Open",
  },
];
