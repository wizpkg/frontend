import { createConnectedStore } from "undux";
import { Runs } from "../api/Runs";

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

const fakeRuns: Runs = [
  {
    RunID: "1Vs3zupZi8uGfqOExiz3daU0Qdg",
    Configuration: {
      ExpectedData: {
        NumChunks: 1
      },
      ExecutorConfig: {
        MaxWorkers: 0,
        SendDownstream: true,
        DownstreamLocations: [
          {
            Hostname: "localhost:8080",
            ProcID: "noop",
            RunID: "1Vs3zucvtZYm90a9iyTpSnmWtdG"
          },
          {
            Hostname: "localhost:8080",
            ProcID: "noop",
            RunID: "1Vs3ztn5PcP1HsRl24SR2UHebeL"
          },
          {
            Hostname: "localhost:8080",
            ProcID: "noop",
            RunID: "1Vs3zrdzmeahbWePhoWVZ4uVYNx"
          }
        ]
      },
      Processor: {
        test: "test"
      }
    },
    CurrentState: "RUNNING"
  },
  {
    RunID: "1Vs3zrdzmeahbWePhoWVZ4uVYNx",
    Configuration: {
      ExpectedData: {
        NumChunks: 1
      },
      ExecutorConfig: {
        MaxWorkers: 0,
        SendDownstream: true,
        DownstreamLocations: []
      },
      Processor: null
    },
    CurrentState: "CONFIGURED"
  },
  {
    RunID: "1Vs3zucvtZYm90a9iyTpSnmWtdG",
    Configuration: {
      ExpectedData: {
        NumChunks: 1
      },
      ExecutorConfig: {
        MaxWorkers: 0,
        SendDownstream: true,
        DownstreamLocations: [
          {
            Hostname: "localhost:8080",
            ProcID: "noop",
            RunID: "1Vs3ztnLvOxgrAfzH6DzKwQs4DW"
          }
        ]
      },
      Processor: null
    },
    CurrentState: "CONFIGURED"
  },
  {
    RunID: "1Vs3ztn5PcP1HsRl24SR2UHebeL",
    Configuration: {
      ExpectedData: {
        NumChunks: 1
      },
      ExecutorConfig: {
        MaxWorkers: 0,
        SendDownstream: true,
        DownstreamLocations: []
      },
      Processor: null
    },
    CurrentState: "CONFIGURED"
  },
  {
    RunID: "1Vs3ztnLvOxgrAfzH6DzKwQs4DW",
    Configuration: {
      ExpectedData: {
        NumChunks: 1
      },
      ExecutorConfig: {
        MaxWorkers: 0,
        SendDownstream: true,
        DownstreamLocations: []
      },
      Processor: null
    },
    CurrentState: "CONFIGURED"
  }
];

// Create a store with an initial value.
// This is only for the processor view
export default createConnectedStore({
  processors: fakePs,
  processor: 0,
  runs: fakeRuns,
  run: 0
});
