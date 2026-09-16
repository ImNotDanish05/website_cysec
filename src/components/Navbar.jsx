import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn, FileText, Calendar, MessageSquare, Mail, Users } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: Menu },
    { name: 'Roadmap', path: '/roadmap', icon: FileText },
    { name: 'Ebooks', path: '/ebooks', icon: FileText },
    { name: 'Webinars', path: '/webinars', icon: Calendar },
    { name: 'Forum', path: '/forum', icon: MessageSquare },
    { name: 'Blog', path: '/blog', icon: FileText },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-cyan-500/10 shadow-lg'
          : 'bg-black'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-between h-20'>
          <Link to='/' className='flex items-center group'>
            <img
              src='/logo-cysec.png'
              alt='CYSEC Logo'
              className='h-16 w-16 object-contain group-hover:scale-110 transition-transform duration-300'
            />
          </Link>

          <div className='hidden md:flex items-center gap-6'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className='flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors hover:scale-105 transform duration-200'
              >
                <link.icon className='w-4 h-4' />
                {link.name}
              </Link>
            ))}
          </div>

          <div className='hidden md:flex items-center gap-4'>
            <Link
              to='/member'
              className='px-5 py-2 bg-gradient-to-r from-[#08157D] to-[#00f3ff] text-white font-mono font-medium rounded hover:from-[#00f3ff] hover:to-[#08157D] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] flex items-center gap-2'
            >
              <LogIn className='w-4 h-4' />
              Login
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-cyan-500 hover:text-cyan-400 transition-colors'
          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden absolute top-20 left-0 right-0 bg-black border-b border-cyan-500/20 animate-in slide-in-from-top-5'>
          <div className='px-4 py-6 flex flex-col gap-4'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className='flex items-center gap-3 text-base font-medium text-gray-300 hover:text-cyan-400 transition-colors p-2 hover:bg-cyan-500/10 rounded'
              >
                <link.icon className='w-5 h-5' />
                {link.name}
              </Link>
            ))}
            <Link
              to='/member'
              onClick={() => setIsOpen(false)}
              className='mt-4 px-6 py-3 bg-gradient-to-r from-[#08157D] to-[#00f3ff] text-white font-mono font-medium rounded text-center hover:from-[#00f3ff] hover:to-[#08157D] transition-all duration-300'
            >
              Login to Member Portal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

