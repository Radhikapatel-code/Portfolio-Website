export default function PortfolioGallery() {
  return (
    <section className="py-24 bg-gray-800 px-6 animate-fade-in">
      <h2 className="text-4xl font-bold mb-6 text-center text-aqua-300">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((project) => (
          <div key={project} className="bg-gray-700 shadow-lg rounded-lg overflow-hidden card-hover">
            <img src={`https://via.placeholder.com/400x200?text=Project+${project}`} alt="Project" className="w-full" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-aqua-100">Project {project}</h3>
              <p className="text-sm text-aqua-300">Brief description of the project goes here. Includes interactive elements and animations.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}