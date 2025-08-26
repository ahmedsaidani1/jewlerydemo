import React, { useEffect, useState } from 'react';
import { Heart, Award, Users, Sparkles } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Handcrafted with Love',
      description: 'Every piece is carefully crafted by skilled artisans who pour their passion into creating beautiful jewelry.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We use only the finest materials and maintain the highest standards in our craftsmanship.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We believe in building lasting relationships with our customers.'
    },
    {
      icon: Sparkles,
      title: 'Unique Designs',
      description: 'Our designs are inspired by modern trends while maintaining timeless elegance and sophistication.'
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Story
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Welcome to Bella Jewelry, where passion meets craftsmanship. We believe that jewelry is more than just an accessory – it's a way to express your unique personality and celebrate life's special moments.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Crafting Beauty Since 2018
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our journey began with a simple dream: to create beautiful, affordable jewelry that makes every woman feel special. What started as a small workshop has grown into a beloved brand trusted by thousands of customers worldwide.
                </p>
                <p>
                  We believe that everyone deserves to own beautiful jewelry, regardless of their budget. That's why we focus on creating high-quality pieces that are both elegant and accessible, using sustainable practices and ethically sourced materials.
                </p>
                <p>
                  Today, our team of skilled artisans continues to handcraft each piece with the same attention to detail and passion that inspired our founding. Every bracelet and necklace tells a story of dedication, creativity, and love.
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.pexels.com/photos/1454180/pexels-photo-1454180.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Jewelry crafting process"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our values guide everything we do, from design to customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 text-center group animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-500 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate people behind every beautiful piece
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder & Head Designer',
                image: 'https://images.pexels.com/photos/1454181/pexels-photo-1454181.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'Sarah founded Bella Jewelry with a vision to make beautiful jewelry accessible to everyone.'
              },
              {
                name: 'Maria Rodriguez',
                role: 'Master Craftsperson',
                image: 'https://images.pexels.com/photos/1454182/pexels-photo-1454182.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'With over 15 years of experience, Maria brings exceptional skill to every handcrafted piece.'
              },
              {
                name: 'Emma Chen',
                role: 'Quality Specialist',
                image: 'https://images.pexels.com/photos/1454183/pexels-photo-1454183.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'Emma ensures that every piece meets our high standards before reaching our customers.'
              }
            ].map((member, index) => (
              <div
                key={member.name}
                className={`bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-500 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-500 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;