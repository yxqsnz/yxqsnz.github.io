import type { Component } from 'solid-js';
import { Link, useRoutes } from 'solid-app-router';

import { routes } from './routes';

const App: Component = () => {
  const Route = useRoutes(routes);

  return (
    <div>
      <nav class="sticky top-0 z-10 bg-gray-200 text-gray-900 px-4 backdrop-filter backdrop-blur-lg bg-opacity-30">
        <div class="flex items-center justify-between h-16">

          <ul class="flex items-center">
            <li class="py-2 px-4">
              <Link href="/" class="no-underline hover:underline">
                Home
              </Link>
            </li>
            <li class="py-2 px-4">
              <Link href="/about" class="no-underline hover:underline">
                About
              </Link>
            </li>

          </ul>
          <div class='flex'>
            <img decoding='async' src="https://github.com/yxqsnz.png" class="rounded-full h-12 w-12" />
          </div>
        </div>
      </nav>

      <main>
        <Route />
      </main>
    </div>
  );
};

export default App;
