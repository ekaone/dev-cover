import { Hero, About, Featured, Projects, Contact } from '@components';
import { StyledMainContainer } from '@common/styles';
import PropTypes from 'prop-types';
import { getLogestString } from '@utils';
import { getUserName } from '@utils/user-mapping';

const PortfolioView = ({ user }) => {
  const userBio = getLogestString([
    user?.devto?.summary,
    user?.github?.bio,
    user?.hashnode?.tagline,
  ]);
  return (
    <StyledMainContainer className="fillHeight">
      <Hero name={getUserName(user)} bio={userBio} />
      {/* <About />
      <Featured />
      <Projects />
      <Contact /> */}
    </StyledMainContainer>
  );
};

PortfolioView.propTypes = {
  user: PropTypes.object,
};

export default PortfolioView;
