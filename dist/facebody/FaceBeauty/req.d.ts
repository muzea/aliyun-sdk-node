export interface FaceBeautyRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * 输入限制：
     * - 图像格式：JPEG、JPG、PNG、BMP。
     * - 图像大小：不超过4 MB。
     * - 图像分辨率：分辨率大于10×10像素，分辨率小于2000x2000像素，最长边小于2000像素。
     * - URL地址中不能包含中文字符。
     * - 图像质量建议：适用于大部分肤质的人像图像，对于包含比较严重色斑、痤疮或低曝等场景的图像效果一般。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/FaceBeauty/FaceBeauty4.png`
     */
    "ImageURL": string;
    /**
     * 锐化（清晰度）程度，取值范围0~1。越接近1锐化程度越高。
     * @example `1`
     */
    "Sharp": number;
    /**
     * 平滑程度，取值范围0~1。越接近1平滑程度越高。
     * @example `0.1`
     */
    "Smooth": number;
    /**
     * 美白程度，取值范围0~1。越接近1美白程度越高。
     * @example `0.3`
     */
    "White": number;
}
