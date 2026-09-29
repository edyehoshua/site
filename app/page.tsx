import { Header } from '@/components/Header';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Art } from '@/components/Art';

export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-8 py-16 md:px-16 md:py-24 text-foreground">
      <Header />
      <Projects />
      <Education />
      <Art />
    </main>
  );
}
