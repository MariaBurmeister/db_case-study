import { FunctionComponent, ReactNode } from "react";
import './Page.scss';

export const Page: FunctionComponent<{
  title: string | ReactNode;
  children: ReactNode;
}> = ({ title, children }) => {

  return (
      <main id="main" className="page">
        <header className="page_header">
            <h1 className="h1">{title}</h1>
        </header>
          {children}
      </main>
  );
};


