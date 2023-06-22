export interface MultipleChoiceQuestion {
  type: 'multiple-choice';
  question: string;
  choices: string[];
  rightAnswer: string;
}

export interface EstimationQuestion {
  type: 'estimation';
  question: string;
  rightAnswer: string;
}

export interface FlagQuestion {
  type: 'flag';
  image: string;
  rightAnswer: string;
}

export interface MovieQuestion {
  type: 'movie';
  description: string;
  genre: string;
  movie: string;
}

export interface LawQuestion {
  type: 'law';
  laws: string[];
  rightAnswer: string;
}

export type Question =
  | MultipleChoiceQuestion
  | EstimationQuestion
  | FlagQuestion
  | MovieQuestion
  | LawQuestion;
