export function createUniqueTitle(prefix = 'API test post') {
  return `${prefix} ${Date.now()}`;
}

export function createPostData(userId = 1) {
  const title = createUniqueTitle();

  return {
    title,
    body: `Body for ${title}`,
    userId
  };
}
