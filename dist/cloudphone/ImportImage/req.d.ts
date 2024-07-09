export interface ImportImageRequest {
    /**
     * 导入至云手机地域
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 镜像格式。取值范围：
     * - RAW
     * - QCOW2
     * @example `RAW`
     */
    "Format"?: string;
    /**
     * 镜像文件所在的OSS Bucket。
     * @example `myOssBucket`
     */
    "OssBucket": string;
    /**
     * 镜像文件所在的OSS Object的文件名称（key）。
     * @example `myOssKeyForImage.raw`
     */
    "OssObject": string;
    /**
     * 镜像名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * @example `myCustomImage`
     */
    "ImageName"?: string;
    /**
     * 镜像的描述信息。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * @example `testDescription`
     */
    "Description"?: string;
    /**
     * 操作系统发行版。取值范围：
     * - Android 9.0
     * @example `Android 9.0`
     */
    "Platform"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    "ClientToken"?: string;
}
