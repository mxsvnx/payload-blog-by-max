export async function getPosts() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  
  try {
    const res = await fetch(`${baseUrl}/api/posts?depth=1`);

    if (!res.ok) {
      console.error(`Fetch error: ${res.status} ${res.statusText}`);
      return [];
    }

    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return [];
  }
}
