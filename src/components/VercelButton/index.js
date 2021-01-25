import { ButtonContainer } from './styles';

const VercelButton = () => {
  const deployUrl = 'https://vercel.com/new/git/external?repository-url=';
  const repository = 'https%3A%2F%2Fgithub.com%2Fjrgarciadev%2Fdev-cover';
  const variables = `&env=NEXT_PUBLIC_USERNAME`;
  const projectName = '&project-name=my-awesome-portfolio';
  return (
    <ButtonContainer>
      <a
        rel="noreferrer"
        target="_blank"
        href={`${deployUrl}${repository}${variables}${projectName}`}
      >
        <img src="https://vercel.com/button" alt="Deploy with Vercel" />
      </a>
    </ButtonContainer>
  );
};

export default VercelButton;
