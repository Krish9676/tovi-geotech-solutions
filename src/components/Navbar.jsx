import { useState } from 'react';

const links = [
  { name: 'Home', href: '#' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Technology', href: '#technology' },
  { name: 'API Docs', href: '#api-docs' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const socials = [
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
  ) },
  { name: 'Twitter', href: 'https://twitter.com', icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636a9.936 9.936 0 0 0 2.457-2.548z"/></svg>
  ) },
];

function Navbar() {
  const [dark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-green-700">ToviAgriTech</span>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          {links.map(link => link.external ? (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition">{link.name}</a>
          ) : (
            <a key={link.name} href={link.href} className="hover:text-green-600 transition">{link.name}</a>
          ))}
          <button onClick={toggleDark} className="ml-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition">
            {dark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.07 6.07l-.71-.71M6.34 6.34l-.71-.71m12.02 12.02l-.71-.71M6.34 17.66l-.71.71M12 5a7 7 0 1 0 0 14a7 7 0 0 0 0-14z"/></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>
            )}
          </button>
          {socials.map(s => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-green-600">{s.icon}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;