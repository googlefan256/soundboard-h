import minifyHtml from "@minify-html/node";
import fs from "node:fs/promises";

async function minifyFile(f: string, of: string) {
    const input = await Bun.file(f).arrayBuffer();
    console.log(`Input size: ${input.byteLength}`);
    const output = minifyHtml.minify(Buffer.from(input), {
        minify_css: true,
        minify_js: true,
    });
    console.log(`Output size: ${output.length}`);
    await Bun.write(of, output);
}

await fs.mkdir("./dist", { recursive: true, })
await fs.cp("./src/assets", "./dist/assets", { recursive: true, errorOnExist: false });

await minifyFile("./src/index.html", "./dist/index.html");