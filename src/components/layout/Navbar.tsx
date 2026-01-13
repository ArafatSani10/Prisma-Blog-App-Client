"use client";

import { useState } from "react";
import { Menu, PenTool, Home, Info, BookOpen, Mail, ChevronRight, } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menu = [
    { title: "Home", url: "/", icon: Home },
    { title: "About", url: "/about", icon: Info },
    { title: "Blogs", url: "/blog", icon: BookOpen },
    { title: "Contact", url: "/contact", icon: Mail },
  ];

  return (
    <section className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur  py-3">
      <div className="container mx-auto px-4">
        {/* --- Desktop Menu --- */}
        <nav className="hidden items-center justify-between lg:flex">

          {/* Left: Logo */}
          <div className="flex-1">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="bg-primary p-2 rounded-xl transition-all group-hover:scale-110">
                <PenTool className="size-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Blog App
              </span>
            </Link>
          </div>

          {/* Center: Navigation - Updated Active Class for Dark/Light Mode */}
          <div className=" flex justify-center items-center gap-1">
            {menu.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.url;
              return (
                <Link
                  key={item.title}
                  href={item.url}
                  className={cn(
                    "group flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary/10 text-primary" // Active state color (Dark/Light friendly)
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className={cn(
                    "size-4 transition-transform group-hover:scale-110",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  )}
                  />
                  {item.title}
                </Link>
              );
            })}
          </div>

          {/* Right: Auth */}
          <div className="flex-1 flex justify-end items-center gap-3">
            <ModeToggle></ModeToggle>
            <Button asChild variant="ghost" className="rounded-full font-semibold">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className="rounded-full px-6 shadow-lg">
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </nav>

        {/* --- Mobile Menu --- */}
        <div className="flex items-center justify-between lg:hidden">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <PenTool className="size-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">Blog App</span>
          </Link>


          <Sheet open={open} onOpenChange={setOpen}>

            <SheetTrigger asChild>

              <Button variant="ghost" size="icon">
                <Menu className="size-6 text-foreground" />
              </Button>


            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] pr-0 bg-background">
              <SheetHeader className="text-left pr-6">
                <SheetTitle className="flex items-center gap-2 mb-6 pb-4 border-b">
                  <PenTool className="size-6 text-primary" />
                  <span className="font-bold text-foreground">Blog App</span>
                </SheetTitle>
              </SheetHeader>



              <div className="flex flex-col h-[calc(100vh-150px)] justify-between pr-6">
                <div className="flex flex-col gap-2">
                  {menu.map((item) => {
                    const isActive = pathname === item.url;
                    return (
                      <Link
                        key={item.title}
                        href={item.url}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between group p-4 rounded-2xl transition-all",
                          isActive ? "bg-primary/10 text-primary" : "hover:bg-muted text-muted-foreground hover:text-foreground"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className={cn("size-5", isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
                          <span className="font-semibold">{item.title}</span>
                        </div>
                        <ChevronRight className={cn("size-4 transition-all", isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100")} />
                      </Link>
                    );
                  })}
                </div>



                <div className="flex flex-col gap-3 pb-6 border-t pt-6">

                  <Button asChild variant="outline" className="h-12 rounded-2xl" onClick={() => setOpen(false)}>
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild className="h-12 rounded-2xl shadow-xl" onClick={() => setOpen(false)}>
                    <Link href="/signup">Sign up</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

export { Navbar };