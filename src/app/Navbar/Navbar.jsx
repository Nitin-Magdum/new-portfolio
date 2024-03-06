"use client"

export default function StickyBottomNavigation() {
    return (
        <nav className="fixed bottom-3 max-w-full gap-x-2 gap-y-2 rounded-[var(--border-radius--menu-wrapper)] bg-[rgba(26,27,30,0.4)] border flex-col flex p-[9px] max-sm:p-[5px] border-solid border-[#222325] transition-custom">
            <div className="w-full gap-x-2 max-md:gap-1 gap-y-2 rounded-[var(--border-radius--menu-link)] bg-[#1a1b1e] justify-between flex overflow-auto p-3 max-sm:p-2 transition-custom">
                <a href="/" className="menuLink">
                    Home
                </a>
                <a href="/intro" className="menuLink">
                    Intro
                </a>
                <a href="/Skills" className="menuLink">
                    Skills
                </a>
                <a href="/Projects" className="menuLink">
                    Projects
                </a>
                <a href="/contact" className="menuLink">
                    Contact's
                </a>
            </div>
        </nav>
    );
}
