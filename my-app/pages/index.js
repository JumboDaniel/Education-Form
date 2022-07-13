import Head from "next/head";
import { useAppContext } from "../context/state";
import { useRouter } from 'next/router'

export default function Home() {
  const { name, setName } = useAppContext();
  const router = useRouter();
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hi there!, Welcome to your education showcase</h1>

      <form className="user-container">
        <h1>Type your name and click "Enter" to begin</h1>
        <input required onChange={(e) => setName(e.target.value)} />
        <button type="submit" onClick={() => router.push('/education')}>Enter</button>
      </form>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .user-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1em;
        }
        .user-container input {
          height: 2.3rem;
          width: 100%;
        }
        .user-container button {
          height: 2.3rem;
          width: 25%;
          font-size: 1em;
          font-weight: 400;
        }
        h1 {
          font-size: 1.5em;
          font-weight: 400;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
 
      `}</style>
    </div>
  );
}
