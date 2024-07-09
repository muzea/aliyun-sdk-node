export interface FaceMakeupRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * 输入限制：
     * - 图像格式：PNG、JPG、JPEG、BMP、TIFF、WEBP。
     * - 图像大小：不超过4 MB。
     * - 图像分辨率：最大分辨率不超过2000×2000像素，最长边小于2000像素，建议为1080×1920像素。
     * - URL地址中不能包含中文字符。
     * - 图像质量建议：对于光线充足且均匀条件下的大部分肤质人像图像效果较佳，不适用于包含比较严重色斑、痤疮或低曝等场景的图像。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/FaceMakeup/FaceMakeup8.png`
     */
    "ImageURL": string;
    /**
     * 美妆类型，当前支持whole（整妆）。
     * @example `whole`
     */
    "MakeupType": string;
    /**
     * 美妆使用的风格，具体包括：0（whole）、1（基础妆）、2（少女妆）、3（活力妆）、4（优雅妆）、5（魅惑妆）、6（梅子妆）。
     * @example `0`
     */
    "ResourceType": string;
    /**
     * 美妆强度，取值范围0～1。
     * @example `1`
     */
    "Strength": number;
}
