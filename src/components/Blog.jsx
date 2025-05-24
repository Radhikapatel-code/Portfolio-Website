export default function Blog() {
  return (
    <section className="py-24 bg-gray-800 px-6 animate-fade-in">
      <h2 className="text-4xl font-bold mb-10 text-center text-aqua-300">Latest Blog Posts</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2].map((post) => (
          <div key={post} className="bg-gray-700 rounded-lg p-6 shadow-md card-hover">
            <h3 className="text-xl font-bold mb-2 text-aqua-100">Blog Title {post}</h3>
            <p className="text-sm text-aqua-300">A short excerpt from the blog post will be shown here...</p>
          </div>
        ))}
      </div>
    </section>
  );
}