import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from "@/components/ui/button";
import { User, Star, Anchor, Wind, Zap, Trophy } from 'lucide-react';

export default function Roadmap() {
  const stages = [
    {
      id: 1,
      title: "Water Confidence",
      icon: User,
      color: "bg-orange-400",
      skills: ["Face submersion", "Bubbles blowing", "Assisted floating", "Pool safety rules"],
      desc: "Getting comfortable in the water with Harry the Ape!"
    },
    {
      id: 2,
      title: "Kicking & Floating",
      icon: Anchor,
      color: "bg-yellow-400",
      skills: ["Unassisted streamline float", "Flutter kicks", "Water entry/exit", "Breath control"],
      desc: "Learning to balance and move independently."
    },
    {
      id: 3,
      title: "Freestyle Basics",
      icon: Wind,
      color: "bg-cyan-400",
      skills: ["Freestyle arm action", "Side breathing", "Backstroke kicking", "Treading water (1 min)"],
      desc: "Coordinating arms and legs for the first stroke."
    },
    {
      id: 4,
      title: "Intermediate Strokes",
      icon: Star,
      color: "bg-blue-500",
      skills: ["Freestyle (50m)", "Breaststroke kick", "Backstroke complete", "Surface dive"],
      desc: "Building distance and introducing new styles."
    },
    {
      id: 5,
      title: "Endurance & Skills",
      icon: Zap,
      color: "bg-indigo-500",
      skills: ["Breaststroke complete", "Survival backstroke", "Butterfly kick", "Treading water (5 mins)"],
      desc: "Deep water skills and stamina building."
    },
    {
      id: 6,
      title: "Pre-Competitive",
      icon: Trophy,
      color: "bg-purple-500",
      skills: ["All 4 strokes proficient", "Starts and turns", "Medley swimming", "Sprint training"],
      desc: "Ready for the squad and racing!"
    }
  ];

  return (
    <div className="min-h-screen bg-sky-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-800 mb-4">The HairyApe Learning Roadmap</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our progressive curriculum ensures your child masters each skill before moving to the next level.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 hidden md:block rounded-full"></div>

          <div className="space-y-12">
            {stages.map((stage, index) => (
              <div key={stage.id} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 relative`}>
                
                {/* Icon Center Marker */}
                <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-white shadow-lg ${stage.color} hidden md:flex items-center justify-center text-white z-10`}>
                  <span className="font-bold">{stage.id}</span>
                </div>

                {/* Content Box */}
                <div className="w-full md:w-1/2 p-4">
                  <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow border-l-8 border-slate-100" style={{ borderColor: stage.color.replace('bg-', 'var(--tw-colors-') }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-full ${stage.color} flex items-center justify-center text-white md:hidden`}>
                        <span className="font-bold">{stage.id}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800">{stage.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm mb-4 italic">"{stage.desc}"</p>
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Key Milestones:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {stage.skills.map((skill, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-sm text-slate-700">
                            <div className={`w-1.5 h-1.5 rounded-full ${stage.color}`}></div>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Empty Space for the other side */}
                <div className="w-full md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <Link to={createPageUrl('Rates')}>
            <Button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-bold py-6 px-10 rounded-full text-lg shadow-lg">
              Check Rates & Packages
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}