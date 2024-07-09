export interface CreateUploadFileJobRequest {
    /**
     * 上传附件的使用目的，取值说明如下：
     * - **datacorrect**：数据变更工单。
     * - **order_info_attachment**：工单附件。
     * - **big-file**：批量数据导入。
     * - **sqlreview**：SQL审核。
     * @example `datacorrect`
     */
    "FileSource": string;
    /**
     * 文件名称。
     * > 文件名称需要以txt、sql结尾。例如test.txt、test.sql。
     * @example `test.txt`
     */
    "FileName": string;
    /**
     * 上传附件URL链接，此处链接仅支持HTTP和HTTPS链接。
     * > 您可以将文件（Object）上传至存储空间（Bucket）后，获取文件的分享URL，更多信息，请参见[分享文件](~~195674~~)。
     * @example `https://XXX.oss-cn-hangzhou.aliyuncs.com/test.txt`
     */
    "UploadURL": string;
    /**
     * 租户ID。
     * > 您可以通过调用[GetUserActiveTenant](~~198073~~)接口获取该参数。
     * @example `3***`
     */
    "Tid"?: number;
}
