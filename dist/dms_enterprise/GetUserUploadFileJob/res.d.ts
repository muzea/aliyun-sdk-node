export interface GetUserUploadFileJobResponse {
    /**
     * 请求ID。
     * @example `BDEFE9F2-B3B4-42D0-83AE-ECF9FC067DCD`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 上传附件任务详情。
     */
    UploadFileJobDetail: {
        /**
         * 上传附件任务JobKey。
         * @example `65254a4c1614235217749100e`
         */
        JobKey: string;
        /**
         * 文件名。
         * @example `test.sql`
         */
        FileName: string;
        /**
         * 文件大小，单位为字节。
         * @example `2968269`
         */
        FileSize: number;
        /**
         * 文件上传的使用目的，取值与说明如下：
         * - **datacorrect**：数据变更工单
         * - **order_info_attachment**：工单附件
         * - **big-file**：批量数据导入
         * - **sqlreview**：SQL审核
         * @example `datacorrect`
         */
        FileSource: string;
        /**
         * 上传附件任务类型，取值：
         * - **URL**
         * - **OSS**
         * @example `URL`
         */
        UploadType: string;
        /**
         * 上传附件URL链接。
         * > 当**UploadType**参数为**URL**时显示。
         * @example `http://xxxx/test.sql`
         */
        UploadURL: string;
        /**
         * 上传附件OSS信息。
         * > 当**UploadType**参数为**OSS**时显示。
         */
        UploadOSSParam: {
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
         * 已上传的大小，单位为字节。
         * @example `2968269`
         */
        UploadedSize: number;
        /**
         * 上传附件任务状态，取值和说明如下：
         * - **INIT**：初始化状态
         * - **PENDING**：等待任务抓取
         * - **BE_SCHEDULED**：待调度
         * - **FAIL**：执行失败
         * - **SUCCESS**：执行成功
         * - **RUNNING**：正在执行
         * @example `SUCCESS`
         */
        JobStatus: string;
        /**
         * 任务状态描述。
         * @example `success`
         */
        JobStatusDesc: string;
        /**
         * 上传附件成功后返回的附件Key，可在创建工单时使用。
         * @example `upload_3c7edea3-e4c3-4403-857d-737043036f69_test.sql`
         */
        AttachmentKey: string;
    };
}
