import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), "posts");
 const colorPalette = [
    {
      //pink
      bg: 'bg-[#f9e3e9]',
      border: 'border-[#B83555]',
      text: 'text-[#57061a]',
      meta: 'text-[#7a3d4f]',
    },
    //purple
    {
      bg: 'bg-[#f0e3f9]',
      border: 'border-[#6535B8]',
      text: 'text-[#381d62]',
      meta: 'text-[#593d7a]',
    },
    //green
    {
      bg: 'bg-[#e3f9e3]',
      border: 'border-[#35B835]',
      text: 'text-[#1d621d]',
      meta: 'text-[#2e6b2e]',
    },
    //blue
    {
      bg: 'bg-[#e3ebf9]',
      border: 'border-[#3565B8]',
      text: 'text-[#1d3862]',
      meta: 'text-[#3d507a]',
    },
    //yellow
    {
      bg: 'bg-[#f7f5e9]',
      border: 'border-[#B8A135]',
      text: 'text-[#62561d]',
      meta: 'text-[#6c664c]',
    },
  ]

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
//     return fs.readdirSync(postsDir).map(filename => {
//         const filePath = path.join(postsDir, filename)
//         const fileContents = fs.readFileSync(filePath, 'utf-8')
//         const {data} = matter(fileContents)
//         return{
//             slug: filename.replace(/\.mdx?$/, ''),
//             ...data
//         }
//     })
// }

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDir);
  
  return filenames.map((filename, index) => { // 2. Get the `index` here.
    const filePath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);
    
    return {
      slug: filename.replace(/\.mdx?$/, ''),
      ...data,
      // 3. Add the `palette` property using the index.
      palette: colorPalette[index % colorPalette.length]
    };
  });
}

// make function to get all tags by slug and store them in an array for later manipulation