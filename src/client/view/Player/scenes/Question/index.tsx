import { Question } from 'types/Question';
import MultipleChoiceQuestionComponent from './MultipleChoiceQuestion';
import EstimationQuestionComponent from './EstimationQuestion';
import FlagQuestionComponent from './FlagQuestion';
import MovieQuestionComponent from './MovieQuestion';
import LawQuestionComponent from './LawQuestion';

const components: Record<Question['type'], React.FC<{ question: any }>> = {
  'multiple-choice': MultipleChoiceQuestionComponent,
  estimation: EstimationQuestionComponent,
  flag: FlagQuestionComponent,
  law: LawQuestionComponent,
  movie: MovieQuestionComponent,
};

const Question: React.FC<{ question: Question }> = ({ question }) => {
  const QuestionComponent = components[question.type];

  return <QuestionComponent question={question} />;
};

export default Question;
