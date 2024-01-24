'use client';

export default function About() {

  return (
    <div className="h-[calc(100vh-80px)] bg-gradient-to-t from-gray-300 to-secondary">
      <div className="grid grid-cols-6">
        <div className="flex flex-col col-span-4 px-10 bg-gray-500">
          text
        </div>
        <div className="flex justify-center col-span-2 bg-gray-700">
          Picture
        </div>
      </div>
    </div>
  );
}
