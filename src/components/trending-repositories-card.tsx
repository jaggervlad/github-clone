import Link from 'next/link';
import { Card, CardContent, CardHeader } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ChevronDown, StarIcon, XIcon } from 'lucide-react';
import { Button } from './ui/button';

type TrendingRespositoriesCardProps = {
  title: ReactNode | string;
  children: ReactNode;
};

export function TrendingRespositoriesCard({
  title,
  children,
}: TrendingRespositoriesCardProps) {
  return (
    <Card>
      <CardHeader className="flex-row space-y-0 pb-1 items-center justify-between">
        <div className="flex items-center text-sm font-medium">{title}</div>
      </CardHeader>
      <CardContent className="px-0 divide-y-2">{children}</CardContent>
    </Card>
  );
}

export function RepositoryItem() {
  return (
    <div className="px-6 py-3 flex flex-col space-y-4 md:space-y-0 md:flex-row items-start">
      <div className="flex flex-grow gap-y-2 flex-col">
        <div className="flex gap-3 items-center text-sm">
          <Avatar className="h-6 w-6">
            <AvatarImage alt="@shadcn" />
            <AvatarFallback className="text-xs">SA</AvatarFallback>
          </Avatar>
          <Link href="/" className="hover:underline">
            jaggervlad/ecommerce-ui
          </Link>
        </div>

        <p className="text-sm">
          A quick example of how one can &quot;synchronize&quot; a 3d scene
          across multiple windows using three.js and localStorage
        </p>

        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-2 text-sm">
            <div className="h-4 w-4 rounded-full bg-yellow-300" /> Javascript
          </div>

          <div className="flex items-center gap-2 text-sm">
            <StarIcon className="h-4 w-4" /> 999
          </div>
        </div>
      </div>

      <div className="flex">
        <Button size="xs" variant={'outline'} className="rounded-r-none">
          <StarIcon className="h-4 w-4 mr-2" /> Star
        </Button>
        <DropdownList />
      </div>
    </div>
  );
}

import { TagIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ReactNode } from 'react';

export function DropdownList() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="xs" className="rounded-l-none">
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex justify-between items-center">
          <div className="text-xs">Filter</div>
          <XIcon className="h-4 w-4" />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <div className="">
          <fieldset>
            <legend className="sr-only">Notifications</legend>
            <div>
              <CheckboxFilterItem
                title={
                  <>
                    <TagIcon className="h-4 w-4" /> Realeses
                  </>
                }
                inputProps={{
                  id: 'comments',
                  'aria-describedby': 'comments-description',
                  name: 'comments',
                }}
              />
              <CheckboxFilterItem
                title={
                  <>
                    <TagIcon className="h-4 w-4" /> Realeses
                  </>
                }
                inputProps={{
                  id: 'comments',
                  'aria-describedby': 'comments-description',
                  name: 'comments',
                }}
              />
              <CheckboxFilterItem
                title={
                  <>
                    <TagIcon className="h-4 w-4" /> Realeses
                  </>
                }
                inputProps={{
                  id: 'comments',
                  'aria-describedby': 'comments-description',
                  name: 'comments',
                }}
              />
            </div>
          </fieldset>
        </div>

        <DropdownMenuSeparator />

        <div className="py-2 px-2">
          <button className="text-sm">+ Create List</button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

type CheckboxFilterItemProps = {
  title: React.ReactNode | string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

function CheckboxFilterItem({ title, inputProps }: CheckboxFilterItemProps) {
  return (
    <div className="flex items-start hover:bg-primary-foreground p-2">
      <div className="flex h-6 items-center">
        <input
          {...inputProps}
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300"
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <label htmlFor={inputProps?.name} className="flex flex-col">
          <div className="font-medium flex gap-2 items-center">{title}</div>
        </label>
      </div>
    </div>
  );
}
