import { Frog, Button } from 'frog';
import { devtools } from 'frog/dev';
import { serveStatic } from 'frog/serve-static';

export const app = new Frog({
  title: 'FC Follow Check',
  initialState: {
    count: 0,
  },
});

app.frame('/', (c) => {
  return c.res({
    image: (
      <div style={{ color: 'white', display: 'flex', fontSize: 60, background: 'black', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        Welcome to Web3
      </div>
    ),
    intents: [
      <Button value="check">Check Follow Status</Button>,
      <Button.Link href="https://warpcast.com">Warpcast</Button.Link>,
    ],
  });
});

devtools(app, { serveStatic });
export default app;
