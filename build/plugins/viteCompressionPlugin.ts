import viteCompression from 'vite-plugin-compression';

// gzip压缩生产环境生成 .gz文件
viteCompression({
  verbose: true,
  disable: false,
  threshold: 10240,
  algorithm: 'gzip',
  ext: '.gz',
});