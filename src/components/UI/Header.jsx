import { useState, useEffect } from 'react';

export default function Header() {
  const [state, setState] = useState(false);
  const navigation = [
    { title: 'Travel', path: '#travel' },
    { title: 'Blog', path: '#blog' },
    { title: 'Contact us', path: '#contact' },
    { title: 'About', path: '#about' },
  ];

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: 'smooth',
      });
      // Close mobile menu after clicking a link
      setState(false);
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <nav className="bg-transparent w-full border-b md:border-0 md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="/">
            <img
              src="/logo.png"
              width={100}
              alt="Float UI logo"
              className="transition-transform duration-300 hover:scale-105"
            />
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? 'block' : 'hidden'
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li
                key={idx}
                className="text-gray-600 hover:text-gray-900 transition duration-150 font-bold"
              >
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <a
            href="/sign"
            className="text-gray-600 hover:text-gray-900 transition duration-150 font-bold"
          >
            Sign In
          </a>
          <a
            href="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-150 font-bold"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}