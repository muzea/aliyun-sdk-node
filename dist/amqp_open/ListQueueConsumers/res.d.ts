export interface ListQueueConsumersResponse {
    /**
     * 请求ID。
     * @example `4409B7D5-E4EC-4EB5-804A-385DCDFCD***`
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
         * 表示当前调用返回读取到的位置，空代表数据已经读取完毕。
         * @example `caebacccb2be03f84eb48b699f0a****`
         */
        NextToken: string;
        /**
         * 消费者信息。
         */
        Consumers: {
            /**
             * 消费者标签。
             * @example `sgen-1`
             */
            ConsumerTag: string;
        }[];
    };
}
