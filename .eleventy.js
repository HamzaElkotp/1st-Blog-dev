module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css'); // نستدعي باقي الملفات الي مجمعهاش
    eleventyConfig.addPassthroughCopy('./src/assets');

    return {
        dir: {
            input: "src", // لتحديد مكان ملفات الموقع
            output: "public" // لتحديد الملف الي هيتعمل لوكالي ويتحط فيه جميع ملفات الموقع
        }
    };
};