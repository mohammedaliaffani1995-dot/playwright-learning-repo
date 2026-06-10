async function loadMessage() {
  return 'Page loaded';
}

async function main() {
  const message = await loadMessage();

  console.log(message);
}

main();

export {};
