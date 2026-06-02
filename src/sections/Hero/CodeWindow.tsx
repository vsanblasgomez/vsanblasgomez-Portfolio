export function CodeWindow() {
  return (
    <div className="code-window">
      <div className="code-header">
        <span className="code-dot" data-color="red" />
        <span className="code-dot" data-color="amber" />
        <span className="code-dot" data-color="green" />
        <span className="code-title">victor.ts</span>
      </div>
      <pre className="code-body">
        <code>
          <span className="tk-key">const</span> <span className="tk-var">victor</span>
          {'\n  '}<span className="tk-key">=</span> {'{'}
          {'\n    '}<span className="tk-prop">role</span>: <span className="tk-str">"Front-End Developer"</span>,
          {'\n    '}<span className="tk-prop">location</span>: <span className="tk-str">"Valencia, ES"</span>,
          {'\n    '}<span className="tk-prop">stack</span>: [<span className="tk-str">"React"</span>, <span className="tk-str">"Flutter"</span>, <span className="tk-str">"TypeScript"</span>],
          {'\n    '}<span className="tk-prop">available</span>: <span className="tk-bool">true</span>,
          {'\n    '}<span className="tk-prop">email</span>: <span className="tk-str">"vsanblasgomez@gmail.com"</span>,
          {'\n  '}{'}'}<span className="tk-cursor">▍</span>
        </code>
      </pre>
    </div>
  );
}
