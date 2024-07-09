export interface UploadFileByURLRequest {
    /**
     * 文件下载链接url
     * @example `https://bucket.oss-cn-hangzhou.aliyuncs.com/file.log`
     */
    "url": string;
    /**
     * 文件类型
     * @example `heap_dump`
     */
    "type": string;
    /**
     * 显示名称
     * @example `atp_stack.log`
     */
    "displayName"?: string;
}
