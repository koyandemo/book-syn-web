import { Title } from "solid-start";
import ErrorHandlingPage from '../components/errorhandling/ErrorHandlingPage'

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <ErrorHandlingPage status={404} page="/" />
    </main>
  );
}
