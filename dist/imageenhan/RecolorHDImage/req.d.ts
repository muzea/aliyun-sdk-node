export interface RecolorHDImageRequest {
    /**
     * 待拓色的图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/RecolorHDImage/RecolorHDImage-auto1.jpg`
     */
    "Url": string;
    /**
     * 拓色模式。包括：
     * - AUTO：自动拓色。
     * - TEMPLATE：色板拓色。当**Mode**为TEMPLATE，入参**ColorTemplate.N.Color**传入的Top主色列表至少有2个，这样输出的人脸肤色才会变化。
     * - REF_PIC：参考图拓色。
     * @example `REF_PIC`
     */
    "Mode"?: string;
    /**
     * 拓色时参考图像的URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/RecolorHDImage/RecolorHDImage-REF_PIC6.jpg`
     */
    "RefUrl"?: string;
    /**
     * 拓展色系数量，取值范围1~8。
     * @example `2`
     */
    "ColorCount"?: number;
    /**
     * 拓色程度。取值范围0~1。
     * @example `0.4`
     */
    "Degree": string;
    /**
     * 1
     */
    "ColorTemplate"?: {
        /**
         * Top主色列表，颜色值定义RGB。例如：0A0B0C。数组大小`[1,7]`。
         * @example `3F6A6B`
         */
        Color: string;
    }[];
}
