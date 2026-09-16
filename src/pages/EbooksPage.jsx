import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, Clock, User, Search, FileText, ChevronRight } from 'lucide-react';

const EbooksPage = () => {
  const ebooks = [
    {
      id: 1,
      title: 'Introduction to Penetration Testing',
      author: 'John Doe',
      pages: 256,
      category: 'Penetration Testing',
      downloads: 1234,
      level: 'Beginner',
      image: 'https://placehold.co/300x400/08157D/00f3ff?text=Penetration+Testing',
    },
    {
      id: 2,
      title: 'Advanced Network Security',
      author: 'Jane Smith',
      pages: 312,
      category: 'Network Security',
      downloads: 892,
      level: 'Advanced',
      image: 'https://placehold.co/300x400/08157D/00f3ff?text=Network+Security',
    },
    {
      id: 3,
      title: 'Web Application Security',
      author: 'Alice Johnson',
      pages: 198,
      category: 'Web Security',
      downloads: 1567,
      level: 'Intermediate',
      image: 'https://placehold.co/300x400/08157D/00f3ff?text=Web+Security',
    },
    {
      id: 4,
      title: 'Cloud Security Fundamentals',
      author: 'Bob Wilson',
      pages: 289,
      category: 'Cloud Security',
      downloads: 756,
      level: 'Intermediate',
      image: 'https://placehold.co/300x400/08157D/00f3ff?text=Cloud+Security',
    },
  ];

  const categories = ['All', 'Penetration Testing', 'Network Security', 'Web Security', 'Cloud Security', 'Incident Response'];

  return (
    <div className='min-h-screen bg-black py-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#08157D]/20 to-[#00f3ff]/20 border border-[#00f3ff]/30 rounded-full text-[#00f3ff] mb-6'>
            <BookOpen className='w-4 h-4' />
            <span className='text-sm font-mono'>RESOURCE LIBRARY</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight'>
            eBook <span className='text-[#00f3ff]'>Library</span>
          </h1>
          <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
            Access hundreds of cybersecurity eBooks and technical documentation
          </p>
        </motion.div>

        <div className='mb-10 overflow-x-auto pb-2'>
          <div className='flex gap-2 min-w-max mx-auto max-w-3xl'>
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className='px-4 py-2 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-gray-400 hover:text-[#00f3ff] hover:border-[#00f3ff]/30 transition-all cursor-pointer'
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        <div className='mb-10'>
          <div className='relative max-w-2xl mx-auto'>
            <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500' />
            <input
              type='text'
              placeholder='Search eBooks...'
              className='w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg focus:border-[#00f3ff]/50 focus:ring-1 focus:ring-[#00f3ff]/50 text-white transition-all outline-none'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20'>
          {ebooks.map((ebook, index) => (
            <motion.div
              key={ebook.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className='bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-[#00f3ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] group'
            >
              <div className='h-48 overflow-hidden relative'>
                <img
                  src={ebook.image}
                  alt={ebook.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4'>
                  <span className='px-2 py-1 bg-[#08157D]/80 backdrop-blur-sm border border-[#00f3ff]/30 text-[#00f3ff] text-xs font-bold rounded'>
                    {ebook.category}
                  </span>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-lg font-bold text-white mb-2 group-hover:text-[#00f3ff] transition-colors line-clamp-2'>
                  {ebook.title}
                </h3>
                <p className='text-gray-400 text-sm mb-4 flex items-center gap-2'>
                  <User className='w-3 h-3' />
                  {ebook.author}
                </p>
                <div className='flex items-center justify-between text-sm text-gray-500 mb-4'>
                  <span className='flex items-center gap-1'>
                    <Clock className='w-3 h-3' />
                    {ebook.pages} pages
                  </span>
                  <span className='flex items-center gap-1'>
                    <Download className='w-3 h-3' />
                    {ebook.downloads} downloads
                  </span>
                </div>
                <button className='w-full py-3 bg-gradient-to-r from-[#08157D] to-[#00f3ff] text-white font-bold rounded hover:from-[#00f3ff] hover:to-[#08157D] transition-all duration-300 flex items-center justify-center gap-2'>
                  Download Now <Download className='w-4 h-4' />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='bg-gradient-to-br from-[#08157D] to-[#0a0a0a] p-12 rounded-2xl border border-[#08157D]/30'
        >
          <div className='text-center max-w-3xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>Have an eBook to Share?</h2>
            <p className='text-gray-300 mb-8 text-lg'>
              Contribute to the community by sharing your knowledge. We accept eBook submissions 
              from all members. Review our guidelines and submit your work today.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <button className='px-8 py-4 bg-[#00f3ff] text-[#08157D] font-bold rounded hover:bg-white transition-colors'>
                Submit eBook
              </button>
              <button className='px-8 py-4 bg-black border border-[#00f3ff]/30 text-[#00f3ff] font-bold rounded hover:bg-[#00f3ff]/10 transition-colors'>
                Review Guidelines
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EbooksPage;

