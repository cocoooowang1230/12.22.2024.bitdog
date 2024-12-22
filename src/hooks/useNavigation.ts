import { useNavigate } from 'react-router-dom';

export const useAppNavigation = () => {
  const navigate = useNavigate();

  return {
    goToMission: (id: number) => navigate(`/mission/${id}`),
    goToHome: () => navigate('/'),
    goToMyTokens: () => navigate('/my-tokens'),
    goToProfile: () => navigate('/profile'),
    goToInterestSurvey: () => navigate('/interest-survey'),
    goBack: () => navigate(-1),
  };
};

export default useAppNavigation;