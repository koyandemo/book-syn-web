import { Title } from "solid-start";
import ErrorHandlingPage from '../components/errorhandling/ErrorHandlingPage'

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <ErrorHandlingPage status={404} page="/" />
      {/* <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p> */}
    </main>
  );
}
