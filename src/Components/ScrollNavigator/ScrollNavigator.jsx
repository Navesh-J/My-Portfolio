import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';

const sections = ['/', '/about', '/skills', '/projects', '/contact'];

const ScrollNavigator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Sync currentIndex with the current route
    const index = sections.indexOf(location.pathname);
    if (index !== -1) setCurrentIndex(index);
  }, [location]);

  useEffect(() => {
    const handleScroll = (event) => {
      if (isNavigating) return; // Prevent simultaneous navigation

      const direction = event.deltaY > 0 ? 1 : -1; // Scroll direction
      let newIndex = currentIndex + direction;

      if (newIndex >= sections.length) {
        newIndex = 0; // Loop back to root
      } else if (newIndex < 0) {
        newIndex = sections.length - 1; // Loop to last section
      }

      setCurrentIndex(newIndex);
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentIndex, isNavigating]);

  useEffect(() => {
    setIsNavigating(true);
    navigate(sections[currentIndex]);
    const timeout = setTimeout(() => setIsNavigating(false), 300); // Allow smooth navigation
    return () => clearTimeout(timeout);
  }, [currentIndex, navigate]);

  return null;
};

export default ScrollNavigator;
