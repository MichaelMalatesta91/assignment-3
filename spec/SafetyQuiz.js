class SafetyQuiz {
  constructor() {
    this.questions = [
      {
        question: "What is the best way to protect your online accounts?",
        options: ["A) Use the same password for all accounts", "B) Use strong, unique passwords and enable two-factor authentication", "C) Share your passwords with friends", "D) Write your passwords on sticky notes"],
        correctAnswer: "B",
        explanation: "Using strong, unique passwords and enabling two-factor authentication significantly enhances account security."
      },
      {
        question: "What is phishing?",
        options: ["A) A type of fishing hobby", "B) A cyber attack that uses fake emails or websites to steal information", "C) A way to catch fish using technology", "D) A type of computer virus"],
        correctAnswer: "B",
        explanation: "Phishing is a cyber attack where attackers use fake emails or websites to trick people into revealing sensitive information."
      },
      {
        question: "What should you do if you receive a suspicious email?",
        options: ["A) Click on the links to investigate", "B) Reply to the email asking for more information", "C) Delete the email and report it as spam", "D) Forward it to all your contacts"],
        correctAnswer: "C",
        explanation: "If you receive a suspicious email, delete it and report it as spam to avoid falling victim to phishing or malware."
      },
      {
        question: "What is a VPN used for?",
        options: ["A) To increase internet speed", "B) To encrypt your internet connection and protect your privacy", "C) To download files faster", "D) To block ads on websites"],
        correctAnswer: "B",
        explanation: "A VPN (Virtual Private Network) encrypts your internet connection, protecting your privacy and securing your data."
      },
      {
        question: "What is malware?",
        options: ["A) A type of hardware", "B) Software designed to harm or exploit devices", "C) A type of antivirus program", "D) A tool for improving computer performance"],
        correctAnswer: "B",
        explanation: "Malware is malicious software designed to harm, exploit, or otherwise compromise devices and data."
      },
      {
        question: "What is the purpose of a firewall?",
        options: ["A) To block all internet traffic", "B) To monitor and control incoming and outgoing network traffic", "C) To speed up your internet connection", "D) To store backups of your data"],
        correctAnswer: "B",
        explanation: "A firewall monitors and controls incoming and outgoing network traffic to protect against unauthorized access."
      },
      {
        question: "What should you do if your computer is infected with ransomware?",
        options: ["A) Pay the ransom immediately", "B) Disconnect from the internet and seek professional help", "C) Ignore it and continue using the computer", "D) Restart the computer multiple times"],
        correctAnswer: "B",
        explanation: "If your computer is infected with ransomware, disconnect from the internet and seek professional help to avoid further damage."
      },
      {
        question: "What is two-factor authentication (2FA)?",
        options: ["A) A method to log in using two different usernames", "B) A security process that requires two forms of verification", "C) A way to use two passwords for one account", "D) A type of malware"],
        correctAnswer: "B",
        explanation: "Two-factor authentication (2FA) is a security process that requires two forms of verification, such as a password and a code sent to your phone."
      },
      {
        question: "What is the most secure way to share sensitive files?",
        options: ["A) Email them as attachments", "B) Use encrypted file-sharing services", "C) Upload them to public cloud storage", "D) Share them via social media"],
        correctAnswer: "B",
        explanation: "Using encrypted file-sharing services ensures that sensitive files are protected during transmission."
      },
      {
        question: "What is a strong password?",
        options: ["A) A password that is easy to remember", "B) A password that includes your name and birthdate", "C) A password that is long, complex, and unique", "D) A password that uses common words"],
        correctAnswer: "C",
        explanation: "A strong password is long, complex, and unique, making it difficult for attackers to guess or crack."
      }
    ];

    this.currentQuestionIndex = 0;
    this.stateCur = this.QuizState.WELCOMING;
    this.isDone = false;
  }

  QuizState = {
    WELCOMING: () => {
      let aReturn = [];
      aReturn.push("Welcome to the Cybersecurity Quiz!");
      aReturn.push("You will be asked 10 cybersecurity-related questions. Please answer with the letter of your choice (A, B, C, or D).");
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
