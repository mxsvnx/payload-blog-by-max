export async function getPosts() {
  const res = await fetch('http://localhost:3000/api/posts?depth=1');

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data = await res.json();
  return data.docs;
}
