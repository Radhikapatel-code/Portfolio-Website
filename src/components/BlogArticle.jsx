import { useParams, useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    slug: "collaborative-environment",
    title: "Working in a collaborative environment",
    date: "Dec 10, 2025",
    tag: "Career",
    content: `
Working on my first major project helped me understand how essential collaboration is.

I learned how to:
• Communicate ideas clearly
• Respect different viewpoints
• Adapt quickly to real-world constraints

This experience shaped how I approach teamwork today.
    `
  },
  {
    slug: "ev-flash-charging",
    title: "Project Opportunities in EV Flash Charging",
    date: "Dec 15, 2025",
    tag: "Research",
    content: `
This project focused on rapid EV charging solutions.

It strengthened my research mindset and helped me understand
how academic projects translate into real-world applications.
    `
  },
  {
    slug: "aesthetics-of-code",
    title: "The Aesthetics of Code",
    date: "Oct 15, 2025",
    tag: "Design",
    content: `
Frontend development is about experience, not just code.

This article explores how typography, spacing,
and animations elevate digital products.
    `
  }
];

export default function BlogArticle() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <p className="text-center mt-32">Article not found</p>;
  }

  return (
    <section className="min-h-screen bg-[#050505] px-6 py-32 text-white">
      <div className="max-w-3xl mx-auto">

        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-gray-400 hover:text-white"
        >
          ← Back
        </button>

        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-400 mb-8">{post.date} · {post.tag}</p>

        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
          {post.content}
        </p>
      </div>
    </section>
  );
}
