"use client"

import { NavBar } from "@/components/ui/tubelight-navbar"
import { Briefcase, GraduationCap, FolderOpen, BookOpen, Wrench } from "lucide-react"

export function TopNavigation() {
  const navItems = [
    { name: "Skills", url: "#skills", icon: Wrench },
    { name: "Experience", url: "#experience", icon: Briefcase },
    { name: "Education", url: "#education", icon: GraduationCap },
    { name: "Projects", url: "#projects", icon: FolderOpen },
    { name: "Papers", url: "#research-papers", icon: BookOpen },
  ]

  return <NavBar items={navItems} />
}