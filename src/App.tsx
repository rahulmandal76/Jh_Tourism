import React, { useState } from 'react';
import { MapPin, Calendar, Users, MessageCircle, AlertTriangle, Search, Menu, X, Phone, Shield, Heart, Star, Camera, Globe } from 'lucide-react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog';
import { ImageWithFallback } from './components/figma/ImageWithFallback';



const destinations = [
  {
    id: 1,
    name: "Netarhat",
    location: "Netarhat, Jharkhand",
    image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/08/9ffc869f0419cc62a4e18896dc9b388b_1000x1000.jpg",
    rating: 4.8,
    description: "Queen of Chotanagpur, known for mesmerizing sunsets and cool climate",
    category: "Hill Station",
    highlights: ["Sunrise/Sunset views", "Cool climate", "Dense forests"]
  },
  {
    id: 2,
    name: "Betla National Park",
    location: "Palamau, Jharkhand",
    image: "https://live.staticflickr.com/884/40448564665_bb529f9784_b.jpg",
    rating: 4.6,
    description: "Tiger reserve with rich biodiversity and ancient Palamau Fort",
    category: "Wildlife",
    highlights: ["Tiger safari", "Rich wildlife", "Palamau Fort"]
  },
  {
    id: 3,
    name: "Hundru Falls",
    location: "Ranchi, Jharkhand",
    image: "https://windows10spotlight.com/wp-content/uploads/2023/10/30d0282629f494794b3f9588c00a632e-1024x576.jpg",
    rating: 4.5,
    description: "Spectacular 320-foot waterfall surrounded by dense forests",
    category: "Waterfall",
    highlights: ["320ft high fall", "Monsoon beauty", "Photography spot"]
  },
  {
    id: 4,
    name: "Deoghar",
    location: "Deoghar, Jharkhand",
    image: "https://www.shutterstock.com/shutterstock/photos/2333777199/display_1500/stock-photo-deoghar-jharkhand-india-march-th-baba-dham-temple-dedicated-to-lord-shiva-2333777199.jpg",
    rating: 4.7,
    description: "Sacred city with Baidyanath Temple, one of the 12 Jyotirlingas",
    category: "Religious",
    highlights: ["Baidyanath Temple", "Spiritual significance", "Cultural heritage"]
  }
];

const events = [
  {
    id: 1,
    title: "Sarhul Festival",
    date: "March 15-17, 2025",
    location: "Ranchi",
    category: "Cultural",
    description: "Celebrate the spring festival of tribal communities"
  },
  {
    id: 2,
    title: "Karam Festival",
    date: "August 10-12, 2025",
    location: "Various locations",
    category: "Traditional",
    description: "Worship of Karam tree with traditional dances"
  },
  {
    id: 3,
    title: "Wildlife Photography Workshop",
    date: "November 5-7, 2025",
    location: "Betla National Park",
    category: "Workshop",
    description: "Learn wildlife photography in natural habitat"
  }
];

const culturalItems = [
  {
    name: "Sohrai Art",
    description: "Traditional tribal wall art with natural pigments",
    price: "₹500 - ₹5,000",
    image: "https://images.unsplash.com/photo-1580467469359-91a73a6e92ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHRyaWJhbCUyMGFydCUyMGhhbmRpY3JhZnRzfGVufDF8fHx8MTc1Nzc5MjUzOXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Bamboo Crafts",
    description: "Handwoven baskets and decorative items",
    price: "₹200 - ₹2,000",
    image: "https://images.unsplash.com/photo-1580467469359-91a73a6e92ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHRyaWJhbCUyMGFydCUyMGhhbmRpY3JhZnRzfGVufDF8fHx8MTc1Nzc5MjUzOXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Traditional Thali",
    description: "Local cuisine with dhuska, ghugni, and tribal vegetables",
    price: "₹150 - ₹400",
    image: "https://images.unsplash.com/photo-1756741987051-a6a38f28838b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMEluZGlhbiUyMGZvb2QlMjB0aGFsaXxlbnwxfHx8fDE3NTc3OTI1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];


interface HomePageProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const HomePage = ({ setCurrentPage }: HomePageProps) => {
 
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://pbs.twimg.com/media/ET77GGKVAAEZJxu.jpg"
            alt="Jharkhand landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-amber-900/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-200 to-amber-200 bg-clip-text text-transparent">
            Welcome To Jharkhand
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-emerald-100">
            Experience the untouched beauty of nature, rich tribal culture, and eco-friendly adventures
          </p>
          
          {/* Search Bar */}
          <div className="flex max-w-md mx-auto mb-8">
            <Input
              placeholder="Search destinations, events, experiences..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-r-none bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-white/70"
            />
            <Button className="rounded-l-none bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700">
              <Search className="w-4 h-4" />
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => setCurrentPage('destinations')}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Explore Destinations
            </Button>
            <Button 
              onClick={() => setCurrentPage('virtual-tours')}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
            >
              <Camera className="w-4 h-4 mr-2" />
              Virtual Tours
            </Button>
            <Button 
              onClick={() => setCurrentPage('trip-planner')}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Plan Trip
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">Why Choose Jharkhand Tourism?</h2>
            <p className="text-emerald-600 max-w-2xl mx-auto">Experience sustainable tourism that preserves nature and supports local communities</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-emerald-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">Safe & Secure</h3>
                <p className="text-emerald-600 text-sm">24/7 emergency support and guided tours for your safety</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">Eco-Friendly</h3>
                <p className="text-emerald-600 text-sm">Sustainable tourism practices that protect our environment</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">Cultural Heritage</h3>
                <p className="text-emerald-600 text-sm">Authentic tribal experiences and traditional crafts</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">Virtual Reality</h3>
                <p className="text-emerald-600 text-sm">Immersive 360° tours and AR experiences</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  // searchQuery state has been moved to HomePage

  const navigation = [
    { name: 'Home', id: 'home', icon: MapPin },
    { name: 'Destinations', id: 'destinations', icon: MapPin },
    { name: 'Virtual Tours', id: 'virtual-tours', icon: Camera },
    { name: 'Trip Planner', id: 'trip-planner', icon: Calendar },
    { name: 'Culture & Food', id: 'culture', icon: Heart },
    { name: 'Events', id: 'events', icon: Calendar },
    { name: 'Community', id: 'community', icon: Users },
    { name: 'Login', id: 'auth', icon: Users }
  ];

  const Header = () => (
    <header className="bg-white/95 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-amber-600 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div> */}
            <img src="logo1.png"  alt="App Logo" className="w-9 h-9 rounded-lg" />
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-amber-700 bg-clip-text text-transparent">
              Jh Tourism
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                onClick={() => setCurrentPage(item.id)}
                className={`${currentPage === item.id 
                  ? 'bg-gradient-to-r from-emerald-600 to-amber-600 text-white' 
                  : 'text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </Button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-emerald-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-emerald-100 py-4">
            <div className="grid grid-cols-2 gap-2">
              {navigation.map((item) => (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? "default" : "ghost"}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`${currentPage === item.id 
                    ? 'bg-gradient-to-r from-emerald-600 to-amber-600 text-white' 
                    : 'text-emerald-700'
                  } justify-start`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );

  const DestinationsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">Explore Destinations</h1>
          <p className="text-emerald-600 max-w-2xl mx-auto">Discover the hidden gems of Jharkhand's natural beauty and cultural heritage</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden border-emerald-100 hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-emerald-600">
                  {destination.category}
                </Badge>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                  <Star className="w-4 h-4 text-amber-500 fill-current mr-1" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-emerald-800 mb-2">{destination.name}</h3>
                <p className="text-emerald-600 text-sm mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {destination.location}
                </p>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.map((highlight, index) => (
                    <Badge key={index} variant="secondary" className="bg-amber-100 text-amber-800">
                      {highlight}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700">
                    <Camera className="w-4 h-4 mr-2" />
                    Virtual Tour
                  </Button>
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    <MapPin className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const VirtualToursPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">Virtual Tours & AR Experiences</h1>
          <p className="text-emerald-600 max-w-2xl mx-auto">Immerse yourself in Jharkhand's beauty with 360° virtual tours and augmented reality experiences</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle className="text-emerald-800 flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                360° Virtual Tours
              </CardTitle>
              <CardDescription>Experience destinations from the comfort of your home</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {destinations.slice(0, 4).map((destination) => (
                  <div key={destination.id} className="relative group cursor-pointer">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-3">
                      <span className="text-white text-sm font-medium">{destination.name}</span>
                    </div>
                    <div className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                      <Camera className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle className="text-emerald-800 flex items-center">
                <Camera className="w-5 h-5 mr-2" />
                AR Cultural Experiences
              </CardTitle>
              <CardDescription>Interactive augmented reality experiences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-emerald-50 rounded-lg flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-emerald-800">Tribal Art Recognition</h4>
                    <p className="text-sm text-emerald-600">Point your camera at tribal art to learn its history</p>
                  </div>
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                    Try AR
                  </Button>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-amber-800">Wildlife Spotter</h4>
                    <p className="text-sm text-amber-600">Identify animals and birds in their natural habitat</p>
                  </div>
                  <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                    Try AR
                  </Button>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-emerald-800">Historical Timeline</h4>
                    <p className="text-sm text-emerald-600">Explore historical sites with interactive timelines</p>
                  </div>
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                    Try AR
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Map */}
        <Card className="border-emerald-100">
          <CardHeader>
            <CardTitle className="text-emerald-800 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Interactive Tourist Map
            </CardTitle>
            <CardDescription>Explore Jharkhand with our interactive map featuring all major attractions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-emerald-100 rounded-lg p-8 text-center">
              <MapPin className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">Interactive Map Coming Soon</h3>
              <p className="text-emerald-600 mb-4">Our interactive map will feature real-time navigation, points of interest, and AR markers</p>
              <Button className="bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700">
                Get Notified
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const TripPlannerPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">AI Trip Planner</h1>
          <p className="text-emerald-600 max-w-2xl mx-auto">Let our AI create the perfect itinerary based on your preferences and interests</p>
        </div>

        <Card className="border-emerald-100">
          <CardHeader>
            <CardTitle className="text-emerald-800">Plan Your Perfect Trip</CardTitle>
            <CardDescription>Tell us about your preferences and we'll create a customized itinerary</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-emerald-700 mb-2">Travel Dates</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input type="date" className="border-emerald-200" />
                    <Input type="date" className="border-emerald-200" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-700 mb-2">Number of Travelers</label>
                  <Input type="number" placeholder="2" className="border-emerald-200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-700 mb-2">Budget Range</label>
                  <select className="w-full p-2 border border-emerald-200 rounded-md">
                    <option>₹5,000 - ₹10,000</option>
                    <option>₹10,000 - ₹25,000</option>
                    <option>₹25,000 - ₹50,000</option>
                    <option>₹50,000+</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-emerald-700 mb-2">Interests</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Nature', 'Wildlife', 'Culture', 'Adventure', 'Photography', 'Spirituality'].map((interest) => (
                      <label key={interest} className="flex items-center space-x-2">
                        <input type="checkbox" className="text-emerald-600" />
                        <span className="text-sm">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-700 mb-2">Accommodation Type</label>
                  <select className="w-full p-2 border border-emerald-200 rounded-md">
                    <option>Budget Hotels</option>
                    <option>Eco Resorts</option>
                    <option>Luxury Hotels</option>
                    <option>Homestays</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="border-t border-emerald-100 pt-6">
              <h3 className="text-lg font-semibold text-emerald-800 mb-4">Additional Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-emerald-100">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-emerald-800">Local Guide</h4>
                      <p className="text-sm text-emerald-600">Expert local guide for cultural insights</p>
                      <p className="text-sm font-medium text-emerald-700">₹500/day</p>
                    </div>
                    <input type="checkbox" className="text-emerald-600" />
                  </CardContent>
                </Card>
                <Card className="border-emerald-100">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-emerald-800">Photographer</h4>
                      <p className="text-sm text-emerald-600">Professional photography service</p>
                      <p className="text-sm font-medium text-emerald-700">₹1,500/day</p>
                    </div>
                    <input type="checkbox" className="text-emerald-600" />
                  </CardContent>
                </Card>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700">
              Generate AI Itinerary
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const CulturePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">Local Culture & Food</h1>
          <p className="text-emerald-600 max-w-2xl mx-auto">Discover the rich heritage of Jharkhand's tribal culture, traditional crafts, and authentic cuisine</p>
        </div>

        <Tabs defaultValue="crafts" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="crafts">Handicrafts</TabsTrigger>
            <TabsTrigger value="culture">Tribal Culture</TabsTrigger>
            <TabsTrigger value="food">Local Food</TabsTrigger>
          </TabsList>

          <TabsContent value="crafts">
            <div className="grid md:grid-cols-3 gap-6">
              {culturalItems.map((item, index) => (
                <Card key={index} className="border-emerald-100 overflow-hidden">
                  <div className="h-48 relative">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">{item.name}</h3>
                    <p className="text-emerald-600 mb-3">{item.description}</p>
                    <p className="text-lg font-bold text-amber-700">{item.price}</p>
                    <Button className="w-full mt-4 bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="culture">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-emerald-100">
                <CardHeader>
                  <CardTitle className="text-emerald-800">Tribal Communities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <h4 className="font-semibold text-emerald-800">Santhal Tribe</h4>
                      <p className="text-emerald-600 text-sm">Known for their vibrant festivals and traditional dances</p>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-lg">
                      <h4 className="font-semibold text-amber-800">Oraon Tribe</h4>
                      <p className="text-amber-600 text-sm">Famous for their agricultural practices and folk music</p>
                    </div>
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <h4 className="font-semibold text-emerald-800">Munda Tribe</h4>
                      <p className="text-emerald-600 text-sm">Renowned for their traditional crafts and warrior heritage</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-emerald-100">
                <CardHeader>
                  <CardTitle className="text-emerald-800">Cultural Experiences</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-emerald-800">Village Homestay</h4>
                        <p className="text-emerald-600 text-sm">Live with tribal families</p>
                      </div>
                      <Badge>₹800/night</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50 to-emerald-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-emerald-800">Traditional Dance Show</h4>
                        <p className="text-emerald-600 text-sm">Cultural performances</p>
                      </div>
                      <Badge>₹200/person</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-emerald-800">Craft Workshop</h4>
                        <p className="text-emerald-600 text-sm">Learn traditional arts</p>
                      </div>
                      <Badge>₹500/session</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="food">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-emerald-100">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-emerald-800 mb-2">Dhuska</h3>
                  <p className="text-emerald-600 text-sm mb-3">Traditional fried bread made with rice and lentils</p>
                  <p className="text-lg font-bold text-amber-700">₹20 - ₹40</p>
                </CardContent>
              </Card>
              
              <Card className="border-emerald-100">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-emerald-800 mb-2">Ghugni</h3>
                  <p className="text-emerald-600 text-sm mb-3">Spicy black gram curry with traditional spices</p>
                  <p className="text-lg font-bold text-amber-700">₹30 - ₹60</p>
                </CardContent>
              </Card>
              
              <Card className="border-emerald-100">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-emerald-800 mb-2">Tribal Thali</h3>
                  <p className="text-emerald-600 text-sm mb-3">Complete meal with local vegetables and rice</p>
                  <p className="text-lg font-bold text-amber-700">₹150 - ₹300</p>
                </CardContent>
              </Card>
              
              <Card className="border-emerald-100">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-emerald-800 mb-2">Handia</h3>
                  <p className="text-emerald-600 text-sm mb-3">Traditional rice beer of tribal communities</p>
                  <p className="text-lg font-bold text-amber-700">₹50 - ₹100</p>
                </CardContent>
              </Card>
              
              <Card className="border-emerald-100">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-emerald-800 mb-2">Bamboo Shoot Curry</h3>
                  <p className="text-emerald-600 text-sm mb-3">Seasonal delicacy with unique forest flavors</p>
                  <p className="text-lg font-bold text-amber-700">₹80 - ₹150</p>
                </CardContent>
              </Card>
              
              <Card className="border-emerald-100">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-emerald-800 mb-2">Rugra</h3>
                  <p className="text-emerald-600 text-sm mb-3">Wild mushroom curry with aromatic herbs</p>
                  <p className="text-lg font-bold text-amber-700">₹120 - ₹200</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );

  const EventsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">Events & Festivals</h1>
          <p className="text-emerald-600 max-w-2xl mx-auto">Join us for cultural festivals, seasonal celebrations, and special events throughout the year</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {events.map((event) => (
              <Card key={event.id} className="border-emerald-100">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Badge className="bg-emerald-100 text-emerald-800 mr-2">
                          {event.category}
                        </Badge>
                        <span className="text-sm text-emerald-600">{event.location}</span>
                      </div>
                      <h3 className="text-xl font-bold text-emerald-800 mb-2">{event.title}</h3>
                      <p className="text-emerald-600 mb-3">{event.description}</p>
                      <p className="text-sm font-medium text-amber-700 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {event.date}
                      </p>
                    </div>
                    <Button className="bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <Card className="border-emerald-100 mb-6">
              <CardHeader>
                <CardTitle className="text-emerald-800">Event Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-emerald-50 rounded-lg p-6 text-center">
                  <Calendar className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <p className="text-emerald-700">Interactive calendar coming soon with all events and festivals</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle className="text-emerald-800">Upcoming Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-lg">
                    <h4 className="font-medium text-emerald-800">Sarhul Festival</h4>
                    <p className="text-xs text-emerald-600">March 15 - Nature worship celebration</p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-amber-50 to-emerald-50 rounded-lg">
                    <h4 className="font-medium text-amber-800">Photography Contest</h4>
                    <p className="text-xs text-amber-600">April 10 - Wildlife photography</p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-lg">
                    <h4 className="font-medium text-emerald-800">Cultural Fair</h4>
                    <p className="text-xs text-emerald-600">May 20 - Tribal art exhibition</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

  const CommunityPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">Community Connect</h1>
          <p className="text-emerald-600 max-w-2xl mx-auto">Share your experiences, connect with fellow travelers, and discover hidden gems through our community</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Sample community posts */}
            <Card className="border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
                    <AvatarFallback>RK</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-emerald-800">Raj Kumar</h4>
                      <span className="text-xs text-emerald-600">2 hours ago</span>
                    </div>
                    <p className="text-emerald-700 mb-3">Just visited Hundru Falls and it was absolutely breathtaking! The 320-foot drop is incredible during monsoon season. Here are some tips for fellow travelers...</p>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1675296321708-2971a2fbd7e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKaGFya2hhbmQlMjB3YXRlcmZhbGwlMjBuYXR1cmUlMjBzY2VuaWN8ZW58MXx8fHwxNzU3NzkyNTM2fDA&ixlib=rb-4.1.0&q=80&w=300"
                        alt="Hundru Falls"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1675296321708-2971a2fbd7e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKaGFya2hhbmQlMjB3YXRlcmZhbGwlMjBuYXR1cmUlMjBzY2VuaWN8ZW58MXx8fHwxNzU3NzkyNTM2fDA&ixlib=rb-4.1.0&q=80&w=300"
                        alt="Hundru Falls"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm" className="text-emerald-600">
                        <Heart className="w-4 h-4 mr-1" />
                        24
                      </Button>
                      <Button variant="ghost" size="sm" className="text-emerald-600">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        8
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b884?w=40&h=40&fit=crop&crop=face" />
                    <AvatarFallback>PS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-emerald-800">Priya Sharma</h4>
                      <span className="text-xs text-emerald-600">5 hours ago</span>
                    </div>
                    <p className="text-emerald-700 mb-3">Attended the Sarhul festival in a tribal village near Ranchi. The cultural performances and traditional food were amazing! The community was so welcoming.</p>
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm" className="text-emerald-600">
                        <Heart className="w-4 h-4 mr-1" />
                        18
                      </Button>
                      <Button variant="ghost" size="sm" className="text-emerald-600">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        5
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-emerald-800">Arun Mishra</h4>
                      <span className="text-xs text-emerald-600">1 day ago</span>
                    </div>
                    <p className="text-emerald-700 mb-3">Tiger spotting at Betla National Park! After two days of patience, finally saw a magnificent tiger near the watering hole. Best wildlife experience ever!</p>
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm" className="text-emerald-600">
                        <Heart className="w-4 h-4 mr-1" />
                        42
                      </Button>
                      <Button variant="ghost" size="sm" className="text-emerald-600">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        12
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle className="text-emerald-800">Share Your Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <textarea
                    placeholder="Share your travel experience..."
                    className="w-full p-3 border border-emerald-200 rounded-lg resize-none"
                    rows={4}
                  />
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm" className="border-emerald-600 text-emerald-600">
                      <Camera className="w-4 h-4 mr-1" />
                      Add Photos
                    </Button>
                    <Button className="bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700">
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle className="text-emerald-800">Trending Destinations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-700">#HundruFalls</span>
                    <Badge variant="secondary">127 posts</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-700">#NetarhatSunset</span>
                    <Badge variant="secondary">94 posts</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-700">#BetalWildlife</span>
                    <Badge variant="secondary">68 posts</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-700">#TribalCulture</span>
                    <Badge variant="secondary">52 posts</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle className="text-emerald-800">Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-emerald-600 space-y-2">
                  <p>• Be respectful to local communities</p>
                  <p>• Share authentic experiences</p>
                  <p>• Follow eco-friendly practices</p>
                  <p>• Help fellow travelers</p>
                  <p>• Report inappropriate content</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

  const AuthPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 flex items-center justify-center py-8">
      <div className="max-w-md w-full mx-4">
        <Card className="border-emerald-100">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-emerald-800">Welcome Back</CardTitle>
            <CardDescription>Sign in to your Jharkhand Tourism account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-emerald-700 mb-2">Email</label>
              <Input type="email" placeholder="your@email.com" className="border-emerald-200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-700 mb-2">Password</label>
              <Input type="password" placeholder="••••••••" className="border-emerald-200" />
            </div>
            <Button className="w-full bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700">
              Sign In
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-emerald-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-2 text-emerald-600">OR</span>
              </div>
            </div>

            <Button variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50">
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50">
              Continue with Phone
            </Button>

            <div className="text-center text-sm">
              <span className="text-emerald-600">Don't have an account? </span>
              <button className="text-emerald-700 font-medium hover:text-emerald-800">Sign up</button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Floating Emergency SOS Button
  const SOSButton = () => (
    <div className="fixed bottom-4 left-4 z-50">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg animate-pulse">
            <AlertTriangle className="w-6 h-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-red-800 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Emergency SOS
            </DialogTitle>
            <DialogDescription>
              Get immediate help and emergency contacts for tourists
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Emergency Contacts</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>Tourist Helpline:</span>
                  <a href="tel:1363" className="text-red-700 font-medium">1363</a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Police:</span>
                  <a href="tel:100" className="text-red-700 font-medium">100</a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Medical Emergency:</span>
                  <a href="tel:108" className="text-red-700 font-medium">108</a>
                </div>
              </div>
            </div>
            <Button className="w-full bg-red-600 hover:bg-red-700">
              <Phone className="w-4 h-4 mr-2" />
              Call Emergency Services
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );

  // Floating Chatbot
  const ChatBot = () => (
    <div className="fixed bottom-4 right-4 z-50">
      <Dialog open={chatbotOpen} onOpenChange={setChatbotOpen}>
        <DialogTrigger asChild>
          <Button className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white shadow-lg">
            <MessageCircle className="w-6 h-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-emerald-800 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Tourism Assistant
            </DialogTitle>
            <DialogDescription>
              Ask me about destinations, bookings, or travel tips (English, Hindi, and local languages supported)
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="h-64 bg-emerald-50 rounded-lg p-4 overflow-y-auto">
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="text-sm text-emerald-800">Hello! I'm your Jharkhand tourism assistant. How can I help you today?</p>
                </div>
                <div className="bg-emerald-600 text-white p-3 rounded-lg ml-8">
                  <p className="text-sm">Tell me about Netarhat</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="text-sm text-emerald-800">Netarhat is known as the "Queen of Chotanagpur" and is famous for its stunning sunrises and sunsets. The best time to visit is October to March. Would you like information about accommodations or how to reach there?</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Input placeholder="Type your message..." className="border-emerald-200" />
              <Button className="bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700">
                Send
              </Button>
            </div>
            <div className="text-xs text-emerald-600 text-center">
              Available in English, Hindi, and Santhali
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'destinations':
        return <DestinationsPage />;
      case 'virtual-tours':
        return <VirtualToursPage />;
      case 'trip-planner':
        return <TripPlannerPage />;
      case 'culture':
        return <CulturePage />;
      case 'events':
        return <EventsPage />;
      case 'community':
        return <CommunityPage />;
      case 'auth':
        return <AuthPage />;
      default:
        // ✅ We pass the prop down so the buttons inside HomePage can still change pages
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {renderPage()}
      <SOSButton />
      <ChatBot />
    </div>
  );
}


export default App;
