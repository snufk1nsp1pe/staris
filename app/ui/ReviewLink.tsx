
export function ReviewLink({ color, children, href }: { color: string; children: React.ReactNode; href: string }) {
  return (
    <>
      <span className={`decoration-dashed underline underline-offset-2 decoration-${color}-500`}>
        <a
          href={`${href}`}
          target='_blank'>
          {children}
        </a>
      </span>
    </>
  )
}