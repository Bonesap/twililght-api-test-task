'use client';

export default function Loading() {
  return (
    <div className="flex items-center justify-center mt-[60px]">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        <p className="mt-4 text-white text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
}
