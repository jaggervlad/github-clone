import { Button } from '@/components/ui/button';
import { GHIcon } from '@/components/ui/gh-icon';
import {
  BookUp,
  ChevronDown,
  CircleDot,
  GitBranch,
  Inbox,
  Menu,
  Plus,
} from 'lucide-react';
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

export function Header() {
  return (
    <header className="w-full px-6 border-b h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>

        <Link href="/">
          <GHIcon />
        </Link>
        <Button variant={'ghost'} className="px-2">
          Dashboard
        </Button>
      </div>

      <nav className="flex items-center gap-2">
        <form>
          <Input placeholder="Search" />
        </form>

        <Separator orientation="vertical" className="h-8 mx-2" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex px-2 justify-between gap-2 items-center"
            >
              <Plus className="h-4 w-4" />
              <ChevronDown className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48" align="end">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BookUp className="mr-2 h-4 w-4" />
                <span>New repository</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BookUp className="mr-2 h-4 w-4" />
                <span>New repository</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BookUp className="mr-2 h-4 w-4" />
                <span>New repository</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BookUp className="mr-2 h-4 w-4" />
                <span>New repository</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BookUp className="mr-2 h-4 w-4" />
                <span>New repository</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BookUp className="mr-2 h-4 w-4" />
                <span>New repository</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="outline" size="icon">
          <CircleDot className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <GitBranch className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Inbox className="h-4 w-4" />
        </Button>
      </nav>
    </header>
  );
}
