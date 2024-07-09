export interface ExtendImageStyleRequest {
    /**
     * 风格图片URL地址，必须是公网可以正常访问的地址，最长8K。
     * @example `http://vigen-invi-cdn.alibaba.com/aliyun-doc/pop/images/extend-style-style-src.jpeg`
     */
    "StyleUrl": string;
    /**
     * 主图图片URL地址，必须是公网可以正常访问的地址，最长8K。
     * @example `http://vigen-invi-cdn.alibaba.com/aliyun-doc/pop/images/extend-style-major-src.jpeg`
     */
    "MajorUrl": string;
}
