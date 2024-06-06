function tellTheJoke() {
  VoiceRSS.speech({
    key: "<API key>",
    src: "Hello, world!",
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}
