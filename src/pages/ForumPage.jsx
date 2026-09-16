import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, User, Clock, Heart, Share2, Search, ChevronRight, FileText } from 'lucide-react';

const ForumPage = () => {
  const threads = [
    {
      id: 1,
      title: 'Tips for passing OSCP exam?',
      author: 'John Doe',
      authorRole: 'Expert',
      replies: 24,
      views: 1567,
      lastActivity: '2 hours ago',
      category: 'Certifications',
    },
    {
      id: 2,
      title: 'Best resources for learning Cloud Security?',
      author: 'Jane Smith',
      authorRole: 'Member',
      replies: 18,
      views: 892,
      lastActivity: '5 hours ago',
      category: 'Learning Resources',
    },
    {
      id: 3,
      title: 'Incident response best practices',
      author: 'Alice Johnson',
      authorRole: 'Moderator',
      replies: 42,
      views: 2341,
      lastActivity: '1 day ago',
      category: 'Incident Response',
    },
    {
      id: 4,
      title: 'Network security monitoring tools',
      author: 'Bob Wilson',
      authorRole: 'Member',
      replies: 15,
      views: 678,
      lastActivity: '2 days ago',
      category: 'Tools & Software',
    },
  ];

  const categories = ['All Discussions', 'Announcements', 'Introductions', 'Learning Resources', 'Certifications', 'Tools & Software', 'Incident Response', 'Job Board'];

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
            <MessageSquare className='w-4 h-4' />
            <span className='text-sm font-mono'>COMMUNITY FORUM</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight'>
            Community <span className='text-[#00f3ff]'>Forum</span>
          </h1>
          <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
            Discuss cybersecurity topics, share knowledge, and connect with the community
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className='col-span-1 lg:col-span-1 space-y-6'
          >
            <div className='bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl'>
              <div className='relative mb-4'>
                <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500' />
                <input
                  type='text'
                  placeholder='Search forums...'
                  className='w-full pl-12 pr-4 py-3 bg-black border border-gray-800 rounded-lg focus:border-[#00f3ff]/50 focus:ring-1 focus:ring-[#00f3ff]/50 text-white transition-all outline-none'
                />
              </div>
              <h3 className='text-lg font-bold text-white mb-4'>Categories</h3>
              <div className='space-y-2'>
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between p-3 rounded-lg hover:bg-[#00f3ff]/10 transition-colors cursor-pointer group'
                  >
                    <span className='text-gray-300 group-hover:text-[#00f3ff] transition-colors'>
                      {category}
                    </span>
                    {index > 0 && (
                      <span className='text-sm text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full'>
                        {Math.floor(Math.random() * 50)}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className='bg-gradient-to-br from-[#08157D] to-[#0a0a0a] p-6 rounded-xl border border-[#08157D]/30 text-center'>
              <h3 className='text-xl font-bold text-white mb-2'>Start a Discussion</h3>
              <p className='text-gray-400 text-sm mb-4'>Have a question or topic to share?</p>
              <button className='w-full py-3 bg-[#00f3ff] text-[#08157D] font-bold rounded hover:bg-white transition-colors'>
                Create Thread
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className='col-span-1 lg:col-span-3 space-y-6'
          >
            {threads.map((thread, index) => (
              <motion.div
                key={thread.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className='bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-[#00f3ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] group'
              >
                <div className='flex items-center gap-2 mb-4'>
                  <span className='px-3 py-1 rounded-full text-xs font-bold bg-[#08157D]/20 text-[#00f3ff]'>
                    {thread.category}
                  </span>
                  {thread.authorRole === 'Expert' && (
                    <span className='px-3 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-400'>
                      Expert
                    </span>
                  )}
                  {thread.authorRole === 'Moderator' && (
                    <span className='px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400'>
                      Moderator
                    </span>
                  )}
                </div>
                <h3 className='text-xl font-bold text-white mb-3 group-hover:text-[#00f3ff] transition-colors'>
                  {thread.title}
                </h3>
                <div className='flex items-center justify-between text-sm text-gray-400'>
                  <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2'>
                      <User className='w-4 h-4 text-[#00f3ff]' />
                      <span>{thread.author}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Clock className='w-4 h-4 text-[#00f3ff]' />
                      <span>{thread.lastActivity}</span>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-1.5'>
                      <MessageSquare className='w-4 h-4 text-[#00f3ff]' />
                      <span>{thread.replies} replies</span>
                    </div>
                    <div className='flex items-center gap-1.5'>
                      <Share2 className='w-4 h-4 text-[#00f3ff]' />
                      <span>{thread.views} views</span>
                    </div>
                  </div>
                </div>
                <button className='mt-4 flex items-center gap-2 text-[#00f3ff] font-medium hover:gap-3 transition-all'>
                  Read Thread <ChevronRight className='w-4 h-4' />
                </button>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='bg-gradient-to-br from-[#08157D] to-[#0a0a0a] p-8 rounded-2xl border border-[#08157D]/30 text-center'
            >
              <h2 className='text-2xl font-bold text-white mb-4'>Join the Discussion</h2>
              <p className='text-gray-300 mb-6'>Participate in conversations, share your knowledge, and learn from others.</p>
              <button className='px-8 py-3 bg-[#00f3ff] text-[#08157D] font-bold rounded hover:bg-white transition-colors'>
                Log In to Participate
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ForumPage;

