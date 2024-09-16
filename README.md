# Research experiments

This repository contains the code for the research experiments for the KTH course II2202 Research Methodology and Scientific Writing.

## Running the experiments
We use devbox for reproducible environments. To run the experiments we highly recommend using devbox. To install devbox read the official documentation [here](https://www.jetify.com/devbox/docs/installing_devbox/).
All the servers can be started by running the following command in the root of the repository:
```bash
devbox run go # for go server
devbox run py # for python server
devbox run js # for node server
```

If you also want to run the benchmarking you can run the following command:
```bash
devbox shell # to enter the devbox shell
wrk -t12 -c400 -d30s http://127.0.0.1:<port>
```
