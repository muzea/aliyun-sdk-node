export interface RecognizeImageColorRequest {
    /**
     * 原始图片URL地址，必须是公网可以正常访问的地址，最长8K。
     * @example `http://vigen-invi-cdn.alibaba.com/aliyun-doc/pop/images/recognizer-image-color-src.png`
     */
    "Url": string;
    /**
     * 期望的色板输出数量，范围 \[1, 7\]
     * @example `3`
     */
    "ColorCount"?: string;
}
