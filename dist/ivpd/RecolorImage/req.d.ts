export interface RecolorImageRequest {
    /**
     * 原始图片URL地址，必须是公网可以正常访问的地址，最长8K。
     * @example `http://vigen-invi-cdn.alibaba.com/aliyun-doc/pop/images/recolor-1-src.png`
     */
    "Url": string;
    /**
     * 拓色模式,默认AUTO,取值范围[AUTO:自动拓色, TEMPLATE:色板拓色, REF_PIC:参考图拓色]
     * @example `AUTO`
     */
    "Mode": string;
    /**
     * 参考图拓色，参考图URL
     * @example `http://vigen-invi-cdn.alibaba.com/aliyun-doc/pop/images/recolor-refurl-src.png`
     */
    "RefUrl"?: string;
    /**
     * 拓展色系数量，取值范围[1, 8], 默认：1
     * @example `3`
     */
    "ColorCount"?: number;
    "ColorTemplate"?: {
        /**
         * 色板拓色,Top主色列表，颜色值定义ARGB,如：0A0B0C，数组大小[1, 7]
         * @example `0A0B0C`
         */
        Color: string;
    }[];
}
