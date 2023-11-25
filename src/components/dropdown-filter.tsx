import { ListFilter, TagIcon, XIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

export function DropdownFilter() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="xs">
          <ListFilter className="h-4 w-4 mr-2" /> Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-96">
        <DropdownMenuLabel className="flex justify-between items-center">
          <div className="text-xs">Filter</div>
          <XIcon className="h-4 w-4" />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <div className="h-80 overflow-y-auto">
          <fieldset>
            <legend className="sr-only">Notifications</legend>
            <div>
              <CheckboxFilterItem
                title={
                  <>
                    <TagIcon className="h-4 w-4" /> Realeses
                  </>
                }
                description="Special discussion posts from repositories"
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
                description="Special discussion posts from repositories"
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
                description="Special discussion posts from repositories"
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
        <div className="flex gap-5 h-12 px-2 justify-end items-center">
          <Link href="/" className="text-blue-400 text-sm">
            Reset to default
          </Link>

          <Button size="xs">Save</Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

type CheckboxFilterItemProps = {
  title: React.ReactNode | string;
  description: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

function CheckboxFilterItem({
  description,
  title,
  inputProps,
}: CheckboxFilterItemProps) {
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

          <p id="candidates-description" className="text-muted-foreground">
            {description}
          </p>
        </label>
      </div>
    </div>
  );
}
