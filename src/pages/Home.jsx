import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Award, Smile, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-cyan-900 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?q=80&w=1920&auto=format&fit=crop" 
            alt="Swimming Pool Singapore" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-28 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="max-w-2xl text-white">
            <div className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 animate-bounce">
              👋 HELLO FROM HARRY THE APE CHAMPS MASCOT!
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Confidence in Water,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Fun for Life!</span>
            </h1>
            <p className="text-lg md:text-xl text-cyan-100 mb-8 leading-relaxed">
              Singapore&apos;s most trusted swim school. We teach safe swimming techniques in a fun, family-oriented environment near you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={createPageUrl('Contact')}>
                <Button className="w-full sm:w-auto bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-bold text-lg py-6 px-8 rounded-full shadow-lg">
                  Book a Trial Class
                </Button>
              </Link>
              <Link to={createPageUrl('Programmes')}>
                <Button variant="outline" className="w-full sm:w-auto border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-900/50 font-bold text-lg py-6 px-8 rounded-full">
                  View Programmes
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Hero Mascot Image */}
          <div className="hidden md:block w-1/3 animate-in slide-in-from-right duration-1000">
             <img 
               src="/logo.png" 
               alt="Harry the Ape CHamps Mascot" 
               className="w-full h-auto drop-shadow-2xl filter brightness-110 hover:scale-105 transition-transform duration-300"
             />
          </div>
        </div>
        
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
           <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-sky-50"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Choose Ape Champs Swim?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We follow strict MOE-aligned swimming standards while ensuring every lesson is filled with laughter and encouragement.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: "Safety First", 
                desc: "ASCA/AustSwim certified coaches who prioritize water safety above all else. Small class ratios." 
              },
              { 
                icon: Award, 
                title: "MOE Aligned", 
                desc: "Our curriculum prepares kids for SwimSafer awards and builds correct stroke foundations." 
              },
              { 
                icon: Smile, 
                title: "Fun Learning", 
                desc: "Harry the Hairy Ape believes learning happens best when kids are happy and confident!" 
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-slate-100">
                <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600 mb-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-100 rounded-full z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1000&auto=format&fit=crop" 
                  alt="Singapore Public Pool" 
                  className="relative z-10 rounded-3xl shadow-xl w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-6 right-6 z-20 bg-white py-3 px-5 rounded-xl shadow-lg flex items-center gap-2">
                  <MapPin className="text-orange-500" size={20} />
                  <span className="font-bold text-slate-800">Private Pools</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Swimming Lessons in Your Neighborhood</h2>
              <p className="text-lg text-slate-600 mb-6">
                
              </p>No need to travel far! Ape Champs Swim brings professional coaching to you at private condominium pools across Singapore.
              <ul className="space-y-4 mb-8">
                {['Location to your convenience', 'Flexible timing for busy parents', 'Rain-proof sheltered pools available at select venues'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <ArrowRight size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to={createPageUrl('Contact')}>
                 <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8">
                   Check Locations
                 </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to Dive In?</h2>
          <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of happy Singaporean families. Book a trial class today and let your child discover the joy of swimming.
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button className="bg-white hover:bg-slate-100 font-bold text-lg py-6 px-10 rounded-full shadow-xl">
              <span className="text-cyan-600">Get Started Now</span>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
