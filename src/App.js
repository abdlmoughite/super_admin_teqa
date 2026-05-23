import './App.css';
import Navbar from './comp/Navbar';
import Saidbar from './comp/Saidbar';
import { Routes, Route } from 'react-router-dom';
import AnalyticsDashboard from './page/Analytics/AnalyticsDashboard';
import AnalyticsCharts from './page/Analytics/AnalyticsCharts';
import StoresDashboard from './page/Stores/StoresDashboard';
import StoreAdd from './page/Stores/StoreAdd';
import StoresList from './page/Stores/StoresList';
import StoreScoring from './page/Stores/StoreScoring';
import UsersDashboard from './page/Users/UsersDashboard';
import UserAdd from './page/Users/UserAdd';
import UsersList from './page/Users/UsersList';
import UsersHistory from './page/Users/UsersHistory';
import PlansDashboard from './page/Plans/PlansDashboard';
import PlanAdd from './page/Plans/PlanAdd';
import PlansList from './page/Plans/PlansList';
import PlansHistory from './page/Plans/PlansHistory';
import ClientsDashboard from './page/Clients/ClientsDashboard.jsx';
import ClientAdd from './page/Clients/ClientAdd.jsx';
import ClientsList from './page/Clients/ClientsList.jsx';
import ClientScoring from './page/Clients/ClientScoring.jsx';
import ConfirmationDashboard from './page/Confirmation_Agencies/ConfirmationDashboard';
import ConfirmationAdd from './page/Confirmation_Agencies/ConfirmationAdd';
import ConfirmationList from './page/Confirmation_Agencies/ConfirmationList';
import ConfirmationScoring from './page/Confirmation_Agencies/ConfirmationScoring';
import IntegrationDashboard from './page/Integrations/IntegrationDashboard.jsx';
import IntegrationAdd from './page/Integrations/IntegrationAdd.jsx';
import IntegrationList from './page/Integrations/IntegrationList.jsx';
import LivraisonDashboard from './page/Livraison/LivraisonDashboard.jsx';
import LivraisonAdd from './page/Livraison/LivraisonAdd.jsx';
import LivraisonList from './page/Livraison/LivraisonList.jsx';
import { Navigate } from 'react-router-dom';


import PrivateRoute from './router/PrivateRoute';


const App = () => {
  return (
   
            <PrivateRoute>

    <div className="min-h-screen bg-slate-50">
      
      <Navbar />

      <div className="flex">
        <Saidbar />

        <main className="flex-1 ml-72 p-4 md:p-6">
          <Routes>

            {/* Redirect root */}
            <Route path="/" element={<Navigate to="/analytics/dashboard" replace />} />

            {/* ================= Analytics ================= */}
            <Route path="/analytics/dashboard" element={<AnalyticsDashboard />} />
            <Route path="/analytics/charts" element={<AnalyticsCharts />} />

            {/* ================= Stores ================= */}
            <Route path="/stores/dashboard" element={<StoresDashboard />} />
            <Route path="/stores/add" element={<StoreAdd />} />
            <Route path="/stores/list" element={<StoresList />} />
            <Route path="/stores/scoring" element={<StoreScoring />} />

            {/* ================= Users ================= */}
            <Route path="/users/dashboard" element={<UsersDashboard />} />
            <Route path="/users/add" element={<UserAdd />} />
            <Route path="/users/list" element={<UsersList />} />
            <Route path="/users/history" element={<UsersHistory />} />

            {/* ================= Plans ================= */}
            <Route path="/plans/dashboard" element={<PlansDashboard />} />
            <Route path="/plans/add" element={<PlanAdd />} />
            <Route path="/plans/list" element={<PlansList />} />
            <Route path="/plans/history" element={<PlansHistory />} />

            {/* ================= Clients ================= */}
            <Route path="/clients/dashboard" element={<ClientsDashboard />} />
            <Route path="/clients/add" element={<ClientAdd />} />
            <Route path="/clients/list" element={<ClientsList />} />
            <Route path="/clients/scoring" element={<ClientScoring />} />

            {/* ================= Confirmation Agencies ================= */}
            <Route path="/confirmation/dashboard" element={<ConfirmationDashboard />} />
            <Route path="/confirmation/add" element={<ConfirmationAdd />} />
            <Route path="/confirmation/list" element={<ConfirmationList />} />
            <Route path="/confirmation/scoring" element={<ConfirmationScoring />} />

            {/* ================= Integrations ================= */}
            <Route path="/integrations/dashboard" element={<IntegrationDashboard />} />
            <Route path="/integrations/add" element={<IntegrationAdd />} />
            <Route path="/integrations/list" element={<IntegrationList />} />

            {/* ================= Livraison ================= */}
            <Route path="/livraison/dashboard" element={<LivraisonDashboard />} />
            <Route path="/livraison/add" element={<LivraisonAdd />} />
            <Route path="/livraison/list" element={<LivraisonList />} />

            {/* 404 */}
            <Route path="*" element={<div className="p-6">404 - Page Not Found</div>} />

          </Routes>
        </main>
      </div>
    </div>
        </PrivateRoute>

  );
};

export default App;