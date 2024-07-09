export interface ChangeImageSizeRequest {
    /**
     * 目标宽度，单位：像素，取值范围[10, 5000]
     * @example `1920`
     */
    "Width": number;
    /**
     * 目标高度，单位：像素，取值范围[10, 5000]
     * @example `1080`
     */
    "Height": number;
    /**
     * 原始图片URL地址，必须是公网可以正常访问的地址，最长8K。
     * @example `http://a.b.cn/1.jpg`
     */
    "Url": string;
}
