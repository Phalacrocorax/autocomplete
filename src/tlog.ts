const types: Fig.Generator = {
  script:
    "echo learn:feed learn:korean workout:stretch other:work side:raysys side:dothack dev: life: contents: practice:",
  postProcess: (output) => {
    return output.split(" ").map((item) => {
      return {
        name: item.replace("*", "").trim(),
        description: "Contents Type",
      };
    });
  },
};
const times: Fig.Generator = {
  script: 'printf "%\'#.2d:00:00\\n" {0..23}',
  postProcess: (output) => {
    return output.split("\n").map((item) => {
      return {
        name: item.replace("*", "").trim(),
        description: "Start Time",
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
      args: { isOptional: false },
    },
    {
      name: "-s",
      description: "Period",
      args: {
        name: "Contents Type",
        isOptional: false,
        generators: times,
      },
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
