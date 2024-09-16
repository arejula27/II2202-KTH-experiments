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
devbox run wrk <port>
```
Where `<port>` is the port of the server you want to benchmark.
- Go server runs on port `1323`
- Python server runs on port `1324`
- Node server runs on port `1325`


## Results
This results are obtained by running the benchmarking tool wrk with the following command:
```bash
wrk -t12 -c400 -d30s http://localhost:<port>
```
Which means that we are using 12 threads, 400 connections and running the test for 30 seconds.

| Server | Total requests | Latency   | Request/s |
|--------|----------------|-----------|-----------|
| Go     | 12 401 882     | 1.21 ms   | 34.59     |
| Python | 104 351        | 116.38 ms | 291.71    |
| Node   | 592 960        | 27.19 ms  | 1.65k     |
