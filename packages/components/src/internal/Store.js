import { createConnectedStore } from "undux";

const fakePs = [
  {
    ProcID: "noop",
    Name: "No Operation Processor",
    Version: "0.1.0"
  },
  {
    ProcID: "git",
    Name: "git Clone Processor",
    Version: "0.1.0"
  },
  {
    ProcID: "get",
    Name: "Go-Getter (Hashicorp) Processor",
    Version: "0.1.0"
  },
  {
    ProcID: "ls",
    Name: "List File Processor",
    Version: "0.1.0"
  }
];

// Create a store with an initial value.
// This is only for the processor view
export default createConnectedStore({
  processors: fakePs,
  processor: 0,
  runs: [],
  run: 0
});
