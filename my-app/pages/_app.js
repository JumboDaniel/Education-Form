import { NameContextProvider } from "../context/state";
import EducationProvider  from "../context/EducationContext";
import '../stylesheet/style.css'
function Application({ Component, pageProps }) {
  return (
    <EducationProvider>
      <NameContextProvider>
        <Component {...pageProps} />
      </NameContextProvider>
    </EducationProvider>
  );
}

export default Application;
