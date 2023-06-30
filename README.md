# LLynx Quickstart

This repo intends to show off the capabilities of using LLynx API with agents.  LLynx API and agents are still in alpha and for right now this quickstart app only supports Google Calander.

</br>

## Requirments:

- Node 18 or later
- OpenAI API key
- Google OAuth setup. <a href="https://agents.llynx.ai/agents" target="_blank">Log in here with the email you registered to get a LLynx API key for.</a>

</br>

# Getting started

1. Open your OS terminal or command line
2. Clone the repo
    ```bash
    git clone https://github.com/llynxai/quickstart.git
    ```
3. Navigate to the cloned repo
    ```bash
    cd quickstart
    ```
4. Install the dependencies
    ```bash
    yarn install
    ```

    or

    ```bash
    npm install
    ```
5. Make sure you set the OpenAI api key in the terminal by running this command.
    ```bash
    export OPENAI_API_KEY="YOUR_OPENAI_API_KEY"
    ```
6. Run the script and check the results in your calendar
   ```bash
   node agent-script.js
   ```
