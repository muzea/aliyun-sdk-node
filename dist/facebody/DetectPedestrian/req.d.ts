export interface DetectPedestrianRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * 输入限制：
     * - 图像格式：JPEG、JPG、PNG、BMP。
     * - 图像大小：不超过4 MB。
     * - 图像分辨率：分辨率大于32×32， 分辨率小于2000×2000像素，最长边小于2000像素， 人脸占比不低于64×64像素。
     * - URL地址中不能包含中文字符。
     * > 当图像分辨率超过最大限制时，请先将图片进行缩放，调整图片大小，具体请参见[图片缩放](~~44688~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/DetectPedestrian/DetectPedestrian8.jpg`
     */
    "ImageURL": string;
}
