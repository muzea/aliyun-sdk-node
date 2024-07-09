export interface RecolorImageRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/RecolorImage/RecolorImage-REF_PIC1.jpg`
     */
    "Url": string;
    /**
     * 拓色模式。默认为AUTO。
     * - AUTO：自动拓色
     * - TEMPLATE：色板拓色
     * - REF_PIC：参考图拓色
     * @example `TEMPLATE`
     */
    "Mode"?: string;
    /**
     * 参考图拓色。参考图的URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/RecolorImage/RecolorImage-REF_PIC7.jpg`
     */
    "RefUrl"?: string;
    /**
     * 拓展色系数量，取值范围1~8，默认为1。
     * @example `3`
     */
    "ColorCount"?: number;
    /**
     * 1
     */
    "ColorTemplate"?: {
        /**
         * 色板拓色，Top主色列表，颜色值定义ARGB。如：0A0B0C，数组大小`[1, 7]`。
         * @example `056A6B`
         */
        Color: string;
    }[];
}
