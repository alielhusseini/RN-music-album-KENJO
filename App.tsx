import { NavStack } from './src/components/navigation/NavStack';
import { MusicContextProvider } from './src/components/providers';

export default function App() {
  return (
    <MusicContextProvider>
      <NavStack />
    </MusicContextProvider>
  );
}
