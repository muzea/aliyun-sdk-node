export interface QueryInvalidAddressResponse {
    /**
     * 下次请求开始位置
     * @example `2`
     */
    NextStart: string;
    /**
     * 请求ID
     * @example `95A7D497-F8DD-4834-B81E-C1783236E55F`
     */
    RequestId: string;
    /**
     * 总数
     * @example `3`
     */
    TotalCount: number;
    data: {
        /**
         * 记录
         */
        mailDetail: {
            /**
             * 更新时间
             * @example `2021-04-28T17:11Z`
             */
            LastUpdateTime: string;
            /**
             * 收信地址状态
             * @example `toaddress@test.com`
             */
            ToAddress: string;
            /**
             * UTC格式的更新时间
             * @example `1619601108`
             */
            UtcLastUpdateTime: number;
        }[];
    };
}
