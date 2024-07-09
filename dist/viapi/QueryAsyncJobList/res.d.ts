export interface QueryAsyncJobListResponse {
    /**
     * 请求ID。
     * @example `43A0AEB6-45F4-4138-8E89-E1A5D63200E3`
     */
    RequestId: string;
    /**
     * 返回的数据内容。
     */
    Data: {
        /**
         * 当前页。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 每页查询条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 总页数。
         * @example `2`
         */
        TotalPage: number;
        /**
         * 总条数。
         * @example `22`
         */
        TotalRecord: number;
        /**
         * 查询结果。
         */
        Result: {
            /**
             * 任务提交人ID。
             * @example `1850343078585779`
             */
            CallerParentId: string;
            /**
             * 任务结束时间。
             * @example `2023-01-04 17:18:44`
             */
            EndTime: string;
            /**
             * 任务创建时间。
             * @example `2023-01-04 17:18:44`
             */
            GmtCreate: string;
            /**
             * 异步任务ID。
             * @example `49E2CC28-ED1D-4CC5-854D-7D0AE2B20976`
             */
            JobId: string;
            /**
             * 能力接口名，详情可参考[能力开通](~~465341~~)中的能力接口名。
             * @example `DetectVideoShot`
             */
            PopApiName: string;
            /**
             * 类目英文名，详情可参考[能力开通](~~465341~~)中的类目英文名。
             * @example `videorecog`
             */
            PopProduct: string;
            /**
             * 任务开始时间。
             * @example `2023-01-04 17:18:44`
             */
            StartTime: string;
            /**
             * 异步任务状态。包括：
             * - QUEUING：任务排队中
             * - PROCESSING：异步处理中
             * - PROCESS_SUCCESS：处理成功
             * - PROCESS_FAILED：处理失败
             * - TIMEOUT_FAILED：任务超时未处理完成
             * - LIMIT_RETRY_FAILED：超过最大重试次数
             * @example `PROCESS_SUCCESS`
             */
            Status: string;
        }[];
    };
    /**
     * 异步任务错误码信息。
     * @example `paramsIllegal`
     */
    Message: string;
    /**
     * 是否调用成功，取值true或false。
     * @example `true`
     */
    Success: boolean;
    /**
     * 异步任务错误码。
     * @example `InvalidParameter`
     */
    HttpCode: string;
}
