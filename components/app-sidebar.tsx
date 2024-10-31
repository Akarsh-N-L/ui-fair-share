"use client";

import * as React from "react";
import {
  BookOpen,
  Command,
  LifeBuoy,
  Send,
  ListPlusIcon,
  HomeIcon,
  ListIcon,
  SplitIcon,
  Contact2Icon,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";

const data = {
  navMain: [
    {
      title: "Daybook",
      url: "/daybook",
      icon: BookOpen,
      items: [
        {
          title: "Home",
          url: "/daybook",
          icon: HomeIcon,
        },
        {
          title: "Add Transaction",
          url: "/daybook/add",
          icon: ListPlusIcon,
        },
        {
          title: "Transactions",
          url: "/daybook/transactions",
          icon: ListIcon,
        },
        {
          title: "Contacts",
          url: "/daybook/contacts",
          icon: Contact2Icon,
        },
      ],
    },
    {
      title: "Split Bill",
      url: "/split",
      icon: SplitIcon,
      items: [
        {
          title: "Home",
          url: "/split",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-bold text-xl">Fair Share</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <Button>
          <LifeBuoy />
          Support
        </Button>
        <Button>
          <Send />
          Feedback
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
