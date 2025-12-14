import { AgeGroup, Language, Lesson, Badge } from './types';

export const TRANSLATIONS = {
  [Language.ENGLISH]: {
    welcome: "Welcome to NuraCat",
    tagline: "Learn. Protect. Shine.",
    start: "Get Started",
    modules: {
      education: "Learning Path",
      consultation: "Safe Advice",
      protection: "Image Guard",
      profile: "Profile"
    },
    actions: {
      upload: "Upload Photo",
      download: "Download Protected",
      ask: "Ask Question",
      verify: "Verify with Fayda",
      next: "Next",
      finish: "Complete",
      logout: "Reset & Logout",
      changeLang: "Change Language"
    },
    prompts: {
      selectLang: "Choose your language",
      selectAge: "Select your age group",
    },
    profile: {
      achievements: "Achievements",
      stats: "My Stats",
      streak: "Day Streak",
      xp: "Total XP"
    }
  },
  [Language.AMHARIC]: {
    welcome: "ወደ ኑራካት እንኳን በደህና መጡ",
    tagline: "ይማሩ። ይከላከሉ። ያብሩ።",
    start: "ጀምር",
    modules: {
      education: "የትምህርት መንገድ",
      consultation: "ደህንነቱ የተጠበቀ ምክር",
      protection: "የምስል ጥበቃ",
      profile: "መገለጫ"
    },
    actions: {
      upload: "ፎቶ ይስቀሉ",
      download: "የተጠበቀውን ያውርዱ",
      ask: "ጥያቄ ይጠይቁ",
      verify: "በፋይዳ ያረጋግጡ",
      next: "ቀጣይ",
      finish: "ጨርስ",
      logout: "ውጣ",
      changeLang: "ቋንቋ ቀይር"
    },
    prompts: {
      selectLang: "ቋንቋዎን ይምረጡ",
      selectAge: "የዕድሜ ክልልዎን ይምረጡ",
    },
    profile: {
      achievements: "ስኬቶች",
      stats: "የእኔ ስታቲስቲክስ",
      streak: "የቀናት ብዛት",
      xp: "ጠቅላላ XP"
    }
  },
  [Language.OROMO]: {
    welcome: "Baga gara NuraCat Nagaan Dhuftan",
    tagline: "Baradhu. Of Eegi. Ifi.",
    start: "Jalqabi",
    modules: {
      education: "Daandii Barumsaa",
      consultation: "Gorsa Nageenyaa",
      protection: "Eegumsa Suuraa",
      profile: "Pirofaayilii"
    },
    actions: {
      upload: "Suuraa Fe'i",
      download: "Eegamaa Buufadhu",
      ask: "Gaaffii Gaafadhu",
      verify: "Fayda dhaan mirkaneessi",
      next: "Itti Aanu",
      finish: "Xumuri",
      logout: "Ba'i",
      changeLang: "Afaan Jijjiiri"
    },
    prompts: {
      selectLang: "Afaan Filadhu",
      selectAge: "Umrii Filadhu",
    },
    profile: {
      achievements: "Milkaa'ina",
      stats: "Istaatisiksii Koo",
      streak: "Guyyoota Walitti Fufiinsaa",
      xp: "XP Waliigalaa"
    }
  }
};

export const BADGES: Badge[] = [
  {
    id: 'b1',
    icon: '🌱',
    name: { en: 'Beginner', am: 'ጀማሪ', or: 'Jalqabaa' },
    description: { en: 'Started the journey', am: 'ጉዞውን ጀምሯል', or: 'Imala jalqabe' },
    xpRequired: 0
  },
  {
    id: 'b2',
    icon: '🛡️',
    name: { en: 'Protector', am: 'ተከላካይ', or: 'Eegaa' },
    description: { en: 'Earned 100 XP', am: '100 XP አግኝቷል', or: 'XP 100 argate' },
    xpRequired: 100
  },
  {
    id: 'b3',
    icon: '🎓',
    name: { en: 'Scholar', am: 'ምሁር', or: 'Hayyuu' },
    description: { en: 'Earned 300 XP', am: '300 XP አግኝቷል', or: 'XP 300 argate' },
    xpRequired: 300
  },
  {
    id: 'b4',
    icon: '👑',
    name: { en: 'Queen', am: 'ንግሥት', or: 'Mootuu' },
    description: { en: 'Earned 500 XP', am: '500 XP አግኝቷል', or: 'XP 500 argate' },
    xpRequired: 500
  }
];

export const MOCK_LESSONS: Lesson[] = [
  {
    id: 'l1',
    title: {
      en: 'Digital Consent Basics',
      am: 'የዲጂታል ፈቃድ መሰረታዊ ነገሮች',
      or: 'Bu’uura Hayyama Dijitaalaa'
    },
    description: {
      en: 'Understanding what it means to say yes online.',
      am: 'በመስመር ላይ አዎ ማለት ምን ማለት እንደሆነ መረዳት።',
      or: 'Intarneetii irratti eeyyen jechuun maal jechuu akka ta’e hubachuu.'
    },
    category: 'Privacy',
    minAge: [AgeGroup.TEEN, AgeGroup.YOUNG_ADULT, AgeGroup.ADULT],
    xpReward: 50,
    content: {
      en: "Digital consent means asking permission before posting. Just like you wouldn't touch someone without permission, don't share their face without asking.\n\n**Story Time:** Tigist and Kemila were at a cafe. Tigist took a photo of Kemila while she was eating and looked messy. Kemila laughed but said, 'Please don't post that.'\n\nLater that night, Tigist thought the photo was funny and posted it on TikTok. Everyone laughed, but Kemila felt humiliated. She didn't want to go to school the next day.\n\n**Scenario:** If you were Tigist, what should you have done? Respecting 'No' is the mark of a true friend. If Kemila says delete it, delete it immediately.\n\n**NuraCat Tip:** Your image belongs to you. If someone posts a photo of you without permission, you have the right to report it to the platform.",
      am: "ዲጂታል ፈቃድ ማለት ከመለጠፍ በፊት መጠየቅ ማለት ነው። ያለፈቃድ ሰውን እንደማንነካ ሁሉ፣ ፎቶአቸውንም ያለፈቃድ ማጋራት የለብንም።\n\n**ታሪክ:** ትዕግስት እና ከሚላ ካፌ ውስጥ ነበሩ። ትዕግስት ከሚላ እየበላች ሳለች ያልተስተካከለ ፎቶ አነሳች። ከሚላ ሳቀች ግን 'እባክሽ ይሄን እንዳትለጥፊው' አለች።\n\nማታ ላይ ትዕግስት ፎቶው ስላስቂት በቲክቶክ ላይ ለጠፈችው። ሁሉም ሰው ሳቀ፣ ነገር ግን ከሚላ በጣም አፈረች። በነገው ዕለት ወደ ትምህርት ቤት መሄድ አልፈለገችም።\n\n**ምን ማድረግ ነበረባት?** እውነተኛ ጓደኛ 'አይሆንም' የሚለውን ቃል ያከብራል። ከሚላ አጥፊው ካለች፣ ወዲያውኑ ማጥፋት ነበረባት።\n\n**የኑራካት ምክር:** ምስልዎ የራስዎ ነው። ማንም ሰው ያለርስዎ ፈቃድ ፎቶዎን ቢለጥፍ፣ ሪፖርት በማድረግ እንዲነሳ የማድረግ መብት አለዎት።",
      or: "Hayyamni dijitaalaa jechuun osoo hin maxxansin dura gaafachuu jechuudha. Akkuma hayyama malee nama hin tuqne, suuraa isaaniis hayyama malee hin qoodinaa.\n\n**Seenaa:** Tigist fi Kamiilaan mana bunaa turan. Tigist osoo Kamiilaan nyaachaa jirtuu suuraa ishee kaaste. Kamiilaan ni kolfite, garuu 'Maaloo kana hin maxxansin' jetteen.\n\nGalgala sana, Tigist suuraan sun waan ishee kofalchiiseef TikTok irratti maxxansite. Namni hundi itti kolfan, garuu Kamiilaan baay'ee qaanoofte. Guyyaa itti aanu mana barumsaa deemuus hin feene.\n\n**Maal gochuu qabdi ture?** Hiriyaan dhugaa 'Lakki' jechuu namaa ni kabaja. Yoo Kamiilaan haqi jette, hatattamaan haquu qabdi turte.\n\n**Gorsa NuraCat:** Suuraan kee kan keeti. Yoo namni tokko hayyama kee malee suuraa kee maxxanse, akka haqamuuf gabaasuuf mirga qabda."
    }
  },
  {
    id: 'l2',
    title: {
      en: 'Spotting Fake Profiles',
      am: 'የውሸት መገለጫዎችን መለየት',
      or: 'Pirofaayilii Sobaa Adda Baasuu'
    },
    description: {
      en: 'How to know if the person you are chatting with is real.',
      am: 'የምታወሩት ሰው እውነተኛ መሆኑን እንዴት ማወቅ እንደሚቻል።',
      or: 'Namni ati haasofsiisaa jirtu dhugaa ta\'uu isaa akkamitti beekuu dandeessa.'
    },
    category: 'Harassment',
    minAge: [AgeGroup.TEEN, AgeGroup.YOUNG_ADULT],
    xpReward: 75,
    content: {
      en: "Fake profiles (catfishing) are common. They use stolen photos to trick you into trusting them.\n\n**Story:** Lidia met 'Dr. Alex' on Facebook. He was handsome and said he lived in the UK. He sent sweet messages for weeks but refused video calls, saying his camera was broken.\n\nOne day, he asked Lidia for money to fix a 'blocked bank account'. Lidia paused. She searched his profile photo on Google Images and found the photo actually belonged to a model in Brazil!\n\n**Red Flags:** 1) Too good to be true. 2) Refuses video calls. 3) Asks for money or private info quickly.\n\n**Action:** Always trust your gut. Use Reverse Image Search to check their photos.",
      am: "የውሸት መገለጫዎች (Catfishing) የተለመዱ ናቸው። እርስዎን ለማታለል የተሰረቁ ፎቶዎችን ይጠቀማሉ።\n\n**ታሪክ:** ሊዲያ በፌስቡክ ላይ 'ዶ/ር አሌክስን' አገኘችው። መልከ መልካም ነበር እና በእንግሊዝ እንደሚኖር ነገራት። ለሳምንታት ጣፋጭ መልዕክቶችን ላከላት፣ ነገር ግን ካሜራው እንደተበላሸ በመግለጽ በቪዲዮ ለመገናኘት ፈቃደኛ አልነበረም።\n\nአንድ ቀን፣ 'የባንክ ሂሳቡ ስለተዘጋ' ገንዘብ ጠየቃት። ሊዲያ ጠራጠረች። የፕሮፋይል ፎቶውን በ Google ላይ ስትፈልግ፣ ፎቶው የብራዚል ሞዴል እንደሆነ አወቀች!\n\n**ማንቂያዎች:** 1) ለማመን የሚከብድ ጥሩ ነገር። 2) ቪዲዮ ጥሪ አለመቀበል። 3) በፍጥነት ገንዘብ ወይም የግል መረጃ መጠየቅ።\n\n**እርምጃ:** ሁሌም ውስጣዊ ስሜትዎን ይመኑ። ትክክለኛነታቸውን ለማረጋገጥ ምስላቸውን በኢንተርኔት ይፈልጉ።",
      or: "Pirofaayiliin sobaa (catfishing) baramaadha. Isaan suuraa hatame fayyadamuun akka isaan amantu si taasisu.\n\n**Seenaa:** Liidiyaan Facebook irratti 'Dr. Alex' waliin wal barte. Bifa gaarii qaba, UK akka jiraatus itti hime. Torbanootaaf ergaa mi’aawaa ergaafii ture, garuu kaameeraan koo cabeera jechuun viidiyoodhaan haasa'uu didaa ture.\n\nGaaf tokko, 'herregni baankii koo waan cufameef' jechuun qarshii ishee gaafate. Liidiyaan shakkite. Suuraa isaa Google Images irratti yeroo barbaaddu, suuraan sun kan moodeela Brazil keessa jiraatu tokkoo ta'uu isaa bira geesse!\n\n**Mallattoolee:** 1) Baay'ee gaarii fakkaata. 2) Viidiyoodhaan haasa'uu diduu. 3) Dafanii qarshii ykn odeeffannoo dhuunfaa gaafachuu.\n\n**Tarkaanfii:** Yeroo hunda miira kee amani. Suuraa isaanii Google irratti barbaadi (Reverse Image Search)."
    }
  },
  {
    id: 'l3',
    title: {
      en: 'Workplace Harassment Laws',
      am: 'የሥራ ቦታ ትንኮሳ ህጎች',
      or: 'Seerota Miidhaa Bakka Hojii'
    },
    description: {
      en: 'Your legal rights in professional environments.',
      am: 'በሙያዊ አካባቢዎች ውስጥ የእርስዎ ህጋዊ መብቶች።',
      or: 'Mirga seeraa kee bakka hojii keessatti.'
    },
    category: 'Legal',
    minAge: [AgeGroup.ADULT],
    xpReward: 100,
    content: {
      en: "Sexual harassment at work is illegal in Ethiopia. A boss cannot demand favors for a promotion.\n\n**Scenario:** Rahel works as a secretary. Her manager, Ato Kebede, keeps touching her shoulder uncomfortably and says, 'If you are nice to me, I will raise your salary.' Rahel feels scared to say no because she needs the job.\n\n**The Law:** This is 'Quid Pro Quo' harassment. Rahel has the right to refuse and report him. She should write down every incident (date, time, what was said).\n\n**NuraCat Advice:** You are not alone. Report to HR or a labor office. Your dignity is worth more than any job.",
      am: "በስራ ቦታ ላይ የሚፈጸም ወሲባዊ ትንኮሳ በኢትዮጵያ ህግ የተከለከለ ነው። አለቃ ለደመወዝ ጭማሪ ወይም ለእድገት ወሲባዊ ጥያቄ ማቅረብ አይችልም።\n\n**ሁኔታ:** ራሄል ፀሐፊ ሆና ትሰራለች። ስራ አስኪያጇ አቶ ከበደ፣ ትከሻዋን ምቾት በማይሰጥ መልኩ ይነካታል፣ እንዲሁም 'ለእኔ ጥሩ ከሆንሽ ደመወዝሽን እጨምራለሁ' ይላታል። ራሄል ስራዋን ስለምትፈልግ እምቢ ለማለት ፈራች።\n\n**ህጉ:** ይህ ህገወጥ ትንኮሳ ነው። ራሄል እምቢ የማለት እና ሪፖርት የማድረግ መብት አላት። እያንዳንዱን ክስተት (ቀን፣ ሰዓት፣ የተባለውን ነገር) መመዝገብ አለባት።\n\n**የኑራካት ምክር:** ብቻዎን አይደሉም። ለሰው ኃይል (HR) ወይም ለሰራተኛና ማህበራዊ ጉዳይ ያሳውቁ። ክብርዎ ከማንኛውም ስራ በላይ ነው።",
      or: "Bakka hojiitti miidhaan saal-qunnamtii Itoophiyaa keessatti seeraan dhorkaadha. Hogganaan tokko guddinaaf ykn mindaa dabaluuf jecha wanta hin taane gaafachuu hin danda'u.\n\n**Haala:** Raheel barreessituu taatee hojjetti. Hoji-gaggeessaan ishee, Obbo Kabbadaan, gatiittii ishee karaa hin mijanneen tuqaa, 'Yoo ati anaaf gaarii taate, mindaa kee nan dabala' jedhaan. Raheel hojii ishee waan barbaadduuf diduu sodaatte.\n\n**Seerri:** Kun miidhaa seeraan alaati. Raheel diduu fi gabaasuuf mirga qabdi. Wanta uumame hunda (guyyaa, sa'aatii, wanta jedhame) galmeessuu qabdi.\n\n**Gorsa NuraCat:** Ati kophaa miti. HR ykn waajjira dhimma hojjetaaf gabaasi. Kabajni kee hojii kamiyyuu caala."
    }
  },
  {
    id: 'l4',
    title: {
      en: 'Password & Account Safety',
      am: 'የይለፍ ቃል እና የመለያ ደህንነት',
      or: 'Eegumsa Jech-darbii fi Akkaawuntii'
    },
    description: {
      en: 'Keeping your social media accounts locked and safe.',
      am: 'የማህበራዊ ሚዲያ መለያዎችዎን ተዘግተው እና ደህንነታቸውን መጠበቅ።',
      or: 'Akkaawuntii miidiyaa hawaasaa kee cufaa fi nageenya isaa eeguu.'
    },
    category: 'Tech',
    minAge: [AgeGroup.TEEN, AgeGroup.YOUNG_ADULT, AgeGroup.ADULT],
    xpReward: 60,
    content: {
      en: "Your password is the key to your digital home. Never share it, not even with a boyfriend.\n\n**Story:** Samrawit gave her Instagram password to her boyfriend, Dawit, to prove she 'trusted' him. When they broke up, Dawit logged in, read her private messages, and deleted her photos.\n\n**Lesson:** Love does not mean sharing passwords. Boundaries are healthy.\n\n**Tech Tip:** Turn on **Two-Factor Authentication (2FA)** on Telegram and Instagram. It sends a code to your phone so only YOU can log in.",
      am: "የይለፍ ቃልዎ የዲጂታል ቤትዎ ቁልፍ ነው። ለወንድ ጓደኛዎም ቢሆን በጭራሽ አያጋሩ።\n\n**ታሪክ:** ሳምራዊት እንደምታምነው ለማሳየት የኢንስታግራም የይለፍ ቃሏን ለወንድ ጓደኛዋ ለዳዊት ሰጠችው። ሲጣሉና ሲለያዩ፣ ዳዊት ወደ መለያዋ በመግባት የግል መልእክቶቿን አነበበ፣ ፎቶዎቿንም አጠፋ።\n\n**ትምህርት:** ፍቅር ማለት የይለፍ ቃል ማጋራት ማለት አይደለም። የግል ወሰን መኖር ጤናማ ነው።\n\n**የቴክኖሎጂ ምክር:** በቴሌግራም እና ኢንስታግራም ላይ **Two-Factor Authentication (2FA)** ያብሩ። ይህ ወደ ስልክዎ ኮድ ስለሚልክ እርስዎ ብቻ መግባት ይችላሉ።",
      or: "Jechi-darbii (Password) kee furtuu manaa dijitaalaa keeti. Hiriyaa dhiiraafis ta'e namaaf hin kennin.\n\n**Seenaa:** Samraawiit akka isatti 'amantu' agarsiisuuf jecha-darbii Instagram ishee hiriyaa ishee Daawwititti himte. Yeroo wal lolan, Daawwit seenee ergaa dhuunfaa ishee dubbise, suuraa ishees haqe.\n\n**Barnoota:** Jaalala jechuun jecha-darbii waliif kennuu miti. Daangaa qabaachuun fayya qabeessa.\n\n**Gorsa Teek:** Telegram fi Instagram irratti **Two-Factor Authentication (2FA)** banaa. Kun koodii bilbila keessanitti waan erguuf isin qofatu seenuu danda'a."
    }
  },
  {
    id: 'l5',
    title: {
      en: 'Location Privacy',
      am: 'የአካባቢ ግላዊነት',
      or: 'Dhuunfaa Bakka (Location)'
    },
    description: {
      en: 'When and where to share your location.',
      am: 'መቼ እና የት አካባቢዎን እንደሚያጋሩ።',
      or: 'Yoomii fi eessatti bakka jirtu akka qooddu.'
    },
    category: 'Privacy',
    minAge: [AgeGroup.TEEN, AgeGroup.YOUNG_ADULT],
    xpReward: 50,
    content: {
      en: "Your photos can reveal where you live. This is called 'Metadata' or 'Geo-tagging'.\n\n**Scenario:** Hawi took a selfie in her bedroom and posted it on Twitter. A stalker downloaded the photo and used a tool to see the exact GPS location of her house.\n\n**Protection:** Go to your phone settings -> Privacy -> Location Services. Turn OFF location for your Camera app.\n\n**Travel Rule:** Don't post 'I am at Bole Mall right now!' Post the photo *after* you have left the place. Keep your location a mystery until you are safe home.",
      am: "ፎቶዎችዎ የት እንደሚኖሩ ሊያጋልጡ ይችላሉ። ይህ 'Metadata' ወይም 'Geo-tagging' ይባላል።\n\n**ሁኔታ:** ሃዊ በመኝታ ክፍሏ ውስጥ የራስ ፎቶ (Selfie) አነሳችና በትዊተር ላይ ለጠፈችው። አንድ አሳዳጅ ፎቶውን አውርዶ ትክክለኛ የቤቷን አድራሻ (GPS) ለማወቅ ተጠቀመበት።\n\n**መከላከያ:** ወደ ስልክዎ Settings -> Privacy -> Location Services ይሂዱ። ለካሜራ መተግበሪያዎ Location ያጥፉ።\n\n**የጉዞ ህግ:** 'አሁን ቦሌ ሞል ውስጥ ነኝ!' ብለው አይለጥፉ። ፎቶውን መለጠፍ ያለብዎ ቦታውን *ከለቀቁ በኋላ* ነው። ቤት በሰላም እስኪገቡ ድረስ ያሉበትን ቦታ በሚስጥር ይያዙ።",
      or: "Suuraan kee eessa akka jiraattu saaxiluu danda'a. Kun 'Metadata' ykn 'Geo-tagging' jedhama.\n\n**Haala:** Haawiin kutaa ciisichaa ishee keessatti suuraa kaastee Twitter irratti maxxansite. Namni ishee hordofu tokko suuraa sana buufatee iddoo (GPS) manni ishee jiru sirriitti beekuuf itti fayyadame.\n\n**Eegumsa:** Gara Settings -> Privacy -> Location Services deemaa. Appii Kaameeraa keessaniif Location dhaamsaa (OFF).\n\n**Seera Imalaa:** 'Amma Boolee Moolii keessan jira!' jettanii hin maxxansinaa. Bakka sanaa *erga baatan booda* maxxansaa. Hanga nagaan galanitti bakka jirtan iccitii taasisaa."
    }
  },
  {
    id: 'l6',
    title: {
      en: 'Reporting Online Abuse',
      am: 'የመስመር ላይ ጥቃትን ሪፖርት ማድረግ',
      or: 'Miidhaa Intarneetii Gabaasuu'
    },
    description: {
      en: 'Steps to take if you are being bullied or blackmailed.',
      am: 'ጥቃት ወይም ማስፈራሪያ ከደረሰብዎ መውሰድ ያለብዎት እርምጃዎች።',
      or: 'Tarkaanfiiwwan yoo miidhaan ykn sodaachisni si irra ga’e fudhatamuu qaban.'
    },
    category: 'Legal',
    minAge: [AgeGroup.YOUNG_ADULT, AgeGroup.ADULT],
    xpReward: 90,
    content: {
      en: "Blackmail (Sextortion) is when someone threatens to share your private photos unless you send money or more photos.\n\n**What NOT to do:** Do not panic. Do not pay. Do not delete the messages.\n\n**Story:** Meron received a message: 'I have your naked photo. Send 5000 Birr or I post it.' She was terrified. Instead of paying, she took screenshots of the threat and the account profile. She blocked him and told her brother.\n\n**Action Plan:** 1. Screenshot everything. 2. Block the user. 3. Report to the app (Telegram/Facebook). 4. Report to Ethiopian Cyber Crime police.\n\n**You are brave.** The shame belongs to the criminal, not you.",
      am: "ማስፈራሪያ (Sextortion) ማለት ገንዘብ ወይም ተጨማሪ ፎቶ ካልላክሽ የግል ፎቶሽን እለጥፋለሁ ብሎ ማስፈራራት ነው።\n\n**ምን ማድረግ የለብዎትም:** አይደናገጡ። ገንዘብ አይክፈሉ። መልእክቶቹን አያጥፉ።\n\n**ታሪክ:** ሜሮን መልእክት ደረሳት፡ 'የራቁት ፎቶሽ አለኝ። 5000 ብር ካልላክሽ እለጥፈዋለሁ።' በጣም ደነገጠች። ከመክፈል ይልቅ፣ የማስፈራሪያውን እና የመለያውን ስክሪን ሻት (Screenshot) አነሳች። ብሎክ አደረገችውና ለወንድሟ ነገረችው።\n\n**የተግባር መመሪያ:** 1. ሁሉንም ነገር ስክሪን ሻት ያድርጉ። 2. ተጠቃሚውን ብሎክ ያድርጉ። 3. ለመተግበሪያው (ቴሌግራም/ፌስቡክ) ሪፖርት ያድርጉ። 4. ለኢትዮጵያ ሳይበር ወንጀል ፖሊስ ያሳውቁ።\n\n**እርስዎ ጠንካራ ነዎት።** ውርደቱ የወንጀለኛው ነው እንጂ የእርስዎ አይደለም።",
      or: "Sextortion jechuun yoo qarshii ykn suuraa dabalataa hin ergine suuraa kee iccitii nan maxxansa jedhanii sodaachisuudha.\n\n**Maal gochuu hin qabdu:** Hin na’inaa. Hin kaffalinaa. Ergaa sana hin haqinaa.\n\n**Seenaa:** Maroon ergaan ishee qaqqabe: 'Suuraa qullaa kee qaba. 5000 Birrii yoo hin ergine nan maxxansa.' Baay'ee naate. Kaffaluu mannaa, ergaa sanaa fi pirofaayilii nama sanaa Screenshot kaaste. Isas Block gootee obboleessa isheetti himte.\n\n**Tarkaanfii:** 1. Wanta hunda Screenshot kaasaa. 2. Nama sana Block godhaa. 3. Appichatti (Telegram/Facebook) gabaasaa. 4. Poolisii Yakka Saayibarii Itoophiyaatiif gabaasaa.\n\n**Ati jabaadha.** Qaaniin kan yakka raawwateeti malee kan kee miti."
    }
  }
];

export const MOCK_POSTS = [
  {
    id: 'p1',
    authorAlias: 'HopefulFlower',
    category: 'Digital Safety',
    content: 'Someone is threatening to share my private photos if I do not pay them. I am scared. What do I do?',
    timestamp: Date.now() - 100000,
    isVerified: false,
    replies: [
      {
        id: 'r1',
        consultantName: 'Sarah M.',
        role: 'Legal Advisor',
        verified: true,
        timestamp: Date.now() - 50000,
        content: "I am so sorry you are going through this. This is called sextortion and it is a crime. Do not pay them—it often leads to more demands. Block them immediately, take screenshots as evidence, and consider reporting it to the police cybercrime unit."
      }
    ]
  }
];