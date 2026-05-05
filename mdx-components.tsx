/**
 * Global MDX component registry.
 * All components exported here are automatically available in every MDX file
 * when rendered via getMdxComponents() — no per-file imports needed.
 *
 * Used by next-mdx-remote: components are passed to <MDXRemote components={...} />.
 * Also compatible with @next/mdx if the project ever migrates.
 */
export { getMdxComponents } from '@/components/mdx'
