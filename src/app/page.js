import { SparklesPreview } from './Hero/Hero';

import StickyBottomNavigation from './Navbar/Navbar'

export default function Home() {
  return (
      <>
       <SparklesPreview/>
        <div className="flex gap-4 flex-col items-center">
          <StickyBottomNavigation />
        </div>
      </>
  );
}
