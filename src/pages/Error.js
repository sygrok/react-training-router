import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Error!</h1>
        <p>Page doen't exists!</p>
      </main>
    </>
  );
}

export default ErrorPage;
