
this is a full reproduction repository for https://github.com/vercel/next.js/issues/7322

## How to reproduce this issue

- Step 1: run the dev server

    ```bash
    git clone https://github.com/ocavue/mui-next-classname-issue.git
    cd mui-next-classname-issue
    yarn install
    yarn dev
    ```

- Step 2: Open the browser and then open the devtools.
- Step 3: Open http://localhost:3000/sign-in . You should see no error in the console.
- Step 4: Open a new browser tab and then open the devtools.
- Step 5: Open http://localhost:3000 in the second tab. You should see no error in the console either.
- Step 6: Go back to the first tab and reload the page. You should see the `Prop className did not match` error message in the console.
- Step 7: If there is still no error message, try to edit `src/views/Workspace.tsx` (for example: add some text inside the `<div>`) and then reload the first tab again.

check `video.mov.zip` in this repo to get my sereen recording.

## Some environment information

- OS: macOS 10.14.6
- browser: Chrome 83.0
- yarn: 1.22.0
- nodejs: v14.3.0
