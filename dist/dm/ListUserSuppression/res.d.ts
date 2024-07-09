export interface ListUserSuppressionResponse {
    /**
     * 分页大小
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID
     * @example `1A846D66-5EC7-551B-9687-5BF1963DCFC1`
     */
    RequestId: string;
    /**
     * 页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总数量
     * @example `2`
     */
    TotalCount: number;
    Data: {
        /**
         * 返回的结果。
         */
        UserSuppressions: {
            /**
             * 无效地址编号
             * @example `59511`
             */
            SuppressionId: number;
            /**
             * 邮箱地址或域名
             * @example `test@example.net或example.net`
             */
            Address: string;
            /**
             * 退信最后一次命中时间，时间戳，精确到秒。
             * @example `1715667451`
             */
            LastBounceTime: number;
            /**
             * 创建时间，时间戳，精确到秒。
             * @example `1715667435`
             */
            CreateTime: number;
            /**
             * 录入来源，无效地址类型
             * @example `- system
            - user`
             */
            Type: string;
        }[];
    };
}
