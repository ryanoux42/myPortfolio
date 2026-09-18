import Link from "next/link";

interface PaginationProps {
   currentPage: number;
   totalPages: number;
   basePath: string;
}

function pageHref(basePath: string, page: number): string {
   return page === 1 ? basePath : `${basePath}?page=${page}`;
}

function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
   if (totalPages <= 1) {
      return null;
   }

   const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
   const linkStyle = "flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors duration-200";
   const inactiveStyle = `${linkStyle} text-text-primary hover:bg-blue-secondary`;
   const activeStyle = `${linkStyle} bg-blue-primary text-white`;
   const disabledStyle = `${linkStyle} text-text-tertiary pointer-events-none`;

   return (
      <nav className="flex items-center justify-center gap-2">
         <Link
            href={pageHref(basePath, Math.max(1, currentPage - 1))}
            aria-disabled={currentPage === 1}
            className={currentPage === 1 ? disabledStyle : inactiveStyle}
         >
            ‹
         </Link>
         {pages.map((page) => (
            <Link
               key={page}
               href={pageHref(basePath, page)}
               className={page === currentPage ? activeStyle : inactiveStyle}
            >
               {page}
            </Link>
         ))}
         <Link
            href={pageHref(basePath, Math.min(totalPages, currentPage + 1))}
            aria-disabled={currentPage === totalPages}
            className={currentPage === totalPages ? disabledStyle : inactiveStyle}
         >
            ›
         </Link>
      </nav>
   );
}

export default Pagination;
