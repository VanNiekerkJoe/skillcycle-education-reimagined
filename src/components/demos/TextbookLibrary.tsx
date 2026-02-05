 import { useState } from "react";
 import { motion, AnimatePresence } from "framer-motion";
 import { BookOpen, X, ChevronRight } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
 
 const textbooks = [
   { id: 1, title: "Mathematics Grade 10", subject: "Mathematics", chapters: 12, icon: "📐" },
   { id: 2, title: "Physical Science Grade 10", subject: "Science", chapters: 15, icon: "🔬" },
   { id: 3, title: "Life Sciences Grade 10", subject: "Biology", chapters: 10, icon: "🧬" },
   { id: 4, title: "English Home Language", subject: "English", chapters: 8, icon: "📚" },
   { id: 5, title: "Geography Grade 10", subject: "Geography", chapters: 9, icon: "🌍" },
   { id: 6, title: "History Grade 10", subject: "History", chapters: 11, icon: "📜" },
 ];
 
 interface TextbookLibraryProps {
   open: boolean;
   onOpenChange: (open: boolean) => void;
 }
 
 export const TextbookLibrary = ({ open, onOpenChange }: TextbookLibraryProps) => {
   const [selectedBook, setSelectedBook] = useState<typeof textbooks[0] | null>(null);
 
   return (
     <Dialog open={open} onOpenChange={onOpenChange}>
       <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
         <DialogHeader>
           <DialogTitle className="flex items-center gap-2">
             <BookOpen className="text-primary" size={24} />
             Textbook Library
           </DialogTitle>
         </DialogHeader>
 
         <AnimatePresence mode="wait">
           {!selectedBook ? (
             <motion.div
               key="library"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4"
             >
               {textbooks.map((book, i) => (
                 <motion.div
                   key={book.id}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.05 }}
                   onClick={() => setSelectedBook(book)}
                   className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 cursor-pointer transition-all hover:scale-105"
                 >
                   <div className="text-3xl mb-2">{book.icon}</div>
                   <h3 className="font-semibold text-sm mb-1">{book.title}</h3>
                   <p className="text-xs text-muted-foreground">{book.chapters} chapters</p>
                 </motion.div>
               ))}
             </motion.div>
           ) : (
             <motion.div
               key="book"
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               className="p-4"
             >
               <Button variant="ghost" size="sm" onClick={() => setSelectedBook(null)} className="mb-4">
                 ← Back to Library
               </Button>
               <div className="p-6 rounded-xl bg-muted">
                 <div className="text-4xl mb-4">{selectedBook.icon}</div>
                 <h2 className="text-xl font-bold mb-2">{selectedBook.title}</h2>
                 <p className="text-muted-foreground mb-4">{selectedBook.subject} • {selectedBook.chapters} Chapters</p>
                 <div className="space-y-2">
                   {Array.from({ length: Math.min(5, selectedBook.chapters) }, (_, i) => (
                     <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-card border border-border hover:border-primary/50 cursor-pointer">
                       <span className="text-sm">Chapter {i + 1}: Introduction to Topic {i + 1}</span>
                       <ChevronRight size={16} className="text-muted-foreground" />
                     </div>
                   ))}
                   <p className="text-xs text-muted-foreground text-center pt-2">
                     ...and {selectedBook.chapters - 5} more chapters
                   </p>
                 </div>
               </div>
             </motion.div>
           )}
         </AnimatePresence>
       </DialogContent>
     </Dialog>
   );
 };