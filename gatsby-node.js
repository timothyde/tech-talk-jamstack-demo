const path = require(`path`)
const pokemons = require(path.resolve(`src/pokemons.json`))

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  pokemons.forEach(pokemon => {
    const node = {
      name: pokemon.name,
      type: pokemon.type,
      id: createNodeId(`Pokemon-${pokemon.name}`),
      internal: {
        type: "Pokemon",
        contentDigest: createContentDigest(pokemon),
      },
    }
    actions.createNode(node)
  })
}
