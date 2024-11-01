const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('./Card')
const { db } = require('../db/config')

// define in global scope
let card

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  card = await Card.create({ name:'Mojo', mojo:7, stamina: 5, imgUrl:'Test'})
})

// clear db after tests
afterAll(async () => await db.close())

describe('Card', () => {
  it('has an id', async () => {
    expect(card).toHaveProperty('id')
  })

  it('has a name of Mojo', async () => {
    expect(card.name).toBe('Mojo')
  })

  it('has a mojo of 7', async()=>{
    expect(card.mojo).toBe(7)
  })

  it('has a stamina of 5', async ()=>{
    expect(card.stamina).toBe(5)
  })

  it('has an img url property', async ()=>{
    expect(card).toHaveProperty('imgUrl')
  })
})