import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { colorPalette } from './types';
import { Palette } from 'lucide-react';
import { Post } from './types';
const postsDir = path.join(process.cwd(), "posts");


export function getPostSlugs() {
  return fs.readdirSync(postsDir);
}

export function getPostBySlug(slug: string) {
    const filenames = fs.readdirSync(postsDir);

  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDir, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const index = filenames.findIndex((f)=>f.replace(/\.mdx?$/,"")===realSlug)
  return { slug: realSlug, content, frontmatter: data, palette: colorPalette[index % colorPalette.length] };
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

// export function getPaletteForSlug(slug) {
//   // This creates a simple, consistent "hash" from the slug string
//   const hash = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
//   // Use the hash to pick a color from the palettes array
//   const index = hash % colorPalette.length;
//   return colorPalette[index];
// }

//replaced
export function getAllPosts(): Post[] {
  const filenames = fs.readdirSync(postsDir);
 
  return filenames.map((filename, i) => { 
    const slug = filename.replace(/\.mdx?$/, '');
    const filePath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);
    
    return {
      slug,
      ...data,
      palette: colorPalette[i%colorPalette.length]
    } as Post;
  });

}


// make function to get all tags by slug and store them in an array for later manipulation