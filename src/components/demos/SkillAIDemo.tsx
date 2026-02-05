 import { useState, useRef, useEffect } from "react";
 import { motion, AnimatePresence } from "framer-motion";
 import { BrainCircuit, Send, User, Sparkles } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
 
 interface Message {
   role: "user" | "assistant";
   content: string;
 }
 
 const aiResponses: Record<string, string> = {
   "hello": "Hello! I'm SkillAI, your personal learning assistant. How can I help you today? I can explain concepts, help with homework, or quiz you on topics!",
   "hi": "Hi there! I'm here to help you learn. What subject would you like to explore today?",
   "math": "Mathematics is fascinating! I can help you with algebra, geometry, trigonometry, or calculus. What specific topic would you like to learn about?",
   "science": "Science is all about understanding how the world works! Whether it's physics, chemistry, or biology, I'm here to help. What interests you?",
   "help": "I can help you with:\n• Explaining difficult concepts\n• Solving math problems step by step\n• Answering questions about any subject\n• Creating practice quizzes\n• Providing study tips\n\nJust ask me anything!",
   "photosynthesis": "Photosynthesis is the process by which plants convert sunlight, water, and carbon dioxide into glucose and oxygen. The equation is:\n\n6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂\n\nWould you like me to explain each step in detail?",
   "pythagorean": "The Pythagorean Theorem states that in a right triangle, a² + b² = c², where c is the hypotenuse. For example, if a = 3 and b = 4, then c = √(9 + 16) = √25 = 5. This is the famous 3-4-5 right triangle!",
   "default": "That's a great question! While I'm a demo version with limited responses, the full SkillAI can help you with any topic from the South African curriculum. Try asking about 'math', 'science', 'photosynthesis', or 'pythagorean theorem'!"
 };
 
 const getAIResponse = (input: string): string => {
   const lowerInput = input.toLowerCase();
   for (const [key, response] of Object.entries(aiResponses)) {
     if (lowerInput.includes(key)) {
       return response;
     }
   }
   return aiResponses.default;
 };
 
 interface SkillAIDemoProps {
   open: boolean;
   onOpenChange: (open: boolean) => void;
 }
 
 export const SkillAIDemo = ({ open, onOpenChange }: SkillAIDemoProps) => {
   const [messages, setMessages] = useState<Message[]>([
     { role: "assistant", content: "👋 Hi! I'm SkillAI, your personal AI tutor. I'm here to help you learn and understand any topic. Try asking me about math, science, or say 'help' to see what I can do!" }
   ]);
   const [input, setInput] = useState("");
   const [isTyping, setIsTyping] = useState(false);
   const messagesEndRef = useRef<HTMLDivElement>(null);
 
   const scrollToBottom = () => {
     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
   };
 
   useEffect(() => {
     scrollToBottom();
   }, [messages]);
 
   const handleSend = async () => {
     if (!input.trim()) return;
     
     const userMessage: Message = { role: "user", content: input };
     setMessages(prev => [...prev, userMessage]);
     setInput("");
     setIsTyping(true);
 
     // Simulate AI thinking
     await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
     
     const response = getAIResponse(input);
     setIsTyping(false);
     setMessages(prev => [...prev, { role: "assistant", content: response }]);
   };
 
   const handleKeyPress = (e: React.KeyboardEvent) => {
     if (e.key === "Enter" && !e.shiftKey) {
       e.preventDefault();
       handleSend();
     }
   };
 
   return (
     <Dialog open={open} onOpenChange={onOpenChange}>
       <DialogContent className="max-w-lg h-[600px] flex flex-col">
         <DialogHeader>
           <DialogTitle className="flex items-center gap-2">
             <BrainCircuit className="text-primary" size={24} />
             SkillAI - Your AI Tutor
             <span className="ml-auto px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">Demo</span>
           </DialogTitle>
         </DialogHeader>
 
         <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-muted/30 rounded-xl">
           <AnimatePresence>
             {messages.map((msg, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
               >
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                   msg.role === "user" ? "bg-primary/20" : "bg-primary"
                 }`}>
                   {msg.role === "user" ? (
                     <User size={16} className="text-primary" />
                   ) : (
                     <Sparkles size={16} className="text-primary-foreground" />
                   )}
                 </div>
                 <div className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${
                   msg.role === "user" 
                     ? "bg-primary text-primary-foreground rounded-br-sm"
                     : "bg-card border border-border rounded-bl-sm"
                 }`}>
                   {msg.content}
                 </div>
               </motion.div>
             ))}
             {isTyping && (
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="flex gap-3"
               >
                 <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                   <Sparkles size={16} className="text-primary-foreground" />
                 </div>
                 <div className="bg-card border border-border rounded-2xl rounded-bl-sm p-3">
                   <div className="flex gap-1">
                     <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                     <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                     <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                   </div>
                 </div>
               </motion.div>
             )}
           </AnimatePresence>
           <div ref={messagesEndRef} />
         </div>
 
         <div className="flex gap-2 pt-4">
           <Input
             value={input}
             onChange={(e) => setInput(e.target.value)}
             onKeyPress={handleKeyPress}
             placeholder="Ask me anything..."
             className="flex-1"
             disabled={isTyping}
           />
           <Button onClick={handleSend} disabled={!input.trim() || isTyping}>
             <Send size={18} />
           </Button>
         </div>
       </DialogContent>
     </Dialog>
   );
 };