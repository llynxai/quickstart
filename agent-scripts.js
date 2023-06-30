import { DelegatorAgent } from "@llynxai/agents";
import axios from "axios";
import fs from "fs/promises";
import PromptSync from "prompt-sync";

const prompt = PromptSync({ sigint: true })


const main = async () => {

  const query = prompt("What would you like for me to schedule for you? ")

  console.log("I will be happy to do that for you!\n")

  // Call the llynx api to get an action plan
  console.log("Getting action plan...")
  const res = await axios.post(
    "https://api.llynx.ai/actions/quickstart",
    { query },
    {
      headers: {
        "x-api-key": "OkiPGfAeKK88cqZlSOzbg6HhZgmlw61eam3aq6P1",
      },
    }
  );

  console.log("Getting agent permissions...")
  const tokenRes = await axios.get(
    "https://api.llynx.ai/tokens",
    {
      headers: {
        "x-api-key": "OkiPGfAeKK88cqZlSOzbg6HhZgmlw61eam3aq6P1",
      },
    }
  );

  const googleRefreshToken = tokenRes.data.tokens.googleRefreshToken


  // Execute action plan using the DelegatorAgent
  const agent = new DelegatorAgent({
    actions: res.data.actions,
    tokens: {
      googleRefreshToken,
    },
    apiKey: "OkiPGfAeKK88cqZlSOzbg6HhZgmlw61eam3aq6P1"
  });

  // Check the outputs after the run is complete
  const { failedSteps, actions, finalResponse } = await agent.run();
  await fs.writeFile("./output.json", JSON.stringify({ failedSteps, actions, finalResponse }));

};

// run main function
main();
