export interface LiquifyFaceRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * 图片格式要求：
     * - 图像格式：JPG、JPEG、PNG。
     * - 图像大小：不超过6 MB。
     * - 图像分辨率：大于等于128×128像素，小于等于5000×5000像素，最长边小于等于5000像素。
     * - 图像内容：至少包含1个人脸，最多不超过3个人脸，且人脸占比超过64x64像素。
     * - URL地址中不能包含中文字符。
     * > 图像内容：当图像分辨率超过最大限制时，请先将图片进行缩放，调整图片大小，具体请参见[图片缩放](~~44688~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/LiquifyFace/LiquifyFace1.png`
     */
    "ImageURL": string;
    /**
     * 标准力度。取值范围为\[0,2.0]，默认为1.0。数值越大，瘦脸效果越明显。
     * @example `1.0`
     */
    "SlimDegree"?: number;
}
