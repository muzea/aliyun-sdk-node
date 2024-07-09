export interface GenerateSuperResolutionImageRequest {
    /**
     * 输入图片地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `https://viapi-test.oss-cn-shanghai.aliyuncs.com/test/xxx/1025.jpg`
     */
    "ImageUrl": string;
    /**
     * 图像放大倍数。支持1，2，3，4，默认为2。
     * @example `2`
     */
    "Scale"?: number;
    /**
     * 该参数为接口保留字段，默认不需要填写。
     * @example `无`
     */
    "UserData"?: string;
    /**
     * 输出图像的存储格式。取值范围：`png`、`jpg`、`bmp`，默认`png`。
     * @example `jpg`
     */
    "OutputFormat"?: string;
    /**
     * 输出图像的质量因子，值越大质量越高。取值范围\[30,100]，默认95，仅当`outputFormat`为`jpg`时有效。
     * @example `95`
     */
    "OutputQuality"?: number;
}
