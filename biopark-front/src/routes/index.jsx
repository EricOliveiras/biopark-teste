import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ShowApartments from '../pages/ShowApartments';
import ApartmentInfo from '../pages/ApartmentInfo';
import RegisterBuilding from '../pages/RegisterBuilding';
import RegisterApartment from '../pages/RegisterApartment';
import AvailablesApartments from '../pages/AvailablesApartments';
import RentApartment from '../pages/RentApartment';

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/building/:id" element={<ShowApartments />} />
          <Route exact path="/building/store" element={<RegisterBuilding />} />
          <Route exact path="/apartment/:id" element={<ApartmentInfo />} />
          <Route exact path="/apartment/store" element={<RegisterApartment />} />
          <Route exact path="/apartments" element={<AvailablesApartments />} />
          <Route exact path="/apartment/rentapartment/:id" element={<RentApartment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
