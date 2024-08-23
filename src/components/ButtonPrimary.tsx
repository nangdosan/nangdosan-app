import Link from "next/link";

export default function ButtonPrimary({
  href,
  children,
  className,
}: {
  href: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href}>
      <div
        className={`relative hover:scale-105 transition animation-all duration-200 min-w-32 max-w-40 ${className}`}
      >
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-sky-500 to-lime-500 opacity-75 blur"></div>
        <div className="relative flex px-7 py-2 items-center justify-center rounded bg-slate-900 text-slate-300 text-sm">
          {children}
        </div>
      </div>
    </Link>
  );
}
