export type Locale = "en" | "hi" | "bn";

export const locales: { key: Locale; label: string; native: string }[] = [
  { key: "en", label: "English", native: "EN" },
  { key: "hi", label: "Hindi", native: "हिं" },
  { key: "bn", label: "Bengali", native: "বাং" }
];

export const weddingContent = {
  meta: {
    groom: "Kobid",
    bride: "Shalini",
    dateISO: "2026-05-05T18:00:00+05:30",
    venueName: "BIOLASTIC",
    venueAddress: "Sukantapally, Ward No. 33, Siliguri – 734005",
    brideAddress: "Basundhara Abasan, “A” Block, Behind Uttor Kanya, Siliguri – 734015",
    monogram: "K / S"
  },

  en: {
    nav: ["Home", "Blessings", "Story", "Gallery", "Details", "RSVP"],
    open: {
      sacred1: "Sri Sri Radha Gobinda",
      sacred2: "Shree Shree Prajapataye Namah",
      title: "Kobid & Shalini",
      subtitle: "Wedding Reception Invitation",
      date: "Tuesday, 05 May 2026 · Evening Onwards",
      venue: "BIOLASTIC, Sukantapally, Ward No. 33, Siliguri",
      summary: "Sri Arun Kumar Kunda and Smt. Sunanda Kunda request your gracious presence and blessings as their elder son Kobid begins his forever with Shalini.",
      button: "Open Invitation",
      hint: "Tap to enter the celebration"
    },
    hero: {
      eyebrow: "Together with their families",
      title1: "Kobid",
      amp: "&",
      title2: "Shalini",
      date: "05 May 2026",
      day: "Tuesday",
      time: "Evening Onwards",
      location: "BIOLASTIC, Siliguri",
      quote: "Two souls. One journey. A forever kind of love.",
      primary: "Open Invitation",
      secondary: "RSVP Now",
      watchTitle: "Watch Our Story",
      watchSub: "A film by our hearts",
      duration: "02:45"
    },
    invitation: {
      label: "Sacred Invitation",
      sacred1: "Sri Sri Radha Gobinda",
      sacred2: "Shree Shree Prajapataye Namah",
      text: "Sri Arun Kumar Kunda and Smt. Sunanda Kunda cordially request the pleasure of your gracious presence and blessings on the auspicious occasion of the Wedding Reception of their elder son.",
      groom: "Kobid",
      weds: "Weds",
      bride: "Shalini",
      brideDetails: "Daughter of Late Ravi Shankar and Mrs. Hira Shahi of Basundhara Abasan, “A” Block, Behind Uttor Kanya, Siliguri – 734015.",
      closing: "Your gracious presence and blessings will make this celebration truly special."
    },
    countdown: {
      label: "We're celebrating in",
      units: ["Days", "Hours", "Minutes", "Seconds"]
    },
    story: {
      label: "Our Story",
      heading: "Every love story is beautiful, but ours begins with blessings.",
      body: "With the blessings of Sri Sri Radha Gobinda and our beloved families, Kobid and Shalini begin a beautiful journey of togetherness, love, and lifelong companionship. As they step into this new chapter, we invite you to join us, bless the couple, and celebrate an evening filled with joy, warmth, and memories.",
    cards: [
      { number: "01", title: "Blessed Beginnings", text: "A journey guided by family, faith, and love.", image: "/images/gallery/memories-moments/big/img1.JPG" },
      { number: "02", title: "Two Families, One Celebration", text: "Coming together to bless a beautiful new bond.", image: "/images/gallery/memories-moments/big/img5.JPG" },
      { number: "03", title: "Forever Begins", text: "An evening of love, laughter, blessings, and togetherness.", image: "/images/gallery/memories-moments/big/img10.jpg" }
    ]
    },
    timeline: {
      label: "Celebration Timeline",
      heading: "Three beautiful days, one unforgettable beginning.",
      body: "Mark the moments that lead Kobid and Shalini into their forever.",
      events: [
        { date: "02 May 2026", day: "Saturday", title: "Bachelor Celebration", text: "An intimate evening of joy, laughter, and blessings before the sacred ceremonies begin." },
        { date: "03 May 2026", day: "Sunday", title: "Marriage Ceremony", text: "The auspicious wedding day, where two hearts and two families become one." },
        { date: "05 May 2026", day: "Tuesday", title: "Reception", text: "A graceful evening of togetherness, blessings, music, and celebration at BIOLASTIC." }
      ]
    },
    gallery: {
      label: "Curated Gallery",
      heading: "Memories & Moments",
      description: "A glimpse into the smiles, blessings, and memories that lead us to this beautiful celebration.",
      button: "View Full Gallery"
    },
    details: {
      label: "Wedding Details",
      cards: [
        { title: "Reception", line1: "Tuesday, 05 May 2026", line2: "Evening Onwards", icon: "rings" },
        { title: "Date", line1: "05 May 2026", line2: "Tuesday", icon: "calendar" },
        { title: "Time", line1: "Evening", line2: "Reception Onwards", icon: "clock" },
        { title: "Venue", line1: "BIOLASTIC", line2: "Sukantapally, Ward No. 33, Siliguri – 734005", icon: "pin" },
        { title: "Blessings", line1: "Your presence is requested", line2: "To bless the newlywed couple", icon: "heart" }
      ]
    },
    family: {
      label: "Family Blessings",
      groomTitle: "Groom's Family",
      groomText: "Kobid, elder son of Sri Arun Kumar Kunda and Smt. Sunanda Kunda.",
      brideTitle: "Bride's Family",
      brideText: "Shalini, daughter of Late Ravi Shankar and Mrs. Hira Shahi of Basundhara Abasan, “A” Block, Behind Uttor Kanya, Siliguri – 734015."
    },
    venue: {
      label: "Wedding Venue",
      title: "BIOLASTIC",
      address: "Sukantapally, Ward No. 33, Siliguri – 734005",
      button: "View On Map"
    },
    rsvp: {
      label: "Kindly Respond",
      heading: "Will you join us on our special evening?",
      description: "Your gracious presence and blessings will make our celebration complete. Please confirm your presence and let us know how many guests will be joining.",
      fields: {
        name: "Your Name",
        phone: "Mobile Number",
        attendance: "Will you attend?",
        guests: "Number of Guests",
        message: "Leave a Message"
      },
      attendanceOptions: ["Yes, I will attend", "Sorry, I cannot attend"],
      guestOptions: ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5+ Guests"],
      button: "Send Your RSVP",
      success: "Thank you for your response. We look forward to celebrating with you."
    },
    footer: {
      quote: "With love, blessings, and togetherness, we look forward to celebrating this special evening with you.",
      signOff: "With Warm Regards",
      family: "The Kunda Family",
      couple: "Kobid & Shalini"
    },
    controls: {
      audioOn: "Audio On",
      audioOff: "Audio Off",
      language: "Language"
    }
  },

  hi: {
    nav: ["मुख्य", "आशीर्वाद", "कहानी", "गैलरी", "विवरण", "RSVP"],
    open: {
      sacred1: "श्री श्री राधा गोबिंद",
      sacred2: "श्री श्री प्रजापतये नमः",
      title: "कोबिद और शालिनी",
      subtitle: "विवाह स्वागत समारोह का निमंत्रण",
      date: "मंगलवार, 05 मई 2026 · संध्या से",
      venue: "BIOLASTIC, सुकांतापल्ली, वार्ड नं. 33, सिलीगुड़ी",
      summary: "श्री अरुण कुमार कुंडा एवं श्रीमती सुनंदा कुंडा अपने ज्येष्ठ पुत्र कोबिद के शालिनी संग वैवाहिक जीवन के शुभारंभ पर आपकी गरिमामयी उपस्थिति और आशीर्वाद का विनम्र अनुरोध करते हैं।",
      button: "निमंत्रण खोलें",
      hint: "समारोह में प्रवेश करने के लिए टैप करें"
    },
    hero: {
      eyebrow: "परिवारों सहित",
      title1: "कोबिद",
      amp: "और",
      title2: "शालिनी",
      date: "05 मई 2026",
      day: "मंगलवार",
      time: "संध्या से",
      location: "BIOLASTIC, सिलीगुड़ी",
      quote: "दो आत्माएँ। एक यात्रा। जीवनभर का प्रेम।",
      primary: "निमंत्रण खोलें",
      secondary: "RSVP करें",
      watchTitle: "हमारी कहानी देखें",
      watchSub: "दिल से बनी एक फिल्म",
      duration: "02:45"
    },
    invitation: {
      label: "पावन निमंत्रण",
      sacred1: "श्री श्री राधा गोबिंद",
      sacred2: "श्री श्री प्रजापतये नमः",
      text: "श्री अरुण कुमार कुंडा एवं श्रीमती सुनंदा कुंडा अपने ज्येष्ठ पुत्र के विवाह स्वागत समारोह के शुभ अवसर पर आपकी गरिमामयी उपस्थिति और आशीर्वाद का सादर अनुरोध करते हैं।",
      groom: "कोबिद",
      weds: "संग",
      bride: "शालिनी",
      brideDetails: "स्वर्गीय रवि शंकर एवं श्रीमती हीरा शाही की सुपुत्री, बसुंधरा अबासन, “A” ब्लॉक, उत्तर कन्या के पीछे, सिलीगुड़ी – 734015।",
      closing: "आपकी उपस्थिति और आशीर्वाद इस उत्सव को और भी विशेष बना देंगे।"
    },
    countdown: { label: "हमारा उत्सव शुरू होने में", units: ["दिन", "घंटे", "मिनट", "सेकंड"] },
    story: {
      label: "हमारी कहानी",
      heading: "हर प्रेम कहानी सुंदर होती है, पर हमारी कहानी आशीर्वादों से शुरू होती है।",
      body: "श्री श्री राधा गोबिंद और परिवारों के आशीर्वाद से कोबिद और शालिनी प्रेम, साथ और जीवनभर की संगति की सुंदर यात्रा शुरू कर रहे हैं। इस नए अध्याय में आप सभी को सम्मिलित होकर नवदंपति को आशीर्वाद देने और आनंदपूर्ण संध्या मनाने का सादर निमंत्रण है।",
      cards: [
        { number: "01", title: "शुभ आरंभ", text: "परिवार, आस्था और प्रेम से सजी यात्रा।", image: "/images/story-1-photo.webp" },
        { number: "02", title: "दो परिवार, एक उत्सव", text: "एक सुंदर बंधन को आशीर्वाद देने का मिलन।", image: "/images/story-2-photo.webp" },
        { number: "03", title: "सदा साथ", text: "प्रेम, हँसी, आशीर्वाद और अपनापन।", image: "/images/story-3-photo.webp" }
      ]
    },
    timeline: {
      label: "उत्सव की समयरेखा",
      heading: "तीन सुंदर दिन, एक यादगार शुरुआत।",
      body: "कोबिद और शालिनी के नए जीवन की ओर बढ़ते इन खास पलों को संजोएँ।",
      events: [
        { date: "02 मई 2026", day: "शनिवार", title: "बैचलर उत्सव", text: "पावन रस्मों से पहले खुशी, हँसी और आशीर्वाद से भरी एक आत्मीय शाम।" },
        { date: "03 मई 2026", day: "रविवार", title: "विवाह समारोह", text: "शुभ विवाह दिवस, जब दो दिल और दो परिवार एक पवित्र बंधन में जुड़ते हैं।" },
        { date: "05 मई 2026", day: "मंगलवार", title: "रिसेप्शन", text: "BIOLASTIC में साथ, आशीर्वाद, संगीत और उत्सव से सजी गरिमामयी संध्या।" }
      ]
    },
    gallery: { label: "गैलरी", heading: "यादें और पल", description: "उन मुस्कानों और पलों की झलक, जो इस सुंदर उत्सव तक लेकर आए।", button: "पूरी गैलरी देखें" },
    details: {
      label: "विवाह विवरण",
      cards: [
        { title: "रिसेप्शन", line1: "मंगलवार, 05 मई 2026", line2: "संध्या से", icon: "rings" },
        { title: "तिथि", line1: "05 मई 2026", line2: "मंगलवार", icon: "calendar" },
        { title: "समय", line1: "संध्या", line2: "रिसेप्शन आरंभ", icon: "clock" },
        { title: "स्थान", line1: "BIOLASTIC", line2: "सुकांतापल्ली, वार्ड नं. 33, सिलीगुड़ी – 734005", icon: "pin" },
        { title: "आशीर्वाद", line1: "आपकी उपस्थिति सादर अपेक्षित है", line2: "नवदंपति को आशीर्वाद देने हेतु", icon: "heart" }
      ]
    },
    family: {
      label: "परिवार का आशीर्वाद",
      groomTitle: "वर पक्ष",
      groomText: "कोबिद, श्री अरुण कुमार कुंडा एवं श्रीमती सुनंदा कुंडा के ज्येष्ठ पुत्र।",
      brideTitle: "वधू पक्ष",
      brideText: "शालिनी, स्वर्गीय रवि शंकर एवं श्रीमती हीरा शाही की सुपुत्री, बसुंधरा अबासन, “A” ब्लॉक, उत्तर कन्या के पीछे, सिलीगुड़ी – 734015।"
    },
    venue: { label: "समारोह स्थल", title: "BIOLASTIC", address: "सुकांतापल्ली, वार्ड नं. 33, सिलीगुड़ी – 734005", button: "मानचित्र देखें" },
    rsvp: {
      label: "कृपया उत्तर दें",
      heading: "क्या आप हमारी विशेष संध्या में शामिल होंगे?",
      description: "आपकी उपस्थिति और आशीर्वाद हमारे उत्सव को पूर्ण बनाएंगे। कृपया अपनी उपस्थिति और अतिथियों की संख्या बताएं।",
      fields: { name: "आपका नाम", phone: "मोबाइल नंबर", attendance: "क्या आप आएंगे?", guests: "अतिथियों की संख्या", message: "संदेश लिखें" },
      attendanceOptions: ["हाँ, मैं आऊँगा/आऊँगी", "क्षमा करें, मैं नहीं आ पाऊँगा/पाऊँगी"],
      guestOptions: ["1 अतिथि", "2 अतिथि", "3 अतिथि", "4 अतिथि", "5+ अतिथि"],
      button: "RSVP भेजें",
      success: "धन्यवाद। हम आपके साथ यह उत्सव मनाने की प्रतीक्षा कर रहे हैं।"
    },
    footer: { quote: "प्रेम, आशीर्वाद और अपनत्व के साथ, हम आपके साथ इस विशेष संध्या को मनाने की प्रतीक्षा कर रहे हैं।", signOff: "सादर", family: "कुंडा परिवार", couple: "कोबिद और शालिनी" },
    controls: { audioOn: "संगीत चालू", audioOff: "संगीत बंद", language: "भाषा" }
  },

  bn: {
    nav: ["হোম", "আশীর্বাদ", "গল্প", "গ্যালারি", "বিবরণ", "RSVP"],
    open: {
      sacred1: "শ্রী শ্রী রাধা গোবিন্দ",
      sacred2: "শ্রী শ্রী প্রজাপতয়ে নমঃ",
      title: "কোবিদ ও শালিনী",
      subtitle: "বিবাহ অভ্যর্থনার নিমন্ত্রণ",
      date: "মঙ্গলবার, ০৫ মে ২০২৬ · সন্ধ্যা থেকে",
      venue: "BIOLASTIC, সুকান্তপল্লী, ওয়ার্ড নং ৩৩, শিলিগুড়ি",
      summary: "শ্রী অরুণ কুমার কুন্ডা ও শ্রীমতী সুনন্দা কুন্ডা তাঁদের জ্যেষ্ঠ পুত্র কোবিদের শালিনীর সঙ্গে নবজীবনের সূচনায় আপনার স্নেহপূর্ণ উপস্থিতি ও আশীর্বাদ কামনা করছেন।",
      button: "নিমন্ত্রণ খুলুন",
      hint: "উৎসবে প্রবেশ করতে ট্যাপ করুন"
    },
    hero: {
      eyebrow: "দুই পরিবারের পক্ষ থেকে",
      title1: "কোবিদ",
      amp: "ও",
      title2: "শালিনী",
      date: "০৫ মে ২০২৬",
      day: "মঙ্গলবার",
      time: "সন্ধ্যা থেকে",
      location: "BIOLASTIC, শিলিগুড়ি",
      quote: "দুই মন। এক যাত্রা। সারাজীবনের ভালোবাসা।",
      primary: "নিমন্ত্রণ খুলুন",
      secondary: "RSVP করুন",
      watchTitle: "আমাদের গল্প দেখুন",
      watchSub: "হৃদয়ের নির্মিত এক ছবি",
      duration: "02:45"
    },
    invitation: {
      label: "পবিত্র নিমন্ত্রণ",
      sacred1: "শ্রী শ্রী রাধা গোবিন্দ",
      sacred2: "শ্রী শ্রী প্রজাপতয়ে নমঃ",
      text: "শ্রী অরুণ কুমার কুন্ডা ও শ্রীমতী সুনন্দা কুন্ডা তাঁদের জ্যেষ্ঠ পুত্রের বিবাহ অভ্যর্থনার শুভ অনুষ্ঠানে আপনার স্নেহপূর্ণ উপস্থিতি ও আশীর্বাদ কামনা করছেন।",
      groom: "কোবিদ",
      weds: "সঙ্গে",
      bride: "শালিনী",
      brideDetails: "স্বর্গীয় রবি শঙ্কর ও শ্রীমতী হীরা শাহীর কন্যা, বসুন্ধরা আবাসন, “A” ব্লক, উত্তরকন্যার পেছনে, শিলিগুড়ি – 734015।",
      closing: "আপনার উপস্থিতি ও আশীর্বাদ এই আনন্দঘন মুহূর্তকে আরও বিশেষ করে তুলবে।"
    },
    countdown: { label: "উৎসব শুরু হতে বাকি", units: ["দিন", "ঘণ্টা", "মিনিট", "সেকেন্ড"] },
    story: {
      label: "আমাদের গল্প",
      heading: "প্রতিটি প্রেমের গল্প সুন্দর, কিন্তু আমাদের গল্প শুরু আশীর্বাদ দিয়ে।",
      body: "শ্রী শ্রী রাধা গোবিন্দ ও পরিবারের আশীর্বাদে কোবিদ ও শালিনী ভালোবাসা, সহযাত্রা ও সারাজীবনের বন্ধনের নতুন অধ্যায় শুরু করছেন। এই আনন্দের সন্ধ্যায় আপনাকে সঙ্গে পেয়ে নবদম্পতিকে আশীর্বাদ জানাতে আমরা আন্তরিকভাবে আমন্ত্রণ জানাই।",
      cards: [
        { number: "01", title: "শুভ সূচনা", text: "পরিবার, বিশ্বাস ও ভালোবাসায় সাজানো যাত্রা।", image: "/images/story-1-photo.webp" },
        { number: "02", title: "দুই পরিবার, এক আনন্দ", text: "এক সুন্দর বন্ধনকে আশীর্বাদ করার মিলন।", image: "/images/story-2-photo.webp" },
        { number: "03", title: "চিরদিনের শুরু", text: "ভালোবাসা, হাসি, আশীর্বাদ ও আপনজনের সন্ধ্যা।", image: "/images/story-3-photo.webp" }
      ]
    },
    timeline: {
      label: "উৎসবের সময়রেখা",
      heading: "তিনটি সুন্দর দিন, এক অবিস্মরণীয় শুরু।",
      body: "কোবিদ ও শালিনীর নতুন জীবনের পথে এগিয়ে চলা বিশেষ মুহূর্তগুলি।",
      events: [
        { date: "০২ মে ২০২৬", day: "শনিবার", title: "ব্যাচেলর উদ্‌যাপন", text: "পবিত্র অনুষ্ঠানের আগে আনন্দ, হাসি ও আশীর্বাদে ভরা এক আন্তরিক সন্ধ্যা।" },
        { date: "০৩ মে ২০২৬", day: "রবিবার", title: "বিবাহ অনুষ্ঠান", text: "শুভ বিবাহের দিন, যখন দুই হৃদয় ও দুই পরিবার এক পবিত্র বন্ধনে যুক্ত হয়।" },
        { date: "০৫ মে ২০২৬", day: "মঙ্গলবার", title: "রিসেপশন", text: "BIOLASTIC-এ আপনজন, আশীর্বাদ, সঙ্গীত ও আনন্দে ভরা এক সুন্দর সন্ধ্যা।" }
      ]
    },
    gallery: { label: "গ্যালারি", heading: "স্মৃতি ও মুহূর্ত", description: "হাসি, আশীর্বাদ ও সুন্দর মুহূর্তের এক ঝলক।", button: "সম্পূর্ণ গ্যালারি দেখুন" },
    details: {
      label: "বিবাহের বিবরণ",
      cards: [
        { title: "রিসেপশন", line1: "মঙ্গলবার, ০৫ মে ২০২৬", line2: "সন্ধ্যা থেকে", icon: "rings" },
        { title: "তারিখ", line1: "০৫ মে ২০২৬", line2: "মঙ্গলবার", icon: "calendar" },
        { title: "সময়", line1: "সন্ধ্যা", line2: "অভ্যর্থনা অনুষ্ঠান", icon: "clock" },
        { title: "স্থান", line1: "BIOLASTIC", line2: "সুকান্তপল্লী, ওয়ার্ড নং ৩৩, শিলিগুড়ি – 734005", icon: "pin" },
        { title: "আশীর্বাদ", line1: "আপনার উপস্থিতি কাম্য", line2: "নবদম্পতিকে আশীর্বাদ জানাতে", icon: "heart" }
      ]
    },
    family: {
      label: "পরিবারের আশীর্বাদ",
      groomTitle: "বরের পরিবার",
      groomText: "কোবিদ, শ্রী অরুণ কুমার কুন্ডা ও শ্রীমতী সুনন্দা কুন্ডার জ্যেষ্ঠ পুত্র।",
      brideTitle: "কনের পরিবার",
      brideText: "শালিনী, স্বর্গীয় রবি শঙ্কর ও শ্রীমতী হীরা শাহীর কন্যা, বসুন্ধরা আবাসন, “A” ব্লক, উত্তরকন্যার পেছনে, শিলিগুড়ি – 734015।"
    },
    venue: { label: "অনুষ্ঠানের স্থান", title: "BIOLASTIC", address: "সুকান্তপল্লী, ওয়ার্ড নং ৩৩, শিলিগুড়ি – 734005", button: "ম্যাপে দেখুন" },
    rsvp: {
      label: "অনুগ্রহ করে জানান",
      heading: "আপনি কি আমাদের বিশেষ সন্ধ্যায় যোগ দেবেন?",
      description: "আপনার উপস্থিতি ও আশীর্বাদ আমাদের অনুষ্ঠানকে পূর্ণতা দেবে। অনুগ্রহ করে আপনার উপস্থিতি ও অতিথির সংখ্যা জানান।",
      fields: { name: "আপনার নাম", phone: "মোবাইল নম্বর", attendance: "আপনি কি আসবেন?", guests: "অতিথির সংখ্যা", message: "বার্তা লিখুন" },
      attendanceOptions: ["হ্যাঁ, আমি আসব", "দুঃখিত, আমি আসতে পারব না"],
      guestOptions: ["১ অতিথি", "২ অতিথি", "৩ অতিথি", "৪ অতিথি", "৫+ অতিথি"],
      button: "RSVP পাঠান",
      success: "ধন্যবাদ। আপনার সঙ্গে এই আনন্দ উদ্‌যাপনের অপেক্ষায় রইলাম।"
    },
    footer: { quote: "ভালোবাসা, আশীর্বাদ ও আপনজনের সঙ্গে এই বিশেষ সন্ধ্যা উদ্‌যাপনের অপেক্ষায় রইলাম।", signOff: "সাদর", family: "কুন্ডা পরিবার", couple: "কোবিদ ও শালিনী" },
    controls: { audioOn: "সঙ্গীত চালু", audioOff: "সঙ্গীত বন্ধ", language: "ভাষা" }
  }
} as const;

export const galleryImages = [
  "/images/gallery-1-photo.webp",
  "/images/gallery-2-photo.webp",
  "/images/gallery-3-photo.webp",
  "/images/gallery-4-photo.webp",
  "/images/gallery-5-photo.webp",
  "/images/gallery-6-photo.webp",
  "/images/gallery-7-photo.webp"
];

export interface GalleryImage {
  id: string;
  small: string;
  big: string;
  caption?: string;
}

export const memoriesMomentsImages: GalleryImage[] = [
  { id: "img1", small: "/images/gallery/memories-moments/small/img1.JPG", big: "/images/gallery/memories-moments/big/img1.JPG", caption: "Memory 1" },
  { id: "img2", small: "/images/gallery/memories-moments/small/img2.JPG", big: "/images/gallery/memories-moments/big/img2.JPG", caption: "Memory 2" },
  { id: "img3", small: "/images/gallery/memories-moments/small/img3.jpg", big: "/images/gallery/memories-moments/big/img3.jpg", caption: "Memory 3" },
  { id: "img4", small: "/images/gallery/memories-moments/small/img4.jpg", big: "/images/gallery/memories-moments/big/img4.jpg", caption: "Memory 4" },
  { id: "img5", small: "/images/gallery/memories-moments/small/img5.JPG", big: "/images/gallery/memories-moments/big/img5.JPG", caption: "Memory 5" },
  { id: "img6", small: "/images/gallery/memories-moments/small/img6.JPG", big: "/images/gallery/memories-moments/big/img6.JPG", caption: "Memory 6" },
  { id: "img7", small: "/images/gallery/memories-moments/small/img7.JPG", big: "/images/gallery/memories-moments/big/img7.JPG", caption: "Memory 7" },
  { id: "img9", small: "/images/gallery/memories-moments/small/img9.jpg", big: "/images/gallery/memories-moments/big/img9.jpg", caption: "Memory 9" },
  { id: "img10", small: "/images/gallery/memories-moments/small/img10.jpg", big: "/images/gallery/memories-moments/big/img10.jpg", caption: "Memory 10" },
  { id: "img11", small: "/images/gallery/memories-moments/small/img11.JPG", big: "/images/gallery/memories-moments/big/img11.JPG", caption: "Memory 11" },
  { id: "img12", small: "/images/gallery/memories-moments/small/img12.JPG", big: "/images/gallery/memories-moments/big/img12.JPG", caption: "Memory 12" },
  { id: "img13", small: "/images/gallery/memories-moments/small/img13.JPG", big: "/images/gallery/memories-moments/big/img13.JPG", caption: "Memory 13" },
  { id: "img14", small: "/images/gallery/memories-moments/small/img14.JPG", big: "/images/gallery/memories-moments/big/img14.JPG", caption: "Memory 14" },
  { id: "img15", small: "/images/gallery/memories-moments/small/img15.JPG", big: "/images/gallery/memories-moments/big/img15.JPG", caption: "Memory 15" },
  { id: "img16", small: "/images/gallery/memories-moments/small/img16.JPG", big: "/images/gallery/memories-moments/big/img16.JPG", caption: "Memory 16" },
  { id: "img17", small: "/images/gallery/memories-moments/small/img17.jpg", big: "/images/gallery/memories-moments/big/img17.jpg", caption: "Memory 17" }
];
