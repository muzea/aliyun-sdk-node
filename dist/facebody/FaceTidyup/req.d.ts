export interface FaceTidyupRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * 输入限制：
     * - 图像格式：JPEG、JPG、PNG、BMP。
     * - 图像大小：不超过4 MB。
     * - 图像分辨率：分辨率大于10×10像素，分辨率小于2000x2000像素，最长边小于2000像素。
     * - URL地址中不能包含中文字符。
     * - 图像质量建议：输入图像尽量保持光线充足且均匀，人脸完整较少遮挡，角度\[raw, yaw, pitch]小于60度为佳。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/FaceTidyup/FaceTidyup5.png`
     */
    "ImageURL": string;
    /**
     * 表示美型部位，包括：0（颧骨）、1（削脸）、2（瘦脸）、3（脸长）、4（下巴缩短）、5（下巴拉长）、6（瘦下巴）、7（瘦下颌）、8（大眼）、9（眼角1）、10（眼距）、11（拉宽眼距）、12（眼角2）、13（眼睛高度）、14（瘦鼻）、15（鼻翼）、16（鼻长）、17（鼻头长）、18（唇宽）、19（嘴唇大小）、20（唇高）、21（人中）。
     * @example `0`
     */
    "ShapeType": number;
    /**
     * 美型强度，取值范围0~1。
     * @example `1`
     */
    "Strength": number;
}
