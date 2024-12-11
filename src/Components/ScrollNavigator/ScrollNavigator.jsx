import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router';
import transitionSound from '../../assets/sound_effect.mp3'

const sections = ['/', '/about', '/skills', '/projects', '/contact'];

const ScrollNavigator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const touchStartY = useRef(null);
  const touchStartX = useRef(null);
  const touchStartTime = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const audioRef = useRef(new Audio(transitionSound));

//   const playSound = () => {
//     const audio = new Audio(transitionSound);
//     audio.play().catch((error) => console.log('Sound play error:', error));
//   };

  // Sync currentIndex with the current route
  useEffect(() => {
    const index = sections.indexOf(location.pathname);
    if (index !== -1) setCurrentIndex(index);
  }, [location]);

  // Handle scroll (for desktop) and touch (for mobile)
  useEffect(() => {
    const handleScroll = (event) => {
      if (isNavigating) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      let newIndex = currentIndex + direction;

      if (newIndex >= sections.length) {
        newIndex = 0; // Loop back to root
      } else if (newIndex < 0) {
        newIndex = sections.length - 1; // Loop to last section
      }

      setCurrentIndex(newIndex);
    };

    const handleTouchStart = (event) => {
      touchStartY.current = event.touches[0].clientY;
      touchStartX.current = event.touches[0].clientX;
      touchStartTime.current = Date.now(); // Record the time the touch started
    };

    const handleTouchEnd = (event) => {
      if (isNavigating) return;

      const touchEndY = event.changedTouches[0].clientY;
      const touchEndX = event.changedTouches[0].clientX;
      const deltaY = touchStartY.current - touchEndY;
      const deltaX = touchStartX.current - touchEndX;
      const timeElapsed = Date.now() - touchStartTime.current; // How long the swipe took

      // 1️⃣ Check if the swipe was **deliberate** (not just a short move)
      const isVerticalSwipe = Math.abs(deltaY) > Math.abs(deltaX); // Ensure swipe is vertical
      const isSwipeEnough = Math.abs(deltaY) > 100; // Must swipe at least 100px vertically
      const isQuickSwipe = timeElapsed < 500; // The swipe should happen quickly

      if (isVerticalSwipe && isSwipeEnough && isQuickSwipe) {
        const direction = deltaY > 0 ? 1 : -1; // Up swipe = 1, down swipe = -1
        let newIndex = currentIndex + direction;

        if (newIndex >= sections.length) {
          newIndex = 0; // Loop back to root
        } else if (newIndex < 0) {
          newIndex = sections.length - 1; // Loop to last section
        }

        setCurrentIndex(newIndex);
      }
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex, isNavigating]);

  // Handle route change and debounce navigation
  useEffect(() => {
    setIsNavigating(true);
    // playSound();
    const audio = audioRef.current; // Use the single audio instance
    audio.currentTime = 0; // Reset audio playback to the start
    audio.play().catch((error) => console.log('Sound play error:', error)); // Avoids multiple play calls
    navigate(sections[currentIndex]);
    const timeout = setTimeout(() => setIsNavigating(false), 500); // Allow smooth navigation
    return () => clearTimeout(timeout);
  }, [currentIndex, navigate]);

  return null;
};

export default ScrollNavigator;
