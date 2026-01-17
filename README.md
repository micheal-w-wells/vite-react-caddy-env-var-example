Simple example to demo Caddy replacing VITE_ env vars at run time.

Setup:

```
nvm use 20
npm install
brew install caddy
chmod +x run.sh
```
Note that run.sh is just executing Caddy at the path brew installed for me, using the caddyfile in current dir

How to test:
```
npm run build
./run.sh
```
Open http://localhost/ in browser, you should see the caddy template string printed to screen.
Kill Caddy and run the following:
```
export VITE_ExampleEnvVar="whatever"
./run.sh
```
Open http://localhost/ in browser, you should see "whatever" printed to screen.
This shows that caddy did the replacement on the built files.

How to adapt to your project:
1. Look at vite.config.ts to see how to template env vars for production
2. Use this projects Caddyfile as an example.
3. Make sure all env vars are using VITE_ prefix and you set them in the deployment environment's env vars

