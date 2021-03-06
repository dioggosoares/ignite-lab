import { RingLoader } from 'react-spinners';
interface LoadingWithMessageProps {
  message: string;
}

export function Loading() {
  return (
    <svg className="animate-spin h-6 w-6 block m-auto" xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
      </path>
    </svg>
  )
}

export function LoadingWithMessage({ message }: LoadingWithMessageProps) {
  return (
    <>
      <svg className="animate-spin h-5 w-5 block m-auto" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
        </path>
      </svg>
      <p className="text-lg text-center px-2">{message}</p>
    </>
  );
}

export function RingLoad() {
  return (
    <div id="classContent" className="flex flex-1 mx-auto items-center justify-center mt-[4.6875rem] md:mt-0">
      <RingLoader
        color="#81D8F7"
        loading={true}
        size={100}
        speedMultiplier={2}
      />
    </div>
  )
}
