import { getCpuChoiceRPS, getWinnerRPS } from './helpers'

describe("RockPaperScissor helpers", () => {
  test("Should get random cpu choice", () => {
    const choice = getCpuChoiceRPS();
    expect(['rock', 'paper', 'scissor']).toContain(choice);
  })

  test("Should return player as winner", () => {
    const winner = getWinnerRPS('scissor', 'paper')
    expect(winner).toEqual('player')
  })

  test("Should return cpu as winner", () => {
    const winner = getWinnerRPS('scissor', 'rock')
    expect(winner).toEqual('cpu')
  })

  test("Should return draw", () => {
    const winner = getWinnerRPS('paper', 'paper')
    expect(winner).toEqual('draw')
  })
})
