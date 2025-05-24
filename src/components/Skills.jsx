export default function Skills() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-fade-in">
      <h2 className="text-4xl font-bold mb-10 text-center text-aqua-300">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
        {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git', 'Figma', 'Node.js'].map((skill) => (
          <li key={skill} className="bg-gray-800 p-6 rounded-lg shadow-lg text-aqua-200 font-semibold card-hover border border-aqua-300 hover:bg-gray-700 transition-colors duration-300">
            <span className="text-xl">{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}