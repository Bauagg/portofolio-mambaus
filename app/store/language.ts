import { create } from 'zustand';

interface LanguageStore {
    language: 'ENG' | 'IND';
    setLanguage: (language: 'ENG' | 'IND') => void;
    toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
    language: 'ENG',
    setLanguage: (language) => set({ language }),
    toggleLanguage: () => set((state) => ({
        language: state.language === 'ENG' ? 'IND' : 'ENG'
    })),
}));
