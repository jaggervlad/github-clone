import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Link from 'next/link';
import { REPOSITORY_DATA } from './sidebar';

export function RepositoriesCard() {
  return (
    <div className="lg:hidden mb-10">
      <h3 className="font-medium text-xl mb-2">Respositores</h3>
      <Card className="p-0">
        <CardContent className="p-4">
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

          <button className="text-xs text-muted-foreground hover:text-blue-500">
            Show more
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
