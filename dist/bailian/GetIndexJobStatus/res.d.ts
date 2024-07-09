export interface GetIndexJobStatusResponse {
    /**
     * 接口返回的状态码
     * @example `200`
     */
    Status: string;
    /**
     * 接口调用是否成功：
     * true：成功
     * false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息，有错误信息时返回该值
     * @example `User not authorized to operate on the specified resource.`
     */
    Message: string;
    /**
     * 错误状态码
     * @example `Index.Forbidden`
     */
    Code: string;
    /**
     * 接口返回的业务字段
     */
    Data: {
        /**
         * 作业任务ID
         * @example `66122af12a4e45ddae6bd6c845556647`
         */
        JobId: string;
        /**
         * 总任务状态
         * @example `PENDING`
         */
        Status: string;
        /**
         * 文档列表
         */
        Documents: {
            /**
             * 文档ID
             * @example `file_9a65732555b54d5ea10796ca5742ba22_XXXXXXXX`
             */
            DocId: string;
            /**
             * 文档名称
             * @example `标题8ir`
             */
            DocName: string;
            /**
             * 文档处理状态
             * @example `RUNNING`
             */
            Status: string;
            /**
             * 错误状态码
             * @example `Index.Document.ChunkError`
             */
            Code: string;
            /**
             * 错误信息，有错误信息时返回该值
             * @example `document parse error`
             */
            Message: string;
        }[];
    };
    /**
     * 请求ID
     * @example `17204B98-xxxx-4F9A-8464-2446A84821CA`
     */
    RequestId: string;
}
