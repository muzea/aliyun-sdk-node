export interface QueryMailAddressByParamResponse {
    /**
     * 每页大小
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID
     * @example `95A7D497-F8DD-4834-B81E-C1783236E55F`
     */
    RequestId: string;
    /**
     * 当前页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总数量
     * @example `2`
     */
    TotalCount: number;
    data: {
        /**
         * 发信地址列表
         */
        mailAddress: {
            /**
             * 发信地址ID
             * @example `12122`
             */
            MailAddressId: string;
            /**
             * 月额度限额
             * @example `300000`
             */
            MonthCount: string;
            /**
             * 账号状态，冻结：1，正常：0。
             * @example `0`
             */
            AccountStatus: string;
            /**
             * 创建时间
             * @example `2019-09-29T13:28Z`
             */
            CreateTime: string;
            /**
             * 回信地址状态
             * @example `0`
             */
            ReplyStatus: string;
            /**
             * 发信类型 batch or trigger
             * @example `batch`
             */
            Sendtype: string;
            /**
             * 月额度
             * @example `20000`
             */
            MonthReqCount: string;
            /**
             * 回信地址
             * @example `112@aliyun.com`
             */
            ReplyAddress: string;
            /**
             * 日额度
             * @example `100`
             */
            DailyReqCount: string;
            /**
             * 日额度限额
             * @example `10000`
             */
            DailyCount: string;
            /**
             * 域名状态，0表示正常，1表示异常。
             * @example `0`
             */
            DomainStatus: string;
            /**
             * 发信地址
             * @example `账户+@+域名`
             */
            AccountName: string;
        }[];
    };
}
