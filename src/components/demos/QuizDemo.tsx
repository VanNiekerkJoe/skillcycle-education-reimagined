 import { useState } from "react";
 import { motion, AnimatePresence } from "framer-motion";
 import { FileText, CheckCircle, XCircle, ArrowRight, RotateCcw } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
 
 const quizQuestions = [
   {
     question: "What is the chemical symbol for water?",
     options: ["H2O", "CO2", "NaCl", "O2"],
     correct: 0,
     subject: "Science"
   },
   {
     question: "Who wrote 'Romeo and Juliet'?",
     options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
     correct: 1,
     subject: "English"
   },
   {
     question: "What is the capital of South Africa?",
     options: ["Johannesburg", "Cape Town", "Pretoria", "All three are capitals"],
     correct: 3,
     subject: "Geography"
   },
   {
     question: "What is 15% of 200?",
     options: ["25", "30", "35", "40"],
     correct: 1,
     subject: "Mathematics"
   },
   {
     question: "Which planet is known as the Red Planet?",
     options: ["Venus", "Mars", "Jupiter", "Saturn"],
     correct: 1,
     subject: "Science"
   },
 ];
 
 interface QuizDemoProps {
   open: boolean;
   onOpenChange: (open: boolean) => void;
 }
 
 export const QuizDemo = ({ open, onOpenChange }: QuizDemoProps) => {
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
   const [score, setScore] = useState(0);
   const [showResult, setShowResult] = useState(false);
   const [quizStarted, setQuizStarted] = useState(false);
 
   const handleAnswer = (index: number) => {
     if (selectedAnswer !== null) return;
     setSelectedAnswer(index);
     if (index === quizQuestions[currentQuestion].correct) {
       setScore(prev => prev + 1);
     }
   };
 
   const nextQuestion = () => {
     if (currentQuestion < quizQuestions.length - 1) {
       setCurrentQuestion(prev => prev + 1);
       setSelectedAnswer(null);
     } else {
       setShowResult(true);
     }
   };
 
   const resetQuiz = () => {
     setCurrentQuestion(0);
     setSelectedAnswer(null);
     setScore(0);
     setShowResult(false);
     setQuizStarted(false);
   };
 
   const question = quizQuestions[currentQuestion];
 
   return (
     <Dialog open={open} onOpenChange={onOpenChange}>
       <DialogContent className="max-w-lg">
         <DialogHeader>
           <DialogTitle className="flex items-center gap-2">
             <FileText className="text-primary" size={24} />
             Quick Quiz
           </DialogTitle>
         </DialogHeader>
 
         <AnimatePresence mode="wait">
           {!quizStarted ? (
             <motion.div
               key="start"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="p-6 text-center"
             >
               <div className="text-6xl mb-4">📝</div>
               <h2 className="text-2xl font-bold mb-2">General Knowledge Quiz</h2>
               <p className="text-muted-foreground mb-6">
                 Test your knowledge across different subjects!
               </p>
               <p className="text-sm text-muted-foreground mb-4">
                 {quizQuestions.length} questions • Mixed subjects
               </p>
               <Button onClick={() => setQuizStarted(true)} className="w-full">
                 Start Quiz
               </Button>
             </motion.div>
           ) : showResult ? (
             <motion.div
               key="result"
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0 }}
               className="p-6 text-center"
             >
               <div className="text-6xl mb-4">
                 {score >= quizQuestions.length * 0.8 ? "🏆" : score >= quizQuestions.length * 0.5 ? "👍" : "📚"}
               </div>
               <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
               <div className="text-4xl font-bold text-primary mb-2">
                 {score}/{quizQuestions.length}
               </div>
               <p className="text-muted-foreground mb-6">
                 {score >= quizQuestions.length * 0.8 ? "Excellent work!" : 
                  score >= quizQuestions.length * 0.5 ? "Good effort!" : "Keep practicing!"}
               </p>
               <Button onClick={resetQuiz} className="w-full">
                 <RotateCcw size={16} className="mr-2" />
                 Try Again
               </Button>
             </motion.div>
           ) : (
             <motion.div
               key={currentQuestion}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               className="p-4"
             >
               <div className="flex justify-between items-center mb-4">
                 <span className="text-sm text-muted-foreground">
                   Question {currentQuestion + 1} of {quizQuestions.length}
                 </span>
                 <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">
                   {question.subject}
                 </span>
               </div>
 
               <div className="h-1 bg-muted rounded-full mb-6 overflow-hidden">
                 <div 
                   className="h-full bg-primary transition-all"
                   style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                 />
               </div>
 
               <h3 className="text-lg font-semibold mb-6">{question.question}</h3>
 
               <div className="space-y-3 mb-6">
                 {question.options.map((option, i) => (
                   <motion.button
                     key={i}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.05 }}
                     onClick={() => handleAnswer(i)}
                     disabled={selectedAnswer !== null}
                     className={`w-full p-4 rounded-xl text-left transition-all flex items-center justify-between ${
                       selectedAnswer === null
                         ? "bg-card border border-border hover:border-primary/50"
                         : i === question.correct
                         ? "bg-green-500/20 border border-green-500"
                         : selectedAnswer === i
                         ? "bg-destructive/20 border border-destructive"
                         : "bg-card border border-border opacity-50"
                     }`}
                   >
                     <span>{option}</span>
                     {selectedAnswer !== null && i === question.correct && (
                       <CheckCircle className="text-green-500" size={20} />
                     )}
                     {selectedAnswer === i && i !== question.correct && (
                       <XCircle className="text-destructive" size={20} />
                     )}
                   </motion.button>
                 ))}
               </div>
 
               {selectedAnswer !== null && (
                 <Button onClick={nextQuestion} className="w-full">
                   {currentQuestion < quizQuestions.length - 1 ? (
                     <>
                       Next Question
                       <ArrowRight size={16} className="ml-2" />
                     </>
                   ) : (
                     "See Results"
                   )}
                 </Button>
               )}
             </motion.div>
           )}
         </AnimatePresence>
       </DialogContent>
     </Dialog>
   );
 };