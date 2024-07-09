export interface AddFaceImageTemplateRequest {
    /**
     * 人脸模板的图像地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * 输入限制：
     * - 图像格式：JPG、JPEG、PNG。
     * - 图像大小：不超过20 MB。
     * - 图像分辨率：大于等于128×128像素，小于等于2000×2000像素，最长边小于等于2000像素。
     * - URL地址中不能包含中文字符。
     * - 支持输入多人图像，建议图像中人脸个数不超过5个。
     * @example `https://invi-label.oss-cn-shanghai.aliyuncs.com/label/temp/faceswap/img_facefusion/template/sucai1.jpg`
     */
    "ImageURL": string;
}
