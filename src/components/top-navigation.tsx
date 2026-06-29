"use client"

import { NavBar } from "@/components/ui/tubelight-navbar"
import { Briefcase, FolderOpen, Wrench, Mail } from "lucide-react"

export function TopNavigation() {
  const navItems = [
    { name: "Experience", url: "#experience", icon: Briefcase },
    { name: "Projects", url: "#projects", icon: FolderOpen },
    { name: "Skills", url: "#skills", icon: Wrench },
    { name: "Contact", url: "#contact", icon: Mail },
  ]

  return <NavBar items={navItems} />
}