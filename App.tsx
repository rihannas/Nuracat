import React, { useState, useEffect } from 'react';
import { AppView, Language, UserState, AgeGroup, Lesson, ConsultantPost, Badge } from './types';
import { TRANSLATIONS, MOCK_LESSONS, MOCK_POSTS, BADGES } from './constants';
import { Mascot } from './components/Mascot';
import { ImageProtection } from './components/ImageProtection';
import { generateSafetyTip, checkContentSafety } from './services/geminiService';

// -- Sub Components --

const Onboarding: React.FC<{ onComplete: (lang: Language, age: AgeGroup, name: string) => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [lang, setLang] = useState<Language>(Language.ENGLISH);
  const [age, setAge] = useState<AgeGroup>(AgeGroup.YOUNG_ADULT);
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-nura-50 to-white text-center">
      <Mascot emotion="happy" size="lg" className="mb-8" />
      
      {step === 1 && (
        <div className="space-y-6 animate-fade-in w-full max-w-md">
          <h1 className="text-3xl font-bold text-nura-900">NuraCat</h1>
          <p className="text-lg text-nura-700">Learn. Protect. Shine.</p>
          <div className="grid grid-cols-1 gap-3">
            {Object.values(Language).map((l) => (
              <button 
                key={l}
                onClick={() => setLang(l)}
                className={`p-4 rounded-xl border-2 transition-all ${lang === l ? 'border-nura-500 bg-nura-50 text-nura-900 font-bold' : 'border-gray-200 text-gray-500'}`}
              >
                {l === 'en' ? 'English' : l === 'am' ? 'አማርኛ' : 'Afaan Oromoo'}
              </button>
            ))}
          </div>
          <button onClick={() => setStep(2)} className="w-full bg-nura-500 text-white py-3 rounded-full font-bold shadow-lg hover:bg-nura-600 transition-transform active:scale-95">
            {TRANSLATIONS[lang].actions.next}
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6 animate-fade-in w-full max-w-md">
          <h2 className="text-2xl font-bold text-nura-900">{TRANSLATIONS[lang].prompts.selectAge}</h2>
          <div className="grid grid-cols-1 gap-3">
             {Object.values(AgeGroup).map((a) => (
               <button 
                 key={a}
                 onClick={() => setAge(a)}
                 className={`p-4 rounded-xl border-2 transition-all ${age === a ? 'border-nura-500 bg-nura-50 text-nura-900 font-bold' : 'border-gray-200 text-gray-500'}`}
               >
                 {a} years
               </button>
             ))}
          </div>
          <input 
            type="text" 
            placeholder="Your Nickname" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-nura-200 rounded-xl focus:ring-2 focus:ring-nura-400 outline-none text-gray-900 placeholder-gray-400"
          />
          <button 
            disabled={!name}
            onClick={() => onComplete(lang, age, name)} 
            className="w-full bg-nura-500 text-white py-3 rounded-full font-bold shadow-lg hover:bg-nura-600 transition-transform active:scale-95 disabled:opacity-50"
          >
            {TRANSLATIONS[lang].start}
          </button>
        </div>
      )}
    </div>
  );
};

const EducationModule: React.FC<{ user: UserState, lessons: Lesson[], onCompleteLesson: (id: string, xp: number) => void }> = ({ user, lessons, onCompleteLesson }) => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [step, setStep] = useState(0);
  const t = TRANSLATIONS[user.language];

  const completedCount = lessons.filter(l => user.completedLessons.includes(l.id)).length;
  const totalLessons = lessons.length;
  const overallProgress = Math.round((completedCount / totalLessons) * 100);

  const openLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setStep(0);
  };

  const handleFinish = () => {
    if (selectedLesson) {
      onCompleteLesson(selectedLesson.id, selectedLesson.xpReward);
      setSelectedLesson(null);
      setStep(0);
    }
  };

  if (selectedLesson) {
    // Access content based on language
    const currentContent = selectedLesson.content[user.language];
    const steps = currentContent.split('\n\n');
    const currentProgress = ((step + 1) / steps.length) * 100;
    const isLastStep = step === steps.length - 1;

    return (
      <div className="max-w-3xl mx-auto bg-white min-h-[80vh] rounded-3xl p-6 shadow-xl relative overflow-hidden flex flex-col">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gray-100">
           <div 
             className="h-full bg-nura-500 transition-all duration-500 ease-out"
             style={{ width: `${currentProgress}%` }}
           />
        </div>
        
        <button onClick={() => setSelectedLesson(null)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 z-10">✕</button>
        
        <div className="flex-1 flex flex-col items-center pt-8 animate-fade-in">
          <Mascot emotion={isLastStep ? "happy" : "teaching"} size="md" className="mb-4" />
          
          <h2 className="text-xl md:text-2xl font-bold text-nura-900 text-center px-4">
            {selectedLesson.title[user.language]}
          </h2>
          
          <div className="mt-8 bg-pink-50 rounded-2xl p-6 md:p-8 w-full max-w-lg min-h-[200px] flex items-center justify-center shadow-inner">
             <p className="text-lg md:text-xl text-gray-800 text-center leading-relaxed font-medium whitespace-pre-wrap">
               {steps[step]}
             </p>
          </div>
          
          <p className="text-sm text-gray-400 mt-4 font-medium tracking-widest">
            CARD {step + 1} / {steps.length}
          </p>
        </div>

        <div className="mt-auto pt-6 flex justify-between gap-4">
           <button 
             onClick={() => setStep(s => Math.max(0, s - 1))}
             disabled={step === 0}
             className={`flex-1 py-3 rounded-xl font-bold transition-colors ${step === 0 ? 'opacity-0 cursor-default' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
           >
             Back
           </button>
           
           {isLastStep ? (
             <button 
                onClick={handleFinish} 
                className="flex-1 bg-nura-500 text-white py-3 rounded-xl font-bold shadow-md hover:bg-nura-600 transition-transform active:scale-95"
             >
                {t.actions.finish} (+{selectedLesson.xpReward} XP)
             </button>
           ) : (
             <button 
                onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))}
                className="flex-1 bg-nura-500 text-white py-3 rounded-xl font-bold shadow-md hover:bg-nura-600 transition-transform active:scale-95"
             >
                {t.actions.next}
             </button>
           )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
       <div className="bg-white p-5 rounded-3xl shadow-sm border border-pink-100 space-y-4">
         <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-nura-100 p-2 rounded-full">
                <span className="text-2xl">🔥</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Streak</p>
                <p className="font-bold text-nura-900">{user.streak} Days</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-yellow-50 p-2 rounded-full">
                <span className="text-2xl">✨</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">XP</p>
                <p className="font-bold text-yellow-600">{user.xp}</p>
              </div>
            </div>
         </div>
         
         <div>
            <div className="flex justify-between text-xs font-bold text-gray-500 mb-1">
               <span>Level Progress</span>
               <span>{completedCount}/{totalLessons} Lessons</span>
            </div>
            <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
               <div 
                  className="h-full bg-gradient-to-r from-nura-400 to-nura-600 rounded-full transition-all duration-700 ease-in-out"
                  style={{ width: `${overallProgress}%` }}
               />
            </div>
         </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-20">
         {lessons.map((lesson, idx) => {
           const isCompleted = user.completedLessons.includes(lesson.id);
           const isLocked = false; 
           
           return (
             <button 
                key={lesson.id}
                onClick={() => !isLocked && openLesson(lesson)}
                className={`text-left w-full bg-white p-5 rounded-3xl border-2 transition-all relative overflow-hidden group
                  ${isCompleted 
                    ? 'border-green-200 bg-green-50/30' 
                    : 'border-nura-100 hover:border-nura-400 hover:shadow-lg hover:-translate-y-1'
                  }
                `}
             >
                <div className="flex justify-between items-start">
                   <div className="pr-8">
                      <div className="flex items-center gap-2 mb-1">
                         <span className="text-xs font-bold bg-nura-50 text-nura-600 px-2 py-0.5 rounded-md uppercase tracking-wide">
                           {lesson.category}
                         </span>
                         {isCompleted && <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-md">DONE</span>}
                      </div>
                      <h3 className="font-bold text-lg text-gray-800 leading-tight">{lesson.title[user.language]}</h3>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{lesson.description[user.language]}</p>
                   </div>
                   
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                      ${isCompleted ? 'bg-green-500 border-green-500 text-white' : 'border-gray-200 text-gray-300 group-hover:border-nura-400 group-hover:text-nura-400'}
                   `}>
                      {isCompleted ? '✓' : '➜'}
                   </div>
                </div>
                
                {isCompleted && (
                   <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-400 opacity-50" />
                )}
             </button>
           );
         })}
       </div>
    </div>
  );
};

const ConsultationModule: React.FC<{ user: UserState }> = ({ user }) => {
  // Initialize from local storage or mock
  const [posts, setPosts] = useState<ConsultantPost[]>(() => {
    const saved = localStorage.getItem('nuraConsultationPosts');
    return saved ? JSON.parse(saved) : MOCK_POSTS;
  });
  
  const [newQuestion, setNewQuestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [safetyCheck, setSafetyCheck] = useState<{safe: boolean, reason?: string} | null>(null);

  const handleSubmit = async () => {
    if (!newQuestion.trim()) return;
    setIsSubmitting(true);

    const check = await checkContentSafety(newQuestion);
    setSafetyCheck(check);

    if (!check.safe) {
      setIsSubmitting(false);
      return; 
    }

    const newPost: ConsultantPost = {
      id: Date.now().toString(),
      authorAlias: 'Anonymous User',
      category: 'General',
      content: newQuestion,
      timestamp: Date.now(),
      replies: [],
      isVerified: false
    };

    setTimeout(() => {
      const updatedPosts = [newPost, ...posts];
      setPosts(updatedPosts);
      localStorage.setItem('nuraConsultationPosts', JSON.stringify(updatedPosts)); // Save messages
      setNewQuestion("");
      setIsSubmitting(false);
      setSafetyCheck(null);
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-3xl shadow-lg border border-pink-100">
        <div className="flex items-start gap-4">
           <Mascot emotion="neutral" size="sm" />
           <div className="flex-1">
             <h3 className="font-bold text-nura-900 mb-2">{TRANSLATIONS[user.language].actions.ask}</h3>
             <textarea 
               value={newQuestion}
               onChange={(e) => setNewQuestion(e.target.value)}
               placeholder="Ask anything anonymously..."
               className="w-full p-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-nura-200 resize-none h-24 text-sm text-gray-900 placeholder-gray-500"
             />
             {safetyCheck && !safetyCheck.safe && (
               <div className="text-red-500 text-xs mt-2 bg-red-50 p-2 rounded">
                 NuraCat: This message might violate our safety guidelines. Reason: {safetyCheck.reason}
               </div>
             )}
             <div className="flex justify-end mt-3">
               <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting || !newQuestion}
                  className="bg-nura-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-md hover:bg-nura-600 disabled:opacity-50"
               >
                 {isSubmitting ? 'Checking...' : 'Post Anonymously'}
               </button>
             </div>
           </div>
        </div>
      </div>

      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100">
             <div className="flex justify-between items-center mb-3">
               <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-200 to-purple-200"></div>
                 <span className="font-bold text-gray-700 text-sm">{post.authorAlias}</span>
               </div>
               <span className="text-xs text-gray-400">2h ago</span>
             </div>
             <p className="text-gray-800 mb-4">{post.content}</p>
             
             {post.replies.length > 0 && (
               <div className="bg-nura-50 p-4 rounded-xl border-l-4 border-nura-300">
                 <div className="flex items-center gap-2 mb-2">
                   <span className="font-bold text-nura-800 text-sm">{post.replies[0].consultantName}</span>
                   <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-full uppercase font-bold tracking-wider">
                     {post.replies[0].role}
                   </span>
                   {post.replies[0].verified && (
                     <span className="text-blue-500" title="Verified by Fayda">✓</span>
                   )}
                 </div>
                 <p className="text-sm text-gray-700">{post.replies[0].content}</p>
               </div>
             )}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProfileModule: React.FC<{ user: UserState, onLogout: () => void, onUpdateLang: (l: Language) => void }> = ({ user, onLogout, onUpdateLang }) => {
  const t = TRANSLATIONS[user.language];

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-20">
      {/* Header Profile Card */}
      <div className="bg-white p-6 rounded-3xl shadow-lg border border-pink-100 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute top-0 w-full h-24 bg-gradient-to-r from-nura-300 to-nura-400 opacity-20"></div>
        <div className="w-24 h-24 bg-nura-100 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-sm z-10">
          <Mascot emotion="happy" size="sm" />
        </div>
        <h2 className="text-2xl font-bold text-nura-900">{user.name}</h2>
        <p className="text-gray-500 text-sm mb-4">{user.ageGroup} • {user.language === 'en' ? 'English' : user.language === 'am' ? 'Amharic' : 'Oromo'}</p>
        
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
          <div className="bg-nura-50 p-3 rounded-2xl">
            <p className="text-nura-600 font-bold text-xl">{user.streak}</p>
            <p className="text-xs text-gray-500 uppercase">{t.profile.streak}</p>
          </div>
          <div className="bg-yellow-50 p-3 rounded-2xl">
            <p className="text-yellow-600 font-bold text-xl">{user.xp}</p>
            <p className="text-xs text-gray-500 uppercase">{t.profile.xp}</p>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>🏆</span> {t.profile.achievements}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {BADGES.map(badge => {
            const isUnlocked = user.xp >= badge.xpRequired;
            return (
              <div key={badge.id} className={`flex flex-col items-center p-3 rounded-2xl text-center border-2 ${isUnlocked ? 'border-yellow-200 bg-yellow-50' : 'border-gray-100 grayscale opacity-60'}`}>
                <div className="text-3xl mb-2">{badge.icon}</div>
                <p className="font-bold text-sm text-gray-800">{badge.name[user.language]}</p>
                <p className="text-[10px] text-gray-500 mt-1">{badge.description[user.language]}</p>
                {!isUnlocked && <span className="text-[10px] bg-gray-200 px-2 rounded-full mt-2 text-gray-600">Locked</span>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>⚙️</span> Settings
        </h3>
        <div className="space-y-4">
           <div>
             <label className="block text-sm text-gray-500 mb-2">{t.actions.changeLang}</label>
             <div className="flex gap-2">
               {Object.values(Language).map(l => (
                 <button 
                   key={l}
                   onClick={() => onUpdateLang(l)}
                   className={`px-4 py-2 rounded-xl text-sm font-bold border transition-colors ${user.language === l ? 'bg-nura-500 text-white border-nura-500' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
                 >
                   {l.toUpperCase()}
                 </button>
               ))}
             </div>
           </div>
           
           <div className="pt-4 border-t border-gray-100">
             <button onClick={onLogout} className="w-full text-red-500 font-medium py-2 hover:bg-red-50 rounded-xl transition-colors">
               {t.actions.logout}
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

const Navbar: React.FC<{ activeView: AppView, onChange: (v: AppView) => void, t: any }> = ({ activeView, onChange, t }) => {
  const navItems = [
    { id: AppView.EDUCATION, label: t.modules.education, icon: '📚' },
    { id: AppView.CONSULTATION, label: t.modules.consultation, icon: '💬' },
    { id: AppView.IMAGE_PROTECTION, label: t.modules.protection, icon: '🛡️' },
    { id: AppView.PROFILE, label: t.modules.profile, icon: '👤' },
  ];

  return (
    <nav className="fixed bottom-0 md:bottom-auto md:top-0 w-full bg-white border-t md:border-b md:border-t-0 border-pink-100 shadow-lg z-50 py-2 md:py-4 px-6">
       <div className="max-w-4xl mx-auto flex justify-around md:justify-between items-center">
          <div className="hidden md:flex items-center gap-2 font-bold text-xl text-nura-600">
            <Mascot emotion="happy" size="sm" className="w-8 h-8" />
            NuraCat
          </div>
          <div className="flex gap-1 md:gap-8 w-full md:w-auto justify-between md:justify-end">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onChange(item.id)}
                className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 p-2 rounded-xl transition-colors
                  ${activeView === item.id ? 'text-nura-600 bg-nura-50' : 'text-gray-400 hover:text-gray-600'}
                `}
              >
                <span className="text-2xl md:text-xl">{item.icon}</span>
                <span className="text-[10px] md:text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
       </div>
    </nav>
  );
};

export default function App() {
  const [view, setView] = useState<AppView>(AppView.ONBOARDING);
  const [user, setUser] = useState<UserState | null>(null);
  const [dailyTip, setDailyTip] = useState("");

  useEffect(() => {
    // Load state from local storage mock
    const saved = localStorage.getItem('nuraUser');
    if (saved) {
      setUser(JSON.parse(saved));
      setView(AppView.EDUCATION);
    }
  }, []);

  useEffect(() => {
    if (user && view === AppView.EDUCATION && !dailyTip) {
        // Fetch a daily tip using Gemini
        generateSafetyTip("Online Privacy", user.language).then(setDailyTip);
    }
  }, [user, view]);

  const handleOnboardingComplete = (language: Language, ageGroup: AgeGroup, name: string) => {
    const newUser: UserState = {
      name,
      language,
      ageGroup,
      xp: 0,
      streak: 1,
      completedLessons: [],
      isOnboarded: true
    };
    localStorage.setItem('nuraUser', JSON.stringify(newUser));
    setUser(newUser);
    setView(AppView.EDUCATION);
  };

  const handleLessonComplete = (id: string, xpReward: number) => {
    if (!user) return;
    const updatedUser = {
      ...user,
      xp: user.xp + xpReward,
      completedLessons: [...user.completedLessons, id]
    };
    setUser(updatedUser);
    localStorage.setItem('nuraUser', JSON.stringify(updatedUser));
  };
  
  const handleLogout = () => {
    localStorage.removeItem('nuraUser');
    setUser(null);
    setView(AppView.ONBOARDING);
  };

  const handleUpdateLang = (l: Language) => {
    if (user) {
      const updated = { ...user, language: l };
      setUser(updated);
      localStorage.setItem('nuraUser', JSON.stringify(updated));
    }
  };

  if (!user || view === AppView.ONBOARDING) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  const t = TRANSLATIONS[user.language];

  return (
    <div className="min-h-screen pb-24 md:pt-24 bg-nura-50/50">
      <Navbar activeView={view} onChange={setView} t={t} />
      
      <main className="container mx-auto px-4 py-6">
        {/* Daily Tip Header */}
        {view === AppView.EDUCATION && (
          <div className="max-w-4xl mx-auto mb-6 bg-gradient-to-r from-nura-500 to-rose-400 rounded-2xl p-4 text-white shadow-lg flex items-center gap-4 animate-fade-in">
             <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
               <span className="text-xl">💡</span>
             </div>
             <p className="text-sm md:text-base font-medium">
               {dailyTip || "Loading daily wisdom..."}
             </p>
          </div>
        )}

        {view === AppView.EDUCATION && (
          <EducationModule 
            user={user} 
            lessons={MOCK_LESSONS.filter(l => l.minAge.includes(user.ageGroup))}
            onCompleteLesson={handleLessonComplete}
          />
        )}
        
        {view === AppView.CONSULTATION && (
          <ConsultationModule user={user} />
        )}
        
        {view === AppView.IMAGE_PROTECTION && (
          <ImageProtection language={user.language} />
        )}

        {view === AppView.PROFILE && (
          <ProfileModule user={user} onLogout={handleLogout} onUpdateLang={handleUpdateLang} />
        )}
      </main>
    </div>
  );
}