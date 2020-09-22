import { useMemo } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ elementId, children }) => {
  const rootElement = useMemo(() => document.getElementById(elementId), [elementId]);

  return ReactDOM.createPortal(children, rootElement);
}

export default Portal;
