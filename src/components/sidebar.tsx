import { BookUp } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Link from 'next/link';

export const REPOSITORY_DATA = [
  { id: 1, user: 'jaggervlad', repo: 'seacal-ui' },
  { id: 1, user: 'jaggervlad', repo: 'seacal-ui' },
  { id: 1, user: 'jaggervlad', repo: 'seacal-ui' },
  { id: 1, user: 'jaggervlad', repo: 'seacal-ui' },
  { id: 1, user: 'jaggervlad', repo: 'seacal-ui' },
  { id: 1, user: 'jaggervlad', repo: 'seacal-ui' },
  { id: 1, user: 'jaggervlad', repo: 'seacal-ui' },
  { id: 1, user: 'jaggervlad', repo: 'seacal-ui' },
  { id: 1, user: 'jaggervlad', repo: 'seacal-ui' },
  { id: 1, user: 'jaggervlad', repo: 'seacal-ui' },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:block sticky top-0 border-r border-b h-screen overflow-y-auto px-6 pt-8">
      <div className="flex mb-2 justify-between items-end">
        <h3 className="font-semibold text-sm">Top Repositories</h3>

        <Button size="xs">
          <BookUp className="mr-2 h-4 w-4" /> New
        </Button>
      </div>

      <form className="mb-3">
        <Input placeholder="Find a repository..." />
      </form>

      <div className="space-y-2 mb-4">
        {REPOSITORY_DATA.map((r, i) => (
          <div key={i} className="flex gap-3 items-center text-sm">
            <Avatar className="h-6 w-6">
              <AvatarImage alt="@shadcn" />
              <AvatarFallback className="text-xs">SA</AvatarFallback>
            </Avatar>
            <Link href="/" className="hover:underline">
              {r.user}/{r.repo}
            </Link>
          </div>
        ))}
      </div>

      <button className="text-xs text-muted-foreground hover:text-blue-500 mb-6">
        Show more
      </button>

      <div>
        <h3 className="font-semibold text-sm mb-2">Recent activity</h3>

        <div className="border-dashed text-xs border flex items-center justify-center p-5 rounded-lg">
          When you take actions across GitHub, we’ll provide links to that
          activity here.
        </div>
      </div>
    </aside>
  );
}
