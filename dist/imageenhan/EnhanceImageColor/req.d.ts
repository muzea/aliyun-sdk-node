export interface EnhanceImageColorRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * 输入限制：
     * - 图像格式：JPG、PNG、BMP。
     * - 图像大小：小于3 MB。
     * - 图像分辨率：大于64×64像素，小于3840×2160像素，最短边小于2160像素，最长边小于3840像素。
     * - URL地址不能包含中文字符。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/EnhanceImageColor/EnhanceImageColor1.jpg`
     */
    "ImageURL": string;
    /**
     * 输出的图片格式。可选png和jpg。
     * @example `png`
     */
    "OutputFormat": string;
    /**
     * 调色模式。包括LogC、Rec709和ln17_256。
     * - LogC：适用于灰片（低对比度raw图）输入，大幅度调整图像色彩观感，使其恢复SDR域的色彩质感。
     * - Rec709：适用于一般条件拍摄的图像，适当提升图像亮度、饱和度等，调整幅度较为保守。
     * - ln17_256：适用于一般条件拍摄的图像，大幅度调整图像亮度、饱和度、对比度，提升色彩质感。
     * @example `LogC`
     */
    "Mode": string;
}
