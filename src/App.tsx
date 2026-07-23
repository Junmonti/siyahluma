import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Layout } from '@/components/Layout';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Plans from '@/pages/Plans';
import Services from '@/pages/Services';
import Decoration from '@/pages/Decoration';
import Catering from '@/pages/Catering';
import Apply from '@/pages/Apply';
import Branches from '@/pages/Branches';
import Contact from '@/pages/Contact';

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/plans" component={Plans} />
        <Route path="/services" component={Services} />
        <Route path="/decoration" component={Decoration} />
        <Route path="/catering" component={Catering} />
        <Route path="/apply" component={Apply} />
        <Route path="/branches" component={Branches} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
