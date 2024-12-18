import React from 'react'
import { Facebook, Github, Linkedin, Twitch, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
function Footer  ()  {
  return (
    <footer className="bg-[#0D1117] border-t border-[#21262D] py-6 px-4">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <span className="text-sm text-[#7D8590]">© 2024 Pine, Inc.</span>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="#" className="text-sm text-[#7D8590] hover:text-[#A3A9B1] transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-sm text-[#7D8590] hover:text-[#A3A9B1] transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-[#7D8590] hover:text-[#A3A9B1] transition-colors">
              Sitemap
            </Link>
            <Link href="#" className="text-sm text-[#7D8590] hover:text-[#A3A9B1] transition-colors">
              What is Pine?
            </Link>
            <Link href="#" className="text-sm text-[#7D8590] hover:text-[#A3A9B1] transition-colors">
              Manage cookies
            </Link>
            <Link href="#" className="text-sm text-[#7D8590] hover:text-[#A3A9B1] transition-colors">
              Do not share my personal information
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-6">
          <Link href="#" className="text-[#7D8590] hover:text-[#A3A9B1] transition-colors">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-[#7D8590] hover:text-[#A3A9B1] transition-colors">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-[#7D8590] hover:text-[#A3A9B1] transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="#" className="text-[#7D8590] hover:text-[#A3A9B1] transition-colors">
            <Youtube className="h-5 w-5" />
            <span className="sr-only">YouTube</span>
          </Link>
          <Link href="#" className="text-[#7D8590] hover:text-[#A3A9B1] transition-colors">
            <Twitch className="h-5 w-5" />
            <span className="sr-only">Twitch</span>
          </Link>
          <Link href="#" className="text-[#7D8590] hover:text-[#A3A9B1] transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer