// Marca do tema Fearless — âncora dentro de um anel de corda, em currentColor (herda text-*).
// O nome vem de brand.name (contexts/settings), o símbolo é fixo do tema.
export function BrandMark({ name }: { name: string }) {
  return (
    <span className="inline-flex min-w-0 items-center gap-2 text-foreground">
      <svg
        viewBox="0 0 32 32"
        role="img"
        aria-hidden="true"
        className="size-7 shrink-0 text-accent"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="16" cy="16" r="13" strokeDasharray="2.6 3.2" opacity="0.65" />
        <circle cx="16" cy="8" r="2.4" />
        <path d="M16 10.4V25" />
        <path d="M9 15h14" />
        <path d="M8 20a8 8 0 0 0 16 0" />
        <path d="M8 20l-2.4 1.2M24 20l2.4 1.2" />
      </svg>
      <span className="min-w-0 truncate font-[600] tracking-[0.02em]">{name}</span>
    </span>
  );
}
