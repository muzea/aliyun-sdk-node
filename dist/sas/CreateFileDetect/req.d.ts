export interface CreateFileDetectRequest {
    /**
     * 访问源的IP地址。
     * @example `115.213.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 需要检测的文件类型。取值：
     * -  **0**：不确定的文件类型
     * @example `0`
     */
    "Type": number;
    /**
     * 文件标识，仅支持文件md5。
     * @example `0a212417e65c26ff133cfff28f6c****`
     */
    "HashKey": string;
    /**
     * 文件在OSS Bucket中的存储key。如果通过DownloadUrl推送文件检测，此参数可不填。此参数通过[CreateFileDetectUploadUrl](~~CreateFileDetectUploadUrl~~)接口获取。
     * @example `1/2022/06/23/15/41/16559701077444693a0c6-33b2-4cc2-a99f-9f38b8b8****`
     */
    "OssKey"?: string;
    /**
     * 文件下载链接。支持传入文件下载链接（公网URL）直接触发文件检测，不需要提前上传文件。
     * @example `https://xxxxxxxx.oss-cn-hangzhou-1.aliyuncs.com/xxxxx/xxxxxxxxxxxxxx?Expires=1671448125&OSSAccessKeyId=xxx`
     */
    "DownloadUrl"?: string;
    /**
     * 是否识别压缩包并解压。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    "Decompress"?: boolean;
    /**
     * 当压缩包内，存在多个层级的压缩包嵌套时，解压的最大解压层数。最大取值为5。
     * @example `1`
     */
    "DecompressMaxLayer"?: number;
    /**
     * 解压的最大文件数。最大取值为1000。
     * @example `100`
     */
    "DecompressMaxFileCount"?: number;
}
