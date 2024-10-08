"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";

const navigation = [
  { name: "Acceuil", href: "/" },
  { name: "Expertise", href: "#nos-expertises" },
  { name: "FAQs", href: "#faqs" }, // Ancre pour la section FAQs
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 return (
   <header className="bg-white">
     <nav
       aria-label="Global"
       className="flex items-center justify-between p-6 lg:px-8"
     >
       <div className="flex lg:flex-1">
         <Link href="/">
           <motion.p
             className="font-bold text-lg bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]"
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, ease: "easeOut" }}
           >
             Bomunto
           </motion.p>
         </Link>
       </div>
       <div className="hidden lg:flex lg:gap-x-12">
         {navigation.map((item) => (
           <motion.div
             key={item.name}
             whileHover={{ scale: 1.2 }}
             whileTap={{ scale: 0.9 }}
             transition={{
               duration: 0.1,
               type: "spring",
               stiffness: 400,
               damping: 17,
             }}
           >
             <Link href={item.href} scroll={true}>
               <span className="text-sm font-semibold leading-6 text-gray-900">
                 {item.name}
               </span>
             </Link>
           </motion.div>
         ))}
       </div>
       <div className="flex flex-1 items-center justify-end gap-x-6">
         <a
           href="https://meet.brevo.com/bomunto-group"
           className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
         >
           Rendez-vous
         </a>
       </div>
       <div className="flex lg:hidden">
         <button
           type="button"
           onClick={() => setMobileMenuOpen(true)}
           className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
         >
           <span className="sr-only">Open main menu</span>
           <Bars3Icon aria-hidden="true" className="h-6 w-6" />
         </button>
       </div>
     </nav>
     <Dialog
       open={mobileMenuOpen}
       onClose={setMobileMenuOpen}
       className="lg:hidden"
     >
       <div className="fixed inset-0 z-10" />
       <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
         <div className="flex items-center gap-x-6">
           <Link href="/">
             <img
               alt=""
               src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
               className="h-8 w-auto"
             />
           </Link>
           <a
             href="https://meet.brevo.com/bomunto-group"
             className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
           >
             Rendez-vous
           </a>
           <button
             type="button"
             onClick={() => setMobileMenuOpen(false)}
             className="-m-2.5 rounded-md p-2.5 text-gray-700"
           >
             <span className="sr-only">Close menu</span>
             <XMarkIcon aria-hidden="true" className="h-6 w-6" />
           </button>
         </div>
         <div className="mt-6 flow-root">
           <div className="-my-6 divide-y divide-gray-500/10">
             <div className="space-y-2 py-6">
               {navigation.map((item) => (
                 <Link key={item.name} href={item.href} scroll={true}>
                   <span
                     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                     onClick={() => setMobileMenuOpen(false)}
                   >
                     {item.name}
                   </span>
                 </Link>
               ))}
             </div>
             <div className="py-6">
               <a
                 href="https://meet.brevo.com/bomunto-group"
                 className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
               >
                 Rendez-vous
               </a>
             </div>
           </div>
         </div>
       </DialogPanel>
     </Dialog>
   </header>
 );
}
