"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Bike, Users, MapPin, Clock, Mail, CheckCircle, Zap } from "lucide-react";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setIsSubscribed(true);
      setEmail("");

      setTimeout(() => setIsSubscribed(false), 3000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-yellow-200 rounded-full opacity-30 animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-orange-200 rounded-full opacity-40 animate-bounce-gentle"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-yellow-100 rounded-full opacity-20 animate-drift"></div>
      </div>

      {/* Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Car className="absolute top-16 left-8 w-6 h-6 text-yellow-400 animate-wiggle" />
        <Bike className="absolute top-32 right-16 w-5 h-5 text-orange-400 animate-wiggle animation-delay-1000" />
        <Users className="absolute bottom-32 left-16 w-6 h-6 text-yellow-500 animate-wiggle animation-delay-2000" />
        <MapPin className="absolute bottom-16 right-8 w-5 h-5 text-orange-500 animate-wiggle animation-delay-3000" />
        <Zap className="absolute top-1/2 right-1/3 w-4 h-4 text-yellow-600 animate-wiggle animation-delay-1500" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="text-center mb-8 animate-slide-up">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-3xl shadow-lg mb-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <span className="text-2xl font-black text-gray-800">T</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-gray-800 mb-2 tracking-tight">TRIPPU</h1>
            <div className="inline-block bg-yellow-400 px-4 py-1 rounded-full transform -rotate-1">
              <p className="text-sm font-bold text-gray-800">Student Transport Made Easy!</p>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 animate-slide-up animation-delay-300">
          <div className="inline-block mb-6">
            <Badge className="bg-orange-400 text-white px-6 py-2 text-base font-bold rounded-full shadow-md transform rotate-1 hover:rotate-0 transition-transform">
              🚀 Coming Soon
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-800 mb-6 leading-tight">
            Your Campus Ride is Just a Tap Away!
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
            From quick campus runs to weekend adventures - TRIPPU gets you there fast, cheap, and hassle-free.
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Bike className="w-8 h-8 text-gray-800" />,
                title: "Rent & Ride",
                text: "Bikes, scooters delivered to your hostel door!",
                bg: "bg-yellow-50",
                ring: "border-yellow-300",
              },
              {
                icon: <Car className="w-8 h-8 text-white" />,
                title: "Daily Cabs",
                text: "Subscribe to daily rides, never miss class!",
                bg: "bg-orange-50",
                ring: "border-orange-300",
              },
              {
                icon: <Users className="w-8 h-8 text-gray-800" />,
                title: "Cab Buddy",
                text: "Book one time cab rides with ease!",
                bg: "bg-yellow-50",
                ring: "border-yellow-300",
              },
            ].map((card, idx) => (
              <Card
                key={idx}
                className={`border-3 ${card.ring} shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up animation-delay-${600 + idx * 200} hover:scale-105 transform rotate-1 hover:rotate-0`}
              >
                <CardContent className={`p-6 text-center ${card.bg}`}>
                  <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 transform -rotate-3">
                    {card.icon}
                  </div>
                  <h3 className="font-black text-gray-800 mb-2 text-lg">{card.title}</h3>
                  <p className="text-gray-700 font-medium">{card.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Email Signup */}
        <div className="w-full max-w-md animate-slide-up animation-delay-1200">
          <Card className="border-4 border-yellow-400 shadow-2xl bg-white transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-gray-800" />
                </div>
                <h3 className="text-2xl font-black text-gray-800 mb-2">Get Early Access!</h3>
                <p className="text-gray-700 font-medium">Be first in line when we launch 🎉</p>
              </div>

              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="your.email@college.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-center border-3 border-gray-300 focus:border-yellow-400 transition-colors text-lg font-medium rounded-xl"
                    required
                    disabled={loading}
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-black text-lg py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Count Me In! 🚀"}
                  </Button>
                  {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                </form>
              ) : (
                <div className="text-center animate-bounce-in">
                  <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-green-600 font-black text-lg">Awesome! You're on the list! 🎊</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Launch Info */}
        <div className="mt-12 text-center animate-slide-up animation-delay-1400">
          <div className="inline-block bg-gray-800 text-white px-6 py-3 rounded-full transform rotate-1">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-5 h-5" />
              <span className="font-bold">Launching August 2025!</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-600 font-medium animate-slide-up animation-delay-1600">
          <p>Made with ❤️ for students, by students</p>
        </div>
      </div>
    </div>
  );
}