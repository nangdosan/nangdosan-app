import Link from "next/link";

export default function ButtonSecondary({
  href,
  children,
  className,
}: {
  href: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`min-w-32 max-w-40 py-2 text-sm px-7 rounded bg-white text-slate-900 ${className}`}
    >
      {children}
    </Link>
  );
}
