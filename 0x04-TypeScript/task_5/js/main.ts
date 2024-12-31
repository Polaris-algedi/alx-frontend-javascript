// Define the MajorCredits interface with the credits property and a unique brand
interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits'; // Brand to uniquely identify MajorCredits
}

// Define the MinorCredits interface with the credits property and a unique brand
interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits'; // Brand to uniquely identify MinorCredits
}

// Function to sum two MajorCredits and return a MajorCredits value
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MajorCredits' // Ensure the returned type is of MajorCredits type
  };
}

// Function to sum two MinorCredits and return a MinorCredits value
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MinorCredits' // Ensure the returned type is of MinorCredits type
  };
}
