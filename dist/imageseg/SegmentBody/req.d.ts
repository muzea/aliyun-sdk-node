export interface SegmentBodyRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * 图片格式要求：
     * - 图像格式：JPEG、JPG、PNG（不支持8位、16位、64位PNG）、BMP、WEBP。
     * - 图像大小：不超过3 MB。
     * - 图像分辨率：小于2000×2000像素。
     * - URL地址中不能包含中文字符。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageseg/SegmentBody/SegmentBody1.png`
     */
    "ImageURL": string;
    /**
     * 指定返回的图像形式。
     * - 如果设置为`mask`，则返回单通道黑白图。
     * - 如果设置为`crop`，则返回裁剪之后的四通道PNG图（裁掉边缘空白区域）。
     * - 如果设置为`whiteBK`，则返回白底图。
     * - 如果不设置或者设置为其他值，则返回四通道PNG图。
     * @example `mask`
     */
    "ReturnForm"?: string;
}
