// JavaScript CodeBlock example
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';

export const CodeBlock = ({ children }) => {
  const code = children?.props?.children.trim();

  const className = children?.props?.className || '';
  const match = className.match(/language-(?<lang>.*)/);
  const language = match?.groups?.lang;

  return (
    <Highlight {...defaultProps} code={code} language={language} theme={vsDark}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
