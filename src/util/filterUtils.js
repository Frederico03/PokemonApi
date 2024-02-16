export const filterPokemons = async (queryParams) => {
  const page = parseInt(queryParams.page) || 1;
  const limit = parseInt(queryParams.limit) || 25;

  const { name, type, type2 } = queryParams;

  let query = {};

  if (name) {
    query.name = { $regex: new RegExp(name, 'i') };
  }

  if (type) {
    query.type = { $regex: new RegExp(type, 'i') };
  }

  if (type2) {
    query.type2 = { $regex: new RegExp(type2, 'i') };
  }

  return { query, page, limit };
};