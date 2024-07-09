export interface RetouchSkinRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * 图片格式要求：
     * - 图像格式：JPEG、JPG、PNG。
     * - 图像大小：不超过6 MB。
     * - 图像分辨率：大于128×128像素，小于等于5000×5000像素，最长边小于等于5000像素。
     * - 图像内容：包含1～10个人像，且皮肤占比明显的照片。
     * - URL地址中不能包含中文字符。
     * > 图像内容：当图像分辨率超过最大限制时，请先将图片进行缩放，调整图片大小，具体请参见[图片缩放](~~44688~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/RetouchSkin/RetouchSkin3.png`
     */
    "ImageURL": string;
    /**
     * 磨皮力度。取值范围为\[0,1.5]，默认为1.0。数值越大皮肤纹理越不明显。
     * @example `1.0`
     */
    "RetouchDegree"?: number;
    /**
     * 美白力度。取值范围为\[0,1.5]，默认为1.0。数值越大皮肤越白。
     * @example `1.0`
     */
    "WhiteningDegree"?: number;
}
