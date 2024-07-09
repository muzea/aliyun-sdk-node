export interface CreateUploadOSSFileJobRequest {
    /**
     * 上传附件的使用目的，取值和说明如下：
     * - **datacorrect**：数据变更工单
     * - **order_info_attachment**：工单附件
     * - **big-file**：批量数据导入
     * - **sqlreview**：SQL审核
     * @example `datacorrect`
     */
    "FileSource": string;
    /**
     * 文件名。
     * > 需要以txt、sql结尾，例如test.txt。
     * @example `test.sql`
     */
    "FileName": string;
    /**
     * OSS信息。
     */
    "UploadTarget": {
        /**
         * OSS的连接地址。
         * @example `http://oss-cn-hangzhou.aliyuncs.com`
         */
        Endpoint: string;
        /**
         * OSS Bucket唯一标识。
         * @example `test_bucket`
         */
        BucketName: string;
        /**
         * OSS对象名称。
         * @example `test.sql`
         */
        ObjectName: string;
    };
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `-1`
     */
    "Tid"?: number;
}
