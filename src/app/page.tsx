import { Dashboard } from '@/components/dashboard';
import { Header } from '@/components/header';
import { RepositoriesCard } from '@/components/repositories-card';
import { Sidebar } from '@/components/sidebar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="lg:grid lg:grid-cols-[320px,1fr]">
        <Sidebar />

        <main className="max-w-7xl px-6 lg:px-3 mx-auto w-full py-4">
          <RepositoriesCard />
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
