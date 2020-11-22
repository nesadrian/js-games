import { getCpuChoice } from './helpers'

describe("RockPaperScissor helpers", () => {
  test("Should get random cpu choice", () => {
    const choice = getCpuChoice();
    expect(['rock', 'paper', 'scissor']).toContain(choice);
  })
})
