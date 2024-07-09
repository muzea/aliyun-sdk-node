export interface ListExchangesResponse {
    /**
     * 请求ID。
     * @example `FEBA5E0C-50D0-4FA6-A794-4901E5465***`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 最大结果集。
         * @example `1`
         */
        MaxResults: number;
        /**
         * 表示当前调用返回的`NextToken`值，根据返回值判断是否有下一个查询开始的Token。
         * - 如果`NextToken`为空，则表示没有下一个查询开始的Token。
         * - 如果`NextToken`有返回值，则表示该返回值即为下一个查询开始的Token。
         * @example `AAAANDQBYW1xcC1jbi03cHAybXdiY3AwMGEBdmhvc3QBAXNkZndhYWJhATE2NDkzMTM4OTU5NDIB4o3z1pPwWzk4aYuiRffi8R6-****`
         */
        NextToken: string;
        /**
         * Exchange。
         */
        Exchanges: {
            /**
             * 自动删除状态。
             * @example `false`
             */
            AutoDeleteState: boolean;
            /**
             * Exchange创建的时间戳，单位为毫秒。
             * @example `1580886216000`
             */
            CreateTime: number;
            /**
             * 当前版本不支持此参数。
             * 属性。
             * @example `test`
             */
            Attributes: any;
            /**
             * Vhost名称。
             * @example `test`
             */
            VHostName: string;
            /**
             * Exchange名称。
             * @example `amq.direct`
             */
            Name: string;
            /**
             * Exchange类型。
             * @example `DIRECT`
             */
            ExchangeType: string;
        }[];
    };
}
