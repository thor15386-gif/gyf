import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Sparkles, Zap, Users, Shield, Globe, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "AI Fashion Analysis",
      description: "Advanced computer vision technology that analyzes body measurements, proportions, and skin undertones with 98.6% accuracy.",
      features: [
        "Body type detection and analysis",
        "Skin tone and undertone identification", 
        "Style preference learning algorithms",
        "Real-time outfit compatibility scoring"
      ],
      pricing: "Starting at $0.10 per analysis"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Virtual Personal Styling",
      description: "AI-powered personal styling service that creates complete outfit recommendations based on individual preferences and occasions.",
      features: [
        "Personalized outfit curation",
        "Occasion-based styling recommendations",
        "Seasonal wardrobe planning",
        "Style evolution tracking"
      ],
      pricing: "Custom enterprise pricing"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Universal Fashion API",
      description: "Comprehensive REST API with SDK support for seamless integration into your fashion platform or e-commerce store.",
      features: [
        "RESTful API with 99.9% uptime SLA",
        "SDK support for JavaScript, Swift, Kotlin",
        "Response times under 150ms",
        "Comprehensive documentation"
      ],
      pricing: "Pay-per-use model available"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Fashion Analytics Dashboard",
      description: "Deep insights into customer preferences, trending styles, and recommendation performance to optimize your fashion business.",
      features: [
        "Customer preference analytics",
        "Style trend forecasting",
        "Recommendation performance metrics",
        "Custom reporting and insights"
      ],
      pricing: "Included with enterprise plans"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Enterprise Security & Compliance",
      description: "Enterprise-grade security with GDPR compliance, data encryption, and privacy-first architecture for fashion brands.",
      features: [
        "GDPR and privacy compliance",
        "End-to-end data encryption",
        "SOC 2 Type II certification",
        "Custom data retention policies"
      ],
      pricing: "Contact for enterprise pricing"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Real-time Style Recommendations",
      description: "Lightning-fast outfit suggestions that adapt to user behavior, weather, trends, and personal style evolution.",
      features: [
        "Real-time recommendation engine",
        "Weather-aware styling suggestions",
        "Trend-responsive algorithms",
        "Behavioral learning integration"
      ],
      pricing: "Volume-based pricing tiers"
    }
  ];

  const industries = [
    {
      name: "E-commerce Fashion",
      description: "Enhance online shopping with personalized recommendations",
      benefits: ["44% increase in customer satisfaction", "32% boost in conversion rates", "Reduced return rates"]
    },
    {
      name: "Fashion Retail",
      description: "In-store styling assistance and inventory optimization",
      benefits: ["Improved customer experience", "Better inventory turnover", "Enhanced brand loyalty"]
    },
    {
      name: "Fashion Apps",
      description: "Power your mobile fashion app with AI intelligence",
      benefits: ["Increased user engagement", "Higher retention rates", "Premium feature differentiation"]
    },
    {
      name: "Personal Styling",
      description: "Scale your styling business with AI assistance",
      benefits: ["Serve more clients efficiently", "Consistent styling quality", "Data-driven insights"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-coral-400 to-coral-200/20 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-manrope font-medium">Back to Home</span>
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-manrope font-bold text-black mb-6">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl font-manrope text-black max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI-powered fashion intelligence solutions designed to transform how your customers discover and experience fashion.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-coral-400 to-coral-200/20 p-8 rounded-xl hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-black mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-manrope font-bold text-black mb-4">
                  {service.title}
                </h3>
                
                <p className="text-black font-manrope mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-black">
                      <span className="mr-3 mt-1">✓</span>
                      <span className="font-manrope text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-black/20 pt-4">
                  <p className="font-manrope font-semibold text-black text-sm">
                    {service.pricing}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-manrope font-bold text-black mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl font-manrope text-gray-700 max-w-3xl mx-auto">
              Our AI fashion intelligence adapts to various business models and industry needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-manrope font-bold text-black mb-4">
                  {industry.name}
                </h3>
                <p className="text-gray-700 font-manrope mb-6 leading-relaxed">
                  {industry.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-manrope font-semibold text-black mb-3">Key Benefits:</h4>
                  {industry.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-gray-700">
                      <span className="mr-3 text-coral-400">●</span>
                      <span className="font-manrope text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Startup */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-manrope font-bold text-black mb-8">
              About GetYourFit
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-manrope font-bold text-black">
                Revolutionizing Fashion with AI
              </h3>
              <p className="text-lg font-manrope text-gray-700 leading-relaxed">
                Founded in 2024, GetYourFit emerged from a simple observation: fashion technology wasn't serving everyone equally. Our team of AI engineers, fashion experts, and designers came together to create the most inclusive and accurate fashion recommendation system ever built.
              </p>
              <p className="text-lg font-manrope text-gray-700 leading-relaxed">
                We've processed over 2 million outfit combinations, analyzed thousands of body types and skin tones, and partnered with leading fashion brands to create technology that truly understands individual style needs.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-manrope font-bold text-coral-400 mb-2">98.6%</div>
                  <div className="text-sm font-manrope text-gray-600">Recommendation Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-manrope font-bold text-coral-400 mb-2">2M+</div>
                  <div className="text-sm font-manrope text-gray-600">Outfit Combinations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-manrope font-bold text-coral-400 mb-2">150ms</div>
                  <div className="text-sm font-manrope text-gray-600">Average Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-manrope font-bold text-coral-400 mb-2">24/7</div>
                  <div className="text-sm font-manrope text-gray-600">Enterprise Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-coral-400 to-coral-200 p-8 rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                  alt="Fashion technology workspace"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-manrope font-bold text-black mb-6">
              Our Technology
            </h2>
            <p className="text-xl font-manrope text-gray-700 max-w-3xl mx-auto">
              Built on cutting-edge AI and machine learning technologies to deliver unparalleled fashion intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-coral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-manrope font-bold text-black mb-3">Deep Learning</h3>
              <p className="text-gray-700 font-manrope text-sm">
                Neural networks trained on millions of fashion images and style combinations for accurate recommendations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-coral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-xl font-manrope font-bold text-black mb-3">Computer Vision</h3>
              <p className="text-gray-700 font-manrope text-sm">
                Advanced image analysis for body type detection, skin tone analysis, and garment recognition.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-coral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-manrope font-bold text-black mb-3">Real-time Processing</h3>
              <p className="text-gray-700 font-manrope text-sm">
                Lightning-fast processing with cloud infrastructure optimized for fashion recommendation workloads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-coral-400 to-coral-200/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-manrope font-bold text-black mb-6">
            Ready to Transform Your Fashion Business?
          </h2>
          
          <p className="text-xl lg:text-2xl font-manrope text-black mb-12 max-w-4xl mx-auto leading-relaxed">
            Join leading fashion brands using our AI-powered recommendation engine. Start your integration today and see the difference personalized fashion intelligence can make.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-3xl font-lora font-bold text-xl hover:bg-gray-800 transition-colors duration-200 shadow-lg">
              Get API Access
            </button>
            <button className="bg-gray-600 text-white px-8 py-4 rounded-3xl font-lora font-bold text-xl hover:bg-gray-700 transition-colors duration-200 shadow-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}