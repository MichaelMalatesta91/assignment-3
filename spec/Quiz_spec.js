class SafetyQuiz {
    constructor() {
      this.questions = [
        {
          question: "What should you do if you see a fire in the workplace?",
          options: ["A) Run away", "B) Use a fire extinguisher", "C) Call 911", "D) All of the above"],
          correctAnswer: "D",
          explanation: "In case of a fire, you should use a fire extinguisher if safe, call 911, and evacuate if necessary."
        },
        {
          question: "What is the first step in using a fire extinguisher?",
          options: ["A) Pull the pin", "B) Aim at the base of the fire", "C) Squeeze the handle", "D) Sweep side to side"],
          correctAnswer: "A",
          explanation: "The first step is to pull the pin to unlock the extinguisher."
        },
        {
          question: "What should you wear to protect your eyes in a lab?",
          options: ["A) Sunglasses", "B) Safety goggles", "C) Reading glasses", "D) Nothing"],
          correctAnswer: "B",
          explanation: "Safety goggles are designed to protect your eyes from chemical splashes and debris."
        },
        {
          question: "What is the purpose of a safety harness?",
          options: ["A) To look cool", "B) To prevent falls", "C) To carry tools", "D) To keep you warm"],
          correctAnswer: "B",
          explanation: "A safety harness is used to prevent falls when working at heights."
        },
        {
          question: "What should you do before using a ladder?",
          options: ["A) Check for damage", "B) Climb quickly", "C) Ignore it", "D) Use it on uneven ground"],
          correctAnswer: "A",
          explanation: "Always inspect a ladder for damage before use to ensure it's safe."
        },
        {
          question: "What does PPE stand for?",
          options: ["A) Personal Protective Equipment", "B) Pretty Protective Equipment", "C) Personal Professional Equipment", "D) Protective Professional Equipment"],
          correctAnswer: "A",
          explanation: "PPE stands for Personal Protective Equipment, which includes items like gloves, helmets, and goggles."
        },
        {
          question: "What should you do if you spill a chemical on your skin?",
          options: ["A) Ignore it", "B) Rinse with water for 15 minutes", "C) Wipe it off with a cloth", "D) Apply another chemical"],
          correctAnswer: "B",
          explanation: "Rinse the affected area with water for at least 15 minutes to remove the chemical."
        },
        {
          question: "What is the purpose of a safety data sheet (SDS)?",
          options: ["A) To list chemical hazards", "B) To provide recipes", "C) To track attendance", "D) To organize tools"],
          correctAnswer: "A",
          explanation: "An SDS provides information about chemical hazards and safe handling procedures."
        },
        {
          question: "What should you do if you hear a fire alarm?",
          options: ["A) Stay where you are", "B) Evacuate immediately", "C) Investigate the source", "D) Call a friend"],
          correctAnswer: "B",
          explanation: "Always evacuate immediately when you hear a fire alarm."
        },
        {
          question: "What is the best way to lift heavy objects?",
          options: ["A) Bend at the waist", "B) Lift with your back", "C) Use your legs", "D) Pull quickly"],
          correctAnswer: "C",
          explanation: "Use your legs to lift heavy objects to avoid back injuries."
        }
      ];
  
      this.currentQuestionIndex = 0;
      this.stateCur = this.QuizState.WELCOMING;
      this.isDone = false;
    }
  
    QuizState = {
      WELCOMING: () => {
        let aReturn = [];
        aReturn.push("Welcome to the Safety Quiz!");
        aReturn.push("You will be asked 10 safety-related questions. Please answer with the letter of your choice (A, B, C, or D).");
        this.stateCur = this.QuizState.ASK_QUESTION;
        return aReturn;
      },
  
      ASK_QUESTION: () => {
        let aReturn = [];
        const currentQuestion = this.questions[this.currentQuestionIndex];
        aReturn.push(currentQuestion.question);
        aReturn.push(...currentQuestion.options);
        this.stateCur = this.QuizState.CHECK_ANSWER;
        return aReturn;
      },
  
      CHECK_ANSWER: (sInput) => {
        let aReturn = [];
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if (sInput.toUpperCase() === currentQuestion.correctAnswer) {
          aReturn.push("Correct! Well done.");
        } else {
          aReturn.push(`Incorrect. ${currentQuestion.explanation}`);
        }
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.questions.length) {
          this.stateCur = this.QuizState.ASK_QUESTION;
        } else {
          aReturn.push("Quiz complete! Thank you for participating.");
          this.isDone = true;
        }
        return aReturn;
      }
    };
  
    handleInput(sInput) {
      return this.stateCur(sInput);
    }
  
    isDone() {
      return this.isDone;
    }
  }
  
  export { SafetyQuiz };
  