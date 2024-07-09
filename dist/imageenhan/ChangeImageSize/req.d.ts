export interface ChangeImageSizeRequest {
    /**
     * 目标宽度，单位：像素。
     * @example `800`
     */
    "Width": number;
    /**
     * 目标高度，单位：像素。
     * @example `600`
     */
    "Height": number;
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/ChangeImageSize/ChangeImageSize5.jpg`
     */
    "Url": string;
}
