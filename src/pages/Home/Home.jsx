import { HomeWrap, HomeTitle, HomeDescription } from './Home.styled';

const Home = () => {
  return (
    <HomeWrap>
      <HomeTitle>PHONEBOOK</HomeTitle>
      <HomeDescription>
        To search and add contacts you need to register or login.
      </HomeDescription>
    </HomeWrap>
  );
};

export default Home;