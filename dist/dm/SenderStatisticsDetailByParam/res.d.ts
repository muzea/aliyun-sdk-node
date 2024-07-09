export interface SenderStatisticsDetailByParamResponse {
    /**
     * 分页使用。如果还有更多结果，下次请求将该返回值设置到请求中的NextStart
     * @example `90f0243616#203#a***@example.net-1658817689#a***@example.net.247141122178`
     */
    NextStart: string;
    /**
     * 请求ID
     * @example `B5AB8EBB-EE64-4BB2-B085-B92CC5DEDC41`
     */
    RequestId: string;
    data: {
        /**
         * 详细记录
         */
        mailDetail: {
            /**
             * 投递状态
             * @example `0`
             */
            Status: number;
            /**
             * 更新时间
             * @example `2021-04-28T17:11Z`
             */
            LastUpdateTime: string;
            /**
             * 投递详情信息
             * @example `250 Send Mail OK`
             */
            Message: string;
            /**
             * 收信地址
             * @example `b***@example.net`
             */
            ToAddress: string;
            /**
             * UTC格式的更新时间
             * @example `1619601108`
             */
            UtcLastUpdateTime: string;
            /**
             * 发信地址
             * @example `s***@example.net`
             */
            AccountName: string;
            /**
             * 邮件主题
             * @example `test subject`
             */
            Subject: string;
            ErrorClassification: string;
        }[];
    };
}
