export interface ListLegacyQueueEventLogsResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `1A5A8998-41F9-5F85-BFCF-EB2B6E376812`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据。
     */
    Data: {
        /**
         * 分页序号，范围1-1000。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小，范围1-1000。
         * @example `100`
         */
        PageSize: number;
        /**
         * 总数。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 队列事件日志列表。
         */
        List: {
            /**
             * 队列名称。
             * @example `skillgroup@ccc-test`
             */
            Vq: string;
            /**
             * 统计日期。
             * @example `2021-12-03T10:15:30`
             */
            StatisticDate: string;
            /**
             * 队列时长，单位秒。
             * @example `10`
             */
            QueueTime: number;
            /**
             * 主叫
             * @example `8012****`
             */
            Ani: string;
            /**
             * 被叫。
             * @example `1312211****`
             */
            Dnis: string;
            /**
             * 挂机原因。
             * @example `正常`
             */
            Cause: string;
            /**
             * 应答时长，单位秒。
             * @example `15`
             */
            AnswerTime: number;
            /**
             * 坐席ID。
             * @example `agent@ccc-test`
             */
            AnswerPhone: string;
            /**
             * 通话ID。
             * @example `456328****`
             */
            Acid: string;
            /**
             * 租户ID。
             * @example `acc3733`
             */
            TenantId: string;
            /**
             * 主键
             * @example `109160`
             */
            Id: number;
        }[];
    };
}
