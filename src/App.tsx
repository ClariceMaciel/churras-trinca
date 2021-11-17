import { Router } from './router';
import { FormProvider } from './contexts/UserContext';

const App = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
}

export default App;