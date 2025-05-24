export default function Footer() {
  return (
    <footer className="bg-gray-800 text-center text-aqua-300 py-6 mt-12 animate-fade-in">
      <p className="text-sm">© {new Date().getFullYear()} Radhika. All rights reserved.</p>
    <div className="flex gap-4 items-center justify-center mt-6">
  <a href="https://github.com/Radhikapatel-code" target="_blank" rel="noopener noreferrer">
    <img src="Screenshot 2025-05-24 204329.png" alt="icon1" className="w-8 h-8 transition-transform duration-200 hover:scale-110" />
  </a>
  <a href="https://www.linkedin.com/in/radhika-sangadhiya-b8b32b271/" target="_blank" rel="noopener noreferrer">
    <img src="linkedin (1).png" alt="LinkedIn" className="w-8 h-8 transition-transform duration-200 hover:scale-110" />
  </a>
 
</div>

    </footer>
  );
}
