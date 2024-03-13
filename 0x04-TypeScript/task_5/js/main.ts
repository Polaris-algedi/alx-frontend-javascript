// Define MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: string;
}

// Define MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: string;
}

// Define sumMajorCredits function
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits: number = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: subject1.brand }; // Assuming the brand is from the first subject
}

// Define sumMinorCredits function
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits: number = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: subject1.brand }; // Assuming the brand is from the first subject
}
