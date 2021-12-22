const { DateTime } = require("luxon");


module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css'); // نستدعي باقي الملفات الي مجمعهاش
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    return {
        dir: {
            input: "src", // لتحديد مكان ملفات الموقع
            output: "public" // لتحديد الملف الي هيتعمل لوكالي ويتحط فيه جميع ملفات الموقع
        }
    };
};