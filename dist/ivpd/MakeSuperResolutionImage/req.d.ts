export interface MakeSuperResolutionImageRequest {
    /**
     * 原始图片URL地址，必须是公网可以正常访问的地址，最长8K。
     * @example `http://vigen-invi-cdn.alibaba.com/aliyun-doc/pop/images/super-resolution-src.png`
     */
    "Url": string;
}
