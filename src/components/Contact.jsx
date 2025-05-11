import { useState } from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-white drop-shadow-lg">Contact Information</h2>
        <div className="bg-[#1B1B2F]/50 backdrop-blur-sm rounded-lg shadow-lg p-8 flex flex-col items-center space-y-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#7F00FF]/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#00E0FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="text-[#EDEDED] font-semibold">Email</h4>
              <a href="mailto:mohsanalimohsan649@gmail.com" className="text-[#00E0FF] hover:text-[#7F00FF] transition-colors duration-300">
                mohsanalimohsan649@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#7F00FF]/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#00E0FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l3.6 7.59-1.35 2.44A1 1 0 008 17h9a1 1 0 00.92-.62l3-7A1 1 0 0020 8H7.42l-.94-2H3" />
              </svg>
            </div>
            <div>
              <h4 className="text-[#EDEDED] font-semibold">Phone</h4>
              <a href="tel:+923077367050" className="text-[#00E0FF] hover:text-[#7F00FF] transition-colors duration-300">
                +92 307 7367050
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 