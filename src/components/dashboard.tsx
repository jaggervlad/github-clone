import { LineChartIcon, StarIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { DropdownFilter } from './dropdown-filter';
import {
  RepositoryItem,
  TrendingRespositoriesCard,
} from './trending-repositories-card';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { LatestChangesTimeLine } from './latest-changes-timeline';

export function Dashboard() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 w-full">
      <div className="lg:flex-auto">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium text-xl">Home</h3>

          <div className="flex items-center gap-4">
            <Link href="/" className="text-blue-400 hover:underline text-sm">
              Send feedback
            </Link>
            <DropdownFilter />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <NoticeCard />
          <TrendingRespositoriesCard
            title={
              <>
                <LineChartIcon className="h-5 w-5 mr-2" />
                Trending repositories ·{' '}
                <Link href="/" className="ml-2 text-blue-400 hover:underline">
                  See more
                </Link>
              </>
            }
          >
            <RepositoryItem />
            <RepositoryItem />
          </TrendingRespositoriesCard>
          <TrendingRespositoriesCard
            title={
              <>
                <StarIcon className="h-5 w-5 mr-2" />
                Recommended for you
              </>
            }
          >
            <RepositoryItem />
          </TrendingRespositoriesCard>
        </div>
      </div>

      <div className="w-full lg:max-w-[325px]">
        <LatestChangesTimeLine />
      </div>
    </div>
  );
}

function NoticeCard() {
  return (
    <Card>
      <CardHeader className="flex-row space-y-0 items-center justify-between">
        <p>Updates to your homepage feed</p>

        <XIcon className="h-4 w-4" />
      </CardHeader>

      <CardContent className="text-sm">
        We&apos;ve combined the power of the Following feed with the For you
        feed so there’s one place to discover content on GitHub. There’s
        improved filtering so you can customize your feed exactly how you like
        it, and a shiny new visual design. ✨
      </CardContent>

      <CardFooter>
        <Link href="/" className="text-blue-400 hover:underline text-sm">
          Learn more
        </Link>
      </CardFooter>
    </Card>
  );
}
