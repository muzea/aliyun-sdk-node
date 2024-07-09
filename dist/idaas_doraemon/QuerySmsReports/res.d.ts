export interface QuerySmsReportsResponse {
    /**
     * 请求ID
     * @example `4581B16-xxxxx`
     */
    RequestId: string;
    /**
     * 回执数量
     * @example `15`
     */
    TotalElements: number;
    /**
     * 查询报表数据的返回结果
     */
    SmsReports: {
        /**
         * 任务编号
         * @example `3514`
         */
        Tid: string;
        /**
         * 手机号
         * @example `156xxxxxxxx`
         */
        Mobile: string;
        /**
         * 错误码
         * @example `0`
         */
        Code: string;
        /**
         * 短信状态
         * @example `DELIVRD`
         */
        Stat: string;
        /**
         * 扩展号
         * @example `"d36xxxxx3573772f159f616ebJ8KGPBg7Hr::appId::123456::Bird"`
         */
        Sn: string;
        /**
         * 租户ID
         * @example `d36a370f33f037233573772f15xxxxxx`
         */
        TenantId: string;
        /**
         * 应用ID
         * @example `appid`
         */
        AppId: string;
        /**
         * 事件ID
         * @example `event_xxxx`
         */
        EventId: string;
        /**
         * 回执时间
         * @example `20220823171446`
         */
        Time: string;
        ChargedCount: number;
    }[];
}
