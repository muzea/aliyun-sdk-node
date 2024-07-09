export interface SegmentHDBodyRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * 图片格式要求：
     * - 图像格式：JPG、JPEG 、BMP、PNG（透明图）。
     * - 图像大小：不超过40 MB 。
     * - 图像分辨率：大于32×32像素，小于6000×6000像素，最长边小于等于6000像素。
     * - URL地址中不能包含中文字符。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageseg/SegmentHDBody/SegmentHDBody1.jpg`
     */
    "ImageURL": string;
}
