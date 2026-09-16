import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Play, FileText, ChevronRight, Search } from 'lucide-react';

const WebinarsPage = () => {
  const webinars = [
    {
      id: 1,
      title: 'Introduction to Ethical Hacking',
      instructor: 'John Doe',
      date: '2026-09-20',
      time: '14:00 - 16:00',
      duration: '2 hours',
      attendees: 156,
      level: 'Beginner',
      type: 'Live',
    },
    {
      id: 2,
      title: 'Advanced Network Security',
      instructor: 'Jane Smith',
      date: '2026-09-22',
      time: '10:00 - 12:00',
      duration: '2 hours',
      attendees: 89,
      level: 'Intermediate',
      type: 'Live',
    },
    {
      id: 3,
      title: 'Web Application Security Best Practices',
      instructor: 'Alice Johnson',
      date: '2026-09-25',
      time: '15:00 - 17:00',
      duration: '2 hours',
      attendees: 203,
      level: 'Advanced',
      type: 'Live',
    },
    {
      id: 4,
      title: 'Introduction to Cybersecurity',
      instructor: 'Bob Wilson',
      date: '2026-09-18',
      time: '13:00 - 15:00',
      duration: '2 hours',
      attendees: 312,
      level: 'Beginner',
      type: 'Recorded',
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
            <Calendar className='w-4 h-4' />
            <span className='text-sm font-mono'>UPCOMING EVENTS</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight'>
            Cybersecurity <span className='text-[#00f3ff]'>Webinars</span>
          </h1>
          <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
            Live and recorded cybersecurity webinars from industry experts
          </p>
        </motion.div>

        <div className='mb-10'>
          <div className='relative max-w-2xl mx-auto'>
            <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500' />
            <input
              type='text'
              placeholder='Search webinars...'
              className='w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg focus:border-[#00f3ff]/50 focus:ring-1 focus:ring-[#00f3ff]/50 text-white transition-all outline-none'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-20'>
          {webinars.map((webinar, index) => (
            <motion.div
              key={webinar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-[#00f3ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] group'
            >
              <div className='flex items-center justify-between mb-4'>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    webinar.type === 'Live'
                      ? 'bg-[#00f3ff]/20 text-[#00f3ff]'
                      : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  {webinar.type}
                </span>
                <span
                  className='px-3 py-1 rounded-full text-xs font-bold bg-black/30 text-gray-500'
                >
                  {webinar.level}
                </span>
              </div>
              <h3 className='text-xl font-bold text-white mb-3 group-hover:text-[#00f3ff] transition-colors'>
                {webinar.title}
              </h3>
              <div className='space-y-2 mb-6'>
                <div className='flex items-center gap-3 text-sm text-gray-400'>
                  <User className='w-4 h-4 text-[#00f3ff]' />
                  <span>{webinar.instructor}</span>
                </div>
                <div className='flex items-center gap-3 text-sm text-gray-400'>
                  <Calendar className='w-4 h-4 text-[#00f3ff]' />
                  <span>{webinar.date}</span>
                </div>
                <div className='flex items-center gap-3 text-sm text-gray-400'>
                  <Clock className='w-4 h-4 text-[#00f3ff]' />
                  <span>{webinar.time} ({webinar.duration})</span>
                </div>
                <div className='flex items-center gap-3 text-sm text-gray-400'>
                  <Play className='w-4 h-4 text-[#00f3ff]' />
                  <span>{webinar.attendees} attendees</span>
                </div>
              </div>
              <button className='w-full py-3 bg-gradient-to-r from-[#08157D] to-[#00f3ff] text-white font-bold rounded hover:from-[#00f3ff] hover:to-[#08157D] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] flex items-center justify-center gap-2'>
                Register Now <ChevronRight className='w-4 h-4' />
              </button>
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
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>Want to Host a Webinar?</h2>
            <p className='text-gray-300 mb-8 text-lg'>
              Share your expertise with the CYSEC community. We welcome industry professionals 
              and security experts to conduct webinars and workshops.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <button className='px-8 py-4 bg-[#00f3ff] text-[#08157D] font-bold rounded hover:bg-white transition-colors'>
                Submit Proposal
              </button>
              <button className='px-8 py-4 bg-black border border-[#00f3ff]/30 text-[#00f3ff] font-bold rounded hover:bg-[#00f3ff]/10 transition-colors'>
                View Guidelines
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebinarsPage;

