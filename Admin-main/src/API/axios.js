import axios from "axios";

const instance = axios.create({
  baseURL: "http://acharya-placement-dev.herokuapp.com/api/",
  headers: {
    Authorization:
      "Bearer " +
      "eyJhbGciOiJSUzI1NiIsImtpZCI6ImYyNGYzMTQ4MTk3ZWNlYTUyOTE3YzNmMTgzOGFiNWQ0ODg3ZWEwNzYiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiYWRtaW4xIiwicm9sZXMiOlsiYWRtaW4iXSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3BsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1ZCI6InBsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1dGhfdGltZSI6MTY0NDM0MzIyNCwidXNlcl9pZCI6IlFtQ0VZdUpXUm1lN3BFcVM1TThkaU83MzZsYzIiLCJzdWIiOiJRbUNFWXVKV1JtZTdwRXFTNU04ZGlPNzM2bGMyIiwiaWF0IjoxNjQ0MzQzMjI0LCJleHAiOjE2NDQzNDY4MjQsImVtYWlsIjoiYWRtaW4xQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.VAUPuF2u1w9EuCi4c0q7pFFlQT3W4XXV7Vk8R39BEh1f-OY3zQ2jtqKwgtAZ7ROW9PndL6wsfEeIu8c4WWRZ0gNK6a9-vs4MvFKdqRAcK3bw1STQDL4griBD7xif0YNFDjDyZ_fv9XRbZyUS9AY5jOwql0yZJ6dz-aHvFr3r41ryQOxn-xH60mvvcslkQVNK59JBzqB2I30VhSl_XkOBgHJiq4sZp69RnUd-YFc8K21N4tgjdZ6zNdU4eiIv4UvxZ1Dwzanbi3ZlJTDzV54cr_m5aGM4YE9DfMInXfYfFsyPGNyGT-oqIVkXykwIb8EJWuwHpu1AkgCGEz8ErDKvFA",
  },
});

export default instance;
