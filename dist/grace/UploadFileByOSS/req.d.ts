export interface UploadFileByOSSRequest {
    /**
     * oss endpoint
     * @example `https://oss-cn-hangzhou.aliyuncs.com`
     */
    "endpoint": string;
    /**
     * ossbucket名字
     * @example `mybucket`
     */
    "bucketName": string;
    /**
     * 对象名称
     * @example `heap.bin`
     */
    "objectName": string;
    /**
     * 文件类型
     * @example `thread_dump`
     */
    "type": string;
    /**
     * 显示名称
     * @example `heap.bin`
     */
    "displayName"?: string;
}
