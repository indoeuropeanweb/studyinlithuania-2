"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({menuItems}) => {
  const pathname = usePathname();

  return (
    <aside className="h-full bg-green-800 p-4">
      <nav className="space-y-6">
        {menuItems.map((item, index) => {
          if (item.links) {
            return (
              <div key={index}>
                <h2 className="mb-3 px-4 py-2 text-sm font-aino text-white">
                  {item.heading}
                </h2>

                <div className="flex flex-col gap-1">
                  {item.links.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`rounded-lg px-4 py-2 text-sm transition-colors font-aino ${
                          isActive
                            ? "text-white border-b-2 border-gray-500"
                            : "text-zinc-300 hover:bg-green-900 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          }

          const isActive = pathname === item.href;

          return (
            <Link
              key={index}
              href={item.href}
              className={`block rounded-lg px-4 py-2 text-sm transition-colors font-aino ${
                isActive
                  ? "text-white font-semibold"
                  : "text-zinc-300 hover:bg-green-900 hover:text-white"
              }`}
            >
              {item.name || item.heading}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;