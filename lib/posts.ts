import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), "posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDir);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDir, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: realSlug, content, frontmatter: data };
}


// export function getAllPosts(){
// const slugs = getPostSlugs();
//   const posts = slugs
//     .map((slug) => getPostBySlug(slug))
//     // sort posts by date in descending order
//     .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
//   return posts;
// }

export function getAllPosts(){
    return fs.readdirSync(postsDir).map(filename => {
        const filePath = path.join(postsDir, filename)
        const fileContents = fs.readFileSync(filePath, 'utf-8')
        const {data} = matter(fileContents)
        return{
            slug: filename.replace(/\.mdx?$/, ''),
            ...data
        }
    })
}