export interface GenerateHumanSketchStyleRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * 图片格式要求：
     * - 图像格式：JPG、JPEG、PNG。
     * - 图像大小：小于10 MB。
     * - 图像分辨率：大于100×100像素，小于2000×2000像素，最长边小于等于1999像素；人脸占比不低于60×60像素。
     * - 图像质量：支持有单人人脸的清晰正面照，人脸朝向在上下左右45度以内。
     * - URL地址中不能包含中文字符。
     * > 图像内容：当图像分辨率超过最大限制时，请先将图片进行缩放，调整图片大小，具体请参见[图片缩放](~~44688~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/GenerateHumanSketchStyle/GenerateHumanSketchStyle7.png`
     */
    "ImageURL": string;
    /**
     * 图像返回形式。取值如下：
     * - head：大头照（默认）
     * - full：全身照
     * 推荐使用大头照，处理效果更佳。
     * @example `head`
     */
    "ReturnType"?: string;
}
