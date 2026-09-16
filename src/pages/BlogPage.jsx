import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Calendar, MessageSquare, BookOpen, User, Lock, ChevronRight, Download, Clock, TrendingUp } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Introduction to Penetration Testing',
      excerpt: 'Learn the fundamentals of ethical hacking and security testing in this comprehensive guide.',
      author: 'John Doe',
      date: '2026-09-10',
      readTime: '8 min read',
      category: 'Penetration Testing',
      image: 'https://placehold.co/600x400/08157D/00f3ff?text=Penetration+Testing',
    },
    {
      id: 2,
      title: 'Cybersecurity Threats in 2026',
      excerpt: 'Stay ahead of the curve with the latest threat landscape analysis and mitigation strategies.',
      author: 'Jane Smith',
      date: '2026-09-08',
      readTime: '6 min read',
      category: 'Threat Analysis',
      image: 'https://placehold.co/600x400/08157D/00f3ff?text=Threat+Analysis',
    },
    {
      id: 3,
      title: 'Web Application Security Best Practices',
      excerpt: 'Essential security measures every developer should know to protect their applications.',
      author: 'Alice Johnson',
      date: '2026-09-05',
      readTime: '10 min read',
      category: 'Web Security',
      image: 'https://placehold.co/600x400/08157D/00f3ff?text=Web+Security',
    },
  ];

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
            <FileText className='w-4 h-4' />
            <span className='text-sm font-mono'>LATEST ARTICLES</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight'>
            Cybersecurity <span className='text-[#00f3ff]'>Blog</span>
          </h1>
          <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
            Expert insights, tutorials, and the latest news from the cybersecurity community
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'>
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-[#00f3ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)]'
            >
              <div className='relative overflow-hidden h-48'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10'></div>
                <img
                  src={post.image}
                  alt={post.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute top-4 left-4 z-20'>
                  <span className='px-3 py-1 bg-[#08157D]/80 backdrop-blur-sm border border-[#00f3ff]/30 text-[#00f3ff] text-xs font-bold rounded-full'>
                    {post.category}
                  </span>
                </div>
              </div>
              <div className='p-6'>
                <div className='flex items-center gap-4 text-sm text-gray-500 mb-4'>
                  <div className='flex items-center gap-1'>
                    <User className='w-3 h-3' />
                    {post.author}
                  </div>
                  <div className='flex items-center gap-1'>
                    <Clock className='w-3 h-3' />
                    {post.readTime}
                  </div>
                </div>
                <h3 className='text-xl font-bold text-white mb-3 group-hover:text-[#00f3ff] transition-colors'>
                  {post.title}
                </h3>
                <p className='text-gray-400 mb-6 line-clamp-2'>{post.excerpt}</p>
                <button className='flex items-center gap-2 text-[#00f3ff] font-medium hover:gap-3 transition-all'>
                  Read More <ChevronRight className='w-4 h-4' />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='bg-gradient-to-br from-[#08157D] to-[#0a0a0a] p-12 rounded-2xl border border-[#08157D]/30 relative overflow-hidden'
        >
          <div className='absolute top-0 right-0 w-64 h-64 bg-[#00f3ff]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2'></div>
          <div className='relative z-10 text-center max-w-3xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>Want to Contribute?</h2>
            <p className='text-gray-300 mb-8 text-lg'>
              Share your knowledge with the community. Submit your articles, tutorials, and security research.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <button className='px-8 py-4 bg-[#00f3ff] text-[#08157D] font-bold rounded hover:bg-white transition-colors flex items-center gap-2'>
                <FileText className='w-5 h-5' />
                Submit Article
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

export default BlogPage;

