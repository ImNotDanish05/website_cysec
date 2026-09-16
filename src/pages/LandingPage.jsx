import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Code, Users, FileText, Calendar, MessageSquare, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const features = [
    {
      icon: FileText,
      title: 'Learning Roadmaps',
      description: 'Curated cybersecurity learning paths from beginner to expert level',
      color: '#00f3ff',
    },
    {
      icon: FileText,
      title: 'Ebook Library',
      description: 'Access hundreds of cybersecurity ebooks and technical documentation',
      color: '#7c3aed',
    },
    {
      icon: Calendar,
      title: 'Webinars & Talks',
      description: 'Watch expert-led webinars and recorded conference talks',
      color: '#10b981',
    },
    {
      icon: MessageSquare,
      title: 'Community Forum',
      description: 'Ask questions, share knowledge, and collaborate with peers',
      color: '#f59e0b',
    },
  ];

  return (
    <div className='min-h-screen bg-black'>
      <div className='relative pt-32 pb-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-20'
          >
            <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight'>
              Welcome to <span className='text-[#00f3ff]'>CYSEC</span>
            </h1>
            <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
              Your premier destination for cybersecurity education, community, and growth
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-xl hover:border-[#00f3ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] group'
              >
                <div
                  className='w-14 h-14 rounded-lg flex items-center justify-center mb-6 bg-gradient-to-br from-[#08157D]/20 to-[#00f3ff]/10 group-hover:scale-110 transition-transform duration-300'
                  style={{ border: `1px solid ${feature.color}20` }}
                >
                  <feature.icon className='w-7 h-7' style={{ color: feature.color }} />
                </div>
                <h3 className='text-xl font-bold text-white mb-3 group-hover:text-[#00f3ff] transition-colors'>
                  {feature.title}
                </h3>
                <p className='text-gray-400 leading-relaxed'>{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='bg-gradient-to-br from-[#08157D] to-[#0a0a0a] p-8 rounded-xl border border-[#08157D]/30'
            >
              <h3 className='text-2xl font-bold text-white mb-4'>Why Join CYSEC?</h3>
              <ul className='space-y-3'>
                {[
                  'Access to exclusive cybersecurity resources',
                  'Mentorship from industry professionals',
                  'Hands-on labs and challenges',
                  'Networking opportunities',
                  'Regular webinars and workshops',
                ].map((item, index) => (
                  <li key={index} className='flex items-center gap-3 text-gray-300'>
                    <Shield className='w-5 h-5 text-[#00f3ff]' />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to='/contact'
                className='mt-6 inline-block px-6 py-3 bg-white text-[#08157D] font-bold rounded hover:bg-gray-200 transition-colors'
              >
                Learn More
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='col-span-1 md:col-span-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-xl'
            >
              <h3 className='text-2xl font-bold text-white mb-6'>Community Stats</h3>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {[
                  { label: 'Active Members', value: '500+', icon: Users },
                  { label: 'Resources', value: '50+', icon: FileText },
                  { label: 'Webinars', value: '100+', icon: Calendar },
                  { label: 'Forum Posts', value: '1K+', icon: MessageSquare },
                ].map((stat, index) => (
                  <div key={index} className='text-center p-6 bg-black/30 rounded-lg border border-gray-800'>
                    <stat.icon className='w-8 h-8 text-[#00f3ff] mx-auto mb-2' />
                    <div className='text-3xl font-bold text-white mb-1'>{stat.value}</div>
                    <div className='text-sm text-gray-500'>{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center'
          >
            <h2 className='text-4xl font-bold text-white mb-8'>Ready to Start Your Journey?</h2>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Link
                to='/roadmap'
                className='px-8 py-4 bg-gradient-to-r from-[#08157D] to-[#00f3ff] text-white font-mono font-bold rounded hover:from-[#00f3ff] hover:to-[#08157D] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]'
              >
                Explore Roadmaps
              </Link>
              <Link
                to='/contact'
                className='px-8 py-4 bg-black border border-[#00f3ff]/30 text-[#00f3ff] font-mono font-bold rounded hover:bg-[#00f3ff]/10 transition-all duration-300'
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

