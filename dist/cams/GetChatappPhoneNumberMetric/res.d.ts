export interface GetChatappPhoneNumberMetricResponse {
    /**
     * 请求ID。
     * @example `1612C226-E271-4CFE-9F18-4066D******`
     */
    RequestId: string;
    /**
     * 返回结果**OK**为正常。
     * @example `OK`
     */
    Code: string;
    /**
     * 错误提示信息。
     * @example `None`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 发送量。
         * @example `10`
         */
        SentCount: number;
        /**
         * 到达量。
         * @example `5`
         */
        DeliveredCount: number;
        /**
         * 指标统计开始时间。
         * @example `1669619491000`
         */
        Start: number;
        /**
         * 指标统计结束时间。
         * @example `1667196043904`
         */
        End: number;
        /**
         * 商业号码。
         * @example `861380000****`
         */
        PhoneNumber: string;
        /**
         * 指标粒度。
         * @example `DAILY`
         */
        Granularity: string;
    }[];
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
}
