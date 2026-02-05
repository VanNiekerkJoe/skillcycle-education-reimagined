 import { useState, useEffect } from "react";
 import { motion } from "framer-motion";
 import { Gamepad2, Trophy, RotateCcw, Zap } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
 
 interface MathGameProps {
   open: boolean;
   onOpenChange: (open: boolean) => void;
 }
 
 type Operation = "+" | "×";
 
 export const MathGame = ({ open, onOpenChange }: MathGameProps) => {
   const [score, setScore] = useState(0);
   const [streak, setStreak] = useState(0);
   const [highScore, setHighScore] = useState(0);
   const [num1, setNum1] = useState(0);
   const [num2, setNum2] = useState(0);
   const [operation, setOperation] = useState<Operation>("+");
   const [options, setOptions] = useState<number[]>([]);
   const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
   const [gameMode, setGameMode] = useState<"menu" | "playing">("menu");
 
   const generateQuestion = () => {
     const op = Math.random() > 0.5 ? "+" : "×";
     const n1 = Math.floor(Math.random() * (op === "+" ? 50 : 12)) + 1;
     const n2 = Math.floor(Math.random() * (op === "+" ? 50 : 12)) + 1;
     const correctAnswer = op === "+" ? n1 + n2 : n1 * n2;
     
     const wrongAnswers = new Set<number>();
     while (wrongAnswers.size < 3) {
       const offset = Math.floor(Math.random() * 20) - 10;
       const wrong = correctAnswer + offset;
       if (wrong !== correctAnswer && wrong > 0) {
         wrongAnswers.add(wrong);
       }
     }
     
     const allOptions = [correctAnswer, ...Array.from(wrongAnswers)];
     allOptions.sort(() => Math.random() - 0.5);
     
     setNum1(n1);
     setNum2(n2);
     setOperation(op);
     setOptions(allOptions);
     setFeedback(null);
   };
 
   const handleAnswer = (answer: number) => {
     const correctAnswer = operation === "+" ? num1 + num2 : num1 * num2;
     if (answer === correctAnswer) {
       setFeedback("correct");
       setScore(prev => prev + 10 + streak * 2);
       setStreak(prev => prev + 1);
       setTimeout(generateQuestion, 500);
     } else {
       setFeedback("wrong");
       if (score > highScore) setHighScore(score);
       setStreak(0);
     }
   };
 
   const startGame = () => {
     setScore(0);
     setStreak(0);
     setGameMode("playing");
     generateQuestion();
   };
 
   return (
     <Dialog open={open} onOpenChange={onOpenChange}>
       <DialogContent className="max-w-md">
         <DialogHeader>
           <DialogTitle className="flex items-center gap-2">
             <Gamepad2 className="text-primary" size={24} />
             Math Challenge
           </DialogTitle>
         </DialogHeader>
 
         {gameMode === "menu" ? (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="p-6 text-center"
           >
             <div className="text-6xl mb-4">🧮</div>
             <h2 className="text-2xl font-bold mb-2">Quick Math</h2>
             <p className="text-muted-foreground mb-6">
               Test your addition and multiplication skills!
             </p>
             {highScore > 0 && (
               <div className="flex items-center justify-center gap-2 mb-4 text-primary">
                 <Trophy size={20} />
                 <span>High Score: {highScore}</span>
               </div>
             )}
             <Button onClick={startGame} className="w-full">
               Start Game
             </Button>
           </motion.div>
         ) : (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="p-4"
           >
             <div className="flex justify-between items-center mb-6">
               <div className="flex items-center gap-4">
                 <div className="text-sm">
                   <span className="text-muted-foreground">Score: </span>
                   <span className="font-bold text-primary">{score}</span>
                 </div>
                 {streak > 1 && (
                   <div className="flex items-center gap-1 text-sm text-orange-500">
                     <Zap size={14} />
                     <span>{streak}x streak!</span>
                   </div>
                 )}
               </div>
               <Button variant="ghost" size="sm" onClick={() => setGameMode("menu")}>
                 <RotateCcw size={16} />
               </Button>
             </div>
 
             <motion.div
               key={`${num1}-${num2}`}
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className={`p-8 rounded-2xl text-center mb-6 ${
                 feedback === "correct" ? "bg-green-500/20 border-green-500" :
                 feedback === "wrong" ? "bg-destructive/20 border-destructive" :
                 "bg-muted"
               } border`}
             >
               <div className="text-4xl font-bold mb-2">
                 {num1} {operation} {num2} = ?
               </div>
               {feedback && (
                 <div className={`text-sm ${feedback === "correct" ? "text-green-500" : "text-destructive"}`}>
                   {feedback === "correct" ? "Correct! 🎉" : `Wrong! The answer was ${operation === "+" ? num1 + num2 : num1 * num2}`}
                 </div>
               )}
             </motion.div>
 
             <div className="grid grid-cols-2 gap-3">
               {options.map((option, i) => (
                 <motion.button
                   key={i}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.05 }}
                   onClick={() => !feedback && handleAnswer(option)}
                   disabled={!!feedback}
                   className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 text-xl font-bold transition-all hover:scale-105 disabled:opacity-50"
                 >
                   {option}
                 </motion.button>
               ))}
             </div>
 
             {feedback === "wrong" && (
               <Button onClick={startGame} className="w-full mt-4">
                 Try Again
               </Button>
             )}
           </motion.div>
         )}
       </DialogContent>
     </Dialog>
   );
 };