 import { useState } from "react";
 import { motion, AnimatePresence } from "framer-motion";
 import { Video, Play, Clock, X } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
 
 const videos = [
   { id: 1, title: "Introduction to Algebra", subject: "Mathematics", duration: "12:34", thumbnail: "📐" },
   { id: 2, title: "Newton's Laws of Motion", subject: "Physics", duration: "15:20", thumbnail: "🚀" },
   { id: 3, title: "Cell Structure & Function", subject: "Biology", duration: "18:45", thumbnail: "🔬" },
   { id: 4, title: "Essay Writing Techniques", subject: "English", duration: "10:15", thumbnail: "✍️" },
   { id: 5, title: "Climate & Weather Patterns", subject: "Geography", duration: "14:30", thumbnail: "🌤️" },
   { id: 6, title: "World War II Overview", subject: "History", duration: "20:00", thumbnail: "📜" },
   { id: 7, title: "Chemical Reactions", subject: "Chemistry", duration: "16:45", thumbnail: "⚗️" },
   { id: 8, title: "Trigonometry Basics", subject: "Mathematics", duration: "13:20", thumbnail: "📊" },
 ];
 
 interface VideoLibraryProps {
   open: boolean;
   onOpenChange: (open: boolean) => void;
 }
 
 export const VideoLibrary = ({ open, onOpenChange }: VideoLibraryProps) => {
   const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);
   const [isPlaying, setIsPlaying] = useState(false);
 
   return (
     <Dialog open={open} onOpenChange={onOpenChange}>
       <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
         <DialogHeader>
           <DialogTitle className="flex items-center gap-2">
             <Video className="text-primary" size={24} />
             Video Lessons
           </DialogTitle>
         </DialogHeader>
 
         <AnimatePresence mode="wait">
           {!selectedVideo ? (
             <motion.div
               key="library"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4"
             >
               {videos.map((video, i) => (
                 <motion.div
                   key={video.id}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.05 }}
                   onClick={() => setSelectedVideo(video)}
                   className="rounded-xl bg-card border border-border hover:border-primary/50 cursor-pointer transition-all hover:scale-105 overflow-hidden"
                 >
                   <div className="aspect-video bg-muted flex items-center justify-center text-4xl relative group">
                     {video.thumbnail}
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <Play className="text-white" size={32} />
                     </div>
                   </div>
                   <div className="p-3">
                     <h3 className="font-semibold text-xs mb-1 line-clamp-2">{video.title}</h3>
                     <div className="flex items-center gap-2 text-xs text-muted-foreground">
                       <Clock size={12} />
                       {video.duration}
                     </div>
                   </div>
                 </motion.div>
               ))}
             </motion.div>
           ) : (
             <motion.div
               key="player"
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.95 }}
               className="p-4"
             >
               <Button variant="ghost" size="sm" onClick={() => { setSelectedVideo(null); setIsPlaying(false); }} className="mb-4">
                 ← Back to Library
               </Button>
               <div className="rounded-xl overflow-hidden bg-muted">
                 <div 
                   className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center cursor-pointer relative"
                   onClick={() => setIsPlaying(!isPlaying)}
                 >
                   <div className="text-6xl mb-4">{selectedVideo.thumbnail}</div>
                   {!isPlaying && (
                     <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                       <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                         <Play className="text-primary-foreground ml-1" size={32} />
                       </div>
                     </div>
                   )}
                   {isPlaying && (
                     <div className="absolute bottom-4 left-4 right-4">
                       <div className="h-1 bg-muted-foreground/30 rounded-full overflow-hidden">
                         <motion.div 
                           className="h-full bg-primary"
                           initial={{ width: "0%" }}
                           animate={{ width: "100%" }}
                           transition={{ duration: 10 }}
                         />
                       </div>
                     </div>
                   )}
                 </div>
                 <div className="p-4">
                   <h2 className="text-lg font-bold mb-1">{selectedVideo.title}</h2>
                   <p className="text-sm text-muted-foreground">{selectedVideo.subject} • {selectedVideo.duration}</p>
                 </div>
               </div>
             </motion.div>
           )}
         </AnimatePresence>
       </DialogContent>
     </Dialog>
   );
 };