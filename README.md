[![Built with Devbox](https://www.jetify.com/img/devbox/shield_galaxy.svg)](https://www.jetify.com/devbox/docs/contributor-quickstart/)
# KTH II2202 Research Methodology and Scientific Writing experiments
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
devbox run single <port> # no concurrent connections
devbox run concurrent <port> # concurrent connections
```
Where `<port>` is the port of the server you want to benchmark.
- Go server runs on port `1323`
- Python server runs on port `1325`
- Node server runs on port `1324`


## Results
This results are obtained by running the benchmarking tool wrk with the following command:
```bash
devbox run concurrent <port>
```
Which means that we are using 12 threads, 400 connections and running the test for 30 seconds.

| **Server** | **Total requests** | **Latency** | **Request/s** |
|------------|--------------------|-------------|---------------|
| Go         | 13,861,072          | 1.51 ms     | 461,113.55    |
| Python     | 55,105              | 221.43 ms   | 156.43        |
| Node       | 546,475             | 29.87 ms    | 18,194.19     |
