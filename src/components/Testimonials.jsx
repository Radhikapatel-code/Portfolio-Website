export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gray-900 animate-fade-in">
      <h2 className="text-4xl font-bold mb-10 text-center text-aqua-300">Testimonials</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {[1, 2].map((id) => (
          <div key={id} className="bg-gradient-to-r from-gray-700 to-gray-800 shadow-lg rounded-lg p-6">
            <p className="text-aqua-200 italic">“Radhika is a fantastic developer who brings creativity and energy to every project.”</p>
            <p className="mt-4 font-semibold text-right text-aqua-400">— Client {id}</p>
          </div>
        ))}
      </div>
    </section>
  );
}