import { PATH } from './utils/constants.ts';
import { HomePage } from './components/pages/HomePage/HomePage.tsx';
import { SearchPage } from './components/pages/SearchPage/SearchPage.tsx';
import { FavoritesPage } from './components/pages/FavoritesPage/FavoritesPage.tsx';
import { HistoryPage } from './components/pages/HistoryPage/HistoryPage.tsx';
import { ProtectedRouteElement } from './components/services/ProtectedRouteElement.tsx';
import { Header } from './components/UI/Header/Header.tsx';
import { AuthPage } from './components/pages/AuthPage/AuthPage.tsx';
import { Route, Routes } from 'react-router';
import { Footer } from './components/UI/Footer/Footer.tsx';
import { ArtworkPage } from './components/pages/ArtworkPage/ArtworkPage.tsx';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Routes>
          <Route path={PATH.HOME} element={<HomePage />} />
          <Route path={PATH.SEARCH} element={<SearchPage />} />
          <Route path={`${PATH.SEARCH}/:id`} element={<ArtworkPage />} />
          <Route
            path={PATH.FAVORITES}
            element={<ProtectedRouteElement element={<FavoritesPage />} />}
          />
          <Route path={PATH.HISTORY} element={<HistoryPage />} />
          <Route path={PATH.SIGNIN} element={<AuthPage mode={'singIn'} />} />
          <Route path={PATH.SIGNUP} element={<AuthPage mode={'singUp'} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
