import { Card, CardContent, CardHeader } from './ui/card';

export function LatestChangesTimeLine() {
  return (
    <Card>
      <CardHeader>
        <a className="text-sm font-medium">Latest changes</a>
      </CardHeader>
      <CardContent>
        <ol className="relative border-s ">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border  "></div>
            <time className="font-normal leading-none text-xs mb-3">
              February 2022
            </time>
            <a className="block text-sm hover:underline hover:text-blue-400 cursor-pointer">
              Application UI code in Tailwind CSS
            </a>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border  "></div>
            <time className="font-normal leading-none text-xs mb-3">
              March 2022
            </time>
            <a className="block text-sm hover:underline hover:text-blue-400 cursor-pointer">
              GitHub Support Portal will soon require login
            </a>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border  "></div>
            <time className="font-normal leading-none text-xs">April 2022</time>
            <a className="block text-sm hover:underline hover:text-blue-400 cursor-pointer">
              E-Commerce UI code in Tailwind CSS
            </a>
          </li>
        </ol>
      </CardContent>
    </Card>
  );
}
