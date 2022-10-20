import './App.css';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddProjectTemplate } from './components/Project/AddProjectTemplate';
import { Provider } from 'react-redux';
import store from './store';
import { UpdateProjectTemplate } from './components/Project/UpdateProjectTemplate';
import { Backlog } from './components/Backlog/Backlog';
import { AddProjectTaskTemplate } from './components/Backlog/ProjectTask/AddProjectTaskTemplate';
import { UpdateProjectTaskTemplaate } from './components/Backlog/ProjectTask/UpdateProjectTaskTemplate';

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='dashboard' element={<Dashboard />}></Route>
            <Route path='createProject' element={<AddProjectTemplate />}></Route>
            <Route path='updateProject' element={<UpdateProjectTemplate />}></Route>
            <Route path='backlog' element={<Backlog />}></Route>
            <Route path='addProjectTask' element={<AddProjectTaskTemplate />}></Route>
            <Route path='updateProjectTask' element={<UpdateProjectTaskTemplaate />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
