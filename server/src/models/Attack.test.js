const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('./Attack')
const { db } = require('../db/config')

// define in global scope
let attack

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  attack = await Attack.create({ title:'Mojo Smash', mojoCost:4, staminaCost:5})
})

// clear db after tests
afterAll(async () => await db.close())

describe('Deck', () => {
  it('has an id', async () => {
    expect(attack).toHaveProperty('id')
  })

  it('has a title of Mojo Smash', async () => {
    expect(attack.title).toBe('Mojo Smash')
  })

  it('has a mojo cost of 4', async()=>{
    expect(attack.mojoCost).toBe(4)
  })
  it('has a stamina cost of 5', async()=>{
    expect(attack.staminaCost).toBe(5)
  })
})