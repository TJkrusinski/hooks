import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'index.ts',
    useMatchMedia: 'hooks/useMatchMedia.ts'
  }, 
  format: ['esm', 'cjs'], 
  splitting: true,
  clean: true,
  dts: true,
  minify: true,
  sourcemap: true,
  treeshake: true
});