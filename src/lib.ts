import path from "path";

function where(...paths: string[]) {
  const args = [__dirname, "./.."].concat(paths);
  return path.posix.join(...args);
}

const Prefix = {
  doc: "doc",
  dist: "dist",
  src: "src",
};

export { where, Prefix };
