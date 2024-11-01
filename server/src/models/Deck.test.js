const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('./Deck')
const { db } = require('../db/config')

// define in global scope
let deck

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  deck = await Deck.create({ name:'Mojo Monsters', xp:0})
})

// clear db after tests
afterAll(async () => await db.close())

describe('Deck', () => {
  it('has an id', async () => {
    expect(deck).toHaveProperty('id')
  })

  it('has a name of Mojo Monsters', async () => {
    expect(deck.name).toBe('Mojo Monsters')
  })

  it('has an xp of 0', async()=>{
    expect(deck.xp).toBe(0)
  })
})