/*
(c) 2014, Philippe Gibert
MoonCalc is a JavaScript library for calculating moon position, phases and zodiac sign.
https://github.com/giboow/mooncalc
Sources of the algorithm : http://www.abecedarical.com/zenosamples/zs_lunarphasecalc.html
*/

(function () {
    'use strict';
  
  
  
    //normalize values to range 0...1
    function normalize(v) {
      v = v - Math.floor(v);
      if (v < 0) {
        v = v + 1;
      }
      return v;
    }
  
  
    function getMoonInformations(date) {
      var age, // Moon's age
        distance, // Moon's distance in earth radii
        latitude, // Moon's ecliptic latitude
        longitude, // Moon's ecliptic longitude
        phase, // Moon's phase
        description, // Moon's phase description
        emoji, //Moon's phase emoji
        trajectory, // Moon's trajectory
        zodiac; // Moon's zodiac sign 
  
      var yy, mm, k1, k2, k3, jd;
      var ip, dp, np, rp;

      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var day = date.getDate();
  
  
      yy = year - Math.floor((12 - month) / 10);
      mm = month + 9;
      if (mm >= 12) {
        mm = mm - 12;
      }
  
      k1 = Math.floor(365.25 * (yy + 4712));
      k2 = Math.floor(30.6 * mm + 0.5);
      k3 = Math.floor(Math.floor((yy / 100) + 49) * 0.75) - 38;
  
      jd = k1 + k2 + day + 59;  // for dates in Julian calendar
      if (jd > 2299160) {
        jd = jd - k3;      // for Gregorian calendar
      }
  
      //calculate moon's age in days
      ip = normalize((jd - 2451550.1) / 29.530588853);
      age = ip * 29.53;
  
      if (age <  1.84566) {
        phase = 'NEW';
        description = 'In this phase, the Moon lies between the Earth and the Sun, leading to our inability to observe it from Earth. Darkness also embodies the beginning, an instinct for giving birth. Symbolically, the seed lying below the ground represents the start of something new. In this phase, energy is used to build strength and intensity. This is an ideal time for you to clarify your goals and intentions, start new plans or ideas. Simply write it down, or let the universe know about your goals and desires. This power source will be even more powerful if you perform a personal ritual or meditation, start your desires with great enthusiasm.';
        emoji = '🌑';
        trajectory = 'ascendent';
      } else if (age <  5.53699) {
        phase = 'Waxing crescent';
        description = 'After the New Moon, the bright side of the Moon grows bigger but has not reached half. So the strength and intensity here also increase, representing the germination of the seed. At this stage, we see a translational movement, and hope for something bigger will come. The source of the erupting energy and the source of power moving forward are things that you can use. Moreover, your plans, dreams, and ideas are on the rise, this is the period where you can realize your focus on development and commitment.\nThe time between the Full Moon and the Full Moon is a great time to bring into mind the new intentions you have made during the new moon. This is a time to be positive, motivated, and active. The development of energy will support new ideas and even meet new people in your life.';
        emoji = '🌒';
        trajectory = 'ascendent';
      } else if (age <  9.22831) {
        phase = 'First quarter';
        description = 'This phase of the moon is called the Half Moon because the bright side of the Moon has reached half and will gradually increase. The seeds have now started to take root, and develop according to the structure of their own species. This moon phase symbolizes the stage of strength, determination, concentration, reevaluation, and commitment to action.\nAlways remember to keep moving forward, regardless of your fears, doubts, or emotions. Use any source of emotional energy into your passion for creativity to accomplish your work and goals.';
        emoji = '🌓';
        trajectory = 'ascendent';
      } else if (age < 12.91963) {
        phase = 'Waxing gibbous';
        description = 'After the half-moon phase, the bright side of the moon is on the rise, but now it is more than half already. In this phase, the flower buds are about to expand. It represents the development stage when ideas and plans are cultivated and refined before moving on to the next stage. It represents the harvest and attainment. This applies to all things you want to have and want to develop, such as friends, material, skills, and the like.';
        emoji = '🌔';
        trajectory = 'ascendent';
      } else if (age < 16.61096) {
        phase = 'FULL';
        description = 'At this stage, the Moon, Earth, and the Sun are also aligned as in the New Moon phase, but the Moon is located directly opposite the Sun of the Earth. and the Earth). Therefore, the entire bright, circular region of the Moon is visible from Earth. The seed is now in full bloom. This represents fertility/abundance, change, perfection, and abundance.This phase is called "waning" because the energy is decreasing. This is an ideal time to let go of what no longer supports your noble goals, the things you want to release, release, or end. The "things" here can be anything, from relationships, jobs, thoughts to emotions.\nThis is a time for guidance, healing, and magic. The night before the Full Moon is perfect for a person to recharge his energy. Sit outside and bathe in the moonlight. Similarly, crystal stones, Oracle cards, valuable gems can all be exposed to the moon to purify and "charge" by the energy of the Moon.\nBe careful of the negative aspects of the Full Moon, including stress, bipolarity, extremist emotional thoughts, and behaviors. Deflect that excess energy by writing your thoughts on paper and performing rituals of letting go.';
        emoji = '🌕';
        trajectory = 'descendent';
      } else if (age < 20.30228) {
        phase = 'Waning gibbous';
        description = 'After the most brilliant period, the light of the Moon began to diminish. During this period, the bright side of the Moon still accounts for more than half, but is incomplete and will slowly fade away. As the Moon gets smaller, it is a good time to focus on giving up bad habits, pressures, and negative thoughts.\nThis phase of the moon is also known as the "dissemination moon", providing the source of energy for better communication, confession, and fulfillment.';
        emoji = '🌖';
        trajectory = 'descendent';
      } else if (age < 23.99361) {
        phase = 'Last quarter';
        description = 'At this stage, the Moon is only partly bright, the rest is less than half and will gradually decrease until the light is completely gone so that a New Moon will form again. This is the end of the old cycle, the beginning of a new cycle. This time is for us to separate ourselves from the world and rest; Consider before making a decision and whether you should let go of something.\nThe last crescent moon is also the time to prepare for a new beginning...';
        emoji = '🌗';
        trajectory = 'descendent';
      } else if (age < 27.68493) {
        phase = 'Waning crescent';
        description = 'The ‘Waning’ refers to the shrinking of the Moon’s illumination and the ‘Crescent’ means less than half of the Moon is illuminated.\nDuring this time take extra care to let go, do not try to control the world around you as this will not bring you peace. Spend time being mindful, going with the flow and surrendering to the world around you.\n– This phases signifies forgiveness surrender –';
        emoji = '🌘';
        trajectory = 'descendent';
      } else {
        phase = 'NEW';
        description = 'In this phase, the Moon lies between the Earth and the Sun, leading to our inability to observe it from Earth. Darkness also embodies the beginning, an instinct for giving birth. Symbolically, the seed lying below the ground represents the start of something new. In this phase, energy is used to build strength and intensity. This is an ideal time for you to clarify your goals and intentions, start new plans or ideas. Simply write it down, or let the universe know about your goals and desires. This power source will be even more powerful if you perform a personal ritual or meditation, start your desires with great enthusiasm.';
        emoji = '🌑';
        trajectory = 'ascendent';
      }
        
      ip = ip * 2 * Math.PI;  //Convert phase to radians
  
      // Calculate moon's distance
      dp = 2 * Math.PI * normalize((jd - 2451562.2) / 27.55454988);
      distance = 60.4 - 3.3 * Math.cos(dp) - 0.6 * Math.cos(2 * ip - dp) - 0.5 * Math.cos(2 * ip);
  
      // Calculate moon's ecliptic latitude
      np = 2 * Math.PI * normalize((jd - 2451565.2) / 27.212220817);
      latitude = 5.1 * Math.sin(np);
  
      // Calculate moon's ecliptic longitude
      rp = normalize((jd - 2451555.8) / 27.321582241);
      longitude = 360 * rp + 6.3 * Math.sin(dp) + 1.3 * Math.sin(2 * ip - dp) + 0.7 * Math.sin(2 * ip);
  
      if (longitude <  33.18) {
        zodiac = 'Aries';
      } else if (longitude <  51.16) {
        zodiac = 'Taurus';
      } else if (longitude <  93.44) {
        zodiac = 'Gemini';
      } else if (longitude < 119.48) {
        zodiac = 'Cancer';
      } else if (longitude < 135.30) {
        zodiac = 'Leo';
      } else if (longitude < 173.34) {
        zodiac = 'Virgo';
      } else if (longitude < 224.17) {
        zodiac = 'Libra';
      } else if (longitude < 242.57) {
        zodiac = 'Scorpio';
      } else if (longitude < 271.26) {
        zodiac = 'Sagittarius';
      } else if (longitude < 302.49) {
        zodiac = 'Capricorn';
      } else if (longitude < 311.72) {
        zodiac = 'Aquarius';
      } else if (longitude < 348.58) {
        zodiac = 'Pisces';
      } else {
        zodiac = 'Aries';
      }
  
      return {
        'date' : { 'year' : year, 'month' : month , 'day' : day},
        'age' : age,
        'distance' : distance * 6371,
        'ecliptic' : {
          'latitude' : latitude,
          'longitude' : longitude
        },
        'phase' : phase,
        'description' : description,
        'emoji' : emoji,
        'trajectory' : trajectory,
        'constellation' : zodiac,
      };
    }
  
  
  
    var MoonCalc = {};
  
    MoonCalc.datasForDay = function (day) {
      return getMoonInformations(day);
    };
  
    // export as AMD module / Node module / browser variable
    if (typeof define === 'function' && define.amd) define(MoonCalc);
    else if (typeof module !== 'undefined') module.exports = MoonCalc;
    else window.MoonCalc = MoonCalc;
  
  }());