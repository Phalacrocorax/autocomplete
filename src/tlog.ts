const types: Fig.Generator = {
  script:
    "echo learn:feed learn:korean workout:stretch other:work side:raysys side:dothack life: contents: practice:",
  postProcess: (output) => {
    return output.split(" ").map((branch) => {
      return {
        name: branch.replace("*", "").trim(),
        description: "Contents Type",
      };
    });
  },
};
const completionSpec: Fig.Spec = {
  name: "tlog",
  description: "",
  subcommands: [
    {
      name: "s",
      description: "Show sumary",
    },
    {
      name: "v",
      description: "View log",
    },
    {
      name: "sum",
      description: "Sum by keyword",
    },
    {
      name: "search",
      description: "Search Keyword",
    },
  ],
  options: [
    {
      name: "-h",
      description: "Show help for tlog",
    },
    {
      name: "-p",
      description: "Period",
    },
    {
      name: "-d",
      description: "Contents",
      args: {
        name: "Contents Type",
        isOptional: false,
        generators: types,
      },
    },
  ],
  // Only uncomment if tlog takes an argument
  // args: {}
};

export default completionSpec;
