export interface EnhanceFaceRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * 输入限制：
     * - 图像格式：JPEG、JPG、BMP、PNG。
     * - 图像大小：不超过3 MB。
     * - 图像分辨率：大于32×32像素，小于2048×2048像素（最长边小于等于2047像素），人脸占比不低于64×64像素。
     * - URL地址中不能包含中文字符。
     * - 输入图像需包含人脸。
     * - 输入图像中人脸数量不宜超过10个，否则只处理面积最大的前10个人脸。
     * - 输入图像中的人脸不宜存在划痕、破损等，算法暂不支持此类修复。
     * - 输入图像中的人脸质量不宜过于清晰或者分辨率过高，否则可能导致反向降质。
     * > 当图像分辨率超过最大限制时，请先将图片进行缩放，调整图片大小，具体请参见[图片缩放](~~44688~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/EnhanceFace/EnhanceFace1.png`
     */
    "ImageURL": string;
}
