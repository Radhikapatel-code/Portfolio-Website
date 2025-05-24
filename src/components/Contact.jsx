export default function Contact() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto animate-fade-in">
      <h2 className="text-4xl font-bold mb-6 text-center text-aqua-300">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full border px-4 py-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-aqua-400 outline-none" />
          <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-aqua-400 outline-none" />
          <textarea placeholder="Message" className="w-full border px-4 py-2 rounded h-32 bg-gray-700 text-white focus:ring-2 focus:ring-aqua-400 outline-none"></textarea>
          <button type="submit" className="bg-aqua-500 text-gray-900 px-6 py-2 rounded hover:bg-aqua-600 transition-colors">Send Message</button>
        </form>
        <div className="bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-900 p-6 rounded-lg shadow-lg text-aqua-200 space-y-4 border border-aqua-400">
          <h3 className="text-2xl font-bold mb-4 text-aqua-100">Reach Me At</h3>
          <p><strong>Email:</strong> rp773061@gmail.com</p>
          <p><strong>Phone:</strong> +91-8780361480</p>
        </div>
      </div>
    </section>
  );
}