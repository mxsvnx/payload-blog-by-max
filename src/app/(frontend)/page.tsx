import { getPosts } from '../(payload)/api/getPosts'

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <main className="blog">
      <h1>Блог</h1>

      <div className="post-list">
        {posts.map((post: any) => (
          <article key={post.id} className="post-card">
            <h2 className="post-title">{post.title}</h2>

            {post.image?.url && (
              <img
                src={post.image.url}
                alt={post.title}
                className="post-image"
              />
            )}

            <div className="post-content">
              {/* Если content — обычная строка */}
              {typeof post.content === 'string' && <p>{post.content}</p>}

              {/* Если content — richText в виде lexical */}
              {typeof post.content === 'object' &&
                post.content?.root?.children?.map((block: any, i: number) => (
                  <p key={i}>
                    {block.children?.map((child: any) => child.text).join('')}
                  </p>
                ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
