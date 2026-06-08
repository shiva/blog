---
title: "From Digger to DeepSeek: A Quest for Local Silicon"
categories:
  - technology
tags:
  - AI
  - llm
  - benchmark
  - ollama
  - apple-silicon
  - mlx
  - retro-computing
  - low-level
  - vibe-coding
description: Vibe-coding a 13-model benchmark harness to test the limits of local inference on a 16GB Mac Mini.
date: '2026-06-07T00:17:00+05:30'
---
![Cover Photo](/images/imagine-buddy-bTMTggEt5s4-unsplash.jpg)
Photo by <a href="https://unsplash.com/@imaginebuddy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Imagine Buddy</a> on <a href="https://unsplash.com/photos/a-person-placing-a-block-into-a-pile-of-wooden-blocks-bTMTggEt5s4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

> The bug bytes again;
> Beneath the hood, the hidden
> Sparks begin to run.

---
# From Digger to DeepSeek: A quest for a local AI model

It was June 1988. Ronald Reagan and Mikhail Gorbachev had just wrapped up the Moscow Summit, Steve Jobs was fueling intense industry rumors with his upcoming [NeXT workstation][1], and [Tim Berners-Lee][2] was quietly circulating the first informal notes at CERN for what would become the World Wide Web. On the radio, Michael Jackson was dominating the summer charts as "[Dirty Diana][3]" became his record-breaking fifth consecutive number-one single from *Bad*. Meanwhile, Russia was prepping the launch of its ill-fated [Phobos 1 Mars Orbiter][4], and I was an 8-year-old in Paris getting the bug — the desire to build my own computer. It was June of 1988, a whole summer in Paris!

My family and I were visiting my aunt and uncle. My uncle, the only tech-minded person I knew in the entire world, built an IBM PC/XT clone over a weekend. This was a feat that just blew my little mind! With just a few parts, some soldering, a quick hurried run to the local electronics store for an extra stick of RAM after somewhat smoky start, he had thing running! It had no [Winchester drive][5], just two 5 1/4” floppy drives capable of booting [MS-DOS][6] and exactly one program. By Sunday night, the screen came alive with Donkey Kong, Asteroids, Test Drive, Decathlon, and of course, [Digger][7]. It must have been so annoying to have a little 8-year old who could barely speak peering into the cabinet as he was trying to get it to work. I spent an inordinate amount of time during our stay, attempting to unsuccessfully beat Digger. I left France frustrated yet determined. I was fully aware that I needed a computer of my own to conquer that game. 

Back in India, one of the older boys in my neighbourhood was going away to college, and he put me onto C and [TSRs (Terminate and Stay Resident programs)][8]. He handed me the largest book I had read to that point, full of instructions on how to write a program that could read into other running processes and alter their mapped memory state. I realized that games were just code, storing scores and lives left in specific bytes of RAM. If I could get my hands on a running version, I could write software to beat it. And thus: the bug to build hardware and write software was permanently set.

Here we are, about 38 years later, I feel that same feeling again -- the nagging desire to make it work! Running AI on the cloud is great, but I can't see it work. I can't muck with it. Since I had a Mac Mini sitting around (with only 16GB of RAM), I figured it was time to figure out how to run models locally, and then perhaps I can get around to fiddling with them. A couple of commands later, I had Ollama with Gemma 4 running locally, and GitHub Copilot working through it. I mentioned this over beers earlier tihs week, and they asked whether it was fast enough, and if Gemma 4 was in fact the best I could do. Well, I couldn't let that opportunity pass -- so, I vibe-coded a test harness that runs a few tests across 13 locally installed models that would fit on my Mac Mini.

I tested 13 models:

> ☁  ai-tester.git [main] ollama ls
> NAME                ID              SIZE      MODIFIED
> gemma4:latest       c6eb396dbd59    9.6 GB    2 minutes ago
> phi4:14b            ac896e5b8b34    9.1 GB    4 hours ago
> deepseek-r1:14b     c333b7232bdb    9.0 GB    5 hours ago
> deepseek-r1:7b      755ced02ce7b    4.7 GB    5 hours ago
> qwen2.5-coder:7b    dae161e27b0e    4.7 GB    5 hours ago
> codellama:13b       9f438cb9cd58    7.4 GB    5 hours ago
> gemma2:9b           ff02c3702f32    5.4 GB    5 hours ago
> qwen2.5:7b          845dbda0ea48    4.7 GB    5 hours ago
> mistral:7b          6577803aa9a0    4.4 GB    5 hours ago
> llama3.1:8b         46e0c10c039e    4.9 GB    5 hours ago
> phi3.5:3.8b         61819fb370a3    2.2 GB    5 hours ago
> llama3.2:3b         a80c4f17acd5    2.0 GB    5 hours ago

Here are the results:

![Local LLM Benchmark: Model Scores](/images/local-llm-overall-scores.png)
*Figure 1: The full landscape — Model Scores*

![Local LLM Benchmark Overall Performance Matrix](/images/local-llm-overall-matrix.png)
*Figure 2: The full landscape — Model Quality vs. Generation Speed*

If you want to see more details, visit https://shiva.github.io/ai-tester/. I plan to run this periodically, updating the models and improving the harness as we go!

## A Qualitative Assessment of the models on a Mac Mini
Mucking around with these numbers revealed some unexpected wins, and the stark reality of why we need massive billion-dollar datacenter build-outs to run giant inference workloads. Here is how the Mac Mini silicon actually stacked up:

### The Tiny Giant: Llama 3.2 (3B)
Llama 3.2 is the GOAT—or at least, the best ungulate. It didn't just win on speed; it took **#1 overall in quality at 93%**, outscoring models four times its size. 

Because it’s so small, the whole thing stays comfortably in cache. It clocked a "blistering" **43.9 Tokens Per Second (TPS)** on short prompts and maintained a snappy, sub-550ms Time to First Token (TTFT). For local workflows on constrained hardware, a highly optimized tiny model punches way above its weight class.

### The Sweet Spot: The 7B to 9B Class
If you need raw reasoning power that a 3B model might miss, the sweet spot on this machine is clearly occupied by **Qwen 2.5 (and its Coder variant)**, **Mistral 7B**, and **Gemma 2 (9B)**. All clustered beautifully at **91% overall quality**.

The performance tradeoff is entirely reasonable: you drop down to around **22–23 TPS** for the 7B models, and **18.9 TPS** for Gemma 2. That is still plenty fast for real-time interactive coding. Qwen 2.5-Coder matching the top tier in quality while keeping a 445ms response time makes a compelling argument for being my new daily driver.

### The Gemma 4 Disappointment
As it turns out, that passing question about Gemma 4 was incredibly well-timed. The data shows it absolutely wasn't the best I could do. 

Gemma 4 stumbled hard, landing at **56% overall quality** with a dismal **30% in reasoning**. But the real kicker is the **12.5-second Time to First Token**. A TTFT that high means the model is choking the system, causing massive overhead before it even spits out a single word. It’s a classic case of a model that looks great on paper but falls apart when starved for RAM.

![Time to First Token Latency Comparison](/images/time-to-first-token-bottleneck.png)
*Figure 3: The Latency Wall — Gemma 4 and the larger parameters choking system execution.*

### The 14B Cliff: Memory Throttling in Action
The results show an incredibly sharp performance cliff the moment you cross the 9B parameter mark. **Phi 4 (14B)** managed a decent quality score (85%), but its speed plummeted to **9.9 TPS**. 

It gets worse with **CodeLlama 13B**, which essentially flatlined at **0.3 TPS** and crashed. Swapping to disk absolutely kills performance -- I couldn't even move my mouse when it happened [^1]. The physical reality of the hardware catches up to you, and the experience completely grinds to a halt.

![Tokens Per Second Generation Speed Chart](/images/tps-cliff-dropoff.png)
*Figure 4: The 14B Parameter Performance Dropoff — where unified memory runs out of runway.*

### The DeepSeek R1 Disaster
The absolute casualties of this benchmark run were the **DeepSeek-R1 distillates (7B and 14B)**, scoring a tragic **17% and 13% respectively**, with a literal **0% in reasoning**. 

DeepSeek-R1 relies heavily on its internal thinking tags to process complex reasoning. Because my test harness enforces a strict structure, it likely cut off before the model finished its long, internal monologue, causing it to fail the tests entirely[^2]. Combine that structural mismatch with a massive 12.3-second delay on the 14B version, and it’s clear R1 just cannot breathe in this specific environment.

### The Verdict
The data makes the choice incredibly clean. If I want instantaneous, snappy responses for basic tasks, I'll keep **Llama 3.2:3b** on hand. But for the serious software engineering and mucking around I want to do, **Qwen 2.5-Coder:7b** is the definitive king of this 16GB Mac Mini—offering the perfect intersection of high quality, fast response times, and a footprint that doesn't choke the silicon.

---

There is opportunity to add more metrics and clean up the vibe-coded test harness—there is so much duplication. Apparently, on Apple Silicon, utilizing [oMLX][9] as the framework extracts maximum performance out of the unified memory. That'll have to wait until a free weekend. 

If you are interested, I coded the app using Claude in GitHub Copilot. The repository is public here: https://github.com/shiva/ai-tester.

---
## References
[^1]: **Apple Unified Memory:** A 16GB Mac Mini allocates system memory dynamically between CPU and GPU compute blocks. While this provides massive bandwidth for models that fit entirely within memory (like a 3B or 7B model), crossing into the 13B+ space forces the memory controller to allocate pages via swapping to the system SSD, reducing throughput by orders of magnitude.

[^2]: **The Strict Output Caveat:** The low scores for DeepSeek-R1 highlight a known issue with automated evaluation harnesses. When regex filters or JSON parsers strictly expect a clean response, they frequently strip or crash out on the `<think>` blocks where R1 handles its heavy lifting, completely masking the model's actual capabilities.


[1]: https://www.computerhistory.org/timeline/1988/#102641154c15dfdf0647c2fe6f02271c
[2]: https://en.wikipedia.org/wiki/Tim_Berners-Lee
[3]: https://en.wikipedia.org/wiki/Dirty_Diana
[4]: https://heasarc.gsfc.nasa.gov/docs/heasarc/missions/phobos1.html
[5]: https://www.computerhistory.org/storageengine/winchester-pioneers-key-hdd-technology/
[6]: https://en.wikipedia.org/wiki/MS-DOS
[7]: https://en.wikipedia.org/wiki/Digger_(video_game)
[8]: https://en.wikipedia.org/wiki/Terminate_and_stay_resident_program
[9]: https://omlx.ai/