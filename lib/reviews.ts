import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { degrees, ReviewFrontmatter, Review } from './types';

// variables
const reviewsDir = path.join(process.cwd(), "contents/reviews");

// functions for reviews
export function getReviewSlugs() {
  return fs.readdirSync(reviewsDir);
}

export function getReviewBySlug(slug: string) {
  const filenames = fs.readdirSync(reviewsDir);
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(reviewsDir, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const index = filenames.findIndex((f)=>f.replace(/\.mdx?$/,"")===realSlug)
  return { slug: realSlug, content, frontmatter: data as ReviewFrontmatter, degree: degrees[index % degrees.length] };
}

export function getAllReviews(): Review[] {
  const filenames = fs.readdirSync(reviewsDir);
 
  return filenames.map((filename, i) => { 
    const slug = filename.replace(/\.mdx?$/, '');
    const filePath = path.join(reviewsDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);
    
    return {
      slug,
      ...data,
      degree: degrees[i%degrees.length]
    } as Review;
  });

}