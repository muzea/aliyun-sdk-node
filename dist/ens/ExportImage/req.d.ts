export interface ExportImageRequest {
    /**
     * 镜像ID。
     * @example `m-5ragaz3s74b7go8ks7jp9****`
     */
    "ImageId": string;
    /**
     * 保存导出镜像的OSS Bucket。
     * @example `whxyl****`
     */
    "OSSBucket": string;
    /**
     * 地域ID。
     * @example `cn-beijing`
     */
    "OSSRegionId": string;
    /**
     * 您的OSS Object的前缀。可以由数字或者字母组成，字符长度为1~30。
     * @example `dataCenter/972****​/`
     */
    "OSSPrefix"?: string;
    /**
     * 授权角色名。
     * @example `AliyunMNSLoggingRole`
     */
    "RoleName"?: string;
}
