export interface GetChatappTemplateMetricResponse {
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A9486641****`
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
         * 模板编码。
         * @example `83837774838*****`
         */
        TemplateCode: string;
        /**
         * 模板语言。
         * @example `en`
         */
        Language: string;
        /**
         * 发送量。
         * @example `10`
         */
        SentCount: number;
        /**
         * 阅读量。
         * @example `3`
         */
        ReadCount: number;
        /**
         * 到达量。
         * @example `6`
         */
        DeliveredCount: number;
        /**
         * 按钮点击统计。
         */
        Cliented: {
            /**
             * 按钮类型。
             * @example `quick_reply_button`
             */
            Type: string;
            /**
             * 按钮文本。
             * @example `回复`
             */
            ButtonContent: string;
            /**
             * 点击次数。
             * @example `20`
             */
            Count: number;
        }[];
        /**
         * 指标统计开始时间。
         * @example `1673919240001`
         */
        Start: number;
        /**
         * 指标统计结束时间。
         * @example `1668138331485`
         */
        End: number;
    }[];
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
}
