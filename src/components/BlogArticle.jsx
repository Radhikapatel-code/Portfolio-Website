import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';

const blogPosts = [
  {
    slug: "usc-marshall-research-internship",
    title: "How I Landed a USC Marshall Research Internship Through a Scholarship Program",
    date: "Jun 20, 2025",
    tag: "Research",
    readTime: "8 min read",
    content: `
When I first saw the scholarship program that offered research opportunities at top global universities, I knew I had to apply — even though I wasn't sure I'd make it past the first round.

## The Application Journey

The selection process was rigorous and multi-layered. It started with a written application where I had to articulate my research interests, past projects, and why I wanted to work on problems at the intersection of AI and market dynamics. I spent weeks refining my statement, drawing connections between my work on SentinelAI (explainable AI for fraud detection) and my growing interest in how algorithmic systems shape real-world decisions.

After clearing the initial screening, I went through multiple rounds of evaluation — each one testing not just technical knowledge, but the ability to think critically about open-ended research problems. There were interviews where I was asked to discuss trade-offs in ML systems, propose experiments, and reason about the societal impact of AI-driven platforms.

## The Research

Being selected to work with **Prof. Saumya Singhvi (USC Marshall School of Business)** and **Prof. Divya Singhvi (NYU Stern)** has been a transformative experience. Our research focuses on a fascinating question:

> *How do algorithmic recommendations and sponsored placements on e-commerce platforms shape consumer preferences, platform revenue, and small-seller market access?*

To study this, I'm designing a **multi-agent market simulation** where LLM-powered consumer agents interact with recommendation algorithms. Each agent has its own preferences, budget constraints, and decision-making patterns — all powered by large language models that simulate realistic consumer behavior.

## What I've Learned

This experience has taught me several things:

• **Research is iterative.** Unlike a hackathon where you ship in 48 hours, research problems unfold over months. You form hypotheses, test them, fail, adjust, and repeat.

• **Reading papers is a skill.** I've gone from barely understanding abstracts to being able to critically evaluate methodology sections and identify gaps in existing literature.

• **Communication matters.** Presenting ideas to advisors who think about problems differently than you forces you to articulate your thoughts with precision.

• **The intersection of AI and economics is incredibly rich.** Questions about fairness, market dynamics, and platform design are not just technical problems — they're societal ones.

## Looking Ahead

This internship has solidified my interest in building AI systems that are not just technically impressive, but thoughtfully designed. Whether it's understanding how recommendation algorithms affect small sellers or how LLM agents can simulate complex market behaviors, I want to keep working on problems where technology meets real-world impact.

If you're a student considering applying to research programs — do it. The process itself teaches you more about yourself and your interests than you might expect.
    `
  },
  {
    slug: "building-multi-agent-systems",
    title: "Building Multi-Agent Systems: When AI Agents Talk to Each Other",
    date: "Mar 15, 2026",
    tag: "AI/ML",
    readTime: "10 min read",
    content: `
Single-agent LLM systems are impressive. But what happens when you give multiple AI agents distinct roles, let them communicate, and ask them to solve a problem together? That's when things get really interesting.

## Why Multi-Agent Systems?

The idea is simple: just like humans work in teams — where a designer, developer, and product manager each bring different skills — AI agents can be specialized for different subtasks and collaborate to solve complex problems that no single agent could handle well.

In my work at USC Marshall, I've been building exactly this: a market simulation where different LLM agents play different roles (consumers, sellers, platform algorithms) and interact in a shared environment.

## The Architecture

Here's the high-level architecture I've been working with:

**1. Agent Design:** Each agent is backed by an LLM (GPT-4 or Claude) with a carefully designed system prompt that defines its role, constraints, and decision-making framework. A consumer agent, for example, has a budget, brand preferences, and a utility function.

**2. Communication Protocol:** Agents communicate through structured message passing. When a consumer agent "browses" the platform, it sends a query to the recommendation engine agent, which returns ranked results based on its algorithm. The consumer then "decides" whether to purchase.

**3. Environment State:** A shared state tracks inventory, prices, purchase history, and platform metrics. This is updated after every interaction cycle.

**4. Orchestration with LangChain:** I use LangChain to manage agent memory, tool usage, and multi-step reasoning. Each agent has access to specific tools — a consumer can "search," "compare," and "purchase," while a seller can "set price," "run promotion," and "check inventory."

## Key Challenges

**Prompt Engineering at Scale:** When you have 50+ agents, even small ambiguities in prompts compound into unpredictable system behavior. I've learned to be extremely precise in defining agent boundaries.

**State Consistency:** Making sure all agents have a consistent view of the world state is harder than it sounds, especially when interactions happen in parallel.

**Evaluation:** How do you measure if a multi-agent simulation is "realistic"? We've developed metrics comparing our simulated market dynamics to real-world e-commerce data.

## The Bigger Picture

Multi-agent systems aren't just an academic exercise. They're being used for:

• **Autonomous software development** — where agents write, review, and test code
• **Scientific research** — where agents form hypotheses and design experiments
• **Business simulation** — where agents model supply chains, negotiations, and market dynamics

I believe multi-agent AI will be one of the most impactful paradigms of the next decade. If you're interested in AI, start building with agents. The mental model it gives you for system design is invaluable.

## Tools I Recommend

If you want to get started with multi-agent systems:

• **LangChain / LangGraph** — for agent orchestration
• **CrewAI** — for role-based multi-agent frameworks
• **AutoGen (Microsoft)** — for conversational multi-agent systems
• **OpenAI Assistants API** — for tool-augmented agents
    `
  },
  {
    slug: "competitive-programming-journey",
    title: "From 0 to 750+: My Competitive Programming Journey",
    date: "Jan 10, 2026",
    tag: "Career",
    readTime: "7 min read",
    content: `
I still remember the day I submitted my first problem on LeetCode. It was "Two Sum" — the quintessential beginner problem — and it took me an embarrassingly long time to figure out the hash map solution. Fast forward to today: I've solved 754+ problems, earned a Codeforces Specialist rating, and maintained a 415+ day daily streak.

Here's the honest, unfiltered story of how I got here.

## Phase 1: The Struggle (Problems 0-100)

The first 100 problems were the hardest. Not because the problems were difficult — most were easy-tier — but because I didn't have the mental framework for algorithmic thinking.

I'd stare at a problem, have no idea where to start, look at the solution, and feel like I'd never come up with that on my own. The key insight that changed everything:

> **You don't need to be brilliant. You need to recognize patterns.**

Once I started categorizing problems by pattern (sliding window, two pointers, BFS/DFS, dynamic programming), everything clicked.

## Phase 2: Building Consistency (Problems 100-400)

This is where the daily streak became my superpower. I committed to solving at least one problem every single day, no matter what. Some days it was a quick easy problem at midnight. Other days it was a 2-hour hard problem during a study session.

My approach:
• **Topic-wise grinding:** I'd pick a topic (say, binary search) and solve 20-30 problems on it before moving on
• **Contest participation:** Weekly LeetCode contests taught me to think under pressure
• **Editorial reading:** I stopped feeling bad about reading editorials. Understanding a solution deeply is more valuable than brute-forcing a mediocre one

## Phase 3: Codeforces & Competition (Problems 400-750+)

LeetCode taught me problem-solving patterns. Codeforces taught me **speed** and **pressure management**.

My first Codeforces contest was humbling — I solved only 1 problem out of 6. But I kept going. The rating system is brutally honest, and that honesty is what makes it effective.

Key milestones:
• **Reached Specialist rating** — the moment when problems that once seemed impossible became approachable
• **416 Medium problems, 147 Hard problems** — I stopped avoiding hard problems and started embracing them
• **Shortlisted to Round 3 at Deloitte Hacksplosion** — competitive programming skills translated directly to hackathon performance

## What CP Taught Me (Beyond Algorithms)

1. **Consistency > Intensity.** A daily 30-minute habit beats a weekend 8-hour binge.
2. **Reading code is as important as writing it.** I learned more from studying elegant solutions than from my own attempts.
3. **Debugging is a skill.** CP trains you to find bugs fast — a skill that translates to every area of software engineering.
4. **The plateau is real.** There were weeks where my rating didn't budge. The key is to keep showing up.

## Tips for Beginners

If you're just starting your CP journey:

• **Start with LeetCode Easy problems.** Don't jump to mediums until you're comfortable with arrays, strings, and hash maps.
• **Learn by topic, not randomly.** Follow a structured plan (I recommend the NeetCode roadmap).
• **Start contests early.** Even if you solve only 1 problem, the experience is invaluable.
• **Don't compare yourself to others.** Compare yourself to you-from-last-month.
• **Maintain a streak.** It builds discipline that goes far beyond CP.

754 problems in, and I'm still learning something new every day. That's the beauty of competitive programming — the mountain never ends, but the view keeps getting better.
    `
  }
];

export default function BlogArticle() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <section className="min-h-screen px-6 py-32 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article not found</h1>
          <button onClick={() => navigate('/')} className="text-aqua-400 hover:text-aqua-300 transition-colors">
            ← Back to Home
          </button>
        </div>
      </section>
    );
  }

  // Simple markdown-like rendering for ## headers and bullet points
  const renderContent = (content) => {
    return content.split('\n').map((line, i) => {
      const trimmed = line.trim();
      
      if (trimmed.startsWith('## ')) {
        return (
          <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4">
            {trimmed.slice(3)}
          </h2>
        );
      }
      
      if (trimmed.startsWith('> ')) {
        return (
          <blockquote key={i} className="border-l-4 border-aqua-400/50 pl-4 py-2 my-4 text-gray-300 italic bg-white/[0.02] rounded-r-lg">
            {trimmed.slice(2)}
          </blockquote>
        );
      }
      
      if (trimmed.startsWith('• **')) {
        const match = trimmed.match(/• \*\*(.*?)\*\*(.*)/);
        if (match) {
          return (
            <li key={i} className="flex items-start gap-2 text-gray-300 leading-relaxed mb-2 ml-4">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-aqua-400 flex-shrink-0"></span>
              <span><b className="text-white font-medium">{match[1]}</b>{match[2]}</span>
            </li>
          );
        }
      }
      
      if (trimmed.startsWith('• ')) {
        return (
          <li key={i} className="flex items-start gap-2 text-gray-300 leading-relaxed mb-2 ml-4">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-aqua-400 flex-shrink-0"></span>
            <span>{trimmed.slice(2)}</span>
          </li>
        );
      }
      
      if (trimmed.length === 0) {
        return <div key={i} className="h-3"></div>;
      }

      // Handle **bold** text inline
      const parts = trimmed.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={i} className="text-gray-300 leading-relaxed mb-1">
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <b key={j} className="text-white font-medium">{part.slice(2, -2)}</b>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <section className="min-h-screen px-6 py-32 text-white">
      <div className="max-w-3xl mx-auto">

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="mb-10 flex items-center gap-2 text-gray-400 hover:text-aqua-300 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </motion.button>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-500">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08]">
              <Tag size={12} /> {post.tag}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={12} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">{post.title}</h1>

          {/* Divider */}
          <div className="w-20 h-0.5 bg-gradient-to-r from-aqua-400 to-purple-400 mb-10 rounded-full"></div>
        </motion.div>

        {/* Article Body */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          {renderContent(post.content)}
        </motion.article>

        {/* Bottom Divider */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
          <button
            onClick={() => navigate('/')}
            className="text-gray-400 hover:text-aqua-300 transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={16} /> Back to all articles
          </button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            ↑ Back to top
          </button>
        </div>

      </div>
    </section>
  );
}
