export interface EvaluateCertificateQualityRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `https://viapi-doc.oss-cn-shanghai.aliyuncs.com/imagerecog/xxxxx.jpg`
     */
    "ImageURL": string;
    /**
     * 证照类型。
     * - IDCard：身份证。
     * - BusinessLicense：电子执照。
     * @example `BusinessLicense`
     */
    "Type": string;
}
